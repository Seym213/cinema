import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({movieCard}) => {
  const navigate = useNavigate();    
  
  const navigateTo =(id) => {
    navigate("/movie/"+id);
  }
    
    return <>
     <Card className='col-3' onClick={() => {navigateTo(movieCard.id)}}>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+movieCard.poster_path} />
      <Card.Body>
        <Card.Title>{movieCard.title}</Card.Title>
        <Card.Text>
         {movieCard.overview}
        </Card.Text>
        <Button variant="primary">Voir détail</Button>
      </Card.Body>
    </Card>
    </>;
}
 
export default MovieCard;