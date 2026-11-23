__d(
  "adsMAIBAHasRegulatedSAC",
  ["AdsRegulatedCategory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsRegulatedCategory")).HOUSING,
        e.EMPLOYMENT,
        e.CREDIT,
        e.ISSUES_ELECTIONS_POLITICS,
      ]);
    function u(e) {
      return e == null
        ? !1
        : e.some(function (e) {
            return s.has(e);
          });
    }
    l.default = u;
  },
  98,
);
