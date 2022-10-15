import React from 'react'

const ListComponent = ({product,deleteProduct}) => {
  return (
    <div>
        <h2>{product.productName}</h2>
        <h2>{product.price}</h2>
        <button onClick={()=>deleteProduct(product)} >delete</button>
    </div>
  )
}

export default ListComponent