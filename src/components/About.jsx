import aboutImg from '../assets/pdp.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";
// import { FaCloudDownloadAlt } from 'react-icons/fa';
import { MdOutlineSimCardDownload } from "react-icons/md";


const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl font-bold"
            >
                About
                <span className="text-neutral-500"> Me</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/3 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl shadow-lg' src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6 }}
                    className='w-full lg:w-1/2'
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-20'>{ABOUT_TEXT}</p>
                    </div>
                    <a
                        href="/src/CV.pdf"  // Ensure this path is correct
                        download="CV.pdf"  // Suggests the downloaded filename
                        className="relative inline-block px-5 py-3 rounded-xl border border-gray-300 font-semibold text-gray-700 overflow-hidden group transition-transform transform-gpu hover:scale-105 mt-0" // Adjust margin-top here
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                        <span className="relative z-10 flex items-center space-x-3">
                            <span style={{ color: 'GrayText', fontSize: '1rem' }}>Download CV</span>
                            <MdOutlineSimCardDownload style={{ color: 'GrayText', fontSize: '1.25rem' }} />
                        </span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
