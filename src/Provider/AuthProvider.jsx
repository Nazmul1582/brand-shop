import { createContext } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const createUser = async(email, password, name) => {
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;