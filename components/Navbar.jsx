import Link from "next/link"
import style from "../styles/Navbar.module.css";
import { useAppContext } from "./StateWrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {

  const cart = useAppContext()
  const handleOpenCart = () =>{
    cart.openCart()
  }

  return (
    <nav className={style.menu}>
      <section>
        <h3>Rebel Shop</h3>
      </section>
        <section>
            <Link href='/'><a className={style.link}>Home</a></Link>
            <Link href='/store'><a className={style.link}>Store</a></Link>
            <Link href='/faq'><a className={style.link}>FAQ</a></Link>
        </section>

        <section>
            <button onClick={handleOpenCart}>Cart ({cart.getNumberOfItems()}) <AiOutlineShoppingCart/></button>
        </section>
    </nav>
  )
}

export default Navbar