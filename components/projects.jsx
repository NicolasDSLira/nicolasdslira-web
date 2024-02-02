import Styles from './../public/styles/projects.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
    return (
        <>
            <div className={Styles.Container}>
                <h1 className={Styles.titulo}>Projects</h1>

                <div className={Styles.Projects}>
                    <div className={Styles.cardLeft}>
                        <div className={Styles.imagem}>
                            <Image
                                src="/images/Projects/projeto1.png"
                                alt="E-commerc Raiztec"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={Styles.conteudoLeft}>
                            <h2 className={Styles.tituloCard}>e-commerc Raiztec </h2>

                            <Link href="https://loja.raiztec.com.br" className={Styles.btn}>See the live website
                                <span
                                    style={{ margin: '0 1rem' }}
                                    class="material-symbols-outlined" >
                                    open_in_new
                                </span></Link>
                        </div>
                    </div>

                    <div className={Styles.cardRight}>
                        <div className={Styles.imagem}>
                            <Image
                                src="/images/Projects/projeto2.png"
                                alt="Página suporte Raiztec"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={Styles.conteudoRight}>
                            <h2 className={Styles.tituloCard}>Landing page Suporte Raiztec</h2>

                            <Link href="https://raiztec.com.br/suporte-ADS/" className={Styles.btn}>See the live website
                                <span
                                    style={{ margin: '0 1rem' }}
                                    class="material-symbols-outlined" >
                                    open_in_new
                                </span></Link>
                        </div>
                    </div>

                    <div className={Styles.cardLeft}>
                        <div className={Styles.imagem}>
                            <Image
                                src="/images/Projects/projeto3.png"
                                alt="Página suporte Seg Sec"
                                width={400}
                                height={100}
                            />
                        </div>
                        <div className={Styles.conteudoLeft}>
                            <h2 className={Styles.tituloCard}>Landing page Sec Seg</h2>

                            <Link href="https://www.segsec.com.br/Servicos/" className={Styles.btn}>See the live website
                                <span
                                    style={{ margin: '0 1rem' }}
                                    class="material-symbols-outlined" >
                                    open_in_new
                                </span></Link>
                        </div>
                    </div>

                    <div className={Styles.cardRight}>
                        <div className={Styles.imagem}>
                            <Image
                                src="/images/Projects/projeto4.png"
                                alt="My List Plus"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className={Styles.conteudoRight}>
                            <h2 className={Styles.tituloCard}>My List Plus</h2>

                            <Link href="https://nicolasdslira.github.io/MyListPlus/" className={Styles.btn}>See the live website
                                <span
                                    style={{ margin: '0 1rem' }}
                                    class="material-symbols-outlined" >
                                    open_in_new
                                </span></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}