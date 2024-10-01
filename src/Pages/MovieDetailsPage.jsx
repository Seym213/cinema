import { useParams } from "react-router-dom";
import MovieServices from "../Services/MovieServices";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const MovieDetailsPage = () => {
    const {id} = useParams();  
    const [movie,setMovie] = useState({});
    
    const fetchMovieByID = async () => {
        try {
            const response = await MovieServices.getMovieByID(id);
            console.log(response);
            setMovie(response.data)
        }catch (error){
            
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchMovieByID();
    },[])
   
   return <Container className="d-flex flex-column align-items-center">
    <h1>{movie.original_title}</h1>
    <p>Budget : {movie.budget}$</p>
    <div className="d-flex justify-content-center gap-3">
    {movie.genres && movie.genres.map((genre) => {
        return <Button variant="primary" key={genre.id} size="lg">{genre.name}</Button>
    })}
    </div>
    </Container>;
}
 
export default MovieDetailsPage;