import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  Tag,
  Headphones as HeadphonesIcon,
  Star,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  Laptop,
  Smartphone,
  Tablet,
  BatteryCharging,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart } from "@/hooks/useCart";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroPhone from "@/assets/hero-phone.jpg";
import heroTablet from "@/assets/hero-tablet.jpg";
import pickHeadphones from "@/assets/pick-headphones.jpg";
import pickLan from "@/assets/pick-lan.jpg";
import prodLaptop from "@/assets/prod-laptop.jpg";
import prodPhone from "@/assets/prod-phone.jpg";
import prodTablet from "@/assets/prod-tablet.jpg";
import prodWatch from "@/assets/prod-watch.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catMonitor from "@/assets/cat-monitor.jpg";
import catMouse from "@/assets/cat-mouse.jpg";
import catHdmi from "@/assets/cat-hdmi.jpg";
import catCharger from "@/assets/cat-charger.jpg";
import catLan from "@/assets/cat-lan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Technova — Laptops, Phones & Smart Devices" },
      {
        name: "description",
        content:
          "Shop original tech collections with laptops, smartphones, tablets, wearables and premium accessories.",
      },
      { property: "og:title", content: "Technova — Laptops, Phones & Smart Devices" },
      {
        property: "og:description",
        content:
          "Original tech storefront for laptops, smartphones, tablets, wearables and accessories.",
      },
    ],
  }),
  component: Index,
});

const heroSlides = [
  {
    eyebrow: "Latest Drop",
    title: "AeroBook X14",
    description: "Ultra-light laptop for creators with all-day battery and a vivid edge-to-edge display.",
    image: heroLaptop,
    bg: "linear-gradient(135deg, oklch(0.92 0.04 300), oklch(0.84 0.08 265))",
    specs: [
      { icon: Laptop, label: "14-inch Ultra Display" },
      { icon: BatteryCharging, label: "18hr Battery" },
      { icon: Tag, label: "Student Offer" },
      { icon: ArrowRight, label: "Fast Performance" },
    ],
  },
  {
    eyebrow: "New Arrival",
    title: "Nova Phone Z",
    description: "Flagship smartphone with pro camera system, vivid OLED display and ultra-fast charging.",
    image: heroPhone,
    bg: "linear-gradient(135deg, oklch(0.88 0.09 340), oklch(0.82 0.11 300))",
    specs: [
      { icon: Smartphone, label: "200MP Camera" },
      { icon: BatteryCharging, label: "120W Charging" },
      { icon: Tag, label: "Trade-In Bonus" },
      { icon: ArrowRight, label: "5G Ready" },
    ],
  },
  {
    eyebrow: "Bundle Offer",
    title: "Tab+ Wear Pack",
    description: "Tablet, watch and earbuds built to move with you between work, gaming and streaming.",
    image: heroTablet,
    bg: "linear-gradient(135deg, oklch(0.88 0.07 210), oklch(0.82 0.11 190))",
    specs: [
      { icon: Tablet, label: "Immersive Tablet" },
      { icon: HeadphonesIcon, label: "Wireless Audio" },
      { icon: Tag, label: "Combo Savings" },
      { icon: ArrowRight, label: "Smart Sync" },
    ],
  },
] as const;

const categories = [
  { name: "Gaming Laptops", img: catGaming },
  { name: "Monitors", img: catMonitor },
  { name: "Phones", img: prodPhone },
  { name: "Tablets", img: prodTablet },
  { name: "Chargers", img: catCharger },
  { name: "Accessories", img: catMouse },
];

const products = [
  {
    id: "laptop-1",
    name: "AeroBook X14 Laptop",
    category: "LAPTOPS",
    desc: "A premium everyday ultrabook with slim form factor, fast SSD storage and clean display.",
    price: "₹72,999",
    strike: "₹84,999",
    img: prodLaptop,
    badges: ["16GB RAM", "512GB SSD"],
  },
  {
    id: "laptop-2",
    name: "ProMax 15 Laptop",
    category: "LAPTOPS",
    desc: "High-performance laptop for professionals with RTX graphics and cooling system.",
    price: "₹1,24,999",
    strike: "₹1,49,999",
    img: prodLaptop,
    badges: ["32GB RAM", "1TB SSD", "RTX 4070"],
  },
  {
    id: "laptop-3",
    name: "StudyBook Air",
    category: "LAPTOPS",
    desc: "Lightweight laptop perfect for students with excellent battery life.",
    price: "₹45,999",
    strike: "₹52,999",
    img: prodLaptop,
    badges: ["8GB RAM", "256GB SSD"],
  },
  {
    id: "phone-1",
    name: "Nova Phone Z Pro",
    category: "PHONES",
    desc: "A sleek flagship phone with triple camera design, bright display and next-gen connectivity.",
    price: "₹54,999",
    strike: "₹61,999",
    img: prodPhone,
    badges: ["256GB", "5G"],
  },
  {
    id: "phone-2",
    name: "Ultra Max Phone",
    category: "PHONES",
    desc: "Ultra-premium smartphone with 200MP camera and curved display.",
    price: "₹89,999",
    strike: "₹99,999",
    img: prodPhone,
    badges: ["512GB", "5G", "200MP"],
  },
  {
    id: "phone-3",
    name: "Nova Lite Phone",
    category: "PHONES",
    desc: "Affordable flagship killer with great performance and battery.",
    price: "₹34,999",
    strike: "₹39,999",
    img: prodPhone,
    badges: ["128GB", "5G"],
  },
  {
    id: "phone-4",
    name: "Mid Pro Phone",
    category: "PHONES",
    desc: "Perfect mid-range phone with excellent value for money.",
    price: "₹28,999",
    strike: "₹32,999",
    img: prodPhone,
    badges: ["128GB", "4G"],
  },
  {
    id: "tablet-1",
    name: "SketchTab 11",
    category: "TABLETS",
    desc: "Portable tablet with stylus support, ideal for sketching, notes, reading and media viewing.",
    price: "₹28,999",
    strike: "₹34,999",
    img: prodTablet,
    badges: ["Stylus Ready"],
  },
  {
    id: "tablet-2",
    name: "ProTab 13 Max",
    category: "TABLETS",
    desc: "Large format tablet with M-series chip for professional work.",
    price: "₹79,999",
    strike: "₹89,999",
    img: prodTablet,
    badges: ["M2 Chip", "512GB"],
  },
  {
    id: "tablet-3",
    name: "MediaTab 8",
    category: "TABLETS",
    desc: "Compact tablet perfect for entertainment and casual browsing.",
    price: "₹16,999",
    strike: "₹19,999",
    img: prodTablet,
    badges: ["64GB"],
  },
  {
    id: "watch-1",
    name: "Pulse Watch S",
    category: "PHONES",
    desc: "Smartwatch with health tracking, durable build and a clean interface for everyday wear.",
    price: "₹9,999",
    strike: "₹13,999",
    img: prodWatch,
    badges: ["AMOLED", "Fitness"],
  },
  {
    id: "watch-2",
    name: "Pulse Elite Watch",
    category: "PHONES",
    desc: "Premium smartwatch with advanced health monitoring and always-on display.",
    price: "₹19,999",
    strike: "₹24,999",
    img: prodWatch,
    badges: ["AMOLED", "ECG"],
  },
  {
    id: "watch-3",
    name: "Pulse Lite Watch",
    category: "PHONES",
    desc: "Budget-friendly smartwatch with essential fitness tracking.",
    price: "₹5,999",
    strike: "₹7,999",
    img: prodWatch,
    badges: ["LCD"],
  },
  {
    id: "contact-1",
    name: "Premium Support Package",
    category: "CONTACT",
    desc: "Get 24/7 customer support and extended warranty for all devices.",
    price: "₹2,999",
    strike: "₹4,999",
    img: catCharger,
    badges: ["24/7 Support"],
  },
  {
    id: "contact-2",
    name: "Trade-In Program",
    category: "CONTACT",
    desc: "Exchange your old device for great discounts on new purchases.",
    price: "Special Offer",
    strike: "Variable",
    img: catMouse,
    badges: ["Best Value"],
  },
];

const features = [
  { icon: Truck, title: "Free Shipping", sub: "Orders ₹1999 or more" },
  { icon: RotateCcw, title: "Easy Returns", sub: "Within 7 days" },
  { icon: Tag, title: "Bundle Savings", sub: "Across top devices" },
  { icon: HeadphonesIcon, title: "Tech Support", sub: "Help when you need it" },
];

const blogs = [
  {
    date: "May 10 2026",
    title: "How to Choose the Right Laptop for Work and College",
    desc: "A practical guide to picking storage, RAM, battery and display size for daily productivity.",
  },
  {
    date: "May 12 2026",
    title: "Phone Buying Guide: Camera, Battery or Performance?",
    desc: "See which smartphone specs actually matter most before your next upgrade.",
  },
  {
    date: "May 14 2026",
    title: "Tablet Setups That Replace a Traditional Desk",
    desc: "From note-taking to streaming and travel work, here’s how tablets fit modern workflows.",
  },
];

const reviews = [
  {
    name: "Neha Kapoor",
    role: "Verified Buyer",
    text: "The laptop feels premium and fast. Delivery was smooth, and the product page details matched exactly.",
  },
  {
    name: "Aakash Mehra",
    role: "Happy Customer",
    text: "Bought a phone and smartwatch combo. Great packaging, clean design and strong value for the price.",
  },
  {
    name: "Ritu Sharma",
    role: "Repeat Customer",
    text: "I like that the store feels original and modern. Accessories and devices are displayed much more clearly now.",
  },
];

function SectionHeading({ title, accent, action }: { title: string; accent: string; action?: string }) {
  return (
    <div className="mb-6 sm:mb-8 flex items-end justify-between gap-2 sm:gap-4 flex-col sm:flex-row sm:items-center">
      <h2 className="section-title text-xl sm:text-2xl md:text-3xl">
        {title} <span className="accent">{accent}</span>
      </h2>
      {action && (
        <a href="#" className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:underline whitespace-nowrap">
          {action} <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
        </a>
      )}
    </div>
  );
}

function ProductCard({ p, onAddToCart }: { p: (typeof products)[number]; onAddToCart: () => void }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg sm:rounded-xl border bg-card transition hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-muted">
        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">{p.name}</h3>
        <p className="line-clamp-2 text-[10px] sm:text-xs text-muted-foreground">{p.desc}</p>
        <div className="flex flex-wrap gap-1 pt-1">
          {p.badges.map((b) => (
            <span key={b} className="rounded-md bg-accent px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] font-medium text-accent-foreground">
              {b}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-3 gap-2">
          <div>
            <div className="text-xs sm:text-base font-bold text-primary">{p.price}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground line-through">{p.strike}</div>
          </div>
          <button onClick={onAddToCart} className="btn-primary rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold whitespace-nowrap">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();
  
  // Get filter from URL search params
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const selectedFilter = (params.get("filter") as "ALL" | "LAPTOPS" | "PHONES" | "TABLETS" | "CONTACT" | null) || "ALL";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  // Scroll to products section when filter changes
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash === "#products-section") {
      setTimeout(() => {
        const element = document.getElementById("products-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [selectedFilter]);

  const currentSlide = heroSlides[activeSlide];
  
  const filteredProducts = selectedFilter === "ALL" || selectedFilter === "CONTACT"
    ? products 
    : products.filter((p) => p.category === selectedFilter);

  const filterOptions: Array<"ALL" | "LAPTOPS" | "PHONES" | "TABLETS" | "CONTACT"> = ["ALL", "LAPTOPS", "PHONES", "TABLETS", "CONTACT"];

  const handleAddToCart = (product: typeof products[number]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} activeFilter={selectedFilter} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <section className="relative overflow-hidden transition-all duration-500" style={{ background: currentSlide.bg }}>
        <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-10 px-4 sm:px-6 py-8 sm:py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">{currentSlide.eyebrow}</p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground">{currentSlide.title}</h1>
            <p className="mt-2 sm:mt-4 max-w-xl text-base sm:text-lg md:text-2xl text-foreground/80">{currentSlide.description}</p>
            <div className="my-4 sm:my-6 h-px w-24 sm:w-32 bg-foreground/15" />
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {currentSlide.specs.map((feature) => (
                <div key={feature.label} className="flex w-20 sm:w-24 md:w-28 flex-col items-center gap-2 text-center">
                  <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-white/70 ring-1 ring-white/70 backdrop-blur">
                    <feature.icon className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs leading-tight text-foreground/80">{feature.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
              <a href="#" className="btn-primary inline-flex items-center gap-1 rounded-md px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold w-full sm:w-auto justify-center sm:justify-start">
                Shop Now <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
              </a>
              <div className="flex gap-1.5 sm:gap-2 sm:ml-auto">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all ${index === activeSlide ? "w-6 sm:w-8 bg-primary" : "w-2 sm:w-2.5 bg-foreground/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              width={1280}
              height={896}
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
        <div className="rounded-lg sm:rounded-xl border-2 p-4 sm:p-6 md:p-8" style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}>
          <div className="flex flex-col items-start gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="mb-2 inline-block rounded bg-accent px-2 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Launch Week</span>
              <h3 className="text-lg sm:text-xl font-semibold">Fresh tech picks for work, play and everyday carry</h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-muted-foreground">
              From laptops and phones to tablets and accessories — upgrade with a more original tech-focused collection.
            </p>
            <a href="#" className="btn-primary inline-flex items-center gap-1 rounded-md px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold w-full sm:w-auto justify-center">
              Explore Deals <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-8 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading title="Explore" accent="Categories" action="View All" />
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
            {categories.map((c) => (
              <a key={c.name} href="#" className="group flex flex-col items-center gap-2">
                <div className="aspect-square w-full overflow-hidden rounded-full bg-card shadow-sm ring-1 ring-border transition group-hover:shadow-md">
                  <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <span className="text-center text-xs sm:text-sm font-medium line-clamp-2">{c.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="products-section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Featured" accent="Devices" action="View All" />
          
          {/* Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <a
                key={option}
                href={`/?filter=${option}#products-section`}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedFilter === option
                    ? "bg-primary text-primary-foreground"
                    : "border border-input bg-background hover:bg-muted"
                }`}
              >
                {option}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <ProductCard key={p.id} p={p} onAddToCart={() => handleAddToCart(p)} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Tech Picks" accent="For You" />
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            <a href="#" className="group relative row-span-2 overflow-hidden rounded-2xl">
              <img src={prodLaptop} alt="Laptop" loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-6 left-6 text-xl font-semibold text-white">LAPTOPS</span>
            </a>
            <a href="#" className="group relative overflow-hidden rounded-2xl">
              <img src={prodPhone} alt="Phones" loading="lazy" className="h-64 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-6 left-6 text-xl font-semibold text-white">PHONES</span>
            </a>
            <a href="#" className="group relative overflow-hidden rounded-2xl">
              <img src={prodTablet} alt="Tablets" loading="lazy" className="h-64 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-6 left-6 text-xl font-semibold text-white">TABLETS</span>
            </a>
            <a href="#" className="group relative col-span-2 overflow-hidden rounded-2xl">
              <img src={pickLan} alt="Accessories" loading="lazy" className="h-64 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-6 left-6 text-xl font-semibold text-white">ACCESSORIES</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Trending" accent="Now" action="View All" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={`trending-${p.id}`} p={p} onAddToCart={() => handleAddToCart(p)} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-background py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 md:gap-6 px-6 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <f.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <div>
                <div className="text-sm font-semibold">{f.title}</div>
                <div className="text-xs text-muted-foreground">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:gap-6 rounded-xl border-2 p-4 sm:p-8 md:grid-cols-2" style={{ borderColor: "color-mix(in oklab, var(--primary) 50%, transparent)" }}>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Join the Community</h3>
              <p className="text-sm text-muted-foreground">
                Follow fresh device drops, workspace setups, gaming gear highlights and smart desk inspiration.
              </p>
              <div className="mt-4 flex gap-3">
                <a className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "#1877f2" }}><Facebook className="h-5 w-5" /></a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)" }}><Instagram className="h-5 w-5" /></a>
                <a className="flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: "#ff0000" }}><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Built for Modern Tech Buyers</h3>
              <p className="text-sm text-muted-foreground">
                Compare devices faster, scan collections visually, and discover premium hardware without relying on another brand’s identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-primary-foreground" style={{ background: "var(--gradient-purple)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Latest Blogs</h2>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium opacity-90 hover:opacity-100">
              View All <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-3">
            {blogs.map((b) => (
              <article key={b.title} className="rounded-xl bg-primary-foreground/5 p-4 sm:p-6 ring-1 ring-primary-foreground/10 backdrop-blur">
                <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-1.5 text-xs">
                  <Calendar className="h-3.5 w-3.5" /> {b.date}
                </div>
                <h3 className="mb-2 text-base font-semibold leading-snug">{b.title}</h3>
                <p className="mb-4 text-sm opacity-80">{b.desc}</p>
                <div className="flex items-center justify-between border-t border-primary-foreground/10 pt-4 text-xs">
                  <span className="opacity-80">Technova Editorial</span>
                  <button className="rounded-md bg-primary-foreground/10 px-3 py-1.5 font-medium hover:bg-primary-foreground/20">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="What Our" accent="Customers Say" />
          <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border bg-card p-4 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-primary/20" />
                <div className="mb-3 flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">"{r.text}"</p>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
