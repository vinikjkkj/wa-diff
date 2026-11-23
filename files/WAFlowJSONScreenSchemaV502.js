__d(
  "WAFlowJSONScreenSchemaV502",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONScreenSchemaV500",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        type: "object",
        properties: {
          meta_catalog: {
            type: "object",
            properties: {
              product_list: {
                type: "object",
                properties: {
                  payload: {
                    type: "object",
                    properties: { category: { type: "string" } },
                    additionalProperties: !1,
                  },
                },
                additionalProperties: !1,
              },
              categories: { type: "object", additionalProperties: !1 },
              product_detail: {
                type: "object",
                properties: {
                  payload: {
                    type: "object",
                    properties: { product_id: { type: "string" } },
                    additionalProperties: !1,
                  },
                },
                additionalProperties: !1,
              },
              products: {
                type: "object",
                properties: {
                  payload: {
                    type: "object",
                    properties: {
                      product_ids: {
                        oneOf: [
                          { type: "array", items: { type: "string" } },
                          {
                            type: "string",
                            pattern: o("WAFlowJSONConstants")
                              .WA_FLOWS_PRODUCT_ID_PATTERN,
                          },
                        ],
                      },
                    },
                    additionalProperties: !1,
                  },
                },
                additionalProperties: !1,
              },
              product_catalog: { type: "object", additionalProperties: !1 },
            },
            additionalProperties: !1,
          },
        },
        additionalProperties: !1,
      };
    }
    function s(t) {
      return babelHelpers.extends(
        {},
        o("WAFlowJSONScreenSchemaV500").getScreenSchemaV500(t),
        {
          properties: babelHelpers.extends(
            {},
            o("WAFlowJSONScreenSchemaV500").getScreenSchemaV500(t).properties,
            {
              external_data: e(),
              sensitive: o(
                "WAFlowJSONSchemaUtils",
              ).getArrayStringBindingSchemaType(),
            },
          ),
        },
      );
    }
    l.getScreenSchemaV502 = s;
  },
  98,
);
