import React from 'react'
import { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Feed from '../Feed/Feed'
import clientApi from '../../Lib/clientApi'

export default function Page(props) {
  console.log(props, "page props")

  
  const [isError,setIsError] = useState(false)
  const [feedData,setFeedData] = useState([])
  const [filteredFeedData,setFilteredFeedData] = useState([])
  const [displayFeedData,setDisplayFeedData] = useState([])
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

  const handleSearchEntry = (searchValue) => {
    console.log(searchValue,"The search has been input")
    if (searchValue.length > 0) {
      let searchResult = feedData.filter(
        (post) => 
          (console.log(searchValue.toLowerCase(), "filtering post"),
          post.author.displayName.toLowerCase().includes(searchValue.toLowerCase())) ||
          (post.text.toLowerCase().includes(searchValue.toLowerCase()))
        
      )
      setDisplayFeedData(searchResult)
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
