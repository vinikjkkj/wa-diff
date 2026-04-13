__d(
  "WAWebMmSignalSharingGatingUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumMmSignalType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_data_sharing_disclosure_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_data_sharing_disclosure_enabled_companion_history_sync",
      );
    }
    function m() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "data_sharing_transparency_indicator_duration",
          )
        : 0;
    }
    function p() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue("ctwa_tos_filtering_enabled")
        : !1;
    }
    function _() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "disclosure_for_the_marketing_message_body_links_enabled",
          )
        : !1;
    }
    function f() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_signal_collection_enabled",
          )
        : !1;
    }
    function g() {
      var t = {
        store_consented_token_enabled: !1,
        store_non_consented_token_enabled: !1,
      };
      if (!c()) return t;
      try {
        return JSON.parse(
          o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_tokens_storage_config",
          ),
        );
      } catch (r) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "optimized_delivery_tokens_storage_config",
        );
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] parse tokens_storage_config failed: ",
                " raw=",
                "",
              ])),
            r,
            n,
          ),
          t
        );
      }
    }
    function h() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_multiple_collection_windows_enabled",
          )
        : !1;
    }
    function y() {
      var e = 168,
        t = Object.keys(o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE).map(
          function (e) {
            return o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE[e];
          },
        ),
        n = {
          consented_collection_window_in_hours: e,
          non_consented_collection_window_in_hours: e,
          consented_types_allowlist: t,
          non_consented_types_allowlist: t,
        };
      if (!c()) return n;
      try {
        return JSON.parse(
          o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_signal_collection_config",
          ),
        );
      } catch (e) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] fetch signal_collection_config err: ",
                "",
              ])),
            e,
          ),
          n
        );
      }
    }
    function C() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_signal_sharing_verification_system_lid_enabled",
          )
        : !1;
    }
    function b(e) {
      return e == null || !r("WAWebWid").isRegularUserNoImply(e)
        ? !1
        : c() && f();
    }
    function v() {
      var e = Object.values(
        o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT,
      ).map(Number);
      if (!c()) return e;
      try {
        return o("WAWebABProps")
          .getABPropConfigValue(
            "optimized_delivery_block_and_report_entry_points_allowlist_web",
          )
          .split(",")
          .filter(function (e) {
            return !isNaN(e);
          })
          .map(Number);
      } catch (t) {
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] fetch block_report_allowlist err: ",
                "",
              ])),
            t,
          ),
          e
        );
      }
    }
    function S() {
      var e = 0xefe90a1c4672;
      if (!L()) return e;
      var t = Number.parseInt(
        o("WAWebABProps").getABPropConfigValue(
          "mm_disclosure_learn_more_article_id",
        ),
        10,
      );
      return Number.isNaN(t) ? e : t;
    }
    function R() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_signal_sharing_verification_new_signal_type_origin",
          )
        : !1;
    }
    function L() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue("cci_compliance_mm")
        : !1;
    }
    function E() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_data_sharing_disclosure_enabled_additional_transparency_large_screens",
          )
        : !1;
    }
    function k() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_optimized_delivery_replacing_shimmed_links_enabled",
          )
        : !1;
    }
    function I() {
      return c()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_optimized_delivery_app_cta_enabled",
          )
        : !1;
    }
    function T(e, t) {
      var n = y(),
        r = n.consented_types_allowlist,
        o = n.non_consented_types_allowlist;
      return t ? r.includes(e) : o.includes(e);
    }
    ((l.isMmSignalSharingDisclosureEnabled = c),
      (l.isMmSignalSharingDisclosureEnabledFromCompanionHistorySync = d),
      (l.getMmSignalSharingCollectionWindow = m),
      (l.getMmSignalSharingTosFiltering = p),
      (l.isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled = _),
      (l.getMmSignalSharingOptimizedDeliverySignalCollectionEnabled = f),
      (l.getMmSignalSharingOptimizedDeliveryTokensStorageConfig = g),
      (l.isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled =
        h),
      (l.getMmSignalSharingOptimizedDeliverySignalCollectionConfig = y),
      (l.getMmSignalSharingVerificationSystemLidEnabled = C),
      (l.isMmSignalSharingCollectionEnabled = b),
      (l.getMmSignalSharingBlockAndReportEntryPointsAllowlist = v),
      (l.getMmDisclosureLearnMoreArticleId = S),
      (l.isMmSignalSharingVerificationNewSignalTypeOriginEnabled = R),
      (l.isCCIComplianceEnabled = L),
      (l.isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens =
        E),
      (l.isMmSignalSharingReplacingShimmedLinksEnabled = k),
      (l.isMmSignalSharingAppCtaEnabled = I),
      (l.isSignalTypeAllowlisted = T));
  },
  98,
);
