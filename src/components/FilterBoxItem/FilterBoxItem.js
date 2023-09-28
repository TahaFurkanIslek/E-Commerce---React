import React from 'react'
import styles from "./styles.module.css"

const FilterBoxItem = (props) => {
   const{name,handleClick}=props 
  return (
    <div onClick={()=>handleClick(name)} className={styles.container}>{name}</div>
  )
}

export default FilterBoxItem