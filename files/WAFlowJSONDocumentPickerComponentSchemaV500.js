__d(
  "WAFlowJSONDocumentPickerComponentSchemaV500",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONSchemaUtils",
    "WAFlowsDocumentPickerAllowedMIMEType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 1,
      u = 30,
      c = 1,
      d = 25600,
      m = "min-uploaded-documents",
      p = "max-uploaded-documents",
      _ = "max-file-size-kb",
      f = "allowed-mime-types";
    function g(t, n) {
      var a,
        i,
        l,
        g = {
          type: (i = o("WAFlowJSONConstants")).WA_FLOW_JSON_SCHEMA_OBJECT,
          required: [
            i.WA_FLOW_JSON_SCHEMA_TYPE,
            i.WA_FLOW_JSON_SCHEMA_NAME,
            i.WA_FLOW_JSON_SCHEMA_LABEL,
          ],
          additionalProperties: !1,
          properties:
            ((a = {
              type: { const: i.WA_FLOW_JSON_COMPONENT_TYPE.DOCUMENT_PICKER },
              name: (l = o("WAFlowJSONSchemaUtils")).getTextFieldSchema(t),
              description: l.getStringBindingSchemaType(t, {
                pattern: l.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              }),
              label: l.getStringBindingSchemaType(t, {
                pattern: l.WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN,
              }),
            }),
            (a[m] = l.getIntegerSchemaType(t, { minimum: e, maximum: u })),
            (a[p] = l.getIntegerSchemaType(t, { minimum: s, maximum: u })),
            (a[_] = l.getIntegerSchemaType(t, { minimum: c, maximum: d })),
            (a[f] = l.getArrayEnumBindingSchemaType(
              i.WA_FLOW_JSON_SCHEMA_STRING,
              Object.values(r("WAFlowsDocumentPickerAllowedMIMEType")).map(
                function (e) {
                  return String(e);
                },
              ),
            )),
            (a.enabled = l.getBoolBindingSchemaType(t)),
            (a.visible = l.getBoolBindingSchemaType(t)),
            a),
        };
      return (
        n ||
          (g.properties = babelHelpers.extends({}, g.properties, {
            "error-message": o(
              "WAFlowJSONSchemaUtils",
            ).getErrMsgObjectBindingSchemaType(),
          })),
        g
      );
    }
    ((l.MAX_FILE_SIZE_KB_PROP = _),
      (l.getDocumentPickerComponentSchemaV500 = g));
  },
  98,
);
