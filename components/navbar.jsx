import React, { useState } from 'react';
import Styles from './../public/styles/navbar.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    const [drawn, setDrawn] = useState(false)

    const handleClick = () => {
        setDrawn(!drawn);
        console.log("clicked");
    }

    return (
        <nav className={Styles.navbar} id="navbar">
            <div className={Styles.logo}>
                <Link href="/">
                    <Image
                        src="/images/svg/logo.svg"
                        alt="Logo NL"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>




            <div className={Styles.MobileItem}>
                <button className={Styles.hamb} onClick={() => handleClick()}>


                    <div className={Styles.hammItem}></div>
                    <div className={Styles.hammItem}></div>
                    <div className={Styles.hammItem}></div>

                </button>
            </div>

            <div className={` ${drawn ? Styles.conteudo : Styles.hidden} `}>
                <Link href="/" className={Styles.link}>Home</Link>
                <Link href="/" className={Styles.link}>projects</Link>
                <Link href="/" className={Styles.link}>Skills</Link>
                <Link href="/" className={Styles.link}>Curriculum</Link>
                <Link href="/" className={Styles.link}>Contacts</Link>
            </div>




        </nav>
    )
}
