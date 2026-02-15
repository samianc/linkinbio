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
import ReactMarkdown from 'react-markdown'
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
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        alignItems="flex-start"
      >
        <Card
          sx={{
            maxWidth: 420,
            width: '100%',
            aspectRatio: '1 / 1',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <CardMedia
            component="img"
            image={album.coverImage}
            alt={album.title}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Card>
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h2">{album.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {album.artist} · {formatYear(album.year)}
          </Typography>
          <Box
            sx={{
              color: 'text.primary',
              '& h1': { typography: 'h4', mb: 1 },
              '& h2': { typography: 'h6', mt: 2, mb: 1 },
              '& p': { typography: 'body1', mt: 0, mb: 2 },
              '& ol': { pl: 3, mt: 0, mb: 0 },
              '& li': { typography: 'body1', mb: 0.5 },
            }}
          >
            <ReactMarkdown>{album.description}</ReactMarkdown>
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
