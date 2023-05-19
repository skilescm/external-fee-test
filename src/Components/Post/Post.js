import React from 'react'

export default function Post(props) {
  
    if (!props) {
       return (<div>Poo</div>)
    }
    console.log(props.post.author, "author")
        return (
    <div className='post'>
      <div className='post-header'>
        <img className='post-profile-picure' src={props.post.author.picture} alt={`Profile picture for ${props.post.author.displayName}`} />
        <span>{props.post.author.displayName}</span>
      </div>
      <div className='post-message'>
        <span>{props.post.text}</span>
      </div>
      <div className='post-footer'>
        <span>{props.post.liked.toString()}</span>
      </div>

    </div> 
     )
    
  
}
