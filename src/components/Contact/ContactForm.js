import { useState } from 'react';

import useForm from '../../hooks/useForm';
import { CustomForm, CustomButton } from './ContactStyles';

import { Row, Col, Form, Spinner } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const { isSending, handleSubmit } = useForm();

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <CustomForm
      onSubmit={(event) =>
        handleSubmit(event, name, email, subject, message, reset)
      }
    >
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Form.Group>
      <div className='text-center'>
        <CustomButton variant='primary' type='submit' disabled={isSending}>
          {isSending ? (
            <>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              /> Sending...
              <span className='visually-hidden'>Sending...</span>
            </>
          ) : (
            'Send Message'
          )}
        </CustomButton>
      </div>
    </CustomForm>
  );
};

export default ContactForm;
