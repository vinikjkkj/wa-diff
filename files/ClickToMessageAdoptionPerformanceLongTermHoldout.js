__d(
  "ClickToMessageAdoptionPerformanceLongTermHoldout",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e) {
        var t;
        return (t = r("qex")._("1888")) != null ? t : !1;
      } else {
        var n;
        return (n = r("qex")._("1889")) != null ? n : !1;
      }
    }
    function s() {
      return r("gkx")("21697");
    }
    ((l.isUserInLongTermCTXDefaultingHoldout = e),
      (l.isAccountInEpdJurisdiction = s));
  },
  98,
);
