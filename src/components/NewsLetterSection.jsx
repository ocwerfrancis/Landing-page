import { useState } from "react";
import { ArrowRight } from "lucide-react";

const NewsLetterSection = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    if (!email) {
      // Simulate subscription process
      setSubscriptionStatus(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-lg bg-primary">
          {/* diagonal decoration */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-black/10 [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] lg:block" />
          <div className="relative z-10 grid gap-12 px-10 sm:px-12 lg:grid-cols-2 lg:items-center lg:px-14">
            {/* left content */}
            <div className="pt-12 text-center md:pt-16 lg:py-16 lg:text-left">
              <h1 className="text-2xl font-semibold text-white text-balance sm:text-3xl">
                Subscribe newsletter
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Best cooks and best delivery guys all at your service. Hot tasty
                food
              </p>
            </div>

            {/* Right content */}
            <div className="pb-12 md:pb-16 lg:py-16">
              <form
                onSubmit={handleSubscription}
                className="flex w-full overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value);setSubscriptionStatus(false);}}
                  className="min-w-0 flex-1 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center gap-2 bg-gray-900 px-5 py-3 text-sm font-semibold text-white cursor-pointer transition hover:bg-gray-800 active:scale-95"
                >
                  Discover
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
               {subscriptionStatus && (
                <p
                  role="status"
                  className="mt-3 text-center text-sm font-medium text-white lg:text-left"
                >
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
