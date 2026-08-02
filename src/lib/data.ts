import type { LucideIcon } from "lucide-react";
import {
  Users,
  Search,
  ClipboardCheck,
  Target,
  Brain,
  Fingerprint,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export type ServiceSummary = {
  slug: string;
  name: string;
  blurb: string;
  tag: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "recruitment-services",
    name: "Recruitment Services",
    blurb:
      "We source, screen, and place candidates who fit your team's skill needs and culture not just the job description.",
    tag: "01",
  },
  {
    slug: "outsourcing",
    name: "Outsourcing",
    blurb:
      "Payroll, staffing, and back-office HR functions handled end to end, so your team can focus on the work only they can do.",
    tag: "02",
  },
  {
    slug: "human-capital-development",
    name: "Human Capital Development",
    blurb:
      "Structured training and development programs that build capability inside your organization, not just for a quarter.",
    tag: "03",
  },
  {
    slug: "hr-management-consultancy",
    name: "HR Management Consultancy",
    blurb:
      "Policy, structure, and compliance guidance for organizations building or rebuilding their HR function from the ground up.",
    tag: "04",
  },
  {
    slug: "talent-management",
    name: "Talent Management",
    blurb:
      "Frameworks for identifying, developing, and retaining the people who matter most to your organization's future.",
    tag: "05",
  },
  {
    slug: "performance-management",
    name: "Performance Management",
    blurb:
      "Review frameworks and performance systems that connect individual output to organizational goals.",
    tag: "06",
  },
];

// Single source of truth for the nav dropdown — derived from services
export const servicesMenu = services.map(({ slug, name }) => ({ slug, name }));

export type ServiceDetailContent = {
  intro: string;
  processTitle: string;
  checklist: string[];
  outro?: string;
  closingLine?: string;
  ctaLabel?: string;
  subServices?: { label: string; description: string; icon: LucideIcon }[];
};

// Only fully populated for the service currently being built out.
// Add entries here as each service page gets real content.
export const serviceDetails: Record<string, ServiceDetailContent> = {
  "recruitment-services": {
    intro:
      "The wrong hire can cost your business time, money, and productivity. High turnover, skill mismatches, and cultural misalignment can drain resources and stall business growth. At Stretch-IT Concepts, we mitigate these risks by ensuring that every hire is a perfect fit through a strategic, data-driven approach that aligns with your business goals.",
    processTitle: "Our Recruitment Process",
    checklist: [
      "Job Analysis & Role Definition — We help you define the ideal candidate profile.",
      "Talent Sourcing & Headhunting — Access to a vast pool of top-tier professionals.",
      "Screening & Assessment — In-depth evaluation to match skills and culture.",
      "Interview Coordination — Seamless scheduling and interview support.",
      "Onboarding Support — A smooth transition for new hires into your team.",
    ],
    closingLine:
      "Don't gamble with your hiring process — partner with us to build your dream team.",
    subServices: [
      {
        label: "Recruitment & Selection",
        description: "End-to-end hiring support, from job posting to candidate placement.",
        icon: Users,
      },
      {
        label: "Executive Search & Headhunting",
        description: "Targeted outreach to senior-level talent who aren't actively job hunting.",
        icon: Search,
      },
      {
        label: "Onboarding Design & Development",
        description: "Structured onboarding journeys that get new hires productive faster.",
        icon: ClipboardCheck,
      },
      {
        label: "Competency Assessment",
        description: "Objective evaluation of role-specific skills and capabilities.",
        icon: Target,
      },
      {
        label: "Aptitude Testing",
        description: "Cognitive and problem-solving assessments to gauge potential.",
        icon: Brain,
      },
      {
        label: "Personality Testing",
        description: "Behavioral insight into how a candidate will fit your team's culture.",
        icon: Fingerprint,
      },
      {
        label: "Employment Outsourcing",
        description: "Flexible staffing arrangements without the administrative overhead.",
        icon: Briefcase,
      },
      {
        label: "Background Checks",
        description: "Thorough verification to protect your organization before you hire.",
        icon: ShieldCheck,
      },
    ],
  },
  outsourcing: {
    intro:
      "At Stretch-IT Concepts, we take the hassle out of recruitment and workforce management by offering comprehensive staff outsourcing solutions tailored to your business needs. Whether you require temporary, contract, or permanent staff, we ensure you get the right talent without the burden of direct employment responsibilities.",
    processTitle: "Why Choose Our Outsourcing Services?",
    checklist: [
      "Access to Top Talent — We source, screen, onboard and manage qualified professionals across various industries, ensuring a seamless workforce.",
      "Staffing Solutions — Temporary, contract, or full-time placements to suit your needs.",
      "Cost & Time Efficiency — Reduce operational costs while maximizing productivity.",
      "Flexibility & Scalability — Expand or adjust your workforce based on business needs and demands.",
      "HR & Compliance Support — We handle payroll, benefits administration, and labor law compliance, allowing you to focus on growth.",
      "Seamless Operations — Our outsourced staff integrate seamlessly into your team, ensuring productivity from day one.",
      "Enhanced Business Focus — Your company and employees stay focused on what you do best while we handle HR complexities.",
    ],
    closingLine:
      "Let Stretch-IT Concepts handle your staffing needs and be your HR partner while you focus on what truly matters to growing your business.",
    ctaLabel: "Talk with an expert",
  },
  "human-capital-development": {
    intro:
      "A workforce without proper training and development can lead to low productivity, disengagement, and high turnover. Employees who lack growth opportunities often seek them elsewhere, leaving your company at a competitive disadvantage.",
    processTitle: "Our Training Programs Cover:",
    checklist: [
      "Leadership & Management Development",
      "Employee Skills Enhancement & Upskilling",
      "Workplace Ethics & Compliance Training",
      "Soft Skills & Emotional Intelligence",
    ],
    outro:
      "We design customized training solutions that align with your business objectives, ensuring your workforce is equipped to perform at their best.",
    closingLine:
      "Don't let a skills gap hold your business back — invest in your team's growth with our expert training programs.",
    ctaLabel: "Talk to a training specialist",
  },
  "hr-management-consultancy": {
    intro:
      "Poor HR management can lead to legal liabilities, employee dissatisfaction, and operational inefficiencies. Without expert guidance, businesses struggle with compliance issues, ineffective policies, and misaligned workforce planning.",
    processTitle: "Our Consultancy Services Include:",
    checklist: [
      "HR Strategy & Policy Development — Tailored HR frameworks that align with your business goals.",
      "Workforce Planning & Organizational Structuring — Building efficient team structures.",
      "Compliance & Labor Law Advisory — Ensuring legal and regulatory adherence.",
      "HR Audits & Process Improvement — Identifying gaps and optimizing HR functions.",
    ],
    outro:
      "With our expertise, your HR department will become a strategic asset that drives business success.",
    closingLine:
      "Avoid costly HR mistakes and build a stronger, more compliant workforce — let's talk.",
    ctaLabel: "Book a consultation with us today",
  },
  "talent-management": {
    intro:
      "Losing top talent can set your business back significantly, leading to productivity losses, costly replacements, and weakened team morale. Without a strong talent management strategy, businesses struggle with high turnover and disengaged employees.",
    processTitle: "How We Help You Manage Talent Effectively:",
    checklist: [
      "Succession Planning — Preparing future leaders within your organization.",
      "Employee Engagement Programs — Strategies to boost motivation and retention.",
      "Career Development & Growth Plans — Structured pathways for professional advancement.",
      "Performance-Based Reward Systems — Incentives that drive excellence.",
    ],
    outro:
      "We help you build a workplace culture that attracts and retains top talent, ensuring long-term success.",
    ctaLabel: "Let's build your winning team",
  },
  "performance-management": {
    intro:
      "Unclear expectations, lack of accountability, and poor performance tracking can result in low productivity and missed business goals. A weak performance management system allows inefficiencies to go unnoticed, costing your business in both revenue and reputation.",
    processTitle: "Our Performance Solutions Include:",
    checklist: [
      "KPI & Goal Setting — Establishing clear objectives for every employee.",
      "360-Degree Performance Reviews — Fair and comprehensive performance assessments.",
      "Employee Development Plans — Personalized coaching and skill-building programs.",
      "Performance Improvement Strategies — Identifying gaps and implementing solutions.",
    ],
    outro:
      "With a strong performance management system, you motivate employees, improve efficiency, and drive business success.",
    closingLine:
      "Stop struggling with underperformance — implement a results-driven performance strategy with our expert solutions.",
    ctaLabel: "Talk with an expert",
  },
};

export const stats = [
  { value: "14+", label: "Years in practice" },
  { value: "120+", label: "Client organizations" },
  { value: "3,000+", label: "Candidates placed" },
  { value: "98%", label: "Client retention" },
];

export const clients = [
  "ElegantView Windows",
  "Gayle Force Wind",
  "Tim Technology",
  "Touhy Avenue",
  "Gratixa",
  "Computer Integrity",
  "Safari Group",
  "Salem Unique",
];

export const faqs = [
  {
    q: "What industries do you work with?",
    a: "We work across sectors technology, manufacturing, retail, and professional services tailoring our HR approach to each industry's regulatory and talent landscape.",
  },
  {
    q: "How long does a typical recruitment engagement take?",
    a: "Most placements complete within 3–6 weeks from brief to offer, depending on role seniority and how tightly the requirements are scoped.",
  },
  {
    q: "Do you support businesses outside Lagos?",
    a: "Yes. While we're headquartered in Lagos, we support clients across Nigeria and internationally through remote-first engagement models.",
  },
  {
    q: "Can you manage payroll for a small team?",
    a: "Our outsourcing service scales from single-digit teams to large workforces there's no minimum headcount to get started.",
  },
];

export const contactInfo = {
  phone: "234-9137729736",
  whatsapp: "234-8087731768",
  callUs: "234-8033353581",
  email: "info@stretchitconcepts.com",
  address: "16, Aladelola Ikosi, Lagos, Nigeria",
};
