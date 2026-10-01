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

export default function App() {
  return (
    <div dir="rtl" className="bg-white min-h-screen">
      {/* MainHeader */}
      <header className="sticky top-0 z-50 backdrop-blur-[2px] bg-[rgba(255,255,255,0.95)] border-b border-[#f1f5f9] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="h-[72px] md:h-[96px] max-w-[1240px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" aria-label={FIRM_NAME} className="flex items-center no-underline shrink-0">
            <picture className="shrink-0">
              <source srcSet={imgLogoWebp} type="image/webp" />
              <img src={imgLogoPng} alt="" width={162} height={144} className="block h-11 md:h-[60px] w-auto" />
            </picture>
          </a>

          {/* CTA Button */}
          <a href="#contact" className="flex bg-[#0f2742] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] gap-2 items-center min-h-[44px] md:min-h-0 pl-6 pr-[22px] py-[10px] rounded-[8px] cursor-pointer border-0 no-underline">
            <span className="font-['Heebo:Medium'] font-medium text-white text-[14px] leading-[20px]">יצירת קשר</span>
            <div className="flex items-center justify-center size-3">
              <div className="-rotate-90 flex-none">
                <div className="relative size-3">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                </div>
              </div>
            </div>
          </a>
        </div>
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
              <span className="font-['Heebo:Black'] font-black text-[#0f2742] text-[34px] leading-[40px] min-[400px]:text-[38px] min-[400px]:leading-[44px] sm:text-[54px] sm:leading-[58px] tracking-[-1.35px]">אלירז מיכאל ושות'</span>{" "}
              <span className="font-['Heebo:Bold'] font-bold text-[#0f2742] text-[30px] leading-[36px] sm:text-[42px] sm:leading-[44px] tracking-[-1.35px]">משרדי רואי חשבון</span>
            </h1>
            {/* Gold accent */}
            <div className="bg-[#cca262] h-[3px] rounded-[2px] w-[44px]" />
            {/* Subheading */}
            <div className="pt-4 w-full text-right">
              <p className="font-['Heebo:Bold'] font-bold text-[#1e293b] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] mb-0">ראיית חשבון, ייעוץ וליווי פיננסי</p>
              <p className="font-['Heebo:Bold'] font-bold text-[#1e293b] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px]">לעוסקים מורשים, פטורים זעירים, חברות ועמותות.</p>
            </div>
            {/* Body text */}
            <div className="w-full text-right">
              <p className="font-['Heebo:Regular'] font-normal text-[#475569] text-[17px] leading-[27px] sm:text-[18px] sm:leading-[28px] mb-0">שירות אישי, מקצועי וזמין, עם הסתכלות רחבה על התמונה הפיננסית.</p>
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
                  {" "}<p className="font-['Heebo:Regular'] font-normal text-[#334155] text-[18px] leading-[29.25px] inline xl:block">לעוסקים מורשים, פטורים זעירים, חברות ועמותות.</p>
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
