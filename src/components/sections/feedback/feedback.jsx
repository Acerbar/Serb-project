import { useEffect, useState, useRef, StrictMode} from "react";
import { TitleH3, TitleH4 } from "../../texts/Titles/Titles";
import IntlTelInput from "intl-tel-input/react";
import emailjs from '@emailjs/browser';
import "intl-tel-input/styles";
import "./feedback.css";
import Dialog from "./dialog";



export default function Feedback(){
    const form = useRef();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, hasNameError] = useState(false);
    const [emailError, hasEmailError] = useState(false);
    const [messageError, hasMessageError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isValid, setIsValid] = useState(null);
    const [number, setNumber] = useState(null);

const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
        function handleName(event){
            setName(event.target.value)
            hasNameError(event.target.value.trim().length === 0)
            }

        function handlePhone(event){
            setPhone(event.target.value)
            }

        function handleEmail(event){
            setEmail(event.target.value)
            hasEmailError(event.target.value.trim().length === 0)
        }

        function handleMessage(event){
            setMessage(event.target.value)
            hasMessageError(event.target.value.trim().length === 0)
        }

 
        const sendEmail = (e) => {
            e.preventDefault();
            console.log("fine")
        
            // emailjs
            //   .sendForm('service_5yl0172', 'template_zu72zuj', form.current, {
            //     publicKey: '9Esbwqnu18oTb4WKi',
            //   })
            //   .then(
            //     () => {
            //       console.log('SUCCESS!')
            //       openModal();
            //     },
            //     (error) => {
            //       console.log('FAILED...', error.text);
            //     },
            //   );
          };
    return(
       <section className="feedback">
        <Dialog open={isModalOpen} onClose={closeModal}/>
        <div className="container">
        <TitleH3>Have questions_?</TitleH3>
            <TitleH4>Write to us!</TitleH4>
            <form id="form" className="feedback-form" ref={form} onSubmit={sendEmail}>
                <input 
                    type="text" 
                    name="email-b" 
                    id="email-b" 
                    placeholder="Ваш email"/>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                name="name"
                id="name" 
                placeholder="Type in your name"
                value={name}
                onChange={handleName}
                required
                style={{
                    border: nameError ? '1px solid red' : null 
                }}/>
                <label htmlFor="phone">Phone</label>
                {/* <input 
                type="tel"
                name="phone"
                id="name" 
                placeholder="Type in your number"
                // value={phone}
                onChange={handlePhone}
                required
                style={{
                    border: phoneError ? '1px solid red' : null 
                }}/> */}
                <IntlTelInput
                    name = 'phone'
                    id = 'phone'
                    onChangeNumber={setNumber}
                    onChangeValidity={setIsValid}
                    initOptions={{
                        initialCountry: "us",
                        utilsScript: "path/to/utils.js",
                        separateDialCode: true,
                        strictMode: true,
                    }}
                    inputProps={{
                        placeholder: "Type in your number"
                    }}            
                    
                    initialCountry="us"
                    utilsScript="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
                />
                <label htmlFor="email">E-mail</label>
                <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="Type in your e-mail"
                value={email}
                onChange={handleEmail}
                required
                style={{
                    border: emailError ? '1px solid red' : null 
                }}/>
                <label htmlFor="textarea">Your message</label>
                <textarea 
                name="message" 
                id="textarea" 
                rows="10" 
                placeholder="Type in your message"
                value={message}
                onChange={handleMessage}
                required
                style={{
                    border: messageError ? '1px solid red' : null 
                }}
                />
                <button 
                // disabled={"hasNameError || hasEmailError || hasMessageError"}
                className="feedback-button" type="submit" value="Send" onClick={openModal}>Submit</button>
            </form>
        </div>
       </section>
    )
    
}
