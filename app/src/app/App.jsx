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
import logo from '../assets/logo.png'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src={logo}
              alt="IV Room"
              sx={{ width: 36, height: 36, borderRadius: '50%' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              IV Room
            </Typography>
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
    </Box>
  )
}

export default App
