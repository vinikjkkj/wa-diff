__d(
  "ContextualConfigParseDenseDefaults",
  ["ContextualConfigConstants", "ContextualConfigParseDenseResultParams"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        return r("ContextualConfigParseDenseResultParams")(e, t);
      } catch (e) {
        throw new Error(
          o("ContextualConfigConstants").ERROR.MISSING_DEFAULT_VALUE,
        );
      }
    }
    l.default = e;
  },
  98,
);
