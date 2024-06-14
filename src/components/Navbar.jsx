import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navButtonStyles = {
        color: 'grey',
        textTransform: 'capitalize',
        marginLeft: '10px',
        fontWeight: '550',
        fontSize: '16px',
        marginRight: '10px',
        '&:hover': {
            color: 'white',
        },
    };

    const contactButtonStyles = {
        backgroundColor: '#00B05F',
        color: 'white',
        textTransform: 'capitalize',
        borderRadius: '5px',
        fontWeight: 'bold',
        marginLeft: 'auto',
        display: { lg: 'block', xs: 'none' },
        '&:hover': {
            backgroundColor: '#009A51',
        },
    };

    const tagStyles = {
        background: 'linear-gradient(90deg, #00B05F, #009A51)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
    const titleStyles = {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        mr: 'auto',
    };
    const scrollToSection = id => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose();
    };

    return (
        <Box sx={{ flexGrow: 1, my: 3 }}>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: '#333',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '15px',
                }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Typography variant='h6' component='div' sx={titleStyles}>
                        <NavLink
                            to='/'
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                mr: 'auto',
                            }}>
                            <span style={tagStyles}>&lt;</span>Gaurav
                            <span style={tagStyles}>/&gt;</span>
                        </NavLink>
                    </Typography>

                    {isMobile ? (
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                sx={{ marginLeft: 'auto' }}
                                onClick={handleMenu}>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}>
                                {[
                                    'Home',
                                    'About Me',
                                    'Skills',
                                    'Work',
                                    'Experience',
                                    'Contact',
                                ].map(text => (
                                    <MenuItem
                                        key={text}
                                        onClick={() =>
                                            scrollToSection(
                                                text
                                                    .replace(/\s+/g, '')
                                                    .toLowerCase()
                                            )
                                        }>
                                        {text}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            {[
                                'Home',
                                'About Me',
                                'Skills',
                                'Work',
                                'Experience',
                            ].map(text => (
                                <Button
                                    sx={navButtonStyles}
                                    key={text}
                                    onClick={() =>
                                        scrollToSection(
                                            text
                                                .replace(/\s+/g, '')
                                                .toLowerCase()
                                        )
                                    }>
                                    {text}
                                </Button>
                            ))}
                        </Box>
                    )}
                    <Button
                        variant='contained'
                        sx={contactButtonStyles}
                        onClick={() => scrollToSection('contact')}>
                        Contact Me
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
