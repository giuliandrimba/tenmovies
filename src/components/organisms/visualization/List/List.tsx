import React, { useEffect, useState } from 'react';
import { IMovie } from '../../../../data/abstract/IMovie';
import { P, Container, Li, Img } from './styled';

export default (props: any) => {
  const [movies, setMovies] = useState(props.movies);
  const [cover, setCover] = useState(null);

  const onMouseEnter = (e: any) => {
    setCover(e.currentTarget.getAttribute('data-cover'));
    console.log('onMouseEnter', e.target)
  }

  const onMouseLeave = (e: any) => {
    setCover(null);
    console.log('onMouseLeave', e.target)
  }

  const onResize = () => {

  }

  const dispose = () => {
    window.removeEventListener('resize', onResize);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return dispose;
  })

  const moviesList = movies.map((movie:IMovie, index: number) =>
    <Li onMouseEnter={onMouseEnter} data-cover={movie.cover} key={index}>
      <P>{movie.name}</P>
    </Li>
  );

  return (
    <Container className={props.className}>
      {cover !== null &&
        <Img src={cover} />
      }
      <ul
        onMouseOut={onMouseLeave}
      >
        {moviesList}
      </ul>
    </Container>
  )
}
