import React from 'react'
import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import AlbumCard from '../components/AlbumCard.jsx'
import albums from '../data/albums.js'

function HomePage() {
  const featured = albums.slice(0, 3)

  return (
    <Stack spacing={{ xs: 4, md: 6 }}>
      <Hero />

      <AnimatedSection delay={150}>
        <Stack spacing={2} sx={{ mb: 2 }}>
          <Typography variant="h2">Featured releases</Typography>
          <Typography variant="body1" color="text.secondary">
            Curated picks from the latest IV Room drops.
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {featured.map((album) => (
            <Grid item xs={12} md={4} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            border: '1px solid rgba(20, 17, 15, 0.08)',
            background: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h3">Listen everywhere</Typography>
            <Typography variant="body1" color="text.secondary">
              Spotify, Apple Music, YouTube Music, and Soundcloud links are
              available on every release.
            </Typography>
            <Button variant="contained" component={RouterLink} to="/albums">
              View all albums
            </Button>
          </Stack>
        </Box>
      </AnimatedSection>
    </Stack>
  )
}

export default HomePage
