import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUpAsAritst() {
  return (
    <div>
      <h2>Signup as artist</h2>
      <p>Become independant artist today. Register for free and share your profile with your community </p>
      <p>Connect your wallet and register now</p>
      <Link to="/register-artist">Register Now</Link>
    </div>
  )
}
