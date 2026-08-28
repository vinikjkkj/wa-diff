__d(
  "ProductBrowsingAdsUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPlusCSCJUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCollectionsAdUtils",
    "AdsPromotedObjectTypes",
    "AdsSensitiveVerticalUtils",
    "AdsUserSettingsProvider",
    "NativeCommerceExperienceAdsUtils",
    "NativeCommerceExperienceLoggingUtils",
    "gkx",
    "justknobx",
    "passAPlusCStickyOptOutForFastTrackGlobalishGK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? o("NativeCommerceExperienceAdsUtils")
            .NativeCommerceExperienceOptinIneligibilityReason
            .CATALOG_NOT_SELECTED
        : null;
    }
    function s(e) {
      return (
        e === "external" ||
        e === "website_and_shops" ||
        e == null ||
        e === "none"
      );
    }
    function u(e) {
      return (
        e == null ||
        e === r("AdsPromotedObjectTypes").PIXEL ||
        e === r("AdsPromotedObjectTypes").WEBSITE
      );
    }
    function c() {
      return r("justknobx")._("3941")
        ? !0
        : !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals();
    }
    function d() {
      return r("justknobx")._("3947")
        ? !0
        : !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals();
    }
    function m(e, t, n) {
      var r, a;
      if ((n === void 0 && (n = !0), n && !d()))
        return {
          isEligible: !1,
          reason: "sensitive_ad_account_is_not_eligible_to_see_the_cta_toggle",
        };
      var i = e.adgroup,
        l = e.campaign;
      if (n && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(i))
        return { isEligible: !1, reason: "existing_post_no_destination_card" };
      if (!o("NativeCommerceExperienceAdsUtils").isWebsiteCampaign(l))
        return { isEligible: !1, reason: "not_website_campaign" };
      if (!u(l.conversion_locations))
        return { isEligible: !1, reason: "conversion_location_not_supported" };
      if (!s(t))
        return {
          isEligible: !1,
          reason: "main_destination_dropdown_not_website",
        };
      if (o("AdsCollectionsAdUtils").isCollectionsAd(i.creative))
        return { isEligible: !1, reason: "collection_format_not_supported" };
      var c = (r = i.creative) == null ? void 0 : r.applink_treatment;
      if (c != null && c !== "web_only" && c !== "deeplink_with_web_fallback")
        return {
          isEligible: !1,
          reason:
            "applink_treatment_not_web_only_or_deeplink_with_web_fallback",
        };
      var m = ((a = i.creative) == null ? void 0 : a.product_set_id) != null;
      return m && c === "deeplink_with_web_fallback"
        ? { isEligible: !1, reason: "dynamic_ad_unsupported_applink_treatment" }
        : { isEligible: !0, reason: null };
    }
    function p(e, t, n, r) {
      var o = r.action_metadata.type.set(t, e);
      return r.enroll_status.set(n, o);
    }
    function _(e, t) {
      if (t == null) return e;
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.native_commerce_experience.product_browsing.enroll_status.get(
          e,
        ),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.native_commerce_experience.product_browsing.action_metadata.type.get(
          e,
        ),
        i = t ? "OPT_IN" : "OPT_OUT";
      return (
        o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
          {
            adgroupId: e.id,
            campaignGroupId: null,
            campaignId: null,
            entrypoint: null,
            experienceType: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceType.PRODUCT_BROWSING,
            funnelStep: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
            isAdPublished: null,
            isOptin: t,
            isToggleDisabled: null,
            nceAdsType: null,
            checkingSource: "manual_toggle",
          },
          !0,
          null,
          {
            old_enroll_status: n != null ? n : "none",
            old_action_type: a != null ? a : "none",
            new_enroll_status: i,
            new_action_type: "MANUAL",
          },
        ),
        p(
          e,
          "MANUAL",
          i,
          r("AdsAdgroupRecordAccessors").creative.destination_spec
            .native_commerce_experience.product_browsing,
        )
      );
    }
    function f(e, t, n, a) {
      if (t) return e;
      var i = a.action_metadata.type.get(e),
        l = a.enroll_status.get(e);
      return a ===
        r("AdsAdgroupRecordAccessors").creative.destination_spec
          .native_commerce_experience.product_browsing || l === "OPT_IN"
        ? (o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
            {
              adgroupId: e.id,
              campaignGroupId: null,
              campaignId: null,
              entrypoint: null,
              experienceType:
                a ===
                r("AdsAdgroupRecordAccessors").creative.destination_spec
                  .native_commerce_experience.product_browsing
                  ? o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.PRODUCT_BROWSING
                  : o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.NON_CTA_PRODUCT_BROWSING,
              funnelStep: o("NativeCommerceExperienceLoggingUtils")
                .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
              isAdPublished: null,
              isOptin: !1,
              isToggleDisabled: null,
              nceAdsType: null,
              checkingSource: n != null ? n : "unknown",
            },
            !1,
            "manual_override_ineligible",
            {
              old_enroll_status: l,
              old_action_type: i != null ? i : "none",
              new_enroll_status: "OPT_OUT",
              new_action_type: "DEFAULT_OFF",
            },
          ),
          p(e, "DEFAULT_OFF", "OPT_OUT", a))
        : (o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
            {
              adgroupId: e.id,
              campaignGroupId: null,
              campaignId: null,
              entrypoint: null,
              experienceType:
                a ===
                r("AdsAdgroupRecordAccessors").creative.destination_spec
                  .native_commerce_experience.product_browsing
                  ? o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.PRODUCT_BROWSING
                  : o("NativeCommerceExperienceLoggingUtils")
                      .NativeCommerceExperienceType.NON_CTA_PRODUCT_BROWSING,
              funnelStep: o("NativeCommerceExperienceLoggingUtils")
                .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
              isAdPublished: null,
              isOptin: !1,
              isToggleDisabled: null,
              nceAdsType: null,
              checkingSource: n != null ? n : "unknown",
            },
            !1,
            "manual_override_ineligible_opt_out",
            {
              old_enroll_status: l != null ? l : "none",
              old_action_type: i != null ? i : "none",
              new_enroll_status: "OPT_OUT",
              new_action_type: "MANUAL",
            },
          ),
          a.enroll_status.set("OPT_OUT", e));
    }
    function g(t, n, a, i, l, s, u) {
      var c,
        d,
        m,
        _ =
          (c = r("AdsAdgroupRecordAccessors").creative.product_set_id.get(t)) !=
          null
            ? c
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.associated_product_set_id.get(
                t,
              ),
        g = e(_),
        h = n.isEligible && g == null,
        y = s.action_metadata.type.get(t),
        C = s.enroll_status.get(t);
      if (y === "MANUAL") return f(t, h, l, s);
      var b = h ? "OPT_IN" : "OPT_OUT",
        v = h ? "DEFAULT" : "DEFAULT_OFF";
      return (
        o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
          {
            adgroupId: t.id,
            campaignGroupId: (d = a == null ? void 0 : a.id) != null ? d : null,
            campaignId: (m = i == null ? void 0 : i.id) != null ? m : null,
            entrypoint: null,
            experienceType: u,
            funnelStep: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
            isAdPublished: null,
            isOptin: h,
            isToggleDisabled: g != null,
            nceAdsType: null,
            checkingSource: l != null ? l : "unknown",
          },
          n == null ? void 0 : n.isEligible,
          n == null ? void 0 : n.reason,
          {
            old_enroll_status: C != null ? C : "none",
            old_action_type: y != null ? y : "none",
            new_enroll_status: b,
            new_action_type: v,
          },
        ),
        p(t, v, b, s)
      );
    }
    function h(e, t, n, a, i) {
      if (!r("gkx")("18849")) return e;
      var l = c()
        ? t != null && n != null
          ? m({ campaignGroup: t, campaign: n, adgroup: e }, i)
          : { isEligible: !1, reason: "null_campaign_group_or_campaign" }
        : {
            isEligible: !1,
            reason: "sensitive_ad_account_not_eligible_for_doi",
          };
      return g(
        e,
        l,
        t,
        n,
        a,
        r("AdsAdgroupRecordAccessors").creative.destination_spec
          .native_commerce_experience.product_browsing,
        o("NativeCommerceExperienceLoggingUtils").NativeCommerceExperienceType
          .PRODUCT_BROWSING,
      );
    }
    function y() {
      var e, t;
      if (!r("passAPlusCStickyOptOutForFastTrackGlobalishGK")("silent"))
        return !1;
      var n =
          (e = r("AdsUserSettingsProvider")().getData().first()) == null
            ? void 0
            : e.getValue(),
        o =
          n == null || (t = n.creative_feature_default_config) == null
            ? void 0
            : t.aplusc_sticky_opt_in_status;
      if (o == null) return !1;
      var a = o.find(function (e) {
        return e.key === "product_browsing";
      });
      return (a == null ? void 0 : a.value) === "OPTED_OUT";
    }
    function C(e, t, n, a, i) {
      if (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
        !o("AdsAPlusCSCJUtils").passNativeCommerceExperienceNonCTAGK() ||
        !o(
          "AdsAPlusCSCJUtils",
        ).isAdAccountSegmentEligibleForProductBrowsingNonCTA() ||
        y()
      )
        return e;
      var l =
        t != null && n != null
          ? m({ campaignGroup: t, campaign: n, adgroup: e }, i, !1)
          : { isEligible: !1, reason: "null_campaign_group_or_campaign" };
      return g(
        e,
        l,
        t,
        n,
        a,
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_browsing,
        o("NativeCommerceExperienceLoggingUtils").NativeCommerceExperienceType
          .NON_CTA_PRODUCT_BROWSING,
      );
    }
    function b(e, t, n, r, o, a, i) {
      if (t) return _(e, n);
      var l = h(e, r, o, a, i);
      return ((l = C(l, r, o, a, i)), l);
    }
    ((l.getProductBrowsingDisabledReason = e),
      (l.isEligibleToSeeProductBrowsingToggle = m),
      (l.maybeUpdateProductBrowsingSpec = b));
  },
  98,
);
