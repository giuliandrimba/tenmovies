import React from 'react'
import List from '../../organisms/visualization/List'

export const HomePage = () => {
  const movies = [
    {
      name: 'STALKER'
    },
    {
      name: 'The Lord of the Rings: The Return of the King '
    },
    {
      name: 'Match Point'
    },
    {
      name: 'Eyes Wide Shut'
    },
    {
      name: '2001: A Space Odisseyt'
    },
    {
      name: 'Tokyo Story '
    },
    {
      name: 'Waking Life'
    },
    {
      name: 'City of God'
    },
    {
      name: 'Ex Machina '
    },
    {
      name: 'Seven Samurai'
    }
  ]
  return (
    <div>
      <List movies={movies} />
    </div>
  )
}
