import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {TerminalCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_55migj3',
                'template_03v54jl',
                {
                    from_name: form.name,
                    to_name: "David",
                    from_email: form.email,
                    to_email: "david@gogodze.dev",
                    message: form.message,
                },
                '1xx-NVZ3rmCT0T1ad'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("something went wrong");
                }
            );
    };

    return (
        <div
            className={`w-full flex xl:flex-row flex-col-reverse overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className=' w-full bg-primary p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-[#151c38] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className='bg-[#151c38] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What do you want to say?'
                            className='bg-[#151c38] py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            {/*<div*/}
            {/*    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full'*/}
            {/*>*/}
            {/*    <TerminalCanvas/>*/}
            {/*</div>*/}

        </div>
    );
};

export default SectionWrapper(Contact, "contact");
