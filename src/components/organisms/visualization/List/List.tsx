import React, { useEffect, useState } from 'react';
import { IMovie } from '../../../../data/abstract/IMovie';
import { P, Container, Li } from './styled';

export default (props: any) => {
  const [movies, setMovies] = useState(props.movies);
  const moviesList = movies.map((movie:IMovie, index: number) =>
    <Li key={index}>
      <P>{movie.name}</P>
    </Li>
  );

  const onResize = () => {

  }

  const dispose = () => {
    window.removeEventListener('resize', onResize);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return dispose;
  })

  return (
    <Container className={props.className}>
      <ul>
        {moviesList}
      </ul>
    </Container>
  )
}
