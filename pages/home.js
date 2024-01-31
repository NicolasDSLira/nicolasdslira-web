import Layout from './../components/layout'
import Header from '../components/header'
import Projects from '../components/projects'
import Skills from '../components/Skills'
import Footer from '../components/footer'
export default function Home() {
    return (
        <>
            <Layout>
                <Header />
                <Projects/> 
                <Skills/>
                <Footer/>
            </Layout>
        </>
    )
}