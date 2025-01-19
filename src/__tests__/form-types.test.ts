import { describe, expect, test } from '@jest/globals';
import { getFormType, formTypes } from '../form-types';

describe('form-types', () => {
  test('getFormType returns correct form type', () => {
    const singleType = getFormType('single');
    expect(singleType).toBeDefined();
    expect(singleType?.type).toBe('single');

    const wizardType = getFormType('wizard');
    expect(wizardType).toBeDefined();
    expect(wizardType?.type).toBe('wizard');

    const nonExistent = getFormType('invalid');
    expect(nonExistent).toBeUndefined();
  });
});