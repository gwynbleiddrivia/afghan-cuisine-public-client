import React from 'react'

const Footer = () => {
	return (
		<div className="backdrop-opacity-10 backdrop-invert p-8 mt-10">
	<div className="flex flex-col gap-4 mt-10">
			<input type="email" className="p-4 rounded-xl w-fit m-auto" placeholder="Enter email for newsletter"/>
			<button className="btn btn-success w-fit m-auto">Please Subscribe!</button>

		</div>

		<div className="flex mt-5">
			<div className="m-auto flex flex-col">
				<h1 className="uppercase mb-2">Contacts</h1>
				<small>12, GhostTown,</small>
				<small>136/C, Imaginary Town,</small>
				<small>Under Arkham Perfecture,</small>
				<small>Miskatonic University</small>
			</div>
			<div className="m-auto flex flex-col">
				<h1 className="uppercase mb-2">Social</h1>
				<small>Facebook</small>
				<small>Twitter</small>
				<small>Instagram</small>
				<small>Whatsapp</small>
			</div>

		</div>

		</div>
		);
};

export default Footer;
