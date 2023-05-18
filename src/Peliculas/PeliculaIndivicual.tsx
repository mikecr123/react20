import { pelicula } from "./peliculas.model";
import css from './Peliculaindividual.module.css';

export default function PeliculaIndividual(props:peliculaIndividualProps){

    const construirLink =()=> `/peliculas/${props.pelicula.id}`
return( 

    <div className={css.div}>
    <a href={construirLink()}>
    <img src={props.pelicula.poster} alt="Poster"/>
        </a>
        <p>
        
        <a href={construirLink()}>{props.pelicula.titulo}</a>
        
        </p>
        </div>

)

}


interface peliculaIndividualProps {

    pelicula: pelicula;



}