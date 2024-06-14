import React from 'react';
import Heading from '../components/Heading';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { projectsData } from '../utils/skillsImages';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Work = () => {
    return (
        <>
            <Heading title={'My work'} />{' '}
            <Box
                id='work'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '90vh',
                    my: 5,
                }}>
                <Grid container spacing={2}>
                    {projectsData.slice(0, 3).map(data => (
                        <Grid item lg={4} xs={12} data-aos='zoom-in-up'>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    mx: 'auto',
                                    background: '#3D3E42',
                                    color: 'white',
                                    p: 2,
                                    borderRadius: '10px',
                                    position: 'relative', // Add position relative for the pseudo-element
                                    '&::after': {
                                        // Add pseudo-element for the border
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        borderRadius: '10px',
                                        pointerEvents: 'none', // Ensure the pseudo-element is not clickable
                                        boxShadow:
                                            '0 0 0 3px transparent, inset 0 0 0 3px transparent', // Apply transparent border initially
                                        transition: 'box-shadow 0.3s', // Add transition for smooth effect
                                    },
                                    '&:hover::after': {
                                        // Adjust border color on hover
                                        boxShadow:
                                            '0 0 0 3px rgba(2, 228, 122, 0.5), inset 0 0 0 3px rgba(2, 228, 122, 0.5)', // Apply linear gradient border
                                    },
                                }}>
                                <Image
                                    sx={{ height: 140 }}
                                    name={data.image}
                                    title='green iguana'
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant='h6'
                                        fontWeight='550'>
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{ color: '#D0D0D0' }}>
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={data.live} target='_blank'>
                                        <Button
                                            variant='contained'
                                            sx={{
                                                textTransform: 'capitalize',
                                                background:
                                                    'linear-gradient(to right, #02E47A, #00b4d8)', // Green linear gradient background for button
                                                borderRadius: '5px', // Add border radius to match card
                                                color: 'white', // Text color
                                                '&:hover': {
                                                    background:
                                                        'linear-gradient(to left, #02E47A, #00b4d8)', // Reverse gradient on hover
                                                },
                                            }}>
                                            Live preview
                                        </Button>
                                    </Link>
                                    <Link to={data.git} target='_blank'>
                                        <Button
                                            variant='outlined'
                                            sx={{
                                                border: 'none',
                                                background:
                                                    'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                                                textTransform: 'capitalize',
                                                // Green linear gradient background for button
                                                borderRadius: '5px', // Add border radius to match card
                                                color: 'white', // Text color
                                                '&:hover': {
                                                    border: 'none',
                                                },
                                            }}>
                                            Check on GitHub
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box textAlign='center' data-aos='zoom-in-up'>
                <Link to={'/more-project'}>
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        variant='contained'
                        sx={{
                            my: 3,
                            mb: 10,
                            textTransform: 'capitalize',
                            background:
                                'linear-gradient(to right, #02E47A, #00b4d8)', // Green linear gradient background for button
                            borderRadius: '5px', // Add border radius to match card
                            color: 'white', // Text color
                            '&:hover': {
                                background:
                                    'linear-gradient(to left, #02E47A, #00b4d8)', // Reverse gradient on hover
                            },
                        }}>
                        Show More
                    </Button>
                </Link>
            </Box>
        </>
    );
};

export default Work;
