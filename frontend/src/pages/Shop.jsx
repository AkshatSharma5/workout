import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import whey from "../assets/whey.png";
import whey2 from "../assets/whey2.png";
import dumbell from "../assets/dumbell.png";
import shaker from "../assets/shaker.png";
import powder from "../assets/powder.png";
import carb from "../assets/carb.png";
import press from "../assets/press.png";
import rope from "../assets/rope.png";
import { loadStripe } from "@stripe/stripe-js";

const shakes = [
  {
    id: 1,
    name: "Protein Shake - Chocolate",
    category: "Muscleblaze",
    price: 499,
    originalPrice: 599,
    rating: 4.5,
    image: whey,
  },

  {
    id: 4,
    name: "Whey Protein - Vanilla",
    category: "Optimum",
    price: 3499,
    originalPrice: 3999,
    rating: 4.8,
    image: whey2,
  },

  {
    id: 5,
    name: "Carb Shake - Vanilla",
    category: "Muscleblaze",
    price: 3999,
    originalPrice: 4999,
    rating: 4.2,
    image: carb,
  },

  {
    id: 8,
    name: "Protein Powder",
    category: "Revital",
    price: 1299,
    originalPrice: 2399,
    rating: 4.4,
    image: powder,
  },
];

const accessories = [
  {
    id: 2,
    name: "Gym Shaker Bottle",
    category: "Boldfit",
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    image: shaker,
  },
  {
    id: 3,
    name: "Dumbbells - 5kg",
    category: "FitBit",
    price: 1499,
    originalPrice: 1799,
    rating: 4.6,
    image: dumbell,
  },

  {
    id: 6,
    name: "Skipping Rope",
    category: "FitMantra",
    price: 499,
    originalPrice: 1599,
    rating: 4.6,
    image: rope,
  },
  {
    id: 7,
    name: "Hand Press",
    category: "XFit",
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    image: press,
  },
];
const Shop = () => {
  const handleBuy = async (product) => {
    const stripe = await loadStripe(
      "pk_test_51QHUNWLrQuCWyQsoVxD7r7HPN1SwQDDbkXSSmQ4TcHO2HpmGskgvYVCMHRBGKRFEIclUWPJE8eC3PB2wFKLRPtFT00stN3fEqf"
    );
    const body = {
      product: product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:3500/api/workouts/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log("result mein error in shop.jsx line 120: ", result.error);
    }
  };
  return (
    <div className="bg-[#222831] font-space min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-center uppercase font-oswald text-4xl text-[#EEEEEE] tracking-widest mb-8 underline underline-offset-8 decoration-[#00ADB5]">
          our Products
        </h1>

        {/* Shakes */}

        <h3 className="font-oswald uppercase text-2xl text-[#EEEEEE] tracking-wider mb-4 underline underline-offset-4 decoration-[#00ADB5] ml-1">
          Protein Shakes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {shakes.map((product) => (
            <div
              key={product.id}
              className="bg-[#393E46] p-4 rounded-lg shadow-lg text-[#EEEEEE] relative"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  "-webkit-filter": "drop-shadow(1px 1px 5px #00ADB5)",
                  filter: "drop-shadow(1px 1px 5px #00ADB5)",
                }}
                className="w-[100%] object-fill rounded-lg mb-4 "
              />

              <div className="absolute top-4 right-4 text-[#00ADB5] cursor-pointer transition-all active:scale-75">
                <FavoriteIcon />
              </div>
              <h2 className="text-lg font-bold mb-2 underline underline-offset-8 decoration-[#00ADB5]">
                {product.name}
              </h2>
              <p className="text-sm text-[#00ADB5]">{product.category}&#174;</p>
              <div className="flex items-center mb-2">
                <span className="text-lg font-bold font-oswald ">
                  &#8377;{product.price}
                </span>
                <span className="font-oswald text-sm text-gray-500 line-through ml-2">
                  &#8377;{product.originalPrice}
                </span>
              </div>
              <div className="flex items-center mb-4 font-oswald ">
                <span className="text-yellow-400 mr-2">
                  <StarIcon />
                </span>
                <span>{product.rating}</span>
              </div>
              <button
                className="w-full bg-[#00ADB5] hover:bg-[#35c1c8]  text-[#222831] font-bold py-2 rounded-lg mb-2 transition-all uppercase font-oswald active:scale-90 "
                onClick={() => handleBuy(product)}
              >
                Buy Now
              </button>
              <button className="w-full bg-[#222831] text-[#EEEEEE] font-bold py-2 rounded-lg transition-all active:scale-90 ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Accessories */}

        <h3 className="font-oswald uppercase text-2xl text-[#EEEEEE] tracking-wider my-5 underline underline-offset-4 decoration-[#00ADB5] mt-7 ml-1">
          accessories
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessories.map((product) => (
            <div
              key={product.id}
              className="bg-[#393E46] p-4 rounded-lg shadow-lg text-[#EEEEEE] relative"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  "-webkit-filter": "drop-shadow(1px 1px 5px #00ADB5)",
                  filter: "drop-shadow(1px 1px 5px #00ADB5)",
                }}
                className="w-[100%] object-fill rounded-lg mb-4 "
              />

              <div className="absolute top-4 right-4 text-[#00ADB5] cursor-pointer transition-all active:scale-75">
                <FavoriteIcon />
              </div>
              <h2 className="text-lg font-bold mb-3 underline underline-offset-8 decoration-[#00ADB5]">
                {product.name}
              </h2>
              <p className="text-sm text-[#00ADB5]">{product.category}&#174;</p>
              <div className="flex items-center mb-2">
                <span className="text-lg font-bold font-oswald ">
                  &#8377;{product.price}
                </span>
                <span className="font-oswald text-sm text-gray-500 line-through ml-2">
                  &#8377;{product.originalPrice}
                </span>
              </div>
              <div className="flex items-center mb-4 font-oswald ">
                <span className="text-yellow-400 mr-2">
                  <StarIcon />
                </span>
                <span>{product.rating}</span>
              </div>
              <button
                className="w-full bg-[#00ADB5] hover:bg-[#35c1c8]  text-[#222831] font-bold py-2 rounded-lg mb-2 transition-all uppercase font-oswald active:scale-90 "
                onClick={() => handleBuy(product)}
              >
                Buy Now
              </button>
              <button className="w-full bg-[#222831] text-[#EEEEEE] font-bold py-2 rounded-lg transition-all active:scale-90 ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
