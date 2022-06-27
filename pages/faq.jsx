import Link from "next/link";
import Layout from "../components/Layout";
import style from "../styles/fac.module.css";


const FAQ = () => {
  return (
    <Layout>
        <h1>FAQ</h1>
        <section className={style.fac}>
          <h3>How can i buy?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, accusamus asperiores dolorem eius dolores error eaque at fugit delectus perferendis repellat provident consequuntur, velit odit maiores dicta veritatis minima obcaecati!</p>
        </section>

        <section className={style.fac}>
          <h3>Payment Gateway?</h3>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
        </section>

        <section className={style.fac}>
          <h3>Support?</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </section>

        <section className={style.fac}>
          <h3>My packet is broken?</h3>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
        </section>

        <section className={style.fac}>
          <h3>Customer Service</h3>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </section>
    </Layout>
  )
}

export default FAQ