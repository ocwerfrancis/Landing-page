import { Layers, Sun, Settings, Clock } from "lucide-react";
import { Button } from "../layouts/Button";

const ServiceSection = () => {
  const services = [
    {
      icon: Layers,
      title: "Web Design",
      text: "One for all and all for one. Muskehounds are always ready.",
      color: "text-primary",
    },
    {
      icon: Sun,
      title: "Ad-Creatives",
      text: "Alphabet Village and the subline of her own road.",
      color: "text-amber-500",
    },
    {
      icon: Settings,
      title: "Automation",
      text: "Little Blind Text should turn around and return.",
      color: "text-rose-500",
    },
    {
      icon: Clock,
      title: "Infographics",
      text: "Nothing the copy said could convince her.",
      color: "text-cyan-500",
    },
  ];

  const bullets = ["UX design content strategy", "Development bring"];
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text */}
        <div className="min-w-0 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
            Future of support with new shape
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <ul className="mt-6 space-y-3 inline-block text-left">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button className="bg-primary text-white px-8 py-3 rounded-lg cursor-pointer transition-all hover:opacity-90 hover:shadow-lg active:scale-95">
              Get started
            </Button>
          </div>
        </div>

        {/* Services grid */}
        <div className="min-w-0 grid gap-10 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text, color }) => (
            <div key={title}>
              <Icon className={`h-7 w-7 ${color}`} />
              <h3 className="mt-4 font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {text}
              </p>
              <a
                href="#"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
