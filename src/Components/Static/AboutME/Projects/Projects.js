import React, { useEffect, useState } from 'react';
import styles from '../../Home/Banner/Banner.module.css'

const Projects = () => {
    const projects = [
        {
            name: 'Honda CBR',
            codeLink: 'https://github.com/mubashwirphero1/honda-cbr',
            liveLink: 'https://honda-cbr-bootstrap-assignment-mubashwirphero1.netlify.app',
            img: 'https://i.ibb.co/2h51dzX/Screenshot-2021-12-03-at-18-42-23-Honda-Bootstrap-Assignment-Programming-Hero.png'
        },
        {
            name: 'Book Archive BD',
            codeLink: 'https://github.com/mubashwirphero1/book-archive',
            liveLink: 'https://bookarchivebd.netlify.app/',
            img: 'https://i.ibb.co/9t8W2dd/Screenshot-2021-12-03-at-18-44-29-Book-Archive-Programming-Hero-Assignment.png'
        },
        {
            name: 'Skill UP',
            codeLink: 'https://github.com/mubashwirphero1/skillup',
            liveLink: 'https://skillup-bd.netlify.app/',
            img: 'https://i.ibb.co/MRjphrn/Screenshot-2021-12-03-at-18-46-55-Skill-UP-Grow-your-skills.png'
        },
        {
            name: 'IMac',
            codeLink: 'https://github.com/mubashwirphero1/mac-book-pro',
            liveLink: 'https://apple-imac-assignment.netlify.app/',
            img: 'https://i.ibb.co/hg73cfk/Screenshot-2021-12-03-at-18-47-45-I-Mac-Programming-Hero-Assignment.png'
        },
        {
            name: 'Programmers Point',
            codeLink: 'https://github.com/mubashwirphero1/programmers-point',
            liveLink: 'https://programmingpoint-bd.netlify.app/',
            img: 'https://i.ibb.co/Mg4RSsB/Screenshot-2021-12-03-at-18-48-33-Programmers-point-Hire-programmers-here.png'
        },
        {
            name: 'Keredok Cars',
            codeLink: 'https://github.com/mubashwirphero1/keredok-cars',
            liveLink: 'https://keredok-car.web.app/',
            img: 'https://i.ibb.co/yVWvXg1/Screenshot-2021-12-03-at-18-49-26-KEREDOK-Car-Showroom-Dealer-Point.png'
        },
        {
            name: 'Bangladesh Dental Care',
            codeLink: 'https://github.com/mubashwirphero1/bangladesh-dental-care',
            liveLink: 'https://denticare-react-aplication.web.app/',
            img: 'https://i.ibb.co/L9CCdQN/Screenshot-2021-12-03-at-18-50-45-Bangladesh-Dental-Care-Make-your-teeth-better.png'
        },
        {
            name: 'Travel Guru',
            codeLink: 'https://github.com/mubashwirphero1/tourism-or-delivery',
            liveLink: 'https://travel-guru-react-mongo-app.web.app/',
            img: 'https://i.ibb.co/TkPNQpn/Screenshot-2021-12-03-at-18-51-52-Travel-GURU-Travel-agency.png'
        }
    ]
    return (
        <div className='my-36'>
            <h1 className="text-gray-100 text-5xl font-semibold text-center">My Best <span className={`${styles.textColor}`}>Projects</span></h1>

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {projects.map((projects) => (
                        <div key={projects.name} className="group relative hover:shadow-2xl transition-all rounded-lg">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={projects.img}
                                    alt='WEB'
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl text-center text-gray-100">
                                    {projects.name}
                                </h3>
                                <div className="flex justify-between items-center m-5">
                                    <a href={projects.codeLink} target='_blank' rel="noreferrer" className='text-lg text-gray-100 hover:text-red-600 py-2 px-4 hover:bg-white rounded-lg transition-all'>Code</a>
                                    <a href={projects.liveLink} target='_blank' rel="noreferrer" className='text-lg text-gray-100 hover:text-red-600 py-2 px-4 hover:bg-white rounded-lg transition-all'>Live Site</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;