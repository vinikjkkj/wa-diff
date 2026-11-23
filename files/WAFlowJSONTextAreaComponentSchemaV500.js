__d(
  "WAFlowJSONTextAreaComponentSchemaV500",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a = (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(e),
        i = n.getBoolBindingSchemaType(e),
        l = {
          type: (r = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            r.WA_FLOW_JSON_SCHEMA_TYPE,
            r.WA_FLOW_JSON_SCHEMA_NAME,
            r.WA_FLOW_JSON_SCHEMA_LABEL,
          ],
          additionalProperties: !1,
          properties: {
            type: { const: r.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA },
            "max-length": n.getIntegerBindingSchemaType(e),
            enabled: i,
            required: i,
            label: a,
            "helper-text": a,
            visible: i,
            name: n.getTextFieldSchema(e),
          },
        };
      return (
        t ||
          (l = babelHelpers.extends({}, l, {
            properties: babelHelpers.extends({}, l.properties, {
              "init-value": a,
              "error-message": a,
            }),
          })),
        l
      );
    }
    l.getTextAreaComponentSchemaV500 = e;
  },
  98,
);
