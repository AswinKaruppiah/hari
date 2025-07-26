import {
    animateFadeYVariants,
    animateYStriggerVariants,
} from "@/utils/animate";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="about-main-container">
            <div className="about-sub-container">
                <div className="text-container">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={animateFadeYVariants()}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Why Travel With Explore Ease?
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={animateFadeYVariants({ opacityValue: 0.7 })}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut quaerat necessitatibus at veniam corporis officiis delectus alias pariatur nostrum doloremque reiciendis, iure odio, unde deleniti animi adipisci eveniet temporibus.
                    </motion.p>
                </div>

                <motion.div
                    variants={animateYStriggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0 }}
                    className="image-container"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={animateFadeYVariants()}
                        viewport={{ once: true, amount: 0.5 }}
                        className="first-image">
                        <div className="first-image-section">
                            <img
                                src="/images/about-image1.jpg"
                                alt="Woman traveler in desert landscape"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={animateFadeYVariants()}
                        viewport={{ once: true, amount: 0.5 }}
                        className="sec-image">
                        <div className="sec-image-section">
                            <img
                                src="/images/about-image2.jpg"
                                alt="Male traveler with backpack"
                            />
                        </div>
                    </motion.div>
                </motion.div>




            </div>
        </div>
    );
}
