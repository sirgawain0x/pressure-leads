"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

const BEFORE_AFTER_ITEMS = [
  { src: "/images/before_after/deck.jpg", alt: "Deck pressure washing before and after comparison" },
  { src: "/images/before_after/driveway.jpg", alt: "Residential driveway cleaning before and after" },
  { src: "/images/before_after/fence.jpg", alt: "Fence washing before and after results" },
  { src: "/images/before_after/front_porch.jpg", alt: "Front porch pressure washing before and after" },
  { src: "/images/before_after/home.jpg", alt: "Home exterior pressure washing before and after" },
  {
    src: "/images/before_after/large_driveway.jpg",
    alt: "Large driveway pressure washing before and after",
  },
  { src: "/images/before_after/mobilehome.jpg", alt: "Mobile home exterior cleaning before and after" },
  { src: "/images/before_after/sidewalk.jpg", alt: "Sidewalk concrete cleaning before and after" },
  { src: "/images/before_after/storage.jpg", alt: "Storage building exterior washing before and after" },
] as const

type GalleryItem = (typeof BEFORE_AFTER_ITEMS)[number]

export function BeforeAfterGallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 relative z-10"
      aria-labelledby="before-after-gallery-heading"
    >
      <Dialog
        open={lightboxItem !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxItem(null)
        }}
      >
        <DialogContent
          showCloseButton
          className="max-w-[min(96vw,1400px)] border-white/10 bg-zinc-950 p-2 sm:p-3 gap-0 shadow-2xl"
        >
          {lightboxItem ? (
            <>
              <DialogTitle className="sr-only">{lightboxItem.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Full-size before and after photo. Press Escape or use the close control to dismiss.
              </DialogDescription>
              <div className="relative mx-auto h-[min(85vh,900px)] w-full min-h-[min(40vh,280px)]">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  fill
                  className="object-contain object-center rounded-md"
                  sizes="(max-width: 1400px) 96vw, 1400px"
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400/90 rounded-full mr-2" />
            Real transformations
          </div>
          <h2
            id="before-after-gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
          >
            Before &amp; after
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See the difference professional pressure washing makes on driveways, decks, siding, and more.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {BEFORE_AFTER_ITEMS.map((item) => (
            <figure
              key={item.src}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-lg shadow-black/20"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(item)}
                className="block w-full cursor-zoom-in text-left outline-none transition-[box-shadow] focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                aria-label={`View full size: ${item.alt}`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                </div>
              </button>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
