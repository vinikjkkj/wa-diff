__d(
  "WAFlowJSONDatePickerSchemaV500",
  ["WAFlowJSONActionSchema", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return {
        type: (t = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
        required: [
          t.WA_FLOW_JSON_SCHEMA_TYPE,
          t.WA_FLOW_JSON_SCHEMA_LABEL,
          t.WA_FLOW_JSON_SCHEMA_NAME,
        ],
        additionalProperties: !1,
        properties: {
          type: { const: t.WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER },
          label: (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(
            e,
            { minLength: 1 },
          ),
          "helper-text": n.getStringBindingSchemaType(e),
          required: n.getBoolBindingSchemaType(e),
          enabled: n.getBoolBindingSchemaType(e),
          name: n.getTextFieldSchema(e),
          visible: n.getBoolBindingSchemaType(e),
          "unavailable-dates": n.getArrayPrimitiveStringBindingSchemaType(
            e,
            t.WA_FLOW_JSON_SCHEMA_STRING,
          ),
          "min-date": n.getStringBindingSchemaType(e),
          "max-date": n.getStringBindingSchemaType(e),
          "on-select-action": o(
            "WAFlowJSONActionSchema",
          ).getOnSelectActionSchema(),
        },
      };
    }
    function s(t, n) {
      var r = e(t);
      if (!n) {
        var a = o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(t);
        return babelHelpers.extends({}, r, {
          properties: babelHelpers.extends({}, r.properties, {
            "init-value": a,
            "error-message": a,
          }),
        });
      }
      return r;
    }
    ((l.getDatePickerComponentWithoutErrorMessageSchemaV500 = e),
      (l.getDatePickerComponentSchemaV500 = s));
  },
  98,
);
