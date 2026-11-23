__d(
  "WAFlowJSONChipsSelectorSchemaV701",
  [
    "WAFlowJSONActionSchema",
    "WAFlowJSONChipsSelectorSchema",
    "WAFlowJSONConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "WAFlowJSONChipsSelectorSchema",
        ).getChipsSelectorComponentSchemaV602(e, t),
        r = babelHelpers.extends({}, n, {
          properties: babelHelpers.extends({}, n.properties, {
            "on-select-action": o(
              "WAFlowJSONActionSchema",
            ).getOnSelectActionSchema([
              o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
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
    l.getChipsSelectorComponentSchemaV701 = e;
  },
  98,
);
