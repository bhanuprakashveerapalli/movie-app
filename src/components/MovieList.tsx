// src/components/MovieList.tsx
import React, { useState } from 'react';
import { Grid, Button, Box } from '@mui/material';
import MovieCard from './MovieCard';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedMovies = [...movies].sort((a, b) =>
    sortOrder === 'asc'
      ? new Date(a.Year).getFullYear() - new Date(b.Year).getFullYear()
      : new Date(b.Year).getFullYear() - new Date(a.Year).getFullYear()
  );

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Box>
      <Button onClick={handleSort} variant="contained" color="secondary">
        Sort by Year ({sortOrder})
      </Button>
      <Grid container spacing={2} mt={2}>
        {sortedMovies.map((movie) => (
          <Grid item xs={12} sm={4} md={3} key={movie.imdbID}>
            <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
