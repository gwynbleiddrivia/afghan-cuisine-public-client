import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
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
				    <Link className="btn btn-ghost" to="/">Home</Link>
				    <Link className="btn btn-ghost"to="/blog">Blog</Link>
				    <Link className="btn btn-ghost"to="/register">Register</Link>

			{
				user ? 
				<>
			  	    <img className="w-10 h-10 rounded-xl" src={
				    user.photoURL?
				    user.photoURL:
				    "https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg"
				    }/>
				</> :
				    <Link className="btn btn-ghost"to="/login">Login</Link>
			}


			{
				user ?
				<>
					<span>{user.email}</span>
					<button onClick={handleLogOut} className="btn btn-ghost">Signout</button>
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
