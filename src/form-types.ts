import type { BaseControl } from '@xalatechnologies/form-core';

export interface FormType {
  id: string;
  type: 'single' | 'multi-step' | 'wizard';
  controls: BaseControl[];
  navigation?: FormNavigation;
}

export interface FormNavigation {
  steps: FormStep[];
  allowSkipSteps?: boolean;
  showStepIndicator?: boolean;
}

export interface FormStep {
  id: string;
  title: string;
  controlIds: string[];
}

export const getFormType = (id: string): FormType | undefined => {
  return formTypes.find(type => type.id === id);
};

export const formTypes: FormType[] = [
  {
    id: 'single',
    type: 'single',
    controls: []
  },
  {
    id: 'wizard',
    type: 'wizard',
    controls: [],
    navigation: {
      steps: [],
      allowSkipSteps: false,
      showStepIndicator: true
    }
  }
];