__d(
  "AdsLegacyObjectivesUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsPromotedObjectUtilsShared",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = t;
      if (
        ((!t || t === r("AdsPromotedObjectTypes").NONE) &&
          (a = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(
            e,
          )),
        e === r("AdsAPIObjectives").CONVERSIONS ||
          e === r("AdsAPIObjectives").LINK_CLICKS)
      ) {
        if (a === r("AdsPromotedObjectTypes").CANVAS_APP)
          return r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT;
        if (a === r("AdsPromotedObjectTypes").MOBILE_APP)
          return r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT;
      }
      return e;
    }
    function s(t, n, r) {
      var o = u(t, n);
      return e(o, n, r);
    }
    function u(e, t) {
      var n = t;
      if (
        ((!t || t === r("AdsPromotedObjectTypes").NONE) &&
          (n = o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(
            e,
          )),
        e === r("AdsAPIObjectives").APP_INSTALLS)
      ) {
        if (n === r("AdsPromotedObjectTypes").MOBILE_APP)
          return r("AdsAPIObjectives").MOBILE_APP_INSTALLS;
        if (n === r("AdsPromotedObjectTypes").CANVAS_APP)
          return r("AdsAPIObjectives").CANVAS_APP_INSTALLS;
      }
      return e;
    }
    ((l.convertToLegacyAppObjectives_HACK = s),
      (l.convertToLegacyAppInstallsObjectives_HACK = u));
  },
  98,
);
