import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaRegEye, FaCommentDots, FaClock } from "react-icons/fa";

const softSkills = [
    { name: 'Problem Solving', icon: FaLightbulb },
    { name: 'Team Collaboration', icon: FaUsers },
    { name: 'Vision, visualization', icon: FaRegEye },
    { name: 'Effective Communication', icon: FaCommentDots },
    { name: 'Time management', icon: FaClock }
];

const cardVariants = {
    initial: { opacity: 0, scale: 0.9, rotateX: 0, rotateY: 0 },
    animate: { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 },
    whileHover: {
        scale: 1.1,
        rotateX: 10,
        rotateY: 10,
        boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    },
};

const SoftSkills = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl text-white"
            >
                Soft
                <span className="text-cyan-500"> Skills</span>
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6"
            >
                {softSkills.map(({ name, icon: Icon }) => (
                    <motion.div
                        key={name}
                        variants={cardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="whileHover"
                        className="relative rounded-lg border border-neutral-700 p-4 flex flex-col items-center justify-center cursor-pointer bg-neutral-900 hover:bg-neutral-800 transition-colors duration-300 perspective-1000"
                    >
                        <Icon className="text-3xl md:text-4xl text-cyan-500 mb-3" />
                        <span className="text-neutral-300 text-sm font-medium">{name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default SoftSkills;
