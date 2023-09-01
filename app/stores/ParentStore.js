import React from 'react';
import { makeObservable, action, observable } from 'mobx';

class ParentStore {
    parent = {
        name: '',
        email: '',
        children: []
    };

    constructor() {
        makeObservable(this, {
            parent: observable,
            setParent: action,
        })
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