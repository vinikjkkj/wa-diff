__d(
  "WAFlowJSONOptInComponentSchemaV600",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONConstants",
    "WAFlowJSONOptInComponentSchemaV500",
    "WAFlowJSONSchemaUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "WAFlowJSONOptInComponentSchemaV500",
        ).getOptInComponentSchemaV500(e, t),
        r = babelHelpers.extends({}, n, {
          properties: babelHelpers.extends({}, n.properties, {
            name: o("WAFlowJSONSchemaUtils").getComponentNameSchemaType(e),
            "on-select-action": o(
              "WAFlowJSONActionSchema",
            ).getOnSelectActionSchema([
              o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
            ]),
            "on-unselect-action": o(
              "WAFlowJSONActionSchema",
            ).getOnSelectActionSchema([
              o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA,
            ]),
          }),
        });
      return r;
    }
    l.getOptInComponentSchemaV600 = e;
  },
  98,
);
