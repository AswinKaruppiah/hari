import { FaBusAlt } from 'react-icons/fa';
import { RiChatSmileAiLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

const steps = [
    {
        icon: <FaBusAlt className="text-[#BAF48A] text-2xl" />,
        title: 'Fast Booking',
        description: 'Enjoy buying your bus tickets online from home or on the go, with our mobile friendly site',
    },
    {
        icon: <RiChatSmileAiLine className="text-[#BAF48A] text-2xl" />,
        title: 'Stress Free',
        description: 'The simplest and stress free way to book your bus travel all in one purchase.',
    },
    {
        icon: <GiReceiveMoney className="text-[#BAF48A] text-2xl" />,
        title: 'Spend Less',
        description: 'We have the affordable prices and the best carriers all in one place.',
    },
];


export default function WeProvided() {
    return (
        <div className="we-provided-main">

            <h2 className="best-services-heading">Best Services</h2>

            <div className="service-grid">
                {steps.map((step, index) => (
                    <div key={index} className="service-card">
                        <div className="we-provided-icon-layer">
                            <div className="service-icon">{step.icon}</div>
                        </div>
                        <h3 className="service-title">{step.title}</h3>
                        <p className="service-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
