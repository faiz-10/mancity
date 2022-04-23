import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js"
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 35.0,
      name: "Home Jersey",
      quantity: 0,
    },
    {
      price: 32.0,
      name: "Away Jersey",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmt, setTotalAmt] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmt = totalAmt
    newProductList[index].quantity++;
    newTotalAmt += newProductList[index].price
    setTotalAmt(newTotalAmt);
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmt = totalAmt
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--
      newTotalAmt -= newProductList[index].price
    }
    else{
      newProductList[index].quantity = 0
    }
    setProductList(newProductList);
    setTotalAmt(newTotalAmt);
  };
  const resetAmt = () => {
    let newProductList = [...productList];
    newProductList.map((products) =>{
      products.quantity = 0
    })
    setProductList(newProductList);
    setTotalAmt(0);
  }
  const removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmt = totalAmt
    newTotalAmt -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1)
    setProductList(newProductList);
    setTotalAmt(newTotalAmt);
  }
  const addItem = (name, price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    })
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmt={totalAmt} resetAmt={resetAmt} removeItem={removeItem}/> 
    </>
  );
}

export default App;
