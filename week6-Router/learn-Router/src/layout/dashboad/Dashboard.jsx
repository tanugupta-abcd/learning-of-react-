import React from 'react'
import { Link, Links, NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is dsahboard</p>


      <nav>
        <p>All links :</p>

        <ul>
            <li>
                <NavLink 
                    to='products'
                    replace
                    className={({ isActive})=>
                    `text-blue-600 hover:underline ${
                        isActive &&
                         "bg-blue-600 px-4 py-2 text-white"}`
                    }
                >
                Products
                </NavLink>  
             </li>
            <li>
                <NavLink 
                    to='users'
                    replace
                    className={({ isActive})=>
                    `text-blue-600 hover:underline ${
                        isActive &&
                         "bg-blue-600 px-4 py-2 text-white"}`
                    }
                >
                Users
                </NavLink> 
            </li>
        </ul>
      </nav>



      <p>their are chiled below</p>
      <Outlet/>

      <p>This is footer of dashboard</p>
    </div>
  )
}

export default Dashboard
