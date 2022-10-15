import React, { useState } from 'react';

export default function CreateComponent({getAllData}) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit =(e)=> {
    e.preventDefault()
  try{
    const product ={
      productName,
      price
    }
    getAllData(product)
    setProductName('')
    setPrice('')
  }catch(err){
     console.log(err)
  }

    }

  return(
    <div>
       <form onSubmit={handleSubmit} >
        <label>
          <p>productName</p>
          <input type="text" value={productName} onChange={e => setProductName(e.target.value)}/>
        </label>
        <label>
          <p>Price</p>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}