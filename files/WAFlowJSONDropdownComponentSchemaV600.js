__d(
  "WAFlowJSONDropdownComponentSchemaV600",
  ["WAFlowJSONChildrenSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAFlowJSONChildrenSchema").getOptionListComponentSchemaV600(e),
        r = babelHelpers.extends({}, n, {
          additionalProperties: !1,
          properties: babelHelpers.extends({}, n.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .DROPDOWN,
            },
            label: o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e, {
              minLength: 1,
            }),
          }),
        });
      if (!t) {
        var a = o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e);
        r = babelHelpers.extends({}, r, {
          properties: babelHelpers.extends({}, r.properties, {
            "init-value": a,
            "error-message": a,
          }),
        });
      }
      return r;
    }
    l.getDropdownComponentSchemaV600 = e;
  },
  98,
);
