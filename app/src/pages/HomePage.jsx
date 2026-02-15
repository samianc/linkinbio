import React from 'react'
import { Box, Stack } from '@mui/material'
import Hero from '../components/Hero.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import AlbumCard from '../components/AlbumCard.jsx'
import albums from '../data/albums.js'

function HomePage() {
  const featured = albums.slice(0, 3)

  return (
    <Stack spacing={{ xs: 4, md: 6 }}>
      <AnimatedSection delay={150}>
        <Box
          sx={{
            display: { xs: 'grid', md: 'grid' },
            gap: 3,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            overflowX: 'visible',
            pb: { xs: 1, md: 0 },
          }}
        >
          {featured.map((album) => (
            <Box
              key={album.id}
              sx={{}}
            >
              <AlbumCard album={album} />
            </Box>
          ))}
        </Box>
      </AnimatedSection>
    </Stack>
  )
}

export default HomePage
