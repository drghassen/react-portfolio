import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>
            <div className="flex flex-col items-center justify-center">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center mx-auto max-w-4xl">
                        <div className="flex items-start w-full lg:w-1/4 text-center lg:text-left mb-6 lg:mb-0">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="text-sm text-neutral-400 lg:pr-0"
                            >
                                {experience.year}
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="hidden lg:block border-l-2 border-neutral-700 h-full lg:mx-20"></motion.div>
                        </div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-3/4 text-center lg:text-left"
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -
                                <span className="text-sm text-purple-10"> {experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" style={{ color: '#FFB4D2' }}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
