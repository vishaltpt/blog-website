import React from 'react'
import './Post.css'
import Postss from '../Postss/Postss'
const Post = () => {
  return (
    <div className="posts">
      <Postss img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/View_point_of_Thamarassery_Churam.jpg/1280px-View_point_of_Thamarassery_Churam.jpg"/>
      <Postss img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300" />
      <Postss img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=440" />
      <Postss img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Postss img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Postss img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  )
}

export default Post