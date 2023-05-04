import React,{useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {AuthContext} from '../providers/AuthProviders'

const Header = () => {
	const {user, logOut} = useContext(AuthContext)

	const handleLogOut = () =>{
		logOut()
		.then(()=>{})
		.catch(error=>console.error(error))
	}
	return (
		<div>
			<div className="navbar bg-base-100 flex justify-center">
			  <div className="flex-1">
			    <a className="btn btn-ghost normal-case text-xl">Afghan Cuisine Corner</a>
			  </div>
			  <div className="flex-none">
			    <ul className="menu menu-horizontal px-1 flex justify-center gap-1">
                     <NavLink to='/' className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Home</NavLink>
                     <NavLink to='/blog' className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Blog</NavLink>
                     <NavLink to='/register' className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Register</NavLink>

			{
				user ? 
				<>
			  	    <img className="w-10 h-10 rounded-xl" 
				    title={
				    user.name?
				    user.name:
				    "Name not registered"
				    } 
				    src={
				    user.photoURL?
				    user.photoURL:
				    "https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg"
				    }/>
				</> :
                     		    <NavLink to='/login' className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Have an account? Click Here to Login</NavLink>
			}


			{
				user ?
				<>
					<span>{user.email}</span>
					<button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
				</> :
				<></>
			}

			    </ul>
			  </div>
			</div>

		</div>
	);
};

export default Header;
