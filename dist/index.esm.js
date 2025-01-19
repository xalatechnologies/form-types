const getFormType = (id) => {
    return formTypes.find(type => type.id === id);
};
const formTypes = [
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

export { formTypes, getFormType };
//# sourceMappingURL=index.esm.js.map
