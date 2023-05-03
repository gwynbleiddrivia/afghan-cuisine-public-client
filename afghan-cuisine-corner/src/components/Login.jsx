import React,{useContext} from 'react'
import {AuthContext} from '../providers/AuthProviders'
import {Link} from 'react-router-dom'

const Login = () => {
	const {user, signInUser, signInGithub, signInGoogle, logOut, loading} = useContext(AuthContext)
	console.log(user)
	
	const handleLogin = event => {
	event.preventDefault()
	const email = event.target.email.value
	const password = event.target.password.value
	signInUser(email,password)
	.then(result=>{
		const loggedUser = result.user
		console.log(loggedUser)
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
			result.user['name'] = result.user.reloadUserInfo.providerUserInfo[0]
.screenName
		})
		.catch(error=>console.log(error))
	}
	const handleGoogleLogIn = event =>{
		signInGoogle()
		.then(result=>{
			const loggedGoogleUser = result.user
			console.log(loggedGoogleUser)
			result.user['name'] = result.user.displayName
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
				<button onClick={handleGithubLogIn} className="btn btn-primary">Github Login</button>
				<button onClick={handleGoogleLogIn} className="btn btn-primary">Google Login</button>
			    </div>
			  </div>
			</div>
			</>}
		</div>
	);
};

export default Login;
