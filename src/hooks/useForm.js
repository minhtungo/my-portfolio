import { useState } from 'react';

import { toastifySuccess, toastifyFailure } from '../components/ToastMessage';
import emailjs from 'emailjs-com';

export default function useForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event, name, email, subject, message, reset) => {
    event.preventDefault();
    try {
      setIsSending(true);
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      setIsSending(false);
      toastifySuccess();
    } catch (e) {
      toastifyFailure();
      setIsSending(false);
      console.log(e);
    }
  };

  return { isSending, handleSubmit };
}
