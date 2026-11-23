__d(
  "WAFlowJSONTextInputComponentSchemaV700",
  ["WAFlowJSONConstants", "WAFlowJSONTextInputComponentSchemaV602"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONTextInputComponentSchemaV602",
      ).getTextInputComponentSchemaV602(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          "label-variant": {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
            enum: o("WAFlowJSONConstants")
              .WA_FLOW_JSON_SCHEMA_LABEL_VARIANT_VALUES,
          },
        }),
      });
    }
    l.getTextInputComponentSchemaV700 = e;
  },
  98,
);
