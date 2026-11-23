__d(
  "WAFlowJSONValidatorChainUtils",
  [
    "WAFlowJSONData",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidatorChainV501",
    "WAFlowJSONValidatorChainV502",
    "WAFlowJSONValidatorChainV600",
    "WAFlowJSONValidatorChainV601",
    "WAFlowJSONValidatorChainV602",
    "WAFlowJSONValidatorChainV603",
    "WAFlowJSONValidatorChainV700",
    "WAFlowJSONValidatorChainV701",
    "WAFlowJSONValidatorChainV702",
    "WAFlowJSONValidatorChainV703",
    "WAFlowJSONValidatorChainV704",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        100, 101, 110, 120, 200, 201, 202, 299, 300, 301, 302, 400, 401, 500,
      ]),
      s = new Map([
        [501, o("WAFlowJSONValidatorChainV501").WAFlowJSONValidatorChainV501],
        [502, o("WAFlowJSONValidatorChainV502").WAFlowJSONValidatorChainV502],
        [600, o("WAFlowJSONValidatorChainV600").WAFlowJSONValidatorChainV600],
        [601, o("WAFlowJSONValidatorChainV601").WAFlowJSONValidatorChainV601],
        [602, o("WAFlowJSONValidatorChainV602").WAFlowJSONValidatorChainV602],
        [603, o("WAFlowJSONValidatorChainV603").WAFlowJSONValidatorChainV603],
        [700, o("WAFlowJSONValidatorChainV700").WAFlowJSONValidatorChainV700],
        [701, o("WAFlowJSONValidatorChainV701").WAFlowJSONValidatorChainV701],
        [702, o("WAFlowJSONValidatorChainV702").WAFlowJSONValidatorChainV702],
        [703, o("WAFlowJSONValidatorChainV703").WAFlowJSONValidatorChainV703],
        [704, o("WAFlowJSONValidatorChainV704").WAFlowJSONValidatorChainV704],
      ]);
    function u(t, n, r, a) {
      if ((a === void 0 && (a = null), e.has(n)))
        throw o(
          "WAFlowJSONValidationError",
        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.UNSUPPORTED_FLOW_JSON_VERSION.concat(
          ": " + String(n),
        );
      var i = s.get(n);
      if (i == null)
        throw o("WAFlowJSONValidationError")
          .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.INVALID_FLOW_JSON_VERSION;
      return new i(new (o("WAFlowJSONData").WAFlowJSONData)(r), t, a);
    }
    l.getWAFlowJSONValidatorChain = u;
  },
  98,
);
