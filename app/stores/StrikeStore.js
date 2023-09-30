import React from 'react';
import {makeAutoObservable} from 'mobx';
import {ref, set, get} from "firebase/database";
import {FIREBASE_DB} from "../config/firebase.config";
import {commonStore} from "./CommonStore";
import Strike from "./models/Strike";

class StrikeStore {
    strikes = []
    strikeIndex = -1;
    constructor() {
        makeAutoObservable(this)
    }

    getStrikes = async (childId) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            await get(ref(FIREBASE_DB, `strikes/${childId}`))
                .then(snap => {
                    if (snap.val()) {
                        this.handleChangeStrikeStore('strikes', snap.val())
                    } else {
                        for (let i = 0; i < 3; i++) {
                            this.strikes.push(new Strike({index: i}))
                        }
                    }
                })
        } catch (e) {
            console.log(e)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    setStrike = async (childId) => {
        try {
            commonStore.handleCommonStore('isLoading', true)
            this.strikes = this.strikes.map((s, i) => {
                if (this.strikeIndex === i) {
                    s.strike = true
                }
                return s;
            })
            await set(ref(FIREBASE_DB, `strikes/${childId}`), this.strikes)
        } catch (error) {
            console.log('error', error)
        } finally {
            commonStore.handleCommonStore('isLoading', false)
        }
    }

    deleteStrike = async (child) => {
        try {
            // update child
        } catch (e) {
            console.log('UpdateUserError ------> ', e.message);
        }
    }

    handleChangeStrikeStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    }
}

// Instantiate the counter store.
const strikeStore = new StrikeStore();
// Create a React Context with the counter store instance.
export const StrikeStoreContext = React.createContext(strikeStore);
export const useStrikeStore = () => React.useContext(StrikeStoreContext)