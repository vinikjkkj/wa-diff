__d(
  "WAWebFeatureControlPolicy",
  ["WAWebFeatureControlFeature"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return (n = e.entries[t]) != null ? n : "DISABLED";
    }
    function s(t, n) {
      return e(t, n) === "ENABLED";
    }
    function u(t, n) {
      return e(t, n) === "DISABLED";
    }
    function c(t, n) {
      return e(t, n) === "LOCKED";
    }
    var d = new Set([
        "BUSINESS_PROFILE_EDIT",
        "NOTES",
        "AWAY_MESSAGES",
        "GREETING_MESSAGES",
        "QUICK_REPLIES",
        "BUSINESS_PLATFORM",
        "CTW_ADS",
        "MARKETING_MESSAGES",
        "BUSINESS_BROADCASTS",
        "BUSINESS_PROFILE_PICTURE",
        "BUSINESS_PROFILE_ADDRESS",
        "BUSINESS_PROFILE_HOURS",
        "BUSINESS_PROFILE_SERVICES",
      ]),
      m = new Set([
        "BUSINESS_PROFILE_NAME",
        "BUSINESS_PROFILE_DISPLAY_NAME",
        "BUSINESS_PROFILE_COVER_PHOTO",
        "BUSINESS_PROFILE_DESCRIPTION",
        "BUSINESS_PROFILE_EMAIL",
        "BUSINESS_PROFILE_WEBSITE",
        "BUSINESS_PROFILE_CATEGORY",
      ]),
      p = (function () {
        var e = {};
        for (var t of o("WAWebFeatureControlFeature").ALL_FEATURES)
          d.has(t)
            ? (e[t] = "ENABLED")
            : m.has(t)
              ? (e[t] = "LOCKED")
              : (e[t] = "DISABLED");
        return { entries: e };
      })();
    ((l.featureState = e),
      (l.isFeatureEnabled = s),
      (l.isFeatureDisabled = u),
      (l.isFeatureLocked = c),
      (l.PILOT_DEFAULT = p));
  },
  98,
);
