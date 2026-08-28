__d(
  "AppAdsPlayablesUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.playable_asset_id,
        r = n !== void 0;
      return r;
    }
    var s = new Set([
      r("AdsAPIObjectives").APP_INSTALLS,
      r("AdsAPIObjectives").OUTCOME_SALES,
    ]);
    function u(e) {
      return e != null && s.has(e) && r("gkx")("21689");
    }
    function c(e, t) {
      return u(e)
        ? e !== r("AdsAPIObjectives").OUTCOME_SALES
          ? !0
          : t !== r("AdsPromotedObjectTypes").MOBILE_APP
            ? !1
            : r("gkx")("22588")
        : !1;
    }
    function d(e, t, n) {
      return c(
        e,
        o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t, null, n),
      );
    }
    ((l.isPlayableAdsAdgroupFromRecord = e),
      (l.isNewPlayableCreativeExperienceEnabled = u),
      (l.isNewPlayableCreativeExperienceEnabledForSalesPromotedObjectType = c),
      (l.isNewPlayableCreativeExperienceEnabledForSalesCampaign = d));
  },
  98,
);
