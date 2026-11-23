__d(
  "WAFlowJSONRadioButtonsGroupComponentSchemaV500",
  [
    "WAFlowJSONCheckboxGroupComponentSchemaV500",
    "WAFlowJSONChildrenSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAFlowJSONChildrenSchema").getOptionListComponentSchemaV500(e),
        r = o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(e),
        a = babelHelpers.extends({}, n, {
          properties: babelHelpers.extends({}, n.properties, {
            type: {
              const: o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                .RADIO_BUTTONS_GROUP,
            },
            description: r,
            label: o("WAFlowJSONSchemaUtils").getTextFieldSchema(e),
            "media-size": o("WAFlowJSONSchemaUtils").getStringBindingSchemaType(
              e,
              {
                enum: o(
                  "WAFlowJSONCheckboxGroupComponentSchemaV500",
                ).getMediaSizeTypes(),
              },
            ),
          }),
        });
      return (
        t ||
          (a = babelHelpers.extends({}, a, {
            properties: babelHelpers.extends({}, a.properties, {
              "init-value": r,
              "error-message": r,
            }),
          })),
        a
      );
    }
    l.getRadioButtonsGroupComponentSchemaV500 = e;
  },
  98,
);
