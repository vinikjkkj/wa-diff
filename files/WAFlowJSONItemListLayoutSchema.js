__d(
  "WAFlowJSONItemListLayoutSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "${external_data.meta_catalog.product_catalog}",
      s = "${external_data.meta_catalog.product_list}",
      u = "${external_data.meta_catalog.products}";
    function c() {
      return {
        const: String(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST),
      };
    }
    function d() {
      return { oneOf: [{ const: e }, { const: s }, { const: u }] };
    }
    function m(e) {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
          o("WAFlowJSONConstants").WA_FLOW_JSON_ITEMS_PROPERTY,
        ],
        additionalProperties: !1,
        properties: {
          type: c(),
          "show-media": o("WAFlowJSONSchemaUtils").getBoolBindingSchemaType(e),
          "show-discount-strikethrough": o(
            "WAFlowJSONSchemaUtils",
          ).getBoolBindingSchemaType(e),
          "show-description": o(
            "WAFlowJSONSchemaUtils",
          ).getBoolBindingSchemaType(e),
          "on-view-cart-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(e),
          "on-item-click-action": o(
            "WAFlowJSONActionSchema",
          ).getOnClickActionSchema(e),
          items: d(),
        },
      };
    }
    l.getItemListLayoutSchema = m;
  },
  98,
);
