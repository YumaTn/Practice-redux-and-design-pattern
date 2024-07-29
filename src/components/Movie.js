import { Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { COVER_PLACEHOLDER, IMAGES_PATH } from '../config'
import Movies from './Movies'
const Movie = ({movie,genres}) => {

    const GridStyled = styled(Grid)(({theme}) =>({
        marginBottom:theme.spacing(3)
    }));

    const ImgStyled = styled('img')({
        width:'100%',
    })

    const formatRuntime =(runtime) =>{
        const hours = Math.floor(runtime/60) +'h';
        const minutes = Math.floor(runtime%60)+'m';

        return`${hours} ${minutes}`
    }
  return (
    <>
    <Grid container spacing={2}>
        <GridStyled item md={3}>
            {
                movie.poster_path ?
                <ImgStyled src={`${IMAGES_PATH}/w300${movie.poster_path}`} alt={movie.title}/>
                :
                <ImgStyled src={`${COVER_PLACEHOLDER}/w300${movie.poster_path}`} alt={movie.title}/>
            }
        </GridStyled>
        <Grid item md={9}>
            <Typography variant="h4" gutterBottom>
                {movie.title}
            </Typography>
                {
                    movie.tagline && (
                        <>
                            <Typography component="h3" variant='h6'>
                                Tagline:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {movie.tagline}
                            </Typography> 
                            <Typography component="h3" variant='h6'>
                                Genres:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {movie.genres
                                    .map((genre) => genre.name)
                                    .join(", ")
                                }
                            </Typography>
                            <Typography component="h3" variant='h6'>
                                Country:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {movie.production_countries
                                    .map((country) => country.name)
                                }
                            </Typography>
                        </>
                    )
                }

                {
                    movie.runtime && (
                        <>
                            <Typography component="h3" variant='h6'>
                                Duration:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {formatRuntime(movie.runtime)}
                            </Typography> 
                        </>
                    )
                }
                {
                    movie.release_date && (
                        <>
                            <Typography component="h3" variant='h6'>
                                Release Date:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {new Date(movie.release_date).toLocaleDateString("en-US",{
                                    year:"numeric",
                                    month:"long",
                                    day:'numeric',
                                })}
                            </Typography> 
                        </>
                    )
                }

                {
                    movie.release_date && (
                        <>
                            <Typography component="h3" variant='h6'>
                                OverView:
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                {movie.overview}
                            </Typography> 
                        </>
                    )
                }
        </Grid>
    </Grid>{
        movie.recommendations && (
            <>
                <Typography component="h3" variant='h6'>
                    Recommend:
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {movie.overview}
                </Typography> 
                <Movies movies={movie.recommendations} genres={genres}/>
            </>
        )
    } 
    </>    
)
}

export default Movie