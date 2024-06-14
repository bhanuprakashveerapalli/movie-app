// src/types.ts
export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Plot?: string;
  }
  
  export interface MovieDetails extends Movie {
    Plot: string;
  }
  