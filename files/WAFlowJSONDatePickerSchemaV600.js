__d(
  "WAFlowJSONDatePickerSchemaV600",
  ["WAFlowJSONDatePickerSchemaV500", "WAFlowJSONSchemaUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONDatePickerSchemaV500",
      ).getDatePickerComponentSchemaV500(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
        }),
      });
    }
    l.getDatePickerComponentSchemaV600 = e;
  },
  98,
);
