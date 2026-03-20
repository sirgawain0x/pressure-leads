"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "We had years of buildup on our driveway and it looks brand new now. Super fast and professional.",
      name: "Mike R.",
      role: "St. Augustine, FL",
    },
    {
      text: "Our house looks amazing after the wash. They showed up on time and got everything done the same day.",
      name: "Sarah C.",
      role: "Ponte Vedra, FL",
    },
    {
      text: "The roof cleaning made a huge difference. All the dark streaks are gone.",
      name: "Michael T.",
      role: "St. Johns",
    },
    {
      text: "Quick quote, great price, and the results were better than expected.",
      name: "Jennifer W.",
      role: "St. Augustine, FL",
    },
    {
      text: "They cleaned our patio and fence — everything looks fresh again.",
      name: "David K",
      role: "Jacksonville, FL",
    },
    {
      text: "Very easy process from start to finish. I’ll definitely use them again.",
      name: "Lisa T.",
      role: "St. Augustine, FL",
    },
    {
      text: "We didn’t realize how dirty everything had gotten until after the cleaning. The difference was night and day. They responded quickly, showed up on time, and got it done fast. Definitely using them again.",
      name: "James W.",
      role: "Jacksonville, FL",
    },
    {
      text: "Booking was simple and they kept me updated the whole time. The house looks so much brighter now, especially the siding and back patio. You can tell they know what they’re doing.",
      name: "Maria G.",
      role: "Ponte Vedra, FL",
    },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section - Keep as user loves it */}
        <div className="text-center mb-16 md:mb-32">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-white/30"></div>
            Success Stories
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight text-balance">
          What Our Customers Are <span className="font-medium italic">Saying</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Homeowners across St. Augustine trust us to keep their properties clean and looking like new
          </p>
          <p
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out mt-10 text-center text-amber-200/90 text-sm font-medium tracking-wide"
            aria-label="Five star rated local service"
          >
            <span aria-hidden className="mr-2 select-none">
              ⭐️⭐️⭐️⭐️⭐️
            </span>
            5-Star Rated Local Service
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
