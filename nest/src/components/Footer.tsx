import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-primary-foreground" style={{ background: "var(--gradient-purple)" }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">✦</div>
            <span className="text-lg font-bold tracking-widest">TECHVAULT</span>
          </div>
          <p className="text-sm opacity-80">
            Premium laptops, phones, tablets, wearables, and smart accessories curated for everyday performance.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-widest">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Home</li><li>Laptops</li><li>Phones</li><li>Tablets</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-widest">CUSTOMER CARE</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Privacy Policy</li><li>Terms & Conditions</li><li>Return Policy</li>
            <li>Support: +91 90000 00000</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-widest">STAY UPDATED</h4>
          <div className="flex gap-3">
            <a className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Facebook className="h-4 w-4" /></a>
            <a className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Instagram className="h-4 w-4" /></a>
            <a className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-70">
        All Rights Reserved © 2026 TechVault
      </div>
    </footer>
  );
}
