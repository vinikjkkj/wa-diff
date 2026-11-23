__d(
  "ProductBrowsingAdsUtils",
  [
    "fbt",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPlusCSCJUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAppExperiencesUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsBwICampaignGroupUtils",
    "AdsCollectionsAdUtils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsIsXXCreationPackageUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsOfferState",
    "AdsPromotedObjectTypes",
    "AdsRegulatedCategoryUtils",
    "AdsSensitiveVerticalUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AgenticCheckoutAdsUtils",
    "NativeCommerceExperienceAdsUtils",
    "NativeCommerceExperienceLoggingUtils",
    "adsCampaignGetOfferStateType",
    "catalogEnrollTypesToIgnoreForPE",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      return e != null
        ? null
        : m()
          ? f(t, n)
            ? null
            : o("NativeCommerceExperienceAdsUtils")
                .NativeCommerceExperienceOptinIneligibilityReason
                .CATALOG_NOT_SELECTED_NOR_FO_ENABLED
          : o("NativeCommerceExperienceAdsUtils")
              .NativeCommerceExperienceOptinIneligibilityReason
              .CATALOG_NOT_SELECTED;
    }
    var u = s._(/*BTDS*/ ""),
      c = s._(/*BTDS*/ "");
    function d(e) {
      return e == null
        ? null
        : e ===
            o("NativeCommerceExperienceAdsUtils")
              .NativeCommerceExperienceOptinIneligibilityReason
              .CATALOG_NOT_SELECTED_NOR_FO_ENABLED
          ? c
          : e ===
                o("NativeCommerceExperienceAdsUtils")
                  .NativeCommerceExperienceOptinIneligibilityReason
                  .OFFSITE_IAB_CHECKOUT ||
              e ===
                o("NativeCommerceExperienceAdsUtils")
                  .NativeCommerceExperienceOptinIneligibilityReason
                  .CATALOG_NOT_MATCHING ||
              e ===
                o("NativeCommerceExperienceAdsUtils")
                  .NativeCommerceExperienceOptinIneligibilityReason
                  .CATALOG_NOT_SELECTED
            ? u
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m() {
      return r("gkx")("26764") === !0;
    }
    function p() {
      return r("gkx")("961") === !0;
    }
    function _() {
      return p();
    }
    function f(e, t) {
      return (
        m() &&
        o("AdsAppExperiencesUtils").isFeaturedOfferingDataOptedInFromSpec(e, t)
      );
    }
    function g(e) {
      if (!m()) return !1;
      var t = e.adgroup,
        n = e.campaign,
        r = e.campaignGroup;
      return (
        (o("AdsAppExperiencesUtils").isFeaturedOfferingDataOptedIn(t) ||
          o("AdsAppExperiencesUtils").isWebsiteMediaOptedIn(t)) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(t, !0) &&
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).isEligibleForWebsiteMediaByCampaignAndAdgroup(n, r, t)
      );
    }
    function h(e) {
      return (
        e === "external" ||
        e === "website_and_shops" ||
        e == null ||
        e === "none"
      );
    }
    function y(e) {
      return (
        e == null ||
        e === r("AdsPromotedObjectTypes").PIXEL ||
        e === r("AdsPromotedObjectTypes").WEBSITE
      );
    }
    function C() {
      return r("justknobx")._("3941")
        ? !0
        : !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals();
    }
    function b() {
      return C() && r("justknobx")._("826");
    }
    function v() {
      return r("justknobx")._("3947")
        ? !0
        : !o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals();
    }
    function S(e, t, n) {
      var r, a;
      if ((n === void 0 && (n = !0), n && !v()))
        return {
          isEligible: !1,
          reason: "sensitive_ad_account_is_not_eligible_to_see_the_cta_toggle",
        };
      var i = e.adgroup,
        l = e.campaign,
        s = e.campaignGroup;
      if (n && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(i)) {
        if (!p())
          return {
            isEligible: !1,
            reason: "existing_post_no_destination_card",
          };
        var u = I(e, t);
        return { isEligible: u == null, reason: u };
      }
      if (!E(s == null ? void 0 : s.objective))
        return { isEligible: !1, reason: "objective_not_supported" };
      if (!o("NativeCommerceExperienceAdsUtils").isWebsiteCampaign(l))
        return { isEligible: !1, reason: "not_website_campaign" };
      if (!y(l.conversion_locations))
        return { isEligible: !1, reason: "conversion_location_not_supported" };
      if (!h(t))
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
      var d = ((a = i.creative) == null ? void 0 : a.product_set_id) != null;
      return d && c === "deeplink_with_web_fallback"
        ? { isEligible: !1, reason: "dynamic_ad_unsupported_applink_treatment" }
        : { isEligible: !0, reason: null };
    }
    function R(e, t) {
      return (
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup) &&
        S(e, t).isEligible
      );
    }
    function L(e) {
      var t,
        n,
        r = e == null ? void 0 : e.product_set_id;
      if (r != null) return r;
      var a = e == null ? void 0 : e.creative_sourcing_spec,
        i =
          a == null ||
          (t = a.catalog) == null ||
          (t = t.action_metadata) == null
            ? void 0
            : t.type;
      return i != null &&
        o(
          "catalogEnrollTypesToIgnoreForPE",
        ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(i)
        ? null
        : (n = a == null ? void 0 : a.associated_product_set_id) != null
          ? n
          : null;
    }
    function E(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        e === r("AdsAPIObjectives").WEBSITE_CONVERSIONS
      );
    }
    function k(e) {
      return (
        e != null &&
        r("justknobx")._("4143") &&
        o("AdsRegulatedCategoryUtils").isAdsRegulatedCategory(e)
      );
    }
    function I(e, t) {
      var n = e.adgroup,
        a = e.campaignGroup;
      if (!o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n))
        return "not_existing_post";
      if (!v())
        return "sensitive_ad_account_is_not_eligible_to_see_the_cta_toggle";
      if (!E(a == null ? void 0 : a.objective))
        return "objective_not_supported";
      if (
        o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e) !==
        r("AdsAPIObjectives").OUTCOME_SALES
      )
        return "existing_post_not_outcome_sales";
      if (k(a)) return "special_ad_category";
      var i = S(e, t, !1);
      return i.isEligible
        ? o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e) !==
          r("AdsPromotedObjectTypes").PIXEL
          ? "existing_post_promoted_object_not_pixel"
          : r("adsCampaignGetOfferStateType")(e.campaign) !==
              r("AdsOfferState").NO_OFFER
            ? "existing_post_campaign_has_offer"
            : L(n.creative) == null
              ? "no_server_usable_product_source"
              : null
        : i.reason;
    }
    function T(e, t) {
      if (!A(e.adgroup)) return "existing_post_not_loaded";
      if (
        r("adsCampaignGetOfferStateType")(e.campaign) !==
        r("AdsOfferState").NO_OFFER
      )
        return "campaign_has_offer";
      var n = o("AdsUEditorAdgroupAdObjectsUtils").getCommonAdgroupEditorPivots(
          e,
          !1,
          !1,
        ),
        a = n.creativeFormat,
        i = n.objective,
        l = n.promotedObjectType;
      return i !== r("AdsAPIObjectives").CONVERSIONS ||
        l !== r("AdsPromotedObjectTypes").PIXEL ||
        a !== r("AdsUEditorAdgroupCreativeFormat").EXISTING_POST
        ? "not_sales_website_existing_post_route"
        : o("AdsBwICampaignGroupUtils").isBwICampaignGroup(e.campaignGroup)
          ? "bwi_campaign_group"
          : o("AdsIsXXCreationPackageUtils").isNAACCreationPackage(
                e.campaignGroup,
              )
            ? "naac_creation_package"
            : t == null
              ? "link_type_unknown"
              : null;
    }
    function D(e, t) {
      var n;
      return ((n = T(e, t)) != null ? n : I(e, t)) == null;
    }
    function x(e, t) {
      var n = e.adgroup,
        r = e.campaignGroup;
      if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n))
        return "existing_post";
      var a = S(e, t);
      return a.isEligible
        ? k(r)
          ? "special_ad_category"
          : L(n.creative) == null
            ? "no_server_usable_product_source"
            : null
        : a.reason;
    }
    function $(e, t, n, r) {
      var o = r.action_metadata.type.set(t, e);
      return r.enroll_status.set(n, o);
    }
    function P(e, t, n, a, i, l, s) {
      var u, c, d, m;
      if (t == null) return e;
      var p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.native_commerce_experience.product_browsing.enroll_status.get(
          e,
        ),
        _ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.destination_spec.native_commerce_experience.product_browsing.action_metadata.type.get(
          e,
        ),
        f = t ? "OPT_IN" : "OPT_OUT",
        g =
          n != null && a != null
            ? S({ campaignGroup: n, campaign: a, adgroup: e }, i)
            : null;
      return (
        o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
          {
            adgroupId: e.id,
            campaignGroupId: (u = n == null ? void 0 : n.id) != null ? u : null,
            campaignId: (c = a == null ? void 0 : a.id) != null ? c : null,
            entrypoint: null,
            experienceType: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceType.PRODUCT_BROWSING,
            funnelStep: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
            isAdPublished: l,
            isOptin: t,
            isToggleDisabled: null,
            nceAdsType: null,
            checkingSource: "manual_toggle",
          },
          (d = g == null ? void 0 : g.isEligible) != null ? d : !0,
          (m = g == null ? void 0 : g.reason) != null ? m : null,
          {
            old_enroll_status: p != null ? p : "none",
            old_action_type: _ != null ? _ : "none",
            new_enroll_status: f,
            new_action_type: "MANUAL",
            is_existing_post: F(
              e,
              o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
            ),
            surface: s != null ? s : null,
          },
        ),
        $(
          e,
          "MANUAL",
          f,
          r("AdsAdgroupRecordAccessors").creative.destination_spec
            .native_commerce_experience.product_browsing,
        )
      );
    }
    function N(e, t, n, a, i) {
      if (t) return e;
      var l = a.action_metadata.type.get(e),
        s = a.enroll_status.get(e);
      return a ===
        r("AdsAdgroupRecordAccessors").creative.destination_spec
          .native_commerce_experience.product_browsing || s === "OPT_IN"
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
              isAdPublished: i.isAdPublished,
              isOptin: !1,
              isToggleDisabled: null,
              nceAdsType: null,
              checkingSource: n != null ? n : "unknown",
            },
            !1,
            "manual_override_ineligible",
            {
              old_enroll_status: s,
              old_action_type: l != null ? l : "none",
              new_enroll_status: "OPT_OUT",
              new_action_type: "DEFAULT_OFF",
              is_existing_post: i.isExistingPost,
            },
          ),
          $(e, "DEFAULT_OFF", "OPT_OUT", a))
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
              isAdPublished: i.isAdPublished,
              isOptin: !1,
              isToggleDisabled: null,
              nceAdsType: null,
              checkingSource: n != null ? n : "unknown",
            },
            !1,
            "manual_override_ineligible_opt_out",
            {
              old_enroll_status: s != null ? s : "none",
              old_action_type: l != null ? l : "none",
              new_enroll_status: "OPT_OUT",
              new_action_type: "MANUAL",
              is_existing_post: i.isExistingPost,
            },
          ),
          a.enroll_status.set("OPT_OUT", e));
    }
    function M(e) {
      var t = e.config,
        n = e.isExistingPost,
        r = e.isLoaded,
        o = e.isNewAdgroup,
        a = e.isSurfaceGKOn;
      return n
        ? a
          ? o !== !0
            ? t || !r
              ? { shouldSkip: !0, keepManual: t, defaultOn: !1 }
              : { shouldSkip: !1, keepManual: !1, defaultOn: !1 }
            : {
                shouldSkip: !1,
                keepManual: t,
                defaultOn:
                  t && e.isCardRouteEligible && e.isExistingPostDOIOn(),
              }
          : { shouldSkip: !1, keepManual: !1, defaultOn: !1 }
        : { shouldSkip: !1, keepManual: t, defaultOn: t };
    }
    function w(e) {
      return e === !0 ? !1 : null;
    }
    function A(e) {
      var t = e.creative;
      return (
        (t == null ? void 0 : t.object_story_id) != null ||
        (t == null ? void 0 : t.source_instagram_media_id) != null ||
        (t == null ? void 0 : t.source_facebook_post_id) != null ||
        (t == null ? void 0 : t.object_id) != null ||
        o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(e)
      );
    }
    function F(e, t) {
      return t ? (A(e) ? !0 : null) : !1;
    }
    function O(e, t, n, r) {
      var o = e.creative,
        a = t != null && n != null && A(e);
      return (
        a &&
        (r === "no_server_usable_product_source"
          ? (o == null ? void 0 : o.creative_sourcing_spec) != null
          : r === "objective_not_supported"
            ? (t == null ? void 0 : t.objective) != null
            : !0)
      );
    }
    var B = new Set(["DEFAULT", "DEFAULT_OFF", "STICKY"]);
    function W(t, n, a, i, l, s, u, c, d, m) {
      var p, _, f;
      m === void 0 && (m = !1);
      var h =
          (p = r("AdsAdgroupRecordAccessors").creative.product_set_id.get(t)) !=
          null
            ? p
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.associated_product_set_id.get(
                t,
              ),
        y =
          i != null &&
          a != null &&
          g({ adgroup: t, campaign: i, campaignGroup: a }),
        C = y ? null : e(h),
        v = n.isEligible && C == null,
        S =
          c == null
            ? { shouldSkip: !1, keepManual: v, defaultOn: v }
            : M(
                babelHelpers.extends({}, c, {
                  config: v,
                  isExistingPostDOIOn: b,
                }),
              ),
        R = S.defaultOn,
        L = S.keepManual,
        E = S.shouldSkip;
      if (E) return t;
      var k = s.action_metadata.type.get(t),
        I = s.enroll_status.get(t);
      if (k === "MANUAL") return N(t, L, l, s, d);
      if (m && I != null && !B.has(k)) return t;
      var T = R && !m,
        D = T ? "OPT_IN" : "OPT_OUT",
        x = T ? "DEFAULT" : "DEFAULT_OFF";
      return (
        o("NativeCommerceExperienceLoggingUtils").logNCEEligibilityCheck(
          {
            adgroupId: t.id,
            campaignGroupId: (_ = a == null ? void 0 : a.id) != null ? _ : null,
            campaignId: (f = i == null ? void 0 : i.id) != null ? f : null,
            entrypoint: null,
            experienceType: u,
            funnelStep: o("NativeCommerceExperienceLoggingUtils")
              .NativeCommerceExperienceFunnelStep.ELIGIBILITY_CHECK,
            isAdPublished: d.isAdPublished,
            isOptin: T,
            isToggleDisabled: C != null,
            nceAdsType: null,
            checkingSource: l != null ? l : "unknown",
          },
          n == null ? void 0 : n.isEligible,
          n == null ? void 0 : n.reason,
          {
            old_enroll_status: I != null ? I : "none",
            old_action_type: k != null ? k : "none",
            new_enroll_status: D,
            new_action_type: x,
            is_existing_post: d.isExistingPost,
          },
        ),
        $(t, x, D, s)
      );
    }
    function q(e, t, n, a, i, l, s) {
      if (!r("gkx")("18849")) return e;
      var u = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
        c = u && p(),
        d =
          !c && !C()
            ? {
                isEligible: !1,
                reason: "sensitive_ad_account_not_eligible_for_doi",
              }
            : t != null && n != null
              ? S({ campaignGroup: t, campaign: n, adgroup: e }, i)
              : { isEligible: !1, reason: "null_campaign_group_or_campaign" },
        m = l === !0 && !o("AdsAPIAdgroupRecordUtils").isDuplicatedAdgroup(e),
        _ =
          c && m && t != null && n != null
            ? { adgroup: e, campaign: n, campaignGroup: t }
            : null,
        f = _ == null || D(_, s);
      return W(
        e,
        d,
        t,
        n,
        a,
        r("AdsAdgroupRecordAccessors").creative.destination_spec
          .native_commerce_experience.product_browsing,
        o("NativeCommerceExperienceLoggingUtils").NativeCommerceExperienceType
          .PRODUCT_BROWSING,
        {
          isCardRouteEligible: f,
          isExistingPost: u,
          isSurfaceGKOn: c,
          isNewAdgroup: m,
          isLoaded: O(e, t, n, d.reason),
        },
        { isAdPublished: w(l), isExistingPost: F(e, u) },
      );
    }
    function U(e, t, n, a, i, l) {
      if (
        o(
          "AdsSensitiveVerticalUtils",
        ).isAdAccountInPharmaOrSensitiveVertical() ||
        o("AdsSensitiveVerticalUtils").isAdAccountLuxuryVertical() ||
        !o("AdsAPlusCSCJUtils").passNativeCommerceExperienceNonCTAGK() ||
        !o(
          "AdsAPlusCSCJUtils",
        ).isAdAccountSegmentEligibleForProductBrowsingNonCTA()
      )
        return e;
      var s =
        t != null && n != null
          ? S({ campaignGroup: t, campaign: n, adgroup: e }, i, !1)
          : { isEligible: !1, reason: "null_campaign_group_or_campaign" };
      return W(
        e,
        s,
        t,
        n,
        a,
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_browsing,
        o("NativeCommerceExperienceLoggingUtils").NativeCommerceExperienceType
          .NON_CTA_PRODUCT_BROWSING,
        null,
        {
          isAdPublished: l,
          isExistingPost: F(
            e,
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e),
          ),
        },
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "product_browsing",
        ) ||
          o(
            "AdsCreativeEnrollmentDefaultOnStoreUtils",
          ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount(
            "product_browsing",
          ),
      );
    }
    function V(e, t, n, r, a, i, l, s, u, c) {
      var d = w(s);
      if (t)
        return o("AgenticCheckoutAdsUtils").clearAgenticCheckoutIfIneligible(
          P(e, n, r, a, l, d, c),
        );
      var m = q(e, r, a, i, l, s, u);
      return (
        (m = U(m, r, a, i, l, d)),
        o("AgenticCheckoutAdsUtils").clearAgenticCheckoutIfIneligible(m)
      );
    }
    ((l.getProductBrowsingDisabledReason = e),
      (l.getProductBrowsingDisabledMessage = d),
      (l.isProductBrowsingCTAExistingPostGKOn = _),
      (l.isContextualLinksProductSource = f),
      (l.isWebsiteHighlightsContextualLinksOptedIn = g),
      (l.isExistingPostProductBrowsingCTADefaultOptInOn = b),
      (l.isEligibleToSeeProductBrowsingToggle = S),
      (l.isEligibleToSeeProductBrowsingToggleOutsideExistingPosts = R),
      (l.getProductBrowsingServerUsableProductSetID = L),
      (l.isProductBrowsingSupportedObjective = E),
      (l.isProductBrowsingCTAHiddenForSpecialAdCategory = k),
      (l.getExistingPostProductBrowsingCTAIneligibilityReason = I),
      (l.getExistingPostDestinationCardRouteIneligibilityReason = T),
      (l.isExistingPostDestinationCardEligible = D),
      (l.getAppFallbackProductBrowsingCTAIneligibilityReason = x),
      (l.getProductBrowsingCTADefaultOptInGates = M),
      (l.hasExistingPostSignal = A),
      (l.maybeUpdateProductBrowsingSpec = V));
  },
  226,
);
