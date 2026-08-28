__d(
  "AdsCTVUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "mobile":
          return "MOBILE";
        case "desktop":
          return "DESKTOP";
        case "connected_tv":
          return "CONNECTED_TV";
        default:
          return null;
      }
    }
    function s(t) {
      if (t == null) return null;
      var n = Array.from(new Set(r("filterNulls")(t.map(e))));
      return n.length > 0 ? n : null;
    }
    function u(e) {
      return e == null
        ? null
        : s(o("AdsBulkValueUtils").getUniformValue(e, null));
    }
    function c(e) {
      return (
        e != null &&
        e.length === 1 &&
        e[0] === r("AdsAPIDevicePlatform").CONNECTED_TV
      );
    }
    function d(e) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            var t;
            return c(
              (t = r(
                "AdsCampaignRecordAccessors",
              ).targeting.device_platforms.get(e)) == null
                ? void 0
                : t.toArray(),
            );
          });
    }
    function m(e) {
      switch (e) {
        case "OUTCOME_SALES":
          return "OUTCOME_SALES";
        case "OUTCOME_AWARENESS":
          return "OUTCOME_AWARENESS";
        default:
          return null;
      }
    }
    ((l.getDevicePlatformsFromArray = s),
      (l.getDevicePlatforms = u),
      (l.isCTVDevicePlatformSelected = c),
      (l.areAllCampaignsCTVOnly = d),
      (l.getObjective = m));
  },
  98,
);
