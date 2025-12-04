import {
  Typography,
  Box,
  Divider,
 

} from "@mui/material"; 

import { Grid, Card, CardMedia, CardContent,} from '@mui/material';

import { MoveIcon } from "lucide-react";
import { headers } from "next/headers";

import { MovieType } from "./type/global";
import Movie from "./components/movie";

async function fetchTrending(): Promise<MovieType[]> {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      "Authorization": `Bearer ${process.env.TMDB_KEY}`,
    },
  });

  const data = await res.json()

  return data.results;
}  
//  This is popular movie 
async function fetchPopular(): Promise<MovieType[]> {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      "Authorization": `Bearer ${process.env.TMDB_KEY}`,
    },
  });

  const data = await res.json()

  return data.results;
}

export default async function Home() {
  const trending = await fetchTrending();
  const  popular = await fetchPopular();

  
  return (
    <Box >
         {/* This is traning movie  */}
      <Typography variant="h4">   Trending this day  </Typography>
      <Divider />
       <Box display="flex" justifyContent="center" p={2}  >
      <Box  display="grid"  gridTemplateColumns="repeat(5, 1fr)"  gap={4}  > 
        {trending.map((movie) => (
            <Movie key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box> 
     {/* This is popular movie  */}
     <Typography variant="h4"> This is popular movie   </Typography>
     <Divider />
       <Box display="flex" justifyContent="center" p={2}  >
      <Box  display="grid"  gridTemplateColumns="repeat(5, 1fr)"  gap={4}  > 
         {/* This is traning movie  */}
        {popular.map((movie) => (
            <Movie key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
    </Box>
  )
}