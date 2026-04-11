__d(
  "ContextualConfigPredAssertions",
  ["ContextualConfigAssert", "ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          n > 0,
          o("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES,
        );
      },
      u = function (n, a) {
        return (e || (e = r("ContextualConfigAssert")))(
          n === a,
          o("ContextualConfigConstants").ERROR.MISMATCH_NUMBER_OF_VALUES,
        );
      },
      c = function (n, a) {
        return (e || (e = r("ContextualConfigAssert")))(
          n < a,
          o("ContextualConfigConstants").ERROR.BAD_VALUE_ORDER,
        );
      };
    ((l.assertHasValues = s),
      (l.assertNumberOfValues = u),
      (l.assertValueOrder = c));
  },
  98,
);
