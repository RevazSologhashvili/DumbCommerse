'use client'
import Styles from './Products.module.css'
import { data } from './data'


function Products() {

   
    return(
    <>
        <div className={Styles.wrapper}>
             <ul className={Styles.flexList}>
                {data.map((datat: any) => (
                    <li className={Styles.flexItem} key={datat.id}>
                        <span className={Styles.price}>{datat.id}</span>
                        <span className={Styles.title}>{datat.message}</span>
                        <span className={Styles.price}>{datat.created_time}</span>
                    </li>
                ))}
            </ul>
        </div>
    </>
    )
}


export  default Products;