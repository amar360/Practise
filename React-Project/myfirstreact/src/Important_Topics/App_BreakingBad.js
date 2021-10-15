import React, { useState, useEffect } from 'react'
import Header from '../componenets/breakingbad_ui/Header'
import axios from 'axios';
import Search from '../componenets/breakingbad_ui/Search'
import CharacterGrid from '../componenets/breakingbad_component/CharacterGrid'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
//  const [query, setQuery] = useState('')

useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      let result = await axios('https://www.breakingbadapi.com/api/characters?name=Walter');
      

      console.log(result)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  })

  return (
    <div className='container'>
      <Header />
    </div>
  )
}

// export default App