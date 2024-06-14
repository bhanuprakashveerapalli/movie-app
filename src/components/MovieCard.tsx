// src/components/MovieCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onMovieSelect: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieSelect }) => {
  return (
    <Card>
      <CardActionArea onClick={() => onMovieSelect(movie)}>
        <CardMedia
          component="img"
          alt={movie.Title}
          height="300"
          image={movie.Poster}
          title={movie.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
