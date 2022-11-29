import React, { useState } from 'react'

const SearchBar = (props) => {
  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    const newSearchString = event.target.value
    setSearchString(newSearchString)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: searchString
    })
    try {
      const response = await fetch(`/api/v1/tracks/search`, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      props.setTracks(
        responseBody
      )
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  return (
    <div className="search-form">
    <form onSubmit={handleSubmit}>
      <br/>
      <label className="card1">Search for a Track</label>
      <br/>
      <input className = "textBox1" type='text' name='searchString' value={searchString} onChange={handleChange} />

      <input className="centerButton" type='submit' value='Search' />
      <br/>
      <br/>
    </form>

    
  </div>
  )
}

export default SearchBar