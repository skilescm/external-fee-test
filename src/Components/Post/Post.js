import React from 'react'
import './Post.css'

export default function Post(props) {
  
    if (!props) {
       return (<div>Poo</div>)
    }
    console.log(props, "author")
        return (
    <div className='post'>
      <div className='post-header'>
        <img className='post-profile-picture' src={props.post.author.picture} alt={`Profile picture for ${props.post.author.displayName}`} />
        <span className='post-display-name'>{props.post.author.displayName}</span>
        <span className='post-creation-date'>{props.post.created}</span>
      </div>
      <div className='post-message-body'>
        <span className='post-message'>{props.post.text}</span>
      </div>
      <div className='post-footer'>
        <span>{props.post.liked.toString()}</span>
      </div>

    </div> 
     )
    
  
}
