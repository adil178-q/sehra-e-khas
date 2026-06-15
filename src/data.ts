import { Product, Collection, Announcement, Review } from "./types";

export const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  { id: "1", text: "SOVEREIGN LEGACY · SS26" },
  { id: "2", text: "WORLDWIDE SHIPPING · DHL EXPRESS" },
  { id: "3", text: "FREE EXCHANGES & RETURNS" },
  { id: "4", text: "ONCE SOLD ARCHIVED FOREVER" },
  { id: "5", text: "DESIGNED IN PAKISTAN • MADE FOR THE WORLD" },
  { id: "6", text: "KHAAS CLUB • INVITATION ONLY" },
  { id: "7", text: "LIMITED QUANTITIES • NO RESTOCKS" }
];

export const DEFAULT_FB_ORDER_LINK = "https://web.facebook.com/sehraekhaas.official";

export const DEFAULT_COLLECTIONS: Collection[] = [
  {
    id: "archival-tops",
    title: "ARCHIVAL TOPS / FLEECE",
    subtitle: "HEAVYWEIGHT COUTURE",
    image: "https://i.postimg.cc/CxqZD1LY/detail-2-1-scaled.jpg",
    description: "Heavyweight 450 GSM luxury cotton fleece, meticulously structured with forensic hand-embroidery and rare desert pigments."
  },
  {
    id: "ergonomic-movement",
    title: "ERGONOMIC SILHOUETTES",
    subtitle: "DUNE METRICS",
    image: "https://i.postimg.cc/qRjHg8PT/High-end-fashion-editorial-202604161054-scaled.jpg",
    description: "Modular panelings and aerospace curves mimicking wind-carved desert geometry in rigid-drape scuba fibers."
  },
  {
    id: "manifesto-sand",
    title: "SAND ESSENTIALS",
    subtitle: "DESCENDING ASCENT",
    image: "https://i.postimg.cc/pLb0KmY8/High-end-fashion-editorial-202604160923.jpg",
    description: "Premium cotton fleece featuring High-Definition Pigment Fusion and literal desert-born manifestos."
  }
];

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "grounded-flux",
    title: "D01-T02 \"The Grounded Flux\"",
    price: 380,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/6pYrjTxZ/front-6.jpg",
      "https://i.postimg.cc/5NjbYR9Z/High-end-luxury-fashion-202604161059-scaled.jpg",
      "https://i.postimg.cc/qRjHg8PT/High-end-fashion-editorial-202604161054-scaled.jpg",
      "https://i.postimg.cc/QMwGG8rh/logo-closeup.jpg",
      "https://i.postimg.cc/25PJ90nc/design-closeup.jpg",
      "https://i.postimg.cc/v87jXLTX/bt-back.jpg"
    ],
    category: "Pants",
    collectionId: "ergonomic-movement",
    shortDescription: "Ergonomic drape shell with curved dune paneling loomed in structured premium scuba fiber.",
    description: "Archive 009 is a study in ergonomic form — engineered as a shell for the body in motion. Curved charcoal panels mirror the shifting ridges of the desert dunes. Constructed from a structured premium scuba fiber, it delivers a heavy architectural drape that stays grounded while the world shifts around you. Limited to 20 units worldwide — once the final anchor of the First Restraint is claimed, this chapter closes permanently.",
    specifications: [
      "Premium Scuba Fiber Construction",
      "Earth-Brown with Charcoal Dune Paneling",
      "High-Density White 'S' Crest",
      "Architectural Drape & Ergonomic Fit",
      "Made in Pakistan"
    ],
    materials: "Premium High-Density Scuba Fiber with multi-paneled tactical structural stretch nylon contrast weave.",
    care: [
      "Delicate hand-wash or dry clean with cold solvents",
      "Do not tumble dry to protect premium scuba fiber structural density",
      "Dry hanging in shade",
      "Store unfolded in flat drawers"
    ],
    sizeGuide: [
      { size: "L", chest: "Waist (relaxed) 30–32 in / (stretched) 36–38 in", length: "Length 39–40 in", shoulder: "Inseam 28–29 in | Thigh 12–13 in | Leg opening 6–7 in" },
      { size: "XL", chest: "Waist (relaxed) 32–34 in / (stretched) 38–40 in", length: "Length 40–41 in", shoulder: "Inseam 29–30 in | Thigh 13–14 in | Leg opening 7–8 in" }
    ],
    availableSizes: ["L", "M"],
    isNewArrival: true,
    unitsTotal: 20,
    unitsLeft: 8
  },
  {
    id: "midnight-vigil",
    title: "D01-H01 \"The Midnight Vigil\"",
    price: 390,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/WzgKggKF/4F-scaled-(1).jpg",
      "https://i.postimg.cc/9MqNHyW2/High-end-luxury-fashion-202604160850-scaled.jpg",
      "https://i.postimg.cc/jqPk86g8/Front-2-scaled.jpg",
      "https://i.postimg.cc/Z57f9wn5/1-F-scaled-1600x2400.jpg",
      "https://i.postimg.cc/8kRtdpcn/back-1-scaled-1600x2400.jpg"
    ],
    category: "Hoodies",
    collectionId: "archival-tops",
    shortDescription: "Heavyweight Shadow Grey cotton fleece featuring tactile forensic hawk embroidery detailing.",
    description: "Archive 002 is a declaration of perspective. The vigil begins when the world surrenders, capturing the sovereign hawk at the dead hour of the night — a masterclass in altitude and absolute discipline. Constructed from 450 GSM heavyweight cotton fleece in light-absorbing Shadow Grey, the chest features a forensic reconstruction of the hawk in flight using dense silver and charcoal threadwork to mimic bone and velocity. Limited to 30 units globally — once the final artifact is claimed, the archive is sealed permanently.",
    extraStory: "At 3:00 AM the desert does not sleep — it watches. Ancient Bedouin navigators called it Saat al Kamal, the Hour of Perfection: the hour when the djinn return to the earth, when stars speak without metaphor, and the wind carries the names of those never meant to be ordinary. It separates the performed from the permanent. In the silence that remains, something with wings and no interest in being witnessed takes the sky.",
    specifications: [
      "450 GSM Heavyweight Cotton Fleece",
      "Shadow Grey Canvas",
      "Tactile Silver and Charcoal Hawk Embroidery",
      "Structural Heavyweight Silhouette",
      "Made in Pakistan"
    ],
    materials: "100% Cotton Fleece at 450 GSM weight with authentic silver-wound high lustre metallic thread inserts.",
    care: [
      "Dry clean or absolute gentle hand wash in lukewarm water inside out",
      "Avoid scrubbing the precise high-density chest embroidery",
      "Never bleach",
      "Dry flat"
    ],
    sizeGuide: [
      { size: "L", chest: "24–25 in", length: "27–28 in", shoulder: "Sleeve: 23–24 in" },
      { size: "XL", chest: "26–27 in", length: "28–29 in", shoulder: "Sleeve: 24–25 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: true,
    unitsTotal: 30,
    unitsLeft: 11
  },
  {
    id: "silent-sovereign",
    title: "D01-H02 \"The Silent Sovereign\"",
    price: 450,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/CxqZD1LY/detail-2-1-scaled.jpg",
      "https://i.postimg.cc/0QcrxKZz/MODDH-1-scaled.jpg",
      "https://i.postimg.cc/3JyW5RGD/closup-scaled.jpg",
      "https://i.postimg.cc/dtTQNfMy/detail-1-scaled.jpg",
      "https://i.postimg.cc/PxRh2WSX/High-end-luxury-fashion-202604160747-scaled.jpg",
      "https://i.postimg.cc/3wrdqZFk/front-jpg-scaled.jpg"
    ],
    category: "Hoodies",
    collectionId: "archival-tops",
    shortDescription: "Obsidian thick fleece scar-stitched with high-density liquid steel embroidery and desert blooms.",
    description: "Archive 003 is the final seal of the First Trilogy. The loudest power in the desert makes no sound — moving beneath the surface as a tectonic force. The Silent Sovereign represents this hidden spine of the dunes, displacing earth with a patience that requires no audience. Constructed from 450 GSM obsidian cotton fleece, the garment carries the literal gravity of the desert. Liquid steel thread is forced through the void-black canvas, creating high-density embroidery that scars the fabric with forensic precision, accompanied by desert blooms as evidence of the sovereign passing. Strictly limited to 30 units globally — as the closing chapter of this trilogy, the embroidery plates will be permanently destroyed once the final piece is claimed.",
    extraStory: "The loudest power in the desert makes no sound. It moves beneath — tectonic, deliberate, indifferent to witness. The dragon was never a creature of the sky; that myth belongs to cultures that feared what they could not see. In the desert, the old observers knew the truth: the sovereign force lives in the marrow of the dunes themselves, a hidden spine running beneath forty meters of sand. It does not announce — it arrives in the evidence it leaves behind: a shifted ridge, a collapsed hollow, the inexplicable warmth of ground that has not seen sun for three days. The Silent Sovereign is named after that evidence.",
    specifications: [
      "450 GSM Heavyweight Cotton Fleece",
      "Obsidian Void Black Canvas",
      "High Density Liquid Steel and Charcoal Embroidery",
      "Oversized Brutalist Silhouette",
      "Made in Pakistan"
    ],
    materials: "Dual-spun 450 GSM organic loopback fleece with aerospace synthetic structural stitching bindings.",
    care: [
      "Professional eco-dry clean highly recommended due to high steel thread content weight",
      "Iron low on reverse size avoiding raw steel embroidery areas",
      "Do not hang on wire hangers"
    ],
    sizeGuide: [
      { size: "L", chest: "24–25 in", length: "27–28 in", shoulder: "Sleeve: 23–24 in" },
      { size: "XL", chest: "26–27 in", length: "28–29 in", shoulder: "Sleeve: 24–25 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: false,
    unitsTotal: 30,
    unitsLeft: 5
  },
  {
    id: "ascendant",
    title: "D01-H03 \"The Ascendant\"",
    price: 490,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/pdgMjWrL/6F-scaled.jpg",
      "https://i.postimg.cc/KznwgtC9/closeup-4-scaled.jpg",
      "https://i.postimg.cc/FH8BWP43/detail-3-scaled-(1).jpg",
      "https://i.postimg.cc/Hn6SQzzx/7F-scaled.jpg",
      "https://i.postimg.cc/MH3DcTZn/High-end-luxury-fashion-202604152145-scaled.jpg",
      "https://i.postimg.cc/W326XrhF/back-3-1600x2400.jpg",
      "https://i.postimg.cc/jq3Q4DKx/1-1536x2048.jpg",
      "https://i.postimg.cc/XvWwYFKm/front-4-scaled.jpg"
    ],
    category: "Hoodies",
    collectionId: "archival-tops",
    shortDescription: "Ultra-heavy Sand fleece woven with rich cobalt, gold threads Phoenix and cherry blossoms.",
    description: "Archive 001 is the genesis artifact. The desert offers one fire and one test. The Ascendant is willed into existence to represent what survival looks like when it's finally allowed to be beautiful. Constructed from 450 GSM heavyweight cotton fleece in a desert sand finish, the chest and bilateral sleeves feature thousands of irreversible stitches rendering the ascending Phoenix in cobalt and raw gold alongside cherry blossom witnesses — a milestone of high-density threadwork with a thick double-lined hood and integrated front pouch. Strictly limited to an unannounced quantity — once the final piece is claimed, the embroidery plates will be permanently destroyed.",
    extraStory: "The desert does not offer second chances. It offers one fire. One test.",
    specifications: [
      "450 GSM Heavyweight Cotton Fleece",
      "Stone and Desert Sand Canvas",
      "High Density Cobalt and Raw Gold Embroidery",
      "Bilateral Sleeve Cherry Blossom Threadwork",
      "Double Lined Hood and Integrated Front Pouch",
      "Oversized Dropped Shoulder Silhouette",
      "Made in Pakistan"
    ],
    materials: "Premium Pakistan organic cotton fleece at luxury weight with pre-dyed sapphire cobalt and real pure gold wound yarn filaments.",
    care: [
      "Hand wash cold strictly, flat air dry only",
      "Dry cleaning is optimal to retain pristine wing details"
    ],
    sizeGuide: [
      { size: "L", chest: "24–25 in", length: "27–28 in", shoulder: "Sleeve: 23–24 in" },
      { size: "XL", chest: "26–27 in", length: "28–29 in", shoulder: "Sleeve: 24–25 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: true,
    unitsTotal: 40,
    unitsLeft: 14
  },
  {
    id: "ancestral-guard",
    title: "D01-H04 \"The Ancestral Guard\"",
    price: 450,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/9M69s7fZ/1F-1-scaled.jpg",
      "https://i.postimg.cc/pLWjNx2t/High-end-luxury-202604160815-scaled.jpg",
      "https://i.postimg.cc/wM51P4Zg/5F-1-scaled.jpg",
      "https://i.postimg.cc/mgpt0HX7/High-end-fashion-202604160819-scaled.jpg",
      "https://i.postimg.cc/BZ5tJy7q/closeup-2-Copy-scaled.jpg",
      "https://i.postimg.cc/tJ9q1qS8/Back-Copy-1600x2400.jpg",
      "https://i.postimg.cc/sgMVG0mv/2F-1-1536x2048.jpg",
      "https://i.postimg.cc/ZYjZ7hD9/Front-5-1600x2400.jpg"
    ],
    category: "Hoodies",
    collectionId: "archival-tops",
    shortDescription: "Bone-white thick fleece displaying Contract of the Bloodline tactile iron-earth embroidery.",
    description: "Archive 004 is a physical document of the transfer of power. The desert does not recognize the individual — only the lineage. This artifact represents the Contract of the Bloodline, the ritual debt passed from the Sentinel to the Apprentice. Constructed from 450 GSM heavyweight fleece in an Ancient Bone finish, it features dense, tactile embroidery in an iron-earth and charcoal thread palette — an oversized structural anchor meant to carry the weight of the vigil. Limited to 30 units globally — once the final unit is claimed, the embroidery plates are destroyed and the story is sealed permanently.",
    specifications: [
      "450 GSM Heavyweight Cotton Fleece",
      "Ancient Bone Heritage Canvas",
      "Tactile Iron Earth and Charcoal Embroidery",
      "Oversized Dropped Shoulder Silhouette",
      "Made in Pakistan"
    ],
    materials: "Luxury premium bone-washed unbleached heavyweight fleece representing nomadic raw structures.",
    care: [
      "Hand wash warm inside out with minimalist bio-detergents",
      "Do not hang under extreme midday sun rays to avoid unbleached fabric yellowing"
    ],
    sizeGuide: [
      { size: "L", chest: "24–25 in", length: "27–28 in", shoulder: "Sleeve: 23–24 in" },
      { size: "XL", chest: "26–27 in", length: "28–29 in", shoulder: "Sleeve: 24–25 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: false,
    unitsTotal: 30,
    unitsLeft: 9
  },
  {
    id: "eternal-ascent",
    title: "D01-S01 \"The Eternal Ascent\"",
    price: 350,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/pLb0KmY8/High-end-fashion-editorial-202604160923.jpg",
      "https://i.postimg.cc/zBc7vvG0/beige-back-1536x1536.jpg",
      "https://i.postimg.cc/3xTsYSq6/beige-closeup-(1).jpg",
      "https://i.postimg.cc/2jLMvNN3/female-model-2.png",
      "https://i.postimg.cc/HkY66fRc/High-end-luxury-fashion-202604160921-scaled.jpg",
      "https://i.postimg.cc/RCwG4Sz3/front-1600x2133.webp"
    ],
    category: "Sweaters",
    collectionId: "manifesto-sand",
    shortDescription: "Premium 350 GSM gold-sand cotton sweater detailing High-Definition Pigment Fusion soaring crane.",
    description: "Archive 006 is a study in aerodynamic restraint. Built for the individual who has already arrived, the soaring crane represents the ultimate long-game — efficiency of movement and absolute patience over brute force. Constructed from premium 350 GSM cotton fleece in sun-drenched gold-sand, the artifact uses High-Definition Pigment Fusion to embed hyper-detailed artwork directly into the fibers, creating a seamless, flexible drape. Limited to 20 units globally — once claimed, the sky closes and the archive is sealed permanently.",
    extraStory: "True power does not always roar — sometimes it glides. In the oldest tongue of the Arabian desert, the crane was called Al Ghayb al Tayir — the Disappearing Bird. Not weak, not shy, but operating at an altitude the human eye was never designed to track. It did not vanish — it simply ascended beyond the range of those who refused to look up. Pre-Islamic poets of the Jahiliyyah wrote of the crane as the only creature that carried the desert's secrets across continents — the living letter between civilizations that could not speak to each other. It flew the direction the wind already intended, arriving with the precision of something that had never doubted the journey.",
    specifications: [
      "350 GSM Premium Cotton Fleece",
      "Gold-Sand Canvas",
      "High-Definition Pigment Fusion Crane Print",
      "Seamless Flexible Drape",
      "Made in Pakistan"
    ],
    materials: "Combed premium quality cotton weft fused with heat-sealed micro pigments that integrate with cellular cotton filaments.",
    care: [
      "Machine wash cold delicate cycle with similar light tones",
      "Always iron inside out under low temperature heat grid"
    ],
    sizeGuide: [
      { size: "L", chest: "23.5 in", length: "26.5 in", shoulder: "Sleeve: 23 in" },
      { size: "XL", chest: "25.5 in", length: "27.5 in", shoulder: "Sleeve: 24 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: false,
    unitsTotal: 20,
    unitsLeft: 7
  },
  {
    id: "deserts-resilience",
    title: "D01-S02 \"The Desert's Resilience\"",
    price: 350,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/xCn8m3qF/female-back-2.png",
      "https://i.postimg.cc/9fjQ3YPX/High-end-fashion-editorial-202604160953-scaled.jpg",
      "https://i.postimg.cc/j5xq2qFb/back-closeup.jpg",
      "https://i.postimg.cc/kX0n8vpQ/High-end-luxury-fashion-202604160956.jpg",
      "https://i.postimg.cc/rmwccnDN/male-hero-1-scaled.png",
      "https://i.postimg.cc/rFrT8twG/front-1.jpg",
      "https://i.postimg.cc/26tpYzps/3by-4-back.jpg"
    ],
    category: "Sweaters",
    collectionId: "manifesto-sand",
    shortDescription: "Defiant Saguaro architectural layout with Born in the Desert manifesto printed at the spine.",
    description: "The Saguaro does not ask for permission to exist. It is the desert's most disciplined architect, storing life within its core when the world outside is empty, growing into a titan of the dunes. We chose it for its defiance, not its beauty. This artifact carries our \"Born in the Desert\" manifesto across its back — a quiet declaration left behind in every room you exit. The front is your armor. The back is your truth. Constructed from 350 GSM cotton fleece built to endure, to soften with time, and to become a relic of your own journey. Limited to 20 units worldwide — once claimed, this chapter closes permanently.",
    extraStory: "There are places on this earth where survival is not a circumstance — it is a discipline; a daily agreement between the living thing and the brutal geometry of its environment. The Sehra does not negotiate, does not soften — and yet from its most punishing coordinates it produces the most extraordinary structures the natural world has ever built. This garment is not inspired by the desert — it is the desert translated into 500 grams of heirloom cotton, pressed flat and handed to those who are ready to carry it. The most fertile minds often grow in the most barren places.",
    specifications: [
      "350 GSM Heavyweight Premium Fleece",
      "Stone-washed Sage Grit Tint",
      "Saguaro Architectural Print & Spine Manifesto",
      "Highly Rigid Ribbed Trims",
      "Made in Pakistan"
    ],
    materials: "100% Cotton knit with tactile high build silicon ink print highlights across the spinal column.",
    care: [
      "Gentle cold water wash",
      "Do not steam over the back spinal manifesto text directly",
      "Dry flat"
    ],
    sizeGuide: [
      { size: "L", chest: "24 in", length: "27 in", shoulder: "Sleeve: 23 in" },
      { size: "XL", chest: "26 in", length: "28 in", shoulder: "Sleeve: 24 in" }
    ],
    availableSizes: ["L", "XL"],
    isNewArrival: false,
    unitsTotal: 20,
    unitsLeft: 6
  },
  {
    id: "linear-boundary",
    title: "D01-T01 \"The Linear Boundary\"",
    price: 395,
    currencySymbol: "$",
    images: [
      "https://i.postimg.cc/3rp7hvRX/male-1.png",
      "https://i.postimg.cc/QMwGG8rh/logo-closeup.jpg",
      "https://i.postimg.cc/c40qNk2j/High-end-fashion-editorial-202604161216-scaled.jpg",
      "https://i.postimg.cc/25PJ90nc/design-closeup.jpg",
      "https://i.postimg.cc/v87jXLTX/bt-back.jpg",
      "https://i.postimg.cc/qRsmb4Jx/123.png"
    ],
    category: "Pants",
    collectionId: "ergonomic-movement",
    shortDescription: "Structured straight-leg pants with contrasting desert-plaid panel guidelines of vertical rest.",
    description: "Archive 008 is a study in verticality and architectural restraint. Designed to elongate the frame, contrasting desert-plaid panels act as a structural grid defining the boundary between natural chaos and absolute order. Crafted from a premium high-density scuba fiber, the trouser delivers a rigid, straight-leg drape that refuses to collapse. Finished in light-absorbing shadow black, it carries the physical weight of true presence. Limited to 20 units globally — once the final artifact is claimed, the boundary is closed and the archive is sealed permanently.",
    specifications: [
      "Premium High-Density Scuba Fiber",
      "Contrasting Desert-Plaid Panel Inserts",
      "Uncollapsed Straight-Leg Drape",
      "Light-Absorbing Shadow Black Base",
      "Made in Pakistan"
    ],
    materials: "Structured scuba nylon composite paired with micro-knit virgin flannel wool plaid paneling.",
    care: [
      "Professional dry clean only to retain the perfectly crisp straight-cut frontal crease line",
      "Do not hang on metal clips",
      "Low temperature iron under a pressing damp cloth barrier"
    ],
    sizeGuide: [
      { size: "L", chest: "Waist (relaxed) 31–33 in", length: "Length 40 in", shoulder: "Inseam 29 in" },
      { size: "M", chest: "Waist (relaxed) 29–31 in", length: "Length 39 in", shoulder: "Inseam 28 in" }
    ],
    availableSizes: ["L", "M"],
    isNewArrival: false,
    unitsTotal: 20,
    unitsLeft: 4
  }
];

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Ziad Q.",
    rating: 5,
    date: "2026-05-18",
    comment: "The heavy drape of 'The Grounded Flux' is phenomenal. It behaves like heavy carbon-fiber armor, but stays absolutely breathable. A masterpiece of avant-garde streetwear.",
    verified: true
  },
  {
    id: "r2",
    author: "Hamdan L.",
    rating: 5,
    date: "2026-05-30",
    comment: "The steel and charcoal threadwork on 'The Silent Sovereign' carries literal heft. The detail is mindblowing up close. This is archival wearable art.",
    verified: true
  },
  {
    id: "r3",
    author: "Saira K.",
    rating: 5,
    date: "2026-06-02",
    comment: "Simply stunning craftsmanship. 'The Ascendant' has become the centerpiece of my fashion archive. The Phoenix embroidery shines like ancient sand.",
    verified: true
  }
];
