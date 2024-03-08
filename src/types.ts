export interface MovieProps {
    id: number | string;
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number[] | undefined;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    results: Movie[];
  }