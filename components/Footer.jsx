import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <section>Footer en 2022</section>
        <section>
            <div>Contact us!</div>
            <div><BsFacebook/><BsInstagram/><BsTwitter/></div>
        </section>
    </footer>
  )
}

export default Footer