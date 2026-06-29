/* ------------------------------------------------------------------
   Galvin Group — Cooper Galvin (with Michael Galvin)
   Real-estate investor & investment-club operator. Orlando, FL,
   investing across the Southeast (Florida / Gulf Coast).
   Facts sourced from his Instagram (@galvingroup_), LinkedIn, the
   Galvin Group buy-box graphic, and the Galvin Group Investment Club
   overview. Some pro-forma figures are illustrative — see notes.
------------------------------------------------------------------ */

const U = "https://images.unsplash.com/";
export const img = (id: string, w = 1600) =>
  `${U}${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BRAND = {
  name: "Galvin Group",
  logo: "/logo.png",
  // Cooper's headshot drop-in — swap /cooper.jpg when available.
  headshot: "/cooper.jpg",
};

export const PERSON = {
  name: "Cooper Galvin",
  partner: "Michael Galvin",
  title: "Owner & Investor — Multifamily, Self-Storage & Buy-and-Hold",
  location: "Orlando, FL",
  market: "Based in Orlando — investing across the Southeast & red-state markets",
  mission:
    "Documenting relentless improvement — building financial freedom through cash-flowing real estate.",
  bio: "Cooper Galvin is a real-estate investor and operator focused on acquiring and operating cash-flowing assets. A Sergeant in the Army National Guard and a Norwich University construction-management graduate and student-athlete, he brings military discipline and hands-on construction expertise to every deal. Alongside Michael Galvin, he runs the Galvin Group Investment Club, helping investors build equity in a diversified portfolio of Southeastern real estate.",
};

export const CONTACT = {
  phone: "(312) 208-1032",
  phoneHref: "tel:+13122081032",
  email: "galvinc30@gmail.com",
  emailHref: "mailto:galvinc30@gmail.com",
  instagram: "https://www.instagram.com/galvingroup_/",
  instagramHandle: "@galvingroup_",
  linkedin: "https://www.linkedin.com/in/sgt-cooper-galvin-cm",
  youtube: "https://youtu.be/daytJ7OUv6U",
  x: "https://x.com/gooper_c",
  fractional: "https://www.fractional.app/p/galvingroupclub",
};

/* Headline stats — anchored to the active raise + buy-box. */
export const STATS = [
  { value: 19, suffix: "", label: "Doors under contract", sub: "Panama City portfolio" },
  { value: 14, suffix: "", label: "Properties acquiring", sub: "SFR · duplex · triplex · land" },
  { value: 375, prefix: "$", suffix: "K", label: "Club raise", sub: "Southeast residential fund" },
  { value: 2, suffix: "×", label: "Target equity multiple", sub: "~5-year hold" },
];

export const CREDS = [
  "U.S. Army National Guard — Sergeant",
  "Norwich University — Construction Management",
  "Student-Athlete",
  "Creative-Finance Operator",
];

/* Three pillars — the edge. */
export const PILLARS = [
  {
    k: "01",
    title: "Discipline",
    body: "A Sergeant's standard, applied to underwriting. Every deal is run by the numbers, stress-tested, and acquired only when it pencils.",
  },
  {
    k: "02",
    title: "Construction edge",
    body: "A construction-management degree means renovations, scopes, and budgets are read first-hand — not guessed at. Value is added where it actually pays.",
  },
  {
    k: "03",
    title: "Operator mindset",
    body: "We don't speculate. We acquire, stabilize, and hold income-producing assets, compounding cash flow over the long run.",
  },
];

/* The buy box — exactly what Galvin Group acquires. */
export const BUYBOX = [
  {
    type: "Multi-Family",
    icon: "buildings",
    criteria: [
      "24+ units",
      "+90% occupancy",
      "C or better neighborhood",
      "Individually metered",
      "1+ parking spot per unit",
      "No septic · no major repairs",
      "Clear financials",
    ],
  },
  {
    type: "Self Storage",
    icon: "warehouse",
    criteria: [
      "24+ units · 5,000+ sqft",
      "Valued below market rates",
      "Below $35 / sqft",
      "Room to expand",
      "Small / mid-size markets",
      "3+ comps",
      "Clear financials",
    ],
  },
  {
    type: "Residential (SFR)",
    icon: "home",
    criteria: [
      "Single-family, duplex, triplex",
      "Residential land w/ upside",
      "In-place or near-term cash flow",
      "Strong rental demand",
      "Population-growth markets",
      "Workforce & tourism housing",
      "Southeast / Gulf Coast",
    ],
  },
];

export const DEAL_PREFS = [
  "Creative finance",
  "Interest rate 3–5%",
  "Turn-key",
  "No major structural issues",
  "No aluminum wiring",
];

/* The investment club. */
export const CLUB = {
  blurb:
    "A private, members-only club that pools capital to acquire and operate cash-flowing residential real estate across high-growth Southeastern markets — single-family homes, small multifamily, and residential land with in-place or near-term cash flow.",
  terms: [
    { k: "Minimum investment", v: "$15,000", note: "≈ 1.5% ownership" },
    { k: "Hold period", v: "~5 years", note: "multiple exit paths" },
    { k: "Target return", v: "2× equity", note: "over the hold" },
    { k: "Structure", v: "Single LLC", note: "via Fractional" },
  ],
  steps: [
    { k: "01", title: "Commit", body: "Reserve your spot in the club and clear compliance & identity verification." },
    { k: "02", title: "Fund", body: "Once fully committed, the LLC forms and members fund their investment." },
    { k: "03", title: "Vote & diligence", body: "Members review deals, run due diligence, and vote to approve each acquisition." },
    { k: "04", title: "Acquire & operate", body: "We secure, stabilize, and operate the assets — improving operations and rents." },
    { k: "05", title: "Distribute", body: "Ongoing cash-flow distributions and quarterly reporting through the hold." },
    { k: "06", title: "Exit", body: "Refinance, portfolio sale, or asset-by-asset — capital returned, then do it again." },
  ],
};

/* Active / featured deal. */
export const DEAL = {
  name: "Panama City Portfolio",
  location: "Bay County, FL",
  properties: 14,
  doors: 19,
  mix: "Single-family homes, duplexes, triplexes & residential land",
  raised: 25,
  goal: 375,
  note: "Illustrative figures from the club overview; full underwriting in the member deck.",
};

/* Socials — used in the clickable LogoLoop. */
export const SOCIALS = [
  { name: "Instagram", icon: "instagram", href: CONTACT.instagram, label: CONTACT.instagramHandle },
  { name: "LinkedIn", icon: "linkedin", href: CONTACT.linkedin, label: "Cooper Galvin" },
  { name: "YouTube", icon: "youtube", href: CONTACT.youtube, label: "Galvin Group" },
  { name: "X", icon: "x", href: CONTACT.x, label: "@gooper_c" },
  { name: "Invest via Fractional", icon: "fractional", href: CONTACT.fractional, label: "Galvin Group Club" },
  { name: "Email", icon: "mail", href: CONTACT.emailHref, label: CONTACT.email },
  { name: "Call", icon: "phone", href: CONTACT.phoneHref, label: CONTACT.phone },
];

/* Communities / affiliations — "Backed by", clickable where a site exists. */
export const AFFILIATIONS: { name: string; href?: string }[] = [
  { name: "SubTo", href: "https://subto.com" },
  { name: "Owners Club" },
  { name: "Fractional", href: "https://www.fractional.app/p/galvingroupclub" },
  { name: "Norwich University", href: "https://www.norwich.edu" },
  { name: "Army National Guard", href: "https://www.nationalguard.com" },
  { name: "Creative Finance" },
];

/* Media — YouTube video + Instagram reels for the tabbed "Watch" section.
   To embed a specific reel live, set `reelId` to a reel shortcode
   (instagram.com/reel/<id>/) and the Instagram tab will iframe it. */
export const MEDIA = {
  youtubeId: "daytJ7OUv6U",
  youtubeUrl: CONTACT.youtube,
  instagram: CONTACT.instagram,
  instagramReels: "https://www.instagram.com/galvingroup_/reels/",
  instagramHandle: CONTACT.instagramHandle,
  reelId: "" as string, // e.g. "C8xVZ..." → live-embeds that reel
};

export const IMAGES = {
  heroProperty: img("photo-1512917774080-9991f1c4c750", 1700),
  modernHome: img("photo-1600596542815-ffad4c1539a9", 1400),
  rowhouse: img("photo-1570129477492-45c003edd2be", 1200),
  brownstone: img("photo-1448630360428-65456885c650", 1400),
  keys: img("photo-1605146769289-440113cc3d00", 1200),
  interiorKitchen: img("photo-1600585154340-be6161a56a0c", 1300),
  interiorLiving: img("photo-1600607687939-ce8a6c25118c", 1300),
  brickRow: img("photo-1582268611958-ebfd161ef9cf", 1300),
  storage: img("photo-1486406146926-c627a92ad1ab", 1300),
  skyline: img("photo-1501979376754-2ff867a4f659", 1700),
};

export const fmtUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
