import { Box, Typography } from '@mui/material';
import React from 'react';

const Heading = ({ title }) => {
    return (
        <>
            <Box textAlign='center' data-aos='fade-up'>
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 550,
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                            content: '""',
                            display: 'block',
                            width: '110%', // Make underline slightly larger than text
                            height: '4px', // Initial thickness of the underline
                            background:
                                'linear-gradient(to right, #02E47A, #00b4d8)',
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            transform: 'translateX(-50%)', // Center the underline
                            transition: 'all 0.3s ease',
                        },
                        '&:hover::after': {
                            width: '130%', // Increase width on hover
                            background:
                                'linear-gradient(to right, #00b4d8, #02E47A)', // Reversed gradient on hover
                        },
                    }}>
                    {title}
                </Typography>
            </Box>
        </>
    );
};

export default Heading;
