'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { AuthContextProvider } from "../app/context/AuthContext.js";



export function Providers({children}) {
  return (
    <NextUIProvider className='h-screen p-4 w-screen'>
      <NextThemesProvider attribute="class" defaultTheme='light'>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
 
      </NextThemesProvider>
    </NextUIProvider>
  )
}