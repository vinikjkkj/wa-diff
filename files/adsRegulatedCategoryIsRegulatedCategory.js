__d(
  "adsRegulatedCategoryIsRegulatedCategory",
  ["AdsRegulatedCategoryConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = null),
        e == null || (t != null && t.includes(e))
          ? !1
          : o(
              "AdsRegulatedCategoryConstants",
            ).AdsRegulatedCategoryRestrictMap.includes(e)
      );
    }
    l.default = e;
  },
  98,
);
