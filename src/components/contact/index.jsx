import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_90kspi6', 'template_xetef42', e.target, 'JRhvRPTSo0vxkRolk')
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    emailjs
      .sendForm('service_90kspi6', 'template_9l1fgvk', e.target, 'JRhvRPTSo0vxkRolk')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className='bg-primary pt-10 pb-10' id='contact'>
      <div id='title' className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3'>Contact Me!</h1>
        <p className='font-body text-gray-500'>
          Feel free to reach out to me for any questions or opportunities.
        </p>
        <div id='contactCard' className='mt-10 border border-purple-500 rounded-lg md:p-8 p-5 flex flex-col md:mx-auto max-w-lg mx-5'>
          <h1 className='text-start font-body text-white text-2xl font-semibold'>Email Me 🚀</h1>
          <form onSubmit={sendEmail} className='flex flex-col gap-5 mt-5'>
            <input
              type='email'
              className='input-style'
              autoComplete='off'
              placeholder='Your Email'
              name='to_email'
              required
            />
            <input
              type='text'
              className='input-style'
              autoComplete='off'
              placeholder='Your Name'
              name='from_name'
              required
            />
            <input
              type='text'
              className='input-style'
              autoComplete='off'
              placeholder='Subject'
              name='subject'
              required
            />
            <textarea
              rows='6'
              className='input-style'
              placeholder='Message'
              name='message'
              required
            ></textarea>
            <button
              type='submit'
              className='p-3 bg-purple-500 text-white text-xl font-body rounded-lg'
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-primary border border-purple-500 text-white font-body p-8 rounded-lg text-center mx-5 sm:mx-0 max-w-md w-full'>
            <h2 className='text-2xl font-semibold mb-4'>Thank You!</h2>
            <p className='text-lg'>
              Your message has been sent successfully.
              I will get back to you as soon as possible.
            </p>
            <button
              onClick={closeModal}
              className='mt-6 p-3 bg-purple-500 text-white text-xl font-body rounded-lg'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
