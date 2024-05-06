/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import FooterSocmed from './FooterSocmed'

const Footer = () => {
  return (
    <div className="footer">
      <img src="/images/slogan.png" className='footer-slogan'/>
      <p>Best way to feel alive is to create connection. <img src="/images/fire.png" className='fire-icon'/></p>
      <FooterSocmed />
    </div>
  )
}

export default Footer
