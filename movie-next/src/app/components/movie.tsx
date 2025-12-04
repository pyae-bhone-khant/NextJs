import {
   Box,
   Card,
   CardMedia,
   CardContent,
   Typography,
   Button,
} from "@mui/material"
import { MovieType } from "../type/global"

 const poster = "http://image.tmdb.org/t/p/w200"


export default function Movie({movie} : {movie : MovieType}) {
    return (
       <Card  
       
          sx={{
            width: 200,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.1)",
            },
            cursor: "pointer",       // optional: shows pointer on hover
          }}
           
           key={movie.id} > 
             <Button 
              href={`/movie/${movie.id}`}
              >

            <CardMedia 
            
              component="img"
              image={poster + movie.poster_path}
              alt={movie.title}
              sx={{ height: 300, width: 200, objectFit: 'cover' , bgcolor : "gray"  }}
            />
            <CardContent>
              <Typography variant="subtitle1" noWrap>
                {movie.title}
              </Typography>  
              <Typography sx={{color : "gray" , mt : 1}}>
                {movie.release_date}
              </Typography>

            </CardContent>
             </Button>
          </Card>
    )
}