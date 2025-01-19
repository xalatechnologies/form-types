# @xalatechnologies/form-types

Form type definitions and behaviors for the Fylleut form system.

## Installation

```bash
npm install @xalatechnologies/form-types
```

## Features

- Single-page form types
- Multi-step form types
- Form navigation configuration
- TypeScript support

## Usage

```typescript
import { FormType, getFormType } from '@xalatechnologies/form-types';

// Get a predefined form type
const wizardForm = getFormType('wizard');

// Create a custom form type
const customForm: FormType = {
  id: 'registration',
  type: 'multi-step',
  controls: [],
  navigation: {
    steps: [
      { id: 'personal', title: 'Personal Info', controlIds: ['name', 'email'] },
      { id: 'account', title: 'Account Setup', controlIds: ['username', 'password'] }
    ],
    showStepIndicator: true
  }
};
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.fylleut.com/packages/form-types).

## License

MIT
