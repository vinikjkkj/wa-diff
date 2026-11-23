__d(
  "AppAdsPlayablesUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsCallToActionTypes",
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
    function u() {
      return r("gkx")("26874");
    }
    function c(e, t) {
      return (
        t === void 0 && (t = !0),
        e != null && s.has(e) && t && r("gkx")("28017")
      );
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.playables.get(e);
      if (t == null) return [];
      var n = [];
      return (
        t.forEach(function (e) {
          var t = e.get("playable_asset_id");
          typeof t == "string" && n.push(t);
        }),
        n
      );
    }
    function m(e) {
      return r("AdsAdgroupRecordAccessors").creative.playable_asset_id.get(e);
    }
    function p(e, t) {
      if (!c(t)) return [];
      var n = d(e);
      if (n.length > 0 && u()) return n;
      var r = m(e);
      return r != null ? [r] : [];
    }
    function _(e, t, n) {
      return c(e, n)
        ? e !== r("AdsAPIObjectives").OUTCOME_SALES
          ? !0
          : t !== r("AdsPromotedObjectTypes").MOBILE_APP
            ? !1
            : r("gkx")("22588")
        : !1;
    }
    function f(e, t, n, r) {
      return _(
        e,
        o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t, null, n),
        r,
      );
    }
    function g(e, t) {
      var n, o;
      return e !== r("AdsAPIObjectives").OUTCOME_SALES ||
        t == null ||
        t === "NO_BUTTON" ||
        !r("gkx")("22588")
        ? null
        : (n =
              (o = r("AdsCallToActionTypes").TYPES[t]) == null
                ? void 0
                : o.text) != null
          ? n
          : null;
    }
    ((l.isPlayableAdsAdgroupFromRecord = e),
      (l.isPlayableM1GKEnabled = u),
      (l.isNewPlayableCreativeExperienceEnabled = c),
      (l.getPlayableAssetIDsForPreview = p),
      (l.isNewPlayableCreativeExperienceEnabledForSalesPromotedObjectType = _),
      (l.isNewPlayableCreativeExperienceEnabledForSalesCampaign = f),
      (l.getAppSalesInPlayableCTAText = g));
  },
  98,
);
