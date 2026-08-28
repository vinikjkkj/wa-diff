__d(
  "isGeoTintableIconSource",
  ["TintableIconSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (function (e) {
        {
          var t = e;
          if (t instanceof r("TintableIconSource")) return !0;
        }
        return (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "src" in e &&
          e.$$typeof === "fb.tintableiconsource"
        );
      })(e);
    }
    l.default = e;
  },
  98,
);
