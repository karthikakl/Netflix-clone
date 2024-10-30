import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import {orginals,action,horror,comedy,romance,documentries} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import Footer from "./Components/Footer/footer"

function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals}  title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentries} title='Documnentaries' isSmall/>
      <Footer/>
    </>
  )
}

export default App
