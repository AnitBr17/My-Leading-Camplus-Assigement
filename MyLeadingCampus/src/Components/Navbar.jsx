// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ArrowRight,
  Building2,
  Rocket,
  Wallet,
  Smartphone,
  ShoppingCart,
  Store,
  Layers,
  LayoutGrid,
  BarChart3,
  Cloud,
  Globe,
  Sparkles,
  Play,
  Lightbulb,
  Heart,
  Plane,
  ShoppingBag,
  Umbrella,
  Package,
  Users,
  Code,
  BookOpen,
  HelpCircle,
  FileText,
  Briefcase,
  Newspaper,
} from "lucide-react";

const iconMap = {
  building: Building2,
  rocket: Rocket,
  wallet: Wallet,
  mobile: Smartphone,
  cart: ShoppingCart,
  store: Store,
  layers: Layers,
  grid: LayoutGrid,
  chart: BarChart3,
  cloud: Cloud,
  globe: Globe,
  ai: Sparkles,
  play: Play,
  creator: Lightbulb,
  heart: Heart,
  plane: Plane,
  bag: ShoppingBag,
  umbrella: Umbrella,
  marketplace: Package,
  partners: Users,
  code: Code,
  book: BookOpen,
  help: HelpCircle,
  file: FileText,
  brief: Briefcase,
  news: Newspaper,
};

export default function Navbar() {
  // activeMenu stores the menu key string like "Products" or null
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoverSupport, setHoverSupport] = useState(false);
  const [hoverSign, setHoverSign] = useState(false);

  // ref for the nav container to help position the mega menu if needed
  const navRef = useRef(null);

  // close menu on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={navRef}
      className="w-full py-4 px-8 flex items-center justify-between text-white absolute top-0 left-0 z-50 backdrop-blur-sm"
    >
      {/* LOGO */}
      <h1 className="text-2xl font-bold cursor-pointer tracking-wide">stripe</h1>

      {/* MID NAVIGATION */}
      <div className="flex items-center gap-5 text-base font-medium">
        {navItems.map((item) => {
          const isActive = activeMenu === item.menu;
          return (
            <div
              key={item.menu}
              className="relative"
              onMouseEnter={() => item.sections && setActiveMenu(item.menu)}
              onMouseLeave={() => item.sections && setActiveMenu(null)}
            >
              {/* BUTTON */}
              <div className="cursor-pointer flex items-center gap-1 select-none">
                <span className="hover:opacity-80">{item.menu}</span>

                {item.sections &&
                  (isActive ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  ))}
              </div>

              {/* DROPDOWN */}
              {isActive && item.sections && (
                <MegaMenu
                  sections={item.sections}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* RIGHT NAV */}
      <div className="flex items-center gap-6 text-base font-medium">
        {/* SUPPORT */}
        <span
          onMouseEnter={() => setHoverSupport(true)}
          onMouseLeave={() => setHoverSupport(false)}
          className="cursor-pointer flex items-center gap-1 hover:opacity-80"
        >
          Support
          {hoverSupport ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
        </span>

        {/* SIGN IN */}
        <span
          onMouseEnter={() => setHoverSign(true)}
          onMouseLeave={() => setHoverSign(false)}
          className="cursor-pointer flex items-center gap-1 hover:opacity-80"
        >
          Sign in
          {hoverSign ? <ArrowRight size={18} /> : <ChevronRight size={18} />}
        </span>

        {/* CTA BUTTON */}
        <button className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition">
          Contact sales
        </button>
      </div>
    </div>
  );
}

/* FINAL MEGA MENU */
function MegaMenu({ sections, onClose }) {
  // close when mouse leaves the whole mega menu block
  const wrapRef = useRef(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const onLeave = (e) => {
      // If leaving to an element outside the menu, close
      if (!node.contains(e.relatedTarget)) {
        onClose && onClose();
      }
    };

    node.addEventListener("focusout", onLeave, true);
    return () => node.removeEventListener("focusout", onLeave, true);
  }, [onClose]);

  return (
    <div
      ref={wrapRef}
      className="absolute top-full mt-4 left-0 w-[940px] bg-white text-black rounded-2xl shadow-2xl p-8 flex gap-6 z-50 border border-gray-100"
      // keep the menu open while hovered
      onMouseLeave={() => onClose && onClose()}
    >
      {/* Left columns: split sections into roughly equal columns (3 columns) */}
      <div className="flex-1 flex gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className="w-1/3 min-w-[240px]">
            <h3 className="text-xs font-bold text-gray-500 mb-4 tracking-wide">
              {section.title}
            </h3>

            <div className="flex flex-col gap-3">
              {section.items.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                  >
                    {Icon ? (
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-50">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8" />
                    )}

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-sm">{item.label}</p>
                      </div>

                      {item.description && (
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      )}

                      {item.subItems && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.subItems.map((sub, s) => (
                            <span
                              key={s}
                              className="text-xs text-gray-700 border border-gray-200 px-2 py-1 rounded-md inline-block hover:bg-gray-100"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Right side: "More" column similar to Stripe right rail */}
      <div className="w-64 pl-4 border-l border-gray-100">
        <h4 className="text-xs font-semibold text-gray-500 mb-3">MORE</h4>
        <ul className="flex flex-col gap-3 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-black">Payment methods</li>
          <li className="cursor-pointer hover:text-black">Link</li>
          <li className="cursor-pointer hover:text-black">Financial Connections</li>
          <li className="cursor-pointer hover:text-black">Identity</li>
          <li className="cursor-pointer hover:text-black">Atlas</li>
          <li className="cursor-pointer hover:text-black">Climate</li>
        </ul>
      </div>
    </div>
  );
}

/* NAV ITEMS: you can extend this object to match the exact content you want */
const navItems = [
  {
    menu: "Products",
    sections: [
      {
        title: "GLOBAL PAYMENTS",
        items: [
          {
            label: "Payments",
            icon: "wallet",
            description: "Online payments",
            subItems: ["Payment Links", "Checkout", "Elements"],
          },
          { label: "Terminal", icon: "store", description: "In-person payments" },
          { label: "Radar", icon: "chart", description: "Fraud prevention" },
          {
            label: "Authorization Boost",
            icon: "layers",
            description: "Acceptance optimisations",
          },
        ],
      },
      {
        title: "MONEY MANAGEMENT",
        items: [
          { label: "Connect", icon: "building", description: "Payments for platforms" },
          { label: "Global Payouts", icon: "globe", description: "Send money to third parties" },
        ],
      },
      {
        title: "REVENUE & FINANCE AUTOMATION",
        items: [
          {
            label: "Billing",
            icon: "bag",
            description: "Subscription management",
            subItems: ["Usage-based", "Invoicing"],
          },
          { label: "Tax", icon: "umbrella", description: "Sales tax & VAT automation" },
          { label: "Revenue Recognition", icon: "ai", description: "Accounting automation" },
          { label: "Stripe Sigma", icon: "grid", description: "Custom reports" },
        ],
      },
    ],
  },

  {
    menu: "Solutions",
    sections: [
      {
        title: "BY STAGE",
        items: [
          { label: "Enterprises", icon: "building" },
          { label: "Startups", icon: "rocket" },
        ],
      },
      {
        title: "BY USE CASE",
        items: [
          { label: "Crypto", icon: "wallet" },
          { label: "In-app payments", icon: "mobile" },
          { label: "E-commerce", icon: "cart" },
          { label: "Marketplaces", icon: "store" },
          { label: "Platforms", icon: "layers" },
          { label: "SaaS", icon: "cloud" },
        ],
      },
      {
        title: "BY INDUSTRY",
        items: [
          { label: "AI companies", icon: "ai" },
          { label: "Media", icon: "play" },
          { label: "Creator economy", icon: "creator" },
          { label: "Retail", icon: "bag" },
        ],
      },
    ],
  },

  {
    menu: "Developers",
    sections: [
      {
        title: "DOCUMENTATION",
        items: [
          { label: "API Reference", icon: "code" },
          { label: "SDK Libraries", icon: "book" },
          { label: "Code Samples", icon: "file" },
          { label: "Integration Guides", icon: "help" },
        ],
      },
      {
        title: "TOOLS",
        items: [
          { label: "API Status", icon: "chart" },
          { label: "Developer Blog", icon: "news" },
          { label: "Changelog", icon: "file" },
        ],
      },
    ],
  },

  {
    menu: "Resources",
    sections: [
      {
        title: "LEARN",
        items: [
          { label: "Support Center", icon: "help" },
          { label: "Guides", icon: "book" },
          { label: "Customer Stories", icon: "heart" },
        ],
      },
      {
        title: "COMPANY",
        items: [
          { label: "Jobs", icon: "brief" },
          { label: "Newsroom", icon: "news" },
          { label: "Become a Partner", icon: "partners" },
        ],
      },
    ],
  },

  { menu: "Pricing" },
];
