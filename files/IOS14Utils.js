__d(
  "IOS14Utils",
  [
    "AdAccountModeledReporting",
    "AdsAPIObjectives",
    "AdsAppUrlUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "SKAdNetworkCampaignGroupSitevarsUtils",
    "ads-mobile-operating-systems",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "SKAdNetworkCampaignGroupSitevarsUtils",
      ).getMinSKANCampaignIOSVersion(),
      s = r(
        "SKAdNetworkCampaignGroupSitevarsUtils",
      ).getMaxNonSKANCampaignIOSVersion(),
      u = {
        shouldLimitIOSTargeting: function (t) {
          var e = t.deviceType,
            n = t.isSKANCampaignGroup,
            a = t.objective,
            i = t.objectStoreURL,
            l = t.optimizationGoal,
            s = t.promotedObjectType,
            u = o("AdsODAXUtils").maybeTranslateObjective(
              a != null ? a : r("AdsAPIObjectives").NONE,
              s,
              null,
            ),
            c =
              a === r("AdsAPIObjectives").APP_INSTALLS ||
              a === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
              u === r("AdsAPIObjectives").CONVERSIONS,
            d = s === r("AdsPromotedObjectTypes").MOBILE_APP,
            m =
              e === o("ads-mobile-operating-systems").operatingSystems.IOS ||
              e === "iOS",
            p = d && u === r("AdsAPIObjectives").CONVERSIONS,
            _ = r("AdsAppUrlUtils").isInstantGameURL(i),
            f = l !== "LINK_CLICKS" && !_;
          return !n && c && d && m && f && !p;
        },
        getRestrictedIOSVersions: function (n, r) {
          var t = {};
          for (var o in n) {
            var a = parseFloat(o),
              i = r ? a >= parseFloat(e) : a <= parseFloat(s);
            i && (t[o] = n[o]);
          }
          return t;
        },
        isIOS14AdAccount: function (t) {
          return (
            (t == null ? void 0 : t.modeled_reporting_type) ===
            r("AdAccountModeledReporting").IOS14_ACCOUNT
          );
        },
        isMAEwithUnlimitedTargeting: function (t, n, a, i) {
          var e = n === r("AdsPromotedObjectTypes").MOBILE_APP,
            l = o("AdsODAXUtils").maybeTranslateObjective(
              t != null ? t : r("AdsAPIObjectives").NONE,
              n,
              null,
            ),
            s = a === o("ads-mobile-operating-systems").operatingSystems.IOS,
            u = i !== "LINK_CLICKS";
          return e && l === r("AdsAPIObjectives").CONVERSIONS && s && u;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
