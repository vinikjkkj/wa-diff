__d(
  "WAFlowJSONChipsSelectorSchema",
  [
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (+e >= 602) return s(e, t);
      throw o("WAFlowJSONValidationError")
        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNAVAILABLE_FLOW_JSON_VERSION.concat(
          "The component is not supported in Flow JSON: ",
        )
        .concat(String(e));
    }
    function s(e, t) {
      var n,
        r = {
          type: {
            const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
              .CHIPS_SELECTOR,
          },
          "data-source": (n = o(
            "WAFlowJSONSchemaUtils",
          )).getArrayObjectBindingSchemaType(
            e,
            n.getRequiredDataSourceAttributes(),
            o(
              "WAFlowJSONChildrenSchema",
            ).getChipsSelectorComponentDataSourceProperties(),
          ),
          description: n.getStringBindingSchemaType(e),
          enabled: n.getBoolBindingSchemaType(e),
          label: n.getStringBindingSchemaType(e),
          "max-selected-items": n.getNumberBindingSchemaType(e, { minimum: 1 }),
          "min-selected-items": n.getNumberBindingSchemaType(e, { minimum: 0 }),
          name: n.getComponentNameSchemaType(e),
          required: n.getBoolBindingSchemaType(e),
          visible: n.getBoolBindingSchemaType(e),
        },
        a = t
          ? {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
              required: [
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_LABEL,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE,
              ],
              additionalProperties: !1,
              properties: r,
            }
          : {
              type: o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_OBJECT,
              required: [
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_TYPE,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NAME,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_LABEL,
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE,
              ],
              additionalProperties: !1,
              properties: babelHelpers.extends({}, r, {
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
            };
      return a;
    }
    ((l.getChipsSelectorComponentSchemaByVersion = e),
      (l.getChipsSelectorComponentSchemaV602 = s));
  },
  98,
);
