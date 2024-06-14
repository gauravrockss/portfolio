import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, IconButton, Button } from '@mui/material';
import Typing from 'react-typing-effect';
import Image from '../components/Image';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Experience from './Experience';
import Contactme from './Contactme';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tagStyles = {
    background: 'linear-gradient(90deg, #00B05F, #009A51)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.5rem',
};

const titleStyles = {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    mr: 'auto',
};

const Main = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1200 });

        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Box>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '90vh',
                        my: 5,
                    }}>
                    <Grid item lg={6} xs={12} data-aos='fade-up'>
                        <Typography variant='h4' fontWeight='560'>
                            Hi, I'm
                        </Typography>
                        <Typography
                            variant='h3'
                            fontWeight='560'
                            sx={{
                                my: 1,
                                background:
                                    'linear-gradient(90deg, #00B05F, #009A51)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                            <Typing
                                text={['Gaurav Gupta.']}
                                speed={100}
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={1000}
                            />
                        </Typography>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={titleStyles}>
                            A Passionate
                            <span style={tagStyles}>
                                {' '}
                                &lt;Frontend Web Developer
                            </span>
                            <span style={tagStyles}> /&gt; </span>
                            with 2 years of experience creating user-friendly
                            websites.
                        </Typography>
                        <Box sx={{ mt: 3 }}>
                            <Button
                                component='a'
                                href='https://pink-geneva-34.tiiny.site/' // Replace with the actual URL of your website where the resume is hosted
                                target='_blank' // Open the link in a new tab
                                rel='noopener noreferrer' // Required for security reasons
                                variant='contained'
                                size='small'
                                sx={{
                                    background:
                                        'linear-gradient(to right, #00B05F, #009A51)',
                                    color: 'white',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        background:
                                            'linear-gradient(to right, #009A51, #00B05F)',
                                    },
                                    boxShadow: 3,
                                    px: 2,
                                    py: 1,
                                    fontSize: '18px',
                                }}>
                                View Resume
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={12} data-aos='fade-up'>
                        <Image name='robot.png' />
                    </Grid>
                </Grid>
            </Box>
            <About />
            <Skills />
            <Work />
            <Experience />
            <Contactme />

            {/* Scroll to top button */}
            {showScrollButton && (
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        background: 'linear-gradient(90deg, #00B05F, #009A51)',
                        color: 'white',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: '1000', // ensure button stays above other content
                    }}
                    color='primary'
                    size='large'
                    aria-label='scroll-to-top'>
                    <ArrowUpwardIcon />
                </IconButton>
            )}
        </>
    );
};

export default Main;
