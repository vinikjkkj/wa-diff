__d(
  "AdsCallAddonUtils",
  [
    "AdCampaignDestination",
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
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !0),
        e === !1 ? r("gkx")("15177") : r("gkx")("11814")
      );
    }
    function s(e) {
      return (
        e === void 0 && (e = { logExposure: !0 }),
        e.logExposure === !1 ? r("gkx")("15878") : r("gkx")("10503")
      );
    }
    function u(e, t, n, a, i, l) {
      var s;
      if (a && l !== !0) return !1;
      var u =
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isGKEnableForUnifiedMediaSetupFlow() &&
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isMediaSourcePCAUnifiedFormat(
            (s = n.metadata) == null ? void 0 : s.adgroup_media_source,
          ),
        c = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(n);
      if (u || c) return !1;
      var d = e.objective,
        m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(d, t),
        p = o("AdsODAXUtils").maybeTranslateObjective(
          e.objective,
          m,
          t.optimization_goal,
        ),
        _ = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(n),
        f = p === r("AdsAPIObjectives").CONVERSIONS,
        g = p === r("AdsAPIObjectives").LINK_CLICKS,
        h =
          r("adsCampaignGetOfferStateType")(t) === r("AdsOfferState").HAS_OFFER,
        y = b(n),
        C = !_ && f && !h && i && y,
        v = !_ && g && !h && i && y;
      return C || v;
    }
    function c(e, t) {
      var n = e;
      return (
        t != null && (n = f(n, t)),
        o(
          "AdsUEditorAdgroupCallAdsConfigurationUtils",
        ).clearCallAdsConfiguration(n)
      );
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_ads_configuration.phone_number.delete(e);
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_ads_configuration.call_destination_type.delete(
          t,
        )),
        t
      );
    }
    function m(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.call_ads_configuration) == null
          ? void 0
          : t.call_destination_type) === "WEBSITE_AND_CALL"
      );
    }
    function p(e, t) {
      return C()
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_ads_configuration.call_forwarding.set(
            t,
            e,
          )
        : e;
    }
    function _(e, t) {
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
    function f(e, t) {
      var n = e;
      return (
        (n = r("AdsAdgroupSemanticFields").phoneDataID.delete(t, n)),
        g(n) &&
          (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            n,
          )),
        n
      );
    }
    function g(e) {
      var t,
        n = r("adsConvertAdObjectRecordToPlainJS")(e);
      return !!(
        (n == null || (t = n.creative) == null ? void 0 : t.asset_feed_spec) !=
          null &&
        r("AdsClientAdAssetFeedSpecFields").every(function (e) {
          var t,
            o =
              (t = n.creative) == null || (t = t.asset_feed_spec) == null
                ? void 0
                : t[e];
          return o instanceof Array
            ? o.length === 0
            : o instanceof Object && r("isEmptyObject")(o)
              ? !0
              : o == null;
        })
      );
    }
    function h() {
      return r("gkx")("18063");
    }
    function y(e) {
      return (
        e === r("AdCampaignDestination").WEBSITE ||
        e === r("AdCampaignDestination").UNDEFINED ||
        e === void 0
      );
    }
    function C() {
      return !1;
    }
    function b(e) {
      var t,
        n = (t = o("AdsAssetFeedUtils")).isDofAdgroupFromSpec(e),
        r = t.isAdgroupUsingAssetFeedFromRecord(e),
        a = t.isRegularDCOAdgroupFromRecord(e),
        i = t.hasLanguageOrPlacementCustomizationFromRecord(e);
      return !r || a || i || n;
    }
    ((l.isCallAddonBusinessHoursEnabled = e),
      (l.isWebCallBusinessHoursEnabled = s),
      (l.isCallExtensionEnabled = u),
      (l.clearCallExtensionFields = c),
      (l.clearPhoneNumberAndCallDestinationType = d),
      (l.isCallAddonSelected = m),
      (l.setCallForwarding = p),
      (l.setPhoneNumberAndCallDestinationType = _),
      (l.clearPhoneDataID = f),
      (l.isInWebsiteAndCallsL3DAFlow = h),
      (l.isWebsiteDestinationForCallExtension = y),
      (l.showCallInsightsSectionForCallExtension = C));
  },
  98,
);
