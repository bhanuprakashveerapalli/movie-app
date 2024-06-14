// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box,  } from '@mui/material';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { Movie, MovieDetails as MovieDetailsType } from './types';
import axios from 'axios';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsType | null>(null);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?s=Batman&apikey=16b5e08d`);
      const data = response.data;
      if (data.Search) {
        setMovies(data.Search);
      }
    };

    fetchDefaultMovies();
  }, [API_KEY]);

  const handleMovieSelect = async (movie: Movie) => {
    const response = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=16b5e08d`);
    const movieDetails: MovieDetailsType = response.data;
    setSelectedMovie(movieDetails);
  };

  const handleSearch = async (title: string) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=16b5e08d`);
    const data = response.data;
    if (data.Search) {
      setMovies(data.Search);
      setSelectedMovie(null);
    }
  };

  const handleBackToHome = () => {
    setSelectedMovie(null);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Movie Search App Developed by Bhanu
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie} onBackToHome={handleBackToHome} />
        ) : (
          <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
        )}
      </Box>
    </Container>
  );
};

export default App;
