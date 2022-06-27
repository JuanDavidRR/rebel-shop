import style from "../styles/CartButton.module.css";
import { useAppContext } from "./StateWrapper";
import { BsFillCartFill } from "react-icons/bs";


const CartButton = ({item}) => {
    const cart = useAppContext()
    const handleClick = () =>{
        cart.addItemToCart(item)
        cart.openCart()
    }

  return (
    <button onClick={handleClick} className={style.button}>Add to cart <BsFillCartFill/></button>
  )
}

export default CartButton