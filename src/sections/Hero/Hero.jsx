import Image from "next/image";
import { motion } from "framer-motion";
import { animateFadeYVariants } from "@/utils/animate";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="demo-hero-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={animateFadeYVariants()}
        viewport={{ once: true, amount: 0.5 }}
        className="demo-navbar"
      >
        <h3 className="demo-company-name">Travels</h3>
        <Link className="demo-primary-btn" href={"#getintouch-section"}>
          Book now
        </Link>
      </motion.div>
      <div className="demo-hero-container">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero-img.webp"
              alt="Hero Image"
              quality={100}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animateFadeYVariants({ delay: 0.4 })}
            viewport={{ once: true }}
            className="demo-hero-title"
          >
            <h1>Discove Rome with our expert guides</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animateFadeYVariants({ delay: 0.7 })}
            viewport={{ once: true }}
            className="demo-hero-tag-line"
          >
            <h6>Memories of a lifetime are only a few days away</h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
