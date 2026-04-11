__d(
  "getLoadingStateAriaProps",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        o =
          e == null
            ? { "aria-label": s._(/*BTDS*/ "Loading..."), role: "status" }
            : {
                "aria-valuemax":
                  (n = t == null ? void 0 : t.max) != null ? n : 100,
                "aria-valuemin":
                  (r = t == null ? void 0 : t.min) != null ? r : 0,
                "aria-valuenow": e,
                role: "progressbar",
              };
      return babelHelpers.extends({}, o);
    }
    l.default = e;
  },
  226,
);
