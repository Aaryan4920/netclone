
const MoviTitle = (props) =>{
    return (
        <>
        
            {props.movie?.title || props.movie?.name || props.movie?.original_name}
        </>
    )
}

export default MoviTitle;