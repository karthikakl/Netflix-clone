import React, { useEffect, useState } from "react";
import{API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from "../../axios";

 function Banner(){
   const [movie, setMovie] = useState(null)
   useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
      })
   },[])
    return(
        < div 
        style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{ movie?.name || 'Loading...'}</h1>
                

            <div className="banner_buttons">
               <button className="button">Play</button>
               <button className="button"> More info</button>
            </div>
            <h1 className="discription">{movie?.overview}</h1>
            <div className="fade_bottom"></div>
            
            </div>
        </div>
    )

 }

 export default Banner;