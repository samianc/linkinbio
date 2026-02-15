import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

function LinkGrid({ title, links }) {
  if (!links || links.length === 0) {
    return null
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
        {links.map((link) => (
          <Button
            key={link.label}
            variant="outlined"
            color="primary"
            component="a"
            href={link.url}
            target="_blank"
            rel="noreferrer"
            size="small"
          >
            {link.label}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

export default LinkGrid
