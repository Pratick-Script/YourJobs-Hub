import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const Addjobs = () => {

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState("Bangalore")
  const [catagory, setCatagory] = useState('Programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] = useState(0)

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',

      })
    }
  }, [])

  return (
    <form className='container flex flex-col gap-3 items-start w-full p-4'>
      <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input type="text" placeholder='Type here' value={title}
          onChange={e => setTitle(e.target.value)}
          className='w-full max-w-lg px-3 py-2 border border-gray-300' />
      </div>
      <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div style={{ minHeight: '180px' }} ref={editorRef}></div>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-3'>

        <div >
          <p className='mb-2'>Job Catagory</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => (setCatagory(e.target.value))}>
            <option value="Select Catagory">Select Catagory</option>
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <p className='mb-2'>Job Location</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => (setLocation(e.target.value))}>
            <option value="Select Location">Select location</option>
            {JobLocations.map((location, index) => (

              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div>
          <p className='mb-2'>Job Level</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => (setLevel(e.target.value))}>
            <option value="Select Level">Select level</option>
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>
      <div>
        <p className='mb-2'>Job Salary</p>
        <input min={0} className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => (setSalary(e.target.value))} type="Number" placeholder='2500' />
      </div>


      <button className='w-28 py-3 mt-4 bg-black text-white rounded cursor-pointer'>Add</button>
    </form>
  )
}

export default Addjobs