__d(
  "WAFlowJSONTextAreaComponentSchemaV700",
  ["WAFlowJSONConstants", "WAFlowJSONTextAreaComponentSchemaV600"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONTextAreaComponentSchemaV600",
      ).getTextAreaComponentSchemaV600(e, t);
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
    l.getTextAreaComponentSchemaV700 = e;
  },
  98,
);
