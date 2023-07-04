import React from 'react'
import ToggleThemeButton from './buttons/ToggleThemeButton'
import logoGIF from '../assets/animation.gif'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full bg-white dark:bg-black-light">
      <div className="mx-auto container px-4 xl:px-32">
        <div className="min-h-7.5vh flex justify-between items-center">
          <a className="hover:cursor-pointer" href="https://pintu.co.id/">
            <img src={logoGIF} alt="Pintu Logo" width="100" />
          </a>
          <ToggleThemeButton />
        </div>
        <div className="min-h-87.5vh w-full">{children}</div>
        <div className="min-h-5vh flex items-center justify-center dark:text-white">
          Jovan Karuna Cahyadi
        </div>
      </div>
    </div>
  )
}

export default Layout
