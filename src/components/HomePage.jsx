import { ResourcePicker } from "@shopify/app-bridge-react";
import React from "react";
import { useState, useEffect } from "react";
import ProductPage from "./ProductPage";
import ProductEmptyState from "./ProductEmptyState";
import Store from "store-js"

export function HomePage() {
  const [isOpen, setisOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productIds, setProductIds] = useState([])

  //If the products are selected and added to the page we gonna run a useffect to store all selected product once so that if 
  //a user reloads the page the products are stored in the locat storeage and we cant lose them and they are retrievable
  // anytime anyminute we want them
  useEffect(() => {
    const productList = Store.get('Selected_Products');
    productList && setProducts(productList)
  }, [])
  

//When using useEffect and dont put the [] it means run for the first time when
//when you leave it empty it means you  can run all the time In this case we gonna put products which means 
//Every time a product changes we gona run the useEffect function 
  useEffect(() => {
    const ids = products.map(product => {
      return {
        id: product.id
      }
    })
    setProductIds(ids)
  }, [products])
  
  function handleProductSelection (payload) {
    setisOpen(false);
    setProducts(payload.selection);
    Store.set('Selected_Products', payload.selection)
  }

  return (
    <>
      {/* Resourcer Picker provides a search  base interface for mechants to find selected pdts, collections, variants 
       https://shopify.dev/apps/tools/app-bridge/actions/resourcepicker*/}
       <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onCancel={() => setisOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productIds}
      />
    { products.length > 0 ? (
        <ProductPage setisOpen={setisOpen} products={ products } />
      ) : (
       <ProductEmptyState setisOpen={setisOpen}/>
    )};
    </>
  );
}
