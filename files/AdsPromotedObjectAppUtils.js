__d(
  "AdsPromotedObjectAppUtils",
  ["AdsPromotedObjectTypes", "AdsUniformValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? e === r("AdsPromotedObjectTypes").MOBILE_APP ||
            e === r("AdsPromotedObjectTypes").CANVAS_APP
        : !1;
    }
    function s(t) {
      return t
        ? t instanceof r("AdsUniformValue")
          ? e(t.getValue())
          : t.getValues().every(function (t) {
              return e(t);
            })
        : !1;
    }
    ((l.isAppType = e), (l.isAppTypeBulk = s));
  },
  98,
);
