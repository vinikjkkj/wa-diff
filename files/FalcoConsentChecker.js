__d(
  "FalcoConsentChecker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n, r, o) {
      var a, i;
      switch (typeof o) {
        case "string":
          return ((a = t[String(o)]), a ? a <= n : !1);
        case "number":
          return e(t, n, r, r[Number(o)]);
        default:
          if (((i = !1), Array.isArray(o))) {
            for (var l = o[0], s = 1; s < o.length; s++)
              if (((i = e(t, n, r, o[s])), i)) {
                if (l === "or") return !0;
              } else if (l === "and") return !1;
          }
          return i;
      }
    }
    i.default = e;
  },
  66,
);
