import {
    Typography,
    Box, Divider,
    Card, CardMedia,
    CardContent
} from "@mui/material";
import { MovieType, personType } from "../../type/global";


async function fetchMovie(id: number): Promise<MovieType> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_KEY}`,
        },
    })

    return await res.json();
}
//  fetchCast 
async function fetchCast(id: number): Promise<personType> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        headers: {
            "Authorization": `Bearer ${process.env.TMDB_KEY}`,
        },
    })

    const result = await res.json();
    return result.cast;
}

export default async function Movie({ params }: { params: Promise<MovieType> }) {
    const { id } = await params;
    const movie = await fetchMovie(id);
    const cast = await fetchCast(id);

    const cover = "http://image.tmdb.org/t/p/w1280";
    const profile = "http://image.tmdb.org/t/p/w185"
    return (
        <Box >

            <Typography sx={{ fontSize: 28, mb: 3 }}  >
                {movie.title} ({movie.release_date.split("-")[0]})

            </Typography>
            <Box sx={{ width: "800px" }} >
                <img width={900} src={cover + movie.backdrop_path} />
            </Box>
            <Box sx={{ mt: 3, fontSize: 25 }}>{movie.title} Overview</Box>
            <Typography sx={{ mt: 3, fontSize: 18 }}>
                {movie.overview}
            </Typography>

            <Divider sx={{ mt: 3 }} />

            <Typography sx={{ fontSize: 28, mt: 3, }} >Cast</Typography>
            <Box display="flex" justifyContent="center" p={2}  >
                <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={4}  >
                    {cast.map((person: personType) => {
                        return (

                            <Card sx={{
                                width: 200,
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                },
                                cursor: "pointer",       // optional: shows pointer on hover
                            }}

                                key={person.id} >
                                <CardMedia component="img" image={profile + person.profile_path} sx={{ height: 300, width: 200, objectFit: 'cover', bgcolor: "gray" }} />
                                <CardContent>
                                    <Typography variant="subtitle1" noWrap>
                                        {person.name}
                                    </Typography>
                                    <Typography sx={{ color: "gray", mt: 1 }}>
                                        {person.character}
                                    </Typography>

                                </CardContent>

                            </Card>
                        );
                    })}

                </Box>
            </Box>

        </Box>
    )
}