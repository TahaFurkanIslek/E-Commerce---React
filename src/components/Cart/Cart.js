import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styles from './styles.module.css'
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { productCounter, cart, cartPriceCounter } = useSelector((state) => state.cartReducer)

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {productCounter > 0 && <span className={styles.counter}>{productCounter}</span>}
        <AiOutlineShoppingCart style={{ cursor: 'pointer' }} onClick={openModal} size={30} color="black" />
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Sepetim">
          <h1 className={styles.my_cart_text}>My Cart</h1>
          <div className={styles.cart_products}>
            {cart.map(p => (
              <CartItem title={p.title} price={p.price} image={p.image} id={p.id} quantity={p.quantity} />
            ))}
          </div>
            <div className={styles.cart_exit_button_div}>
              <span>total cost : {Math.abs(cartPriceCounter.toFixed(2))} $</span>
            </div>
            <div className={styles.cart_exit_button_div}>
              <button className={styles.cart_exit_button} onClick={closeModal}>Sepetten Çık</button>
            </div>
        </Modal>
      </div>
    </div>
  )
}

export default Cart