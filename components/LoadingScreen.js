'use client'
import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000) // animation duration + fade buffer

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.loaderWrapper} ${!isVisible ? styles.fadeOut : ''}`}>
      <svg viewBox="0 0 500 100" className={styles.logo}>
        <text x="150" y="80" className={styles.name}>Anmol</text>
      </svg>
    </div>
  )
}
