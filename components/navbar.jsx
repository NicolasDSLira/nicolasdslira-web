import react from "react";
import Styles from './../public/styles/navbar.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
            <div className={Styles.conteudo}>
                <Link href="/" className={Styles.link}>Home</Link>
                <Link href="/" className={Styles.link}>projects</Link>
                <Link href="/" className={Styles.link}>Skills</Link>
                <Link href="/" className={Styles.link}>Curriculum</Link>
                <Link href="/" className={Styles.link}>Contacts</Link>
            </div>
        </nav>
    )
}