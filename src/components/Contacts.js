import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import contactsAvatar from '../assets/img/contactsAvatar.svg'
import { useForm } from 'react-hook-form';
//Animation
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import {motion} from 'framer-motion'

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_kCXB3pkiAi4JWj1VGMohn";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
            }).catch(err => console.err(`Something went wrong ${err}`));
    }

    return (
        <div id="contacts" className="contacts align-items-center">

            <div className="contacts-wrapper">
                <div className="avatar-wrapper d-flex justify-content-center">
                    <Fade>
                        <img className="c-Avatar" src={contactsAvatar} alt="cAvatar"></img>
                    </Fade>
                </div>
                <div className="text-center">
                    <div className="d-flex justify-content-center my-5">
                        <Flip left cascade>
                            <h1 className="header">Contact Me</h1>
                        </Flip>
                    </div>
                    <p>Please fill out the form below.</p>

                    <span className="success-message">{successMessage}</span>

                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-1">
                            <div className="col-md-6 col-xs-12">
                                {/* NAME INPUT */}
                                <div className="text-center">
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        {...register("name",
                                            {
                                                required: true,
                                                maxLength: 25
                                            }
                                        )}
                                    />
                                    <div className="line"></div>

                                </div>
                                {errors.name && errors.name.type === "required" && (
                                    <span className="error-message" role="alert">Please input your name</span>
                                )}
                                {errors.name && errors.name.type === "maxLength" && (
                                    <span className="error-message" role="alert">Max Length exceeded</span>
                                )}

                                {/* PHONE INPUT */}
                                <div className="text-center">
                                    <input
                                        id="text"
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number (Optional)"
                                        name="phone"
                                        {...register("phone",
                                            {
                                                required: false,
                                            }
                                        )}
                                    />
                                    <div className="line"></div>

                                </div>


                                {/* EMAIL INPUT */}
                                <div className="text-center">
                                    <input
                                        id="email"
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        {...register("email",
                                            {
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            }
                                        )}
                                    />
                                    <div className="line"></div>

                                </div>
                                {errors.email && errors.email.type === "required" && (
                                    <span className="error-message" role="alert">Please add your email address</span>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <span className="error-message" role="alert">Invalid email address</span>
                                )}

                                {/* SUBJECT INPUT */}
                                <div className="text-center">
                                    <input
                                        id="subject"
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        name="subject"
                                        {...register("subject",
                                            {
                                                required: true,
                                            }
                                        )}
                                    />
                                    <div className="line"></div>

                                </div>
                                {errors.subject && errors.subject.type === "required" && (
                                    <span className="error-message" role="alert">Oops! You forgot to add your subject</span>
                                )}
                            </div>

                            <div className="col-md-6 col-xs-12">
                                {/* DESCRIPTION */}
                                <div className="text-center">
                                    <textarea
                                        id="description"
                                        input="text"
                                        className="form-control"
                                        placeholder="Please describe your query..."
                                        name="description"
                                        {...register("description",
                                            {
                                                required: true,
                                            }
                                        )}
                                    ></textarea>
                                    <div className="line"></div>

                                </div>
                                {errors.description && errors.description.type === "required" && (
                                    <span className="error-message" role="alert">Please add a description of your query</span>
                                )}

                                <motion.button 
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(255,255,255)"
                                }} 
                                className="btn-main-offer contacts-btn" type="submit">Submit</motion.button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts
