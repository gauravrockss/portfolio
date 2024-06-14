import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../components/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Heading from '../components/Heading';

const tagStyles = {
    background: 'linear-gradient(90deg, #00B05F, #009A51)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 550,
};

const About = () => {
    return (
        <>
            <Heading title='About me' />
            <Box
                id='aboutme'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    my: 5,
                }}>
                <Grid container spacing={2}>
                    <Grid
                        item
                        lg={4}
                        xs={12}
                        data-aos='zoom-in-up'
                        sx={{ textAlign: { lg: 'left', xs: 'center' } }}>
                        <Image name='profile.png' sx={{ height: 280 }} />
                        <Box
                            sx={{
                                mx: { lg: 0, xs: 'auto' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background:
                                    'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                                padding: '15px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                width: 280,
                                transition: 'background-color 0.3s', // Smooth transition for background color chan
                                borderColor: 'transparent',
                                backgroundClip: 'padding-box',
                            }}>
                            <FacebookIcon
                                sx={{
                                    fontSize: 28,
                                    margin: '0 10px',
                                    color: '#3b5998',
                                    transition: 'transform 0.3s, color 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.2)',
                                        color: '#2d4373',
                                    },
                                }}
                            />
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
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        xs={12}
                        sx={{ mt: 5 }}
                        data-aos='zoom-in-up'>
                        <Box my={2}>
                            <Typography variant='h4' sx={tagStyles}>
                                Transforming visions into
                            </Typography>
                            <Typography variant='h4' sx={tagStyles}>
                                exceptional portfolios
                            </Typography>
                        </Box>
                        <Typography variant='h6' sx={{ color: '#D0D0D0' }}>
                            Hello, I'm Gaurav Gupta, a passionate Frontend
                            Developer with over two years of experience in
                            crafting innovative and user-centric web
                            applications. My journey in the world of web
                            development has been fueled by a relentless drive to
                            create seamless and engaging user experiences.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default About;
