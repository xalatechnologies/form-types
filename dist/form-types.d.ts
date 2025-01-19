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
export declare const getFormType: (id: string) => FormType | undefined;
export declare const formTypes: FormType[];
//# sourceMappingURL=form-types.d.ts.map