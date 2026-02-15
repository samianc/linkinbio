import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f3d3e',
    },
    secondary: {
      main: '#e77f5b',
    },
    background: {
      default: '#f7f2ec',
      paper: '#ffffff',
    },
    text: {
      primary: '#14110f',
      secondary: '#4b3f39',
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
          background: 'rgba(247, 242, 236, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#14110f',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(20, 17, 15, 0.08)',
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
          border: '1px solid rgba(20, 17, 15, 0.08)',
          boxShadow: '0 24px 40px -32px rgba(16, 33, 33, 0.45)',
        },
      },
    },
  },
})

export default theme
