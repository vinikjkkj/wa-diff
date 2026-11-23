__d(
  "WAFlowJSONTextComponentSchema",
  [
    "$InternalEnum",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      BOLD: "bold",
      ITALIC: "italic",
      BOLD_ITALIC: "bold_italic",
      NORMAL: "normal",
    });
    function s(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TEXT,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: "" },
          text: o("WAFlowJSONSchemaUtils").getTextFieldSchema(e),
          visible: o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(e),
        },
      };
    }
    function u(e) {
      var t = s(e),
        n = babelHelpers.extends({}, t, {
          properties: babelHelpers.extends({}, t.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .TEXT_BODY,
            },
            "font-weight": o(
              "WAFlowJSONSchemaUtils",
            ).getEnumDynamicBindingSchemaType(e, p()),
            strikethrough: o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(
              e,
            ),
          }),
        });
      return +e < 501
        ? n
        : babelHelpers.extends({}, n, {
            properties: babelHelpers.extends({}, n.properties, {
              text: o("WAFlowJSONSchemaUtils").getMarkdownTextFieldSchema(e),
              markdown: {
                type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
              },
            }),
          });
    }
    function c(e) {
      var t = u(e),
        n = babelHelpers.extends({}, t, {
          properties: babelHelpers.extends({}, t.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .TEXT_CAPTION,
            },
          }),
        });
      return +e >= 501
        ? babelHelpers.extends({}, n, {
            properties: babelHelpers.extends({}, n.properties, {
              text: o("WAFlowJSONSchemaUtils").getMarkdownTextFieldSchema(e),
              markdown: {
                type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_BOOLEAN,
              },
            }),
          })
        : r("unsafeCast")(n);
    }
    function d(e) {
      var t = s(e);
      return babelHelpers.extends({}, t, {
        properties: babelHelpers.extends({}, t.properties, {
          type: {
            const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
              .TEXT_HEADING,
          },
        }),
      });
    }
    function m(e) {
      var t = s(e);
      return babelHelpers.extends({}, t, {
        properties: babelHelpers.extends({}, t.properties, {
          type: {
            const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
              .TEXT_SUBHEADING,
          },
        }),
      });
    }
    function p() {
      return Array.from(e.members()).map(function (e) {
        return e;
      });
    }
    ((l.getTextBodyComponentSchemaByVersion = u),
      (l.getTextCaptionComponentSchemaByVersion = c),
      (l.getTextHeadingComponentSchemaV500 = d),
      (l.getTextSubheadingComponentSchemaV500 = m));
  },
  98,
);
