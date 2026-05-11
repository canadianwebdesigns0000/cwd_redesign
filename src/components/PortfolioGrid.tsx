"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
  name: string;
  url: string;
  category: string;
  localImage?: string;
};

// Only live, reachable sites
const projects: Project[] = [
  // ── Construction & Trades ─────────────────────────────
  { name: "Gator Dumpster Services",      url: "gatordumpsterservices.com",         category: "Construction & Trades", localImage: "/portfolio/gator-dumpster.jpg" },
  { name: "McLaren Masonry",              url: "mclarenmasonry.ca",                 category: "Construction & Trades" },
  { name: "Heavy Iron Plant",             url: "heavyironplant.com",                category: "Construction & Trades" },
  { name: "Emergency Plumbing Toronto",   url: "emergencyplumbingtoronto.com",      category: "Construction & Trades" },
  { name: "Emergency Plumbing Markham",   url: "emergencyplumbingmarkham.com",      category: "Construction & Trades" },
  { name: "North 5 Contracting",          url: "north5contracting.ca",              category: "Construction & Trades" },
  { name: "AMAC Stucco",                  url: "amacstucco.ca",                     category: "Construction & Trades" },
  { name: "D Squared Construction",       url: "dsquaredconstruction.ca",           category: "Construction & Trades" },
  { name: "Awash Roofing",                url: "awashroofing.ca",                   category: "Construction & Trades" },
  { name: "Awash Construction",           url: "awashconstruction.com",             category: "Construction & Trades" },
  { name: "AD Plumbing Services",         url: "adplumbingservices.ca",             category: "Construction & Trades" },
  { name: "Stainless Industries",         url: "stainless-ind.com",                 category: "Construction & Trades" },
  { name: "PD Door Systems",              url: "pddoorsystems.com",                 category: "Construction & Trades" },
  { name: "Meganet Electric",             url: "meganetelectric.ca",                category: "Construction & Trades" },
  { name: "258 Signs",                    url: "258signs.ca",                       category: "Construction & Trades" },
  { name: "Tank X",                       url: "tankx.ca",                          category: "Construction & Trades" },

  // ── Home Services ──────────────────────────────────────
  { name: "Ewowzers Cleaning",            url: "ewowzerscleaning.com",              category: "Home Services", localImage: "/portfolio/ewowzers-cleaning.jpg" },
  { name: "Springview Window Cleaning",   url: "springviewwindowcleaning.com",      category: "Home Services" },
  { name: "Nicagon Cleaning Services",    url: "nicagoncleaningservices.ca",        category: "Home Services" },
  { name: "Homestone",                    url: "homestone.ca",                      category: "Home Services" },
  { name: "Bird Sitting Brampton",        url: "birdsittingbrampton.ca",            category: "Home Services" },
  { name: "Speed Boards",                 url: "speedboards.ca",                    category: "Home Services" },

  // ── Health & Wellness ──────────────────────────────────
  { name: "Rejuvenation by Dale",         url: "rejuvenationbydale.ca",             category: "Health & Wellness", localImage: "/portfolio/rejuvenation-by-dale.jpg" },
  { name: "Oshawa Ultrasound",            url: "oshawaimaging.ca",                  category: "Health & Wellness", localImage: "/portfolio/oshawa-ultrasound.jpg" },
  { name: "TCM Wellness",                 url: "tcmwellness.ca",                    category: "Health & Wellness", localImage: "/portfolio/tcm-wellness.jpg" },
  { name: "Fade Central",                 url: "fadecentral.ca",                    category: "Health & Wellness", localImage: "/portfolio/fade-central.jpg" },
  { name: "Esmas Essiac Tea",             url: "esmasessiac.ca",                    category: "Health & Wellness", localImage: "/portfolio/esmas-essiac-tea.jpg" },
  { name: "Accelicare",                   url: "accelicare.com",                    category: "Health & Wellness" },
  { name: "Cloud Pharmacy",               url: "cloudpharmacy.ca",                  category: "Health & Wellness" },
  { name: "MedTech DIY",                  url: "medtechdiy.ca",                     category: "Health & Wellness" },
  { name: "Timely Cares",                 url: "timelycares.com",                   category: "Health & Wellness" },
  { name: "Gently Touch Spa",             url: "gentlytouchspa.ca",                 category: "Health & Wellness" },
  { name: "Serenity Saffron",             url: "serenitysaffron.com",               category: "Health & Wellness" },

  // ── Food & Beverage ────────────────────────────────────
  { name: "EL Afrek Lounge",              url: "el-afriklounge.com",                category: "Food & Beverage", localImage: "/portfolio/el-afrek-lounge.jpg" },
  { name: "Kozak Food",                   url: "kozakfood.com",                     category: "Food & Beverage" },
  { name: "Sufra Nuts",                   url: "sufranuts.com",                     category: "Food & Beverage" },
  { name: "Tealicious Tea Boutique",      url: "tealiciousteabouteaque.com",        category: "Food & Beverage" },
  { name: "AMX Kitchens",                 url: "amxkitchens.com",                   category: "Food & Beverage" },

  // ── Transportation & Logistics ─────────────────────────
  { name: "Taxi Halifax Airport",         url: "taxihalifaxairport.com",            category: "Transportation" },
  { name: "Transnet Canada",              url: "transnetcanada.ca",                 category: "Transportation" },
  { name: "Director TMS",                 url: "directortms.com",                   category: "Transportation" },
  { name: "Worldwide White Glove",        url: "worldwidewhiteglove.ca",            category: "Transportation" },

  // ── Business & Professional ────────────────────────────
  { name: "MOS Solutions",                url: "mossolutions.ca",                   category: "Business & Professional", localImage: "/portfolio/mos-solutions.jpg" },
  { name: "Evolve Media Group",           url: "evolvemediagroup.ca",               category: "Business & Professional", localImage: "/portfolio/evolve-media-group.jpg" },
  { name: "SWJ Modern Creations",         url: "swjmoderncreations.ca",             category: "Business & Professional", localImage: "/portfolio/swj-modern-creations.jpg" },
  { name: "LHC Group",                    url: "lhcgroup.ca",                       category: "Business & Professional" },
  { name: "Instrumentum Group",           url: "instrumentumgroup.com",             category: "Business & Professional" },
  { name: "Shahgaldi Research Group",     url: "shahgaldiresearchgroup.ca",         category: "Business & Professional" },
  { name: "FOS Consulting",               url: "fosconsulting.ca",                  category: "Business & Professional" },
  { name: "Toren Associates",             url: "torenassociates.com",               category: "Business & Professional" },
  { name: "Hi-Rise Financial",            url: "hirise-fp.com",                     category: "Business & Professional" },
  { name: "Mr Bailiff Inc",               url: "mrbailiffinc.ca",                   category: "Business & Professional" },
  { name: "Canada Tenant",                url: "canadatenant.ca",                   category: "Business & Professional" },
  { name: "CILCO",                        url: "cilco.ca",                          category: "Business & Professional" },
  { name: "Contact Oscar",                url: "contactoscar.ca",                   category: "Business & Professional" },
  { name: "Nicagon Security",             url: "nicagonsecurityservices.ca",        category: "Business & Professional" },
  { name: "Vibe Lube",                    url: "vibelube.com",                      category: "Business & Professional" },
  { name: "Royal Crown Plywood",          url: "royalcrownplywood.com",             category: "Business & Professional" },
  { name: "Walopus",                      url: "walopus.com",                       category: "Business & Professional" },
  { name: "Kratom Delivery Canada",       url: "kratomdeliverycanada.ca",           category: "Business & Professional" },
  { name: "Vape Central",                 url: "vapecentral.ca",                    category: "Business & Professional" },

  // ── Events & Entertainment ─────────────────────────────
  { name: "Supre Events",                 url: "supreevents.com",                   category: "Events & Entertainment", localImage: "/portfolio/supre-events.jpg" },
  { name: "Tresolz",                      url: "tresolz.com",                       category: "Events & Entertainment" },
  { name: "Rebirth Con",                  url: "rebirthcon.com",                    category: "Events & Entertainment" },
  { name: "Palazzo Talenti",              url: "palazzotalenti.ca",                 category: "Events & Entertainment" },
  { name: "Sima Flower Designer",         url: "simaflowerdesigner.com",            category: "Events & Entertainment" },

  // ── Education & Non-Profit ─────────────────────────────
  { name: "Sierra College of Business",   url: "sierracollegesl-edu.org",           category: "Education & Non-Profit", localImage: "/portfolio/sierra-college.jpg" },
  { name: "Audio Book Fanatic",           url: "audiobookfanatic.net",              category: "Education & Non-Profit", localImage: "/portfolio/audio-book-fanatic.jpg" },
  { name: "Social Global Studies",        url: "socialglobalstudies.com",           category: "Education & Non-Profit" },
  { name: "KAPMI Academy",                url: "kapmiacademy.com",                  category: "Education & Non-Profit" },
  { name: "Girl Impact",                  url: "girlimpact.ca",                     category: "Education & Non-Profit" },
  { name: "Jin Pin Sen",                  url: "jinpinsen.com",                     category: "Education & Non-Profit" },

  // ── Arts & Creative ────────────────────────────────────
  { name: "Kristina Blinova",             url: "photographicpoetry.ca",             category: "Arts & Creative", localImage: "/portfolio/kristina-blinova.jpg" },
  { name: "Sonia Aimy",                   url: "soniaaimy.com",                     category: "Arts & Creative", localImage: "/portfolio/sonia-aimy.jpg" },
  { name: "The Art of Ronnie Simon",      url: "theartofronniesimon.ca",            category: "Arts & Creative" },
  { name: "Victoria Shuter",              url: "victoriashuter.com",                category: "Arts & Creative" },
];

const CATEGORIES = [
  "All",
  "Construction & Trades",
  "Home Services",
  "Health & Wellness",
  "Food & Beverage",
  "Transportation",
  "Business & Professional",
  "Events & Entertainment",
  "Education & Non-Profit",
  "Arts & Creative",
];

const CATEGORY_ICONS: Record<string, string> = {
  "Construction & Trades":   "🏗️",
  "Home Services":           "🏠",
  "Health & Wellness":       "💊",
  "Food & Beverage":         "🍽️",
  "Transportation":          "🚌",
  "Business & Professional": "💼",
  "Events & Entertainment":  "🎉",
  "Education & Non-Profit":  "🎓",
  "Arts & Creative":         "🎨",
};

const INITIAL_LIMIT = 18;

function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2040 100%)" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: "rgba(0,170,223,0.15)", border: "1px solid rgba(0,170,223,0.2)" }}
      >
        <svg className="w-5 h-5" style={{ color: "#00AADF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      </div>
      <p className="text-white/70 font-bold text-sm text-center leading-snug">{project.name}</p>
      <p className="text-white/30 text-xs mt-1 text-center truncate max-w-full px-2">{project.url}</p>
    </div>
  );
}

function CardImage({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false);

  if (project.localImage && !errored) {
    return (
      <Image
        src={project.localImage}
        alt={`${project.name} website designed by Canadian Web Designs`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        onError={() => setErrored(true)}
      />
    );
  }

  return <ProjectPlaceholder project={project} />;
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const visible = filtered.slice(0, limit);

  return (
    <section className="py-section-y relative" style={{ background: "#060D20" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex gap-10 items-start">

          {/* ── Sidebar (desktop) ── */}
          <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-24 gap-1">
            <p className="text-white/35 text-xs font-bold uppercase tracking-[0.18em] mb-3 px-4">
              Filter by Category
            </p>
            {CATEGORIES.map((cat) => {
              const count = cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setLimit(INITIAL_LIMIT); }}
                  className="cursor-pointer w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between gap-3 transition-all duration-200 whitespace-nowrap"
                  style={
                    isActive
                      ? { background: "#00AADF", color: "#fff", boxShadow: "0 4px 16px rgba(0,170,223,0.35)" }
                      : { color: "#fff", background: "rgba(255,255,255,0.05)" }
                  }
                >
                  <span className="flex items-center gap-2 min-w-0">
                    {cat !== "All" && (
                      <span className="text-base leading-none shrink-0">{CATEGORY_ICONS[cat]}</span>
                    )}
                    <span className="truncate">{cat === "All" ? "All Projects" : cat}</span>
                  </span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full shrink-0"
                    style={{
                      background: isActive ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                      color: "#fff",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* ── Mobile horizontal tabs ── */}
          <div className="lg:hidden w-full mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setLimit(INITIAL_LIMIT); }}
                  className="cursor-pointer shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200"
                  style={
                    active === cat
                      ? { background: "#00AADF", color: "#fff", boxShadow: "0 0 20px rgba(0,170,223,0.4)" }
                      : { background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }
                  }
                >
                  {cat === "All" ? `All (${projects.length})` : `${CATEGORY_ICONS[cat] ?? ""} ${cat}`}
                </button>
              ))}
            </div>
          </div>

          {/* ── Grid ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-white font-black text-xl">
                  {active === "All" ? "Our Work" : active}
                </h2>
                <p className="text-white/40 text-sm mt-0.5">
                  {filtered.length} {filtered.length === 1 ? "project" : "projects"}
                </p>
              </div>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  className="cursor-pointer text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  ✕ Clear filter
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <p className="text-white/40 text-center py-24">No projects in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {visible.map((project) => (
                  <a
                    key={project.url}
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl"
                      style={{
                        aspectRatio: "16/10",
                        background: "linear-gradient(135deg, #0a1628 0%, #0d2040 100%)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <CardImage project={project} />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: "rgba(0,170,223,0.06)" }}
                      />
                      <div
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                        style={{
                          background: "rgba(0,170,223,0.9)",
                          backdropFilter: "blur(8px)",
                          borderRadius: "0.5rem",
                          padding: "0.25rem 0.625rem",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Visit Site ↗
                      </div>
                    </div>
                    <div className="mt-3 px-1">
                      <h3 className="text-white font-bold text-base leading-snug group-hover:text-[#00AADF] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-white/35 text-xs mt-0.5 truncate">{project.url}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Load More */}
            {limit < filtered.length && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setLimit(l => l + 18)}
                  className="cursor-pointer px-8 py-3 rounded-btn text-sm font-bold transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Load More ({filtered.length - limit} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
