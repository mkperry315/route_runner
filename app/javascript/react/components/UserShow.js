import React, { useEffect, useState } from "react"


const UserShow = (props) => {
    const [user, setUser] = useState({})
    const getUser = async () => {
      try {
        const userId = props.match.params.userId
        const response = await fetch(`/api/v1/users/${userId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const fetchedUser = await response.json()
        setUser(fetchedUser)
      } catch(err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
    
    useEffect(() => {
      getUser()
    }, [])
    // debugger
    let joinDate
    if (user.created_at) {
      const date = new Date(user.created_at)
      joinDate = date.toLocaleDateString()
    }
    return (
      <>
      <br/>
     <div className="card4">
        <h3>Welcome {user.username}, getting ready for a run?</h3>
        <br/>
        <h4>Joined: {joinDate}</h4>
        <h4>Your Current Zip Code: {user.zip}</h4>
     </div>
     <br/>
     <div className="card4">
      <h3>Reviews:</h3>
      <br/>
      <br/>
     </div>
     <br/>
      <br/>
     <div className="card4">
      <h3>Favorite tracks:</h3>
      <br/>
      <br/>
     </div>
     </>
        )
    }
    export default UserShow