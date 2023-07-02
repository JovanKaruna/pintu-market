import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import { ReactComponent as OffIcon } from '../../assets/offIcon.svg'
import { ReactComponent as OnIcon } from '../../assets/onIcon.svg'

export const ToggleThemeButton = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)

  const isDark = (): boolean => {
    return themeContext?.theme === 'dark'
  }

  return (
    <button
      className="focus:outline-none text-black-light dark:text-grey hover:bg-grey-light dark:hover:bg-grey-dark circle p-2"
      onClick={() => {
        themeContext?.setTheme(isDark() ? 'light' : 'dark')
      }}
    >
      {isDark() ? <OnIcon /> : <OffIcon />}
    </button>
  )
}

export default ToggleThemeButton
