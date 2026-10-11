import { ArrowRight } from "lucide-react";
import scheduleImg from "../assets/stats.webp";

const ScheduleSection = () => {
  const features = [
    {
      label: "Schedule",
      labelColor: "text-orange-500",
      title: "Streamline Your Business With Smart Scheduling Solutions",
      description:
        "Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.",
      link: "Explore scheduling features",
      image: scheduleImg,
    },

  ];
  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 space-y-20 md:space-y-28">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex flex-col gap-10 lg:gap-16 lg:items-center ${
              i % 2 === 1 ? "lg:flex-col-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image */}
            <div className="w-full min-w-0 lg:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-md lg:max-w-full h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full min-w-0 lg:w-1/2 text-center lg:text-left">
              <p
                className={`text-xs  font-semibold uppercase tracking-wider ${feature.labelColor}`}
              >
                {feature.label}
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
                {feature.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                {feature.link}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
