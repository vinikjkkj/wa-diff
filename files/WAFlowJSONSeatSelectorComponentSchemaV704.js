__d(
  "WAFlowJSONSeatSelectorComponentSchemaV704",
  ["WAFlowJSONActionSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "available",
      "unavailable",
      "aisle",
      "blank",
      "bathroom",
      "exit",
      "galley",
    ];
    function s(t) {
      return o("WAFlowJSONSchemaUtils").getArrayObjectBindingSchemaType(
        t,
        ["id", "preset"],
        {
          id: { type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING },
          preset: { enum: e },
        },
      );
    }
    function u(e) {
      var t;
      return {
        oneOf: [
          {
            type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_ARRAY,
            items: {
              type: t.WA_FLOW_JSON_SCHEMA_ARRAY,
              items: {
                type: t.WA_FLOW_JSON_SCHEMA_OBJECT,
                required: ["category"],
                additionalProperties: !1,
                properties: {
                  category: { type: t.WA_FLOW_JSON_SCHEMA_STRING },
                  id: { type: t.WA_FLOW_JSON_SCHEMA_STRING },
                  label: { type: t.WA_FLOW_JSON_SCHEMA_STRING },
                },
              },
            },
          },
          o("WAFlowJSONSchemaUtils").getDynamicDataPatternSchema(e),
        ],
      };
    }
    function c(e, t) {
      var n,
        r,
        a = {
          type: {
            const: (n = o("WAFlowJSONConstants")).WA_FLOW_JSON_COMPONENT_TYPE
              .SEAT_SELECTOR,
          },
          categories: s(e),
          "seat-map": u(e),
          description: (r = o(
            "WAFlowJSONSchemaUtils",
          )).getStringBindingSchemaType(e),
          enabled: r.getBoolBindingSchemaType(e),
          label: r.getStringBindingSchemaType(e),
          name: r.getComponentNameSchemaType(e),
          "max-selected-items": r.getNumberBindingSchemaType(e, { minimum: 1 }),
          "min-selected-items": r.getNumberBindingSchemaType(e, { minimum: 0 }),
          required: r.getBoolBindingSchemaType(e),
          visible: r.getBoolBindingSchemaType(e),
          "on-select-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema([
            n.WAFlowsActionType.DATA_EXCHANGE,
            n.WAFlowsActionType.UPDATE_DATA,
          ]),
          "on-unselect-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema([
            n.WAFlowsActionType.DATA_EXCHANGE,
            n.WAFlowsActionType.UPDATE_DATA,
          ]),
        },
        i = {
          type: n.WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            n.WA_FLOW_JSON_SCHEMA_TYPE,
            n.WA_FLOW_JSON_SCHEMA_NAME,
            n.WA_FLOW_JSON_SCHEMA_CATEGORIES,
            n.WA_FLOW_JSON_SCHEMA_SEAT_MAP,
            n.WA_FLOW_JSON_SCHEMA_MAX_SELECTED_ITEMS,
          ],
          additionalProperties: !1,
          properties: a,
        };
      return (
        t ||
          (i = babelHelpers.extends({}, i, {
            properties: babelHelpers.extends({}, a, {
              "init-value": o(
                "WAFlowJSONSchemaUtils",
              ).getArrayPrimitiveStringBindingSchemaType(
                e,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_STRING,
              ),
              "error-message": o(
                "WAFlowJSONSchemaUtils",
              ).getStringBindingSchemaType(e),
            }),
          })),
        i
      );
    }
    l.getSeatSelectorComponentSchemaV704 = c;
  },
  98,
);
