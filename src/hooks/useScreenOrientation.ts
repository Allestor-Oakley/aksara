// Stolen from: https://stackoverflow.com/a/71640114
import {useState, useEffect} from 'react'

const getOrientation = () =>
  window.screen.orientation.type

const useScreenOrientation = () => {
  const [orientation, setOrientation] =
    useState(getOrientation())

  const updateOrientation = (_: Event) => {
    setOrientation(getOrientation())
  }

  useEffect(() => {
    window.addEventListener(
      'orientationchange',
      updateOrientation
    )
    return () => {
      window.removeEventListener(
        'orientationchange',
        updateOrientation
      )
    }
  }, [])

  return orientation
}

export default useScreenOrientation
