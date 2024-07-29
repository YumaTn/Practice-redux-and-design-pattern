import React, { useState } from 'react'
import { Switch, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/image/logo.png'
import { styled } from '@mui/material'
import SearchMoviesSuggestion from '../containers/SearchMoviesSuggestion'

const Img = styled('img')({
    marginLeft: '20px',
    marginRight: 'auto',
    display: 'block',
    width: 50,
    maxWidth: '100%',
    marginBottom: 25,
})

const LayoutWrapper = styled('div')(({ theme }) => ({
    margin: 10,
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: theme.breakpoints.values.lg

    }
}))

const HeaderContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
})
const Layout = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme:dark)');
    const [isMode, setIsMode] = useState(prefersDarkMode);

    const handleTheme = () => {
        if (isMode) {
            setIsMode(false)
        } else {
            setIsMode(true)
        }
    };

    const Theme = createTheme({
        palette: {
            mode: isMode ? 'dark' : "light",
        },
    });
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <LayoutWrapper>
                <HeaderContainer>
                    <Link to='/'>
                        <Img src={logo} alt='The movie' />
                    </Link>
                    <SearchMoviesSuggestion />
                    <Switch
                        checked={isMode}
                        onChange={handleTheme}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </HeaderContainer>
                {children}
            </LayoutWrapper>
        </ThemeProvider>
    );
}

export default Layout;
