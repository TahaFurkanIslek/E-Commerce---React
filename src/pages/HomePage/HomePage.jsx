import React, { useState } from 'react'
import styles from "./styles.module.css"
import Searchbar from '../../components/SearchBar/Searchbar'
import Cart from '../../components/Cart/Cart'
import ProductsBox from '../../components/ProductsBox/ProductsBox'
import FilterBox from '../../components/FilterBox/FilterBox'
import products from '../../products-list.json'

const HomePage = () => {
    const [productList, setProductList] = useState(products)

    const handleSearch = text => {
        const searchedText = text.toLowerCase()
        const filteredProductList = products.filter(p => {
            const productTitle = p.title.toLowerCase()
            return productTitle.includes(searchedText)
        })
        setProductList(filteredProductList)
    }

    const handleClick = (name) => {
        const filteredProductList=products.filter(p=>{
            return p.category===name
        })
        setProductList(filteredProductList)
    }

    return (
        <div>
            <div className={styles.blackbar}><span>Products</span></div>
            <div className={styles.dashboard}>
                <div>
                    <div className={styles.searchbar_div}>
                        <div className={styles.items}>
                            <Searchbar onSearch={handleSearch} />
                            <Cart />
                        </div></div>
                    <div className={styles.innercontainer}>
                        <div className={styles.filterbox_div}><FilterBox handleClick={handleClick} /></div>
                        <div className={styles.productsbox_div}><ProductsBox products={productList} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage