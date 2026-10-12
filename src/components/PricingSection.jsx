import { useState } from "react";
import { Button } from "../layouts/Button";

const PricingSection = () => {
  const [products, setProducts] = useState(1);

  const plans = [
    { name: "Starter", pricePerProduct: 80 },
    { name: "Business", pricePerProduct: 150 },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900">
          Pricing
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-600">{plan.name}</p>
              <p className="mt-4 text-3xl font-bold text-gray-900">
                ${(plan.pricePerProduct * products).toLocaleString()}
                <span className="text-base font-semibold">/mo</span>
              </p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-10 max-w-md mx-auto text-center">
          <p className="text-sm text-gray-600">
            {products} {products === 1 ? "product" : "products"}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
            <span>1</span>
            <input
              type="range"
              min="1"
              max="50"
              value={products}
              onChange={(e) => setProducts(Number(e.target.value))}
              aria-label="Number of products"
              className="flex-1 cursor-pointer accent-primary"
            />
            <span>50</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">Ready to get started?</p>
          <Button className="mt-4 bg-primary text-white px-8 py-3 rounded-lg cursor-pointer transition-all hover:opacity-90 hover:shadow-lg active:scale-95">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
