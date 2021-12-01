import React from 'react';
import style from './Banner.module.css'
import TypeAnimation from 'react-type-animation';

const Banner = () => {
    return (
        <div className="py-32 px-12">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h1 className="text-gray-100 text-2xl">Hello there</h1>
                    <h1 className="text-gray-100 text-2xl">I am <span className={`${style.textColor} text-4xl`}>Hasan Al Mubashwir</span></h1>
                    <br /><br />
                    <h1 className=" text-3xl font-bold text-gray-100">
                        A professional &nbsp;
                        <TypeAnimation
                            className={`${style.textColor} inline`}
                            cursor={true}
                            sequence={[
                                'Junior Web Developer',
                                1000,
                                'Front-end Developer',
                                1000,
                                'Mern-stack Developer',
                                1000,
                                'JavaScript Developer',
                                1000,
                                'React.js Developer',
                                1000,
                                'Back-end Developer'
                            ]}
                            repeat={Infinity}
                        />
                    </h1>


                    <button className="mt-5 bg-red-500 text-green-50 font-semibold py-2 px-6 rounded-lg">
                        <a href="../../../../../../Resume/Resume of Mubashwir.pdf" download>Download Resume</a>
                    </button>
                </div>
                <div>
                    <img src="https://i.ibb.co/wW8rHpc/business-people-working-laptop-development-1262-18907.jpg" alt="Portfolio Banner" />
                </div>
            </div>
        </div>

    );
};

export default Banner;