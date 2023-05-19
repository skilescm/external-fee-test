import React, { useState } from 'react'

export default function Search(props) {


  const searchTextChange = (e) => {
    props.handleSearchEntry(e.target.value)

  }

  return (
    <div className='searchbar'>
      <input
      className='search-input'
      placeholder='Search'
      onChange={searchTextChange}      
      />
    </div>
  )
}
