__d(
  "WAFlowJSONDropdownComponentSchemaV500",
  ["WAFlowJSONChildrenSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = o("WAFlowJSONChildrenSchema").getOptionListComponentSchemaV500(e),
        a = babelHelpers.extends({}, r, {
          required: [].concat(r.required),
          additionalProperties: !1,
          properties: babelHelpers.extends({}, r.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .DROPDOWN,
            },
            label: (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(
              e,
              { minLength: 1 },
            ),
            name: n.getTextFieldSchema(e),
            "data-source": n.getArrayObjectBindingSchemaType(
              e,
              n.getRequiredDataSourceAttributes(),
              o(
                "WAFlowJSONChildrenSchema",
              ).getComponentDataSourcePropertiesV500(e),
            ),
          }),
        });
      if (!t) {
        var i = o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e);
        a = babelHelpers.extends({}, a, {
          properties: babelHelpers.extends({}, a.properties, {
            "init-value": i,
            "error-message": i,
          }),
        });
      }
      return a;
    }
    l.getDropdownComponentSchemaV500 = e;
  },
  98,
);
