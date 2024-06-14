import React from 'react';
import Heading from '../components/Heading';
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const Experience = () => {
    return (
        <>
            <Heading title='Experience' />
            <Box
                id='experience'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    my: 5,
                }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h4' data-aos='zoom-in-up'>
                            Frontend Developer (June 2022 - Present)
                        </Typography>
                        <List sx={{ mt: 3 }}>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Designed and developed innovative web applications for diverse clients, leveraging modern web technologies.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Implemented responsive and user-friendly interfaces using HTML, CSS, JavaScript, and popular frameworks like React.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Developed robust backend solutions with Node.js and Express, ensuring efficient data handling and API integration.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Utilized version control systems (Git) to manage and track project progress, ensuring seamless collaboration and code quality.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                        </List>
                        <Typography
                            variant='h5'
                            sx={{ mt: 2 }}
                            data-aos='zoom-in-up'>
                            Key Achievements :
                        </Typography>
                        <List>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Successfully delivered over 15+ web projects, enhancing client satisfaction and achieving repeat business.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Improved application performance and user experience through effective optimization and code refactoring.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                            <ListItem data-aos='zoom-in-up'>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: '#02E47A' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stayed updated with the latest industry trends and technologies, continuously improving development skills and project outcomes.'
                                    primaryTypographyProps={{ variant: 'h6' }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Experience;
