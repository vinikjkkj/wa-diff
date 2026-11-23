__d(
  "WAFlowsRichTextSchema",
  ["WAFlowJSONConstants", "WAFlowJSONSchemaUtils", "WAFlowJSONValidationError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (+e >= 501) return s(e);
      throw o("WAFlowJSONValidationError")
        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNAVAILABLE_FLOW_JSON_VERSION.concat(
          "The component is not supported in Flow JSON: ",
        )
        .concat(String(e));
    }
    function s(e) {
      var t;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [t.WA_FLOW_JSON_SCHEMA_TYPE, "text"],
        additionalProperties: !1,
        properties: {
          type: { const: t.WA_FLOW_JSON_COMPONENT_TYPE.RICH_TEXT },
          visible: o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(e),
          text: {
            oneOf: [
              {
                type: t.WA_FLOW_JSON_SCHEMA_ARRAY,
                items: {
                  type: t.WA_FLOW_JSON_SCHEMA_STRING,
                  pattern: "^(?!s*$).+",
                },
              },
              o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
            ],
          },
        },
      };
    }
    l.getRichTextSchemaByVersion = e;
  },
  98,
);
