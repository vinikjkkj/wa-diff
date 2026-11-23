__d(
  "WAFlowJSONCartLayoutSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "id",
      s = "price",
      u = "start_date",
      c = "end_date",
      d = "country_code_origin",
      m = "importer_name",
      p = "importer_address",
      _ = "city",
      f = "country_code",
      g = "postal_code",
      h = "region",
      y = "street1",
      C = "street2",
      b = "${external_data.meta_catalog.products}";
    function v() {
      return { const: String(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART) };
    }
    function S() {
      return { oneOf: [{ const: b }] };
    }
    function R() {
      var e;
      return {
        type: (e = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [s, u, c],
        additionalProperties: !1,
        properties: {
          price: { type: e.WA_FLOW_JSON_SCHEMA_INTEGER },
          start_date: { type: e.WA_FLOW_JSON_SCHEMA_INTEGER },
          end_date: { type: e.WA_FLOW_JSON_SCHEMA_INTEGER },
        },
      };
    }
    function L() {
      var e = o("WAFlowJSONSchemaUtils").getStringSchemaType();
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [],
        additionalProperties: !1,
        properties: {
          status: e,
          can_appeal: e,
          commerce_url: e,
          reject_reason: e,
        },
      };
    }
    function E() {
      var t,
        n = o("WAFlowJSONSchemaUtils").getStringSchemaType();
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [e],
        additionalProperties: !1,
        properties: {
          id: n,
          original_image_url: n,
          request_image_url: n,
          original_dimensions: {
            type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
            required: [],
            additionalProperties: !1,
            properties: {
              height: { type: t.WA_FLOW_JSON_SCHEMA_INTEGER },
              width: { type: t.WA_FLOW_JSON_SCHEMA_INTEGER },
            },
          },
        },
      };
    }
    function k() {
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [],
        additionalProperties: !1,
        properties: {
          image: E(),
          images: {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY,
            minItems: 0,
            items: E(),
          },
        },
      };
    }
    function I() {
      var e = o("WAFlowJSONSchemaUtils").getStringSchemaType();
      return {
        type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [d, p, m],
        additionalProperties: !1,
        properties: {
          country_code_origin: e,
          importer_name: e,
          importer_address: {
            type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
            required: [_, f, g, h, y, C],
            additionalProperties: !1,
            properties: {
              city: e,
              country_code: e,
              postal_code: e,
              region: e,
              street1: e,
              street2: e,
            },
          },
        },
      };
    }
    function T() {
      var e = o("WAFlowJSONSchemaUtils").getStringSchemaType();
      return {
        id: e,
        name: e,
        is_hidden: e,
        max_available: {
          type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_INTEGER,
        },
        product_availability: e,
        status_info: L(),
        compliance_info: I(),
        image_fetch_status: e,
        price: e,
        currency: e,
        retailer_id: e,
        description: e,
        url: e,
        media: k(),
        sale_price: R(),
        belongs_to: e,
      };
    }
    function D(e) {
      var t;
      return {
        oneOf: [
          (t = o("WAFlowJSONSchemaUtils")).getArrayObjectBindingSchemaType(
            e,
            [],
            {
              id: t.getStringBindingSchemaType(e),
              code: t.getStringBindingSchemaType(e),
              description: t.getStringBindingSchemaType(e),
            },
          ),
          t.getDynamicDataPatternSchema(e),
        ],
      };
    }
    function x(e) {
      var t, n;
      return {
        oneOf: [
          {
            type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
            properties: {
              amount: {
                type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                properties: {
                  total_amount: {
                    type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                    properties: {
                      offset: (n = o(
                        "WAFlowJSONSchemaUtils",
                      )).getNumberBindingSchemaType(e),
                      value: n.getNumberBindingSchemaType(e),
                    },
                  },
                  currency: n.getNumberBindingSchemaType(e),
                  coupon: {
                    type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                    properties: {
                      code: n.getStringBindingSchemaType(e),
                      discount: {
                        type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                        properties: {
                          value: n.getNumberBindingSchemaType(e),
                          offset: n.getNumberBindingSchemaType(e),
                          description: n.getStringBindingSchemaType(e),
                        },
                      },
                    },
                  },
                },
              },
              products: n.getArrayObjectBindingSchemaType(e, [], {
                retailer_id: n.getStringBindingSchemaType(e),
                name: n.getStringBindingSchemaType(e),
                amount: {
                  type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                  properties: {
                    offset: n.getNumberBindingSchemaType(e),
                    value: n.getNumberBindingSchemaType(e),
                  },
                },
                sale_amount: {
                  type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                  properties: {
                    offset: n.getNumberBindingSchemaType(e),
                    value: n.getNumberBindingSchemaType(e),
                  },
                },
                quantity: n.getNumberBindingSchemaType(e),
              }),
            },
          },
          n.getDynamicDataPatternSchema(e),
        ],
      };
    }
    function $(e) {
      var t,
        n,
        r = o("WAFlowJSONActionSchema").getOnClickActionSchema(
          e,
          (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_COMPONENT_TYPE.FOOTER,
        ),
        a = (n = o("WAFlowJSONSchemaUtils")).getStringSchemaType();
      return {
        type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [t.WA_FLOW_JSON_SCHEMA_TYPE, t.WA_FLOW_JSON_ITEMS_PROPERTY],
        additionalProperties: !1,
        properties: {
          type: v(),
          "cta-label": a,
          items: S(),
          "on-cta-click-action": r,
          coupons: D(e),
          "in-cart-items": n.getArrayObjectBindingSchemaType(e, [], {
            retailer_id: n.getStringBindingSchemaType(e),
            quantity: n.getStringBindingSchemaType(e),
          }),
          cart: x(e),
          "error-message": a,
        },
      };
    }
    l.getCartLayoutSchema = $;
  },
  98,
);
