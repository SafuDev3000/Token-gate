import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Link from 'next/link';



const Index = () => {
    return (

        <div
            style={{
                backgroundImage: `url(https://i.imgur.com/DVVNorR.png)`,
                display: 'flex',
                
            }}
        >
            <Layout pageTitle="Token Gated VIP Landing Page">
                <Header />
                <Hero />
                <Feature />
           
          
            </Layout>
        </div>

    )
}
export default Index;