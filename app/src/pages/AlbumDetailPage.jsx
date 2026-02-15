import React from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import albums from '../data/albums.js'
import LinkGrid from '../components/LinkGrid.jsx'
import { formatYear } from '../utils/formatters.js'

function AlbumDetailPage() {
  const { albumId } = useParams()
  const album = albums.find((item) => item.id === albumId)

  if (!album) {
    return (
      <Stack spacing={2}>
        <Typography variant="h2">Album not found</Typography>
        <Button variant="contained" component={RouterLink} to="/albums">
          Back to releases
        </Button>
      </Stack>
    )
  }

  const streamingLinks = album.links.filter((link) => link.type === 'streaming')
  const distributionLinks = album.links.filter(
    (link) => link.type === 'distribution'
  )
  const merchLinks = album.links.filter((link) => link.type === 'merch')

  return (
    <Stack spacing={{ xs: 3, md: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Card sx={{ maxWidth: 420, width: '100%' }}>
          <CardMedia component="img" image={album.coverImage} alt={album.title} />
        </Card>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h2">{album.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {album.artist} · {formatYear(album.year)}
          </Typography>
          <Typography variant="body1">{album.description}</Typography>
          <Box>
            <Button variant="outlined" component={RouterLink} to="/albums">
              Back to releases
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Box>
        <LinkGrid title="Streaming" links={streamingLinks} />
        <LinkGrid title="Distribution" links={distributionLinks} />
        <LinkGrid title="Merch" links={merchLinks} />
      </Box>
    </Stack>
  )
}

export default AlbumDetailPage
