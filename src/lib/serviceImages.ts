// Register each service's hero image here as you add the file to
// src/assets/services/. Uncomment the import and add the map entry —
// the ServiceDetail page automatically uses it instead of the placeholder.

import recruitmentHero from "../assets/services/recruitment-services.jpg";
import outsourcingHero from "../assets/services/outsourcing.jpg";
import humanCapitalHero from "../assets/services/human-capital-development.jpg";
import hrConsultancyHero from "../assets/services/hr-management-consultancy.jpg";
import talentManagementHero from "../assets/services/talent-management.jpg";
import performanceManagementHero from "../assets/services/performance-management.jpg";

export const serviceHeroImages: Record<string, string> = {
  "recruitment-services": recruitmentHero,
  outsourcing: outsourcingHero,
  "human-capital-development": humanCapitalHero,
  "hr-management-consultancy": hrConsultancyHero,
  "talent-management": talentManagementHero,
  "performance-management": performanceManagementHero,
};
