import { Grid, MenuItem, TextField, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/search';
import Downshift from 'downshift';
import { IMAGES_PATH, COVER_PLACEHOLDER } from '../config';
import { Link } from 'react-router-dom';
import mapGenres from '../lib/helper';

const Suggestion = ({ movies,genres }) => {
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        if (!event.target.value) {
            return;
        }

        dispatch(searchMovies(event.target.value));
    };

    const PaperStyled = styled(Paper)({
        backgroundColor:'#222222',
        top:-40,
        position:'relative',
    })

    const MenuStyled=styled(MenuItem)({
        paddingBottom:5,
        paddingTop:5,
    })

    const LinkStyled=styled(Link)({
        display:'block',
        textDecoration:'none',
        color:'white'
    })

    const itemToString =() =>"";

    return (
        <Downshift itemToString={itemToString}>
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
            }) => (
                <div style={{width:'80%'}}>
                    <TextField
                        id="search"
                        placeholder="Search"
                        fullWidth
                        sx={{
                            mb: 5,
                        }}
                        inputProps={{
                            ...getInputProps({
                                onChange: handleInputChange,
                            }),
                        }}
                    />
                    {isOpen ? (
                        <PaperStyled square={true} {...getMenuProps()}>
                            {
                                movies.results
                                    .slice(0, 10)
                                    .filter((item) =>
                                        !inputValue ||
                                        item.title
                                            .toLowerCase()
                                            .includes(inputValue.toLowerCase())
                                    ).map((item, index) => (
                                        <MenuStyled
                                            {...getItemProps({
                                                item,
                                                key: item.id,
                                                selected: highlightedIndex === index,
                                                style: {
                                                    fontWeight: selectedItem === item ? 300 : 200,
                                                },
                                            })}
                                        >
                                            <LinkStyled to={`/movie/${item.id}`}>
                                                <Grid container spacing={8}>
                                                    <Grid item>
                                                        {item.poster_path ? (
                                                            <img src={`${IMAGES_PATH}/w92${item.poster_path}`} alt={item.title} />
                                                        ) : (
                                                            <img src={COVER_PLACEHOLDER} alt={item.title} />
                                                        )}
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Typography variant='h6'>
                                                            {item.title}
                                                        </Typography>
                                                        <Typography variant='caption'>
                                                        {mapGenres(item.genre_ids,genres)}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </LinkStyled>
                                        </MenuStyled>
                                    ))}
                        </PaperStyled>
                    ) : null}
                </div>
            )}
        </Downshift>
    );
};

export default Suggestion;