
import styles from './page.module.css'
import Products from "@/components/Products/Products";

export default function Home() {
  return (
      <main className={styles.main}>
            <Products />
      </main>
  )
}
