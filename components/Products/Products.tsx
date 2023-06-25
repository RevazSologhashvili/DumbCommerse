'use client'
import axios from "axios";
import Styles from './Products.module.css'
import {useState} from "react";
let getOnce = true;

type listProps = [
    title: string,
    image: string,
    price: string,
    id:    string,
];

function Products() {

    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('asc')

    const sortChange = (e)=>{
            if(e.target.value === 'Ascending') setSort('asc');
            else if(e.target.value === 'Descending') setSort('desc');
            getOnce = true;
    }
    if(getOnce === true) {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}`)
            .then((result) => {
                setProducts(result.data);
            })
        getOnce = false;
    }


    return(
    <>
        <div className={Styles.wrapper}>
            <select onChange={sortChange} className={Styles.sort}>
                <option selected disabled>Sort Style</option>
                <option>Ascending</option>
                <option>Descending</option>
            </select>

            <ul className={Styles.flexList}>
                {products.map((product: listProps) => (
                    <li className={Styles.flexItem} key={product.id}>
                        <span className={Styles.title}>{product.title}</span>
                        <div
                            className={Styles.imageContainer}
                            style={{ backgroundImage: `url(${product.image})` }}
                        ></div>
                        <span className={Styles.price}>{`\$${product.price}`}</span>
                    </li>
                ))}
            </ul>
        </div>
    </>
    )
}


export  default Products;