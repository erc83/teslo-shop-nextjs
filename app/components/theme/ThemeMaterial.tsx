'use client'

import { lightTheme , darkTheme } from "@/themes"
import { ThemeProvider } from "@emotion/react"
import React from "react"
import { CssBaseline } from '@mui/material';

interface Props {
    children?: React.ReactNode
}

const ThemeMaterial = ({ children }: Props) => {
  return (
    <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}

export default ThemeMaterial