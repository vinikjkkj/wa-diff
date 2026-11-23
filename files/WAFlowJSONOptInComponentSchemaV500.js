__d(
  "WAFlowJSONOptInComponentSchemaV500",
  ["WAFlowJSONActionSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r = o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(e),
        a = o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e, {
          minLength: 1,
        }),
        i = {
          type: (n = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            n.WA_FLOW_JSON_SCHEMA_TYPE,
            n.WA_FLOW_JSON_SCHEMA_LABEL,
            n.WA_FLOW_JSON_SCHEMA_NAME,
          ],
          additionalProperties: !1,
          properties: {
            type: { const: n.WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN },
            name: o("WAFlowJSONSchemaUtils").getTextFieldSchema(e),
            label: a,
            required: r,
            "on-click-action": o(
              "WAFlowJSONActionSchema",
            ).getOnClickActionSchema(e, n.WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN),
            visible: r,
          },
        };
      return (
        t ||
          (i = babelHelpers.extends({}, i, {
            properties: babelHelpers.extends({}, i.properties, {
              "init-value": r,
            }),
          })),
        i
      );
    }
    l.getOptInComponentSchemaV500 = e;
  },
  98,
);
