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
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_signal_sharing_post_dc_message_type_enabled",
          )
        : !1;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "mm_data_sharing_disclosure_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "cap_context_info_max_array_length",
      );
    }
    function p() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "data_sharing_transparency_indicator_duration",
          )
        : 0;
    }
    function _() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue("ctwa_tos_filtering_enabled")
        : !1;
    }
    function f() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "disclosure_for_the_marketing_message_body_links_enabled",
          )
        : !1;
    }
    function g() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_signal_collection_enabled",
          )
        : !1;
    }
    function h() {
      var t = {
        store_consented_token_enabled: !1,
        store_non_consented_token_enabled: !1,
      };
      if (!d()) return t;
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
    function y() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "optimized_delivery_multiple_collection_windows_enabled",
          )
        : !1;
    }
    function C() {
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
      if (!d()) return n;
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
    function b() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_signal_sharing_verification_system_lid_enabled",
          )
        : !1;
    }
    function v(e) {
      return e == null || !r("WAWebWid").isRegularUserNoImply(e)
        ? !1
        : d() && g();
    }
    function S() {
      var e = Object.values(
        o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT,
      ).map(Number);
      if (!d()) return e;
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
    function R() {
      var e = 0xefe90a1c4672;
      if (!E()) return e;
      var t = Number.parseInt(
        o("WAWebABProps").getABPropConfigValue(
          "mm_disclosure_learn_more_article_id",
        ),
        10,
      );
      return Number.isNaN(t) ? e : t;
    }
    function L() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_signal_sharing_verification_new_signal_type_origin",
          )
        : !1;
    }
    function E() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue("cci_compliance_mm")
        : !1;
    }
    function k() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_data_sharing_disclosure_enabled_additional_transparency_large_screens",
          )
        : !1;
    }
    function I() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_optimized_delivery_replacing_shimmed_links_enabled",
          )
        : !1;
    }
    function T() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_optimized_delivery_app_cta_enabled",
          )
        : !1;
    }
    function D() {
      return d()
        ? o("WAWebABProps").getABPropConfigValue(
            "mm_1pd_post_dc_new_schema_enabled",
          )
        : !1;
    }
    function x() {
      return d()
        ? !o("WAWebABProps").getABPropConfigValue(
            "mm_1pd_post_dc_old_schema_disabled",
          )
        : !1;
    }
    function $(e, t) {
      var n = C(),
        r = n.consented_types_allowlist,
        o = n.non_consented_types_allowlist;
      return t ? r.includes(e) : o.includes(e);
    }
    ((l.isNativeMessageTypeEnabled = c),
      (l.isMmSignalSharingDisclosureEnabled = d),
      (l.isMmSignalSharingContextInfoMaxArrayLengthCapEnabled = m),
      (l.getMmSignalSharingCollectionWindow = p),
      (l.getMmSignalSharingTosFiltering = _),
      (l.isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled = f),
      (l.getMmSignalSharingOptimizedDeliverySignalCollectionEnabled = g),
      (l.getMmSignalSharingOptimizedDeliveryTokensStorageConfig = h),
      (l.isMmSignalSharingOptimizedDeliveryMultipleCollectionWindowsEnabled =
        y),
      (l.getMmSignalSharingOptimizedDeliverySignalCollectionConfig = C),
      (l.getMmSignalSharingVerificationSystemLidEnabled = b),
      (l.isMmSignalSharingCollectionEnabled = v),
      (l.getMmSignalSharingBlockAndReportEntryPointsAllowlist = S),
      (l.getMmDisclosureLearnMoreArticleId = R),
      (l.isMmSignalSharingVerificationNewSignalTypeOriginEnabled = L),
      (l.isCCIComplianceEnabled = E),
      (l.isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens =
        k),
      (l.isMmSignalSharingReplacingShimmedLinksEnabled = I),
      (l.isMmSignalSharingAppCtaEnabled = T),
      (l.isMmSignalSharingPostDcNewSchemaEnabled = D),
      (l.isMmSignalSharingPostDcOldSchemaEnabled = x),
      (l.isSignalTypeAllowlisted = $));
  },
  98,
);
