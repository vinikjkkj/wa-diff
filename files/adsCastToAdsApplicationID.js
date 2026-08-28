__d(
  "adsCastToAdsApplicationID",
  ["AdsApplicationIDs", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(Object.values(r("AdsApplicationIDs")));
    function s(t) {
      var n = t;
      return (
        e.has(n) ||
          r("FBLogger")("ads").warn("%s is not a valid AdsApplicationID", n),
        n
      );
    }
    l.default = s;
  },
  98,
);
