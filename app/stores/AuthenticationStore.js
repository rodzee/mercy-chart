import React from 'react';
import { makeObservable, action, observable } from 'mobx';

class AuthenticationStore {
        name = '';
        email = '';
        password = '';

    constructor() {
        makeObservable(this, {
            name: observable,
            email: observable,
            password: observable,
            handleChangeAuthenticationStore: action,
        })
    }

    handleChangeAuthenticationStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    }
}

// Instantiate the counter store.
const authenticationStore = new AuthenticationStore();
// Create a React Context with the counter store instance.
export const AuthenticationStoreContext = React.createContext(authenticationStore);
export const useAuthenticationStore = () => React.useContext(AuthenticationStoreContext)