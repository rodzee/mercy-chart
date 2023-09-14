import React from 'react';
import {makeAutoObservable} from 'mobx';

class ParentStore {
    parent = {}

    constructor() {
        makeAutoObservable(this)
    }

    setParent = (key, value) => {
        this.parent[key] = value
    }

    handleChangeParentStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    }
}

// Instantiate the counter store.
const parentStore = new ParentStore();
// Create a React Context with the counter store instance.
export const ParentStoreContext = React.createContext(parentStore);
export const useParentStore = () => React.useContext(ParentStoreContext)