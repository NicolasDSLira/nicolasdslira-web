import Styles from './../public/styles/header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.conteudo}>
                <h1 className={Styles.titulo}>Hi, i'm Nicolas Lira</h1>
                <p className={Styles.lead}>Systems developer passionate about turning challenges into innovative solutions.</p>
            </div>
            <div className={Styles.containerImagem}>
                <Image
                    src="/images/Nicolas-Lira.png"
                    alt="Logo NL"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    )
}