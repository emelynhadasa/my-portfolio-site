import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ConfessionBox = () => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:emelyndhadasa@gmail.com?subject=Hey, I'm from your portfolio website ;)&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="confession-box">
      <h2>You might want to confess something...</h2>
      <p>
        Don’t worry! Your message will be sent<br /> to Em’s Google Mail. <img src="../../public/images/wink2.png" className="wink-icon" alt="Wink Icon" />
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          rows={3}
          value={message}
          onChange={handleMessageChange}
          placeholder="E.g. Would you be happy to collaborate with me ..."
          className="confession-form"
          style={{ fontFamily: 'var(--inter)', textAlign: 'left', paddingLeft: '1rem' }}
        />
        <Button variant="primary" type="submit" className="confession-btn">
          Send
        </Button>
      </form>
    </div>
  )
}

export default ConfessionBox
