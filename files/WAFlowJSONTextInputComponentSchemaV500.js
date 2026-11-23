__d(
  "WAFlowJSONTextInputComponentSchemaV500",
  ["$InternalEnum", "WAFlowJSONConstants", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      TEXT: "text",
      NUMBER: "number",
      PASSWORD: "password",
      PASSCODE: "passcode",
      PHONE: "phone",
      EMAIL: "email",
    });
    function s(e, t) {
      var n,
        r,
        a = (n = o("WAFlowJSONSchemaUtils")).getStringBindingSchemaType(e, {
          minLength: 1,
        }),
        i = n.getStringBindingSchemaType(e),
        l = n.getBoolBindingSchemaType(e),
        s = n.getNumberBindingSchemaType(e),
        c = {
          type: (r = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            r.WA_FLOW_JSON_SCHEMA_TYPE,
            r.WA_FLOW_JSON_SCHEMA_NAME,
            r.WA_FLOW_JSON_SCHEMA_LABEL,
          ],
          additionalProperties: !1,
          properties: {
            type: { const: r.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT },
            "input-type": n.getStringBindingSchemaType(e, { enum: u() }),
            label: a,
            "helper-text": i,
            required: l,
            "min-chars": s,
            "max-chars": s,
            enabled: l,
            name: n.getTextFieldSchema(e),
            visible: l,
          },
        };
      return (
        t ||
          (c = babelHelpers.extends({}, c, {
            properties: babelHelpers.extends({}, c.properties, {
              "init-value": i,
              "error-message": i,
            }),
          })),
        c
      );
    }
    function u() {
      return [e.TEXT, e.NUMBER, e.PASSWORD, e.PASSCODE, e.PHONE, e.EMAIL];
    }
    ((l.WAFlowJSONTextInputType = e), (l.getTextInputComponentSchemaV500 = s));
  },
  98,
);
