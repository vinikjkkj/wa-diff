__d(
  "WAFlowJSONCheckboxGroupComponentSchemaV600",
  [
    "WAFlowJSONCheckboxGroupComponentSchemaV500",
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "WAFlowJSONCheckboxGroupComponentSchemaV500",
        ).getCheckboxGroupComponentSchemaV500(e, t),
        r = o("WAFlowJSONChildrenSchema").getOptionListComponentSchemaV600(e),
        a = babelHelpers.extends({}, n, r, {
          properties: babelHelpers.extends({}, n.properties, r.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .CHECKBOX_GROUP,
            },
          }),
        });
      return a;
    }
    l.getCheckboxGroupComponentSchemaV600 = e;
  },
  98,
);
