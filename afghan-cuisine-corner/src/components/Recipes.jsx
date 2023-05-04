import React from 'react'
import {useParams, useLoaderData} from 'react-router-dom'

const Recipes = () => {
	const chefdata = useLoaderData()
	const {id} = useParams()
	const selectedChef = chefdata.find(singlechef=>singlechef.id==id)
	const recipes = selectedChef.recipes
	return (

	<div className="flex flex-col align-items">

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
                                                        <button className="w-fit ml-auto mr-auto btn btn-success">Mark as Favorite!</button>
                                               </div>   
                                })
                        }
                        </div>
                </div>



	);
};

export default Recipes;
