__d(
  "WAFlowJSONDocumentPickerComponentSchemaV600",
  ["WAFlowJSONDocumentPickerComponentSchemaV500", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONDocumentPickerComponentSchemaV500",
      ).getDocumentPickerComponentSchemaV500(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
        }),
      });
    }
    l.getDocumentPickerComponentSchemaV600 = e;
  },
  98,
);
