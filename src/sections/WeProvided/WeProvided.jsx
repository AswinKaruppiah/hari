import { FaBusAlt } from 'react-icons/fa';
import { RiChatSmileAiLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { animateFadeYVariants, animateYChildVariants, animateYStriggerVariants } from "@/utils/animate";
import { motion } from "framer-motion";

const steps = [
    {
        icon: <FaBusAlt className="text-[#BAF48A] text-4xl " />,
        title: 'Fast Booking',
        description: 'Enjoy buying your bus tickets online from home or on the go, with our mobile friendly site',
    },
    {
        icon: <RiChatSmileAiLine className="text-[#BAF48A] text-4xl " />,
        title: 'Stress Free',
        description: 'The simplest and stress free way to book your bus travel all in one purchase.',
    },
    {
        icon: <GiReceiveMoney className="text-[#BAF48A] text-4xl " />,
        title: 'Spend Less',
        description: 'We have the affordable prices and the best carriers all in one place.',
    },
];


export default function WeProvided() {
    return (
        <div className="we-provided-main">

            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={animateFadeYVariants()}
                viewport={{ once: true, amount: 0.5 }}
                className="best-services-heading">Best Services</motion.h2>

            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={animateFadeYVariants({ opacityValue: 0.7 })}
                viewport={{ once: true, amount: 0.5 }}
                className="best-servives-sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat error qui, vero iste nulla ex maxime veniam rem consequatur animi tenetur voluptate earum cum tempora quod unde! Reiciendis, error corrupti.
            </motion.p>


            <motion.div
                variants={animateYStriggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                className="service-grid">
                {steps.map((step, index) => (
                    <motion.div variants={animateYChildVariants} key={index} className="service-card">
                        <div className="we-provided-icon-layer">
                            <div className="service-icon">{step.icon}</div>
                        </div>
                        <h3 className="service-title">{step.title}</h3>
                        <p className="service-description">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div >
    );
}
