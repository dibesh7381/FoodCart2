import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import '../styles/FoodList.css';

const foodItems = [
  {
    id: 1,
    name: "Burger",
    price: 99,
    image:
      "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  },
  {
    id: 2,
    name: "Pizza",
    price: 199,
    image:
      "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg",
  },
  {
    id: 3,
    name: "Pasta",
    price: 149,
    image:
      "https://tiffinandteaofficial.com/wp-content/uploads/2021/01/IMG_3812-1-scaled-e1670948948885.jpg",
  },
  {
    id: 4,
    name: "Fries",
    price: 59,
    image:
      "https://www.seriouseats.com/thmb/Il7mv9ZSDh7n0cZz3t3V-28ImkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
  },
  {
    id: 5,
    name: "Momos",
    price: 89,
    image:
      "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg?impolicy=Medium_Widthonly&w=350&h=263",
  },
  {
    id: 6,
    name: "Chicken Wings",
    price: 129,
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2024/02/bbq-chicken-wings-recipe-featured-image.jpg",
  },
  {
    id: 7,
    name: "Noodles",
    price: 109,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg",
  },
  {
    id: 8,
    name: "Paneer Tikka",
    price: 179,
    image:
      "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
  },
  {
    id: 9,
    name: "Tandoori Chicken",
    price: 249,
    image:
      "https://sinfullyspicy.com/wp-content/uploads/2014/07/1200-by-1200-images-2.jpg",
  },
  {
    id: 10,
    name: "Ice Cream",
    price: 79,
    image:
      "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
  },
];


const FoodList = () => {
  const dispatch = useDispatch();

  return (
    <div className="food-list">
      <h2>Menu</h2>
      <div className="card-grid">
        {foodItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
