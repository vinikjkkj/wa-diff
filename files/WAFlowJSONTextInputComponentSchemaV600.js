__d(
  "WAFlowJSONTextInputComponentSchemaV600",
  ["WAFlowJSONSchemaUtils", "WAFlowJSONTextInputComponentSchemaV500"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONTextInputComponentSchemaV500",
      ).getTextInputComponentSchemaV500(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
        }),
      });
    }
    l.getTextInputComponentSchemaV600 = e;
  },
  98,
);
