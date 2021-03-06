// displays a message when form submission is successful
import { toast } from 'react-toastify';

export const toastifySuccess = () => {
  toast.success(
    '😊Thank you for getting in touch! I will get back in touch with you soon. Have a great day!',
    {
      icon: false,
      theme: 'dark',
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export const toastifyFailure = () => {
  toast.error('Something went wrong! Please try again.', {
    theme: 'dark',
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};