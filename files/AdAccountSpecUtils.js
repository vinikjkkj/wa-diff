__d(
  "AdAccountSpecUtils",
  [
    "AdAccountModeledReporting",
    "AdAccountPermissionTask",
    "AdAccountSize",
    "AdproAccountUserPermission",
    "AdsAPIAccountStatus",
    "AdsAPIPermissionsRoleMapping",
    "AdsAccountCapabilities",
    "AdsAccountDisableReason",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsSingleObjectiveColumnFlexingPresetsEnum",
    "AttributionEventType",
    "AttributionWindowDeprecationExperimentGroup",
    "AuthenticityCommercialVerificationBannerType",
    "AuthenticityCommercialVerificationStatus",
    "BrandSafetyContentTopic",
    "BusinessRestrictionReason",
    "BusinessVerificationStatus",
    "CountryAbbreviation",
    "FBLogger",
    "TypeCoercionUtils",
    "getJSEnumKeySafe",
    "getJSEnumSafe",
    "getMaybeJSEnumKeySafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce;
      if (e.__typename !== "AdAccount")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdAccount", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        account_currency_ratio_to_usd: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.account_currency_ratio_to_usd,
          "account_currency_ratio_to_usd",
          i.id,
        ),
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.legacy_account_id,
          "legacy_account_id",
          i.id,
        ),
        account_status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsAPIAccountStatus"), e.account_status),
          "account_status",
          i.id,
        ),
        ads_manager_beta_ai_recap_visible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ads_manager_beta_ai_recap_visible),
        ads_manager_beta_enrollment_status: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ads_manager_beta_enrollment_status),
        ads_manager_beta_has_opted_out: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ads_manager_beta_has_opted_out),
        ads_manager_beta_universal_composer_visible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ads_manager_beta_universal_composer_visible),
        adtrust_dsl: o("TypeCoercionUtils").coerceOptionalValue(e.adtrust_dsl),
        advertiser_verification_status: e.advertiser_verification_status
          ? o(
              "TypeCoercionUtils",
            ).coerceObjectWithNullAndEmptyArraysToUndefined({
              banner_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                r("getJSEnumSafe")(
                  r("AuthenticityCommercialVerificationBannerType"),
                  (t = e.advertiser_verification_status) == null
                    ? void 0
                    : t.banner_type,
                ),
                "advertiser_verification_status.banner_type",
                i.id,
              ),
              grace_period_ends_at: o("TypeCoercionUtils").coerceNonMaybeValue(
                o("TypeCoercionUtils").coerceMaybeNumberToString(
                  (n = e.advertiser_verification_status) == null
                    ? void 0
                    : n.grace_period_ends_at,
                ),
                "advertiser_verification_status.grace_period_ends_at",
                i.id,
              ),
              ufac_redirect_uri: o("TypeCoercionUtils").coerceNonMaybeValue(
                o("TypeCoercionUtils").coerceStringToURI(
                  (a = e.advertiser_verification_status) == null
                    ? void 0
                    : a.ufac_redirect_uri,
                ),
                "advertiser_verification_status.ufac_redirect_uri",
                i.id,
              ),
              verification_status: o("TypeCoercionUtils").coerceNonMaybeValue(
                r("getJSEnumSafe")(
                  r("AuthenticityCommercialVerificationStatus"),
                  (l = e.advertiser_verification_status) == null
                    ? void 0
                    : l.verification_status,
                ),
                "advertiser_verification_status.verification_status",
                i.id,
              ),
            })
          : void 0,
        agency_fee_config: o("TypeCoercionUtils").coerceOptionalValue(
          e != null && e.agency_fee_config
            ? {
                can_add_agency_fee_to_invoice:
                  (s = e.agency_fee_config) == null
                    ? void 0
                    : s.can_add_agency_fee_to_invoice,
                default_agency_fee_pct:
                  (u = e.agency_fee_config) == null
                    ? void 0
                    : u.default_agency_fee_pct,
                is_agency_fee_disabled:
                  (c = e.agency_fee_config) == null
                    ? void 0
                    : c.is_agency_fee_disabled,
                status: (d = e.agency_fee_config) == null ? void 0 : d.status,
              }
            : void 0,
        ),
        archived_adgroup_count: o("TypeCoercionUtils").coerceOptionalValue(
          e.archived_adgroup_count,
        ),
        archived_campaign_count: o("TypeCoercionUtils").coerceOptionalValue(
          e.archived_campaign_count,
        ),
        archived_campaign_group_count: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.archived_campaign_group_count),
        attr_window_deprecation_group: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AttributionWindowDeprecationExperimentGroup"),
            e.attr_window_deprecation_group,
          ),
        ),
        authorized_country_for_political_ads: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("CountryAbbreviation"),
            e.political_ad_account_authorized_country,
          ),
        ),
        average_daily_campaign_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(
            e.average_campaign_daily_budget,
          ),
        ),
        average_daily_campaign_group_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(
            e.average_campaign_group_daily_budget,
          ),
        ),
        average_lifetime_campaign_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(
            e.average_campaign_lifetime_budget,
          ),
        ),
        average_lifetime_campaign_group_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(
            e.average_campaign_group_lifetime_budget,
          ),
        ),
        brand_safety_content_filter_levels: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (m = e.brand_safety_content_filter_levels) == null
            ? void 0
            : m.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeEnum(
                  e,
                  o("AdsBrandSafetyContentFilterLevelConstants")
                    .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL,
                  "brand_safety_content_filter_levels[]",
                  i.id,
                );
              }),
        ),
        brand_safety_excluded_topics: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (p = e.brand_safety_excluded_topics) == null
            ? void 0
            : p.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(r("BrandSafetyContentTopic"), e),
                  "brand_safety_excluded_topics[]",
                  i.id,
                );
              }),
        ),
        business: o("TypeCoercionUtils").coerceMaybeAccountIDNamePair({
          id: (_ = e.ads_business) == null ? void 0 : _.id_for_display,
          name: (f = e.ads_business) == null ? void 0 : f.name,
        }),
        business_country_code: o(
          "TypeCoercionUtils",
        ).coerceEmptyStringToUndefined(e.business_country_code),
        business_restriction_reason: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("BusinessRestrictionReason"),
            e.business_restriction_reason,
          ),
        ),
        business_verification_status: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("BusinessVerificationStatus"),
            e.business_verification_status,
          ),
        ),
        call_ads_ad_account_similar_advertiser_budget_recommendation: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.call_ads_ad_account_similar_advertiser_budget_recommendation,
        ),
        can_bypass_fs_check: o("TypeCoercionUtils").coerceOptionalValue(
          e.can_bypass_funding_source,
        ),
        capabilities: o("TypeCoercionUtils").coerceNonMaybeValue(
          o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            (g = e.capabilities_legacy_slow) == null
              ? void 0
              : g.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(r("AdsAccountCapabilities"), e),
                    "capabilities_legacy_slow[]",
                    i.id,
                  );
                }),
          ),
          "capabilities_legacy_slow",
          i.id,
        ),
        cpas_campaign_default_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.cpas_campaign_default_budget),
        cpas_campaign_group_default_budget: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.cpas_campaign_group_default_budget),
        created_time: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.created_with_supported_timezone_offset,
          "created_with_supported_timezone_offset",
          i.id,
        ),
        ctwa_smb_enforcing_days_left: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ctwa_smb_enforcing_days_left),
        ctx_advertiser_sabr_lifetime_duration_recommendation: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.ctx_advertiser_sabr_lifetime_duration_recommendation,
        ),
        ctx_dfo_objective_defaults: o("TypeCoercionUtils").coerceOptionalValue(
          e.ctx_dfo_objective_defaults
            ? {
                objective: o("TypeCoercionUtils").coerceOptionalValue(
                  (h = e.ctx_dfo_objective_defaults) == null
                    ? void 0
                    : h.objective,
                ),
                optimization_goal: o("TypeCoercionUtils").coerceOptionalValue(
                  (y = e.ctx_dfo_objective_defaults) == null
                    ? void 0
                    : y.optimization_goal,
                ),
                page_id: o("TypeCoercionUtils").coerceOptionalValue(
                  (C = e.ctx_dfo_objective_defaults) == null
                    ? void 0
                    : C.page_id,
                ),
              }
            : void 0,
        ),
        ctx_flexible_format_targeting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ctx_flexible_format_targeting),
        currency: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.currency,
          "currency",
          i.id,
        ),
        default_dsa_beneficiary: o(
          "TypeCoercionUtils",
        ).coerceEmptyStringToUndefined(e.default_dsa_beneficiary),
        default_dsa_payor: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
          e.default_dsa_payor,
        ),
        default_unified_attribution_spec: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (b = e.default_unified_attribution_spec) == null
            ? void 0
            : b.map(function (e) {
                return {
                  event_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumKeySafe")(
                      r("AttributionEventType"),
                      e.event_type,
                    ),
                    "spec.event_type",
                    i.id,
                  ),
                  window_days: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.window_days,
                    "spec.window_days",
                    i.id,
                  ),
                };
              }),
        ),
        disable_reason: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsAccountDisableReason"),
            e.account_disabled_reason,
          ),
        ),
        dynamic_probation_dsl: o("TypeCoercionUtils").coerceOptionalValue(
          e.dynamic_probation_dsl,
        ),
        end_advertiser_name: o("TypeCoercionUtils").coerceOptionalValue(
          e.end_advertiser_name,
        ),
        flex_single_objective: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsSingleObjectiveColumnFlexingPresetsEnum"),
            e.flex_single_objective,
          ),
        ),
        funding_source: o("TypeCoercionUtils").coerceOptionalValue(
          e.funding_source_id,
        ),
        has_migrated_permissions: !0,
        has_purchase_optimization_eligible_page: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.has_purchase_optimization_eligible_page),
        has_value_rule_set: o("TypeCoercionUtils").coerceOptionalValue(
          e.has_value_rule_set,
        ),
        id: o("TypeCoercionUtils").coerceNonMaybeValue(
          o("TypeCoercionUtils").coerceIDToAccountID(e.legacy_account_id),
          "legacy_account_id",
          i.id,
        ),
        if_viewer_has_permission_to_advertise: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.if_viewer_has_permission_to_advertise),
        incremental_conversion_optimization_ad_studies: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (v = e.incremental_conversion_optimization_ad_studies) == null
            ? void 0
            : v.map(function (e) {
                var t, n;
                return {
                  ad_study_end_time: (n =
                    o("TypeCoercionUtils")).coerceMaybeNumberToString(
                    e.ad_study_end_time,
                  ),
                  ad_study_id: n.coerceNonMaybeValue(
                    e.ad_study_id,
                    "incremental_conversion_optimization_ad_studies[].ad_study_id",
                    i.id,
                  ),
                  ad_study_name: n.coerceNonMaybeValue(
                    e.ad_study_name,
                    "incremental_conversion_optimization_ad_studies[].ad_study_name",
                    i.id,
                  ),
                  ad_study_start_time: n.coerceMaybeNumberToString(
                    e.ad_study_start_time,
                  ),
                  ad_study_status: n.coerceNonMaybeValue(
                    e.ad_study_status,
                    "incremental_conversion_optimization_ad_studies[].ad_study_status",
                    i.id,
                  ),
                  cells:
                    (t = e.cells) == null
                      ? void 0
                      : t.map(function (e) {
                          return {
                            cell_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.cell_id,
                              "incremental_conversion_optimization_ad_studies[].cells[].cell_id",
                              i.id,
                            ),
                            cell_name: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.cell_name,
                              "incremental_conversion_optimization_ad_studies[].cells[].cell_name",
                              i.id,
                            ),
                          };
                        }),
                };
              }),
        ),
        io_number: o("TypeCoercionUtils").coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(e.io_number),
        ),
        is_attribution_spec_system_default: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_attribution_spec_system_default),
        is_ba_skip_delayed_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_ba_skip_delayed_eligible,
        ),
        is_biz_migration_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_biz_migration_eligible,
        ),
        is_business_allowed_to_advertise: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_business_allowed_to_advertise),
        is_business_verification_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_business_verification_eligible),
        is_closed_by_advertiser_compromise_bot: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_closed_by_advertiser_compromise_bot),
        is_ctx_advertiser: !1,
        is_du_flex_defaulting_opt_out_enabled: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_du_flex_defaulting_opt_out_enabled),
        is_eligible_for_ads_budgets_l2_flex_upsell: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_ads_budgets_l2_flex_upsell),
        is_eligible_for_advantage_plus_creative_regulated_category: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_advantage_plus_creative_regulated_category,
        ),
        is_expanded_shopless_awpt_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_expanded_shopless_awpt_eligible),
        is_mi_billing_info_updated: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_mi_billing_info_updated,
        ),
        is_mm_lite_api_enabled: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_mm_lite_api_enabled,
        ),
        is_new_advertiser: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.is_new_advertiser,
          "is_new_advertiser",
          i.id,
        ),
        is_omnichannel_campaign_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_omnichannel_campaign_eligible),
        is_pageless_ctwa_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_pageless_ctwa_eligible,
        ),
        is_pending_numbers_exposure_flag_enabled: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_pending_numbers_exposure_flag_enabled),
        is_placement_soft_opt_out_enabled: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_placement_soft_opt_out_enabled),
        is_prepay_account: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_prepay_account,
        ),
        is_self_report_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_self_report_eligible,
        ),
        is_shopless_awpt_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_shopless_awpt_eligible,
        ),
        is_simplified_creation_segment_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_simplified_creation_segment_eligible),
        is_tax_id_required: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_tax_id_required,
        ),
        is_tier_0: o("TypeCoercionUtils").coerceTrustTierIsZero(e.trust_tier),
        is_tier_0_full: o("TypeCoercionUtils").coerceTrustTierIsZero(
          e.trust_tier,
        ),
        is_tier_1: o("TypeCoercionUtils").coerceTrustTierIsOne(e.trust_tier),
        is_tier_restricted: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.is_tier_restricted,
          "is_tier_restricted",
          i.id,
        ),
        is_user_allowed_to_advertise: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_user_allowed_to_advertise),
        is_value_rules_smart_default_on: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_value_rules_smart_default_on),
        is_wa_lightweight_business: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_wa_lightweight_business,
        ),
        is_youth_ads_pao_basic_advertiser: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_youth_ads_pao_basic_advertiser),
        is_youth_ads_pao_basic_advertiser_announcement_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_youth_ads_pao_basic_advertiser_announcement_eligible,
        ),
        line_numbers: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (S = e.line_numbers) == null
            ? void 0
            : S.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  e,
                  "line_numbers[]",
                  i.id,
                );
              }),
        ),
        live_video_advertiser_details: e.live_video_advertiser_details
          ? o("TypeCoercionUtils").coerceNonMaybeValue(
              {
                ig_lva_default_duration_s: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (R = e.live_video_advertiser_details) == null
                    ? void 0
                    : R.ig_lva_default_duration_s,
                ),
                ig_lva_recommended_lifetime_budget:
                  (L = e.live_video_advertiser_details) != null &&
                  L.ig_lva_recommended_lifetime_budget
                    ? {
                        amount: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (E = e.live_video_advertiser_details) == null ||
                            (E = E.ig_lva_recommended_lifetime_budget) == null
                            ? void 0
                            : E.amount,
                          "live_video_advertiser_details.ig_lva_recommended_lifetime_budget.amount",
                          i.id,
                        ),
                        source: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (k = e.live_video_advertiser_details) == null ||
                            (k = k.ig_lva_recommended_lifetime_budget) == null
                            ? void 0
                            : k.source,
                          "live_video_advertiser_details.ig_lva_recommended_lifetime_budget.source",
                          i.id,
                        ),
                      }
                    : void 0,
                is_lva_toggle_on: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (I = e.live_video_advertiser_details) == null
                    ? void 0
                    : I.is_lva_toggle_on,
                  "live_video_advertiser_details.is_lva_toggle_on",
                  i.id,
                ),
                is_slva_pa_enabled: o("TypeCoercionUtils").coerceOptionalValue(
                  (T = e.live_video_advertiser_details) == null
                    ? void 0
                    : T.is_slva_pa_enabled,
                ),
                lva_default_budget: o("TypeCoercionUtils").coerceOptionalValue(
                  (D = e.live_video_advertiser_details) == null
                    ? void 0
                    : D.lva_default_budget,
                ),
                lva_default_duration_s: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (x = e.live_video_advertiser_details) == null
                    ? void 0
                    : x.lva_default_duration_s,
                ),
                should_default_current_live: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  ($ = e.live_video_advertiser_details) == null
                    ? void 0
                    : $.should_default_current_live,
                  "live_video_advertiser_details.should_default_current_live",
                  i.id,
                ),
                should_default_scheduled_live: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (P = e.live_video_advertiser_details) == null
                    ? void 0
                    : P.should_default_scheduled_live,
                  "live_video_advertiser_details.should_default_scheduled_live",
                  i.id,
                ),
                should_default_toggle_on_from_model: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (N = e.live_video_advertiser_details) == null
                    ? void 0
                    : N.should_default_toggle_on_from_model,
                  "live_video_advertiser_details.should_default_toggle_on_from_model",
                  i.id,
                ),
                should_show_lva_toggle: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (M = e.live_video_advertiser_details) == null
                    ? void 0
                    : M.should_show_lva_toggle,
                  "live_video_advertiser_details.should_show_lva_toggle",
                  i.id,
                ),
              },
              "live_video_advertiser_details",
              i.id,
            )
          : void 0,
        marketing_messages_account_settings: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.marketing_messages_account_settings
            ? {
                messenger_activation_status: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (w = e.marketing_messages_account_settings) == null
                    ? void 0
                    : w.messenger_activation_status,
                ),
              }
            : void 0,
        ),
        max_daily_budget:
          (A =
            (F = e.max_daily_budget) == null ? void 0 : F.amount_with_offset) !=
          null
            ? A
            : void 0,
        min_campaign_group_spend_cap: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          o("TypeCoercionUtils").coerceMaybeNumberToString(
            e.min_campaign_group_spend_cap,
          ),
          "min_campaign_group_spend_cap",
          i.id,
        ),
        min_daily_budget: o("TypeCoercionUtils").coerceNonMaybeValue(
          (O = e.min_daily_budget) == null ? void 0 : O.amount_with_offset,
          "min_daily_budget.amount_with_offset",
          i.id,
        ),
        min_live_boosting_budget: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.min_live_boosting_budget,
          "min_live_boosting_budget",
          i.id,
        ),
        modeled_reporting_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(
            r("AdAccountModeledReporting"),
            e.modeled_reporting_type,
          ),
          "modeled_reporting_type",
          i.id,
        ),
        moo_default_conversion_bid: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.moo_default_conversion_bid,
          "moo_default_conversion_bid",
          i.id,
        ),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(e.name, "name", i.id),
        offsite_clo_crm_integration_status: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.offsite_clo_crm_integration_status),
        offsite_clo_signal_status: o("TypeCoercionUtils").coerceOptionalValue(
          e.offsite_clo_signal_status,
        ),
        offsite_pixels_tos_accepted: !0,
        page_authorized_country_for_political_ads: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (B = e.page_authorized_country_for_political_ads) == null
            ? void 0
            : B.map(function (e) {
                return {
                  key: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.page_id,
                    "page_authorized_country_for_political_ads[].page_id",
                    i.id,
                  ),
                  value: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.country_code,
                    "page_authorized_country_for_political_ads[].country_code",
                    i.id,
                  ),
                };
              }),
        ),
        pages_in_authorizations: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (W = e.pages_in_authorizations) == null
            ? void 0
            : W.map(function (e) {
                return {
                  key: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.page_id,
                    "pages_in_authorizations[].page_id",
                    i.id,
                  ),
                  value: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.page_name,
                    "pages_in_authorizations[].page_name",
                    i.id,
                  ),
                };
              }),
        ),
        passback_attribution_spec: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (q = e.passback_attribution_spec) == null
            ? void 0
            : q.map(function (e) {
                return {
                  event_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumKeySafe")(
                      r("AttributionEventType"),
                      e.event_type,
                    ),
                    "spec.event_type",
                    i.id,
                  ),
                  window_days: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.window_days,
                    "spec.window_days",
                    i.id,
                  ),
                };
              }),
        ),
        preferred_value_rule_collection: e.preferred_value_rule_collection
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              id: o("TypeCoercionUtils").coerceNonMaybeValue(
                (U = e.preferred_value_rule_collection) == null ? void 0 : U.id,
                "preferred_value_rule_collection.id",
                i.id,
              ),
            })
          : void 0,
        purchase_optimization_eligible_page_id: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          o("TypeCoercionUtils").coerceMaybeStringToNumber(
            e.purchase_optimization_eligible_page_fbid,
          ),
        ),
        rf_spec: e.rf_spec
          ? o(
              "TypeCoercionUtils",
            ).coerceObjectWithNullAndEmptyArraysToUndefined({
              countries: Array.from(
                (V = (H = e.rf_spec) == null ? void 0 : H.countries) != null
                  ? V
                  : [],
              ),
              global_io_max_campaign_duration: o(
                "TypeCoercionUtils",
              ).coerceNonMaybeValue(
                (G = e.rf_spec) == null
                  ? void 0
                  : G.global_io_max_campaign_duration,
                "rf_spec.global_io_max_campaign_duration",
                i.id,
              ),
              max_campaign_duration: o(
                "TypeCoercionUtils",
              ).coerceToReachFrequencyCountrySpecObject(
                (z =
                  (j = e.rf_spec) == null ? void 0 : j.max_campaign_duration) !=
                  null
                  ? z
                  : [],
              ),
              max_days_to_finish: o(
                "TypeCoercionUtils",
              ).coerceToReachFrequencyCountrySpecObject(
                (K = (Q = e.rf_spec) == null ? void 0 : Q.max_days_to_finish) !=
                  null
                  ? K
                  : [],
              ),
              max_pause_without_prediction_rerun: o(
                "TypeCoercionUtils",
              ).coerceObjectToUndefined(
                Object.assign.apply(
                  Object,
                  [{}].concat(
                    ((X =
                      (Y = e.rf_spec) == null
                        ? void 0
                        : Y.max_pause_without_prediction_rerun) != null
                      ? X
                      : []
                    ).map(function (e) {
                      var t,
                        n = e.country_code,
                        r = e.pause_threshold.map(function (e) {
                          return {
                            minCampaignLength: e.min_campaign_length,
                            minTimeAfterPause: e.min_time_after_pause,
                            pauseMinutes: e.pause_minutes,
                          };
                        });
                      return n == null ? {} : ((t = {}), (t[n] = r), t);
                    }),
                  ),
                ),
              ),
              min_campaign_duration: o(
                "TypeCoercionUtils",
              ).coerceToReachFrequencyCountrySpecObject(
                (J =
                  (Z = e.rf_spec) == null ? void 0 : Z.min_campaign_duration) !=
                  null
                  ? J
                  : [],
              ),
              min_reach_limits: o(
                "TypeCoercionUtils",
              ).coerceToReachFrequencyCountrySpecObject(
                (ee =
                  (te = e.rf_spec) == null ? void 0 : te.min_reach_limits) !=
                  null
                  ? ee
                  : [],
              ),
            })
          : void 0,
        sales_segment_v2: o("TypeCoercionUtils").coerceOptionalValue(
          e == null ? void 0 : e.sales_segment_v2,
        ),
        segment: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(r("AdAccountSize"), e.advertiser_size),
        ),
        self_resolve_uri: o("TypeCoercionUtils").coerceOptionalValue(
          e.self_resolve_uri,
        ),
        show_sac_campaign_group_input: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.show_sac_campaign_group_input,
          "show_sac_campaign_group_input",
          i.id,
        ),
        tax_country: o("TypeCoercionUtils").coerceOptionalValue(e.tax_country),
        timezone_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e == null || (ne = e.timezone_info) == null ? void 0 : ne.timezone_id,
          "timezone_info.timezone_id",
          i.id,
        ),
        timezone_name: o("TypeCoercionUtils").coerceNonMaybeValue(
          e == null || (re = e.timezone_info) == null ? void 0 : re.timezone,
          "timezone_info.timezone",
          i.id,
        ),
        timezone_offset_hours_utc: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.timezone_offset_hours_utc,
          "timezone_offset_hours_utc",
          i.id,
        ),
        tos_accepted: o("TypeCoercionUtils").coerceObjectToUndefined(
          Object.assign.apply(
            Object,
            [{}].concat(
              ((oe = e.tos_accepted) != null ? oe : []).map(function (e) {
                var t;
                return e.name == null
                  ? {}
                  : ((t = {}), (t[e.name] = e.version), t);
              }),
            ),
          ),
        ),
        user_settings: e.user_settings_without_update
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              id: o("TypeCoercionUtils").coerceNonMaybeValue(
                (ae = e.user_settings_without_update) == null ? void 0 : ae.id,
                "user_settings_without_update.id",
                i.id,
              ),
            })
          : void 0,
        user_tos_accepted: o("TypeCoercionUtils").coerceObjectToUndefined(
          Object.assign.apply(
            Object,
            [{}].concat(
              ((ie = e.user_tos_accepted) != null ? ie : []).map(function (e) {
                var t;
                return e.name == null
                  ? {}
                  : ((t = {}), (t[e.name] = e.version), t);
              }),
            ),
          ),
        ),
        userpermissions: o(
          "TypeCoercionUtils",
        ).coerceObjectWithNullAndEmptyArraysToUndefined({
          data:
            (le =
              e == null || (se = e.user_permissions) == null
                ? void 0
                : se.map(function (e) {
                    var t;
                    return {
                      role: o("TypeCoercionUtils").coerceNonMaybeValue(
                        (t = r("getMaybeJSEnumKeySafe")(
                          r("AdsAPIPermissionsRoleMapping"),
                          e.role,
                        )) != null
                          ? t
                          : r("getMaybeJSEnumKeySafe")(
                              r("AdAccountPermissionTask"),
                              e.role,
                            ),
                        "user_permissions[].role",
                        i.id,
                      ),
                      tasks: o("TypeCoercionUtils").coerceOptionalValue(
                        e.tasks.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            r("getJSEnumKeySafe")(
                              r("AdAccountPermissionTask"),
                              e,
                            ),
                            "user_permissions[].task",
                            i.id,
                          );
                        }),
                      ),
                      user: o("TypeCoercionUtils").coerceOptionalValue(
                        o("TypeCoercionUtils").coerceMaybeAccountIDNamePair(
                          e.user,
                        ),
                      ),
                    };
                  })) != null
              ? le
              : [],
        }),
        users: o(
          "TypeCoercionUtils",
        ).coerceObjectWithNullAndEmptyArraysToUndefined({
          data:
            (ue =
              e == null || (ce = e.permitted_ad_account_users) == null
                ? void 0
                : ce.map(function (e) {
                    return {
                      id: o("TypeCoercionUtils").coerceNonMaybeValue(
                        o("TypeCoercionUtils").coerceMaybeNumberToString(
                          e == null ? void 0 : e.user_id,
                        ),
                        "permitted_ad_account_users[].user_id",
                        i.id,
                      ),
                      name: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                        e == null ? void 0 : e.name,
                      ),
                      permissions: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        e == null
                          ? void 0
                          : e.permissions.map(function (e) {
                              return o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdproAccountUserPermission"),
                                  e,
                                ),
                                "permitted_ad_account_users[].permissions[]",
                                i.id,
                              );
                            }),
                      ),
                      role: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e == null ? void 0 : e.role,
                        "permitted_ad_account_users[].role",
                        i.id,
                      ),
                      tasks: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e == null
                          ? void 0
                          : e.tasks.map(function (e) {
                              return o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumKeySafe")(
                                  r("AdAccountPermissionTask"),
                                  e,
                                ),
                                "permitted_ad_account_users[].tasks[]",
                                i.id,
                              );
                            }),
                        "permitted_ad_account_users[].tasks",
                        i.id,
                      ),
                    };
                  })) != null
              ? ue
              : [],
        }),
        value_rules_placement_suggested_spec: o(
          "TypeCoercionUtils",
        ).coerceValueRulesSpec(e.value_rules_placement_suggested_spec),
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
