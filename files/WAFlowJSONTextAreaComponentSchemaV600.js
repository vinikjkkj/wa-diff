__d(
  "WAFlowJSONTextAreaComponentSchemaV600",
  ["WAFlowJSONSchemaUtils", "WAFlowJSONTextAreaComponentSchemaV500"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "WAFlowJSONTextAreaComponentSchemaV500",
      ).getTextAreaComponentSchemaV500(e, t);
      return babelHelpers.extends({}, n, {
        properties: babelHelpers.extends({}, n.properties, {
          name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
        }),
      });
    }
    l.getTextAreaComponentSchemaV600 = e;
  },
  98,
);
