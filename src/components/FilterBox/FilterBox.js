import React from 'react'
import styles from "./styles.module.css"
import products from "../../products-list.json"
import FilterBoxItem from '../FilterBoxItem/FilterBoxItem'

const FilterBox = (props) => {
  const {handleClick}=props
  const categories=products.map(e=>{
    return e.category
  })
  const mainCategories=Array.from(new Set(categories))

  return (
    <div className={styles.container}>
      <div className={styles.text}>Filter</div>
      {
      mainCategories.map(c=>(
        <FilterBoxItem handleClick={handleClick} name={c}/>
      ))
    }</div>
  )
}

export default FilterBox