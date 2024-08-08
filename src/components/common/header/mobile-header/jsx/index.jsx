import React, { useState } from 'react';

const HamburgerMenu = ({ header_data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="focus:outline-none" onClick={toggleMenu}>
                <div className={`w-6 h-[2px] bg-black my-1 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-black my-1 transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-black my-1 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
            { 
        
                isOpen && (
        
                    <div className="absolute top-20 left-0 w-screen h-screen bg-pink_bg transition-opacity duration-500 ease-in-out flex flex-col gap-8 items-center justify-center">
                        {
                            header_data.map( ( item, index ) => (
                            
                                <div key={index}>
                                    <a href="/">
                                        <p className="font-Poppins uppercase font-medium">{item.data.title}</p>
                                    </a>
                                </div>

                            ))
                            
                        }
                    </div>

                )
                
            }
        </>
    );
};

export default HamburgerMenu;
