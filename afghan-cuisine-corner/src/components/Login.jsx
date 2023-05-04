import React,{useContext} from 'react'
import {AuthContext} from '../providers/AuthProviders'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
	const {user, signInUser, signInGithub, signInGoogle, logOut, loading} = useContext(AuthContext)
	console.log(user)
	
	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || "/"

	const handleLogin = event => {
	event.preventDefault()
	const email = event.target.email.value
	const password = event.target.password.value
	signInUser(email,password)
	.then(result=>{
		const loggedUser = result.user
		console.log(loggedUser)
		navigate(from,{replace:true})
	})
	.catch(error=>{
		console.log(error.message)
	})
}
	const handleGithubLogIn = event =>{
		signInGithub()
		.then(result=>{
			const loggedGithubUser = result.user
			console.log(loggedGithubUser)
			result.user['name'] = result.user.reloadUserInfo.providerUserInfo[0].screenName
			navigate(from,{replace:true})
		})
		.catch(error=>console.log(error))
	}
	const handleGoogleLogIn = event =>{
		signInGoogle()
		.then(result=>{
			const loggedGoogleUser = result.user
			console.log(loggedGoogleUser)
			result.user['name'] = result.user.displayName
			navigate(from,{replace:true})
		})
		.catch(error=>console.log(error))
	}

	return (
		<div> { loading?
					<div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>You are <br/>logging in.<br/> Please wait...</div>: <>
			<div className="hero min-h-screen bg-base-200">
			  <div className="hero-content flex-col lg:flex-row-reverse">
			    <div className="text-center lg:text-left">
			      <h1 className="text-5xl font-bold">Login now!</h1>
			      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			    </div>
			    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
{/*Form started here*/}	
			      <form onSubmit={handleLogin} className="card-body">
				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Email</span>
				  </label>
				  <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
				</div>
				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Password</span>
				  </label>
				  <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
				  <label className="label">
				    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
				  </label>
				</div>
				<div className="form-control mt-6">
				  <button className="btn btn-primary">Login</button>
				</div>
			      </form>
{/*Form ended here*/}	
				<small className="mb-2">Or do you want to log in by Github or Google account?</small>
				<button onClick={handleGithubLogIn} className="btn btn-outline mb-4 flex justify-between">
					Github Login
					<FaGithub/>			
				</button>
				<button onClick={handleGoogleLogIn} className="btn btn-outline flex justify-between">
					Google Login
					<FaGoogle/>
				</button>
			    </div>
			  </div>
			</div>
			</>}
		</div>
	);
};

export default Login;
