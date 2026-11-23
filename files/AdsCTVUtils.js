__d(
  "AdsCTVUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "filterNulls",
    "gkx",
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
      return (
        e.length > 0 &&
        e.every(function (e) {
          return c(r("filterNulls")(e != null ? e : []));
        })
      );
    }
    function p(e) {
      return e.some(function (e) {
        return c(r("filterNulls")(e != null ? e : []));
      });
    }
    function _(e) {
      switch (e) {
        case "OUTCOME_SALES":
          return "OUTCOME_SALES";
        case "OUTCOME_AWARENESS":
          return "OUTCOME_AWARENESS";
        default:
          return null;
      }
    }
    function f() {
      return r("gkx")("23904") && r("gkx")("28691");
    }
    ((l.getDevicePlatformsFromArray = s),
      (l.getDevicePlatforms = u),
      (l.isCTVDevicePlatformSelected = c),
      (l.areAllCampaignsCTVOnly = d),
      (l.areAllCampaignsCTVOnlyFromDevicePlatforms = m),
      (l.hasAnyCampaignCTVOnlyFromDevicePlatforms = p),
      (l.getObjective = _),
      (l.isCTVBetaEnabled = f));
  },
  98,
);
