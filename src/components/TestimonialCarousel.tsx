// TestimonialCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { sectionTitle } from "./ui/navigation-menu";

const testimonials = [
    {
        quote:
            "This mobile app has exceeded my expectations! It's completely transformed my daily routine. The attractive appearance and user-friendly interface make it simple to navigate. It exceeds expectations in every way, from smooth transactions to timely updates. A must-have for anyone looking to simplify their travel life.Five out of five stars!",
        name: "Nikhil Mishra",
        role: "App User",
    },
    {
        quote:
            "Outstanding! AVRDigital Infotech transformed our vision into a sleek website. Their expertise, professionalism, and commitment to quality surpassed our expectations. Highly recommended for a seamless digital experience!",
        name: "Abhishek Anand",
        role: "Verified Customer",
    },
    {
        quote:
            "Incredible experience with AVRDigital Infotech! Their mobile app development expertise turned our concept into a user-friendly reality. The team's dedication, technical prowess, and attention to detail exceeded our expectations. We're thrilled with the result and highly recommend them for top-notch app solutions!",
        name: "Sameer Zahid",
        role: "Valued Client",
    },
        {
        quote:
            "This mobile app has exceeded my expectations! It's completely transformed my daily routine. The attractive appearance and user-friendly interface make it simple to navigate. It exceeds expectations in every way, from smooth transactions to timely updates. A must-have for anyone looking to simplify their travel life.Five out of five stars!",
        name: "Nikhil Mishra",
        role: "App User",
    },

];

export default function TestimonialCarousel() {
    return (
        <>
            <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">

                <div className="text-center py-6 space-y-6 mb-3">
                    <div className="flex flex-col">
                        <div className="w-32 m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">Testimonials</div>
                        <h1 className={`${sectionTitle()}`}>
                            What Our Clients <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">Say</span>
                        </h1>

                    </div>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                        We've worked with clients across various industries to deliver transformative IT solutions. Here's what they have to say about our work.
                    </p>
                </div>
                <div className="p-5">
                    <div className="mx-auto">
                        <style>
                            {`
                        .swiper-pagination-bullet {
                            background: rgba(255, 255, 255, 0.3) !important;
                            width: 12px !important;
                            height: 12px !important;
                            margin: 0 2px !important;
                            height: 10px !important;
                            width: 10px !important;

                            opacity: 1 !important;
                            transform: scale(1) !important;

                            transition: all 0.3s ease !important;
                        }
                        .swiper-pagination.swiper-pagination-bullets-dynamic.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
                            bottom: 0 !important;
                            min-width:100px;
                            display: flex;
                            justify-content: center;
                        }
                        .swiper-wrapper {
                        padding-bottom: 20px;
                        }
                        .swiper-pagination-bullet-active-main {
                            background: var(--color-blue-400) !important;
                            width: 30px !important;
                            border-radius: 20px;
                        }
                        .swiper-pagination {
                            bottom: 20px !important;
                        }
                        `}
                        </style>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                bulletClass: 'swiper-pagination-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active'
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {testimonials.map((t, index) => (
                                <SwiperSlide key={index}>
                                    <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-md h-full flex flex-col p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover-glow">
                                        <div>
                                            <div className="mb-6"><svg className="h-8 w-8 text-blue-400 transform transition-transform duration-300 hover:scale-110" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg></div>                                        <p className="mb-6">{t.quote}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">{t.name}</p>
                                            <p className="text-sm text-gray-400">{t.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
