import React, {useContext} from 'react'
import {AuthContext} from '../providers/AuthProviders'
import {Link} from 'react-router-dom'

const Home = () => {
	const {chefdata} = useContext(AuthContext)
	console.log(chefdata)
	return (
		<div className="flex flex-col align-items">
			This is Home
			<div className="grid grid-cols-3 gap-8">
			{
				chefdata.map(singlechef=>{
					return <div className="pb-5 flex flex-col gap-8 backdrop-opacity-10 backdrop-invert bg-white/10" key={singlechef.id}>
							<img className="w-fit h-full" src={singlechef.picture_url} alt=""/>
							<div className="">
								<p>Name: {singlechef.chef_name}</p>
								<p>Years of experience: {singlechef.years_of_experience}</p>
								<p>Number of recipes: {singlechef.num_of_recipes}</p>
								<p>Likes: {singlechef.likes}</p>
						        </div>
							<Link to={`/recipes/${singlechef.id}`}>
							<button className="w-fit ml-auto mr-auto btn btn-success">View Recipes</button>
							</Link>
					       </div>	
				})
			}
			</div>

		</div>
	);
};

export default Home;
