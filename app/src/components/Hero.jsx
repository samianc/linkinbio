import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { floatIn } from '../styles/animations.js'

function Hero() {
  return (
    <Box
      sx={{
        borderRadius: { xs: 4, md: 6 },
        p: { xs: 3, md: 6 },
        mb: { xs: 4, md: 6 },
        background:
          'linear-gradient(135deg, rgba(15, 61, 62, 0.12), rgba(231, 127, 91, 0.18))',
        border: '1px solid rgba(20, 17, 15, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top, rgba(255, 255, 255, 0.6), transparent 55%)',
          opacity: 0.8,
        }}
      />
      <Stack spacing={2.5} sx={{ position: 'relative' }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ letterSpacing: '0.2em' }}
        >
          IV ROOM MUSIC LABEL
        </Typography>
        <Typography variant="h1" sx={{ maxWidth: 620, animation: `${floatIn} 900ms ease` }}>
          A focused catalog of atmospheric house and forward grooves.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
          Explore the full discography with direct links to streaming, merch,
          and distribution partners.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/albums"
          >
            Browse releases
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://soundcloud.com"
            target="_blank"
            rel="noreferrer"
          >
            Listen on Soundcloud
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Hero
