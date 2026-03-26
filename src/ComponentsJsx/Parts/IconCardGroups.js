import { IconCardData } from './IconCardData.js';

export const IconCardGroups = {
  group1: IconCardData.slice(0, 3), // הערכת מצב (medical, environment, forces)
  group2: IconCardData.slice(3, 7), // בניית תוכנית (general, equipment, tasks, safety)
  group3: IconCardData.slice(7, 9), // ביצוע (ongoing-eval, special-eval)
  group4: IconCardData.slice(9, 12), // העברת מקל (handover, wrap-up, readiness)
};

