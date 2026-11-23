__d(
  "WAFlowJSONItemDetailLayoutSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "item",
      s = "${external_data.meta_catalog.product_detail}";
    function u() {
      return {
        const: String(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_DETAIL),
      };
    }
    function c() {
      return { oneOf: [{ const: s }] };
    }
    function d(t) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE, e],
        additionalProperties: !1,
        properties: {
          type: u(),
          "show-media": o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(t),
          "show-discount-strikethrough": o(
            "WAFlowJSONSchemaUtils",
          ).getBoolBindingSchemaType(t),
          "show-description": o(
            "WAFlowJSONSchemaUtils",
          ).getBoolBindingSchemaType(t),
          "on-view-cart-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(t),
          "on-add-to-cart-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(t),
          "on-remove-from-cart-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(t),
          item: c(),
        },
      };
    }
    l.getItemDetailLayoutSchema = d;
  },
  98,
);
