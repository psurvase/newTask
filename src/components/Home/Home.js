import React, { useState } from 'react';
import CreateComponent from '../Product/CreateComponent';
import ListComponent from '../Product/ListComponent';
import SearchComponent from '../Product/SearchComponent';

export default function Home() {
  const [store, setStore] = useState([])
 const getAllData =(product)=>{
  setStore([...store, product])
 }

 const deleteProduct =(product)=>{
     setStore([...store.filter(item=>item.productName!==product.productName)])
 }

  return(
    <div >
      <CreateComponent getAllData={getAllData} />
      <SearchComponent />
     <h3> {store.length===0? "NO PRODUCT FOUND" : ''}  </h3> 
      {store?.map((product, index)=>{
        return <ListComponent  product={product} key={index} deleteProduct={deleteProduct} />

      })}
    </div>
  );
}