__d(
  "WAFlowJSONFooterComponentSchemaV500",
  ["WAFlowJSONActionSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "left-caption",
      s = "center-caption",
      u = "right-caption";
    function c(t) {
      var n, r, a;
      return {
        type: (r = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          r.WA_FLOW_JSON_SCHEMA_TYPE,
          r.WA_FLOW_JSON_SCHEMA_LABEL,
          r.WA_FLOW_JSON_ON_CLICK_ACTION,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: r.WA_FLOW_JSON_COMPONENT_TYPE.FOOTER },
          label: (a = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(
            t,
            { minLength: 1 },
          ),
          "left-caption": a.getStringBindingSchemaType(t),
          "center-caption": a.getStringBindingSchemaType(t),
          "right-caption": a.getStringBindingSchemaType(t),
          enabled: a.getBoolBindingSchemaType(t),
          "on-click-action": o("WAFlowJSONActionSchema").getOnClickActionSchema(
            t,
            r.WA_FLOW_JSON_COMPONENT_TYPE.FOOTER,
          ),
        },
        dependencies:
          ((n = { "left-caption": [u], "right-caption": [e] }),
          (n[s] = { not: { anyOf: [{ required: [e] }, { required: [u] }] } }),
          n),
      };
    }
    l.getFooterComponentSchemaV500 = c;
  },
  98,
);
