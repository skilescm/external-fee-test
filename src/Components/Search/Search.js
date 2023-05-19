import React, { useState } from 'react'

export default function Search(props) {


  const searchTextChange = (e) => {
    props.handleSearchEntry(e.target.value)

  }

  return (
    <div>
      <input
      className='search-input'
      placeholder='Search'
      onChange={searchTextChange}      
      />
      <button className='clear-search-btn' />
    </div>
  )
}
