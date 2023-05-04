import React, {useContext, useState} from 'react'
import {AuthContext} from '../providers/AuthProviders'
import {Link} from 'react-router-dom'

const Register = () => {
	const {user, createUser} = useContext(AuthContext)
	const [error, setError] = useState("")
	console.log(user)
	
	const handleRegister= event =>{
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const password = event.target.password.value
		const photoURL = event.target.photoURL
		console.log(name, email, password, photoURL)

		if(email===""){
			setError("You cannot pass empty email or password")
		}
		if(password===""){
			setError("You cannot pass empty email or password")
		}
		if(password !=="" && password.length<6){
			setError("Password length should not be less than 6")
		}

		
		createUser(email,password)
		.then(result=>{
			const loggedUser = result.user
			console.log(loggedUser)
			result.user['name'] = name
			result.user['photoURL'] = photoURL
			form.reset()
		})
		.catch(error=>{
			console.log(error.message)
		})
		
	}

	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
			  <div className="hero-content flex-col lg:flex-row-reverse">
			    <div className="text-center lg:text-left">
			      <h1 className="text-5xl font-bold">Please Register!</h1>
			      <p className="py-6">You must enter your email and password to register. Name and photo is optional.</p>
			    </div>
			    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			      <form onSubmit={handleRegister} className="card-body">
{/*Form started here*/}
				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Name</span>
				  </label>
				  <input type="text" name="name" placeholder="Your name" className="input input-bordered"/>
				</div>

				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Photo URL</span>
				  </label>
				  <input type="text" name="photoURL" placeholder="Your photo URL" className="input input-bordered"/>
				</div>

				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Email</span>
				  </label>
				  <input type="email" name="email" placeholder="email" className="input input-bordered" />
				</div>
				<div className="form-control">
				  <label className="label">
				    <span className="label-text">Password</span>
				  </label>
				  <input type="password" name="password" placeholder="password" className="input input-bordered" />
				  <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
				  </label>
				</div>
				<div className="form-control mt-6">
				  <button className="btn btn-success">Register</button>
				</div>
			      </form>
{/*Form ended here*/}
				{
					<h1 className="text-red-500">{error}</h1>
				}
			    </div>
			  </div>
			</div>

		</div>
	);
};

export default Register;
