import Image from "next/image";
import {
  FaUserTie,
  FaLuggageCart,
  FaClipboardCheck,
  FaBed,
} from "react-icons/fa";

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
          <h2>
            Rooted in Comfort, <br />
            Crafted for the Road
          </h2>

          <div className="features-section">
            {features.map(({ label, description, icon: Icon }, index) => (
              <div key={index} className="features-section-card">
                <div className="features-section-inner">
                  <div className="features-section-icon-layer">
                    <Icon className="features-section-icon" />
                  </div>
                  <h3 className="features-section-heading">{label}</h3>
                </div>
                <p className="features-section-text">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="features-section-right">
            <Image
              src="/images/ourfecility-image.jpg"
              alt="Luxury Bus"
              width={700}
              height={480}
              className="features-section-right-image"
            />
          </div>
          <div className="features-section-right-text">
            <p>
              We believe that a comfortable journey begins with thoughtful
              services. From the moment you board, our experienced crew ensures

            </p>
            <p>
              Whether it's our trained boarding crew, smooth luggage
              handling, or our clean sleeper berths each feature is crafted to
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
