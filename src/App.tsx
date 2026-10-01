import { useEffect, useState } from "react";

// Vite's BASE_URL keeps public assets working under the GitHub Pages sub-path.
const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/2a726.png`;
const imgContainer = `${assetPathPrefix}/903cc.svg`;
const imgContainer1 = `${assetPathPrefix}/9194d.svg`;
const imgContainer2 = `${assetPathPrefix}/b24cd.svg`;
const imgContainer3 = `${assetPathPrefix}/9051b.svg`;
const imgContainer4 = `${assetPathPrefix}/182c4.svg`;
const imgContainer5 = `${assetPathPrefix}/45a25.svg`;
const imgContainer6 = `${assetPathPrefix}/17250.svg`;
const imgContainer7 = `${assetPathPrefix}/a6466.svg`;
const imgContainer8 = `${assetPathPrefix}/0e643.svg`;
const imgHeroPhoto = `${assetPathPrefix}/hero-photo.jpg`;
const imgAboutOffice = `${assetPathPrefix}/about-office.jpg`;
const imgLogoWebp = `${assetPathPrefix}/logo.webp`;
const imgLogoPng = `${assetPathPrefix}/logo.png`;

const FIRM_NAME = "אלירז, אהרון ושות' רואי חשבון";
const CONTACT_EMAIL = "office@eliraz.co.il";
const CONTACT_PHONE = "04-8732323";
const CONTACT_ADDRESS = "דרך עכו 80, קריית ביאליק";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;
const TEL_HREF = `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`;
const MEETING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("קביעת פגישה")}`;

const NAV_ITEMS = [
  { id: "home", label: "בית" },
  { id: "services", label: "שירותים" },
  { id: "about", label: "אודות" },
  { id: "contact", label: "יצירת קשר" },
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

/** Highlights the nav item of the section currently under the sticky header. */
function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = document.querySelector("header");
      const offset = (header?.getBoundingClientRect().height ?? 0) + 8;
      let current: SectionId = "home";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      // At the very bottom of the page the last section may be too short to reach the header.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}

export default function App() {
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape or when the viewport grows to the desktop nav.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [menuOpen]);

  return (
    <div dir="rtl" className="bg-white min-h-screen">
      {/* MainHeader */}
      <header className="sticky top-0 z-50 backdrop-blur-[2px] bg-[rgba(255,255,255,0.95)] border-b border-[#f1f5f9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="h-[72px] md:h-[96px] max-w-[1240px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 md:gap-3 no-underline shrink-0">
            <picture className="shrink-0">
              <source srcSet={imgLogoWebp} type="image/webp" />
              <img src={imgLogoPng} alt="" width={162} height={144} className="block h-11 md:h-[60px] w-auto" />
            </picture>
            <span className="flex flex-col items-end">
              <span className="font-['Heebo:Black'] font-black text-[#0f2742] text-[20px] leading-[26px] min-[400px]:text-[22px] min-[400px]:leading-[28px] lg:text-[26px] lg:leading-[32px] tracking-[-0.5px] whitespace-nowrap">אלירז, אהרון ושות'</span>
              <span className="font-['Heebo:SemiBold'] font-semibold text-[#64748b] text-[11px] tracking-[0.55px] leading-[13.75px] whitespace-nowrap">רואי חשבון</span>
            </span>
          </a>

          {/* Navigation */}
          <nav aria-label="ניווט ראשי" className="hidden md:flex gap-6 lg:gap-9 items-center">
            {NAV_ITEMS.map(({ id, label }) =>
              id === activeSection ? (
                <a key={id} href={`#${id}`} aria-current="true" className="relative py-2 cursor-pointer no-underline">
                  <span className="font-['Heebo:Bold'] font-bold text-[#0f2742] text-[16px] leading-[24px]">{label}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#cca262] rounded-full" />
                </a>
              ) : (
                <a key={id} href={`#${id}`} className="font-['Heebo:Medium'] font-medium text-[#334155] text-[16px] leading-[24px] py-2 cursor-pointer no-underline hover:text-[#0f2742]">
                  {label}
                </a>
              ),
            )}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:flex bg-[#0f2742] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] gap-2 items-center pl-6 pr-[22px] py-[10px] rounded-[8px] cursor-pointer border-0 no-underline">
            <span className="font-['Heebo:Medium'] font-medium text-white text-[14px] leading-[20px]">יצירת קשר</span>
            <div className="flex items-center justify-center size-3">
              <div className="-rotate-90 flex-none">
                <div className="relative size-3">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                </div>
              </div>
            </div>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center size-11 -ml-2 rounded-[8px] cursor-pointer border-0 bg-transparent text-[#0f2742]"
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav id="mobile-menu" aria-label="ניווט ראשי" className="md:hidden border-t border-[#f1f5f9] bg-white">
            <div className="flex flex-col px-4 sm:px-6 py-3">
              {NAV_ITEMS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={id === activeSection ? "true" : undefined}
                  className={`flex items-center min-h-[48px] border-b border-[#f1f5f9] last:border-b-0 no-underline text-[16px] leading-[24px] ${
                    id === activeSection
                      ? "font-['Heebo:Bold'] font-bold text-[#0f2742]"
                      : "font-['Heebo:Medium'] font-medium text-[#334155]"
                  }`}
                >
                  <span className="relative py-1">
                    {label}
                    {id === activeSection && <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#cca262] rounded-full" />}
                  </span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="sm:hidden mt-3 mb-1 bg-[#0f2742] flex gap-2 items-center justify-center min-h-[48px] rounded-[8px] no-underline"
              >
                <span className="font-['Heebo:Medium'] font-medium text-white text-[16px] leading-[24px]">יצירת קשר</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HeroSection */}
      <section id="home" className="relative bg-[#f8fafc] overflow-hidden lg:min-h-[660px] flex items-center scroll-mt-[72px] md:scroll-mt-[96px]">

        {/* Content */}
        <div className="relative max-w-[1240px] mx-auto w-full px-6 py-16 md:py-24">
          <div className="flex items-center gap-12 w-full">
          {/* Right: text */}
          <div className="flex flex-col gap-3 items-start flex-1">
            {/* Heading */}
            <h1 className="flex flex-col gap-1 items-start w-full">
              <span className="font-['Heebo:Black'] font-black text-[#0f2742] text-[34px] leading-[40px] min-[400px]:text-[38px] min-[400px]:leading-[44px] sm:text-[54px] sm:leading-[58px] tracking-[-1.35px]">אלירז, אהרון ושות'</span>{" "}
              <span className="font-['Heebo:Bold'] font-bold text-[#0f2742] text-[30px] leading-[36px] sm:text-[42px] sm:leading-[44px] tracking-[-1.35px]">רואי חשבון</span>
            </h1>
            {/* Gold accent */}
            <div className="bg-[#cca262] h-[3px] rounded-[2px] w-[44px]" />
            {/* Subheading */}
            <div className="pt-4 w-full text-right">
              <p className="font-['Heebo:Bold'] font-bold text-[#1e293b] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] mb-0">ראיית חשבון, ייעוץ וליווי פיננסי</p>
              <p className="font-['Heebo:Bold'] font-bold text-[#1e293b] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px]">לעסקים ולאנשים פרטיים.</p>
            </div>
            {/* Body text */}
            <div className="w-full text-right">
              <p className="font-['Heebo:Regular'] font-normal text-[#475569] text-[17px] leading-[27px] sm:text-[18px] sm:leading-[28px] mb-0">שירות אישי, מקצועי וזמין,</p>
              <p className="font-['Heebo:Regular'] font-normal text-[#475569] text-[17px] leading-[27px] sm:text-[18px] sm:leading-[28px]">עם הסתכלות רחבה על התמונה הפיננסית.</p>
            </div>
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-6 justify-start w-full">
              <a href={MEETING_MAILTO} className="bg-[rgba(255,255,255,0.9)] border border-[#94a3b8] flex gap-2 items-center px-[29px] py-[13px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] cursor-pointer no-underline hover:bg-white">
                <div className="rotate-180 flex-none">
                  <div className="h-[4.219px] relative w-[10.652px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                  </div>
                </div>
                <span className="font-['Heebo:SemiBold'] font-semibold text-[#1e293b] text-[16px] leading-[24px]">קבעו פגישה</span>
              </a>
              <a href="#contact" className="relative bg-[#0f2742] flex gap-2 items-center pl-7 pr-[26px] py-3 rounded-[8px] cursor-pointer border-0 no-underline">
                <div className="absolute inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
                <span className="font-['Heebo:SemiBold'] font-semibold text-white text-[16px] leading-[24px] relative z-10">יצירת קשר</span>
                <div className="flex items-center justify-center size-3 relative z-10">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-3">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Left: photo */}
          <div className="hidden lg:block flex-1 shrink-0 rounded-2xl overflow-hidden shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.15)] h-[520px]">
            <img src={imgHeroPhoto} alt="" className="w-full h-full object-cover object-top" fetchPriority="high" />
          </div>
          </div>
        </div>
      </section>

      {/* ServicesSection */}
      <section id="services" className="bg-white px-5 py-16 md:py-24 scroll-mt-[72px] md:scroll-mt-[96px]">
        <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[1240px] mx-auto px-0 sm:px-6 w-full">
          {/* Section title */}
          <div className="flex flex-col gap-[10px] items-center w-full">
            <h2 className="font-['Heebo:ExtraBold'] font-extrabold text-[#0f2742] text-[30px] leading-[36px] sm:text-[36px] sm:leading-[40px] text-center">השירותים שלנו</h2>
            <div className="bg-[#cca262] h-[3px] rounded-[2px] w-[44px]" />
          </div>

          {/* Cards */}
          <div className="flex gap-4 sm:gap-7 items-stretch justify-center w-full flex-wrap">
            {[
              { icon: imgContainer, label: "ליווי עסקים ועצמאיים", desc1: "ייעוץ וליווי פיננסי שוטף, כולל תכנון", desc2: "והסתכלות על התמונה הגדולה.", iconW: "w-[30px]", iconH: "h-6" },
              { icon: imgContainer1, label: "ייעוץ מס", desc1: "תכנון מס, ליווי ופתרונות מותאמים", desc2: "לצמיחה עסקית.", iconW: "w-[21px]", iconH: "h-[21px]" },
              { icon: imgContainer2, label: "דוחות שנתיים", desc1: "הכנת דוחות כספיים והגשות", desc2: "לרשויות המס.", iconW: "w-6", iconH: "h-6" },
              { icon: imgContainer3, label: "הנהלת חשבונות", desc1: "ניהול שוטף ומדויק של החשבונות", desc2: "העסקיים.", iconW: "w-[18px]", iconH: "h-6" },
            ].map(({ icon, label, desc1, desc2, iconW, iconH }) => (
              <div key={label} className="bg-white flex flex-1 basis-full sm:basis-[40%] xl:basis-0 flex-col items-center min-w-[200px] p-6 rounded-2xl">
                <div className="flex flex-col h-[104px] items-start pb-6 w-[80px]">
                  <div className="relative flex items-center justify-center rounded-full size-[80px]">
                    <div aria-hidden className="absolute bg-[#e9f1f8] inset-0 rounded-full pointer-events-none" />
                    <div className={`${iconH} ${iconW} relative z-10`}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
                    </div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] pointer-events-none" />
                  </div>
                </div>
                <div className="pb-3">
                  <h3 className="font-['Heebo:Bold'] font-bold text-[#0f172a] text-[20px] leading-[28px] text-center">{label}</h3>
                </div>
                <div className="text-center">
                  <p className="font-['Heebo:Regular'] font-normal text-[#475569] text-[16px] leading-[26px] mb-0">{desc1}</p>
                  <p className="font-['Heebo:Regular'] font-normal text-[#475569] text-[16px] leading-[26px]">{desc2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AboutSection */}
      <section id="about" className="bg-[#f9fbfe] border-t border-b border-[#f1f5f9] px-6 sm:px-11 py-16 md:py-20 lg:py-28 scroll-mt-[72px] md:scroll-mt-[96px]">
        <div className="max-w-[1240px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-x-0 lg:gap-x-16 gap-y-12 lg:gap-y-16 items-center">
            {/* Right: text */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-2 items-end">
              <h2 className="font-['Heebo:ExtraBold'] font-extrabold text-[#0f2742] text-[30px] leading-[36px] sm:text-[36px] sm:leading-[40px] text-right w-full">אודות</h2>
              <div className="bg-[#cca262] h-[3px] rounded-[2px] w-[44px]" />
              <div className="flex flex-col gap-5 items-end pt-5 pb-7 w-full">
                <div className="text-right w-full">
                  <p className="font-['Heebo:Regular'] font-normal text-[#334155] text-[18px] leading-[29.25px] mb-0 inline xl:block">משרד אלירז הוא משרד רואי חשבון קטן ובוטיקי שמעניק שירות אישי ומקצועי</p>
                  {" "}<p className="font-['Heebo:Regular'] font-normal text-[#334155] text-[18px] leading-[29.25px] inline xl:block">לעסקים ולאנשים פרטיים.</p>
                </div>
                <div className="text-right w-full">
                  <p className="font-['Heebo:Regular'] font-normal text-[#334155] text-[18px] leading-[29.25px] mb-0 inline xl:block">אני מאמין בשירות זמין, שקיפות ויחס אישי, עם דגש על הבנה מעמיקה של</p>
                  {" "}<p className="font-['Heebo:Regular'] font-normal text-[#334155] text-[18px] leading-[29.25px] inline xl:block">הצרכים הייחודיים של כל לקוח וליווי לאורך כל הדרך.</p>
                </div>
              </div>
              <a href="#contact" className="relative bg-[#0f2742] flex items-center justify-center px-8 py-[14px] rounded-[8px] cursor-pointer border-0 no-underline">
                <div className="absolute inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
                <span className="font-['Heebo:Medium'] font-medium text-white text-[16px] leading-[24px] relative z-10">לפרטים נוספים</span>
              </a>
            </div>
            {/* Left: office image */}
            <div className="col-span-12 lg:col-span-6 bg-white border border-[rgba(226,232,240,0.8)] rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] relative h-[280px] sm:h-[360px] lg:h-[421px]">
              <img alt="משרד אלירז" className="absolute inset-0 w-full h-full object-cover" src={imgAboutOffice} loading="lazy" />
              <div className="absolute inset-0 bg-[rgba(15,23,42,0.05)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ContactSection */}
      <section id="contact" className="bg-white px-5 py-16 md:py-24 scroll-mt-[72px] md:scroll-mt-[96px]">
        <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[1240px] mx-auto px-0 sm:px-6 w-full">
          {/* Heading */}
          <div className="flex flex-col gap-[10px] items-center w-full">
            <h2 className="font-['Heebo:ExtraBold'] font-extrabold text-[#0f2742] text-[30px] leading-[36px] sm:text-[36px] sm:leading-[40px] text-center">יצירת קשר</h2>
            <div className="bg-[#cca262] h-[3px] rounded-[2px] w-[44px]" />
            <div className="pt-1.5 text-center">
              <span className="font-['Heebo:Regular'] font-normal text-[#475569] text-[18px] leading-[28px] sm:text-[20px] text-center">נשמח לשמוע ולבדוק איך נוכל לעזור.</span>
            </div>
          </div>

          {/* Contact badges */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center justify-center flex-wrap w-full">
            {/* Location */}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center justify-center p-[21px] rounded-[12px] no-underline">
              <span className="font-['Heebo:SemiBold'] font-semibold text-[#1e293b] text-[20px] leading-[28px]">{CONTACT_ADDRESS}</span>
              <div className="bg-[#0f2742] rounded-full size-[48px] flex items-center justify-center shrink-0">
                <div className="h-[13.973px] relative w-[10.5px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                </div>
              </div>
            </a>
            {/* Email */}
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex gap-4 items-center justify-center p-[21px] rounded-[12px] no-underline">
              <span className="font-['Heebo:SemiBold'] font-semibold text-[#1e293b] text-[20px] leading-[28px]">{CONTACT_EMAIL}</span>
              <div className="bg-[#0f2742] rounded-full size-[48px] flex items-center justify-center shrink-0">
                <div className="h-[10.5px] relative w-[14px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                </div>
              </div>
            </a>
            {/* Phone */}
            <a href={TEL_HREF} className="flex gap-4 items-center justify-center p-[21px] rounded-[12px] no-underline">
              <span className="font-['Heebo:SemiBold'] font-semibold text-[#1e293b] text-[20px] leading-[28px] tracking-[0.5px]">{CONTACT_PHONE}</span>
              <div className="bg-[#0f2742] rounded-full size-[48px] flex items-center justify-center shrink-0">
                <div className="flex items-center justify-center size-[14px]">
                  <div className="-rotate-90 flex-none">
                    <div className="relative size-[14px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2742] border-t border-[#1e293b] pb-8 pt-[33px] px-5">
        <div className="max-w-[1240px] mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center px-0 sm:px-6">
            <span className="font-['Heebo:Regular'] font-normal text-[#94a3b8] text-[14px] leading-[20px]">© כל הזכויות שמורות - {FIRM_NAME}</span>
            <div className="flex gap-2 items-center">
              <span className="font-['Heebo:Bold'] font-bold text-white text-[14px] leading-[20px] tracking-[0.35px]">{FIRM_NAME}</span>
              <picture className="shrink-0">
                <source srcSet={imgLogoWebp} type="image/webp" />
                <img src={imgLogoPng} alt="" width={162} height={144} className="block h-7 w-auto" />
              </picture>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
