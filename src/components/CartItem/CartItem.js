import React from 'react'
import styles from "./styles.module.css"
import { useDispatch } from 'react-redux'
import CartReducer from "../../redux/reducers/CartReducer"

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { id, title, price, image, quantity } = props

  const addToCart = () => {
    const product = {
      id,
      image,
      title,
      price
    }
    dispatch(CartReducer.addToCart(product))
  }

  const removeFromCart = () => {
    dispatch(CartReducer.removeFromCart(id))
  }
  return (
    <div className={styles.container}>
      
      <img className={styles.image} src={image} width={150} height={120} alt='deneme' />
      <div className={styles.title}>{title}</div>
      <div className={styles.blackbar}></div>
      <div className={styles.price}>{price} $</div>
      <div className={styles.button_div}>
        <button className={styles.button} onClick={removeFromCart}>-</button>
        <span style={{marginTop:13}}>{quantity}</span>
        <button className={styles.button} onClick={addToCart}>+</button>
      </div>
    </div>
  )
}

export default CartItem