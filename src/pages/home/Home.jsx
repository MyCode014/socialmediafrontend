import Stories from "../../components/stories/Stories"

import Share from "../../components/share/Share"
import Books from "../../components/share/Books"
import Add from "../../components/share/Add"
import "./home.scss"

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Update from "../../components/share/Update"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Add/>
      
      <Books/>
   

    
    </div>
  )
}

export default Home