import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMongodb, SiMysql, SiNodered, SiSocketdotio, SiMqtt } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
});

const iconData = [
    { Component: RiReactjsLine, name: 'React', color: 'text-cyan-500', duration: 2.5 },
    { Component: TbBrandTypescript, name: 'TypeScript', color: 'text-blue-300', duration: 3 },
    { Component: FaNodeJs, name: 'Node.js', color: 'text-green-500', duration: 4 },
    { Component: SiMongodb, name: 'MongoDB', color: 'text-green-500', duration: 4.5 },
    { Component: SiMysql, name: 'MySQL', color: 'text-blue-200', duration: 2 },
    { Component: SiMqtt, name: 'MQTT', color: 'text-red-500', duration: 2.5 },
    { Component: SiNodered, name: 'Node-RED', color: 'text-red-600', duration: 5 },
    { Component: SiSocketdotio, name: 'Socket.io', color: 'text-gray-400', duration: 2.5 }
];

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {iconData.map(({ Component, name, color, duration }) => (
                    <motion.div
                        key={name}
                        variants={iconVariants(duration)}
                        initial='initial'
                        animate='animate'
                        className="relative rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center cursor-pointer"
                    >
                        <Component className={`text-5xl ${color} transition-opacity duration-300 hover:opacity-0`} />
                        <span className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-90 text-neutral-300 text-sm opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-lg">
                            {name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Technologies;
