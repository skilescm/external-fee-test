import React from 'react'
import './Page.css'
import { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Feed from '../Feed/Feed'
import clientApi from '../../Lib/clientApi'

export default function Page(props) {
//page container to house full page views, can be used later to expand functionality of app to have multiple pages of content
  
  const [isError,setIsError] = useState(false)
  const [feedData,setFeedData] = useState([])
  const [displayFeedData,setDisplayFeedData] = useState([])

  //initial feed load from endpoint
  useEffect(() => {
    clientApi.getFeed()
    .then(response => {
      if (response.status === 200) {
        console.log(response, "api response");
        setFeedData(response.data)
        setDisplayFeedData(response.data)
      } else {
        setIsError(true);
      }      
    })
  },[])

  //use the search endpoint to query database for user input
  const handleSearchEntry = (searchValue) => {
    if (searchValue.length > 0) {
      clientApi.searchFeed(searchValue)
      .then(response => {
        if (response.status === 200) {
          console.log(response, "search response");
          setDisplayFeedData(response.data)
        } else {
          setIsError(true);
        }
      })
    } else {
      setDisplayFeedData(feedData)
    }
  }
  


  return (
    <div className='page'>
      <Search handleSearchEntry={handleSearchEntry}/>
      <Feed displayFeedData={displayFeedData} />
    </div>
  )
}
