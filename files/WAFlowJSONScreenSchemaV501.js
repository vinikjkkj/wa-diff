__d(
  "WAFlowJSONScreenSchemaV501",
  ["WAFlowJSONSchemaUtils", "WAFlowJSONScreenSchemaV500"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return babelHelpers.extends(
        {},
        o("WAFlowJSONScreenSchemaV500").getScreenSchemaV500(e),
        {
          properties: babelHelpers.extends(
            {},
            o("WAFlowJSONScreenSchemaV500").getScreenSchemaV500(e).properties,
            {
              sensitive: o(
                "WAFlowJSONSchemaUtils",
              ).getArrayStringBindingSchemaType(),
            },
          ),
        },
      );
    }
    l.getScreenSchemaV501 = e;
  },
  98,
);
