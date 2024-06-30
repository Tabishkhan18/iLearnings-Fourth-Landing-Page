import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPlus } from "react-icons/fa6";

const MainContent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showDetails, setShowDetails] = useState({ section1: false, section2: false, section3: false });

    const toggleDetails = (section) => {
        setShowDetails((prevState) => ({ ...prevState, [section]: !prevState[section] }));
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='flex flex-col pt-10 md:pt-32 md:px-56 px-5 bg-gradient-to-b from-blue-50 to-white divide-y-2'>
            <div className="header md:mb-32 mb-20 flex flex-col md:flex-row ">
                <div className="content md:w-2/3">
                    <h1 className="text-4xl md:text-5xl text-blue-500 font-bold mt-20">
                        Career Guidance with the Founder.
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                    It offers personalized mentorship tailored to your career goals. Benefit from our founder's industry expertise, strategic insights, and exclusive networking opportunities. Gain a clear roadmap and valuable advice to navigate your career path effectively, ensuring growth and success in your professional endeavors.
                    </p>

                    <div className='form flex flex-row my-10'>
                        <input id="email" type="email" className="mt-1 block w-2/3 p-2 border  border-gray-300 rounded-md shadow-sm" placeholder='Email' />
                        <button type="submit" className="bg-blue-500 text-white md:px-10 py-2 md:ms-10 ms-4 rounded-md w-1/3">Submit</button>
                    </div>
                </div>
                <div className="image" >
                    <img src="../img.svg" alt="Description of the image" className='w-[30rem] md:mx-10' />
                </div>
            </div>


            <div className="learnmore">

                <div className="section1 flex justify-between flex-col md:flex-row md:my-32 my-20">
                    <img src="../img1.svg" alt="Description of the image" className='md:w-1/3 h-full rounded-lg' style={{ width: '450px', height: '300px' }} />
                    <section className="md:w-2/3 text-left md:mx-20 my-10 md:my-0">
                        <h2 className="md:text-5xl text-3xl font-semibold text-gray-500">Personalized Career Roadmaps</h2>
                        <p className='md:text-xl text-lg my-5'>Our founder offers one-on-one career guidance sessions that provide you with a customized career roadmap. These sessions are designed to help you navigate your career path effectively, whether you are just starting out or seeking a career change.</p>
                        <button onClick={() => toggleDetails('section1')} className="text-blue-500 text-xl mt-5 font-bold hover:underline-offset-4 hover:underline">
                            {showDetails.section1 ? '- Learn More' : '+Learn More'}
                        </button>
                        {showDetails.section1 && (
                            <div className="mt-4 ">
                                <p className='md:text-xl text-lg'>Get personalized advice and a step-by-step plan tailored to your professional aspirations. Our founder's expertise will help you identify your goals and outline the actions needed to achieve them, ensuring a clear direction for your career journey.</p>
                                <ul className='md:text-xl text-lg m-10'>
                                    <li className='list-disc'>Tailored career advice based on individual goals and aspirations.</li>
                                    <li className='list-disc'>Step-by-step action plan to achieve professional milestones.</li>
                                    <li className='list-disc'>Expert guidance from a seasoned industry leader.</li>
                                    <li className='list-disc'>Clear and structured direction for your career path.</li>
                                </ul>
                            </div>
                        )}
                    </section>
                </div>

                <div className="section1 flex justify-between flex-col-reverse md:flex-row md:my-32  my-20">
                    <section className="md:w-2/3 text-left my-10 md:my-0 md:me-20">
                        <h2 className="md:text-5xl text-3xl font-semibold text-gray-500">Industry Insights and Expertise</h2>
                        <p className='md:text-xl text-lg my-5'>Leverage the wealth of industry knowledge and experience from our founder. These sessions focus on providing deep insights into your chosen field, highlighting key trends, necessary skills, and strategies to excel.</p>
                        <button onClick={() => toggleDetails('section2')} className="text-blue-500 text-xl mt-5 font-bold hover:underline-offset-4 hover:underline">
                            {showDetails.section2 ? '- Learn More' : '+Learn More'}
                        </button>
                        {showDetails.section2 && (
                            <div className="mt-4 ">
                                <p className='md:text-xl text-lg'>Benefit from the founder's extensive experience and insider knowledge of your industry. Learn about the latest trends and essential skills needed to succeed, and gain practical advice to stay ahead in a competitive job market.</p>
                                <ul className='md:text-xl text-lg m-10'>
                                    <li className='list-disc'>In-depth understanding of industry-specific trends and opportunities.</li>
                                    <li className='list-disc'>Identification of key skills and competencies required for success.</li>
                                    <li className='list-disc'>Practical advice grounded in real-world experience.</li>
                                    <li className='list-disc'>Strategies to maintain a competitive edge in your field.</li>
                                </ul>
                            </div>
                        )}
                    </section>
                    <img src="../img.jpg" alt="Description of the image" className='md:w-1/3 h-full rounded-lg' style={{ width: '450px', height: '300px' }} />
                </div>

                <div className="section1 flex justify-between flex-col md:flex-row md:my-32  my-20">
                    <img src="../img3.avif" alt="Description of the image" className='md:w-1/3 h-full rounded-lg' style={{ width: '450px', height: '300px' }} />
                    <section className="md:w-2/3 text-left md:mx-20 my-10 md:my-0">
                        <h2 className="md:text-5xl text-3xl font-semibold text-gray-500">Networking and Professional Growth</h2>
                        <p className='md:text-xl text-lg my-5'>Our founder's career guidance includes exclusive networking opportunities and professional growth strategies. You'll gain access to a broad professional network and receive tips on building and maintaining valuable industry connections.</p>
                        <button onClick={() => toggleDetails('section3')} className="text-blue-500 text-xl mt-5 font-bold hover:underline-offset-4 hover:underline">
                            {showDetails.section3 ? '- Learn More' : '+Learn More'}
                        </button>
                        {showDetails.section3 && (
                            <div className="mt-4 ">
                                <p className='md:text-xl text-lg'>Enhance your career prospects by connecting with influential industry professionals and mentors. Our founder's sessions will guide you on effective networking, personal branding, and leveraging relationships to advance your career.</p>
                                <ul className='md:text-xl text-lg m-10'>
                                    <li className='list-disc'>Access to a broad and influential professional network.</li>
                                    <li className='list-disc'>Guidance on effective networking techniques and strategies.</li>
                                    <li className='list-disc'>Tips on building and maintaining a strong personal brand.</li>
                                    <li className='list-disc'>Insights on leveraging professional relationships for career advancement.</li>
                                </ul>
                            </div>
                        )}
                    </section>
                </div>
            </div>


            <div className="facts">
                <div className="main-bottom md:px-20 flex flex-col md:flex-row items-center">
                    <div className='md:pb-10 m-4'>
                        <h2 className="text-4xl font text-blue-500 my-10">
                        Insights from Our Career Guidance with the Founder
                        </h2>
                        <ul className="text-md md:px-14 px-8 py-8 list-disc border-2 border-dashed p-2">
                            <li className='py-1'>Personalized Mentorship Yields Higher Success Rates</li>
                            <li className='py-1'>Industry Knowledge is a Key Differentiator</li>
                            <li className='py-1'>Networking Accelerates Career Growth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainContent;
