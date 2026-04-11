__d(
  "ContextualConfigParseDenseResultParams",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigIsEqualParams",
    "ContextualConfigParseResultParams",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, a) {
        return (e || (e = r("ContextualConfigAssert")))(
          r("ContextualConfigIsEqualParams")(n, a),
          o("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH,
        );
      };
    function u(e, t) {
      var n = r("ContextualConfigParseResultParams")(
        e,
        t.map(function (t, n) {
          return { name: e[n].name, value: t };
        }),
      );
      return (s(e, n), n);
    }
    l.default = u;
  },
  98,
);
