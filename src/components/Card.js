import { useState } from "react";

function Card({id, image, info, price, name, removeAnime}){
    const[readmore, setReadmore]= useState(false); 
    const description  = readmore? info: `${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

   
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="anime-info">
                <div className="anime-details">
                <h4 className="anime-length"> {price} </h4>
                <h4 className="anime-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}> {readmore? `show less` : `read more`}</span>
            </div>

            </div>
            
         <button className="btn-red" onClick={()=> removeAnime(id)}> Not Interested </button>
        </div>
       

        

    );
}

export default Card;