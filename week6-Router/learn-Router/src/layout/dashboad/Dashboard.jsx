import React from 'react'
import { Link, Links, NavLink, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div className='px-8 py-8'>
      <h1 className='text-yellow-300 text-5xl font-bold mb-2 '>Dashboard</h1>
      <p>This is dsahboard</p>


      <nav className='border-4 border-white-300 py-4 my-4 max-w-full '>

        <ul className='flex text-center py-2  justify-around '>
            <li className='flex-auto'>
                <NavLink 
                    to='products'
                    // replace
                    className={({ isActive})=>
                    `text-blue-600 hover:underline px-8 py-2 ${
                        isActive &&
                         "bg-blue-600 px-8 py-2 text-white"}`
                    }
                >
                Products
                </NavLink>  
             </li>
            <li className='flex-auto'>
                <NavLink 
                    to='users'
                    // replace
                    className={({ isActive})=>
                    `text-blue-600 hover:underline px-8 py-2 ${
                        isActive &&
                         "bg-blue-600 px-8 py-2 text-white"}`
                    }
                >
                Users
                </NavLink> 
            </li>
        </ul>
      </nav>



      {/* <p>their are chiled below</p> */}
      <Outlet/>

      {/* <p>This is footer of dashboard</p> */}
    </div>
  )
}

export default Dashboard
