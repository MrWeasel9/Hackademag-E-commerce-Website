import React, { useState, ChangeEvent } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import ProductInterface  from "./Products/ProductInterface";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0); // State variable for cart count
  const [cartItems, setCartItems] = useState<string[]>([]); // Initialize cartItems as an empty array

  // ----------- Input Filter -----------
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const incrementCartCount = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  const addToCart = (itemName: string) => {
    setCartItems(prevItems => [...prevItems, itemName]); // Add the new item to the cartItems array
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const filteredItems = products.filter((product: ProductInterface) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (value: string) => {
    setSelectedCategory(value);
  };

  function filteredData(products: ProductInterface[], selected: string | number | null, query: string) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={id} // Using title as key, assuming it's unique
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          onClick={() => {
            addToCart(title); // Call addToCart function with the product title
            incrementCartCount(); // Call incrementCartCount function
          }}
        />
      )
    );
    
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="navbar">
        <Navigation query={query} handleInputChange={handleInputChange} cartCounter={cartCount} cartItems={cartItems} clearCart={clearCart}/> {/* Pass cartCount and cartItems as props */}
      </div>
      <Sidebar handleChange={handleChange} />
      <div className="main-content">
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </>
  );
  
  
}

export default App;
