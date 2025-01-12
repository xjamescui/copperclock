import type { Enums, Tables } from './models/gen/database-generated.types';

export type ClockData = Tables<'time_record'>;
export type PetActivity = Enums<'pet_activity'>;

export const petActivityDisplayName = (activity: PetActivity) => {
  switch (activity) {
    case 'pee':
      return 'Pee';
    case 'poop':
      return 'Poop';
    case 'food':
      return 'Food';
    case 'exercise':
      return 'Exercise';
    default:
      return 'Unrecognized Activity';
  }
};

export const iconForPetActivity = (activity: PetActivity) => {
  switch (activity) {
    case 'pee':
      return '🌊';
    case 'poop':
      return '💩';
    case 'food':
      return '🧆';
    case 'exercise':
      return '🦮';
    default:
      return undefined;
  }
};
