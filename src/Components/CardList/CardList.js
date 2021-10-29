import Card from "../Card/Card";

const CardList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Card key={i} image={movie.poster_path}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
    
}

export default CardList;