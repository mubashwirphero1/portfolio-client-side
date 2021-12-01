import React from 'react';


const Loader = () => {
    return (
        <div className="flex items-center justify-center">

            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    );
};

export default Loader;