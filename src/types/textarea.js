export default  ngModule => {
  ngModule.config(addTextareaType);

  function addTextareaType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'textarea',
      template: '<textarea class="" ng-model="model[options.key]" rows="{{to.rows || 10}}"></textarea>',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'},
          cols: {attribute: 'cols'}
        }
      },
      apiCheck: check => ({
        templateOptions: {
          rows: check.number.optional,
          cols: check.number.optional
        }
      })
    });
  }
};
