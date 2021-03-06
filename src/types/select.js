export default  ngModule => {
  ngModule.config(addSelectType);

  const template = `<span class="styled-select"><select class="" ng-model="model[options.key]">
    <option ng-show="to.nullOpt" value="" disabled="{{to.nullDisabled}}">{{to.nullDisplay}}</option>
    </select></span>`;

  function addSelectType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'select',
      template,
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions(options) {
        /* jshint maxlen:195 */
        let ngOptions = options.templateOptions.ngOptions || `option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options`;
        return {
          ngModelAttrs: {
            [ngOptions]: {
              value: options.templateOptions.optionsAttr || 'ng-options'
            }
          }
        };
      },
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          optionsAttr: check.string.optional,
          labelProp: check.string.optional,
          valueProp: check.string.optional,
          groupProp: check.string.optional,
          nullOpt: check.bool.optional,
          nullDisplay: check.string.optional,
          nullDisabled: check.bool.optional
        }
      })
    });
  }
};
