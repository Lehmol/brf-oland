import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from './config.js';

//Register
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Fel vid registrering:", error.message);
        throw error;
    }
};

//Login
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Fel vid inloggning:", error.message);
        throw error;
    }
};

export const logoutUser = async() => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Fel vid utloggning:", error.message);
        throw error;
    }
}