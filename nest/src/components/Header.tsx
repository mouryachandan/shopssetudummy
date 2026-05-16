import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { TechnovaLogo } from "./TechnovaLogo";

interface HeaderProps {
  onCartClick?: () => void;
  activeFilter?: string;
}

const nav = [
  { label: "HOME", category: "ALL" },
  { label: "LAPTOPS", category: "LAPTOPS" },
  { label: "PHONES", category: "PHONES" },
  { label: "TABLETS", category: "TABLETS" },
  { label: "CONTACT", category: "CONTACT" },
];

export function Header({ onCartClick, activeFilter = "ALL" }: HeaderProps) {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: "var(--gradient-purple)" }}>
      <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-4 text-primary-foreground gap-2 sm:gap-0">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <div className="flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
            <TechnovaLogo />
          </div>
          <span className="text-sm sm:text-lg font-bold tracking-widest">TECHNOVA</span>
        </Link>
        <nav className="hidden items-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-medium tracking-widest md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={`/?filter=${n.category}#products-section`}
              className={`transition whitespace-nowrap ${
                activeFilter === n.category
                  ? "opacity-100 font-bold"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5 ml-auto sm:ml-0">
          <button aria-label="Search" className="opacity-90 hover:opacity-100 p-1">
            <Search className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
          <button aria-label="Account" className="opacity-90 hover:opacity-100 p-1">
            <User className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={onCartClick}
            className="relative opacity-90 hover:opacity-100 transition p-1"
          >
            <ShoppingCart className="h-4 sm:h-5 w-4 sm:w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 sm:h-5 w-4 sm:w-5 items-center justify-center rounded-full bg-accent text-[8px] sm:text-[10px] font-bold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
