import React from 'react'
import styles from "./styles.module.css"
import ProductBoxItem from '../ProductBoxItem/ProductBoxItem'

const ProductsBox = (props) => {
  const { products } = props
  return (
    <div>
      <div className={styles.container}>{products.map((p, index) => (
        <>
          <ProductBoxItem title={p.title} price={p.price} image={p.image} id={p.id} />
          {index < products.length - 1 && <div className={styles.productSeparator}></div>}
        </>
      ))}</div>
    </div>
  )
}

export default ProductsBox