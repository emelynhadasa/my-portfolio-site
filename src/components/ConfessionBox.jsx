import React from 'react'
import { Button } from 'react-bootstrap'

const ConfessionBox = () => {
  const handleSendEmail = () => {
    const recipientEmail = 'emelyndhadasa@gmail.com'
    const subject = 'Hey, I\'m from your portfolio website ;)' // Default subject

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="confession-box">
      <h2>You might want to <br/> approach me by e-mail <img src="../../public/images/mail.png" className="mail-icon" alt="Mail Icon" /></h2>
      <p>
        Don’t worry! Your message will be sent<br /> to Em’s personal Google Mail. <img src="../../public/images/wink2.png" className="wink-icon" alt="Wink Icon" />
      </p>
      <Button variant="primary" onClick={handleSendEmail} className="confession-btn">
        Write me mail
      </Button>
    </div>
  )
}

export default ConfessionBox
