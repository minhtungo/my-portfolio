import { CustomForm, CustomButton } from './ContactStyles';

import { Row, Col, Form } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <CustomForm>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Your name'
              name='name'
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mt-3 mt-md-0 mb-3'>
            <Form.Control
              type='email'
              placeholder='Your email'
              name='email'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className='mt-3 mt-md-0 mb-3'>
        <Form.Control
          type='text'
          placeholder='Subject'
          name='subject'
          required
        />
      </Form.Group>
      <Form.Group className='mt-3 mb-3'>
        <Form.Control
          as='textarea'
          rows={3}
          placeholder='Message'
          name='message'
          required
        />
      </Form.Group>
      <div className='text-center'>
        <CustomButton variant='primary' type='submit'>
          Send Message
        </CustomButton>
      </div>
    </CustomForm>
  );
};

export default ContactForm;
