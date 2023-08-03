interface Durations {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  medium: number;
  long: number;
  longer: number;
  longest: number;
}

const durations: Durations = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  medium: 400,
  long: 500,
  longer: 600,
  longest: 700,
};

interface Easings {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

const easings: Easings = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

type CreateTransitionOptions = {
  property?: string | string[];
  duration?: keyof Durations;
  easing?: keyof Easings;
};

export interface Transitions {
  createTransition: {
    (options?: CreateTransitionOptions): string;
    (options?: CreateTransitionOptions[]): string;
  };
  durations: Durations;
  easings: Easings;
}

export const transitions: Transitions = {
  createTransition: (options: CreateTransitionOptions | CreateTransitionOptions[] = {}) => {
    const handleSingleOption = (opts: CreateTransitionOptions): string => {
      const { property = 'all', duration = 'standard', easing = 'easeInOut' } = opts;
      const selectedDuration = durations[duration] || durations.standard;
      const selectedEasing = easings[easing] || easings.easeInOut;
      return `${property} ${selectedDuration}ms ${selectedEasing}`;
    };

    if (Array.isArray(options)) {
      return options.map(handleSingleOption).join(', ');
    } else {
      return handleSingleOption(options);
    }
  },
  durations,
  easings,
};

// Example usage:
const singleOption: CreateTransitionOptions = {
  property: 'opacity',
  duration: 'shorter',
  easing: 'easeInOut',
};

const multipleOptions: CreateTransitionOptions[] = [
  {
    property: 'opacity',
    duration: 'short',
    easing: 'easeInOut',
  },
  {
    property: 'transform',
    duration: 'medium',
    easing: 'easeOut',
  },
];

const singleTransition = transitions.createTransition(singleOption);
console.log(singleTransition);

const multipleTransitions = transitions.createTransition(multipleOptions);
console.log(multipleTransitions);
