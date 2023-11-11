import React from 'react'
import LeftSide from '../components/SignIn/LeftSide'
import { Outlet } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className="container">
         < LeftSide />
         < Outlet />
    </div>
  )
}
