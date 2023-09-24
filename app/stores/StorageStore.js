import {createContext, useContext} from 'react';
import {makeAutoObservable} from 'mobx';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {FIREBASE_STORAGE} from "../config/firebase.config";
import * as ImagePicker from "expo-image-picker";
import {commonStore} from "./CommonStore";

class StorageStore {
    imageURL = null;

    constructor() {
        makeAutoObservable(this)
    }

    uploadImageAsync = async (childId, uri) => {
        commonStore.handleCommonStore('isLoading', true)
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        try {
            const imageBlob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function (e) {
                    console.log(e);
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = "blob";
                xhr.open("GET", uri, true);
                xhr.send(null);
            });

            const fileRef = ref(FIREBASE_STORAGE, `/avatars/${childId}`);

            await uploadBytes(fileRef, imageBlob)

            // We're done with the blob, close and release it
            imageBlob.close();

            return  await getDownloadURL(fileRef);
        } catch (e) {
            console.log(e)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    pickImage = async () => {
        commonStore.handleCommonStore('isLoading', true)
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0,
            });

            if (!result.canceled) {
                this.handleChangeStorageStore('imageURL', result?.assets[0]?.uri)
            }
        } catch (e) {
            console.log(e)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    };

    handleChangeStorageStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    }
}

// Instantiate the counter store.
export const storageStore = new StorageStore();
// Create a React Context with the counter store instance.
export const StorageStoreContext = createContext(storageStore);
export const useStorageStore = () => useContext(StorageStoreContext)