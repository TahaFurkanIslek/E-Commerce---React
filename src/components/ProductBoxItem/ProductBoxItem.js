import React from 'react'
import styles from "./styles.module.css"
import { useDispatch } from 'react-redux'
import CartReducer from "../../redux/reducers/CartReducer"

const ProductBoxItem = (props) => {
  const dispatch = useDispatch()
  const{id,title,price,image}=props  

  const addToCart=()=>{
    const product={
      id,
      image,
      title,
      price
    }
    dispatch(CartReducer.addToCart(product))
  }

  return (
    <div className={styles.container}>
        <img className={styles.image} src={image} width={150} height={120} alt='deneme'/>
        <div className={styles.title}>{title}</div>
        <div className={styles.blackbar}></div>
        <div className={styles.price}>{price} $</div>   
        <button className={styles.button} onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default ProductBoxItem