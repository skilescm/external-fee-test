import React from 'react'
import { useEffect, useState } from 'react'
import Search from '../../Components/Search/Search'
import Feed from '../Feed/Feed'
import clientApi from '../../Lib/clientApi'

export default function Page(props) {
  console.log(props, "page props")

  
  const [isError,setIsError] = useState(false)
  const [feedData,setFeedData] = useState([])
  useEffect(() => {
    clientApi.getFeed()
    .then(response => {
      if (response.status === 200) {
        console.log(response, "api response");
        setFeedData(response.data)
      } else {
        setIsError(true);
      }      
    })
  },[])
  


  return (
    <div className='page'>
      <Search />
      <Feed feedData={feedData} />
    </div>
  )
}
