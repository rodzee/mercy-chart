import React from 'react';
import {makeAutoObservable} from 'mobx';
import {FIREBASE_AUTH } from "../config/firebase.config";
import {
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';

class AuthenticationStore {
    name = '';
    email = '';
    password = '';
    passwordConfirmation = '';
    signInFailed = false;
    signUpFailed = false;
    errorMessage = '';

    constructor() {
        makeAutoObservable(this)
    }

    ERRORS = {
        'auth/invalid-email': 'Email is invalid.',
        'auth/email-already-exists': 'Email already exists.',
        'auth/internal-error': 'An error occurred please try again later.',
        'auth/invalid-credential': 'Invalid Credentials.',
        'auth/invalid-password': 'Invalid Password.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/missing-password': 'Missing Password.',
        'auth/missing-email': 'Missing Email.',
        'auth/user-not-found': 'User Not Found.'
    }

    signIn = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
            console.log(response)
            this.handleChangeAuthenticationStore('signInFailed', false)
            return response;
        } catch (error) {
            console.log(error)
            this.handleChangeAuthenticationStore('signInFailed', true)
            this.handleChangeAuthenticationStore('errorMessage', this.ERRORS[error.code])
        } finally {
            console.log('signed in')
        }
    }

    signUp = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
            this.handleChangeAuthenticationStore('signUpFailed', false)
            console.log('reponse', response)
        } catch (error) {
            console.log('error', error)
            this.handleChangeAuthenticationStore('signUpFailed', true)
            this.handleChangeAuthenticationStore('errorMessage', this.ERRORS[error.code])
            console.log('>>>', this.ERRORS[error.code])
        } finally {
            console.log('finally signed up')
        }
    }

    signOut = async () => {
        try {
            const response = await signOut(FIREBASE_AUTH)
            console.log(response)
        } catch (error) {
            console.log(error)
            // this.handleChangeAuthenticationStore('errorMessage', error)
        } finally {
            console.log('signed out')
        }
    }

    passwordMatches = () => {
        return this.password === this.passwordConfirmation;
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