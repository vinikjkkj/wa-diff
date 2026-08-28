__d(
  "adsExcelGKCheck",
  ["AdsApplicationUtils", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      return o("AdsApplicationUtils").isFAME() ? !!e.get(t) : !1;
    }
    function u(t, n) {
      e.set(t, n);
    }
    ((s.overrideGK = u), (l.default = s));
  },
  98,
);
