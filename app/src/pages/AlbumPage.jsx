import React, { useMemo, useState } from 'react'
import { Chip, Grid, Stack, Typography } from '@mui/material'
import AnimatedSection from '../components/AnimatedSection.jsx'
import AlbumCard from '../components/AlbumCard.jsx'
import albums from '../data/albums.js'

function AlbumPage() {
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => {
    const tagSet = new Set()
    albums.forEach((album) => album.tags.forEach((tag) => tagSet.add(tag)))
    return ['All', ...Array.from(tagSet)]
  }, [])

  const filtered =
    activeTag === 'All'
      ? albums
      : albums.filter((album) => album.tags.includes(activeTag))

  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <Stack spacing={1}>
        <Typography variant="h2">All releases</Typography>
        <Typography variant="body1" color="text.secondary">
          Select a vibe to narrow the catalog.
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            clickable
            color={activeTag === tag ? 'primary' : 'default'}
            onClick={() => setActiveTag(tag)}
          />
        ))}
      </Stack>

      <AnimatedSection delay={200}>
        <Grid container spacing={3}>
          {filtered.map((album) => (
            <Grid item xs={12} sm={12} md={4} key={album.id}>
              <AlbumCard album={album} />
            </Grid>
          ))}
        </Grid>
      </AnimatedSection>
    </Stack>
  )
}

export default AlbumPage
