import {
  animateFadeYVariants,
  animateYChildVariants,
  animateYStriggerVariants,
} from "@/utils/animate";
import Image from "next/image";
import {
  FaUserTie,
  FaLuggageCart,
  FaClipboardCheck,
  FaBed,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurFacilities() {
  const features = [
    {
      label: "Bus Captain",
      description:
        "Professional bus captain will assist you throughout the journey.",
      icon: FaUserTie,
    },
    {
      label: "Boarding Crew",
      description: "Our trained staff helps you with easy check-in.",
      icon: FaClipboardCheck,
    },
    {
      label: "Luggage Handling",
      description: "Personalized luggage handling by trained staff.",
      icon: FaLuggageCart,
    },
    {
      label: "Comfy Sleepers",
      description: "Unwind in our clean and secure sleeper berths.",
      icon: FaBed,
    },
  ];

  return (
    <section className="our-fecilities-main-container">
      <div className="our-fecilities-sub-container">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={animateFadeYVariants()}
            viewport={{ once: true, amount: 0.5 }}
          >
            Rooted in Comfort, <br />
            Crafted for the Road
          </motion.h2>

          <motion.div
            variants={animateYStriggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="features-section"
          >
            {features.map(({ label, description, icon: Icon }, index) => (
              <motion.div
                variants={animateYChildVariants}
                key={index}
                className="features-section-card"
              >
                <div className="features-section-inner">
                  <div className="features-section-icon-layer">
                    <Icon className="features-section-icon" />
                  </div>
                  <h3 className="features-section-heading">{label}</h3>
                </div>
                <p className="features-section-text">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="features-section-right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animateFadeYVariants()}
              viewport={{ once: true, amount: 0.5 }}
              className="features-section-right"
            >
              <Image
                src="/images/ourfecility-image.jpg"
                alt="Luxury Bus"
                width={700}
                height={480}
                className="features-section-right-image"
              />
            </motion.div>
          </div>
          <div className="features-section-right-text">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={animateFadeYVariants({ opacityValue: 0.7 })}
              viewport={{ once: true, amount: 0.5 }}
            >
              We believe that a comfortable journey begins with thoughtful
              services. From the moment you board, our experienced crew ensures
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={animateFadeYVariants({ opacityValue: 0.7 })}
              viewport={{ once: true, amount: 0.5 }}
            >
              Whether it&apos;s our trained boarding crew, smooth luggage
              handling, or our clean sleeper berths each feature is crafted to
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
