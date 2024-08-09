import PropTypes from 'prop-types';
import { useState } from 'react';
import LOGO from "../assets/LOGO.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar({ aboutRef, technologiesRef, experienceRef, projectsRef, contactRef, softSkillsRef }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            {/* Logo Section */}
            <div className="flex flex-shrink-0 items-center">
                <img
                    style={{ width: '100px', height: 'auto' }}
                    src={LOGO}
                    alt="LOGO"
                    className="cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => scrollToSection(aboutRef)}
                />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex lg:hidden">
                <button
                    className="text-2xl text-cyan-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Navigation Links and Social Media Icons */}
            <div className={`lg:flex lg:items-center lg:gap-8 lg:text-xl transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'flex flex-col items-center gap-4 mt-8 text-lg menu-open' : 'hidden menu-close'
                }`}>
                {/* Navigation Links */}
                {['About', 'Technologies', 'Soft Skills', 'Experience', 'Projects', 'Contact'].map((section, index) => {
                    const refs = [aboutRef, technologiesRef, softSkillsRef, experienceRef, projectsRef, contactRef];
                    return (
                        <span
                            key={section}
                            onClick={() => scrollToSection(refs[index])}
                            className="relative cursor-pointer text-cyan-500 group hover:text-[#8CBED6] transition-transform duration-300 transform hover:scale-105"
                        >
                            {section}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:bg-[#8CBED6]"></span>
                        </span>
                    );
                })}

                {/* Download CV Button */}


                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-5 text-2xl mt-4 lg:mt-0">
                    <a href="https://www.linkedin.com/in/ghassen-dridi-b2bb08284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
                    </a>
                    <a href="https://github.com/drghassen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="hover:text-gray-400 transition-colors duration-300" />
                    </a>
                    <a href="https://www.instagram.com/drghassen/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
                    </a>
                    <a href="https://www.facebook.com/ghassendridisousse/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="hover:text-blue-700 transition-colors duration-300" />
                    </a>
                    <a href="https://x.com/DridiGhass18086" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <FaSquareXTwitter className="hover:text-blue-400 transition-colors duration-300" />
                    </a>
                </div>
            </div>
            {/* <a
                href="/src/CV.pdf"  // Ensure this path is correct
                download="CV.pdf"  // Suggests the downloaded filename
                className="relative inline-block  px-3 py-2 rounded-lg border font-semibold text-black overflow-hidden group"
            >
                <span className="absolute inset-0 bg-[#eeeeee] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 flex items-center space-x-2">
                    <span style={{ color: 'GrayText' }}>Download CV</span>
                    <FaCloudDownloadAlt style={{ color: 'GrayText' }} />
                </span>
            </a> */}

        </nav>

    );
}

NavBar.propTypes = {
    aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    technologiesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    experienceRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    projectsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    softSkillsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default NavBar;
