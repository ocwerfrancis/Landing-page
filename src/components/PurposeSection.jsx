const PurposeSection = () => {
  const points = [
    {
      title: "Built for impact",
      text: "We identify and nurture a truly diverse team of designers, developers and marketers.",
      dot: "bg-primary",
    },
    {
      title: "In sync with you",
      text: "We work the way you do by adapting to your workflows and rhythm, so we blend in seamlessly.",
      dot: "bg-orange-400",
    },
  ];

  return (
    <section id="purpose" className="w-full bg-gray-50 py-12 md:py-16 px-4">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 grid gap-8 md:grid-cols-3 md:items-start">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Achieve more
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
            Purpose of a convoy is to keep your team
          </h2>
        </div>

        {/* Points */}
        {points.map((point) => (
          <div key={point.title} className="flex gap-3">
            <span
              className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${point.dot}`}
            />
            <div>
              <h3 className="font-semibold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurposeSection;
