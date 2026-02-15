import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { formatYear } from '../utils/formatters.js'

function AlbumCard({ album }) {
  return (
    <Card>
      <CardActionArea component={RouterLink} to={`/albums/${album.id}`} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, justifyContent: 'flex-start' }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: 100, md: '100%' }, height: { xs: 100, md: 180 }, flexShrink: 0 }}
          image={album.coverImage}
          alt={album.title}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Stack spacing={1.5}>
            <Stack spacing={0.5}>
              <Typography variant="h6">{album.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {album.artist} · {formatYear(album.year)}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AlbumCard
