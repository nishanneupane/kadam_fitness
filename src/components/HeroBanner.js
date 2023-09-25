import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box
    sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
    }}
    position="relative"
    p="20px"
  >
    <Typography color="#ff2625" fontWeight="600" fontSize="26px">
      Kadam Fitness
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Strive
      <br />
      Flex, Flourish
      <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#ff2625',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          boxShadow: '0px 2px 5px 1px gray',
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#ff2625"
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      Work Hard
    </Typography>
    <img
      src={HeroBannerImage}
      alt="hero-banner"
      className="hero-banner-img"
      style={{
        height: '80%',
        // borderRadius: '50%',
        opacity: '0.9',
      }}
    />
  </Box>
);

export default HeroBanner;

