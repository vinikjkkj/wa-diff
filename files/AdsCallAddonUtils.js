__d(
  "AdsCallAddonUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsClientAdAssetFeedSpecFields",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "adsCampaignGetOfferStateType",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = { logExposure: !0 }),
        e.logExposure === !1 ? r("gkx")("15878") : r("gkx")("10503")
      );
    }
    function s(e, t, n, a, i, l) {
      if (!u(t, n, a, i, l)) return !1;
      var s = e.objective,
        c = o("AdsAPICampaignRecordUtils").getPromotedObjectType(s, t),
        d = o("AdsODAXUtils").maybeTranslateObjective(
          s,
          c,
          t.optimization_goal,
        );
      return d === r("AdsAPIObjectives").CONVERSIONS ||
        d === r("AdsAPIObjectives").LINK_CLICKS ||
        (d === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES && r("gkx")("9519"))
        ? !0
        : e.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
            r("gkx")("13126");
    }
    function u(e, t, n, a, i) {
      var l;
      if (n && i !== !0) return !1;
      var s =
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isGKEnableForUnifiedMediaSetupFlow() &&
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isMediaSourcePCAUnifiedFormat(
            (l = t.metadata) == null ? void 0 : l.adgroup_media_source,
          ),
        u = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(t);
      if (s || u) return !1;
      var c =
          r("adsCampaignGetOfferStateType")(e) === r("AdsOfferState").HAS_OFFER,
        d = y(t);
      return c || (!a && !r("gkx")("10220")) || !d
        ? !1
        : !o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t) ||
            r("gkx")("9519");
    }
    function c(e, t) {
      var n = e;
      return (
        t != null && (n = _(n, t)),
        o(
          "AdsUEditorAdgroupCallAdsConfigurationUtils",
        ).clearCallAdsConfiguration(n)
      );
    }
    function d(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.call_ads_configuration) == null
          ? void 0
          : t.call_destination_type) === "WEBSITE_AND_CALL"
      );
    }
    function m(e, t) {
      return h()
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.call_forwarding.set(
            t,
            e,
          )
        : e;
    }
    function p(e, t) {
      var n = e;
      return (
        t != null &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.phone_number.set(
            t,
            n,
          )),
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.set(
          "WEBSITE_AND_CALL",
          n,
        )),
        n
      );
    }
    function _(e, t) {
      var n = e;
      return (
        (n = r("AdsAdgroupSemanticFields").phoneDataID.delete(t, n)),
        f(n) &&
          (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            n,
          )),
        n
      );
    }
    function f(e) {
      var t,
        n =
          r("qex")._("3278") === !0
            ? e
            : r("adsConvertAdObjectRecordToPlainJS")(e),
        a = (t = n.creative) == null ? void 0 : t.asset_feed_spec;
      return (
        a != null &&
        r("AdsClientAdAssetFeedSpecFields").every(function (e) {
          return o("AdsAssetFeedUtils").isEmptyAssetFeedValue(a[e]);
        })
      );
    }
    function g() {
      return r("gkx")("18063");
    }
    function h() {
      return !1;
    }
    function y(e) {
      var t,
        n = (t = o("AdsAssetFeedUtils")).isDofAdgroupFromSpec(e),
        r = t.isAdgroupUsingAssetFeedFromRecord(e),
        a = t.isRegularDCOAdgroupFromRecord(e),
        i = t.isFormatAutomationAdgroupFromRecord(e),
        l = t.hasLanguageOrPlacementCustomizationFromRecord(e);
      return !r || a || i || l || n;
    }
    ((l.isWebCallBusinessHoursEnabled = e),
      (l.isCallExtensionEnabled = s),
      (l.clearCallExtensionFields = c),
      (l.isCallAddonSelected = d),
      (l.setCallForwarding = m),
      (l.setPhoneNumberAndCallDestinationType = p),
      (l.clearPhoneDataID = _),
      (l.isInWebsiteAndCallsL3DAFlow = g));
  },
  98,
);
