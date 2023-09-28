import React from 'react'
import styles from "./styles.module.css"
const Searchbar = (props) => {
  const{onSearch}=props
  return (
    <div>
      <input placeholder="&#128269; Search" className={styles.searchbar} type="text" onChange={(event)=>onSearch(event.target.value)}/>
      </div>
  )
}

export default Searchbar