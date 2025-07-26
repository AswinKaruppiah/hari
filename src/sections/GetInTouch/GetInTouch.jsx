import { alertVariants, animateFadeYVariants } from "@/utils/animate";
import { CloseIcon, TickIcon } from "@/utils/icon";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function GetInTouch() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  async function handleSentEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(false); // clear old messages
    setErrorMessage(false);
    // send email via emailjs
    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setIsLoading(false);
        setSuccessMessage(true);
        formRef.current.reset(); // optionally reset the form
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={animateFadeYVariants()}
      viewport={{ once: true, amount: 0.5 }}
      className="demo-getin-touch-section"
      id="getintouch-section"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="demo-getin-touch-container"
      >
        <div className="demo-getin-touch-content">
          <div className="space-y-4">
            <span>Contacts</span>
            <h2>Get In Touch</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSentEmail}>
          <div className="demo-input-container">
            <div className="demo-input-container-input-box">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="demo-input-container-input-box">
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="demo-input-container-input-box">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="user_message"
                placeholder="Enter your Message"
                required
                rows={6}
              />
            </div>
          </div>
          <AnimatePresence>
            {successMessage && (
              <motion.div
                className="demo-alert-success"
                variants={alertVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="demo-alert-icon-success">
                  <TickIcon />
                </div>
                <h6>Thank you! Your trip request has been sent.</h6>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {errorMessage && (
              <div
                className="demo-alert-error"
                variants={alertVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="demo-alert-icon-error">
                  <CloseIcon />
                </div>
                <h6>Oops! Something went wrong, please try again.</h6>
              </div>
            )}
          </AnimatePresence>
          <button
            disabled={isLoading}
            type="submit"
            className="demo-secondary-btn"
          >
            {isLoading ? "Loading..." : "Make my Trip"}
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}
