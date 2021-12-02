import React from 'react';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <h3 className="text-5xl text-center text-white">Blog Is Coming Soon.....</h3>
            <NavLink to="/" className="text-2xl text-white py-4 px-8 bg-red-600 rounded-xl">Back to Home</NavLink>
        </div>
    );
};

export default Blogs;