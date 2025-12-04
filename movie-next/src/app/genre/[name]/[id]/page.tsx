import {
    Typography,
    Box,
    Divider,


} from "@mui/material";

import Movie from "@/app/components/movie";
import { GenraType, MovieType } from '../../../type/global';
import { promises } from "dns";
async function fetchGenra(id : number) : Promise<MovieType > {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`, {
    headers: {
      "Authorization": `Bearer ${process.env.TMDB_KEY}`,
    },
  });

  const data = await res.json()

  return data.results;
}  
//  This is popular movie 


export default async function Genra( {params}: { params:  Promise<GenraType> })  {
    const {id , name } = await params;
   const movies = await fetchGenra(id);
  return (
    <Box >
         {/* This is traning movie  */}
      <Typography variant="h4">  {name} </Typography>
      <Divider />
       <Box display="flex" justifyContent="center" p={2}  >
      <Box  display="grid"  gridTemplateColumns="repeat(5, 1fr)"  gap={4}  > 
        {movies.map((movie : MovieType ) => (
            <Movie key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box> 
    
    </Box>
  )
}