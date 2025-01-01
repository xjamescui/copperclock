export interface ClockData {
  lastFedDatetime: Date;
  lastPeedDatetime: Date;
  lastPoopedDatetime: Date;
  lastExercisedDatetime: Date;
}

export type PetActivity = 'pee' | 'poop' | 'food' | 'exercise';
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
