import Layout from './../components/layout'
import Header from '../components/header'
import Projects from '../components/projects'
import Skills from '../components/Skills'
export default function Home() {
    return (
        <>
            <Layout>
                <Header />
                <Projects/> 
                <Skills/>
            </Layout>
        </>
    )
}