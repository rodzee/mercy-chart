import {createContext, useContext} from 'react';
import {makeAutoObservable} from 'mobx';
import { get, set, push, update, ref, onValue, child } from "firebase/database";
import { FIREBASE_DB } from "../config/firebase.config";

class UserStore {
    user = {};

    constructor() {
        makeAutoObservable(this)
    }

    getUsers = async () => {
        try {
            return await get(ref(FIREBASE_DB, 'users'));
        } catch (error) {
            console.log('error', error)
        } finally {
            console.log('get users')
        }
    }

    getUser = async (userId) => {
        try {
            return await get(ref(FIREBASE_DB, `users/${userId}`))
        } catch (error) {
            console.log('error', error)
        } finally {
            console.log('get user')
        }
    }

    setUser = async (userId, user) => {
        try {
            return await set(ref(FIREBASE_DB, `users/${userId}`), {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName
            })
        } catch (error) {
            console.log('error', error)
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