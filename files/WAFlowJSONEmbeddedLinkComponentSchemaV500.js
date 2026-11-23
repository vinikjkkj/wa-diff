__d(
  "WAFlowJSONEmbeddedLinkComponentSchemaV500",
  ["WAFlowJSONActionSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = {
          type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            t.WA_FLOW_JSON_SCHEMA_TYPE,
            t.WA_FLOW_JSON_SCHEMA_TEXT,
            t.WA_FLOW_JSON_ON_CLICK_ACTION,
          ],
          additionalProperties: !1,
          properties: {
            type: { const: t.WA_FLOW_JSON_COMPONENT_TYPE.EMBEDDED_LINK },
            text: o("WAFlowJSONSchemaUtils").getTextFieldSchema(e),
            visible: o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(e),
            "on-click-action": o(
              "WAFlowJSONActionSchema",
            ).getOnClickActionSchema(
              e,
              t.WA_FLOW_JSON_COMPONENT_TYPE.EMBEDDED_LINK,
            ),
          },
        };
      return n;
    }
    l.getEmbeddedLinkComponentSchemaV500 = e;
  },
  98,
);
