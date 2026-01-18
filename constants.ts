
import { ServiceItem, Testimonial, Achievement } from './types';

export const SCHOOL_SERVICES: ServiceItem[] = [
  {
    title: "Curriculum Development & Innovation",
    description: "Transform your curriculum to meet 21st-century learning needs.",
    points: [
      "Design bespoke curricula aligned with your school's mission",
      "Develop comprehensive EAL/ESL programs with clear entry/exit criteria",
      "Create innovative writing curricula incorporating AI and technology",
      "Integrate UN Sustainable Development Goals into subject areas",
      "Design culturally responsive, inclusive learning resources"
    ]
  },
  {
    title: "Professional Development & Teacher Training",
    description: "Elevate your teaching team's capabilities.",
    points: [
      "IB PYP Workshop certification and training",
      "Using generative AI and technology in the classroom",
      "ESL in the Mainstream (LILAC) accredited courses",
      "Technology integration workshops (AI, ChatGPT, digital tools)",
      "Differentiated instruction and assessment strategies"
    ]
  },
  {
    title: "School Evaluation & Accreditation Support",
    description: "Navigate accreditation with confidence.",
    points: [
      "CIS / NEASC / MSA accreditation preparation and guidance",
      "School evaluation and improvement planning",
      "Policy development and implementation",
      "Data analysis and evidence-based decision making",
      "Strategic planning facilitation"
    ]
  },
  {
    title: "Language Programme Development",
    description: "Build world-class language learning programmes.",
    points: [
      "EAL/ESL programme design and implementation",
      "Home language preservation strategies",
      "Multilingual education framework development",
      "Language assessment continua creation",
      "Whole school language curricular framework"
    ]
  }
];

// Added PARENT_SERVICES to fix the import error in ParentsSection.tsx
export const PARENT_SERVICES: ServiceItem[] = [
  {
    title: "Bespoke School Search & Selection",
    description: "Navigate the complex landscape of international schools in Muscat with confidence.",
    points: [
      "In-depth analysis of curricula (IB, British, American, etc.)",
      "Review of school performance and inspection records",
      "Checking seat availability and entry requirements",
      "Coordinating school visits and tours"
    ]
  },
  {
    title: "Admissions Support & Guidance",
    description: "Maximizing your child's chances of securing a place in their preferred institution.",
    points: [
      "Assistance with application documentation",
      "Student interview coaching and preparation",
      "Portfolio review and enhancement",
      "Direct liaison with school admissions offices"
    ]
  },
  {
    title: "Relocation & Educational Transition",
    description: "Ensuring your family's move to Oman is seamless and stress-free.",
    points: [
      "Guidance on local educational regulations",
      "Support with language proficiency assessments",
      "Orientation to the Muscat community",
      "Post-enrollment follow-up and advocacy"
    ]
  },
  {
    title: "Curriculum Choice Advisory",
    description: "Finding the educational pathway that best suits your child's future goals.",
    points: [
      "Comparison of IGCSE, A-Levels, IBDP, and AP",
      "Advice on subject selection for university pathways",
      "Understanding language support (EAL) provision",
      "Long-term educational planning"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Thank you for your detailed and elaborate report. We really appreciate you getting to know our school and what we stand for.",
    author: "School Founder",
    location: "Antwerp, Belgium"
  },
  {
    quote: "It was a huge pleasure to meet you and learn from your calm, thoughtful, and very positive way of approaching life.",
    author: "School Director",
    location: "Riga, Latvia"
  },
  {
    quote: "Highly experienced peer evaluator with a deep understanding of international schools and global citizenship.",
    author: "Director of School Evaluation",
    location: "CIS - Netherlands"
  },
  {
    quote: "The teachers all really enjoyed your workshop and found it informative and energising.",
    author: "Head of Academic Affairs",
    location: "Madinah, KSA"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Global Perspective",
    description: "Experience across many different countries, well-versed in various curricula including the British National Curriculum, American Curriculum, French Curriculum, International Baccalaureate, and International Primary Curriculum.",
    icon: "fa-earth-americas"
  },
  {
    title: "Academic Excellence",
    description: "MA in Educational Leadership (Nottingham) and MA in Teaching English to Young Learners (York).",
    icon: "fa-graduation-cap"
  },
  {
    title: "Recognised Leadership",
    description: "Awarded Outstanding Leadership in Education Award (2024).",
    icon: "fa-award"
  },
  {
    title: "Multilingual Professional",
    description: "Multilingual abilities that facilitate seamless communication and cultural integration in global settings.",
    icon: "fa-language"
  },
  {
    title: "AI Integration",
    description: "Pioneer in integrating AI and gamification into education frameworks. Driving digital transformation in international education settings.",
    icon: "fa-microchip"
  },
  {
    title: "Strategic School Improvement",
    description: "Proven track record partnering with school leadership teams to elevate curriculum standards and instructional quality.",
    icon: "fa-chart-line"
  }
];

export const CLIENT_SCHOOLS = [
  { name: "GEMS WORLD ACADEMY", location: "Switzerland", icon: "fa-school", logo: "/Logos/GemsWorldAcademy_Logo.png" },
  { name: "KOLEJ TUANKU JA'AFAR", location: "Malaysia", icon: "fa-building-columns", logo: "/Logos/KolejTuanku_Logo.png" },
  { name: "INTERNATIONAL SCHOOL OF LAUSANNE", location: "Switzerland", icon: "fa-landmark", logo: "/Logos/IntSchoolLausanne_Logo.png" },
  { name: "AMERICAN COOPERATIVE SCHOOL", location: "Tunisia", icon: "fa-graduation-cap", logo: "/Logos/ACST_Logo.png" },
  { name: "KING ABDULAZIZ INTERNATIONAL SCHOOL", location: "Saudi Arabia", icon: "fa-school-flag", logo: "/Logos/KingAbdulAzizSchool_Logo.png" },
  { name: "EXUPERY INTERNATIONAL SCHOOL", location: "Latvia", icon: "fa-book-open", logo: "/Logos/ExuperyIntSchool_Logo.png" },
  { name: "INTERNATIONAL SCHOOL OF TANGANYIKA", location: "Tanzania", icon: "fa-earth-africa", logo: "/Logos/IntSchoolTanganyika_Logo.png" },
  { name: "DY PATIL INTERNATIONAL SCHOOL", location: "Belgium", icon: "fa-shield-halved", logo: "/Logos/DYPatil_Logo.png" },
  { name: "RU’YA BILINGUAL SCHOOL", location: "Kuwait", icon: "fa-chalkboard-user", logo: "/Logos/RuyaBilingualSchool_Logo.png" },
  { name: "ADVANCED LEARNING SCHOOLS", location: "Saudi Arabia", icon: "fa-lightbulb", logo: "/Logos/AdvancedLearningSchools_Logo.png" },
  { name: "MOSCOW ECONOMIC SCHOOL", location: "Russia", icon: "fa-building", logo: "/Logos/MoscowEconomicSchool_Logo.png" },
  { name: "THE DWIGHT SCHOOL", location: "USA", icon: "fa-flag-usa", logo: "/Logos/Dwight.png" },
  { name: "NAZARBAYEV INTELLECTUAL SCHOOL", location: "Kazakhstan", icon: "fa-atom", logo: "/Logos/NazarbayevIntSchool_Logo.png" },
  { name: "AGA KHAN ACADEMY", location: "Kenya", icon: "fa-star", logo: "/Logos/AgaKhanAcademy_Logo.png" },
  { name: "INTERNATIONAL SCHOOL OF ABERDEEN", location: "UK", icon: "fa-crown", logo: "/Logos/IntSchoolAberdeen.png" }
];
