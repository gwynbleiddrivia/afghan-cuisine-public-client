import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className="navbar bg-base-100">
			  <div className="flex-1">
			    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			  </div>
			  <div className="flex-none">
			    <ul className="menu menu-horizontal px-1">
				    <Link className="btn btn-ghost" to="/">Home</Link>
				    <Link className="btn btn-ghost"to="/blog">Blog</Link>
				    <Link className="btn btn-ghost"to="/login">Login</Link>
				    <Link className="btn btn-ghost"to="/register">Register</Link>
			      <img className="w-1/4 h-1/4 rounded-xl" src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-2-150x150.jpg"/>
			    </ul>
			  </div>
			</div>

		</div>
	);
};

export default Header;
