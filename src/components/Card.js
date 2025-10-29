import { useState } from "react";

function Card({id, image, info, genre, length,status, name, removeAnime}){
    const[readmore, setReadmore]= useState(false); 
    const description  = readmore? info: `${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

   
    return(
        <div className="card">
            <img src={image} loading="lazy" className="image"></img>
            <div className="genre"> {genre} </div>
            <div className="anime-info">
                <div className="anime-details">
                <div className="series">
                <h4 className="anime-season"> {length} </h4>
                <span style={{color: status == "Completed" ? "green" : "red"}} className="status"> {status} </span>
                </div>
                <h4 className="anime-name">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}> {readmore? `Show Less` : `Read More`}</span>
            </div>

            </div>
            
         <button className="btn-red" onClick={()=> removeAnime(id)}> Not Interested </button>
        </div>
       

        

    );
}

export default Card;