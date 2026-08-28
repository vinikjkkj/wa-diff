__d(
  "IsAppAdUtils",
  [
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppAEMv2Utils",
    "AdsAppUrlUtils",
    "AdsPromotedObjectTypes",
    "MobileAppEngagementSupportedObjectives",
    "ads-app-platforms",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        o("ads-app-platforms").MOBILE_STORE.ITUNES,
        o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD,
      ],
      u = [
        (e = r("AdsAPIOptimizationGoals")).OFFSITE_CONVERSIONS,
        e.VALUE,
        e.RETURN_ON_AD_SPEND,
      ],
      c = [e.VALUE, e.RETURN_ON_AD_SPEND],
      d = new Set([
        r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS,
      ]),
      m = {
        getIsMAISupportedAEOorVO: function (t) {
          return t == null ? !1 : u.includes(t);
        },
        isGooglePlayStore: function (t, n) {
          return (
            t === o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY ||
            r("AdsAppUrlUtils").isGooglePlayURL(n)
          );
        },
        isItunesStore: function (t, n, o) {
          var e =
            (t != null && s.includes(t)) || r("AdsAppUrlUtils").isItunesURL(n);
          return e && o === !0 ? r("gkx")("6642") : !1;
        },
        getIsMAISupportedVO: function (t) {
          return t == null ? !1 : c.includes(t);
        },
        getIsMAICampaignGroup: function (t, n) {
          return (
            n === void 0 && (n = !1),
            n === !0
              ? t === r("AdsAPIObjectives").APP_INSTALLS ||
                t === r("AdsAPIObjectives").MOBILE_APP_INSTALLS
              : t === r("AdsAPIObjectives").APP_INSTALLS
          );
        },
        isMAIIOS14CampaignGroup: function (t) {
          return o(
            "AdsAppAEMv2Utils",
          ).getAppAEMv2MAILaunchStatusForMAIIOS14Check() === "launched"
            ? o(
                "AdsAPICampaignGroupRecordUtils",
              ).hasPromotedObjectApplicationID(t)
            : t.is_skadnetwork_attribution === !0;
        },
        genIsMAECampaign: function (t, n, o, a, i) {
          if (
            (a === void 0 && (a = !1),
            i === void 0 && (i = r("AdsAPIOptimizationGoals").NONE),
            t == null)
          )
            return !1;
          var e = Object.values(
            r("MobileAppEngagementSupportedObjectives"),
          ).includes(t);
          if (!e || (a && !u.includes(i))) return !1;
          var l = n === r("AdsPromotedObjectTypes").MOBILE_APP,
            c = s.includes(o);
          return l && c;
        },
        isSKANOrAEMCampaign: function (t, n) {
          return o(
            "AdsAppAEMv2Utils",
          ).getAppAEMv2MAILaunchStatusForMAIIOS14Check() === "launched"
            ? o(
                "AdsAPICampaignRecordUtils",
              ).isSKAdNetworkOrAEMCampaignAttribution(n)
            : t.is_skadnetwork_attribution === !0;
        },
        isInAppAdsEligible: function (t, n, o, a, i) {
          return (
            a === void 0 && (a = r("AdsAPIOptimizationGoals").NONE),
            !m.getIsMAICampaignGroup(t, !0) ||
            !m.isOptimizationGoalEligibleForInAppAds(a)
              ? !1
              : !!(m.isGooglePlayStore(n, o) || m.isItunesStore(n, o, i))
          );
        },
        isAppVORevampUXEligible: function (t, n, o, a) {
          return (
            a === void 0 && (a = r("AdsAPIOptimizationGoals").NONE),
            !m.getIsMAICampaignGroup(t, !0) ||
            !m.isOptimizationGoalEligibleForInAppAds(a)
              ? !1
              : !!(m.isGooglePlayStore(n, o) || m.isItunesStore(n, o, !0))
          );
        },
        isOptimizationGoalEligibleForInAppAds: function (t) {
          return (
            t === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
            t === r("AdsAPIOptimizationGoals").VALUE
          );
        },
        isInAppAdsCampaignBySpec: function (t, n, r) {
          return (
            r === "AD_IMPRESSION" &&
            m.getIsMAICampaignGroup(t, !0) &&
            m.isOptimizationGoalEligibleForInAppAds(n)
          );
        },
        isAppVoSupportedBidStrategy: function (t) {
          return d.has(t);
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
