import {createContext, useContext} from 'react';
import {makeAutoObservable} from 'mobx';
import { get, set, push, update, ref, onValue, child } from "firebase/database";
import { FIREBASE_DB } from "../config/firebase.config";
import {commonStore} from "./CommonStore";

class UserStore {
    user = {};

    constructor() {
        makeAutoObservable(this)
    }

    getUsers = async () => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            return await get(ref(FIREBASE_DB, 'users'));
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    getUser = async (userId) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            return await get(ref(FIREBASE_DB, `users/${userId}`))
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    setUser = async (userId, user) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            return await set(ref(FIREBASE_DB, `users/${userId}`), {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName
            })
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    updateUser = async (user) => {
        try {
            // update user
        } catch (e) {
            console.log('UpdateUserError ------> ', e.message);
        }
    }

    deleteUser = async (user) => {
        try {
            // update user
        } catch (e) {
            console.log('UpdateUserError ------> ', e.message);
        }
    }
}

export const userStore = new UserStore();

export const UserStoreContext = createContext(userStore);

export const useUserStore = () => useContext(UserStoreContext);