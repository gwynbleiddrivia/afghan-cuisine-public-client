import React from 'react'

const HomeBanner = () => {
	return (
		<div>

<div className="carousel w-full">
  <div id="item1" className="carousel-item w-fit">
    <img src="https://img.freepik.com/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg?w=900&t=st=1683206069~exp=1683206669~hmac=5b09998794bdb07f13dd34a261c7dff5ff82c4b2c975104f232b1a3212d39ea8" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-fit">
    <img src="https://img.freepik.com/premium-photo/lot-food-wooden-table-georgian-cuisine-khinkali-georgian-dishes_308547-1223.jpg?w=900" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-fit">
    <img src="https://img.freepik.com/free-photo/meat-lahmajun-soup-salad-spices-side-view_140725-11305.jpg?w=826&t=st=1683205617~exp=1683206217~hmac=0de06c09579c9b66b720091dfe7afa022c6b50366035bacc65d70ebfcc5c4d0e" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-fit">
    <img src="https://img.freepik.com/premium-photo/uzbek-central-asia-cuisine-concept-assorted-uzbek-food-pilaf-samsa-lagman-manti-shurpa-uzbek-restaurant-concept-uzbek-food-food-recipe-background_114941-4682.jpg?w=900" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>


		</div>
	);
};

export default HomeBanner;
