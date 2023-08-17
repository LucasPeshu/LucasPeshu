import React, { useRef, useState, useEffect } from 'react';
import BgCard from '../components/BgCard';
import whatsapp from '../img/whatsapp-svgrepo-com.svg';
import linkedin from '../img/linkedin-svgrepo-com.svg';
import emailjs from '@emailjs/browser';
import contact from '../img/contact.svg';

const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xvftoi', 'template_6bgvjvc', form.current, 'wF7UzqgQwpzPcvf32')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setAlert('success');
        },
        (error) => {
          console.log(error.text);
          setAlert('error');
        }
      );
  };

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(null); 
      }, 5000); 

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert]);

  return (
    <section id="contact" className="h-screen grid place-items-center text-white">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <BgCard>
          <div className="p-4">
            <div className="grid grid-cols-2">
              <h2 className="text-xl font-semibold mb-4">Formulario de Contacto</h2>
              <div className="place-self-end">
                <a href="https://www.linkedin.com/in/lucas-pereira-da-silva-b6316b1ab/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 py-2 px-4 rounded-xl shadow-md  mr-2">
                    <img src={linkedin} className="w-5" alt="LinkedIn" />
                  </button>
                </a>
                <a href="https://api.whatsapp.com/send?phone=543534012553" target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 py-2 px-4 rounded-xl shadow-md">
                    <img src={whatsapp} className="w-5" alt="WhatsApp" />
                  </button>
                </a>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input className="w-full p-2 rounded-md bg-[#0F0F10]" type="text" name="user_name" />
              <label>Email</label>
              <input className="w-full p-2 rounded-md bg-[#0F0F10]" type="email" name="user_email" />
              <label>Message</label>
              <textarea className="w-full p-2 rounded-md bg-[#0F0F10]" name="message" />
              <input className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2" type="submit" value="Send" />
            </form>


            {alert === 'success' && (
              <div className="mt-4 p-2 bg-green-500 text-white rounded-md">
                Correo enviado con éxito.
              </div>
            )}
            {alert === 'error' && (
              <div className="mt-4 p-2 bg-red-500 text-white rounded-md">
                Error al enviar el correo.
              </div>
            )}
          </div>
        </BgCard>
        <img src={contact} className="hidden lg:block" alt="Contact" />
      </div>
    </section>
  );
};

export default Contact;