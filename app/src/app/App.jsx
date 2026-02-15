import React from 'react'
import { Routes, Route, Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  Stack,
} from '@mui/material'
import routes from './routes.jsx'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src="/logo.png"
              alt="IV Room"
              sx={{ width: 36, height: 36, borderRadius: '50%' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              IV Room
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button component={RouterLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={RouterLink} to="/albums" color="inherit">
              Releases
            </Button>
            <Button
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              Follow
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: '1px solid rgba(20, 17, 15, 0.08)',
          py: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            <Typography variant="body2" color="text.secondary">
              IV Room. Curated releases and immersive sound.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Built for mobile-first listening.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default App
