import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Singlepst from '../Singlepost/Singlepst'
import Topbar from '../Topbar/Topbar'
import './Single.css'

const Single = () => {
  return (
    <>
    <Topbar />
    <div className='single'>
    <Singlepst/>
     <Sidebar/>
    </div>
    </>
  )
}

export default Single