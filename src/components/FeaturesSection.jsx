import { Button } from "../layouts/Button";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  
  const tints = ["bg-primary/10", "bg-rose-100", "bg-orange-100"];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
            How can we help your business?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            When you resell besnik, you build trust and increase
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full text-3xl ${tints[i]}`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button className="bg-primary text-white px-8 py-3 rounded-full cursor-pointer transition-all hover:opacity-90 hover:shadow-lg active:scale-95">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
