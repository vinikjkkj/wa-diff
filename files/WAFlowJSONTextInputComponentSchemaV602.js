__d(
  "WAFlowJSONTextInputComponentSchemaV602",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONTextInputComponentSchemaV500",
    "WAFlowJSONTextInputComponentSchemaV600",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = o(
          "WAFlowJSONTextInputComponentSchemaV600",
        ).getTextInputComponentSchemaV600(e, t);
      return babelHelpers.extends({}, s, {
        properties: babelHelpers.extends(
          {},
          s.properties,
          ((n = {}),
          (n[(i = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_PATTERN] = o(
            "WAFlowJSONSchemaUtils",
          ).getStringBindingSchemaType(e, {
            format: i.WA_FLOW_JSON_SCHEMA_REGEX,
          })),
          n),
        ),
        dependencies:
          ((a = {}),
          (a[i.WA_FLOW_JSON_SCHEMA_PATTERN] = {
            oneOf: [
              {
                properties:
                  ((r = {}),
                  (r[i.WA_FLOW_JSON_SCHEMA_INPUT_TYPE] = {
                    enum: [
                      (l = o("WAFlowJSONTextInputComponentSchemaV500"))
                        .WAFlowJSONTextInputType.TEXT,
                      l.WAFlowJSONTextInputType.PASSWORD,
                      l.WAFlowJSONTextInputType.PASSCODE,
                      l.WAFlowJSONTextInputType.NUMBER,
                    ],
                  }),
                  r),
              },
            ],
          }),
          a),
      });
    }
    l.getTextInputComponentSchemaV602 = e;
  },
  98,
);
