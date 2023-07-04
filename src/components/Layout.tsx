import React from 'react'
import ToggleThemeButton from './buttons/ToggleThemeButton'
import logoGIF from '../assets/animation.gif'
import { ReactComponent as GithubIcon } from '../assets/github.svg'
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg'

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}): JSX.Element => {
  return (
    <div className="h-full bg-white dark:bg-black-light">
      <div className="mx-auto container px-4 xl:px-32">
        <div className="min-h-7.5vh flex justify-between items-center">
          <a className="hover:cursor-pointer" href="https://pintu.co.id/">
            <img src={logoGIF} alt="Pintu Logo" width="100" />
          </a>
          <ToggleThemeButton />
        </div>
        <div className="min-h-80vh w-full">{children}</div>
        <div className="min-h-5vh flex items-center justify-center dark:text-white gap-5">
          Jovan Karuna Cahyadi
          <a
            className="hover:cursor-pointer"
            href="https://www.linkedin.com/in/jovan-karuna-cahyadi/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="w-12" />
          </a>
          <a
            className="hover:cursor-pointer circle dark:bg-white"
            href="https://github.com/JovanKaruna/pintu-market"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="w-10" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Layout
