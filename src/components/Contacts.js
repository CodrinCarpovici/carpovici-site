import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form';

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
                <div className="text-center">
                    <h1>Contact Me</h1>
                    <p>Please fill out the form below.</p>
                    <span className="success-message">{successMessage}</span>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
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
                                        placeholder="Phone Number"
                                        name="phone"
                                        {...register("phone",
                                            {
                                                required: true,
                                            }
                                        )}
                                    />
                                    <div className="line"></div>

                                </div>
                                {errors.phone && errors.phone.type === "required" && (
                                    <span className="error-message" role="alert">Please add your phone number</span>
                                )}

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

                                <button className="btn-main-offer contacts-btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts
