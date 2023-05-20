import React, { useState } from 'react'
import './Search.css'

export default function Search(props) {

//check to see if user pressed the enter key to submit the search
  const searchTextChange = (e) => {
    if (e.key === 'Enter') {
      props.handleSearchEntry(e.target.value)
    }
  }

  return (
    <div className='searchbar'>
      <input
      className='search-input'
      placeholder='Press Enter To Submit'
      onKeyDown={searchTextChange}
      />
    </div>
  )
}
