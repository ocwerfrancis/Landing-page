import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

const logos = [slack, amazon, woocommerce, meundies, sitepoint];

const CompanyLogo = () => {
  return (
    <section className="py-10">
      <div className="w-full overflow-hidden max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex sm:flex-row flex-col sm:items-center items-start gap-6 ">
        <p className="w-75 px-8 shrink-0 border-l-4 border-primary py-2 z-10 pl-4 text-sm font-semibold text-gray-900 sm:text-base">
          Proud partner at <br /> Hubspot & Segment
        </p>

        <div className="w-full min-w-0 sm:flex-1 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex whitespace-nowrap w-max items-center animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt=""
                className="mx-12 h-8 w-auto px-6 sm:px-8 grayscale object-contain opacity-60 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
