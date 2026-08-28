__d(
  "AdsMobileAppObjectivesUtils",
  ["AdsAPIObjectives", "AdsODAXUtils", "AdsPromotedObjectTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Set([
        (e = r("AdsAPIObjectives")).MOBILE_APP_INSTALLS,
        e.MOBILE_APP_ENGAGEMENT,
      ]),
      u = r("immutable").Set([e.CONVERSIONS, e.LINK_CLICKS]);
    function c(e, t) {
      var n =
        e != null
          ? o("AdsODAXUtils").maybeTranslateObjectiveByPromotedObjectType(
              r("AdsAPIObjectives")[e],
              t,
            )
          : null;
      return n === r("AdsAPIObjectives").APP_INSTALLS
        ? t === r("AdsPromotedObjectTypes").MOBILE_APP
        : s.has(n) ||
            (u.has(n) && t === r("AdsPromotedObjectTypes").MOBILE_APP);
    }
    l.isMobileAppObjective = c;
  },
  98,
);
