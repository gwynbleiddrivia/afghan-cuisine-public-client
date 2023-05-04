import React, {useContext} from 'react'
import {AuthContext} from '../providers/AuthProviders'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazy-load';
import HomeBanner from './HomeBanner'
import Footer from './Footer'
import FirstExtra from './FirstExtra'
import SecondExtra from './SecondExtra'


const Home = () => {
	const {chefdata, loading} = useContext(AuthContext)
	console.log(chefdata)
	return (
		
		<div>
{/*Banner*/}
		<HomeBanner></HomeBanner>
{/*FirstExtra*/}
		<FirstExtra></FirstExtra>


{/*Cards*/}
		{ loading?
		<div className="radial-progress" style={{ "--value": "70", "--      size": "12rem", "--thickness": "2px" }}>Loading<br/> Please wait...</div>: <>
		

		
		<div className="mt-12 flex flex-col align-items">
			<div className="lg:grid lg:grid-cols-3 lg:gap-8 flex flex-col gap-4">
			{
				chefdata.map(singlechef=>{
					return <div className="pb-5 flex flex-col gap-8 backdrop-opacity-10 backdrop-invert bg-white/10" key={singlechef.id}>
							<img className="w-fit h-full" src={singlechef.picture_url} alt=""/>
							<div className="">
								<p><span className="font-bold pr-2">Name:</span> {singlechef.chef_name}</p>
								<p><span className="font-bold pr-2">Years of experience:</span> {singlechef.years_of_experience}</p>
								<p><span className="font-bold pr-2">Numbers of recipes:</span> {singlechef.num_of_recipes}</p>
								<p><span className="font-bold pr-2">Likes:</span> {singlechef.likes}</p>
						        </div>
							<Link to={`/recipes/${singlechef.id}`}>
							<button className="w-fit ml-auto mr-auto btn btn-success">View Recipes</button>
							</Link>
					       </div>	
				})
			}
			</div>
		</div>

		</>}
		

{/*SecondExtra*/}
		<SecondExtra></SecondExtra>


	 </div>
	);
};

export default Home;
