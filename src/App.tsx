// Vite's BASE_URL keeps public assets working under the GitHub Pages sub-path.
const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const img = `${assetPathPrefix}/2a726.png`;
const imgContainer = `${assetPathPrefix}/903cc.svg`;
const imgContainer1 = `${assetPathPrefix}/9194d.svg`;
const imgContainer2 = `${assetPathPrefix}/b24cd.svg`;
const imgContainer3 = `${assetPathPrefix}/9051b.svg`;
const imgContainer5 = `${assetPathPrefix}/45a25.svg`;
const imgContainer6 = `${assetPathPrefix}/17250.svg`;
const imgContainer7 = `${assetPathPrefix}/a6466.svg`;
const imgContainer8 = `${assetPathPrefix}/0e643.svg`;
const imgHeroPhoto = `${assetPathPrefix}/hero-photo.jpg`;
const imgAboutOffice = `${assetPathPrefix}/about-office.jpg`;
const imgLogoWebp = `${assetPathPrefix}/logo.webp`;
const imgLogoPng = `${assetPathPrefix}/logo.png`;

const FIRM_NAME = "אלירז מיכאל ושות' משרדי רואי חשבון";
const CONTACT_EMAIL = "office@eliraz.co.il";
const CONTACT_PHONE = "04-8732323";
const CONTACT_ADDRESS = "דרך עכו 80, קריית ביאליק";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`;
const TEL_HREF = `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`;

const HEADER_OFFSET = "scroll-mt-18 md:scroll-mt-24";

/** Gold rule used under every heading. */
function Accent({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-[3px] w-12 rounded-full bg-gold ${className}`} />;
}

/** Centered section heading: title → 16px → accent → 24px → optional intro. */
function SectionHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-12 md:mb-16">
      <h2 className="font-['Heebo:ExtraBold'] font-extrabold text-navy text-h2">{title}</h2>
      <Accent className="mt-4" />
      {intro && <p className="mt-6 text-balance font-['Heebo:Regular'] font-normal text-muted text-body-lg md:text-xl">{intro}</p>}
    </div>
  );
}

const SERVICES = [
  { icon: imgContainer, label: "ליווי עסקים ועצמאיים", desc: "ייעוץ וליווי פיננסי שוטף, כולל תכנון והסתכלות על התמונה הגדולה.", iconCls: "h-6 w-[30px]" },
  { icon: imgContainer1, label: "ייעוץ מס", desc: "תכנון מס, ליווי ופתרונות מותאמים לצמיחה עסקית.", iconCls: "size-[21px]" },
  { icon: imgContainer2, label: "דוחות שנתיים", desc: "הכנת דוחות כספיים והגשות לרשויות המס.", iconCls: "size-6" },
  { icon: imgContainer3, label: "הנהלת חשבונות", desc: "ניהול שוטף ומדויק של החשבונות העסקיים.", iconCls: "h-6 w-[18px]" },
];

const CONTACT_ITEMS = [
  { href: MAPS_URL, external: true, text: CONTACT_ADDRESS, icon: imgContainer6, iconCls: "h-[14px] w-[10.5px]" },
  { href: `mailto:${CONTACT_EMAIL}`, external: false, text: CONTACT_EMAIL, icon: imgContainer7, iconCls: "h-[10.5px] w-[14px]" },
  { href: TEL_HREF, external: false, text: CONTACT_PHONE, icon: imgContainer8, iconCls: "size-[14px] -rotate-90" },
];

export default function App() {
  return (
    <div dir="rtl" className="bg-white min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-[2px] bg-white/95 border-b border-line shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="container-page h-18 md:h-24 flex items-center justify-between gap-4">
          <a href="#home" aria-label={FIRM_NAME} className="flex items-center shrink-0 no-underline">
            <picture className="shrink-0">
              <source srcSet={imgLogoWebp} type="image/webp" />
              <img src={imgLogoPng} alt="" width={162} height={144} className="block h-11 md:h-14 w-auto" />
            </picture>
          </a>

          <a href="#contact" className="flex items-center gap-2 h-11 px-6 rounded-lg bg-navy drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] no-underline">
            <span className="font-['Heebo:Medium'] font-medium text-white text-caption">יצירת קשר</span>
            <img alt="" className="block size-3 -rotate-90" src={imgContainer5} />
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className={`bg-surface ${HEADER_OFFSET}`}>
          <div className="container-page hero-y grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              <h1 className="flex flex-col gap-2 text-navy">
                <span className="font-['Heebo:Black'] font-black text-display">אלירז מיכאל ושות'</span>{" "}
                <span className="font-['Heebo:Bold'] font-bold text-display-sub">משרדי רואי חשבון</span>
              </h1>
              <Accent className="mt-6" />
              <p className="mt-8 font-['Heebo:Bold'] font-bold text-ink-soft text-lead max-w-xl">
                ראיית חשבון, ייעוץ וליווי פיננסי
                <br />
                לעוסקים מורשים, פטורים זעירים, חברות ועמותות.
              </p>
              <p className="mt-4 font-['Heebo:Regular'] font-normal text-muted text-body-lg max-w-xl text-pretty">
                שירות אישי, מקצועי וזמין, עם הסתכלות רחבה על התמונה הפיננסית.
              </p>
            </div>
            <div className="hidden lg:block aspect-[5/4] rounded-2xl overflow-hidden shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.15)]">
              <img src={imgHeroPhoto} alt="" className="size-full object-cover object-top" fetchPriority="high" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className={`bg-white ${HEADER_OFFSET}`}>
          <div className="container-page section-y">
            <SectionHeader title="השירותים שלנו" />
            <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-12 list-none m-0 p-0">
              {SERVICES.map(({ icon, label, desc, iconCls }) => (
                <li key={label} className="flex sm:flex-col items-start sm:items-center gap-4 sm:gap-6 sm:text-center">
                  <span className="relative flex items-center justify-center size-16 sm:size-20 shrink-0 rounded-full bg-icon-bg shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                    <img alt="" className={`block max-w-none ${iconCls}`} src={icon} />
                  </span>
                  <div className="flex flex-col gap-2 sm:items-center pt-2 sm:pt-0">
                    <h3 className="font-['Heebo:Bold'] font-bold text-ink text-h3 text-balance">{label}</h3>
                    <p className="font-['Heebo:Regular'] font-normal text-muted text-body sm:max-w-72 text-balance">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className={`bg-surface-alt border-y border-line ${HEADER_OFFSET}`}>
          <div className="container-page section-y grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start">
              <h2 className="font-['Heebo:ExtraBold'] font-extrabold text-navy text-h2">אודות</h2>
              <Accent className="mt-4" />
              <div className="mt-6 flex flex-col gap-4 max-w-xl font-['Heebo:Regular'] font-normal text-copy text-body-lg text-pretty">
                <p>משרד אלירז הוא משרד רואי חשבון קטן ובוטיקי שמעניק שירות אישי ומקצועי לעוסקים מורשים, פטורים זעירים, חברות ועמותות.</p>
                <p>אני מאמין בשירות זמין, שקיפות ויחס אישי, עם דגש על הבנה מעמיקה של הצרכים הייחודיים של כל לקוח וליווי לאורך כל הדרך.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[rgba(226,232,240,0.8)] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
              <img alt="משרד אלירז" className="absolute inset-0 size-full object-cover" src={imgAboutOffice} loading="lazy" />
              <div className="absolute inset-0 bg-[rgba(15,23,42,0.05)]" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`bg-white ${HEADER_OFFSET}`}>
          <div className="container-page section-y">
            <SectionHeader title="יצירת קשר" intro="נשמח לשמוע ולבדוק איך נוכל לעזור." />
            <ul className="w-fit mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 list-none m-0 p-0">
              {CONTACT_ITEMS.map(({ href, external, text, icon, iconCls }) => (
                <li key={text}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 no-underline"
                  >
                    <span className="flex items-center justify-center size-12 shrink-0 rounded-full bg-navy">
                      <img alt="" className={`block max-w-none ${iconCls}`} src={icon} />
                    </span>
                    <span className="font-['Heebo:SemiBold'] font-semibold text-ink-soft text-h3 group-hover:text-navy">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy border-t border-ink-soft">
        <div className="container-page py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-['Heebo:Regular'] font-normal text-faint text-caption text-balance">© כל הזכויות שמורות - {FIRM_NAME}</p>
          <div className="flex items-center gap-2">
            <span className="font-['Heebo:Bold'] font-bold text-white text-caption tracking-[0.025em]">{FIRM_NAME}</span>
            <picture className="shrink-0">
              <source srcSet={imgLogoWebp} type="image/webp" />
              <img src={imgLogoPng} alt="" width={162} height={144} className="block h-8 w-auto" />
            </picture>
          </div>
        </div>
      </footer>
    </div>
  );
}
