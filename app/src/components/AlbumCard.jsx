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
      <CardActionArea component={RouterLink} to={`/albums/${album.id}`}>
        <CardMedia
          component="img"
          height="180"
          image={album.coverImage}
          alt={album.title}
        />
        <CardContent>
          <Stack spacing={1.5}>
            <Stack spacing={0.5}>
              <Typography variant="h6">{album.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {album.artist} · {formatYear(album.year)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {album.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AlbumCard
