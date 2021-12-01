import React from 'react';
import styles from "../Banner/Banner.module.css"

const AboutME = () => {
    return (
        <div className="my-24 px-12">
            <h1 className="text-5xl text-center font-semibold text-gray-100">KNOW ABOUT <span className={`${styles.textColor}`}>MYSELF</span></h1>
            <div className=" md:grid grid-cols-2 items-center justify-space-between gap-2 mt-20">
                <div>
                    <img className="rounded-full" src="https://i.ibb.co/12qvcWk/86701680-v-4.jpg" placeholder="portfolio image" />
                </div>
                <div>
                    <p className="text-gray-100 text-xl">Hello! I am <span className={styles.textColor}>Hasan Al Mubashwir</span>. And I am a Junior Web Developer. I have been started learning Web Development 1 year ago. I have no job experience. But I have done few many projects before. I learned Web development from Programming Hero. I done all of projects professionally. And I am sorry because I can't show any projects in this portfolio for some reasons. In the next update of this portfolio, I will show all of my projects that I've done before</p>
                </div>
            </div>
        </div>
    );
};

export default AboutME;