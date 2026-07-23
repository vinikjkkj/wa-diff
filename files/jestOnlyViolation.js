__d(
  "jestOnlyViolation",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n === void 0 ? {} : n,
        a = o.error,
        i = r("FBLogger")(t);
      return (
        a && (i = i.catching(a)),
        i.blameToPreviousFrame().fatal("Jest-Only Fatal: " + e),
        null
      );
    }
    l.default = e;
  },
  98,
);
