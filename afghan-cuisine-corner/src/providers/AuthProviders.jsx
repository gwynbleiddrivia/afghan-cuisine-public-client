import React, {createContext, useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'
import app from '../../firebase.config'



const auth = getAuth(app)

const providerGithub = new GithubAuthProvider()
const providerGoogle = new GoogleAuthProvider();



export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {

{/*This is all the chefs data from deployed server*/}
	const [chefdata, setChefdata] = useState([])
	useEffect(()=>{
		fetch('https://afghan-cuisine-corner-server-gwynbleiddrivia.vercel.app/chefs')
		.then(res=>res.json())
		.then(data=>{
		setChefdata(data)
		setLoading(false)
		})
	},[])


{/*To check if user is signed it*/}
	const [user, setUser] = useState(null)

{/*To check if page is still loading, will be set true of a user is logged in*/}
	const [loading, setLoading] = useState(true)

{/*To create user*/}
	const createUser = (email,password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

{/*To log in user*/}
	const signInUser = (email,password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}
{/*To log out user*/}
	const logOut = () => {
		return signOut(auth)
	}

{/*To check if state of user logging in changed or not*/}
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

	const signInGithub = () =>{
		setLoading(true)
		return signInWithPopup(auth, providerGithub)
	}
	const signInGoogle = () =>{
		setLoading(true)
		return signInWithPopup(auth, providerGoogle)
	}


{/*All the variable which will be passed through context api*/}
	const authInfo={
		user,
		createUser,
		signInUser,
		signInGithub,
		signInGoogle,
		logOut,
		loading,
		chefdata
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider> 		

	);
};

export default AuthProviders;
