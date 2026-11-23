__d(
  "WAFlowJSONImageComponentSchemaV500",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "src",
      s = "cover",
      u = "contain";
    function c(t) {
      var n,
        r = (n = o("WAFlowJSONSchemaUtils")).getNumberBindingSchemaType(t);
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE, e],
        additionalProperties: !1,
        properties: {
          type: {
            const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IMAGE,
          },
          width: r,
          height: r,
          "aspect-ratio": r,
          src: n.getBase64StringBindingSchemaType(t),
          "scale-type": n.getStringBindingSchemaType(t, { enum: d() }),
          visible: n.getBoolBindingSchemaType(t),
          "alt-text": n.getStringBindingSchemaType(t),
        },
      };
    }
    function d() {
      return [s, u];
    }
    l.getImageComponentSchemaV500 = c;
  },
  98,
);
