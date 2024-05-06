/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import MyLogo from '/images/landing-logo.png'

const LandingHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const landingLogo = document.querySelector('.landing-logo img')
      const landingHeaderHeight = document.querySelector('.landing-header').clientHeight
      const scrollY = window.scrollY

      // Hitung opasitas berdasarkan pergerakan scroll
      const opacity = 1 - scrollY / landingHeaderHeight
      landingLogo.style.opacity = opacity >= 0 ? opacity : 0 // Pastikan opasitas tidak kurang dari 0

      // Atur z-index agar gambar tetap berada di atas konten
      landingLogo.style.zIndex = opacity > 0 ? '1' : '-1'
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="landing-header">
      <div className='landing-text'>
        <p className="header-text">
          <span className="italic-landing-header">Hey, I'm</span>
          <br />
          <span className="big-landing-header">EMELYN HADASA</span>
        </p>
      </div>
      <div className='landing-logo'>
        <img src={MyLogo} alt="landing-logo"/>
      </div>
    </div>
  )
}

export default LandingHeader
