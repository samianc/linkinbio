import React, { useEffect, useState } from 'react'
import { Fade, Box } from '@mui/material'

function AnimatedSection({ children, delay = 0 }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Fade in={mounted} timeout={800}>
      <Box>{children}</Box>
    </Fade>
  )
}

export default AnimatedSection
