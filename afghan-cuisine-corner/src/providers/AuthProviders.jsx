import React, {createContext, useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../../firebase.config'


const auth = getAuth(app)
export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {

	const [user, setUser] = useState(null)

	const [loading, setLoading] = useState(true)

	const createUser = (email,password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signInUser = (email,password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const logOut = () => {
		return signOut(auth)
	}

	useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth, currentUser=>{
			setUser(currentUser)
			console.log(user)
			setLoading(false)
		})
		return () =>{
			unsubscribe()
		}

	},[])


	const authInfo={
		user,
		createUser,
		signInUser,
		logOut,
		auth
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider> 		

	);
};

export default AuthProviders;
