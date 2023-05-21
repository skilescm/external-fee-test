import React from 'react'
import './Post.css'
import { ThumbsUpIcon } from '../Icons/thumb_up'

export default function Post(props) {
  
  //check to make sure props contain post data
    if (!props.post) {
       return (<div>Something Went Wrong</div>)
    }
        return (
    <div className='post'>
      <div className='post-header'>
        <img className='post-profile-picture' src={props.post.author.picture} alt={`Profile picture for ${props.post.author.displayName}`} />
        <span className='post-display-name'>{props.post.author.displayName}</span>
        <span className='post-creation-date'>{new Date(props.post.created).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric'})}</span>
      </div>
      <div className='post-message-body'>
        <span className='post-message'>{props.post.text}</span>
      </div>
      <div className='post-footer'>
      </div>
          <ThumbsUpIcon />
    </div> 
     )
    
  
}
