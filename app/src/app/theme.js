import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4db8ba',
    },
    secondary: {
      main: '#ff9a76',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      fontWeight: 700,
      fontSize: '2.6rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      fontWeight: 700,
      fontSize: '2.1rem',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif",
      fontWeight: 600,
      fontSize: '1.6rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#f0f0f0',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 24px 40px -32px rgba(0, 0, 0, 0.6)',
        },
      },
    },
  },
})

export default theme
