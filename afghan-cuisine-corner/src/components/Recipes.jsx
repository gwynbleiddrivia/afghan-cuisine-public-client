import React from 'react'
import {useParams, useLoaderData} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toast'
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
	const favorite = (event) =>{
	    event.currentTarget.disabled = true;
	    toast.success('This recipe is now your favorite!')
	}

	const chefdata = useLoaderData()
	const {id} = useParams()
	const selectedChef = chefdata.find(singlechef=>singlechef.id==id)
	const recipes = selectedChef.recipes
	console.log(selectedChef)

	return (

	<div className="flex flex-col align-items">
	<ToastContainer/>

{/*Banner*/}
			<div className="flex flex-row-reverse justify-center align-items mt-10 mb-10">
			<LazyLoad>
			      <img className="w-fit h-fit ml-auto mr-auto" src={selectedChef.picture_url} alt=""/>                                                                
			</LazyLoad>
                                                        <div className="ml-auto mr-auto mt-auto mb-auto text-3xl text-start pr-7">
                                                                <p><span className="font-bold pr-    2">Name:</span> {selectedChef.chef_name}</p>
                                                                <p><span className="font-bold pr-    2">Years of experience:</span> {selectedChef.years_of_experience}</p>
                                                                <p><span className="font-bold pr-    2">Numbers of recipes:</span> {selectedChef.num_of_recipes}</p>
                                                                <p><span className="font-bold pr-    2">Likes:</span> {selectedChef.likes}</p>
                                                                <p><span className="font-bold pr-    2">Biography:</span> {selectedChef.bio}</p>
                                                        </div>




			</div>

{/*Recipes*/}
                        <div className="grid grid-cols-3 gap-8">
                        {
                                recipes.map(singlerecipe=>{
                                        return <div className="p-5 flex flex-col gap-8 backdrop-opacity-10 backdrop-invert bg-white/10" key={singlerecipe.recipe_id}>
                                                        <div className="text-start">
                                                                <p><span className="font-bold">Name:</span> {singlerecipe.recipe_name}</p>
								<br/>
                                                                <div><span className="font-bold">Ingredients:</span> {

								singlerecipe.ingredients.map(singleingredient=>{
								return <ul key={singleingredient} className="list-disc pl-8">
								<li className="">{singleingredient}</li>
								</ul>
								})

								}</div>
								<br/>
                                                                <p><span className="font-bold">Cooking method:</span> {singlerecipe.cooking_method}</p>
								<br/>
                                                                <p><span className="font-bold">Rating:</span> {singlerecipe.rating}</p>
								<br/>
								<br/>
                                                        </div>
                                                        <button onClick={favorite} className="w-fit ml-auto mr-auto btn btn-success">Mark as Favorite!</button>
                                               </div>   
                                })
                        }
                        </div>
                </div>



	);
};

export default Recipes;
