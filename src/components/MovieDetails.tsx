// src/components/MovieDetails.tsx
import React from 'react';
import { Typography, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { MovieDetails as MovieDetailsType } from '../types';

interface MovieDetailsProps {
  movie: MovieDetailsType;
  onBackToHome: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onBackToHome }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card style={{ maxWidth: 600, width: '100%' }}>
        <Box p={2}>
          <Button variant="contained" color="primary" onClick={onBackToHome} style={{ marginBottom: 16 }}>
            Back
          </Button>
          <CardMedia
            component="img"
            alt={movie.Title}
            height="400"
            image={movie.Poster}
            title={movie.Title}
          />
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {movie.Title}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {movie.Year}
            </Typography>
            <Typography variant="body1">{movie.Plot}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default MovieDetails;
