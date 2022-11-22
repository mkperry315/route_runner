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
     <div>
        <h3>Welcome Runner, we are one your profile!</h3>
        <h4>Username:{user.username}</h4>
        <h4>Joined {joinDate}</h4>
        <h4>Location: {user.zip}</h4>
     </div>
        )
    }
    export default UserShow