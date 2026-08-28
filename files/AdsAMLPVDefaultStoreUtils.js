__d(
  "AdsAMLPVDefaultStoreUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsSmartDefaultStore",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a = r("AdsSmartDefaultStore").get(e).getValue();
      return (n =
        a == null || (o = a.sales) == null
          ? void 0
          : o.find(function (e) {
              return e.source === t;
            })) != null
        ? n
        : null;
    }
    function s(t, n) {
      return e(t, n) != null;
    }
    function u(t, n) {
      var o;
      return t == null
        ? !1
        : ((o = e(t, n)) == null ? void 0 : o.conversion_location) ===
            r("AdsPromotedObjectTypes").WEBSITE;
    }
    function c(e, t, n, o, a) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_SALES &&
        e != null &&
        n !== !0 &&
        s(e, o) &&
        a(!1)
      );
    }
    function d(e) {
      return e !== r("AdsPromotedObjectTypes").MOBILE_APP
        ? !1
        : !r("justknobx")._("5753");
    }
    ((l.hasAMDefaultSourceForAccount = s),
      (l.isAMDefaultConversionLocationWebsite = u),
      (l.isAMLPVDefaultEligible = c),
      (l.isLPVDefaultBlockedForApp = d));
  },
  98,
);
