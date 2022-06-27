import React, { useState } from "react";
import Layout from "../../components/Layout";
import { getItems } from "../../services/item.service";
import Product from "../../components/Product";
import styleItems from "../../styles/Product.module.css";
import {products} from "../../lib/items";

const Index = ({ items }) => {
  const [query, setQuery] = useState("");

  const [clothes, setClothes] = useState(false)
  const [toys, setToys] = useState(false)
  const [decoration, setDecoration] = useState(false)
  const [utils, setUtils] = useState(false)

  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
    setClothes(false)
    setDecoration(false)
    setToys(false)
    setUtils(false)
  };

  const searchUsers = (filtro) =>{
		if (clothes) {
      return filtro.filter((user)  => user.category === 'Clothes');
		}
		else if (decoration) {
			return filtro.filter((user)  => user.category === 'Stickers');
		}
    else if (toys) {
			return filtro.filter((user)  => user.category === 'Toys');
		}
    else if (utils) {
			return filtro.filter((user)  => user.category === 'Utils');
		}
    else{
      return filtro.filter((user)  => user.title.toLowerCase().includes(query));

    }
		}

  const filterByCategory = (e) =>{
		if (e.target.id === 'clothes') {
			setDecoration(false)
      setToys(false)
      setUtils(false)
			setClothes(true)
			setQuery("")
		}
		else if (e.target.id === 'toys') {
			setDecoration(false)
      setToys(true)
      setUtils(false)
			setClothes(false)
			setQuery("")
		}

    else if (e.target.id === 'stickers') {
			setDecoration(true)
      setToys(false)
      setUtils(false)
			setClothes(false)
			setQuery("")
		}

    else if (e.target.id === 'utils') {
			setDecoration(false)
      setToys(false)
      setUtils(true)
			setClothes(false)
			setQuery("")
		}
		else{
			setDecoration(false)
      setToys(false)
      setUtils(false)
			setClothes(false)
      setQuery('')
		}
	}

  return (
    <Layout title="Store">
      <h1>Store</h1>
      <div className={styleItems.searchBar}>
        <input type="text" placeholder="Search" onChange={onChangeQuery} />
      </div>
      <section className={styleItems.gridContainer}>
        <section  className={styleItems.buttonsContainer}>
          <h4>Categories</h4>
          <div>
          <button id="default" onClick={filterByCategory}>All</button>
            <button id="clothes" onClick={filterByCategory}>Clothes</button>
            <button id="stickers" onClick={filterByCategory}>Stickers</button>
            <button id="utils" onClick={filterByCategory}>Utils</button>
            <button id="toys" onClick={filterByCategory}>Toys</button>
          
          </div>
        </section>
        <article className={styleItems.items}>
          {products ? (
            searchUsers(products).map((item) => (
              <Product key={item.id} item={item} showAs="Default" />
            ))
          ) : (
            <div>No items</div>
          )}
        </article>
      </section>
    </Layout>
  );
          }

export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}

export default Index;
