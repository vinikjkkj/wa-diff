__d(
  "WAFlowJSONCalendarPickerSchema",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (+e >= 601) return s(e, t);
      throw o("WAFlowJSONValidationError")
        .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNAVAILABLE_FLOW_JSON_VERSION.concat(
          "The component is not supported in Flow JSON: ",
        )
        .concat(String(e));
    }
    function s(e, t) {
      var n,
        r,
        a = {
          type: (n = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            n.WA_FLOW_JSON_SCHEMA_TYPE,
            n.WA_FLOW_JSON_SCHEMA_NAME,
            n.WA_FLOW_JSON_SCHEMA_LABEL,
          ],
          additionalProperties: !1,
          properties: {
            type: { const: n.WA_FLOW_JSON_COMPONENT_TYPE.CALENDAR_PICKER },
            name: (r = o("WAFlowJSONSchemaUtils")).getComponentNameSchemaType(
              e,
            ),
            title: r.getStringBindingSchemaType(e),
            description: r.getStringBindingSchemaType(e),
            label: r.getCalendarPickerModeFieldSchema(
              r.getStringBindingSchemaType(e),
            ),
            "helper-text": r.getCalendarPickerModeFieldSchema(
              r.getStringBindingSchemaType(e),
            ),
            required: r.getCalendarPickerModeFieldSchema(
              r.getBoolBindingSchemaType(e),
            ),
            enabled: r.getBoolBindingSchemaType(e),
            visible: r.getBoolBindingSchemaType(e),
            mode: r.getEnumDynamicBindingSchemaType(e, ["single", "range"]),
            "min-date": r.getStringBindingSchemaType(e),
            "max-date": r.getStringBindingSchemaType(e),
            "unavailable-dates": r.getArrayPrimitiveStringBindingSchemaType(
              e,
              n.WA_FLOW_JSON_SCHEMA_STRING,
            ),
            "include-days": r.getArrayEnumDynamicBindingSchemaType(
              e,
              n.WA_FLOW_JSON_SCHEMA_STRING,
              ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            ),
            "min-days": r.getIntegerBindingSchemaType(e),
            "max-days": r.getIntegerBindingSchemaType(e),
            "on-select-action": o(
              "WAFlowJSONActionSchema",
            ).getOnSelectActionSchema(),
          },
        };
      return t
        ? a
        : babelHelpers.extends({}, a, {
            properties: babelHelpers.extends({}, a.properties, {
              "init-value": o(
                "WAFlowJSONSchemaUtils",
              ).getCalendarPickerModeFieldSchema(
                o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
              ),
              "error-message": o(
                "WAFlowJSONSchemaUtils",
              ).getCalendarPickerModeFieldSchema(
                o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
              ),
            }),
          });
    }
    l.getCalendarPickerComponentSchemaByVersion = e;
  },
  98,
);
