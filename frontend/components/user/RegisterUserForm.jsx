import React, { useState, useEffect } from 'react'

export default function RegisterUserForm({ contract }) {

  const [nickname, setNickname] = useState('')
  const [allUsers, setAllUsers] = useState([])

  async function createUser() {
    const user = await contract.createUserProfile('bronze', nickname)
    console.log(user)
  }

  async function getUsers() {
    const allUsers = await contract.getAllUsers()
    setAllUsers(allUsers)
  }

  useEffect(() => {
    console.log(allUsers)
  }, [allUsers])
  return (
    <div>
      <label>Set nickname</label>
      <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <button onClick={createUser}>Submit</button>

      <button onClick={getUsers}>Get all users</button>

    </div>
  )
}
