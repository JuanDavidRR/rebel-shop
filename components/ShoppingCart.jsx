import Product from "./Product";
import { useAppContext } from "./StateWrapper";
import style from "../styles/ShoppingCart.module.css";

const ShoppingCart = () => {
    const getTotal = () =>{
        const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0)
        return total
    }
  const hanldeClose = () => {
    cart.closeCart();
  };
  const cart = useAppContext();

  return (
    <section
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.close} onClick={hanldeClose}>x</button>

      {cart.getNumberOfItems() === 0 ? (
        <div className={style.empty}>Car is empty</div>
      ) : (
        <>
        <section>
          <h3>Your items</h3>
          <article>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </article>
        </section>
        <div className={style.total}>Total: ${getTotal()}</div>
        </>
      )}

    </section>
  );
};

export default ShoppingCart;
