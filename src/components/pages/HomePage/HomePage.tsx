import React from 'react'
import List from '../../organisms/visualization/List'

export const HomePage = () => {
  const movies = [
    {
      name: 'STALKER',
      cover: '/images/movies/spring.jpg',
    },
    {
      cover: '/images/movies/apocalypse.jpg',
      name: 'The Lord of the Rings: The Return of the King '
    },
    {
      cover: '/images/movies/poster.jpg',
      name: 'Match Point'
    },
    {
      cover: '/images/movies/spring.jpg',
      name: 'Eyes Wide Shut'
    },
    {
      cover: '/images/movies/apocalypse.jpg',
      name: '2001: A Space Odisseyt'
    },
    {
      cover: '/images/movies/poster.jpg',
      name: 'Tokyo Story '
    },
    {
      cover: '/images/movies/spring.jpg',
      name: 'Waking Life'
    },
    {
      cover: '/images/movies/apocalypse.jpg',
      name: 'City of God'
    },
    {
      cover: '/images/movies/poster.jpg',
      name: 'Ex Machina '
    },
    {
      cover: '/images/movies/apocalypse.jpg',
      name: 'Seven Samurai'
    }
  ]
  return (
    <div>
      <List movies={movies} />
    </div>
  )
}
