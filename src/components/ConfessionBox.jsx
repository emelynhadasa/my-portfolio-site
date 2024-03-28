import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap' 

const ConfessionBox = () => {
  const [message, setMessage] = useState('')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/confessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
      if (response.ok) {
        console.log('You have successfully sent it to Emelyn!')
      } else {
        console.error('Nuh-uh, your message failed to be delivered!')
      }
    } catch (error) {
      console.error('Error submitting message:', error)
    }
  }

  return (
    <div className="confession-box">
      <h2>You might want to confess something...</h2>
      <p>Don’t worry! Your message to Emelyn won’t be seen <br/> by other site visitors. <img src="../../public/images/wink2.png" className="wink-icon"/></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formConfession">
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={handleMessageChange}
            placeholder="E.g. Would you be happy to collaborate with me ..."
            className='confession-form'
            style={{ fontFamily: 'var(--inter)', textAlign: 'left', paddingLeft: '1rem' }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='confession-btn'>Send</Button>
      </Form>
    </div>
  )
}

export default ConfessionBox
