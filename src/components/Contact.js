import React, { useRef, useEffect } from 'react';
import { MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../helpers/errors/errorMessage';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import Slide from 'react-reveal/Slide';

const FormWithToasts = () => {

    useEffect(() => {
        document.title = "Contact";
    }, []);

    const form = useRef(null);

    const { addToast } = useToasts();

    const {
        register,
        handleSubmit,
        errors,
        formState: { isSubmitting }
    } = useForm();

    const onSubmit = (data) => {

        const target = form.current;

        emailjs.sendForm('gmail', 'template_XDvVhAkd', target, 'user_4WAJEjCbst5IW66yG17Ga')
            .then((result) => {
                target.reset();
                addToast('Message sent successfully', { appearance: 'success', autoDismiss: true })
            }, (error) => {
                addToast("error", { appearance: 'error', autoDismiss: true })
            });

    };

    return (
        <Slide down>
            <div className="row justify-content-center align-items-center pl-3 pr-3 mt-5">
                <MDBCol md="4" >
                    <MDBCard >
                        <MDBCardBody>

                            <form ref={form} onSubmit={handleSubmit(onSubmit)} >

                                <h2 className="text-center mb-4 mt-4">Contact</h2>
                                <hr className="hr-light pink mb-2" />
                                <input type="hidden" name="contact_number" />

                                <div className="form_group field mb-3 ">
                                    <input name="name" type="input" className="form_field" placeholder="Search" ref={register({ required: true })} />
                                    <label className="form_label">Name</label>
                                    <div className="error-field pt-2">
                                        <ErrorMessage error={errors.name} />
                                    </div>
                                </div>

                                <div className="form_group field mb-3">
                                    <input name="email" type="email" className="form_field" placeholder="Search" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                                    <label className="form_label">E-mail</label>
                                    <div className="error-field pt-2">
                                        <ErrorMessage error={errors.email} />
                                    </div>
                                </div>

                                <div className="form_group field mb-3">
                                    <textarea name="message" rows="3" cols="10" className="form_field" placeholder="Subject" ref={register({ required: true })} ></textarea>
                                    <label className="form_label">Subject</label>
                                    <div className="error-field pt-2">
                                        <ErrorMessage error={errors.message} />
                                    </div>
                                </div>

                                <div className="text-center py-4 mt-2">
                                    <button className="fill" disabled={isSubmitting} >Send</button>
                                </div>

                            </form>

                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>
            </div>
        </Slide>
    )
}


export const Contact = () => (

    <ToastProvider>
        <FormWithToasts />
    </ToastProvider>

)
