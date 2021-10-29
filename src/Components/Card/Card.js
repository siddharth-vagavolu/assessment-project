const Card = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} alt="to show" style={{width: "100%", height: 360}}/> : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="to show" style={{width: "100%", height: 360}}/>
                    }
                </div>
                <div className = "card-content">
                    <p><a href="a">See More</a></p>
                </div>
            </div>
        </div>
    )
}

export default Card;