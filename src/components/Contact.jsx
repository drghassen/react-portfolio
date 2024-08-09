import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-10">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4 flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-2" /> {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4 flex items-center justify-center">
                    <FaPhoneAlt className="mr-2" /> {CONTACT.phoneNo}
                </motion.p>
                <a href={`mailto:${CONTACT.email}`} className=" flex items-center justify-center my-4">
                    <FaEnvelope className="mr-2" /> {CONTACT.email}
                </a>
            </div>
        </div>
    );
};

export default Contact;
