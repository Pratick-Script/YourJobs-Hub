import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {

  const Navigate = useNavigate()
  return (
    <div className='min-h-screen'>

      {/* Navbar for recruiter panel */}


      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img onClick={e => (Navigate('/'))} className='h-10 max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex gap-3 items-center'>
            <p className='max-sm:hidden'>Welcome, Pratick</p>
            <div className='relative group'>
              <img className='w-8 border rounded-full border-gray-200' src={assets.company_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border border-gray-200 text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div className='flex items-start'>

        {/* Left sidebar with option add job,manage job, ViewApplications */}

        <div className='inline-block min-h-screen border-r-2 border-gray-200'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-purple-100 border-r-4 border-purple-500'}`} to={'/dashboard/add-job'}>
              <img className='min-w-5' src={assets.add_icon} alt="" />
              <p className='max-sm:hidden'>Add Job  </p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-purple-100 border-r-4 border-purple-500'}`} to={'/dashboard/manage-job'}>
              <img className='min-w-5' src={assets.home_icon} alt="" />
              <p className='max-sm:hidden'>Manage Job</p>
            </NavLink>
            <NavLink className={({ isActive }) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-purple-100 border-r-4 border-purple-500'}`} to={'/dashboard/view-application'}>
              <img className='min-w-5' src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>


    </div>
  )
}

export default Dashboard