__d(
  "AdCampaignSpecUtil",
  [
    "AEMv2AdCampaignAttribution",
    "AdCampaignConversionMultiEventProducts",
    "AdCampaignDestination",
    "AdCampaignDestinationAutomaticManual",
    "AdLearningStageExitReasonUtils.facebook",
    "AdPostConversionAttributeType",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIBidConstraintSource",
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignTargetingConsolidation",
    "AdsAPICostBiddingModes",
    "AdsAPIDevicePlatform",
    "AdsAPIFacebookPosition",
    "AdsAPIFullFunnelExplorationMode",
    "AdsAPIInstagramPosition",
    "AdsAPIMarketingGoal",
    "AdsAPIMessengerPosition",
    "AdsAPIObjectives",
    "AdsAPIOculusPosition",
    "AdsAPIOptimizationGoals",
    "AdsAPIOptimizationSubEvent",
    "AdsAPIPacingType",
    "AdsAPIPublisherPlatform",
    "AdsAPITargetAppInstallState",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBrandSafetyExcludeContentType",
    "AdsCampaignPlacementsFieldsValueHelper",
    "AdsCustomAudienceLabelAPI",
    "AdsDeliveryBiddingStatus",
    "AdsDeliveryInsightsLearningStageStatus",
    "AdsEffectiveStatus",
    "AdsFrequencyControlSpecsCoercionUtils",
    "AdsPENumericStringFieldUtils",
    "AdsPageTypes",
    "AdsPromotedObjectTypeVariation",
    "AdsPromotedObjectTypes",
    "AdsRegionalRegulatedCategory",
    "AdsTargetingEducation",
    "AdsTargetingGender",
    "AdsTargetingInterestedIn",
    "AdsTargetingRelationship",
    "AdsUserEvent",
    "AdsWirelessCarriers",
    "AttributionEventType",
    "CatalogBasedTargetingGeoTargetingType",
    "FBLogger",
    "LeadAdsFollowUpEvent",
    "LeadAdsFormEventSourceType",
    "LeadAdsOffsiteConversionType",
    "LeadAdsQualityVolumeSetting",
    "LookalikeType",
    "OffsiteCustomEventType",
    "PagePoliticalViewTypes",
    "ProductSetOptimizationSetting",
    "ShopsAdsOnboardingState",
    "TargetingAutomationIndividualSettingStatusEnum",
    "TargetingAutomationTypesEnum",
    "TargetingRelaxationConstants",
    "TargetingRelaxationTypesEnum",
    "TypeCoercionUtils",
    "ValueAdjustmentRuleAdjustmentSignType",
    "XFBAdCampaignGoalTypeUtils.facebook",
    "XFBAttributionCountUtils.facebook",
    "areEqual",
    "enumUtils",
    "getJSEnumKeySafe",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["custom_event_type_enum"],
      s,
      u = void 0,
      c = void 0,
      d = 65,
      m = 18;
    function p(e, t) {
      var n,
        a,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        v,
        R,
        L,
        I,
        T,
        D,
        x,
        $,
        P,
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
        te;
      if (e.__typename !== "AdCampaign")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaign", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      var ne = {
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          (n = e.ad_account) == null ? void 0 : n.legacy_account_id,
          "ad_account.legacy_account_id",
          i.id,
        ),
        ad_count: e.adgroup_count,
        ad_keywords: C(e.ad_keywords),
        adaptive_geo_exclusion_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.adaptive_geo_exclusion_eligible),
        adgroup_active_study_ids:
          (a =
            (l = e.adgroup_active_studies) == null ||
            (l = l.map(function (e) {
              return e.id;
            })) == null
              ? void 0
              : l.filter(Boolean)) != null
            ? a
            : [],
        adset_schedule: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (s = e.campaign_schedule) == null
            ? void 0
            : s.map(function (e) {
                return o("TypeCoercionUtils").convertScheduleToDayPart(e);
              }),
        ),
        anchor_click_through_attribution_window_seconds: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.anchor_click_through_attribution_window_seconds,
        ),
        anchor_engaged_view_attribution_window_seconds: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.anchor_engaged_view_attribution_window_seconds),
        anchor_view_through_attribution_window_seconds: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.anchor_view_through_attribution_window_seconds),
        asset_feed_id: e.asset_feed_id,
        asset_feed_optimization_type: u,
        attribution_count_type: o("XFBAttributionCountUtils.facebook").toJSEnum(
          e.attribution_count_type,
        ),
        attribution_spec: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (c = e.attribution_spec) == null
            ? void 0
            : c.map(function (e) {
                return {
                  event_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumKeySafe")(
                      r("AttributionEventType"),
                      e.event_type,
                    ),
                    "attribution_spec[].event_type",
                    i.id,
                  ),
                  window_days: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.window_days,
                    "attribution_spec[].window_days",
                    i.id,
                  ),
                };
              }),
        ),
        automatic_manual_state: o("TypeCoercionUtils").coerceOptionalValue(
          r("AdCampaignDestinationAutomaticManual").cast(
            e.automatic_manual_state,
          ),
        ),
        bid_adjustments: S(e.bid_adjustments),
        bid_amount: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          M((d = e.bid_amount) == null ? void 0 : d.offset_amount),
        ),
        bid_constraint_source: o("TypeCoercionUtils").coerceOptionalValue(
          o("enumUtils").coerceKey(
            e.bid_constraint_source == null ? null : e.bid_constraint_source,
            r("AdsAPIBidConstraintSource"),
          ),
        ),
        bid_constraints:
          ((m = e.bid_constraints) == null ? void 0 : m.roas_average_floor) !=
          null
            ? {
                roas_average_floor: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.bid_constraints.roas_average_floor,
                  "bid_constraints.roas_average_floor",
                  i.id,
                ),
              }
            : void 0,
        bid_info: u,
        bid_strategy: o("TypeCoercionUtils").coerceOptionalValue(
          o("enumUtils").coerceKey(e.bid_strategy, r("AdsAPIBidStrategies")),
        ),
        bid_type: u,
        billing_event: o("TypeCoercionUtils").coerceNonMaybeValue(
          o("enumUtils").coerceKey(e.billing_event, r("AdsAPIBillingEvents")),
          "billing_event",
          i.id,
        ),
        biz_ai_enabled_state: e.biz_ai_enabled_state,
        brand_safety_config:
          e.brand_safety_config != null &&
          (e.brand_safety_config.comment_moderation_filter != null ||
            e.brand_safety_config.facebook_comment_moderation_filter != null ||
            e.brand_safety_config.instagram_comment_moderation_filter != null ||
            e.brand_safety_config.threads_comment_moderation_filter != null)
            ? {
                comment_moderation_filter:
                  e.brand_safety_config.comment_moderation_filter,
                fb_comment_moderation_filter:
                  e.brand_safety_config.facebook_comment_moderation_filter,
                ig_comment_moderation_filter:
                  e.brand_safety_config.instagram_comment_moderation_filter,
                threads_comment_moderation_filter:
                  e.brand_safety_config.threads_comment_moderation_filter,
              }
            : void 0,
        budget_pool_membership: E(e.budget_pool_membership),
        budget_remaining: N(e.budget_remaining),
        budget_scaling_budget_multiplier_default:
          e.budget_scaling_budget_multiplier_default,
        budget_scaling_cost_target: e.budget_scaling_cost_target,
        budget_scaling_cost_target_default:
          e.budget_scaling_cost_target_default,
        budget_scaling_extra_budget: e.budget_scaling_extra_budget,
        budget_split_metadata_id: u,
        calling_settings:
          e.calling_settings != null
            ? {
                call_forwarding: e.calling_settings.call_forwarding,
                call_transcript: e.calling_settings.call_transcript,
              }
            : void 0,
        campaign_active_time: o("TypeCoercionUtils").coerceMaybeNumberToString(
          e.campaign_active_time,
        ),
        campaign_attribution: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AEMv2AdCampaignAttribution"),
            e.campaign_attribution,
          ),
        ),
        campaign_creation_source: u,
        campaign_goal: b(e.campaign_goal),
        campaign_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_campaign_group_id,
          "ad_campaign_group_id",
          i.id,
        ),
        campaign_targeting_consolidation: o("enumUtils").coerceNullable(
          e.campaign_targeting_conslidation,
          r("AdsAPICampaignTargetingConsolidation"),
        ),
        catalog_vertical: e.catalog_vertical,
        conversion_goal_id: e.conversion_goal_id,
        conversion_location: u,
        conversion_locations: o("enumUtils").coerceKey(
          e.conversion_locations,
          r("AdsPromotedObjectTypes"),
        ),
        conversion_value_expression_spec: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (p = e.conversion_value_expression_spec) == null
            ? void 0
            : p.map(function (e) {
                return {
                  adjustment_sign: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumKeySafe")(
                      r("ValueAdjustmentRuleAdjustmentSignType"),
                      e.adjustment_sign,
                    ),
                    "conversion_value_expression_spec[].adjustment_sign",
                    i.id,
                  ),
                  adjustment_weight: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.adjustment_weight,
                    "conversion_value_expression_spec[].adjustment_weight",
                    i.id,
                  ),
                  destination_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumKeySafe")(
                      r("AdCampaignDestination"),
                      e.destination_type,
                    ),
                    "conversion_value_expression_spec[].destination_type",
                    i.id,
                  ),
                };
              }),
        ),
        cost_bidding_mode: o("TypeCoercionUtils").coerceOptionalValue(
          o("enumUtils").coerceKey(
            e.cost_bidding_mode,
            r("AdsAPICostBiddingModes"),
          ),
        ),
        cpr_benchmark: u,
        created_time: o("TypeCoercionUtils").coerceOptionalValue(
          e.created_time_with_timezone,
        ),
        creative_diversity_label: u,
        creative_diversity_score: u,
        creative_fatigue_prediction_ple: u,
        creative_sequence: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.creative_sequence,
        ),
        creative_sequence_repetition_pattern: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.creative_sequence_repetition_pattern),
        daily_budget: N(e.daily_budget),
        daily_imps: o("TypeCoercionUtils").coerceOptionalValue(e.daily_imps),
        daily_min_spend_target: M(e.daily_min_spend_target),
        daily_spend_cap: M(e.daily_spend_cap),
        delivery_info: u,
        delivery_status: u,
        delivery_sub_status: u,
        destination_type: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(r("AdCampaignDestination"), e.destination_type),
        ),
        dsa_beneficiary: e.dsa_beneficiary,
        dsa_payor: e.dsa_payor,
        effective_status:
          e.effective_status != null &&
          (_ = o("enumUtils").coerce(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? _
            : void 0,
        end_time: o("TypeCoercionUtils").coerceOptionalValue(
          e.end_time_and_timezone,
        ),
        existing_customer_budget_percentage: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.existing_customer_budget_percentage),
        external_bid: e.external_bid,
        frequency_control_specs: o(
          "AdsFrequencyControlSpecsCoercionUtils",
        ).coerceFrequencyControlSpecs(e.frequency_control_specs, i.id),
        full_funnel_exploration_mode: r("getJSEnumSafe")(
          r("AdsAPIFullFunnelExplorationMode"),
          e.full_funnel_exploration_mode,
        ),
        has_active_aco_autoflow_ad: u,
        has_active_da_aco_ad: e.has_active_da_aco_ad,
        has_inspiration_gallery_consent: u,
        id: e.id,
        include_in_ad_study_cell_id: u,
        include_in_ad_study_id: u,
        io_number: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
          e.io_number,
        ),
        is_autobid: o("TypeCoercionUtils").coerceOptionalValue(e.is_autobid),
        is_average_price_pacing: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_average_price_pacing,
        ),
        is_ba_skip_delayed_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_ba_skip_delayed_eligible,
        ),
        is_dc_follow_optimized: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_dc_follow_optimized,
        ),
        is_dynamic_creative: u,
        is_dynamic_creative_asset_customization: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_dynamic_creative_asset_customization),
        is_dynamic_creative_format_automation: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_dynamic_creative_format_automation),
        is_dynamic_creative_optimization: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_dynamic_creative_optimization),
        is_eligible_for_advantage_plus_audience: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_advantage_plus_audience),
        is_incremental_attribution_enabled: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_incremental_attribution_enabled),
        is_lifetime_flex_with_valid_schedule:
          e.is_lifetime_flex_with_valid_schedule,
        is_message_marketing: u,
        is_organic_ad_joint_optimized: e.is_organic_ad_joint_optimized,
        is_pca_unifiable_with_catalog: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_pca_unifiable_with_catalog),
        is_pv_follow_optimized: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_pv_follow_optimized,
        ),
        is_sequenced_conversion_creation: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_sequenced_conversion_creation),
        is_unified_attribution_window: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_unified_attribution_window),
        is_using_target_cpa: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_using_target_cpa,
        ),
        lifetime_budget: N(e.lifetime_budget_safe_value_str),
        lifetime_budget_string: e.lifetime_budget_safe_value_str,
        lifetime_imps: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
          e.lifetime_imps,
        ),
        lifetime_min_spend_target: M(e.lifetime_min_spend_target),
        lifetime_reach: o("TypeCoercionUtils").coerceOptionalValue(
          e.lifetime_reach,
        ),
        lifetime_spend_cap: M(e.lifetime_spend_cap),
        lifetime_spent: e.lifetime_spent,
        lightweight_split_test: u,
        lightweight_split_test_options: u,
        line_number: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(
          (f = e.ad_topline) == null || (f = f.line_number) == null
            ? void 0
            : f.id,
        ),
        live_video_ad_campaign_config: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.live_video_ad_campaign_config),
        low_creative_reach: u,
        marketing_goal: o("enumUtils").coerceNullable(
          e.marketing_goal,
          r("AdsAPIMarketingGoal"),
        ),
        max_budget_spend_percentage: o("TypeCoercionUtils").coerceOptionalValue(
          e.max_budget_spend_percentage,
        ),
        messaging_structured_lead_spec:
          (g = e.messaging_structured_lead_spec) == null
            ? void 0
            : g
                .map(function (e) {
                  return (e == null ? void 0 : e.field_type) != null &&
                    e.label != null
                    ? { field_type: e.field_type, label: e.label }
                    : null;
                })
                .filter(Boolean),
        metrics_metadata: u,
        min_budget_spend_percentage: o("TypeCoercionUtils").coerceOptionalValue(
          e.min_budget_spend_percentage,
        ),
        multi_ads: o("TypeCoercionUtils").coerceOptionalValue(e.multi_ads),
        multi_event_conversion_attribution_window_seconds: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.multi_event_conversion_attribution_window_seconds,
        ),
        multi_optimization_goal_weight: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.multi_optimization_goal_weight),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(e.name, "name", i.id),
        naming_template_custom_fields: o(
          "TypeCoercionUtils",
        ).coerceNamingTemplateCustomFields(e.naming_template_custom_fields),
        optimization_goal: o("TypeCoercionUtils").coerceNonMaybeValue(
          o("enumUtils").coerceKey(
            e.optimization_goal,
            r("AdsAPIOptimizationGoals"),
          ),
          "optimization_goal",
          i.id,
        ),
        optimization_sub_event: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsAPIOptimizationSubEvent"),
            e.optimization_sub_event,
          ),
        ),
        pacing_type: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (h = e.pacing_type) == null
            ? void 0
            : h.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerceFromKey(e, r("AdsAPIPacingType")),
                  "pacing_type[]",
                  i.id,
                );
              }),
        ),
        partnership_ad_content_list_id: e.partnership_ad_content_list_id,
        placement: u,
        placement_soft_opt_out:
          e.placement_soft_opt_out != null
            ? {
                audience_network_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (v = e.placement_soft_opt_out) == null ||
                    (v = v.audience_network_positions) == null
                    ? void 0
                    : v.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIAudienceNetworkPosition"),
                          ),
                          "placement_soft_opt_out_spec.audience_network_positions[]",
                          i.id,
                        );
                      }),
                ),
                facebook_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (R = e.placement_soft_opt_out) == null ||
                    (R = R.facebook_positions) == null
                    ? void 0
                    : R.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIFacebookPosition"),
                          ),
                          "placement_soft_opt_out_spec.facebook_positions[]",
                          i.id,
                        );
                      }),
                ),
                instagram_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (L = e.placement_soft_opt_out) == null ||
                    (L = L.instagram_positions) == null
                    ? void 0
                    : L.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIInstagramPosition"),
                          ),
                          "placement_soft_opt_out_spec.instagram_positions[]",
                          i.id,
                        );
                      }),
                ),
                messenger_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (I = e.placement_soft_opt_out) == null ||
                    (I = I.messenger_positions) == null
                    ? void 0
                    : I.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIMessengerPosition"),
                          ),
                          "placement_soft_opt_out_spec.messenger_positions[]",
                          i.id,
                        );
                      }),
                ),
                oculus_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (T = e.placement_soft_opt_out) == null ||
                    (T = T.oculus_positions) == null
                    ? void 0
                    : T.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIOculusPosition"),
                          ),
                          "placement_soft_opt_out_spec.oculus_positions[]",
                          i.id,
                        );
                      }),
                ),
                threads_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (D = e.placement_soft_opt_out) == null ||
                    (D = D.threads_positions) == null
                    ? void 0
                    : D.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIThreadsPosition"),
                          ),
                          "placement_soft_opt_out_spec.threads_positions[]",
                          i.id,
                        );
                      }),
                ),
                whatsapp_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (x = e.placement_soft_opt_out) == null ||
                    (x = x.whatsapp_positions) == null
                    ? void 0
                    : x.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsAPIWhatsAppPosition"),
                          ),
                          "placement_soft_opt_out_spec.whatsapp_positions[]",
                          i.id,
                        );
                      }),
                ),
              }
            : void 0,
        product_delivery_preference: o("TypeCoercionUtils").coerceOptionalValue(
          e.product_delivery_preference,
        ),
        promoted_object: k(e.promoted_object),
        prorated_daily_budget: N(e.prorated_daily_budget),
        publisher_platforms_status: u,
        recurring_budget_semantics: o("TypeCoercionUtils").coerceOptionalValue(
          e.recurring_budget_semantics,
        ),
        regional_regulated_categories: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          ($ = e.regional_regulated_categories) == null
            ? void 0
            : $.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerceFromKey(
                    e,
                    r("AdsRegionalRegulatedCategory"),
                  ),
                  "regional_regulated_categories[]",
                  i.id,
                );
              }),
        ),
        regional_regulation_identities:
          e.regional_regulation_identities != null
            ? o("TypeCoercionUtils").coerceOptionalValue({
                australia_finserv_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (P = e.regional_regulation_identities) == null
                    ? void 0
                    : P.australia_finserv_beneficiary,
                ),
                australia_finserv_payer: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (w = e.regional_regulation_identities) == null
                    ? void 0
                    : w.australia_finserv_payer,
                ),
                india_finserv_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (A = e.regional_regulation_identities) == null
                    ? void 0
                    : A.india_finserv_beneficiary,
                ),
                india_finserv_payer: o("TypeCoercionUtils").coerceOptionalValue(
                  (F = e.regional_regulation_identities) == null
                    ? void 0
                    : F.india_finserv_payer,
                ),
                singapore_universal_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (O = e.regional_regulation_identities) == null
                    ? void 0
                    : O.singapore_universal_beneficiary,
                ),
                singapore_universal_payer: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (B = e.regional_regulation_identities) == null
                    ? void 0
                    : B.singapore_universal_payer,
                ),
                taiwan_finserv_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (W = e.regional_regulation_identities) == null
                    ? void 0
                    : W.taiwan_finserv_beneficiary,
                ),
                taiwan_finserv_payer: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (q = e.regional_regulation_identities) == null
                    ? void 0
                    : q.taiwan_finserv_payer,
                ),
                taiwan_universal_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (U = e.regional_regulation_identities) == null
                    ? void 0
                    : U.taiwan_universal_beneficiary,
                ),
                taiwan_universal_payer: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (V = e.regional_regulation_identities) == null
                    ? void 0
                    : V.taiwan_universal_payer,
                ),
                universal_beneficiary: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (H = e.regional_regulation_identities) == null
                    ? void 0
                    : H.universal_beneficiary,
                ),
                universal_payer: o("TypeCoercionUtils").coerceOptionalValue(
                  (G = e.regional_regulation_identities) == null
                    ? void 0
                    : G.universal_payer,
                ),
              })
            : void 0,
        repeat_reach_state: u,
        retail_audience_config:
          e.retail_audience_config != null
            ? {
                is_opted_in: e.retail_audience_config.is_opted_in === !0,
                selected_retailer_business_id:
                  (z =
                    (j = e.retail_audience_config.selected_retailer_business) ==
                    null
                      ? void 0
                      : j.id) != null
                    ? z
                    : null,
              }
            : void 0,
        rf_prediction_id: o("TypeCoercionUtils").coerceZeroToUndefined(
          e.rf_prediction_id,
        ),
        saved_audience:
          ((K = e.saved_audience) == null ? void 0 : K.id) != null
            ? {
                id: (Q = e.saved_audience) == null ? void 0 : Q.id,
                name: (X = e.saved_audience) == null ? void 0 : X.name,
              }
            : void 0,
        saved_audience_id: u,
        search_themes: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.search_themes
            .map(function (e) {
              return e.text;
            })
            .filter(Boolean),
        ),
        shops_ads_metadata_tags: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(e.shops_ads_metadata_tags),
        should_prorate_budget: e.should_prorate_budget,
        source_adset_id:
          (Y = (J = e.source_campaign) == null ? void 0 : J.id) != null
            ? Y
            : void 0,
        sourced_content_brief_id: e.sourced_content_brief_id,
        start_time: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.start_time_with_timezone,
          "start_time_with_timezone",
          i.id,
        ),
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.status,
          "status",
          i.id,
        ),
        study_ids: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.study_ids,
        ),
        targeting: o("TypeCoercionUtils").coerceOptionalValue(
          (Z = e.targeting_spec) == null ? void 0 : Z.target_spec,
        ),
        targeting_as_signal: e.targeting_as_signal,
        time_based_ad_rotation_id_blocks: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (ee = e.time_based_ad_rotation_id_blocks) == null
            ? void 0
            : ee.map(function (e) {
                return e.block.map(function (e) {
                  return String(e);
                });
              }),
        ),
        time_based_ad_rotation_intervals: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(e.time_based_ad_rotation_intervals),
        time_suggestion: o("TypeCoercionUtils").coerceTimeSuggestion(
          e.time_suggestion,
        ),
        topline_id: (te = e.ad_topline) == null ? void 0 : te.id,
        updated_time: o("TypeCoercionUtils").coerceOptionalValue(
          e.updated_time_with_timezone,
        ),
        value_adjustment_rule_collection_id:
          e.value_adjustment_rule_collection_id,
        value_rule_set_id: e.value_rule_set_id,
        value_rules_applied: e.value_rules_applied,
        value_rules_entry_point: e.value_rules_entry_point,
        value_rules_spec: o("TypeCoercionUtils").coerceValueRulesSpec(
          e.value_rules_spec,
        ),
      };
      return t === !0 ? ne : y(ne);
    }
    function _(e) {
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
        w;
      if (e.__typename !== "AdCampaign")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaign", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        cpr_benchmark: (t = e.cpr_benchmark) != null ? t : null,
        creative_diversity_label:
          (n = e.creative_diversity_label) != null ? n : null,
        creative_diversity_score:
          (a = e.creative_diversity_score) != null ? a : null,
        creative_fatigue_prediction_ple:
          e.creative_fatigue_prediction_ple != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                cpr_lift_estimation: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = e.creative_fatigue_prediction_ple) == null
                    ? void 0
                    : l.cpr_lift_estimation,
                  "creative_fatigue_prediction_ple.cpr_lift_estimation",
                  i.id,
                ),
                should_display: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (s = e.creative_fatigue_prediction_ple) == null
                    ? void 0
                    : s.should_display,
                  "creative_fatigue_prediction_ple.should_display",
                  i.id,
                ),
              })
            : void 0,
        delivery_info:
          e.delivery_info != null
            ? e.delivery_info.ad_delivery_info_spec
            : void 0,
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
        effective_status:
          e.effective_status != null &&
          (u = o("enumUtils").coerce(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? u
            : void 0,
        guidance_lift_estimate:
          e.guidance_lift_estimate != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                actual_7d_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (c = e.guidance_lift_estimate) == null
                    ? void 0
                    : c.actual_7d_cpr,
                  "guidance_lift_estimate.actual_7d_cpr",
                  i.id,
                ),
                adoption_date: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (d = e.guidance_lift_estimate) == null
                    ? void 0
                    : d.adoption_date,
                  "guidance_lift_estimate.adoption_date",
                  i.id,
                ),
                guidance_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (m = e.guidance_lift_estimate) == null
                    ? void 0
                    : m.guidance_name,
                  "guidance_lift_estimate.guidance_name",
                  i.id,
                ),
                predicted_7d_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (p = e.guidance_lift_estimate) == null
                    ? void 0
                    : p.predicted_7d_cpr,
                  "guidance_lift_estimate.predicted_7d_cpr",
                  i.id,
                ),
              })
            : void 0,
        is_bid_constrained: (_ = e.is_bid_constrained) != null ? _ : void 0,
        is_cost_constrained: (f = e.is_cost_constrained) != null ? f : void 0,
        is_suboptimal_cbo_calibration: !1,
        issues_info:
          (g = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.issues_info.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ad_issues_info_spec,
                "issues_info[].ad_issues_info_spec",
                i.id,
              );
            }),
          )) != null
            ? g
            : void 0,
        learning_stage_info:
          e.learning_stage_info != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                conversions: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (h = e.learning_stage_info) == null ? void 0 : h.conversions,
                  "learning_stage_info.conversions",
                  i.id,
                ),
                exit_reason: o(
                  "AdLearningStageExitReasonUtils.facebook",
                ).toJSEnum(
                  (y = e.learning_stage_info) == null ? void 0 : y.exit_reason,
                ),
                last_sig_edit_ts:
                  (C = e.learning_stage_info) == null
                    ? void 0
                    : C.last_significant_edit_timestamp,
                status: r("getJSEnumSafe")(
                  r("AdsDeliveryInsightsLearningStageStatus"),
                  (b = e.learning_stage_info) == null ? void 0 : b.status,
                ),
              })
            : void 0,
        low_creative_reach:
          e.low_creative_reach != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                current_reach:
                  ((v = e.low_creative_reach) == null
                    ? void 0
                    : v.current_reach) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        end: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (S = e.low_creative_reach) == null ||
                            (S = S.current_reach) == null
                            ? void 0
                            : S.end,
                          "low_creative_reach.current_reach.end",
                          i.id,
                        ),
                        start: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (R = e.low_creative_reach) == null ||
                            (R = R.current_reach) == null
                            ? void 0
                            : R.start,
                          "low_creative_reach.current_reach.start",
                          i.id,
                        ),
                        value: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (L = e.low_creative_reach) == null ||
                            (L = L.current_reach) == null
                            ? void 0
                            : L.value,
                          "low_creative_reach.current_reach.value",
                          i.id,
                        ),
                      })
                    : void 0,
                earlier_reach:
                  ((E = e.low_creative_reach) == null
                    ? void 0
                    : E.earlier_reach) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        end: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (k = e.low_creative_reach) == null ||
                            (k = k.earlier_reach) == null
                            ? void 0
                            : k.end,
                          "low_creative_reach.earlier_reach.end",
                          i.id,
                        ),
                        start: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (I = e.low_creative_reach) == null ||
                            (I = I.earlier_reach) == null
                            ? void 0
                            : I.start,
                          "low_creative_reach.earlier_reach.start",
                          i.id,
                        ),
                        value: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (T = e.low_creative_reach) == null ||
                            (T = T.earlier_reach) == null
                            ? void 0
                            : T.value,
                          "low_creative_reach.earlier_reach.value",
                          i.id,
                        ),
                      })
                    : void 0,
                reach_trend: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (D = e.low_creative_reach) == null ? void 0 : D.reach_trend,
                  "low_creative_reach.reach_trend",
                  i.id,
                ),
              })
            : void 0,
        optimal_delivery_growth_opportunities:
          (x = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? x
            : void 0,
        paced_bid_info:
          e.paced_bid_info != null
            ? {
                bidding_status: r("getJSEnumSafe")(
                  r("AdsDeliveryBiddingStatus"),
                  ($ = e.paced_bid_info) == null ? void 0 : $.bidding_status,
                ),
              }
            : void 0,
        repeat_reach_state:
          e.repeat_reach_state != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                current_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (P = e.repeat_reach_state) == null
                    ? void 0
                    : P.current_saturation_level,
                  "repeat_reach_state.current_saturation_level",
                  i.id,
                ),
                forecasted_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (N = e.repeat_reach_state) == null
                    ? void 0
                    : N.forecasted_saturation_level,
                  "repeat_reach_state.forecasted_saturation_level",
                  i.id,
                ),
                high_saturation_threshold: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (M = e.repeat_reach_state) == null
                    ? void 0
                    : M.high_saturation_threshold,
                  "repeat_reach_state.high_saturation_threshold",
                  i.id,
                ),
                should_display_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (w = e.repeat_reach_state) == null
                    ? void 0
                    : w.should_display_cpr,
                  "repeat_reach_state.should_display_cpr",
                  i.id,
                ),
              })
            : void 0,
      };
    }
    function f(e) {
      var t, n, a, l, s, u, c, d, m, p;
      if (e.__typename !== "AdCampaign")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaign", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
        guidance_lift_estimate:
          e.guidance_lift_estimate != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                actual_7d_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (t = e.guidance_lift_estimate) == null
                    ? void 0
                    : t.actual_7d_cpr,
                  "guidance_lift_estimate.actual_7d_cpr",
                  i.id,
                ),
                adoption_date: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (n = e.guidance_lift_estimate) == null
                    ? void 0
                    : n.adoption_date,
                  "guidance_lift_estimate.adoption_date",
                  i.id,
                ),
                guidance_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (a = e.guidance_lift_estimate) == null
                    ? void 0
                    : a.guidance_name,
                  "guidance_lift_estimate.guidance_name",
                  i.id,
                ),
                predicted_7d_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = e.guidance_lift_estimate) == null
                    ? void 0
                    : l.predicted_7d_cpr,
                  "guidance_lift_estimate.predicted_7d_cpr",
                  i.id,
                ),
              })
            : void 0,
        optimal_delivery_growth_opportunities:
          (s = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            (u = e.optimal_delivery_growth_opportunities) == null
              ? void 0
              : u.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.ads_optimal_delivery_growth_opportunity_spec,
                    "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                    i.id,
                  );
                }),
          )) != null
            ? s
            : void 0,
        repeat_reach_state:
          e.repeat_reach_state != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                current_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (c = e.repeat_reach_state) == null
                    ? void 0
                    : c.current_saturation_level,
                  "repeat_reach_state.current_saturation_level",
                  i.id,
                ),
                forecasted_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (d = e.repeat_reach_state) == null
                    ? void 0
                    : d.forecasted_saturation_level,
                  "repeat_reach_state.forecasted_saturation_level",
                  i.id,
                ),
                high_saturation_threshold: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (m = e.repeat_reach_state) == null
                    ? void 0
                    : m.high_saturation_threshold,
                  "repeat_reach_state.high_saturation_threshold",
                  i.id,
                ),
                should_display_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (p = e.repeat_reach_state) == null
                    ? void 0
                    : p.should_display_cpr,
                  "repeat_reach_state.should_display_cpr",
                  i.id,
                ),
              })
            : void 0,
      };
    }
    function g(e) {
      var t;
      if (e.__typename !== "AdCampaign")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaign", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        issues_info:
          (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.issues_info.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ad_issues_info_spec,
                "issues_info[].ad_issues_info_spec",
                i.id,
              );
            }),
          )) != null
            ? t
            : void 0,
      };
    }
    function h(e) {
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
        G;
      if (e.__typename !== "AdCampaign")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaign", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        anomaly_insights:
          e.anomaly_insights != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                cpc: o("TypeCoercionUtils").coerceOptionalValue(
                  (t = e.anomaly_insights) == null ? void 0 : t.cpc,
                ),
                cplc: o("TypeCoercionUtils").coerceOptionalValue(
                  (n = e.anomaly_insights) == null ? void 0 : n.cplc,
                ),
                cpm: o("TypeCoercionUtils").coerceOptionalValue(
                  (a = e.anomaly_insights) == null ? void 0 : a.cpm,
                ),
                cpr: o("TypeCoercionUtils").coerceOptionalValue(
                  (l = e.anomaly_insights) == null ? void 0 : l.cpr,
                ),
                ctr: o("TypeCoercionUtils").coerceOptionalValue(
                  (s = e.anomaly_insights) == null ? void 0 : s.ctr,
                ),
                cvr: o("TypeCoercionUtils").coerceOptionalValue(
                  (u = e.anomaly_insights) == null ? void 0 : u.cvr,
                ),
                website_purchase_roas: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (c = e.anomaly_insights) == null
                    ? void 0
                    : c.website_purchase_roas,
                ),
              })
            : void 0,
        cpr_benchmark: (d = e.cpr_benchmark) != null ? d : null,
        creative_diversity_label:
          (m = e.creative_diversity_label) != null ? m : null,
        creative_diversity_score:
          (p = e.creative_diversity_score) != null ? p : null,
        creative_fatigue_prediction_ple:
          e.creative_fatigue_prediction_ple != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                cpr_lift_estimation: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (_ = e.creative_fatigue_prediction_ple) == null
                    ? void 0
                    : _.cpr_lift_estimation,
                  "creative_fatigue_prediction_ple.cpr_lift_estimation",
                  i.id,
                ),
                should_display: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (f = e.creative_fatigue_prediction_ple) == null
                    ? void 0
                    : f.should_display,
                  "creative_fatigue_prediction_ple.should_display",
                  i.id,
                ),
              })
            : void 0,
        delivery_info:
          e.delivery_info != null
            ? e.delivery_info.ad_delivery_info_spec
            : void 0,
        effective_status:
          e.effective_status != null &&
          (g = o("enumUtils").coerce(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? g
            : void 0,
        is_bid_constrained: (h = e.is_bid_constrained) != null ? h : void 0,
        is_cost_constrained: (y = e.is_cost_constrained) != null ? y : void 0,
        is_suboptimal_cbo_calibration: !1,
        learning_stage_info:
          e.learning_stage_info != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                conversions:
                  (C = e.learning_stage_info) == null ? void 0 : C.conversions,
                exit_reason: o(
                  "AdLearningStageExitReasonUtils.facebook",
                ).toJSEnum(
                  (b = e.learning_stage_info) == null ? void 0 : b.exit_reason,
                ),
                last_sig_edit_ts:
                  (v = e.learning_stage_info) == null
                    ? void 0
                    : v.last_significant_edit_timestamp,
                status: r("getJSEnumSafe")(
                  r("AdsDeliveryInsightsLearningStageStatus"),
                  (S = e.learning_stage_info) == null ? void 0 : S.status,
                ),
              })
            : void 0,
        low_creative_reach:
          e.low_creative_reach != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                current_reach:
                  ((L = e.low_creative_reach) == null
                    ? void 0
                    : L.current_reach) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        end: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (E = e.low_creative_reach) == null ||
                            (E = E.current_reach) == null
                            ? void 0
                            : E.end,
                          "low_creative_reach.current_reach.end",
                          i.id,
                        ),
                        start: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (k = e.low_creative_reach) == null ||
                            (k = k.current_reach) == null
                            ? void 0
                            : k.start,
                          "low_creative_reach.current_reach.start",
                          i.id,
                        ),
                        value: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (I = e.low_creative_reach) == null ||
                            (I = I.current_reach) == null
                            ? void 0
                            : I.value,
                          "low_creative_reach.current_reach.value",
                          i.id,
                        ),
                      })
                    : void 0,
                earlier_reach:
                  ((T = e.low_creative_reach) == null
                    ? void 0
                    : T.earlier_reach) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        end: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (D = e.low_creative_reach) == null ||
                            (D = D.earlier_reach) == null
                            ? void 0
                            : D.end,
                          "low_creative_reach.earlier_reach.end",
                          i.id,
                        ),
                        start: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (x = e.low_creative_reach) == null ||
                            (x = x.earlier_reach) == null
                            ? void 0
                            : x.start,
                          "low_creative_reach.earlier_reach.start",
                          i.id,
                        ),
                        value: o("TypeCoercionUtils").coerceNonMaybeValue(
                          ($ = e.low_creative_reach) == null ||
                            ($ = $.earlier_reach) == null
                            ? void 0
                            : $.value,
                          "low_creative_reach.earlier_reach.value",
                          i.id,
                        ),
                      })
                    : void 0,
                reach_trend: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (P = e.low_creative_reach) == null ? void 0 : P.reach_trend,
                  "low_creative_reach.reach_trend",
                  i.id,
                ),
              })
            : void 0,
        paced_bid_info:
          e.paced_bid_info != null
            ? {
                bidding_status: r("getJSEnumSafe")(
                  r("AdsDeliveryBiddingStatus"),
                  (N = e.paced_bid_info) == null ? void 0 : N.bidding_status,
                ),
              }
            : void 0,
        pps_peer_benchmarks:
          e.pps_peer_benchmarks != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                cpc: R((M = e.pps_peer_benchmarks) == null ? void 0 : M.cpc),
                cplc: R((w = e.pps_peer_benchmarks) == null ? void 0 : w.cplc),
                cpm: R((A = e.pps_peer_benchmarks) == null ? void 0 : A.cpm),
                cpr: R((F = e.pps_peer_benchmarks) == null ? void 0 : F.cpr),
                ctr: R((O = e.pps_peer_benchmarks) == null ? void 0 : O.ctr),
                cvr: R((B = e.pps_peer_benchmarks) == null ? void 0 : B.cvr),
                filter_params: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (W = e.pps_peer_benchmarks) == null ||
                    (W = W.filter_params) == null
                    ? void 0
                    : W.map(function (e) {
                        return e.key != null && e.value != null
                          ? { key: e.key, value: e.value }
                          : null;
                      }),
                ),
                website_purchase_roas: R(
                  (q = e.pps_peer_benchmarks) == null
                    ? void 0
                    : q.website_purchase_roas,
                ),
              })
            : void 0,
        repeat_reach_state:
          e.repeat_reach_state != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                current_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (U = e.repeat_reach_state) == null
                    ? void 0
                    : U.current_saturation_level,
                  "repeat_reach_state.current_saturation_level",
                  i.id,
                ),
                forecasted_saturation_level: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (V = e.repeat_reach_state) == null
                    ? void 0
                    : V.forecasted_saturation_level,
                  "repeat_reach_state.forecasted_saturation_level",
                  i.id,
                ),
                high_saturation_threshold: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (H = e.repeat_reach_state) == null
                    ? void 0
                    : H.high_saturation_threshold,
                  "repeat_reach_state.high_saturation_threshold",
                  i.id,
                ),
                should_display_cpr: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (G = e.repeat_reach_state) == null
                    ? void 0
                    : G.should_display_cpr,
                  "repeat_reach_state.should_display_cpr",
                  i.id,
                ),
              })
            : void 0,
      };
    }
    function y(e) {
      var t = o(
        "AdsPENumericStringFieldUtils",
      ).convertCampaignNumericStringFields(e);
      return o(
        "AdsCampaignPlacementsFieldsValueHelper",
      ).fixPlacementsDestructiveCopy(t);
    }
    function C(e) {
      return e != null
        ? o("TypeCoercionUtils").coerceObjectToUndefined({
            banned_keywords: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e.banned_keywords,
            ),
            brands: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.brands,
            ),
            product_categories: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.product_categories,
            ),
            product_categories_freeform: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.product_categories_freeform,
            ),
            product_categories_megataxon: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.product_categories_megataxon,
            ),
            product_names: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.product_names,
            ),
            search_terms: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e == null ? void 0 : e.search_terms,
            ),
          })
        : void 0;
    }
    function b(e) {
      if (e != null) {
        var t = o("XFBAdCampaignGoalTypeUtils.facebook").toJSEnum(e.type);
        if (t != null)
          return {
            engaged_audiences_audience_label_exclusions: v(
              e.engaged_audiences_audience_label_exclusions,
            ),
            engaged_audiences_audience_label_inclusions: v(
              e.engaged_audiences_audience_label_inclusions,
            ),
            engaged_audiences_exclusions: [].concat(
              e.engaged_audiences_exclusions,
            ),
            engaged_audiences_inclusions: [].concat(
              e.engaged_audiences_inclusions,
            ),
            existing_customers_audience_label_exclusions: v(
              e.existing_customers_audience_label_exclusions,
            ),
            existing_customers_audience_label_inclusions: v(
              e.existing_customers_audience_label_inclusions,
            ),
            existing_customers_auto_exclusion_retention_days:
              e.existing_customers_auto_exclusion_retention_days,
            existing_customers_exclusion_auto_selection_state:
              e.existing_customers_exclusion_auto_selection_state,
            existing_customers_exclusions: [].concat(
              e.existing_customers_exclusions,
            ),
            existing_customers_inclusions: [].concat(
              e.existing_customers_inclusions,
            ),
            is_ca_expansion_enabled: e.is_ca_expansion_enabled,
            is_lookalike_inclusion_enabled: e.is_lookalike_inclusion_enabled,
            lookalike_inclusions: [].concat(e.lookalike_inclusions),
            type: t,
          };
      }
    }
    function v(e) {
      return (e != null ? e : [])
        .map(function (e) {
          return r("AdsCustomAudienceLabelAPI").cast(e);
        })
        .filter(Boolean);
    }
    function S(e) {
      return e != null
        ? {
            age_range: o("TypeCoercionUtils").coerceObjectToUndefined(
              e.age_range.reduce(function (e, t) {
                var n, r;
                if (
                  (t == null || (n = t.age_range) == null
                    ? void 0
                    : n.age_max) != null &&
                  (t == null || (r = t.age_range) == null
                    ? void 0
                    : r.age_min) != null &&
                  (t == null ? void 0 : t.multiplier) != null
                ) {
                  var o = t.age_range.age_min + "-" + t.age_range.age_max;
                  e[o] = t.multiplier;
                }
                return e;
              }, {}),
            ),
            delete_user_groups: null,
            page_types: o("TypeCoercionUtils").coerceObjectToUndefined(
              e.page_types.reduce(function (e, t) {
                return (
                  (t == null ? void 0 : t.ad_page_type) ===
                    r("AdsPageTypes").MOBILE_EXTERNAL &&
                  (t == null ? void 0 : t.multiplier) != null
                    ? (e.mobileexternal = t == null ? void 0 : t.multiplier)
                    : (t == null ? void 0 : t.ad_page_type) ===
                        r("AdsPageTypes").MOBILE_FEED &&
                      (t == null ? void 0 : t.multiplier) != null &&
                      (e.mobilefeed = t == null ? void 0 : t.multiplier),
                  e
                );
              }, {}),
            ),
            user_groups: e.user_groups,
          }
        : void 0;
    }
    function R(e) {
      if (e != null)
        return o("TypeCoercionUtils").coerceObjectToUndefined({
          p25: o("TypeCoercionUtils").coerceOptionalValue(e.p25),
          p50: o("TypeCoercionUtils").coerceOptionalValue(e.p50),
          p75: o("TypeCoercionUtils").coerceOptionalValue(e.p75),
        });
    }
    function L(e) {
      var t;
      return e == null
        ? null
        : (t = r("AdCampaignConversionMultiEventProducts").cast(Number(e))) !=
            null
          ? t
          : null;
    }
    function E(e) {
      var t, n, r, o, a;
      if (e != null)
        return {
          budget_pool_id: (t = e.pool) == null ? void 0 : t.id,
          end_time: e.end_time,
          flexible_budget_share: e.flexible_budget_share,
          flexible_budget_share_unit_type: e.flexible_budget_share_unit_type,
          max_spend_target:
            (n = e.max_spend_target) == null ? void 0 : n.amount_with_offset,
          member_count:
            (r = e.pool) == null || (r = r.active_members) == null
              ? void 0
              : r.length,
          min_spend_target:
            (o = e.min_spend_target) == null ? void 0 : o.amount_with_offset,
          pool_name: (a = e.pool) == null ? void 0 : a.name,
          relative_value: e.relative_value,
          start_time: e.start_time,
        };
    }
    function k(t) {
      if (t != null) {
        var n,
          a,
          i,
          l,
          s,
          u = babelHelpers.extends({}, t, {
            anchor_event_config:
              (t == null ? void 0 : t.anchor_event_config) != null
                ? {
                    custom_event_name: t.anchor_event_config.custom_event_name,
                    event_type: r("getJSEnumSafe")(
                      r("OffsiteCustomEventType"),
                      t.anchor_event_config.event_type,
                    ),
                  }
                : null,
            custom_attribution_source_ids:
              (n = t == null ? void 0 : t.custom_attribution_source_ids) != null
                ? n
                : [],
            custom_event_type: r("getJSEnumSafe")(
              r("OffsiteCustomEventType"),
              t == null ? void 0 : t.custom_event_type_enum,
            ),
            full_funnel_objective: o("TypeCoercionUtils").coerceOptionalValue(
              o("enumUtils").coerceKey(
                t == null ? void 0 : t.full_funnel_objective,
                r("AdsAPIObjectives"),
              ),
            ),
            lead_ads_custom_event_type: r("getJSEnumSafe")(
              r("OffsiteCustomEventType"),
              t == null ? void 0 : t.lead_ads_custom_event_type,
            ),
            lead_ads_follow_up_event: r("getJSEnumSafe")(
              r("LeadAdsFollowUpEvent"),
              t == null ? void 0 : t.lead_ads_follow_up_event,
            ),
            lead_ads_form_event_source_type: r("getJSEnumSafe")(
              r("LeadAdsFormEventSourceType"),
              t == null ? void 0 : t.lead_ads_form_event_source_type,
            ),
            lead_ads_offsite_conversion_type: r("getJSEnumSafe")(
              r("LeadAdsOffsiteConversionType"),
              t == null ? void 0 : t.lead_ads_offsite_conversion_type,
            ),
            lead_ads_quality_volume_setting: r("getJSEnumSafe")(
              r("LeadAdsQualityVolumeSetting"),
              t == null ? void 0 : t.lead_ads_quality_volume_setting,
            ),
            lead_ads_selected_pixel_id:
              t == null ? void 0 : t.lead_ads_selected_pixel_id,
            live_video_destination:
              t == null ? void 0 : t.live_video_destination,
            multi_event_conversion_info:
              (t == null ? void 0 : t.multi_event_conversion_info) != null
                ? {
                    custom_event_name:
                      t.multi_event_conversion_info.custom_event_name,
                    event_type: r("getJSEnumSafe")(
                      r("OffsiteCustomEventType"),
                      t.multi_event_conversion_info.event_type,
                    ),
                  }
                : null,
            multi_event_product: L(t == null ? void 0 : t.multi_event_product),
            omnichannel_object: {
              app:
                (a = t.omnichannel_object) == null || (a = a.app) == null
                  ? void 0
                  : a.reduce(function (e, t) {
                      return (
                        t != null &&
                          e.push({
                            application_id:
                              t == null ? void 0 : t.application_id,
                            custom_event_str:
                              t == null ? void 0 : t.custom_event_str,
                            custom_event_type: r("getJSEnumSafe")(
                              r("OffsiteCustomEventType"),
                              t == null ? void 0 : t.custom_event_type,
                            ),
                            object_store_urls:
                              t == null
                                ? void 0
                                : t.object_store_urls.map(function (e) {
                                    return e;
                                  }),
                          }),
                        e
                      );
                    }, []),
              offline:
                (i = t.omnichannel_object) == null || (i = i.offline) == null
                  ? void 0
                  : i.reduce(function (e, t) {
                      return (
                        t != null &&
                          e.push({
                            custom_event_type: r("getJSEnumSafe")(
                              r("OffsiteCustomEventType"),
                              t == null ? void 0 : t.custom_event_type,
                            ),
                            dataset_split_ids:
                              t == null ? void 0 : t.dataset_split_ids,
                            is_store_only: t == null ? void 0 : t.is_store_only,
                            offline_conversion_data_set_id:
                              t == null
                                ? void 0
                                : t.offline_conversion_data_set_id,
                          }),
                        e
                      );
                    }, []),
              onsite:
                (l = t.omnichannel_object) == null || (l = l.onsite) == null
                  ? void 0
                  : l.reduce(function (e, t) {
                      return (
                        t != null &&
                          e.push({
                            commerce_merchant_settings_id:
                              t == null
                                ? void 0
                                : t.commerce_merchant_settings_id,
                            onboarding_state: r("getJSEnumSafe")(
                              r("ShopsAdsOnboardingState"),
                              t == null ? void 0 : t.onboarding_state,
                            ),
                          }),
                        e
                      );
                    }, []),
              pixel:
                (s = t.omnichannel_object) == null || (s = s.pixel) == null
                  ? void 0
                  : s.reduce(function (e, t) {
                      return (
                        t != null &&
                          e.push({
                            custom_event_str:
                              t == null ? void 0 : t.custom_event_str,
                            custom_event_type: r("getJSEnumSafe")(
                              r("OffsiteCustomEventType"),
                              t == null ? void 0 : t.custom_event_type,
                            ),
                            dataset_split_ids:
                              t == null ? void 0 : t.dataset_split_ids,
                            pixel_id: t == null ? void 0 : t.pixel_id,
                            pixel_rule: t == null ? void 0 : t.pixel_rule,
                          }),
                        e
                      );
                    }, []),
            },
            passback_application_id:
              t == null ? void 0 : t.passback_application_id,
            passback_pixel_id: t == null ? void 0 : t.passback_pixel_id,
            post_conversions: t.post_conversions.reduce(function (e, t) {
              return (
                t != null &&
                  e.push({
                    custom_event_type: r("getJSEnumSafe")(
                      r("OffsiteCustomEventType"),
                      t == null ? void 0 : t.custom_event_type,
                    ),
                    pixel_rule: t == null ? void 0 : t.pixel_rule,
                    post_conversion_attribute: r("getJSEnumSafe")(
                      r("AdPostConversionAttributeType"),
                      t == null ? void 0 : t.post_conversion_attribute,
                    ),
                  }),
                e
              );
            }, []),
            product_set_optimization: r("getJSEnumSafe")(
              r("ProductSetOptimizationSetting"),
              t == null ? void 0 : t.product_set_optimization,
            ),
            variation: r("getJSEnumSafe")(
              r("AdsPromotedObjectTypeVariation"),
              t == null ? void 0 : t.variation,
            ),
          }),
          c = u.custom_event_type_enum,
          d = babelHelpers.objectWithoutPropertiesLoose(u, e);
        return A(d, !1);
      }
    }
    function I(e) {
      var t, n, a, l, s, d, m, p, _, f, g;
      return T(
        A(
          e != null
            ? {
                adgroup_id: u,
                age_max: o("TypeCoercionUtils").coerceOptionalValue(e.max_age),
                age_min: o("TypeCoercionUtils").coerceOptionalValue(e.min_age),
                age_range: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.age_range,
                ),
                app_install_state: o("TypeCoercionUtils").coerceOptionalValue(
                  o("enumUtils").coerceNullable(
                    e.app_install_state,
                    r("AdsAPITargetAppInstallState"),
                  ),
                ),
                audience_concepts: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.audience_concepts,
                ),
                audience_network_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.audience_network_positions,
                    r("AdsAPIAudienceNetworkPosition"),
                  ),
                ),
                behaviors: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.behaviors,
                ),
                brand_safety_content_filter_levels: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  e.brand_safety_content_filter_levels.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      o("enumUtils").coerce(
                        e,
                        o("AdsBrandSafetyContentFilterLevelConstants")
                          .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL,
                      ),
                      "targeting.brand_safety_content_filter_levels[]",
                      i.id,
                    );
                  }),
                ),
                catalog_based_targeting: {
                  geo_targeting_type: o(
                    "TypeCoercionUtils",
                  ).coerceOptionalValue(
                    o("enumUtils").coerceNullable(
                      (t = e.catalog_based_targeting) == null
                        ? void 0
                        : t.geo_targeting_type,
                      r("CatalogBasedTargetingGeoTargetingType"),
                    ),
                  ),
                },
                cities: c,
                college_years: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.college_years),
                contextual_targeting_categories: o(
                  "TypeCoercionUtils",
                ).coerceIDNamePairArray(e.contextual_targeting_categories),
                countries: c,
                country_groups: c,
                custom_audiences: x(e.included_custom_audiences),
                device_platforms: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.device_platforms,
                    r("AdsAPIDevicePlatform"),
                  ),
                ),
                direct_install_devices: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.direct_install_devices),
                dynamic_audience_ids: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  e.dynamic_audiences.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "targeting.dynamic_audiences[].id",
                      i.id,
                    );
                  }),
                ),
                education_majors: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.education_majors,
                ),
                education_schools: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.education_schools,
                ),
                education_statuses: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.education_statuses,
                    r("AdsTargetingEducation"),
                  ),
                ),
                effective_audience_network_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_audience_network_positions,
                    r("AdsAPIAudienceNetworkPosition"),
                  ),
                ),
                effective_device_platforms: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_device_platforms,
                    r("AdsAPIDevicePlatform"),
                  ),
                ),
                effective_facebook_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_facebook_positions,
                    r("AdsAPIFacebookPosition"),
                  ),
                ),
                effective_instagram_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_instagram_positions,
                    r("AdsAPIInstagramPosition"),
                  ),
                ),
                effective_messenger_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_messenger_positions,
                    r("AdsAPIMessengerPosition"),
                  ),
                ),
                effective_oculus_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_oculus_positions,
                    r("AdsAPIOculusPosition"),
                  ),
                ),
                effective_publisher_platforms: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_publisher_platforms,
                    r("AdsAPIPublisherPlatform"),
                  ),
                ),
                effective_threads_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_threads_positions,
                    r("AdsAPIThreadsPosition"),
                  ),
                ),
                effective_whatsapp_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.effective_whatsapp_positions,
                    r("AdsAPIWhatsAppPosition"),
                  ),
                ),
                engagement_specs: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(P(e.engagement_specs)),
                ethnic_affinity: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.ethnic_affinity,
                ),
                exclude_reached_since: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.exclude_reached_since),
                excluded_brand_safety_content_types: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  e.excluded_brand_safety_content_types.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      r("AdsBrandSafetyExcludeContentType").cast(e),
                      "targeting.excluded_brand_safety_content_types[]",
                      i.id,
                    );
                  }),
                ),
                excluded_custom_audiences: x(e.excluded_custom_audiences),
                excluded_dynamic_audience_ids: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  e.excluded_dynamic_audiences.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "targeting.excluded_dynamic_audiences[].id",
                      i.id,
                    );
                  }),
                ),
                excluded_engagement_specs: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(P(e.excluded_engagement_specs)),
                excluded_geo_locations: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  (n = e.excluded_geo_locations_new) == null
                    ? void 0
                    : n.geo_locations,
                ),
                excluded_mobile_device_model: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.excluded_mobile_device_model),
                excluded_product_audience_specs: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  $(e.excluded_product_audience_specs),
                ),
                excluded_publisher_categories: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.excluded_publisher_categories),
                excluded_publisher_list_ids: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.excluded_publisher_list_ids),
                excluded_user_device: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.excluded_user_device),
                exclusions: o("TypeCoercionUtils").coerceOptionalValue(
                  D(e.exclusions),
                ),
                facebook_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.facebook_positions,
                    r("AdsAPIFacebookPosition"),
                  ),
                ),
                family_statuses: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.family_statuses,
                ),
                fb_deal_id: o("TypeCoercionUtils").coerceOptionalValue(
                  e.fb_deal_id,
                ),
                flexible_spec: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (a = e.flexible_spec) == null
                    ? void 0
                    : a.nodes.map(function (e) {
                        return D(e);
                      }),
                ),
                follow_profiles: c,
                follow_profiles_negative: c,
                gatekeepers: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.gatekeepers,
                ),
                genders: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.genders.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      r("getJSEnumSafe")(r("AdsTargetingGender"), e),
                      "targeting.genders[]",
                      i.id,
                    );
                  }),
                ),
                generation: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.generation,
                ),
                geo_locations: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = e.geo_locations_new) == null ? void 0 : l.geo_locations,
                  "targeting.geo_locations_new.geo_locations",
                  i.id,
                ),
                home_ownership: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.home_ownership,
                ),
                home_type: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.home_type,
                ),
                home_value: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.home_value,
                ),
                household_composition: o(
                  "TypeCoercionUtils",
                ).coerceIDNamePairArray(e.household_composition),
                income: o("TypeCoercionUtils").coerceIDNamePairArray(e.income),
                industries: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.industries,
                ),
                instagram_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.instagram_positions,
                    r("AdsAPIInstagramPosition"),
                  ),
                ),
                install_state_application: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.install_state_application),
                instream_video_skippable_excluded: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.instream_video_skippable_excluded),
                interested_in: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.interested_in,
                    r("AdsTargetingInterestedIn"),
                  ),
                ),
                interests: e.targeting_interests
                  ? o("TypeCoercionUtils").coerceIDNamePairArray(
                      e.targeting_interests,
                    )
                  : void 0,
                is_whatsapp_destination_ad: e.is_whatsapp_destination_ad
                  ? !0
                  : void 0,
                keywords: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.keywords,
                ),
                life_events: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.life_events,
                ),
                locales: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.locales.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.key,
                      "targeting.locales[].key",
                      i.id,
                    );
                  }),
                ),
                messenger_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.messenger_positions,
                    r("AdsAPIMessengerPosition"),
                  ),
                ),
                moms: o("TypeCoercionUtils").coerceIDNamePairArray(e.moms),
                net_worth: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.net_worth,
                ),
                oculus_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.oculus_positions,
                    r("AdsAPIOculusPosition"),
                  ),
                ),
                office_type: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.office_type,
                ),
                place_page_set_ids: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.place_page_set_ids),
                political_views: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  e.political_views.map(function (e) {
                    return o("enumUtils").assertFromKey(
                      o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.name,
                        "targeting.political_views[].name",
                        i.id,
                      ),
                      r("PagePoliticalViewTypes"),
                    );
                  }),
                ),
                politics: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.politics,
                ),
                product_audience_specs: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined($(e.product_audience_specs)),
                prospecting_audience: e.prospecting_audience
                  ? {
                      sources:
                        (s = e.prospecting_audience) == null
                          ? void 0
                          : s.sources.map(function (e) {
                              return {
                                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                                  e.id,
                                  "targeting.prospecting_audience.sources[].id",
                                  i.id,
                                ),
                              };
                            }),
                    }
                  : void 0,
                publisher_platforms: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.publisher_platforms,
                    r("AdsAPIPublisherPlatform"),
                  ),
                ),
                relationship_statuses: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.relationship_statuses,
                    r("AdsTargetingRelationship"),
                  ),
                ),
                subscriber_universe: e.subscriber_universe
                  ? {
                      messenger_subscriber_pool: o(
                        "TypeCoercionUtils",
                      ).coerceMaybeIDNamePair(
                        (d = e.subscriber_universe) == null
                          ? void 0
                          : d.messenger_subscriber_pool,
                      ),
                      messenger_subscriber_source: o(
                        "TypeCoercionUtils",
                      ).coerceMaybeIDNamePair(
                        (m = e.subscriber_universe) == null
                          ? void 0
                          : m.messenger_subscriber_source,
                      ),
                      whatsapp_subscriber_pool: o(
                        "TypeCoercionUtils",
                      ).coerceMaybeIDNamePair(
                        (p = e.subscriber_universe) == null
                          ? void 0
                          : p.whatsapp_subscriber_pool,
                      ),
                      whatsapp_subscriber_source: o(
                        "TypeCoercionUtils",
                      ).coerceMaybeIDNamePair(
                        (_ = e.subscriber_universe) == null
                          ? void 0
                          : _.whatsapp_subscriber_source,
                      ),
                    }
                  : void 0,
                tafe_ca_mitigation_strategy: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.tafe_ca_mitigation_strategy),
                targeting_automation:
                  (f = e.targeting_automation) == null
                    ? void 0
                    : f.reduce(function (e, t) {
                        if (
                          (t == null
                            ? void 0
                            : t.targeting_automation_status) != null &&
                          (t == null ? void 0 : t.targeting_automation_type) !=
                            null
                        ) {
                          var n = t.targeting_automation_status,
                            a = o("TypeCoercionUtils").coerceNonMaybeValue(
                              r("getJSEnumSafe")(
                                r("TargetingAutomationTypesEnum"),
                                t.targeting_automation_type,
                              ),
                              "targeting.targeting_automation[].targeting_automation_type",
                              i.id,
                            );
                          if (a === "individual_setting") {
                            var l = {},
                              s =
                                t == null
                                  ? void 0
                                  : t.targeting_automation_individual_settings;
                            (Object.keys(s != null ? s : {}).forEach(
                              function (e) {
                                var t = s == null ? void 0 : s[e];
                                if (t != null) {
                                  var n = r("getJSEnumSafe")(
                                    r(
                                      "TargetingAutomationIndividualSettingStatusEnum",
                                    ),
                                    t,
                                  );
                                  n != null && (l[e] = n);
                                }
                              },
                            ),
                              (e[a] = l));
                          } else e[a] = n;
                        }
                        return e;
                      }, {}),
                targeting_optimization: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(
                  o("enumUtils").coerceNullable(
                    e.targeting_relax_option,
                    r("TargetingRelaxationConstants"),
                  ),
                ),
                targeting_relaxation_types:
                  (g = e.targeting_relaxation_types) == null
                    ? void 0
                    : g.reduce(
                        function (e, t) {
                          if (
                            (t == null
                              ? void 0
                              : t.targeting_relaxation_status) != null &&
                            (t == null
                              ? void 0
                              : t.targeting_relaxation_type) != null
                          ) {
                            var n = t.targeting_relaxation_status,
                              a = o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("TargetingRelaxationTypesEnum"),
                                  t.targeting_relaxation_type,
                                ),
                                "targeting.targeting_relaxation_types[].targeting_relaxation_type",
                                i.id,
                              );
                            e[a] = n;
                          }
                          return e;
                        },
                        o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          e.targeting_relaxation_types,
                        )
                          ? { custom_audience: 0, lookalike: 0 }
                          : {},
                      ),
                threads_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.threads_positions,
                    r("AdsAPIThreadsPosition"),
                  ),
                ),
                user_adclusters: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.user_adclusters,
                ),
                user_age_unknown: o("TypeCoercionUtils").coerceOptionalValue(
                  e.user_age_unknown,
                ),
                user_device: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.user_device,
                ),
                user_event: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.user_events,
                    r("AdsUserEvent"),
                  ),
                ),
                user_os: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.user_os,
                ),
                whatsapp_positions: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.whatsapp_positions,
                    r("AdsAPIWhatsAppPosition"),
                  ),
                ),
                wireless_carrier: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  o("enumUtils").assertIterable(
                    e.wireless_carrier,
                    r("AdsWirelessCarriers"),
                  ),
                ),
                work_employers: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.work_employers,
                ),
                work_positions: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.work_positions,
                ),
                zips: c,
              }
            : void 0,
          !1,
        ),
      );
    }
    function T(e) {
      var t = { age_max: d, age_min: m };
      if (!(s || (s = r("areEqual")))(t, e)) return e;
    }
    function D(e) {
      return A(
        e != null
          ? {
              behaviors: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.behaviors,
              ),
              college_years: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.college_years,
              ),
              connections: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.flexible_targeting_connections,
              ),
              custom_audiences: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.custom_audiences,
              ),
              education_majors: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.education_majors,
              ),
              education_schools: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.education_schools,
              ),
              education_statuses: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                o("enumUtils").assertIterable(
                  e.education_statuses,
                  r("AdsTargetingEducation"),
                ),
              ),
              ethnic_affinity: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.ethnic_affinity,
              ),
              family_statuses: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.family_statuses,
              ),
              friends_of_connections: o(
                "TypeCoercionUtils",
              ).coerceIDNamePairArray(
                e.flexible_targeting_friends_of_connections,
              ),
              generation: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.generation,
              ),
              hashtag_interactions: o(
                "TypeCoercionUtils",
              ).coerceIDNamePairArray(e.hashtag_interactions),
              home_ownership: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.home_ownership,
              ),
              home_type: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.home_type,
              ),
              home_value: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.home_value,
              ),
              household_composition: o(
                "TypeCoercionUtils",
              ).coerceIDNamePairArray(e.household_composition),
              income: o("TypeCoercionUtils").coerceIDNamePairArray(e.income),
              industries: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.industries,
              ),
              interested_in: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                o("enumUtils").assertIterable(
                  e.interested_in,
                  r("AdsTargetingInterestedIn"),
                ),
              ),
              interests: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.interests,
              ),
              life_events: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.life_events,
              ),
              moms: o("TypeCoercionUtils").coerceIDNamePairArray(e.moms),
              net_worth: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.net_worth,
              ),
              office_type: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.office_type,
              ),
              politics: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.politics,
              ),
              product_audience_specs: $(e.product_audience_specs),
              purchase_intent: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.purchase_intent,
              ),
              relationship_statuses: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                o("enumUtils").assertIterable(
                  e.relationship_statuses,
                  r("AdsTargetingRelationship"),
                ),
              ),
              user_adclusters: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.user_adclusters,
              ),
              work_employers: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.work_employers,
              ),
              work_positions: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.work_positions,
              ),
            }
          : void 0,
        !1,
      );
    }
    function x(e) {
      return e != null
        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.map(function (e) {
              var t, n, a, l;
              return {
                data_source: {
                  creation_params: o("TypeCoercionUtils").coerceNonMaybeValue(
                    (t = e.data_source) == null ? void 0 : t.creation_params,
                    "included_custom_audiences[].data_source.creation_params",
                    i.id,
                  ),
                  sub_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    (n = e.data_source) == null ? void 0 : n.sub_type,
                    "included_custom_audiences[].data_source.sub_type",
                    i.id,
                  ),
                  type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    (a = e.data_source) == null ? void 0 : a.type,
                    "included_custom_audiences[].data_source.type",
                    i.id,
                  ),
                },
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.id,
                  "included_custom_audiences[].id",
                  i.id,
                ),
                is_lookalike_container: o(
                  "TypeCoercionUtils",
                ).coerceOptionalValue(e.is_lookalike_container),
                lookalike_spec:
                  ((l = e.lookalike_spec) == null
                    ? void 0
                    : l.target_countries) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        target_countries: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          e.lookalike_spec.target_countries,
                        ),
                      })
                    : void 0,
                lookalike_type: o("TypeCoercionUtils").coerceOptionalValue(
                  o("enumUtils").coerceFromKey(
                    e.lookalike_type,
                    r("LookalikeType"),
                  ),
                ),
                name: o("TypeCoercionUtils").coerceOptionalValue(e.name),
                rule: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                  e.rule,
                ),
                subtype: o("TypeCoercionUtils").coerceOptionalValue(e.subtype),
              };
            }),
          )
        : void 0;
    }
    function $(e) {
      return A(
        o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e == null
            ? void 0
            : e.map(function (e) {
                var t;
                return {
                  exclusions: e.exclusions.map(function (e) {
                    return {
                      retention_seconds: o(
                        "TypeCoercionUtils",
                      ).coerceNonMaybeValue(
                        o("TypeCoercionUtils").coerceMaybeNumberToString(
                          e.retention_seconds,
                        ),
                        "product_audience_specs[].exclusions[].retention_seconds",
                        i.id,
                      ),
                      rule: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.rule,
                        "product_audience_specs[].exclusions[].rule",
                        i.id,
                      ),
                    };
                  }),
                  inclusions:
                    (t = e.inclusions) == null
                      ? void 0
                      : t.map(function (e) {
                          return {
                            retention_seconds: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              o("TypeCoercionUtils").coerceMaybeNumberToString(
                                e.retention_seconds,
                              ),
                              "product_audience_specs[].inclusions[].retention_seconds",
                              i.id,
                            ),
                            rule: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.rule,
                              "product_audience_specs[].inclusions[].rule",
                              i.id,
                            ),
                          };
                        }),
                  product_set_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.product_set_id,
                    "product_audience_specs[].product_set_id",
                    i.id,
                  ),
                };
              }),
        ),
        !0,
      );
    }
    function P(e) {
      return A(
        e != null
          ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              e.map(function (e) {
                var t;
                return {
                  ad_group_id: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                    e.ad_group_id,
                  ),
                  campaign_group_id: t.coerceOptionalValue(e.campaign_group_id),
                  campaign_id: t.coerceOptionalValue(e.campaign_id),
                  impression_count: t.coerceOptionalValue(e.impression_count),
                  page_id: t.coerceOptionalValue(e.page_id),
                  retention_seconds: t.coerceOptionalValue(e.retention_seconds),
                  type: t.coerceNonMaybeValue(
                    e.action_type,
                    "engagement_specs[].action_type",
                    i.id,
                  ),
                  video_id: t.coerceOptionalValue(e.video_id),
                };
              }),
            )
          : void 0,
        !0,
      );
    }
    function N(e) {
      return e == null
        ? void 0
        : o("TypeCoercionUtils").coerceMaybeNumberToString(e);
    }
    function M(e) {
      return e == null
        ? void 0
        : o("TypeCoercionUtils").coerceZeroToUndefined(
            o("TypeCoercionUtils").coerceMaybeNumberToString(e),
          );
    }
    function w(e) {
      return (
        e == null ||
        Object.keys(e).length === 0 ||
        Object.values(e).every(function (e) {
          return e === void 0;
        })
      );
    }
    function A(e, t) {
      if (!w(e)) {
        var n = t ? [] : {};
        for (var r of Object.keys(e))
          if (e[r] != null)
            if (typeof e[r] == "object") {
              var o = A(e[r], Array.isArray(e[r]));
              o && (n[r] = o);
            } else n[r] = e[r];
        return w(n) ? void 0 : n;
      }
    }
    ((l.coerceCampaignGraphQLSpecToGraphAPI = p),
      (l.coerceDynamicGraphQLSpecToGraphAPI = _),
      (l.coerceDynamicGraphQLSpecTier1ToGraphAPI = f),
      (l.coerceDynamicGraphQLSpecTier2ToGraphAPI = g),
      (l.coerceDynamicGraphQLSpecTier3ToGraphAPI = h),
      (l.transformCampaignData = y),
      (l.coerceAudienceLabels = v),
      (l.coerceTargeting = I),
      (l.coerceUndefinedIfDefaultTargeting = T),
      (l.coerceBudgetFields = N),
      (l.coerceSpendFields = M),
      (l.isEmpty = w),
      (l.removeNullsAndEmpty = A));
  },
  98,
);
