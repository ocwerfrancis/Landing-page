import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-balance">
            What our happy client say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Things that make it the best place to start trading
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-12 md:px-14">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonials"
            className="absolute left-0 top-[calc(50%-1.25rem)] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md cursor-pointer transition hover:bg-primary hover:text-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonials"
            className="absolute right-0 top-[calc(50%-1.25rem)] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md cursor-pointer transition hover:bg-primary hover:text-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Pagination, A11y]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper pt-4 pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto!">
                <div className="h-full rounded-xl bg-white p-6 text-center shadow-md">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="mx-auto h-16 w-16 rounded-full object-cover"
                  />
                  <div className="mt-3 flex justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <h3 className="mt-3 font-bold text-gray-900">{t.name}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
