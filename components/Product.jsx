import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "./StateWrapper";
import { convertToPath } from "../lib/utils";
import style from "../styles/Product.module.css";
import CartButton from "./CartButton";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";


const Product = ({ item, showAs, qty }) => {
  const handleDismiss = () => {
    cart.getQty(item);
  };

  const handleAdd = () => {
    cart.getAddQty(item);
  };
  const cart = useAppContext();

  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <figure>
            <Image
              src={item.image}
              alt={item.title}
              width={700}
              height={700}
            ></Image>
          </figure>
        </div>
        <div>
          <article className={style.info}>
            <div>
              <h1>{item.title}</h1>
            </div>
            <div className={style.price}>${item.price}</div>
            <div>{item.description}</div>
            <div>
              <CartButton item={item} />
            </div>
          </article>
        </div>
      </div>
      
    );
  }

  if (showAs === "ListItem") {
    return (
        < >

        {qty === 0 ? (
          ""
        ) : (
            
            <div className={style.listItem}>
            <div>
              <Image src={item.image} alt={item.title} width={100} height={100} />
            </div>
          <div>
            <h3>{item.title}</h3>
            <div>${item.price}</div>
            <div>
            <button onClick={handleAdd}><AiFillPlusCircle/></button>
              {qty} 
              <button onClick={handleDismiss}><AiFillMinusCircle/></button>
              Units
            </div>
            <div><b>Subtotal: ${qty * item.price} </b></div>
          </div>
          </div>
        )}
      </>
    );
  }

  return (
    <article className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image src={item.image} alt={item.title} width={300} height={300} />
          </a>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${item.title}`}>
            <a>{item.title}</a>
          </Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </article>
  );
};

export default Product;
