
import style from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { getItems, getLatestItems } from "../services/item.service";
import Product from "../components/Product";
import styleItems from "../styles/Product.module.css";

export default function Home({ items, items2 }) {
  return (
    <Layout title="Home">
      <section className={style.banner}>
        <div className={style.bannerBackground}>
          <section className={style.bannerInfo}>
            <h2>Shop the summer 2022 collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
              ea dolorem ipsum porro. Dolorum odio dolore, officiis quisquam
              totam laboriosam iusto rem est debitis obcaecati aliquam? Illum,
              facere quo?
            </p>
          </section>
        </div>
      </section>
      <h3 className={style.titleSection}>Latest Products</h3>
      <hr />
      <article className={styleItems.items} style={{ paddingLeft: 0 }}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </article>

      <h3 className={style.titleSection}>Best Utils</h3>
      <hr />
      <article className={styleItems.items} style={{ paddingLeft: 0 }}>
        {items2 &&
          items2
            .filter((item) => item.category === "Stickers")
            .slice(0, 4)
            .map((item) => {
              console.log(item);
              return <Product key={item.id} item={item} showAs="Default" />;
            })}
      </article>

      <section className={style.banner2}>
        <div className={style.bannerBackground}>
          <section className={style.bannerInfo}>
            <h2>Shop the summer 2022 collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
              ea dolorem ipsum porro. Dolorum odio dolore, officiis quisquam
              totam laboriosam iusto rem est debitis obcaecati aliquam? Illum,
              facere quo?
            </p>
          </section>
        </div>
      </section>

      <article className={styleItems.items} style={{ paddingLeft: 0 }}>
        {items2 &&
          items2
            .filter((item) => item.category === "Clothes")
            .slice(0, 4)
            .map((item) => {
              return <Product key={item.id} item={item} showAs="Default" />;
            })}
      </article>

      <h3 className={style.titleSection}>Best Utils</h3>
      <hr />
      <article className={styleItems.items} style={{ paddingLeft: 0 }}>
        {items2 &&
          items2
            .filter((item) => item.category === "Toys")
            .slice(0, 6)
            .map((item) => {
              console.log(item);
              return <Product key={item.id} item={item} showAs="Default" />;
            })}
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();
  const res2 = await getItems()
  return {
    props: {
      items: res,
      items2: res2
    },
  };
}


