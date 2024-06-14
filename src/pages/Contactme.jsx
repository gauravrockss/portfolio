import React from 'react';
import Heading from '../components/Heading';
import { Box, Button, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Contactme = () => {
    return (
        <>
            <Heading title={'Contact Me'} />{' '}
            <Box
                id='contact'
                sx={{
                    my: 8,
                }}>
                <Box
                    sx={{
                        mb: 5,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Grid container spacing={2} justifyContent='center'>
                        <Grid item xs={12} sm={6} lg={4} data-aos='zoom-in-up'>
                            <Button
                                startIcon={<MailIcon fontSize='large' />}
                                variant='outlined'
                                size='large'
                                fullWidth
                                sx={{
                                    border: 'none',
                                    fontSize: {
                                        xs: '16px',
                                        sm: '20px',
                                        md: '25px',
                                    },
                                    background:
                                        'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                                    textTransform: 'lowercase',
                                    borderRadius: '5px',
                                    color: 'white',
                                    '&:hover': {
                                        border: 'none',
                                    },
                                }}>
                                itsgaurav6392@gmail.com
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            data-aos='zoom-in-up'>
                            <Button
                                startIcon={<MailIcon fontSize='large' />}
                                variant='outlined'
                                size='large'
                                fullWidth
                                sx={{
                                    border: 'none',
                                    fontSize: {
                                        xs: '16px',
                                        sm: '20px',
                                        md: '25px',
                                    },
                                    background:
                                        'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                                    textTransform: 'lowercase',
                                    borderRadius: '5px',
                                    color: 'white',
                                    '&:hover': {
                                        border: 'none',
                                    },
                                }}>
                                +91 6392212192
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
                    data-aos='zoom-in-up'>
                    <Button
                        startIcon={<MailIcon fontSize='large' />}
                        variant='outlined'
                        size='large'
                        sx={{
                            widht: { md: 'auto', xs: '100%' },
                            border: 'none',
                            fontSize: { xs: '16px', sm: '20px', md: '25px' },
                            background:
                                'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                            textTransform: 'capitalize',
                            borderRadius: '5px',
                            color: 'white',
                            '&:hover': {
                                border: 'none',
                            },
                        }}>
                        Gonda, Uttar Pradesh India
                    </Button>
                </Box>
                <Box
                    data-aos='zoom-in-up'
                    sx={{
                        mx: { lg: 0, xs: 'auto' },
                        my: 6,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '15px',
                        position: 'relative',
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            width: 'calc(50% - 150px)', // Adjust according to your needs
                            height: '2px',
                            background:
                                'linear-gradient(to right, #02E47A, #00b4d8)',
                        },
                        '&::before': {
                            left: 0,
                        },
                        '&::after': {
                            right: 0,
                        },
                        transition: 'background-color 0.3s',
                        borderColor: 'transparent',
                        backgroundClip: 'padding-box',
                    }}>
                    <Link to='https://www.facebook.com/people/Gaurav-Gupta/pfbid02f9XWNRiJGBBRyovEs3ardVtKHzrhaBktxaAdWSri6udoMgFo3zBMMjZtfXVibb8Bl/'>
                        <FacebookIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#0e76a8',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#2d4373',
                                },
                            }}
                        />
                    </Link>
                    <Link to='https://x.com/home'>
                        <TwitterIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#00acee',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#0084b4',
                                },
                            }}
                        />
                    </Link>
                    <Link to='https://www.instagram.com/gauravgupta6392/'>
                        <InstagramIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#C13584',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#bc2a8d',
                                },
                            }}
                        />
                    </Link>
                    <Link to='https://www.linkedin.com/in/gaurav-gupta-63181627a/'>
                        <LinkedInIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#0e76a8',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#005582',
                                },
                            }}
                        />
                    </Link>
                    <Link to='https://github.com/gauravrockss'>
                        <GitHubIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#000000',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#333333',
                                },
                            }}
                        />
                    </Link>
                    <Link to='https://mail.google.com/mail/u/0/'>
                        <MailIcon
                            sx={{
                                fontSize: 28,
                                margin: '0 10px',
                                color: '#d14836',
                                transition: 'transform 0.3s, color 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.2)',
                                    color: '#c5221f',
                                },
                            }}
                        />
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Contactme;
