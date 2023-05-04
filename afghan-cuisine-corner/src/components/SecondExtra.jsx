import React from 'react'

const SecondExtra = () => {
	return (
		<div>
			<section className="backdrop-opacity-10 backdrop-invert flex flex-row-reverse gap-5 mt-10">

					<img src="https://img.freepik.com/free-photo/breakfast-set-with-scrambled-eggs-olives-white-cheese-cucumbers-tomatoes-tea_140725-8359.jpg?w=900&t=st=1683215124~exp=1683215724~hmac=f5e32986fd6a63b8690aeba3a78dca10223d93f64f009a46cbd5ae78a72d3bce" alt="" className="w-1/2 h-contain"/>  
					<div className="flex flex-col m-auto gap-4 pl-4">
						
						<div className="border border-black p-4 rounded-lg text-start flex flex-col gap-2 mt-3">
						<h1 className="font-bold">Free Plan</h1>
						<p>Price: 0/year</p>
						<ul className="list-disc pl-4">
							<li>Access to all recipe pages on the site</li>
							<li>Ability to save favorite recipes to a personal recipe box</li>
							<li>Email newsletter with occasional recipe highlights</li>
						</ul>
						<button className="btn btn-success w-fit">Choose this plan</button>

						</div>
						<div className="border border-black p-4 rounded-lg text-start flex flex-col gap-4 mb-3">
						<h1 className="font-bold">Premium Plan</h1>
						<p>Price: 20/year</p>
						<ul className="list-disc pl-4">
							<li>Ad-free browsing experience
</li>
							<li>Exclusive access to new and seasonal recipes before they are released to the public
</li>
							<li>Personalized recipe recommendations based on user preferences and history
</li>
						</ul>
						<button className="btn btn-success w-fit">Choose this plan</button>
						

						</div>

					</div>
			</section>



		</div>
	);
};

export default SecondExtra;
