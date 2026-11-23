__d(
  "WAFlowJSONCategoryListLayoutSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "categories",
      s = "${external_data.meta_catalog.categories}";
    function u() {
      return {
        const: String(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST),
      };
    }
    function c(e) {
      return {
        oneOf: [
          { const: s },
          o("WAFlowJSONSchemaUtils").getDynamicDataPatternSchema(e),
        ],
      };
    }
    function d(t) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE, e],
        additionalProperties: !1,
        properties: {
          type: u(),
          categories: c(t),
          "on-last-level-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(t),
          "on-view-cart-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(t),
        },
      };
    }
    l.getCategoryListLayoutSchema = d;
  },
  98,
);
