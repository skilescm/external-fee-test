import React from 'react'
import Post from '../../Components/Post/Post'

export default function Feed(props) {
  console.log(props, "feed props")
  return (
    <div className='feed'>
      {props.feedData?.map((post, index) => (
        <Post key={index} post={post}/>
      ))}
      
    </div>
  )
}