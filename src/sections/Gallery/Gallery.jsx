import Image from "next/image";
import { motion } from "framer-motion";
import {
  animateFadeYVariants,
  animateYChildVariants,
  animateYStriggerVariants,
} from "@/utils/animate";

const images = [
  { src: "/images/image-1.jpg", alt: "image-1" },
  { src: "/images/image-2.jpg", alt: "image-2", style: "md:row-span-2" },
  { src: "/images/image-3.jpg", alt: "image-3" },
  { src: "/images/image-4.jpg", alt: "image-4" },
  { src: "/images/image-5.jpg", alt: "image-5" },
];

export default function Gallery() {
  return (
    <section className="demo-gallery-section">
      <div className="demo-gallery-content">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={animateFadeYVariants()}
          viewport={{ once: true, amount: 0.5 }}
        >
          Moments
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animateFadeYVariants({ opacityValue: 0.7 })}
          viewport={{ once: true, amount: 0.5 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </motion.p>
      </div>
      <motion.div
        variants={animateYStriggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="demo-gallery-container"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={animateYChildVariants}
            className={`demo-gallery-item  ${img?.style || ""}`}
          >
            <div className="w-full relative h-full hover:scale-110 duration-300 transition-all ease-out">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
