import React from 'react';
import Heading from '../components/Heading';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Image from '../components/Image';
import { skillsImage } from '../utils/skillsImages';

const Skills = () => {
    return (
        <>
            <Heading title='Skills' />
            <Box
                id='skills'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    my: 5,
                }}>
                <Grid container spacing={2}>
                    {skillsImage.map((skill, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={2}
                            key={index}
                            data-aos='zoom-in-up'>
                            <Card
                                sx={{
                                    background: '#3D3E42',
                                    height: '100%',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s', // Add transition for background color change
                                    '&:hover': {
                                        transform: 'scale(1.05)', // Scale up on hover
                                        background:
                                            'linear-gradient(to left, rgba(2, 228, 122, 0.3), rgba(2, 228, 122, 0.05))',
                                    },
                                }}>
                                <CardContent
                                    sx={{
                                        textAlign: 'center',
                                        padding: '16px',
                                    }}>
                                    <Box
                                        sx={{
                                            width: '100px',
                                            height: '100px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                            borderRadius: '8px',
                                            // Optional: background color for better visibility
                                        }}>
                                        <Image
                                            width='60px'
                                            // height='60px'
                                            src={skill.image}
                                            alt={`Skill ${index}`}
                                            layout='fill'
                                            objectFit='contain' // Contain ensures the image is scaled to fit without being cut off
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: '#D0D0D0',
                                            fontWeight: '550',
                                        }}>
                                        {skill.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Skills;
