import React from 'react'
import './Home.css'
import Header from '../../header/Header'
import Post from '../../Posts/Post'
import Sidebar from '../../Sidebar/Sidebar'
import Topbar from '../../Topbar/Topbar'
import Footer from '../../footer/Footer'
const Home = () => {
  return (
    <>
    <Topbar/>
        <Header/>
        <div className="home">
         <Post/>
         <Sidebar/>
        </div>
         <Footer/>
    </>
  )
}

export default Home