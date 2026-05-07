__d(
  "ContextualConfigParseDenseDefaults",
  ["ContextualConfigConstants", "ContextualConfigParseDenseResultParams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        return r("ContextualConfigParseDenseResultParams")(e, t);
      } catch (e) {
        var n = new Error(
          o("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE,
        );
        throw (n.stack, n);
      }
    }
    l.default = e;
  },
  98,
);
