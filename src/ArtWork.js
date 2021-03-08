function ArtWork(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src={props.imgSrc} alt=""/>
            <h3>{props.altText}</h3>
            <h4>{props.artist}</h4>
            <br/>
            <br/>
        </div>
    )

}

export default ArtWork;