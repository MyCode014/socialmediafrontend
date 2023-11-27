import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './style.css';
import './post.scss'
import like from '../../assets/like.svg'
import share from '../../assets/share.svg'
import wallpaper from '../../assets/posts.svg'

const Books = () => {

  const [new_table,setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:8800/new_table")
        setBooks(res.data)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
  },[])

  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8800/new_table/"+id)
      window.location.reload()
    }catch(err) {
      console.log(err)
    }
  }
  /* <div className="book-cardd" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2 className="book-titlee">{book.title}</h2>
            <p className="book-descriptionn">{book.desc}</p>
            <span className="book-pricee">{book.price}</span>
            <div className="button-containerr">
              <button className="delete-buttonn" onClick={() => handleDelete(book.id)}>Delete</button>
              <div className="update-buttonn"><Link to={`/update/${book.id}`}>Update</Link></div>
            </div>
          </div>*/

  return (
    <>
    {new_table.map((book) => (
    <div className="postt">
        
          
          <div className="containerr">
            <div className="userr">
              <div className="userInfoo">
               
                <div className="detailss">
                  <Link
                    
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="namee"></span>
                  </Link>
                  <span className="datee">1 min ago</span>
                </div>
              </div>
              
            </div>
            <div className="contentt">
              <p>{book.title}</p>
            
            </div>
            <div className="infoo">
              <div className="itemm">
               <like/>
               <img src={like} alt="Like" />
                12 Likes
              </div>
              <div className="itemm" >
              <img src={wallpaper} alt="Like" />
                12 Comments
              </div>
              <div className="itemm">
              <img src={share} alt="Like" />
                Share
              </div>
            </div>
            <div className="button-containerr">
              <button className="delete-buttonn" onClick={() => handleDelete(book.id)}>Delete</button>
              <div className="update-buttonn"><Link to={`/update/${book.id}`}>Update</Link></div>
            </div>
          </div>
          </div>


         
        ))}
         </> 
     
  );
}
export default Books