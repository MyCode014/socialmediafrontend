
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./share.scss";

const Add = () => {
  const [book, setBook] = useState({
    
    title: "",
    desc:"",
    cover:"",

  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) =>({...prev, [e.target.name]: e.target.value}))

  }

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/new_table", book)
      window.location.reload()
    } catch(err){
      console.log(err)
    }
  }
  /* <div className='form'>
      <h1>Add New Book</h1>
     
      <input type="text" placeholder='title'onChange={handleChange} name='title'/>
      <input type="text" placeholder='desc'onChange={handleChange} name= 'desc'/>
      <input type="text" placeholder='cover'onChange={handleChange} name='cover'/>

      <button onClick={handleClick}>Add</button>
    </div> */

  console.log(book)
  return (
   


      <div className="share">
      <div className="container">
        <div className="top">
          
          <input
            type="text"
            placeholder={`What's on your mind?`}
            onChange={handleChange}
            name='title'
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              
            />
            <label htmlFor="file">
              <div className="item">
                
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
      </div>

  )
}

export default Add