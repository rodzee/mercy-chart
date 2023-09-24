import React from 'react';
import {makeAutoObservable} from 'mobx';
import {get, ref, set} from "firebase/database";
import {FIREBASE_DB} from "../config/firebase.config";
import {storageStore} from './StorageStore'
import {commonStore} from "./CommonStore";

class ChildStore {
    children = []

    constructor() {
        makeAutoObservable(this)
    }

    getChildren = async (userId) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            const childrenSnapshot = await get(ref(FIREBASE_DB, 'children'));
            this.handleChangeChildStore('children',
                Object.values(childrenSnapshot.val()).filter(child => {
                    if (child.userId === userId) {
                        return child
                    }
                })
            )
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    getChild = async (userId) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            return await get(ref(FIREBASE_DB, `children/${userId}`))
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    setChild = async (userId, child) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            await storageStore.uploadImageAsync(child.uid, storageStore.imageURL)
                .then(async (avatarURL) => {
                    if (avatarURL) {
                        await set(ref(FIREBASE_DB, `children/${child.uid}/`), {
                            uid: child.uid,
                            name: child.name,
                            userId: userId,
                            avatarURL
                        })
                    }
                })
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    deleteChild = async (child) => {
        try {
            // update child
        } catch (e) {
            console.log('UpdateUserError ------> ', e.message);
        }
    }

    handleChangeChildStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    }
}

// Instantiate the counter store.
const childStore = new ChildStore();
// Create a React Context with the counter store instance.
export const ChildStoreContext = React.createContext(childStore);
export const useChildStore = () => React.useContext(ChildStoreContext)