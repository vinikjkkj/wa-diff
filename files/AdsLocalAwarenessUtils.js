__d(
  "AdsLocalAwarenessUtils",
  [
    "AdsAdgroupSpecUtils",
    "AdsBulkValueUtils",
    "AdsLocalUtils",
    "LocationConstants",
    "adsTargetingLocationGetLocationsCount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsLocalUtils").isLocalObjective(e) && !!t;
    }
    function s(e, t) {
      return o("AdsLocalUtils").isLocalObjective(e) && !!t;
    }
    function u(e) {
      var t = o("AdsBulkValueUtils").getUniformValue(e, null);
      return o("AdsLocalUtils").isLocalObjective(t);
    }
    function c(e) {
      var t = (
          e && e[o("LocationConstants").CUSTOM_LOCATIONS]
            ? e[o("LocationConstants").CUSTOM_LOCATIONS]
            : []
        ).length,
        n = r("adsTargetingLocationGetLocationsCount")(e);
      return t !== n ? !1 : t > 0 ? !0 : null;
    }
    function d(e, t) {
      if (!o("AdsLocalUtils").isLocalObjective(t)) return !1;
      var r = n("AdsAdgroupSpecUtils"),
        a = r.getCallToActionType(e);
      return a === "CALL_NOW";
    }
    ((l.isADLACampaign = e),
      (l.isDynamicLocalAwareness = s),
      (l.isLocalAwarenessUniformObjective = u),
      (l.hasLocationsFiltering = c),
      (l.isLocalAwarenessAndHasCallNowCallToAction = d));
  },
  98,
);
