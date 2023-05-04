import React from 'react'

const FirstExtra = () => {
	return (
		<div>
			<section className="backdrop-opacity-10 backdrop-invert flex flex-col lg:flex-row gap-5 mt-10">

					<img src="https://img.freepik.com/premium-photo/lot-food-wooden-table-georgian-cuisine-khinkali-georgian-dishes_308547-1223.jpg?w=900" alt="" className="lg:w-1/2 w-fit h-1/2"/>  
					<div className="flex flex-col m-auto gap-4 pr-4 lg:text-start text-center">
						<h1 className="font-bold">Delightful Culinary Experience!!</h1>
						<small className="font-xs">Here we bring you the news of delicious and authentic flavors of Afghan cuisine to your plate. Our chefs use traditional techniques and fresh ingredients to create an exquisite culinary experience that will leave you wanting more. We take pride in our dishes and are confident that you will enjoy them as much as we do. Whether you are new to Afghan cuisine or a seasoned foodie, our website promises to deliver a delightful dining experience that will keep you coming back for more. Come and explore the rich and diverse flavors of Afghanistan at Afghan Cuisine Corner, and let us be your go-to destination for authentic Afghan cuisine.</small>
						<button className="btn btn-success w-fit lg:m-0 m-auto">About Us</button>


					</div>
			</section>



		</div>
	);
};

export default FirstExtra;
