import Card from './Card'

function Anime({anime, removeAnime}){

    return(
        <div className="container">
            <div>
            <h2 className='title'> Anime Recommendation</h2>
            </div>

            <div className="cards">
                {
                    anime.map( (anime)=> {
                         return <Card key={anime.id} {...anime} removeAnime={removeAnime}></Card>
                    })
                       
                }
            </div>
        </div>


    );
 
}

export default Anime;