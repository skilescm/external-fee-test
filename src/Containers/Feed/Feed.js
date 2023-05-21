import React from 'react'
import './Feed.css'
import Post from '../../Components/Post/Post'

export default function Feed(props) {
  //map over displayFeedData array and render each post
  return (
    <div className='feed'>
      {props.displayFeedData?.map((post, index) => (
        <Post key={index} post={post}/>
      ))}
      
    </div>
  )
}
