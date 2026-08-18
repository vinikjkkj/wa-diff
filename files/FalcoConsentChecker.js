__d(
  "FalcoConsentChecker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n, r, o) {
      var a;
      switch (typeof o) {
        case "string":
          return ((a = t[String(o)]), a ? a <= n : !1);
        case "number":
          return e(t, n, r, r[Number(o)]);
        default: {
          if (!Array.isArray(o)) return !1;
          var i = o[0];
          if (i === "not") return o.length !== 2 ? !1 : !e(t, n, r, o[1]);
          if (i !== "and" && i !== "or") return !1;
          for (var l = !1, s = 1; s < o.length; s++)
            if (((l = e(t, n, r, o[s])), l)) {
              if (i === "or") return !0;
            } else if (i === "and") return !1;
          return l;
        }
      }
    }
    i.default = e;
  },
  66,
);
