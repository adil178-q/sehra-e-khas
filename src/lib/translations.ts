export type Language = "en" | "ar" | "nl" | "fr" | "pt";

export interface TranslationDictionary {
  [key: string]: {
    en: string;
    ar: string;
    nl: string;
    fr: string;
    pt: string;
  };
}

export const UI_TRANSLATIONS: TranslationDictionary = {
  // Navigation
  "HOME": {
    en: "HOME",
    ar: "الرئيسية",
    nl: "THUIS",
    fr: "ACCUEIL",
    pt: "INÍCIO"
  },
  "OUR STORY": {
    en: "OUR STORY",
    ar: "قصتنا",
    nl: "ONS VERHAAL",
    fr: "NOTRE HISTOIRE",
    pt: "NOSSA HISTÓRIA"
  },
  "HOUSE JOURNAL": {
    en: "HOUSE JOURNAL",
    ar: "صحيفة البيت",
    nl: "HUISJOURNAAL",
    fr: "JOURNAL DE LA MAISON",
    pt: "DIÁRIO INTERNO"
  },
  "THE ARCHIVE DIRECTORY": {
    en: "THE ARCHIVE DIRECTORY",
    ar: "دليل الأرشيف",
    nl: "HET ARCHIEF REGISTER",
    fr: "L'ANNUAIRE DES ARCHIVES",
    pt: "O DIRETÓRIO DE ARQUIVOS"
  },
  "ALL MASTERPIECES": {
    en: "ALL MASTERPIECES",
    ar: "جميع التحف",
    nl: "ALLE MEESTERWERKEN",
    fr: "TOUS LES CHEFS-D'ŒUVRE",
    pt: "TODAS AS OBRAS-PRIMAS"
  },
  "BACK TO HOME": {
    en: "BACK TO HOME",
    ar: "العودة للرئيسية",
    nl: "TERUG NAAR THUIS",
    fr: "RETOUR À L'ACCUEIL",
    pt: "VOLTAR AO INÍCIO"
  },
  "ORDER NOW": {
    en: "ORDER NOW",
    ar: "اطلب الآن",
    nl: "NU BESTELLEN",
    fr: "COMMANDER",
    pt: "ENCOMENDAR JÁ"
  },
  "ADD TO CART": {
    en: "ADD TO CART",
    ar: "أضف إلى السلة",
    nl: "AAN WINKELWAGEN TOEVOEGEN",
    fr: "AJOUTER AU PANIER",
    pt: "ADICIONAR AO CARRINHO"
  },
  "CLOSE SELECTION": {
    en: "CLOSE SELECTION",
    ar: "إغلاق التحديد",
    nl: "SELECTIE SLUITEN",
    fr: "FERMER LA SÉLECTION",
    pt: "FECHAR SELEÇÃO"
  },
  "SHOPPING CART": {
    en: "SHOPPING CART",
    ar: "حقيبة التسوق",
    nl: "WINKELWAGEN",
    fr: "PANIER D'ACHATS",
    pt: "CARRINHO DE COMPRAS"
  },
  "SELECT SIZE": {
    en: "SELECT SIZE",
    ar: "اختر مقاساً",
    nl: "SELECTEER MAAT",
    fr: "CHOISIR TAILLE",
    pt: "SELECIONAR TAMANHO"
  },
  "QUANTITY": {
    en: "QUANTITY",
    ar: "الكمية",
    nl: "AANTAL",
    fr: "QUANTITÉ",
    pt: "QUANTIDADE"
  },
  "SECURE DISPATCH TRACKING": {
    en: "SECURE DISPATCH TRACKING",
    ar: "تتبع آمن للشحنة",
    nl: "VEILIG VERZENDEN VOLGEN",
    fr: "SUIVI SÉCURISÉ DES EXPÉDITIONS",
    pt: "RASTREAMENTO SEGURO DE ENVIO"
  },
  "NEWSLETTER SYNCHRONY": {
    en: "NEWSLETTER SYNCHRONY",
    ar: "مزامنة النشرة الإخبارية",
    nl: "NIEUWSBRIEF SYNCHRONISATIE",
    fr: "NEWSLETTER SYNCHRONE",
    pt: "SINTONIA DO BOLETIM"
  },
  "LEGAL CODES": {
    en: "LEGAL CODES",
    ar: "الأكواد القانونية",
    nl: "WETTELIJKE CODES",
    fr: "CODES JURIDIQUES",
    pt: "CÓDIGOS LEGAIS"
  },
  "COMPLIANT SHIPPING FAQ": {
    en: "COMPLIANT SHIPPING FAQ",
    ar: "الأسئلة الشائعة للشحن المتوافق",
    nl: "SCHEEPVAART FAQ",
    fr: "FAQ EXPÉDITION CONFORME",
    pt: "PERGUNTAS FREQUENTES DE ENVIO"
  },
  "RETURN & EXCHANGE MATRIX": {
    en: "RETURN & EXCHANGE MATRIX",
    ar: "مصفوفة الإرجاع والاستبدال",
    nl: "RETOUR & RUIL MATRIX",
    fr: "MATRICE DE RETOUR & D'ÉCHANGE",
    pt: "MATRIZ DE DEVOLUÇÕES E TROCAS"
  },
  "DATA PRIVACY AMENDMENTS": {
    en: "DATA PRIVACY AMENDMENTS",
    ar: "تعديلات خصوصية البيانات",
    nl: "DATA PRIVACY AMENDEMENTEN",
    fr: "AMENDEMENTS SUR LA CONFIDENTIALITÉ",
    pt: "EMENDAS DE PRIVACIDADE DE DADOS"
  },
  "COLLECTIVE TERMS & CONDS": {
    en: "COLLECTIVE TERMS & CONDS",
    ar: "الشروط والأحكام الجماعية",
    nl: "ALGEMENE VOORWAARDEN",
    fr: "CONDITIONS GÉNÉRALES COLLECTIVES",
    pt: "TERMOS E CONDIÇÕES COLETIVAS"
  },
  "SECURE CONSOLE": {
    en: "SECURE CONSOLE",
    ar: "لوحة تحكم آمنة",
    nl: "VEILIGE CONSOLE",
    fr: "CONSOLE SÉCURISÉE",
    pt: "CONSOLE SEGURO"
  },
  "SEARCH THE DIRECTORY": {
    en: "SEARCH THE DIRECTORY",
    ar: "البحث في الدليل",
    nl: "ZOEK IN REGISTER",
    fr: "RECHERCHER DANS L'ANNUAIRE",
    pt: "BUSCAR NO DIRETÓRIO"
  },
  "CLOSE": {
    en: "CLOSE",
    ar: "إغلاق",
    nl: "SLUITEN",
    fr: "FERMER",
    pt: "FECHAR"
  },
  "PROCEED TO SECURE CHECKOUT": {
    en: "PROCEED TO SECURE CHECKOUT",
    ar: "المتابعة لإتمام الدفع الآمن",
    nl: "GA NAAR VEILIG AFREKENEN",
    fr: "PASSER AU PAIEMENT SÉCURISÉ",
    pt: "PROSSEGUIR PARA O PAGAMENTO"
  },
  "YOUR BASKET IS CURRENTLY EMPTY": {
    en: "YOUR BASKET IS CURRENTLY EMPTY",
    ar: "سلتك فارغة حالياً",
    nl: "UW WINKELWAGEN IS MOMENTEEL LEEG",
    fr: "VOTRE PANIER EST ACTUELLEMENT VIDE",
    pt: "SEU CARRINHO ESTÁ VAZIO NO MOMENTO"
  },
  "ENTER PROMO CODE": {
    en: "ENTER PROMO CODE",
    ar: "أدخل رمز الترويج",
    nl: "VOER PROMOTIECODE IN",
    fr: "ENTRER LE CODE PROMO",
    pt: "INSERIR CÓDIGO PROMOCIONAL"
  },
  "APPLY": {
    en: "APPLY",
    ar: "تطبيق",
    nl: "TOEPASSEN",
    fr: "APPLIQUER",
    pt: "APLICAR"
  },
  "SHIPPING RATES CALCULATOR": {
    en: "SHIPPING RATES CALCULATOR",
    ar: "حاسبة أسعار الشحن",
    nl: "VERZENDKOSTEN BEREKENING",
    fr: "CALCULATEUR DE FRAIS D'EXPÉDITION",
    pt: "CALCULADORA DE TAXAS DE ENVIO"
  },
  "CALCULATE SHIPPING": {
    en: "CALCULATE SHIPPING",
    ar: "حساب الشحن",
    nl: "BEREKEN VERZENDKOSTEN",
    fr: "CALCULER L'EXPÉDITION",
    pt: "CALCULAR FRETE"
  },
  "SOVEREIGN LEGACY · SS26": {
    en: "SOVEREIGN LEGACY · SS26",
    ar: "الإرث السيادي · ربيع/صيف ٢٦",
    nl: "SOUVEREINE ERFENIS · SS26",
    fr: "HÉRITAGE SOUVERAIN · PE26",
    pt: "LEGADO SOBERANO · SS26"
  },
  "WORLDWIDE SHIPPING · DHL EXPRESS": {
    en: "WORLDWIDE SHIPPING · DHL EXPRESS",
    ar: "شحن عالمي · دي إتش إل إكسبريس",
    nl: "WERELDWIJDE VERZENDING • DHL EXPRESS",
    fr: "LIVRAISON MONDIALE • DHL EXPRESS",
    pt: "ENVIO MUNDIAL • DHL EXPRESS"
  },
  "FREE EXCHANGES & RETURNS": {
    en: "FREE EXCHANGES & RETURNS",
    ar: "استبدال وإرجاع مجاني",
    nl: "GRATIS RUILEN & RETOURNEREN",
    fr: "RETOURS & ÉCHANGES GRATUITS",
    pt: "TROCAS E DEVOLUÇÕES GRÁTIS"
  },
  "ONCE SOLD ARCHIVED FOREVER": {
    en: "ONCE SOLD ARCHIVED FOREVER",
    ar: "بمجرد بيعها تؤرشف للأبد",
    nl: "EENMAAL VERKOCHT VOOR ALTIJD GEACHIVEERD",
    fr: "UNE FOIS VENDU ARCHIVÉ À JAMAIS",
    pt: "UMA VEZ VENDIDO, ARQUIVADO PARA SEMPRE"
  },
  "DESIGNED IN PAKISTAN • MADE FOR THE WORLD": {
    en: "DESIGNED IN PAKISTAN • MADE FOR THE WORLD",
    ar: "صمم في باكستان • صنع للعالم",
    nl: "ONTWORPEN IN PAKISTAN • GEMAAKT VOOR DE WERELD",
    fr: "CONÇU AU PAKISTAN • FAIT POUR LE MONDE",
    pt: "DESENHADO NO PAQUISTÃO • FEITO PARA O MUNDO"
  },
  "KHAAS CLUB • INVITATION ONLY": {
    en: "KHAAS CLUB • INVITATION ONLY",
    ar: "نادي خاص • بدعوة فقط",
    nl: "KHAAS CLUB • ALLEEN OP UITNODIGING",
    fr: "CLUB KHAAS • SUR INVITATION UNIQUEMENT",
    pt: "CLUBE KHAAS • APENAS CONVITE"
  },
  "LIMITED QUANTITIES • NO RESTOCKS": {
    en: "LIMITED QUANTITIES • NO RESTOCKS",
    ar: "كميات محدودة • لا إعادة تخزين",
    nl: "BEPERKTE HOEVEELHEDEN • GEEN RESTOCKS",
    fr: "QUANTITÉS LIMITÉES • PAS DE RÉASSORT",
    pt: "QUANTIDADES LIMITADAS • SEM REPOSIÇÃO"
  },
  "EXPLORE ARCHIVES": {
    en: "EXPLORE ARCHIVES",
    ar: "استكشف الأرشيف",
    nl: "ONTDEK ARCHIEVEN",
    fr: "EXPLORER LES ARCHIVES",
    pt: "EXPLORAR ARQUIVOS"
  },
  "CHOOSE YOUR SELECTION": {
    en: "CHOOSE YOUR SELECTION",
    ar: "اختر اختيارك",
    nl: "KIES UW SELECTIE",
    fr: "FAITES VOTRE CHOIX",
    pt: "ESCOLHA SUA SELEÇÃO"
  },
  "CURATED COLUMNS": {
    en: "CURATED COLUMNS",
    ar: "أعمدة منسقة",
    nl: "GECUREERDE COLUMNS",
    fr: "RUBRIQUES SÉLECTIONNÉES",
    pt: "COLUNAS SELECIONADAS"
  },
  "READ ENTRY": {
    en: "READ ENTRY",
    ar: "اقرأ المدونة",
    nl: "LEES ARTIKEL",
    fr: "LIRE L'ARTICLE",
    pt: "LER ARTIGO"
  },
  "COMMITTED COLLECTORS FEEDBACK": {
    en: "COMMITTED COLLECTORS FEEDBACK",
    ar: "آراء المقتنين الملتزمين",
    nl: "FEEDBACK VAN TOEGEWIJDE VERZAMELAARS",
    fr: "AVIS DES COLLECTIONNEURS ENGAGÉS",
    pt: "DEPOIMENTOS DOS COLECIONADORES"
  },
  "VERIFIED ACQUISITION": {
    en: "VERIFIED ACQUISITION",
    ar: "اقتناء موثق",
    nl: "GEVERIFIEERDEAANKOOP",
    fr: "ACQUISITION VÉRIFIÉE",
    pt: "AQUISIÇÃO VERIFICADA"
  },
  "SUBMIT EXCLUSIVE DISPATCH TRANSCRIPT (REVIEW)": {
    en: "SUBMIT EXCLUSIVE DISPATCH TRANSCRIPT (REVIEW)",
    ar: "أرسل تقرير شحنتك الحصري (تقييم)",
    nl: "INDIENEN EXCLUSIEVE REVIEW",
    fr: "SOUMETTRE UN AVIS D'ACQUISITION EXCLUSIF",
    pt: "ENVIAR COMENTÁRIO EXCLUSIVO"
  },
  "YOUR NAME / DESIGNATION": {
    en: "YOUR NAME / DESIGNATION",
    ar: "اسمك / مسمى الترشيح",
    nl: "UW NAAM",
    fr: "VOTRE NOM / DESIGNATION",
    pt: "SEU NOME / CARGO"
  },
  "RATING": {
    en: "RATING",
    ar: "التقييم",
    nl: "BEOORDELING",
    fr: "NOTE",
    pt: "AVALIAÇÃO"
  },
  "TRANSMIT EXCLUSIVE REVIEW": {
    en: "TRANSMIT EXCLUSIVE REVIEW",
    ar: "إرسال التقييم الحصري",
    nl: "VERZEND REVIEWS",
    fr: "TRANSMETTRE L'AVIS EXCLUSIF",
    pt: "TRANSMITIR AVALIAÇÃO EXCLUSIVA"
  },
  "JOIN THE KHAAS GUILD": {
    en: "JOIN THE KHAAS GUILD",
    ar: "انضم إلى نقابة خاص",
    nl: "SLUIT JE AAN BIJ HET KHAAS GILDE",
    fr: "REJOINDRE LA GUILDE KHAAS",
    pt: "JUNTE-SE À GUILDA KHAAS"
  },
  "INSTAGRAM HUB": {
    en: "INSTAGRAM HUB",
    ar: "مركز إنستغرام",
    nl: "INSTAGRAM HUB",
    fr: "HUB INSTAGRAM",
    pt: "CENTRAL INSTAGRAM"
  },
  "SYNC FEED": {
    en: "SYNC FEED",
    ar: "مزامنة الخلاصة",
    nl: "SYNCHRONISEER FEED",
    fr: "SYNCHRONISER LE FLUX",
    pt: "SINCRONIZAR FEED"
  },
  "VIEW PIECE": {
    en: "VIEW PIECE",
    ar: "عرض القطعة",
    nl: "BEKIJK STUK",
    fr: "VOIR LA PIÈCE",
    pt: "VER PEÇA"
  },
  "SPECS": {
    en: "SPECS",
    ar: "المواصفات",
    nl: "SPECIFICATIES",
    fr: "SPÉCIFICATIONS",
    pt: "ESPECIFICAÇÕES"
  },
  "MATERIALS": {
    en: "MATERIALS",
    ar: "المواد",
    nl: "MATERIALEN",
    fr: "MATÉRIAUX",
    pt: "MATERIAIS"
  },
  "CARE": {
    en: "CARE",
    ar: "العناية",
    nl: "VERZORGING",
    fr: "ENTRETIEN",
    pt: "CUIDADOS"
  },
  "SHIPPING": {
    en: "SHIPPING",
    ar: "الشحن",
    nl: "VERZENDING",
    fr: "EXPÉDITION",
    pt: "ENVIO"
  },
  "SIZE GUIDE": {
    en: "SIZE GUIDE",
    ar: "دليل المقاسات",
    nl: "MAATTABEL",
    fr: "GUIDE DES TAILLES",
    pt: "GUIA DE TAMANHOS"
  },
  "CHEST": {
    en: "CHEST",
    ar: "الصدر",
    nl: "BORST",
    fr: "POITRINE",
    pt: "PEITO"
  },
  "LENGTH": {
    en: "LENGTH",
    ar: "الطول",
    nl: "LENGTE",
    fr: "LONGUEUR",
    pt: "COMPRIMENTO"
  },
  "SHOULDER": {
    en: "SHOULDER",
    ar: "الكتف",
    nl: "SCHOUDER",
    fr: "ÉPAULE",
    pt: "OMBRO"
  },
  "DIRECTOR SUPERVISION": {
    en: "DIRECTOR SUPERVISION",
    ar: "إشراف المدير",
    nl: "DIRECTEUR TOEZICHT",
    fr: "SUPERVISION DU DIRECTEUR",
    pt: "SUPERVISÃO DO DIRETOR"
  },
  "ARCHIVAL HOUSE CODE": {
    en: "ARCHIVAL HOUSE CODE",
    ar: "كود رموز الدار الأرشيفية",
    nl: "ARCHIEF CODE",
    fr: "CODE MAISON D'ARCHIVE",
    pt: "CÓDIGO DE ARQUIVO DA CASA"
  },
  "IN STOCK & READY TO PACK": {
    en: "IN STOCK & READY TO PACK",
    ar: "في المخزون وجاهز للتعبئة",
    nl: "OP VOORRAAD & KLAAR VOOR VERPAKKEN",
    fr: "EN STOCK & PRÊT À CONDENSER",
    pt: "EM ESTOQUE E PRONTO PARA EMBALAR"
  },
  "RUN LIMIT": {
    en: "RUN LIMIT",
    ar: "حد التشغيل المتاح",
    nl: "OPLAGE LIMIET",
    fr: "LIMITE DE SÉRIE",
    pt: "LIMITE DE SÉRIE"
  },
  "COUPON SPECIALIST": {
    en: "COUPON SPECIALIST",
    ar: "أخصائي الكوبونات",
    nl: "KORTINGSCODE SPECIALIST",
    fr: "SPÉCIALISTE DES COUPONS",
    pt: "ESPECIALISTA EM CUPONS"
  },
  "SUBTOTAL": {
    en: "SUBTOTAL",
    ar: "المجموع الفرعي",
    nl: "SUBTOTAAL",
    fr: "SOUS-TOTAL",
    pt: "SUBTOTAL"
  },
  "DISCOUNT": {
    en: "DISCOUNT",
    ar: "الخصم",
    nl: "KORTING",
    fr: "REMISE",
    pt: "DESCONTO"
  },
  "SHIPPING FEE": {
    en: "SHIPPING FEE",
    ar: "رسوم الشحن",
    nl: "VERZENDKOSTEN",
    fr: "FRAIS DE PORTS",
    pt: "TAXA DE ENVIO"
  },
  "TOTAL BALANCE": {
    en: "TOTAL BALANCE",
    ar: "الرصيد الكلي",
    nl: "TOTAAL BALANS",
    fr: "SOLDE TOTAL DOÛ",
    pt: "SALDO TOTAL"
  },
  "CHOOSE DESTINATION LAND": {
    en: "CHOOSE DESTINATION LAND",
    ar: "اختر بلد الوجهة",
    nl: "KIES LAND VAN BESTEMMING",
    fr: "CHOISIR LE PAYS DE DESTINATION",
    pt: "ESCOLHER PAÍS DE DESTINO"
  },
  "CALCULATING DISPATCH FARES": {
    en: "CALCULATING DISPATCH FARES",
    ar: "جاري حساب تكاليف الإرسال",
    nl: "BEREKENEN VAN DE VERZENDKOSTEN",
    fr: "CALCUL DES TARIFS D'EXPÉDITION",
    pt: "CALCULANDO TARIFAS DE ENVIO"
  },
  "REVIEWS DIRECTORY": {
    en: "REVIEWS DIRECTORY",
    ar: "دليل التقييمات",
    nl: "BEOORDELINGEN DIRECTORY",
    fr: "ANNUAIRE DES AVIS",
    pt: "DIRETÓRIO DE DEPOIMENTOS"
  },
  "REVIEWS": {
    en: "REVIEWS",
    ar: "التقييمات",
    nl: "BEOORDELINGEN",
    fr: "AVIS",
    pt: "DEPOIMENTOS"
  },
  "RELATED EXPERIMENTAL PROJECTS": {
    en: "RELATED EXPERIMENTAL PROJECTS",
    ar: "مشاريع تجريبية ذات صلة",
    nl: "GERELATEERDE EXPERIMENTELE PROJECTEN",
    fr: "PROJETS EXPÉRIMENTAUX SIMILAIRES",
    pt: "PROJETOS EXPERIMENTAIS RELACIONADOS"
  },
  "CURATED EXPERIMENTAL CORES": {
    en: "CURATED EXPERIMENTAL CORES",
    ar: "مجموعات تجريبية منسقة",
    nl: "GECUREERDE GEGEVENS",
    fr: "NOYAUX EXPÉRIMENTAUX SÉLECTIONNÉS",
    pt: "NÚCLEOS EXPERIMENTAIS CURADOS"
  },
  "ADMIN DEEDS CONSOLE": {
    en: "ADMIN DEEDS CONSOLE",
    ar: "لوحة تحكم إدارية",
    nl: "BEHEERDERS CONSOLE",
    fr: "CONSOLE D'ADMINISTRATION DES ACTES",
    pt: "CONSOLE DE ATOS ADMINISTRATIVOS"
  },
  // Lang Name Mapping in selector
  "Language Selection": {
    en: "Language Selection",
    ar: "تحديد اللغة",
    nl: "Taal Selectie",
    fr: "Sélection de la Langue",
    pt: "Seleção de Idioma"
  }
};

// Map representing product translation data
export const PRODUCT_TRANSLATIONS: Record<string, Record<Language, {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  specifications: string[];
}>> = {
  "grounded-flux": {
    en: {
      title: "D01-T02 \"The Grounded Flux\"",
      category: "Pants",
      shortDescription: "Ergonomic drape shell with curved dune paneling loomed in structured premium scuba fiber.",
      description: "Archive 009 is a study in ergonomic form — engineered as a shell for the body in motion. Curved charcoal panels mirror the shifting ridges of the desert dunes. Constructed from a structured premium scuba fiber, it delivers a heavy architectural drape that stays grounded while the world shifts around you. Limited to 20 units worldwide — once the final anchor of the First Restraint is claimed, this chapter closes permanently.",
      specifications: [
        "Premium Scuba Fiber Construction",
        "Earth-Brown with Charcoal Dune Paneling",
        "High-Density White 'S' Crest",
        "Double-Stitched Reinforced Sand Seams",
        "Ergonomic Panel Contours for Articulated Movement"
      ]
    },
    ar: {
      title: "D01-T02 \"التدفق الراسخ\"",
      category: "سراويل",
      shortDescription: "هيكل ثني مريح مع حواف كثبان منحنية منسوجة من ألياف الغوص الفاخرة الهيكلية.",
      description: "أرشيف 009 عبارة عن دراسة في الشكل المريح - تم تصميمه كدرع للجسم أثناء الحركة. تحاكي الألواح الفحمية المنحنية التلال المتغيرة للكثبان الرملية الصحراوية. مصنوع من ألياف الغوص الفاخرة الهيكلية، ويوفر ثنيًا معماريًا ثقيلًا يظل راسخًا وثابتًا بينما يتغير العالم من حولك. يقتصر على 20 وحدة في جميع أنحاء العالم - بمجرد المطالبة بالمرساة النهائية للقيود الأولية، يغلق هذا الفصل بشكل دائم.",
      specifications: [
        "بناء ألياف الغوص الفاخرة",
        "بني أرضي مع لوحة كثبان فحمية",
        "شعار 'S' أبيض عالي الكثافة",
        "درزات رملية معززة بخياطة مزدوجة",
        "خطوط مريحة للحركة المفصلية"
      ]
    },
    nl: {
      title: "D01-T02 \"The Grounded Flux\"",
      category: "Broeken",
      shortDescription: "Ergonomisch gedrapeerd schild met gebogen duinpanelen geweven in gestructureerde premium scuba-vezel.",
      description: "Archief 009 is een studie in ergonomische vorm — ontworpen als een schild voor het lichaam in beweging. Gebogen antracietkleurige panelen spiegelen de verschuivende toppen van de woestijnduinen. Gemaakt van een gestructureerde premium scuba-vezel, levert het een zware architecturale drape van hoge kwaliteit die geaard blijft terwijl de wereld om je heen verschuift. Beperkt tot 20 stuks wereldwijd.",
      specifications: [
        "Premium Scuba Vezel Constructie",
        "Aardebruin met Antraciet Duinpanelen",
        "Hoge-Dichtheid Wit 'S' Embleem",
        "Dubbelgestikte Versterkte Zandnaden",
        "Ergonomische Paneelcontouren voor Beweeglijkheid"
      ]
    },
    fr: {
      title: "D01-T02 \"The Grounded Flux\"",
      category: "Pantalons",
      shortDescription: "Coque drapée ergonomique avec panneaux de dune incurvés tissés en fibre de plongée structurée premium.",
      description: "Archive 009 est une étude de forme ergonomique — conçue comme une armure pour le corps en mouvement. Des panneaux de charbon de bois incurvés reflètent les crêtes changeantes des dunes du désert. Construit à partir d'une fibre de plongée structurée de première qualité, il offre un drapé architectural lourd qui reste ancré pendant que le monde bouge autour de vous. Limité à 20 unités dans le monde entier.",
      specifications: [
        "Construction premium en fibre scuba",
        "Terre-Brun avec panneaux de dune de charbon de bois",
        "Crête 'S' Blanche Haute-Densité",
        "Coutures de sable renforcées à double point",
        "Contours de panneaux ergonomiques pour un mouvement articulé"
      ]
    },
    pt: {
      title: "D01-T02 \"The Grounded Flux\"",
      category: "Calças",
      shortDescription: "Invólucro drapeado ergonômico com painéis de dunas curvos tecidos em fibra de neoprene estruturada premium.",
      description: "O Arquivo 009 é um estudo de forma ergonômica — projetado como uma armadura para o corpo em movimento. Painéis de carvão curvos refletem as cristas mutáveis das dunas do deserto. Construído a partir de uma fibra de alta qualidade estruturada, proporciona um caimento arquitetônico pesado que permanece firme enquanto o mundo muda ao seu redor. Limitado a 20 unidades em todo o mundo.",
      specifications: [
        "Construção Premium de Fibra Scuba",
        "Marrom-Terra com Painéis Carvão de Dunas",
        "Crista 'S' de Alta Densidade Branca",
        "Costuras de Areia Reforçadas com Ponto Duplo",
        "Contornos Ergonômicos para Movimentação Articulada"
      ]
    }
  },
  "midnight-vigil": {
    en: {
      title: "D01-H01 \"Midnight Vigil Hoodie\"",
      category: "Hoodies",
      shortDescription: "450 GSM ultra-heavy organic cotton armor with custom vector high-definition spinal printing.",
      description: "Formulated as a shelter for nocturnal contemplation. The Midnight Vigil is cut from an excessively dense 450 GSM organic loopback cotton fleece. Features a deep geometric double-lined hood that anchors the posture, and custom spinal graphic elements depicting the celestial grid of the desert nights. Built by hand for lifelong preservation.",
      specifications: [
        "450 GSM Organic Cotton Loopback",
        "Nocturnal Slate-Black Dye Treatment",
        "High-definition Spine Vector Prints",
        "Twin-seam Drop Shoulders",
        "Double-Loomed Ribbing Panels"
      ]
    },
    ar: {
      title: "D01-H01 \"سترة Midnight Vigil\"",
      category: "سترات غطاء الرأس",
      shortDescription: "درع من القطن العضوي فائق الثقل ٤٥٠ جرامًا مع طباعة عمود فقري متجهة فائقة الدقة بتصميم مخصص.",
      description: "تمت صياغتها كمأوى للتأمل الليلي. سترة Midnight Vigil مقصوصة من صوف قطني عضوي عالي الكثافة ٤٥٠ جرامًا. تتميز بغطاء رأس هندسي عميق مزدوج البطانة يثبت الوقفة، وعناصر جرافيك عمود فقري مخصصة تصور الشبكة السماوية لليالي الصحراوية. صنعت يدوياً لحفظ دائم.",
      specifications: [
        "نسيج قطن عضوي بوزن ٤٥٠ جرامًا",
        "معالجة صبغة سوداء رمادية ليلية",
        "طبعات متجهة للعمود الفقري فائقة الدقة",
        "أكتاف منسدلة مزدوجة التماس",
        "ألواح تضليع مزدوجة النسيج"
      ]
    },
    nl: {
      title: "D01-H01 \"Midnight Vigil Hoodie\"",
      category: "Hoodies",
      shortDescription: "450 GSM ultra-zware organische katoenen bescherming met aangepaste vector spinale print.",
      description: "Geformuleerd als een schuilplaats voor nachtelijke contemplatie. De Midnight Vigil is gesneden uit een uitermate dicht 450 GSM biologisch loopback-katoenfleece. Voorzien van een diepe geometrische, dubbelgevoerde capuchon die het postuur verstevigt en op maat gemaakte grafische elementen.",
      specifications: [
        "450 GSM Biologisch Loopback-Katoen",
        "Nachtelijke Leisteen-Zwarte Behandeling",
        "Hoge-resolutie Wervelkolom Vector Prints",
        "Dubbelgestikte Verlaagde Schouders",
        "Dubbelgeweven Geribbelde Panelen"
      ]
    },
    fr: {
      title: "D01-H01 \"Midnight Vigil Hoodie\"",
      category: "Sweats à Capuche",
      shortDescription: "Armure en coton biologique ultra-lourd de 450 g/m² avec impression dorsale vectorielle personnalisée.",
      description: "Conçu pour abriter la contemplation nocturne. Le Midnight Vigil est coupé dans un molleton de coton biologique bouclé de 450 g/m² excessivement dense. Dispose d'une capuche géométrique profonde doublée qui ancre la posture.",
      specifications: [
        "Coton biologique bouclé de 450 g/m²",
        "Traitement de teinture noir-ardoise nocturne",
        "Impressions vectorielles dorsales haute définition",
        "Épaules tombantes à double couture",
        "Panneaux côtelés à double tissage"
      ]
    },
    pt: {
      title: "D01-H01 \"Midnight Vigil Hoodie\"",
      category: "Moletons",
      shortDescription: "Armadura de algodão orgânico ultra-pesado de 450 GSM com estampagem espinhal em alta definição.",
      description: "Formulado como um abrigo para a contemplação noturna. O Midnight Vigil é cortado de um fleece de algodão orgânico extremamente denso de 450 GSM. Apresenta um capuz geométrico profundo de forro duplo que ancora a postura.",
      specifications: [
        "Algodão Orgânico Loopback de 450 GSM",
        "Tratamento de Tingimento Preto-Ardósia",
        "Estampas Vectoriais Espinhais de Alta Definição",
        "Ombros Caídos com Costura Dupla",
        "Painéis Canelados de Tear Duplo"
      ]
    }
  },
  "silent-sovereign": {
    en: {
      title: "D01-S03 \"The Silent Sovereign Sleeve\"",
      category: "Longsleeves",
      shortDescription: "Structured mock-neck technical sleeve with heavy drop contours and sand-faded highlights.",
      description: "A silent statement of dominance under harsh dunes. Loomed from a structured 320 GSM heavy Egyptian cotton compound, this mock-neck piece curves precisely around the shoulders, mimicking wind erosion on stone obelisks. Finished in a subtle sand-fade treatment for worn premium aesthetic.",
      specifications: [
        "320 GSM High-Grip Egyptian Cotton",
        "Sand-fade Acid Aesthetic Polish",
        "High-density Ribbed Mock-neck Collar",
        "Forensic Sand-Resistant Blind Hems",
        "Reinforced Inner Neck Boundary Banding"
      ]
    },
    ar: {
      title: "D01-S03 \"كم الصامت السيادي\"",
      category: "قمصان أكمام طويلة",
      shortDescription: "كم تقني بياقة وهمية مميزة مع خطوط منسدلة ثقيلة وتأثيرات باهتة بلون الرمال.",
      description: "إعلان صامت عن السيادة تحت الكثبان القاسية. منسوج من مزيج قطن مصري ثقيل عالي البنية بوزن ٣٢٠ جرامًا، تنحني هذه القطعة ذات الياقة الوهمية بدقة حول الكتفين، محاكية تآكل الرياح على المسلات الحجرية. متوفرة بلمسة باهتة لتأثير عتيق فاخر.",
      specifications: [
        "قطن مصري عالي التماسك ٣٢٠ جرامًا",
        "تأثير تلميع باهت بالرمل عتيق",
        "ياقة تضليع عالية الكثافة",
        "حواف خفية مقاومة للرمل",
        "رباط حماية داخلي معزز للياقة"
      ]
    },
    nl: {
      title: "D01-S03 \"The Silent Sovereign Sleeve\"",
      category: "Longsleeves",
      shortDescription: "Gestructureerde mock-neck technische sleeve met zware vallende contouren en zandvervaagde details.",
      description: "Een stille verklaring van dominantie onder barre duinen. Deze mock-neck is geweven van een gestructureerde zware Egyptische katoenmix van 320 GSM en buigt precies om de schouders, als spiegeling van de wind.",
      specifications: [
        "320 GSM Egyptisch Katoen",
        "Zand-fade Polish Esthetiek",
        "Hoge-dichtheid Geribbelde Mock-neck Kraag",
        "Zandbestendige Blinde Zomen",
        "Versterkte Kraagband"
      ]
    },
    fr: {
      title: "D01-S03 \"The Silent Sovereign Sleeve\"",
      category: "Manches Longues",
      shortDescription: "Manche technique à col montant structuré avec contours tombants lourds et détails décolorés par le sable.",
      description: "Une déclaration silencieuse sous les dunes rigoureuses. Tissé à partir d'un composé de coton égyptien lourd et structuré de 320 g/m², ce col montant épouse précisément les épaules.",
      specifications: [
        "Coton égyptien haute tenue de 320 g/m²",
        "Effet décoloré au sable pour l'esthétique",
        "Col montant côtelé haute densité",
        "Ourlets invisibles résistants au sable",
        "Bande de propreté renforcée à l'intérieur du col"
      ]
    },
    pt: {
      title: "D01-S03 \"The Silent Sovereign Sleeve\"",
      category: "Mangas Longas",
      shortDescription: "Manga técnica de gola alta estruturada com caimento pesado e detalhes desbotados de areia.",
      description: "Uma declaração silenciosa de domínio sob as dunas severas. Tecida de um composto de algodão egípcio pesado e estruturado de 320 GSM, esta gola alta molda-se perfeitamente aos ombros.",
      specifications: [
        "Algodão Egípcio de Alta Aderência de 320 GSM",
        "Polimento Estético Ácido Desbotado por Areia",
        "Colarinho Alto Canelado de Alta Densidade",
        "Bainhas Invisíveis Resistentes a Areia",
        "Faixa de Reforço Interna no Pescoço"
      ]
    }
  },
  "ascendant": {
    en: {
      title: "D01-T01 \"The Ascendant Crewneck\"",
      category: "Sweatshirts",
      shortDescription: "Boxy-fit luxury sweatshirt structured in dual-spun loopback fleece with aerospace stitching binds.",
      description: "Engineered to mimic wind-carved desert structures. The Ascendant is constructed from 450 GSM dual-spun loopback fleece. Oversized shoulders and tight waist ribbings form a sovereign structural chest draping. Finished with high-density gold accents along the sleeves.",
      specifications: [
        "450 GSM Dual-Spun Premium Fleece",
        "Deep Obsidian Black Tint",
        "Raw Ergonomic Joint Seams",
        "Aerospace Structural Stitching",
        "Heavyweight Drop-Shoulder Contour"
      ]
    },
    ar: {
      title: "D01-T01 \"سترة الصاعد المستديرة\"",
      category: "قمصان ثقيلة",
      shortDescription: "سترة فاخرة بقصة واسعة مصممة من صوف مزدوج الغزل مع درزات خياطة مستوحاة من هندسة الطيران.",
      description: "صممت لمحاكاة الهياكل الصحراوية المنحوتة بفعل الرياح. سترة الصاعد مصنوعة من صوف غزل مزدوج بوزن ٤٥٠ جرامًا. تشكل الأكتاف الواسعة الواسعة وتضليع الخصر المشدود ثنيًا هيكليًا مهيبًا على الصدر. مزينة بلمسات ذهبية عالية الكثافة على الأكمام.",
      specifications: [
        "صوف فاخر مغزول مزدوج ٤٥٠ جرامًا",
        "لون أسود سبج عميق",
        "طبقات مفاصل مريحة خام",
        "خياطة هيكلية هندسية متطورة",
        "خط أكتاف منسدل ثقيل الوزن"
      ]
    },
    nl: {
      title: "D01-T01 \"The Ascendant Crewneck\"",
      category: "Sweatshirts",
      shortDescription: "Boxy-fit luxe sweatshirt gestructureerd in dubbelgesponnen loopback fleece met technische naden.",
      description: "Ontworpen om door wind gevormde woestijnstructuren na te bootsen. De Ascendant is gemaakt van 450 GSM dubbelgesponnen loopback-fleece. Oversized schouders en strakke geribbelde zomen vormen een prachtig silhouet.",
      specifications: [
        "450 GSM Premium Duurzaam Fleece",
        "Diep Obsidiaan Zwarte Tint",
        "Ruwe Ergonomische Naadovergangen",
        "Technische Structuurnaden",
        "Zwaar Verlaagd Schouderprofiel"
      ]
    },
    fr: {
      title: "D01-T01 \"The Ascendant Crewneck\"",
      category: "Sweatshirts",
      shortDescription: "Sweatshirt de luxe coupe boxy structuré en molleton bouclé double fil avec coutures aérospatiales.",
      description: "Conçu pour imiter les structures du désert sculptées par le vent. L'Ascendant est construit à partir de molleton bouclé double fil de 450 g/m². Les épaules surdimensionnées et les côtes serrées forment un drapé robuste.",
      specifications: [
        "Molleton Premium Double Fil de 450 g/m²",
        "Teinte Noir Obsidienne Profond",
        "Coutures de Jonctions Ergonomiques Crues",
        "Coutures de Structure Aérospatiale",
        "Contour Épaule Tombante Poids Lourd"
      ]
    },
    pt: {
      title: "D01-T01 \"The Ascendant Crewneck\"",
      category: "Moletons sem Capuz",
      shortDescription: "Moletom de luxo de modelagem boxy estruturado em fleece loopback de fiação dupla com costuras aeroespaciais.",
      description: "Projetado para mimetizar as estruturas desérticas esculpidas pelo vento. O Ascendente é construído a partir de fleece loopback de fiação dupla de 450 GSM.ombros oversized e canelamento justo na cintura criam um caimento soberbo.",
      specifications: [
        "Fleece Premium de Fiação Dupla de 450 GSM",
        "Tom de Preto Obsidiana Profundo",
        "Costuras Cruas de Junção Ergonômica",
        "Pontos Estruturais Aeroespaciais",
        "Contorno Pesado de Ombros Caídos"
      ]
    }
  },
  "ancestral-guard": {
    en: {
      title: "D02-G02 \"The Ancestral Guard\"",
      category: "Pants",
      shortDescription: "Heavy tactical cargo shell with multi-compartmental geometric layout loomed in ripstop sand fiber.",
      description: "A secure fortress built for physical exploration. The Ancestral Guard features a structured multi-compartmentalized blueprint, allowing collectors to store critical gear. Constructed using ultra-dense 380 GSM ripstop cotton weave reinforced with water-resistant desert treatments.",
      specifications: [
        "380 GSM Tactical Ripstop Weave",
        "Multi-compartment Geometric Flaps",
        "Reinforced Heavy Articulated Knees",
        "Hidden Metal Zipper Anchors",
        "Waist Tuning Metal Buckle System"
      ]
    },
    ar: {
      title: "D02-G02 \"درع الأجداد\"",
      category: "سراويل",
      shortDescription: "بنطال كارغو تكتيكي ثقيل بتصميم هندسي متعدد المقصورات منسوج من ألياف مقاومة للتمزق والرمال.",
      description: "حصن آمن مصمم للاستكشاف البدني. يتميز درع الأجداد بمخطط منظم متعدد المقصورات يتيح للمقتنين تخزين معداتهم الأساسية. مصنوع من نسيج قطن مقاوم للتمزق فائق الكثافة ٣٨٠ جرامًا معزز بمعالجات صحراوية مقاومة للماء.",
      specifications: [
        "نسيج ريبستوب تكتيكي ٣٨٠ جرامًا",
        "أغطية جيوب هندسية متعددة المقصورات",
        "ركب معززة ومفصلية شديدة التحمل",
        "سحابات معدنية خفية للتأمين",
        "نظام إبزيم معدني لضبط الخصر"
      ]
    },
    nl: {
      title: "D02-G02 \"The Ancestral Guard\"",
      category: "Broeken",
      shortDescription: "Zware tactische cargo-shell met geometrische indeling, geweven van ripstop-zandvezel.",
      description: "Een beveiligd fort ontworpen voor fysieke ontdekkingsreizen. De Ancestral Guard beschikt over een gestructureerde multi-compartimenten blauwdruk om cruciale spullen in op te bergen. Gemaakt van zwaar ripstop katoen.",
      specifications: [
        "380 GSM Tactisch Ripstop Weefsel",
        "Multi-compartimenten Klepzakken",
        "Versterkte en Voorgevormde Knieën",
        "Verborgen Metalen Ritssluitingen",
        "Metalen Gespen om de Taille te Verstellen"
      ]
    },
    fr: {
      title: "D02-G02 \"The Ancestral Guard\"",
      category: "Pantalons",
      shortDescription: "Pantalon cargo tactique lourd avec disposition géométrique multi-compartiments tissé en fibre indéchirable.",
      description: "Une forteresse sûre construite pour l'exploration physique. L'Ancestral Guard dispose d'une architecture multi-compartimentée structurée. Construit à partir d'un tissage de coton indéchirable ultra-dense.",
      specifications: [
        "Tissage Ripstop Tactique de 380 g/m²",
        "Rabat Géométriques Multi-compartiments",
        "Genoux Articulés Renforcés",
        "Fermetures à Glissière Métalliques Cachées",
        "Système de Boucle Métallique d'Ajustement"
      ]
    },
    pt: {
      title: "D02-G02 \"The Ancestral Guard\"",
      category: "Calças",
      shortDescription: "Calça cargo tática pesada com layout geométrico multi-compartimentado em fibra ripstop de areia.",
      description: "Uma fortaleza segura construída para a exploração física. O Ancestral Guard possui um design estruturado multi-compartimentado. Construído com tecido ripstop de alta densidade de 380 GSM com acabamento tático.",
      specifications: [
        "Tecido de Ripstop Tático de 380 GSM",
        "Lapelas Geométricas Multi-compartimentos",
        "Joelhos Articulados e Reforçados",
        "Zíperes Metálicos Ocultos de Ancoragem",
        "Fivelas Metálicas Ajustáveis na Cintura"
      ]
    }
  },
  "eternal-ascent": {
    en: {
      title: "D02-H02 \"The Eternal Ascent Hoodie\"",
      category: "Hoodies",
      shortDescription: "Premium loopback desert-earth armor carrying the hand-stamped 'Born in the Desert' manifesto.",
      description: "Constructed to endure, to soften with time, and to become a relic of your own journey under direct heat. Carries our 'Born in the Desert' spinal layout across the back — a quiet declaration left behind in every area you exit.",
      specifications: [
        "350 GSM Loopback Egyptian Cotton Fleece",
        "Aesthetic Dune-Beige Natural Earth Dye",
        "Spine Spinal Manifesto High-Density Print",
        "Dual-lined Structured Drop Hood Face",
        "Hand-finishing Forensic Stitch Binds"
      ]
    },
    ar: {
      title: "D02-H02 \"سترة الصعود الأبدي\"",
      category: "سترات غطاء الرأس",
      shortDescription: "درع فاخر بلون تراب الصحراء يحمل مانيفستو 'ولد في الصحراء' المطبوع يدوياً وبخياطة دقيقة.",
      description: "صممت لتدوم، ولتصبح ناعمة الملمس مع مرور الوقت، ولتتحول إلى أثر يرافق رحلتك الخاصة تحت حرارة الشمس القاسية. تحمل مانيفستو العمود الفقري 'ولد في الصحراء' عبر الظهر - إعلان صامت تتركه خلفك في كل مكان تغادره.",
      specifications: [
        "صوف قطن مصري بوزن ٣٥٠ جرامًا",
        "صبغة طبيعية بلون بيج رمال الكثبان",
        "طبعة بيان العمود الفقري عالية الكثافة",
        "غطاء رأس منسدل منظم ثنائي البطانة",
        "رباط خياطة يدوي فائق الدقة"
      ]
    },
    nl: {
      title: "D02-H02 \"The Eternal Ascent Hoodie\"",
      category: "Hoodies",
      shortDescription: "Premium loopback zandkleurige hoodie met het handgestempelde 'Born in the Desert' manifest.",
      description: "Gebouwd om te weerstaan, zacht te worden met de tijd, en een relikwie van je eigen reis te worden onder de felle zon. Voorzien van ons 'Born in the Desert' spinaal manifest op de rug.",
      specifications: [
        "350 GSM Loopback Egyptisch Katoenfleece",
        "Esthetische Duin-Beige Natuurlijke Aardeverf",
        "Wervelkolom Manifest Hoge-Dichtheid Print",
        "Dubbelgevoerde Gestructureerde Capuchon",
        "Handgeweven Unieke Randafwerkingen"
      ]
    },
    fr: {
      title: "D02-H02 \"The Eternal Ascent Hoodie\"",
      category: "Sweats à Capuche",
      shortDescription: "Armure de terre du désert en molleton bouclé premium portant le manifeste 'Born in the Desert' estampé à la main.",
      description: "Construit pour endurer, s'adoucir avec le temps et devenir une relique de votre propre voyage. Porte notre manifeste spinal 'Born in the Desert' au dos — une déclaration discrète laissée à chaque sortie.",
      specifications: [
        "Molleton de Coton Égyptien de 350 g/m²",
        "Teinture Terre Naturelle Beige-Dune Esthétique",
        "Impression Haute Densité du Manifeste Spinal",
        "Capuche Tombante Structurée Doublée",
        "Finition de Points Faits à la Main"
      ]
    },
    pt: {
      title: "D02-H02 \"The Eternal Ascent Hoodie\"",
      category: "Moletons",
      shortDescription: "Armadura premium em cor de terra desértica com o manifesto 'Born in the Desert' carimbado à mão.",
      description: "Construído para durar, amaciar com o tempo e se tornar uma relíquia de sua própria jornada sob o calor. Carrega nosso manifesto espinhal 'Born in the Desert' nas costas — uma declaração silenciosa deixada por onde passar.",
      specifications: [
        "Fleece de Algodão Egípcio de 350 GSM",
        "Tingimento de Areia Bege Natural de Dunas",
        "Estampa de Alta Densidade de Manifesto Espinhal",
        "Capuz de Caimento Estruturado e Forrado",
        "Acabamentos de Costura Feitos à Mão"
      ]
    }
  },
  "deserts-resilience": {
    en: {
      title: "D03-K01 \"Desert's Resilience Tee\"",
      category: "T-Shirts",
      shortDescription: "300 GSM heavy combed structured classic cotton tee with high-definition graphic prints representing structural desert shields.",
      description: "Built as basic armor for extreme climates. The Desert's Resilience Tee delivers a rigid square drop shape in custom-treated premium combed cotton. Embellished with forensic technical shield guidelines on the chest and back.",
      specifications: [
        "300 GSM Combed Premium Cotton",
        "Over-dyed Desert Ochre Hue",
        "Ribbed Crewneck Collar Guard",
        "Blind Stitch Seamless Side Panels",
        "Structural Back Graphic Blueprint Layout"
      ]
    },
    ar: {
      title: "D03-K01 \"تيشرت مرونة الصحراء\"",
      category: "قمصان صيفية",
      shortDescription: "تيشرت قطني بنية كلاسيكية ثقيلة ٣٠٠ جرامًا مع طبعات جرافيك عالية الدقة تمثل دروع الصحراء الهيكلية.",
      description: "صنع كدرع أساسي للمناخات القاسية. يوفر تيشرت مرونة الصحراء قصة مربعة صلبة من القطن المسرح الفاخر المعالج خصوصاً. مزين بمخططات درع فني تقني على الصدر والظهر.",
      specifications: [
        "قطن فاخر ممشط بوزن ٣٠٠ جرامًا",
        "مصبوغ بلون المغرة الصحراوية",
        "حماية ياقة مستديرة مضلعة وبأكمام قصيرة",
        "لوحات جانبية سلسة بخياطة خفية",
        "مخطط جرافيكي هيكلي على الظهر"
      ]
    },
    nl: {
      title: "D03-K01 \"Desert's Resilience Tee\"",
      category: "T-Shirts",
      shortDescription: "300 GSM zwaar gekamd gestructureerd klassiek katoenen t-shirt met zware grafische elementen.",
      description: "Gebouwd als basisbescherming voor extreme klimaten. Het Desert's Resilience Tee levert een strakke, vierkante pasvorm van speciaal behandeld premium gekamd katoen.",
      specifications: [
        "300 GSM Gekamd Premium Katoen",
        "Over-dyed Diep Okerkleurige Tint",
        "Geribbelde Crewneck Kraagbeschermer",
        "Naadloze Zijpanelen met Blinde Steek",
        "Structureel Grafisch Blauwdruk Ontwerp op de Rug"
      ]
    },
    fr: {
      title: "D03-K01 \"Desert's Resilience Tee\"",
      category: "T-Shirts",
      shortDescription: "T-shirt classique en coton peigné lourd de 300 g/m² avec graphisme haute définition.",
      description: "Conçu comme une armure de base pour les climats extrêmes. Le t-shirt Desert's Resilience offre une coupe carrée rigide en coton peigné de première qualité.",
      specifications: [
        "Coton Peigné Premium de 300 g/m²",
        "Teinture Ocre du Désert Sur-teinte",
        "Col Rond Côtelé Protecteur",
        "Panneaux Latéraux Sans Couture Point Invisible",
        "Disposition Graphique de Structure au Dos"
      ]
    },
    pt: {
      title: "D03-K01 \"Desert's Resilience Tee\"",
      category: "Camisas",
      shortDescription: "Camiseta clássica de algodão estruturado penteado pesado de 300 GSM com estampas gráficas de alta definição.",
      description: "Construída como armadura básica para climas extremos. A Camiseta Desert's Resilience entrega um molde quadrado rígido em algodão penteado de alta qualidade.",
      specifications: [
        "Algodão Penteado Premium de 300 GSM",
        "Tom Ocre de Dunas Sobretinto",
        "Protetor de Colarinho Careca Canelado",
        "Painéis Laterais Sem Costura com Ponto Invisível",
        "Layout de Desenho Técnico nas Costas"
      ]
    }
  },
  "linear-boundary": {
    en: {
      title: "D03-P02 \"The Linear Boundary Pants\"",
      category: "Pants",
      shortDescription: "Structured straight-fit heavy technical pants featuring wind-erosion lines and custom metallic adjustments.",
      description: "Delineating the boundary lines where the sand meets clay. The Linear Boundary is a sturdyStraight-fit technical trouser. Cut from heavyweight cotton canvas fiber with deep side slit utility pockets and metallic leg-opening tuning buckles. Crafted to represent pure desert layout structures.",
      specifications: [
        "360 GSM Heavy Duty Cotton Canvas",
        "Straight Architectural Fit",
        "Custom Side-slit Utility Openings",
        "Adjustable Metallic Ankle Hem Tuning",
        "Double-layer Kneepads for Wear Resistance"
      ]
    },
    ar: {
      title: "D03-P02 \"سراويل الحدود الخطية\"",
      category: "سراويل",
      shortDescription: "سراويل تقنية ثقيلة ومستقيمة تتميز بخطوط تآكل الرياح وتعديلات معدنية مخصصة.",
      description: "ترسم الحدود حيث يلتقي الرمل بالطين. سراويل الحدود الخطية هي سراويل تقنية متينة ومستقيمة. مقصوصة من خيوط قماش قطني ثقيل الوزن مع جيوب جانبية عميقة وأبازيم معدنية قابلة لتعديل فتحة الساق. صممت لتجسيد تخطيط الصحراء الخالص.",
      specifications: [
        "قماش كانفاس قطني متين ٣٦٠ جرامًا",
        "قصة هيكلية مستقيمة ومخططة",
        "فتحات جانبية تكتيكية عميقة للجيوب",
        "تعديل معدني لفتحات الكاحل",
        "وسادات ركبة مزدوجة الطبقة لمقاومة التآكل"
      ]
    },
    nl: {
      title: "D03-P02 \"The Linear Boundary Pants\"",
      category: "Broeken",
      shortDescription: "Gestructureerde straight-fit zware technische broek met wind-erosie lijnen en metalen gespen.",
      description: "Het markeren van de grenslijnen waar zand klei ontmoet. De Linear Boundary is een stevige straight-fit technische broek. Gesneden uit zwaar canvas met handige diepe zijzakken.",
      specifications: [
        "360 GSM Zwaar Katoenen Canvas",
        "Rechte Architecturale Pasvorm",
        "Handige Zijdelingse Utility Openingen",
        "Verstelbare Metalen Enkelzomen",
        "Dubbellaagse Kniepanelen voor Slijtvastheid"
      ]
    },
    fr: {
      title: "D03-P02 \"The Linear Boundary Pants\"",
      category: "Pantalons",
      shortDescription: "Pantalon technique lourd structuré coupe droite avec lignes d'érosion éolienne et boucles métalliques.",
      description: "Tracer les lignes de démarcation là où le sable rencontre l'argile. Le Linear Boundary est un pantalon technique robuste à coupe droite. Taillé dans une toile de coton lourde.",
      specifications: [
        "Toile de Coton Robuste de 360 g/m²",
        "Coupe Droite Architecturale",
        "Ouvertures Pratiques Latérales Profondes",
        "Ajustement de l'Ourlet de la Cheville",
        "Renforts aux Genoux Double Épaisseur"
      ]
    },
    pt: {
      title: "D03-P02 \"The Linear Boundary Pants\"",
      category: "Calças",
      shortDescription: "Calça técnica reta estruturada e pesada com linhas inspiradas em erosões de vento.",
      description: "Delineando as linhas de fronteira onde a areis se encontra com a argila. O Linear Boundary é uma calça de corte reto robusto. Cortada em lona de algodão pesado.",
      specifications: [
        "Lona de Algodão Resistente de 360 GSM",
        "Molde Arquitetônico Reto",
        "Aberturas Laterais Utilitárias Profundas",
        "Ajuste de Bainha de Tornozelo Metálico",
        "Joelhos com Camada Dupla para Longa Durabilidade"
      ]
    }
  }
};

// Map representing collections translations
export const COLLECTION_TRANSLATIONS: Record<string, Record<Language, {
  title: string;
  subtitle: string;
  description: string;
}>> = {
  "archival-tops": {
    en: {
      title: "ARCHIVAL TOPS / FLEECE",
      subtitle: "HEAVYWEIGHT COUTURE",
      description: "Heavyweight 450 GSM luxury cotton fleece, meticulously structured with forensic hand-embroidery and rare desert pigments."
    },
    ar: {
      title: "قمصان الأرشيف / صوف",
      subtitle: "خياطة ثقيلة الوزن",
      description: "صوف قطني فاخر ثقيل الوزن ٤٥٠ جرامًا، منظم بدقة مع تطريز يدوي دقيق وأصباغ صحراوية نادرة."
    },
    nl: {
      title: "ARCHIEF BOVENSTUKKEN",
      subtitle: "ZWARE LUXE KATOENO",
      description: "Zwaargewicht 450 GSM luxe katoenfleece, zorgvuldig gestructureerd met forensisch handborduursel en zeldzame woestijnpigmenten."
    },
    fr: {
      title: "HAUTS D'ARCHIVES / MOLLETON",
      subtitle: "COUTURE POIDS LOURD",
      description: "Molleton de coton de luxe lourd de 450 g/m², méticuleusement structuré avec broderie main méticuleuse et pigments rares du désert."
    },
    pt: {
      title: "MANGAS DE ARQUIVOS / FLEECE",
      subtitle: "ALTA-COSTURA PESADA",
      description: "Fleece de algodão de luxo de 450 GSM, meticulosamente estruturado com bordados à mão meticulosos e pigmentos de dunas."
    }
  },
  "ergonomic-movement": {
    en: {
      title: "ERGONOMIC SILHOUETTES",
      subtitle: "DUNE METRICS",
      description: "Modular panelings and aerospace curves mimicking wind-carved desert geometry in rigid-drape scuba fibers."
    },
    ar: {
      title: "الظلال المريحة للحركة",
      subtitle: "مقاييس الكثبان",
      description: "ألواح معيارية ومنحنيات فضائية تحاكي الهندسة الصحراوية المنحوتة بفعل الرياح في ألياف ثني صلبة."
    },
    nl: {
      title: "ERGONOMISCHE SILHOUETTEN",
      subtitle: "DUIN METRIEKEN",
      description: "Modulaire panelen en aerodynamische rondingen die de door wind gevormde geometrie van de woestijn nabootsen in scuba-vezels."
    },
    fr: {
      title: "SILHOUETTES ERGONOMIQUES",
      subtitle: "MÉTRIQUES DE DUNE",
      description: "Panneaux modulaires et courbes aérospatiales imitant la géométrie du désert sculptée par le vent dans des fibres scuba rigides."
    },
    pt: {
      title: "SILHUETAS ERGONÔMICAS",
      subtitle: "MÉTRICA DE DUNAS",
      description: "Painéis modulares e curvas aeroespaciais que imitam a geometria do deserto sob vento em fibras de moldura rígida."
    }
  },
  "manifesto-sand": {
    en: {
      title: "SAND ESSENTIALS",
      subtitle: "DESCENDING ASCENT",
      description: "Premium cotton fleece featuring High-Definition Pigment Fusion and literal desert-born manifestos."
    },
    ar: {
      title: "أساسيات الرمال",
      subtitle: "الهبوط الصاعد",
      description: "صوف قطني فاخر يتميز بدمج أصباغ عالية الدقة وبيانات جغرافية صحراوية حرفية."
    },
    nl: {
      title: "ZAND ESSENTIALS",
      subtitle: "AFDALENDE STIJGING",
      description: "Premium katoenfleece met High-Definition Pigment Fusion en letterlijke in de woestijn geboren manifesten."
    },
    fr: {
      title: "LES ESSENTIELS DE SABLE",
      subtitle: "ASCENSION DESCENDANTE",
      description: "Molleton de coton de qualité supérieure doté d'une fusion de pigments haute définition et de manifestes nés dans le désert."
    },
    pt: {
      title: "ESSENCIAIS DE AREIA",
      subtitle: "ELEVAÇÃO DESCENDENTE",
      description: "Fleece de algodão de alta qualidade com fusão de pigmentos de alta definição e manifestos literais nascidos no deserto."
    }
  }
};
