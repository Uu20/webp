import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Modal from './components/Modal'


export default function Home() {
  return (
    <div className="bg-gray-200 h-screen overflow-y-scroll
    scrollbar-hide">
      <Head>
        <title>B0829015 IG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
     
      <Header />
     
      <Feed />
      <Modal />

     {/* Modal */}

    </div>
  )
}