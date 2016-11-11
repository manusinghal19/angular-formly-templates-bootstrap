export default ngModule => {
  ngModule.config(addInputType);

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input class="" ng-model="model[options.key]">',
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });
  }
};
