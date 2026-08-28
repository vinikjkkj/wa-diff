__d(
  "AdCampaignGroupSpecUtil",
  [
    "AdproIncrementalConversionOptimizationActionType",
    "AdproIncrementalConversionOptimizationICOType",
    "AdsAPIActiveIssuesInfoLevel",
    "AdsAPIActiveIssuesInfoType",
    "AdsAPIObjectives",
    "AdsAPIPacingType",
    "AdsActivityStatuses",
    "AdsAutomationUnifiedCampaign",
    "AdsBuyingTypes",
    "AdsCampaignGroupEffectiveStatus",
    "AdsCoerceBidStrategy",
    "AdsFrequencyControlSpecsCoercionUtils",
    "AdsRFUnderdeliveryReason",
    "AdsRegulatedCategory",
    "AdsSmartPromotion",
    "BoostedComponentProduct",
    "FBLogger",
    "ISOCountryCode",
    "LeadAdsFollowUpEvent",
    "LeadAdsFormEventSourceType",
    "LeadAdsOffsiteConversionType",
    "LeadAdsQualityVolumeSetting",
    "LiveVideoDestination",
    "OffsiteCustomEventType",
    "SignalsDataSourcesEnumUtils.facebook",
    "SignalsDiagnosticEventEnumUtils.facebook",
    "TextPenaltyLevel",
    "TypeCoercionUtils",
    "XFBAdsDeliveryReviewStatusUtils.facebook",
    "bi_penalty_lib_PenaltyType",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0;
    function s(t) {
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
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe;
      if (t.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          t.__typename,
          t.id,
        );
      return {
        ab_test_config: e,
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          (n = t.ad_account) == null ? void 0 : n.legacy_account_id,
          "ad_account.legacy_account_id",
          i.id,
        ),
        ad_creation_package_config:
          t.ad_creation_package_config != null
            ? {
                api_version: void 0,
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (a = t.ad_creation_package_config) == null ? void 0 : a.id,
                  "ad_creation_package_config.id",
                  i.id,
                ),
                package_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = t.ad_creation_package_config) == null ||
                    (l = l.package) == null
                    ? void 0
                    : l.id,
                  "ad_creation_package_config.package.id",
                  i.id,
                ),
                status: void 0,
              }
            : void 0,
        adgroup_active_study_ids:
          (s =
            (c = t.adgroup_active_studies) == null ||
            (c = c.map(function (e) {
              return e.id;
            })) == null
              ? void 0
              : c.filter(Boolean)) != null
            ? s
            : [],
        adlabels: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (d =
            (m = t.ad_labels) == null
              ? void 0
              : m.map(function (e) {
                  return {
                    id: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "adlabels[].id",
                      i.id,
                    ),
                    name: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.name,
                      "adlabels[].name",
                      i.id,
                    ),
                  };
                })) != null
            ? d
            : [],
        ),
        adset_bid_amounts: e,
        adset_budgets: e,
        advertiser_intent: e,
        agency_fee_config:
          t.agency_fee_config != null
            ? {
                agency_fee_pct:
                  (p = t.agency_fee_config.agency_fee_pct) != null ? p : void 0,
                is_agency_fee_disabled:
                  (_ = t.agency_fee_config.is_agency_fee_disabled) != null
                    ? _
                    : void 0,
                is_default_agency_fee:
                  (f = t.agency_fee_config.is_default_agency_fee) != null
                    ? f
                    : void 0,
              }
            : void 0,
        automation_unified_campaign_type: r("getJSEnumSafe")(
          r("AdsAutomationUnifiedCampaign"),
          t.automation_unified_campaign_type,
        ),
        automation2_performance_status:
          t.automation2_performance_status != null
            ? t.automation2_performance_status
            : null,
        bid_constraints:
          t.bid_constraints != null
            ? {
                cpa_average_target:
                  (g = t.bid_constraints.cpa_average_target) != null
                    ? g
                    : void 0,
                roas_average_floor:
                  (h = t.bid_constraints.roas_average_floor) != null
                    ? h
                    : void 0,
              }
            : void 0,
        bid_strategy: o("AdsCoerceBidStrategy").AdsCoerceBidStrategy(
          t.bid_strategy,
        ),
        boosted_component_client_app_id: o(
          "TypeCoercionUtils",
        ).coerceZeroToUndefined(
          (y = t.boosted_component) == null ? void 0 : y.client_app_id,
        ),
        boosted_component_product: r("getJSEnumSafe")(
          r("BoostedComponentProduct"),
          (C = t.boosted_component) == null ? void 0 : C.product,
        ),
        boosted_page_id: (b = t.boosted_component) == null ? void 0 : b.page_id,
        brand_lift_studies:
          (v = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            (S =
              (R = t.brand_lift_studies) == null
                ? void 0
                : R.map(function (e) {
                    var t;
                    return {
                      description: (t =
                        o("TypeCoercionUtils")).coerceNonMaybeValue(
                        e.description,
                        "brand_lift_studies[].description",
                        i.id,
                      ),
                      end_time: t.coerceNonMaybeValue(
                        t.coerceMaybeNumberToString(e.end_time),
                        "brand_lift_studies[].end_time",
                        i.id,
                      ),
                      id: t.coerceNonMaybeValue(
                        e.id,
                        "brand_lift_studies[].id",
                        i.id,
                      ),
                      name: t.coerceNonMaybeValue(
                        e.name,
                        "brand_lift_studies[].name",
                        i.id,
                      ),
                      start_time: t.coerceNonMaybeValue(
                        t.coerceMaybeNumberToString(e.start_time),
                        "brand_lift_studies[].start_time",
                        i.id,
                      ),
                    };
                  })) != null
              ? S
              : [],
          )) != null
            ? v
            : void 0,
        budget_remaining: t.budget_remaining_safe_value_str,
        budget_scaling_budget_multiplier_default:
          t.budget_scaling_budget_multiplier_default,
        budget_scaling_cost_target: t.budget_scaling_cost_target,
        budget_scaling_cost_target_default:
          t.budget_scaling_cost_target_default,
        budget_scaling_extra_budget: t.budget_scaling_extra_budget,
        budget_strategy:
          t.budget_strategy != null ? t.budget_strategy : "UNDEFINED",
        buy_with_integration_partner: t.buy_with_integration_partner,
        buy_with_prime_type: t.buy_with_prime_type,
        buying_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsBuyingTypes"), t.buying_type),
          "buying_type",
          i.id,
        ),
        campaign_group_active_time: t.campaign_group_active_time,
        campaign_group_creation_source: e,
        campaign_structure_tree: e,
        can_use_spend_cap: t.can_use_spend_cap,
        collaborative_ads_partner_info:
          t.collaborative_ads_partner_info != null
            ? {
                merchant_partner_business_id: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  (L = t.collaborative_ads_partner_info) == null
                    ? void 0
                    : L.merchant_partner_business_id,
                  "collaborative_ads_partner_info.merchant_partner_business_id",
                  i.id,
                ),
                producer_dedicated_ad_account_id:
                  (E =
                    (k = t.collaborative_ads_partner_info) == null
                      ? void 0
                      : k.producer_dedicated_ad_account_id) != null
                    ? E
                    : void 0,
              }
            : void 0,
        created_time: (I = t.created_time_with_timezone) != null ? I : void 0,
        daily_budget: o("TypeCoercionUtils").coerceZeroToUndefined(
          t.daily_budget_safe_value_str,
        ),
        default_lifetime_flex_budget: t.default_lifetime_flex_budget,
        effective_status:
          t.effective_status != null &&
          (T = o("enumUtils").coerce(
            t.effective_status,
            r("AdsCampaignGroupEffectiveStatus"),
          )) != null
            ? T
            : void 0,
        frequency_control_specs: o(
          "AdsFrequencyControlSpecsCoercionUtils",
        ).coerceFrequencyControlSpecs(t.frequency_control_specs, i.id),
        has_automation2_brief_group: t.has_automation2_brief_group,
        has_secondary_skadnetwork_reporting:
          t.has_secondary_skadnetwork_reporting,
        id: t.id,
        include_in_ad_study_cell_id: e,
        include_in_ad_study_id: e,
        incremental_conversion_optimization_config: e,
        is_autobid: t.is_autobid,
        is_average_price_pacing: t.is_average_price_pacing,
        is_direct_send_campaign: t.is_direct_send_campaign,
        is_full_funnel: t.is_full_funnel,
        is_message_campaign: t.is_message_campaign,
        is_meta_moment_maker_enabled: t.is_meta_moment_maker_enabled,
        is_odax_campaign_group: t.is_odax_campaign_group,
        is_opted_into_experiments: e,
        is_pca_unifiable: null,
        is_pca_unified: t.is_pca_unified,
        is_reels_trending_ads_enabled: t.is_reels_trending_ads_enabled,
        is_skadnetwork_attribution: t.is_skadnetwork_attribution,
        is_using_l3_schedule: t.is_using_l3_schedule,
        last_budget_toggling_time:
          (D = t.last_budget_toggling_time_and_timezone) != null ? D : void 0,
        lifetime_budget: o("TypeCoercionUtils").coerceZeroToUndefined(
          t.lifetime_budget_safe_value_str,
        ),
        lifetime_spent: t.lifetime_spent,
        lightweight_split_test: e,
        lightweight_split_test_options: e,
        linked_testimonial_brief_id: t.linked_testimonial_brief_id,
        mc_experience_config:
          t.mc_experience_config != null
            ? {
                is_campaign_enabled: t.mc_experience_config.is_campaign_enabled,
                is_terms_signed: t.mc_experience_config.is_terms_signed,
                is_user_manually_toggle_mc_off:
                  (x = t.mc_experience_config.is_user_manually_toggle_mc_off) !=
                  null
                    ? x
                    : null,
                merchant_type:
                  ($ = t.mc_experience_config.merchant_type) != null
                    ? $
                    : void 0,
              }
            : void 0,
        metrics_metadata: e,
        name: o("TypeCoercionUtils").coerceNonMaybeValue(t.name, "name", i.id),
        naming_template_custom_fields: o(
          "TypeCoercionUtils",
        ).coerceNamingTemplateCustomFields(t.naming_template_custom_fields),
        objective: u(t.objective),
        pacing_type: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (P = t.pacing_type) == null
            ? void 0
            : P.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerce(e, r("AdsAPIPacingType")),
                  "pacing_type[].value",
                  i.id,
                );
              }),
        ),
        primary_attribution: t.primary_attribution,
        promoted_object: o("TypeCoercionUtils").coerceObjectToUndefined({
          application_id:
            (N = (M = t.promoted_object) == null ? void 0 : M.application_id) !=
            null
              ? N
              : void 0,
          custom_conversion_id:
            (w =
              (A = t.promoted_object) == null
                ? void 0
                : A.custom_conversion_id) != null
              ? w
              : void 0,
          custom_event_type:
            ((F = t.promoted_object) == null ? void 0 : F.custom_event_type) !=
            null
              ? o("enumUtils").coerce(
                  (O = t.promoted_object) == null
                    ? void 0
                    : O.custom_event_type,
                  r("OffsiteCustomEventType"),
                )
              : void 0,
          event_id:
            (B = (W = t.promoted_object) == null ? void 0 : W.event_id) != null
              ? B
              : void 0,
          lead_ads_custom_event_str:
            (q =
              (U = t.promoted_object) == null
                ? void 0
                : U.lead_ads_custom_event_str) != null
              ? q
              : void 0,
          lead_ads_custom_event_type:
            ((V = t.promoted_object) == null
              ? void 0
              : V.lead_ads_custom_event_type) != null
              ? o("enumUtils").coerce(
                  (H = t.promoted_object) == null
                    ? void 0
                    : H.lead_ads_custom_event_type,
                  r("OffsiteCustomEventType"),
                )
              : void 0,
          lead_ads_follow_up_event:
            (G = o("enumUtils").coerceNullable(
              (z = t.promoted_object) == null
                ? void 0
                : z.lead_ads_follow_up_event,
              r("LeadAdsFollowUpEvent"),
            )) != null
              ? G
              : void 0,
          lead_ads_form_event_source_type:
            ((j = t.promoted_object) == null
              ? void 0
              : j.lead_ads_form_event_source_type) != null
              ? o("enumUtils").coerce(
                  (K = t.promoted_object) == null
                    ? void 0
                    : K.lead_ads_form_event_source_type,
                  r("LeadAdsFormEventSourceType"),
                )
              : void 0,
          lead_ads_offsite_conversion_type:
            ((Q = t.promoted_object) == null
              ? void 0
              : Q.lead_ads_offsite_conversion_type) != null
              ? o("enumUtils").coerce(
                  (X = t.promoted_object) == null
                    ? void 0
                    : X.lead_ads_offsite_conversion_type,
                  r("LeadAdsOffsiteConversionType"),
                )
              : void 0,
          lead_ads_quality_volume_setting:
            (Y = o("enumUtils").coerceNullable(
              (J = t.promoted_object) == null
                ? void 0
                : J.lead_ads_quality_volume_setting,
              r("LeadAdsQualityVolumeSetting"),
            )) != null
              ? Y
              : void 0,
          lead_ads_selected_pixel_id:
            (Z =
              (ee = t.promoted_object) == null
                ? void 0
                : ee.lead_ads_selected_pixel_id) != null
              ? Z
              : void 0,
          live_video_destination:
            ((te = t.promoted_object) == null
              ? void 0
              : te.live_video_destination) != null
              ? o("enumUtils").coerce(
                  (ne = t.promoted_object) == null
                    ? void 0
                    : ne.live_video_destination,
                  r("LiveVideoDestination"),
                )
              : void 0,
          object_store_url:
            (re =
              (oe = t.promoted_object) == null
                ? void 0
                : oe.object_store_url) != null
              ? re
              : void 0,
          offer_id:
            (ae = (ie = t.promoted_object) == null ? void 0 : ie.offer_id) !=
            null
              ? ae
              : void 0,
          offline_conversion_data_set_id:
            (le =
              (se = t.promoted_object) == null
                ? void 0
                : se.offline_conversion_data_set_id) != null
              ? le
              : void 0,
          offsite_conversion_event_id: void 0,
          page_id:
            (ue = (ce = t.promoted_object) == null ? void 0 : ce.page_id) !=
            null
              ? ue
              : void 0,
          pixel_aggregation_rule:
            (de =
              (me = t.promoted_object) == null
                ? void 0
                : me.pixel_aggregation_rule) != null
              ? de
              : void 0,
          pixel_id:
            (pe = (_e = t.promoted_object) == null ? void 0 : _e.pixel_id) !=
            null
              ? pe
              : void 0,
          pixel_rule:
            (fe = (ge = t.promoted_object) == null ? void 0 : ge.pixel_rule) !=
            null
              ? fe
              : void 0,
          place_page_set_id:
            (he =
              (ye = t.promoted_object) == null
                ? void 0
                : ye.place_page_set_id) != null
              ? he
              : void 0,
          product_catalog_id:
            (Ce =
              (be = t.promoted_object) == null
                ? void 0
                : be.product_catalog_id) != null
              ? Ce
              : void 0,
          product_set_id:
            (ve =
              (Se = t.promoted_object) == null ? void 0 : Se.product_set_id) !=
            null
              ? ve
              : void 0,
          retention_days:
            (Re =
              (Le = t.promoted_object) == null ? void 0 : Le.retention_days) !=
            null
              ? Re
              : void 0,
        }),
        rf_prediction_id: t.rf_prediction_id,
        should_prorate_budget: t.should_prorate_budget,
        smart_promotion_type: r("getJSEnumSafe")(
          r("AdsSmartPromotion"),
          t.smart_promotion_type,
        ),
        source_campaign_id:
          (Ee = (ke = t.source_campaign_group) == null ? void 0 : ke.id) != null
            ? Ee
            : void 0,
        source_recommendation_type: t.source_recommendation_type,
        special_ad_categories:
          (Ie = t.special_ad_categories) == null
            ? void 0
            : Ie.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(r("AdsRegulatedCategory"), e),
                  "special_ad_categories[].value",
                  i.id,
                );
              }),
        special_ad_category:
          (Te = r("getJSEnumSafe")(
            r("AdsRegulatedCategory"),
            t.special_ad_category,
          )) != null
            ? Te
            : void 0,
        special_ad_category_country:
          (De = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            (xe = t.special_ad_category_country) == null
              ? void 0
              : xe.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(r("ISOCountryCode"), e),
                    "special_ad_category_country[]",
                    i.id,
                  );
                }),
          )) != null
            ? De
            : void 0,
        spend_cap: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          t.spend_cap,
        ),
        start_time: t.start_time_with_timezone,
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.status,
          "status",
          i.id,
        ),
        stop_time: t.stop_time_with_timezone,
        study_ids:
          ($e = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.study_ids,
          )) != null
            ? $e
            : void 0,
        time_suggestion: o("TypeCoercionUtils").coerceTimeSuggestion(
          t.time_suggestion,
        ),
        today_spent: void 0,
        topline_id: t.topline_id,
        updated_time: (Pe = t.updated_time_with_timezone) != null ? Pe : void 0,
        yesterday_spent: t.yesterday_spent,
      };
    }
    function u(e) {
      return e === "WEBSITE_CLICKS"
        ? (r("FBLogger")("relay_ads_manager").mustfix(
            "Expected objective value to not match WEBSITE_CLICKS, got %s",
            e,
          ),
          e)
        : o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(r("AdsAPIObjectives"), e),
            "objective",
            i.id,
          );
    }
    function c(e) {
      var t, n, a, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
      if (e.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        adset_count: e.ad_campaigns_count,
        campaign_structure_tree:
          e.campaign_structure_tree != null
            ? {
                children:
                  (t =
                    (n = e.campaign_structure_tree) == null ||
                    (n = n.children) == null
                      ? void 0
                      : n.map(function (e) {
                          var t;
                          return {
                            children:
                              (t = e.children) == null
                                ? void 0
                                : t.map(function (e) {
                                    return {
                                      children: [],
                                      id: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        e.adgroup_id,
                                        "campaign_structure_tree.children[].children[].adgroup_id",
                                        i.id,
                                      ),
                                      name: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        e.name,
                                        "campaign_structure_tree.children[].children[].name",
                                        i.id,
                                      ),
                                      status: o(
                                        "TypeCoercionUtils",
                                      ).coerceOptionalValue(e.status),
                                    };
                                  }),
                            id: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.adset_id,
                              "campaign_structure_tree.children[].adset_id",
                              i.id,
                            ),
                            name: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.name,
                              "campaign_structure_tree.children[].name",
                              i.id,
                            ),
                            status: o("TypeCoercionUtils").coerceOptionalValue(
                              e.status,
                            ),
                          };
                        })) != null
                    ? t
                    : void 0,
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (a = e.campaign_structure_tree) == null
                    ? void 0
                    : a.campaign_id,
                  "campaign_structure_tree.campaign_id",
                  i.id,
                ),
                name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = e.campaign_structure_tree) == null ? void 0 : l.name,
                  "campaign_structure_tree.name",
                  i.id,
                ),
                status: o("TypeCoercionUtils").coerceOptionalValue(
                  (s = e.campaign_structure_tree) == null ? void 0 : s.status,
                ),
              }
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
            r("AdsCampaignGroupEffectiveStatus"),
          )) != null
            ? u
            : void 0,
        incremental_conversion_optimization_config:
          e.incremental_conversion_optimization_config != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                action_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationActionType"),
                    (c = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : c.action_type,
                  ),
                  "incremental_conversion_optimization_config.action_type",
                  i.id,
                ),
                ad_study_end_time:
                  (d =
                    (m = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : m.ad_study_end_time) != null
                    ? d
                    : void 0,
                ad_study_id:
                  (p =
                    (_ = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : _.ad_study_id) != null
                    ? p
                    : void 0,
                ad_study_name:
                  (f = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : f.ad_study_name,
                ad_study_start_time:
                  (g = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : g.ad_study_start_time,
                cell_id:
                  (h =
                    (y = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : y.cell_id) != null
                    ? h
                    : void 0,
                cell_name:
                  (C = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : C.cell_name,
                holdout_size:
                  (b = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : b.holdout_size,
                ico_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationICOType"),
                    (v = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : v.ico_type,
                  ),
                  "incremental_conversion_optimization_config.ico_type",
                  i.id,
                ),
                objectives:
                  (S = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : S.objectives,
              })
            : null,
        issues_info: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (R = e.issues_info) == null
            ? void 0
            : R.map(function (e) {
                var t;
                return {
                  additional_info: (t =
                    o("TypeCoercionUtils")).coerceNonMaybeValue(
                    e.additional_info,
                    "issues_info[].additional_info",
                    i.id,
                  ),
                  error_code: t.coerceNonMaybeValue(
                    e.error_code,
                    "issues_info[].error_code",
                    i.id,
                  ),
                  error_message: t.coerceNonMaybeValue(
                    e.error_message,
                    "issues_info[].error_message",
                    i.id,
                  ),
                  error_summary: t.coerceNonMaybeValue(
                    e.error_summary,
                    "issues_info[].error_summary",
                    i.id,
                  ),
                  error_type: t.coerceNonMaybeValue(
                    e.error_type != null
                      ? o("enumUtils").coerce(
                          e.error_type,
                          r("AdsAPIActiveIssuesInfoType"),
                        )
                      : void 0,
                    "issues_info[].error_type",
                    i.id,
                  ),
                  level: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r("AdsAPIActiveIssuesInfoLevel"),
                      e.level,
                    ),
                    "issues_info[].level",
                    i.id,
                  ),
                  mid: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.mid,
                    "issues_info[].mid",
                    i.id,
                  ),
                };
              }),
        ),
        optimal_delivery_growth_opportunities:
          (L = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? L
            : void 0,
        special_ad_categories:
          e.special_ad_categories != null
            ? o("enumUtils").assertIterable(
                e.special_ad_categories,
                r("AdsRegulatedCategory"),
              )
            : void 0,
      };
    }
    function d(e) {
      if (e.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
        special_ad_categories:
          e.special_ad_categories != null
            ? o("enumUtils").assertIterable(
                e.special_ad_categories,
                r("AdsRegulatedCategory"),
              )
            : void 0,
      };
    }
    function m(e) {
      if (e.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
      };
    }
    function p(e) {
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
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be,
        We,
        qe,
        Ue,
        Ve,
        He,
        Ge,
        ze,
        je,
        Ke,
        Qe,
        Xe,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        it,
        lt,
        st,
        ut;
      if (e.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        adset_count: e.ad_campaigns_count,
        campaign_structure_tree:
          e.campaign_structure_tree != null
            ? {
                children:
                  (t =
                    (n = e.campaign_structure_tree) == null ||
                    (n = n.children) == null
                      ? void 0
                      : n.map(function (e) {
                          var t;
                          return {
                            children:
                              (t = e.children) == null
                                ? void 0
                                : t.map(function (e) {
                                    return {
                                      children: [],
                                      id: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        e.adgroup_id,
                                        "campaign_structure_tree.children[].children[].adgroup_id",
                                        i.id,
                                      ),
                                      name: o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        e.name,
                                        "campaign_structure_tree.children[].children[].name",
                                        i.id,
                                      ),
                                      status: o(
                                        "TypeCoercionUtils",
                                      ).coerceOptionalValue(e.status),
                                    };
                                  }),
                            id: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.adset_id,
                              "campaign_structure_tree.children[].adset_id",
                              i.id,
                            ),
                            name: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.name,
                              "campaign_structure_tree.children[].name",
                              i.id,
                            ),
                            status: o("TypeCoercionUtils").coerceOptionalValue(
                              e.status,
                            ),
                          };
                        })) != null
                    ? t
                    : void 0,
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (a = e.campaign_structure_tree) == null
                    ? void 0
                    : a.campaign_id,
                  "campaign_structure_tree.campaign_id",
                  i.id,
                ),
                name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (l = e.campaign_structure_tree) == null ? void 0 : l.name,
                  "campaign_structure_tree.name",
                  i.id,
                ),
                status: o("TypeCoercionUtils").coerceOptionalValue(
                  (s = e.campaign_structure_tree) == null ? void 0 : s.status,
                ),
              }
            : void 0,
        creative_diversity_data:
          e.creative_diversity_data != null
            ? {
                high:
                  (u =
                    (c = e.creative_diversity_data) == null ||
                    (c = c.high) == null
                      ? void 0
                      : c.slice()) != null
                    ? u
                    : void 0,
                low:
                  (d =
                    (m = e.creative_diversity_data) == null ||
                    (m = m.low) == null
                      ? void 0
                      : m.slice()) != null
                    ? d
                    : void 0,
                medium:
                  (p =
                    (_ = e.creative_diversity_data) == null ||
                    (_ = _.medium) == null
                      ? void 0
                      : _.slice()) != null
                    ? p
                    : void 0,
              }
            : void 0,
        creative_diversity_label:
          (f = e.creative_diversity_label) != null ? f : void 0,
        delivery_info:
          e.delivery_info != null
            ? {
                active_accelerated_campaign_count:
                  (g = e.delivery_info.active_accelerated_campaign_count) !=
                  null
                    ? g
                    : void 0,
                active_day_parted_campaign_count:
                  (h = e.delivery_info.active_day_parted_campaign_count) != null
                    ? h
                    : void 0,
                ad_penalty_map:
                  e.delivery_info.ad_penalty_map != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        e.delivery_info.ad_penalty_map.map(function (e) {
                          return {
                            key: o("TypeCoercionUtils").coerceNonMaybeValue(
                              r("getJSEnumSafe")(
                                r("bi_penalty_lib_PenaltyType"),
                                e.key,
                              ),
                              "delivery_info.ad_penalty_map[].key",
                              i.id,
                            ),
                            value: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.value,
                              "delivery_info.ad_penalty_map[].value",
                              i.id,
                            ),
                          };
                        }),
                      )
                    : void 0,
                are_all_daily_budgets_spent:
                  (y =
                    (C = e.delivery_info) == null
                      ? void 0
                      : C.are_all_daily_budgets_spent) != null
                    ? y
                    : void 0,
                credit_needed_ads_count:
                  (b =
                    (v = e.delivery_info) == null
                      ? void 0
                      : v.credit_needed_ads_count) != null
                    ? b
                    : void 0,
                eligible_for_delivery_insights:
                  (S =
                    (R = e.delivery_info) == null
                      ? void 0
                      : R.eligible_for_delivery_insights) != null
                    ? S
                    : void 0,
                end_time:
                  (L = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                    (E = e.delivery_info) == null ? void 0 : E.end_time,
                  )) != null
                    ? L
                    : void 0,
                has_account_hit_spend_limit:
                  (k =
                    (I = e.delivery_info) == null
                      ? void 0
                      : I.has_account_hit_spend_limit) != null
                    ? k
                    : void 0,
                has_campaign_group_hit_spend_limit:
                  (T =
                    (D = e.delivery_info) == null
                      ? void 0
                      : D.has_campaign_group_hit_spend_limit) != null
                    ? T
                    : void 0,
                has_no_active_ads:
                  (x =
                    ($ = e.delivery_info) == null
                      ? void 0
                      : $.has_no_active_ads) != null
                    ? x
                    : void 0,
                has_no_ads:
                  (P = (N = e.delivery_info) == null ? void 0 : N.has_no_ads) !=
                  null
                    ? P
                    : void 0,
                inactive_ads_count:
                  (M =
                    (w = e.delivery_info) == null
                      ? void 0
                      : w.inactive_ads_count) != null
                    ? M
                    : void 0,
                inactive_campaign_count:
                  (A =
                    (F = e.delivery_info) == null
                      ? void 0
                      : F.inactive_campaign_count) != null
                    ? A
                    : void 0,
                is_account_closed:
                  (O =
                    (B = e.delivery_info) == null
                      ? void 0
                      : B.is_account_closed) != null
                    ? O
                    : void 0,
                is_account_disabled:
                  (W =
                    (q = e.delivery_info) == null
                      ? void 0
                      : q.is_account_disabled) != null
                    ? W
                    : void 0,
                is_ad_uneconomical:
                  (U =
                    (V = e.delivery_info) == null
                      ? void 0
                      : V.is_ad_uneconomical) != null
                    ? U
                    : void 0,
                is_adfarm_penalized:
                  (H =
                    (G = e.delivery_info) == null
                      ? void 0
                      : G.is_adfarm_penalized) != null
                    ? H
                    : void 0,
                is_adgroup_partially_rejected:
                  (z =
                    (j = e.delivery_info) == null
                      ? void 0
                      : j.is_adgroup_partially_rejected) != null
                    ? z
                    : void 0,
                is_campaign_accelerated:
                  (K =
                    (Q = e.delivery_info) == null
                      ? void 0
                      : Q.is_campaign_accelerated) != null
                    ? K
                    : void 0,
                is_campaign_completed:
                  (X =
                    (Y = e.delivery_info) == null
                      ? void 0
                      : Y.is_campaign_completed) != null
                    ? X
                    : void 0,
                is_campaign_day_parted:
                  (J =
                    (Z = e.delivery_info) == null
                      ? void 0
                      : Z.is_campaign_day_parted) != null
                    ? J
                    : void 0,
                is_campaign_disabled:
                  (ee =
                    (te = e.delivery_info) == null
                      ? void 0
                      : te.is_campaign_disabled) != null
                    ? ee
                    : void 0,
                is_campaign_group_disabled:
                  (ne =
                    (re = e.delivery_info) == null
                      ? void 0
                      : re.is_campaign_group_disabled) != null
                    ? ne
                    : void 0,
                is_clickbait_penalized:
                  (oe =
                    (ae = e.delivery_info) == null
                      ? void 0
                      : ae.is_clickbait_penalized) != null
                    ? oe
                    : void 0,
                is_daily_budget_spent:
                  (ie =
                    (le = e.delivery_info) == null
                      ? void 0
                      : le.is_daily_budget_spent) != null
                    ? ie
                    : void 0,
                is_engagement_bait_penalized:
                  (se =
                    (ue = e.delivery_info) == null
                      ? void 0
                      : ue.is_engagement_bait_penalized) != null
                    ? se
                    : void 0,
                is_lqwe_penalized:
                  (ce =
                    (de = e.delivery_info) == null
                      ? void 0
                      : de.is_lqwe_penalized) != null
                    ? ce
                    : void 0,
                is_reach_and_frequency_misconfigured:
                  (me =
                    (pe = e.delivery_info) == null
                      ? void 0
                      : pe.is_reach_and_frequency_misconfigured) != null
                    ? me
                    : void 0,
                is_sensationalism_penalized:
                  (_e =
                    (fe = e.delivery_info) == null
                      ? void 0
                      : fe.is_sensationalism_penalized) != null
                    ? _e
                    : void 0,
                lift_study_time_period:
                  (ge = e.delivery_info) == null
                    ? void 0
                    : ge.lift_study_time_period,
                needs_credit:
                  (he =
                    (ye = e.delivery_info) == null
                      ? void 0
                      : ye.needs_credit) != null
                    ? he
                    : void 0,
                needs_tax_number:
                  (Ce =
                    (be = e.delivery_info) == null
                      ? void 0
                      : be.needs_tax_number) != null
                    ? Ce
                    : void 0,
                non_deleted_ads_count:
                  (ve =
                    (Se = e.delivery_info) == null
                      ? void 0
                      : Se.non_deleted_ads_count) != null
                    ? ve
                    : void 0,
                not_delivering_campaign_count:
                  (Re =
                    (Le = e.delivery_info) == null
                      ? void 0
                      : Le.not_delivering_campaign_count) != null
                    ? Re
                    : void 0,
                pending_ads_count:
                  (Ee =
                    (ke = e.delivery_info) == null
                      ? void 0
                      : ke.pending_ads_count) != null
                    ? Ee
                    : void 0,
                pending_review_info:
                  ((Ie = e.delivery_info) == null
                    ? void 0
                    : Ie.pending_review_info) != null
                    ? {
                        latest_update_time: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Te = e.delivery_info) == null ||
                            (Te = Te.pending_review_info) == null
                            ? void 0
                            : Te.latest_update_time,
                          "delivery_info.pending_review_info.latest_update_time",
                          i.id,
                        ),
                        review_status: o(
                          "XFBAdsDeliveryReviewStatusUtils.facebook",
                        ).toJSEnum(
                          (De = e.delivery_info) == null ||
                            (De = De.pending_review_info) == null
                            ? void 0
                            : De.review_status,
                        ),
                      }
                    : void 0,
                reach_frequency_campaign_underdelivery_reason:
                  (xe = r("getJSEnumSafe")(
                    r("AdsRFUnderdeliveryReason"),
                    ($e = e.delivery_info) == null
                      ? void 0
                      : $e.reach_frequency_campaign_underdelivery_reason,
                  )) != null
                    ? xe
                    : void 0,
                rejected_ads_count:
                  (Pe =
                    (Ne = e.delivery_info) == null
                      ? void 0
                      : Ne.rejected_ads_count) != null
                    ? Pe
                    : void 0,
                signal_diagnostic_issue:
                  ((Me = e.delivery_info) == null
                    ? void 0
                    : Me.signal_diagnostic_issue) != null
                    ? {
                        data_source_id: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (we = e.delivery_info) == null ||
                            (we = we.signal_diagnostic_issue) == null
                            ? void 0
                            : we.data_source_id,
                          "delivery_info.signal_diagnostic_issue.data_source_id",
                          i.id,
                        ),
                        data_source_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o("SignalsDataSourcesEnumUtils.facebook").toJSEnum(
                            (Ae = e.delivery_info) == null ||
                              (Ae = Ae.signal_diagnostic_issue) == null
                              ? void 0
                              : Ae.data_source_type,
                          ),
                          "delivery_info.signal_diagnostic_issue.data_source_type",
                          i.id,
                        ),
                        diagnostic_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o(
                            "SignalsDiagnosticEventEnumUtils.facebook",
                          ).toJSEnum(
                            (Fe = e.delivery_info) == null ||
                              (Fe = Fe.signal_diagnostic_issue) == null
                              ? void 0
                              : Fe.diagnostic_type,
                          ),
                          "data.delivery_info.signal_diagnostic_issue.diagnostic_type",
                          i.id,
                        ),
                        event_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (Oe = e.delivery_info) == null ||
                            (Oe = Oe.signal_diagnostic_issue) == null
                            ? void 0
                            : Oe.event_name,
                          "delivery_info.signal_diagnostic_issue.event_name",
                          i.id,
                        ),
                        traffic_anomaly_drop_percentage:
                          (Be =
                            (We = e.delivery_info) == null ||
                            (We = We.signal_diagnostic_issue) == null
                              ? void 0
                              : We.traffic_anomaly_drop_percentage) != null
                            ? Be
                            : void 0,
                        traffic_anomaly_drop_timestamp:
                          (qe =
                            (Ue = e.delivery_info) == null ||
                            (Ue = Ue.signal_diagnostic_issue) == null
                              ? void 0
                              : Ue.traffic_anomaly_drop_timestamp) != null
                            ? qe
                            : void 0,
                      }
                    : void 0,
                start_time:
                  (Ve =
                    (He = e.delivery_info) == null ? void 0 : He.start_time) !=
                  null
                    ? Ve
                    : void 0,
                status: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdsActivityStatuses"),
                    (Ge = e.delivery_info) == null ? void 0 : Ge.status,
                  ),
                  "delivery_info.status",
                  i.id,
                ),
                text_penalty_level:
                  (ze = r("getJSEnumSafe")(
                    r("TextPenaltyLevel"),
                    (je = e.delivery_info) == null
                      ? void 0
                      : je.text_penalty_level,
                  )) != null
                    ? ze
                    : void 0,
              }
            : void 0,
        effective_status:
          e.effective_status != null &&
          (Ke = o("enumUtils").coerce(
            e.effective_status,
            r("AdsCampaignGroupEffectiveStatus"),
          )) != null
            ? Ke
            : void 0,
        incremental_conversion_optimization_config:
          e.incremental_conversion_optimization_config != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                action_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationActionType"),
                    (Qe = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Qe.action_type,
                  ),
                  "incremental_conversion_optimization_config.action_type",
                  i.id,
                ),
                ad_study_end_time:
                  (Xe =
                    (Ye = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Ye.ad_study_end_time) != null
                    ? Xe
                    : void 0,
                ad_study_id:
                  (Je =
                    (Ze = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Ze.ad_study_id) != null
                    ? Je
                    : void 0,
                ad_study_name:
                  (et = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : et.ad_study_name,
                ad_study_start_time:
                  (tt = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : tt.ad_study_start_time,
                cell_id:
                  (nt =
                    (rt = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : rt.cell_id) != null
                    ? nt
                    : void 0,
                cell_name:
                  (ot = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : ot.cell_name,
                holdout_size:
                  (at = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : at.holdout_size,
                ico_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationICOType"),
                    (it = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : it.ico_type,
                  ),
                  "incremental_conversion_optimization_config.ico_type",
                  i.id,
                ),
                objectives:
                  (lt = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : lt.objectives,
              })
            : null,
        issues_info: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (st = e.issues_info) == null
            ? void 0
            : st.map(function (e) {
                var t;
                return {
                  additional_info: (t =
                    o("TypeCoercionUtils")).coerceOptionalValue(
                    e.additional_info,
                  ),
                  error_code: t.coerceNonMaybeValue(
                    e.error_code,
                    "issues_info[].error_code",
                    i.id,
                  ),
                  error_message: t.coerceNonMaybeValue(
                    e.error_message,
                    "issues_info[].error_message",
                    i.id,
                  ),
                  error_summary: t.coerceNonMaybeValue(
                    e.error_summary,
                    "issues_info[].error_summary",
                    i.id,
                  ),
                  error_type: t.coerceNonMaybeValue(
                    e.error_type != null
                      ? o("enumUtils").coerce(
                          e.error_type,
                          r("AdsAPIActiveIssuesInfoType"),
                        )
                      : void 0,
                    "issues_info[].error_type",
                    i.id,
                  ),
                  level: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r("AdsAPIActiveIssuesInfoLevel"),
                      e.level,
                    ),
                    "issues_info[].level",
                    i.id,
                  ),
                };
              }),
        ),
        optimal_delivery_growth_opportunities:
          (ut = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? ut
            : void 0,
      };
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
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be,
        We,
        qe,
        Ue,
        Ve,
        He,
        Ge,
        ze,
        je,
        Ke,
        Qe,
        Xe,
        Ye;
      if (e.__typename !== "AdCampaignGroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "AdCampaignGroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        adset_count: e.ad_campaigns_count,
        delivery_info:
          e.delivery_info != null
            ? {
                active_accelerated_campaign_count:
                  (t = e.delivery_info.active_accelerated_campaign_count) !=
                  null
                    ? t
                    : void 0,
                active_day_parted_campaign_count:
                  (n = e.delivery_info.active_day_parted_campaign_count) != null
                    ? n
                    : void 0,
                ad_penalty_map:
                  e.delivery_info.ad_penalty_map != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        e.delivery_info.ad_penalty_map.map(function (e) {
                          return {
                            key: o("TypeCoercionUtils").coerceNonMaybeValue(
                              r("getJSEnumSafe")(
                                r("bi_penalty_lib_PenaltyType"),
                                e.key,
                              ),
                              "delivery_info.ad_penalty_map[].key",
                              i.id,
                            ),
                            value: o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.value,
                              "delivery_info.ad_penalty_map[].value",
                              i.id,
                            ),
                          };
                        }),
                      )
                    : void 0,
                are_all_daily_budgets_spent:
                  (a =
                    (l = e.delivery_info) == null
                      ? void 0
                      : l.are_all_daily_budgets_spent) != null
                    ? a
                    : void 0,
                credit_needed_ads_count:
                  (s =
                    (u = e.delivery_info) == null
                      ? void 0
                      : u.credit_needed_ads_count) != null
                    ? s
                    : void 0,
                eligible_for_delivery_insights:
                  (c =
                    (d = e.delivery_info) == null
                      ? void 0
                      : d.eligible_for_delivery_insights) != null
                    ? c
                    : void 0,
                end_time:
                  (m = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                    (p = e.delivery_info) == null ? void 0 : p.end_time,
                  )) != null
                    ? m
                    : void 0,
                has_account_hit_spend_limit:
                  (_ =
                    (f = e.delivery_info) == null
                      ? void 0
                      : f.has_account_hit_spend_limit) != null
                    ? _
                    : void 0,
                has_campaign_group_hit_spend_limit:
                  (g =
                    (h = e.delivery_info) == null
                      ? void 0
                      : h.has_campaign_group_hit_spend_limit) != null
                    ? g
                    : void 0,
                has_no_active_ads:
                  (y =
                    (C = e.delivery_info) == null
                      ? void 0
                      : C.has_no_active_ads) != null
                    ? y
                    : void 0,
                has_no_ads:
                  (b = (v = e.delivery_info) == null ? void 0 : v.has_no_ads) !=
                  null
                    ? b
                    : void 0,
                inactive_ads_count:
                  (S =
                    (R = e.delivery_info) == null
                      ? void 0
                      : R.inactive_ads_count) != null
                    ? S
                    : void 0,
                inactive_campaign_count:
                  (L =
                    (E = e.delivery_info) == null
                      ? void 0
                      : E.inactive_campaign_count) != null
                    ? L
                    : void 0,
                is_account_closed:
                  (k =
                    (I = e.delivery_info) == null
                      ? void 0
                      : I.is_account_closed) != null
                    ? k
                    : void 0,
                is_account_disabled:
                  (T =
                    (D = e.delivery_info) == null
                      ? void 0
                      : D.is_account_disabled) != null
                    ? T
                    : void 0,
                is_ad_uneconomical:
                  (x =
                    ($ = e.delivery_info) == null
                      ? void 0
                      : $.is_ad_uneconomical) != null
                    ? x
                    : void 0,
                is_adfarm_penalized:
                  (P =
                    (N = e.delivery_info) == null
                      ? void 0
                      : N.is_adfarm_penalized) != null
                    ? P
                    : void 0,
                is_adgroup_partially_rejected:
                  (M =
                    (w = e.delivery_info) == null
                      ? void 0
                      : w.is_adgroup_partially_rejected) != null
                    ? M
                    : void 0,
                is_campaign_accelerated:
                  (A =
                    (F = e.delivery_info) == null
                      ? void 0
                      : F.is_campaign_accelerated) != null
                    ? A
                    : void 0,
                is_campaign_completed:
                  (O =
                    (B = e.delivery_info) == null
                      ? void 0
                      : B.is_campaign_completed) != null
                    ? O
                    : void 0,
                is_campaign_day_parted:
                  (W =
                    (q = e.delivery_info) == null
                      ? void 0
                      : q.is_campaign_day_parted) != null
                    ? W
                    : void 0,
                is_campaign_disabled:
                  (U =
                    (V = e.delivery_info) == null
                      ? void 0
                      : V.is_campaign_disabled) != null
                    ? U
                    : void 0,
                is_campaign_group_disabled:
                  (H =
                    (G = e.delivery_info) == null
                      ? void 0
                      : G.is_campaign_group_disabled) != null
                    ? H
                    : void 0,
                is_clickbait_penalized:
                  (z =
                    (j = e.delivery_info) == null
                      ? void 0
                      : j.is_clickbait_penalized) != null
                    ? z
                    : void 0,
                is_daily_budget_spent:
                  (K =
                    (Q = e.delivery_info) == null
                      ? void 0
                      : Q.is_daily_budget_spent) != null
                    ? K
                    : void 0,
                is_engagement_bait_penalized:
                  (X =
                    (Y = e.delivery_info) == null
                      ? void 0
                      : Y.is_engagement_bait_penalized) != null
                    ? X
                    : void 0,
                is_lqwe_penalized:
                  (J =
                    (Z = e.delivery_info) == null
                      ? void 0
                      : Z.is_lqwe_penalized) != null
                    ? J
                    : void 0,
                is_reach_and_frequency_misconfigured:
                  (ee =
                    (te = e.delivery_info) == null
                      ? void 0
                      : te.is_reach_and_frequency_misconfigured) != null
                    ? ee
                    : void 0,
                is_sensationalism_penalized:
                  (ne =
                    (re = e.delivery_info) == null
                      ? void 0
                      : re.is_sensationalism_penalized) != null
                    ? ne
                    : void 0,
                lift_study_time_period:
                  (oe = e.delivery_info) == null
                    ? void 0
                    : oe.lift_study_time_period,
                needs_credit:
                  (ae =
                    (ie = e.delivery_info) == null
                      ? void 0
                      : ie.needs_credit) != null
                    ? ae
                    : void 0,
                needs_tax_number:
                  (le =
                    (se = e.delivery_info) == null
                      ? void 0
                      : se.needs_tax_number) != null
                    ? le
                    : void 0,
                non_deleted_ads_count:
                  (ue =
                    (ce = e.delivery_info) == null
                      ? void 0
                      : ce.non_deleted_ads_count) != null
                    ? ue
                    : void 0,
                not_delivering_campaign_count:
                  (de =
                    (me = e.delivery_info) == null
                      ? void 0
                      : me.not_delivering_campaign_count) != null
                    ? de
                    : void 0,
                pending_ads_count:
                  (pe =
                    (_e = e.delivery_info) == null
                      ? void 0
                      : _e.pending_ads_count) != null
                    ? pe
                    : void 0,
                pending_review_info:
                  ((fe = e.delivery_info) == null
                    ? void 0
                    : fe.pending_review_info) != null
                    ? {
                        latest_update_time: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (ge = e.delivery_info) == null ||
                            (ge = ge.pending_review_info) == null
                            ? void 0
                            : ge.latest_update_time,
                          "delivery_info.pending_review_info.latest_update_time",
                          i.id,
                        ),
                        review_status: o(
                          "XFBAdsDeliveryReviewStatusUtils.facebook",
                        ).toJSEnum(
                          (he = e.delivery_info) == null ||
                            (he = he.pending_review_info) == null
                            ? void 0
                            : he.review_status,
                        ),
                      }
                    : void 0,
                reach_frequency_campaign_underdelivery_reason:
                  (ye = r("getJSEnumSafe")(
                    r("AdsRFUnderdeliveryReason"),
                    (Ce = e.delivery_info) == null
                      ? void 0
                      : Ce.reach_frequency_campaign_underdelivery_reason,
                  )) != null
                    ? ye
                    : void 0,
                rejected_ads_count:
                  (be =
                    (ve = e.delivery_info) == null
                      ? void 0
                      : ve.rejected_ads_count) != null
                    ? be
                    : void 0,
                signal_diagnostic_issue:
                  ((Se = e.delivery_info) == null
                    ? void 0
                    : Se.signal_diagnostic_issue) != null
                    ? {
                        data_source_id: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Re = e.delivery_info) == null ||
                            (Re = Re.signal_diagnostic_issue) == null
                            ? void 0
                            : Re.data_source_id,
                          "delivery_info.signal_diagnostic_issue.data_source_id",
                          i.id,
                        ),
                        data_source_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o("SignalsDataSourcesEnumUtils.facebook").toJSEnum(
                            (Le = e.delivery_info) == null ||
                              (Le = Le.signal_diagnostic_issue) == null
                              ? void 0
                              : Le.data_source_type,
                          ),
                          "data.delivery_info.signal_diagnostic_issue.data_source_type",
                          i.id,
                        ),
                        diagnostic_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o(
                            "SignalsDiagnosticEventEnumUtils.facebook",
                          ).toJSEnum(
                            (Ee = e.delivery_info) == null ||
                              (Ee = Ee.signal_diagnostic_issue) == null
                              ? void 0
                              : Ee.diagnostic_type,
                          ),
                          "data.delivery_info.signal_diagnostic_issue.diagnostic_type",
                          i.id,
                        ),
                        event_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (ke = e.delivery_info) == null ||
                            (ke = ke.signal_diagnostic_issue) == null
                            ? void 0
                            : ke.event_name,
                          "delivery_info.signal_diagnostic_issue.event_name",
                          i.id,
                        ),
                        traffic_anomaly_drop_percentage:
                          (Ie =
                            (Te = e.delivery_info) == null ||
                            (Te = Te.signal_diagnostic_issue) == null
                              ? void 0
                              : Te.traffic_anomaly_drop_percentage) != null
                            ? Ie
                            : void 0,
                        traffic_anomaly_drop_timestamp:
                          (De =
                            (xe = e.delivery_info) == null ||
                            (xe = xe.signal_diagnostic_issue) == null
                              ? void 0
                              : xe.traffic_anomaly_drop_timestamp) != null
                            ? De
                            : void 0,
                      }
                    : void 0,
                start_time:
                  ($e =
                    (Pe = e.delivery_info) == null ? void 0 : Pe.start_time) !=
                  null
                    ? $e
                    : void 0,
                status: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdsActivityStatuses"),
                    (Ne = e.delivery_info) == null ? void 0 : Ne.status,
                  ),
                  "delivery_info.status",
                  i.id,
                ),
                text_penalty_level:
                  (Me = r("getJSEnumSafe")(
                    r("TextPenaltyLevel"),
                    (we = e.delivery_info) == null
                      ? void 0
                      : we.text_penalty_level,
                  )) != null
                    ? Me
                    : void 0,
              }
            : void 0,
        effective_status:
          e.effective_status != null &&
          (Ae = o("enumUtils").coerce(
            e.effective_status,
            r("AdsCampaignGroupEffectiveStatus"),
          )) != null
            ? Ae
            : void 0,
        incremental_conversion_optimization_config:
          e.incremental_conversion_optimization_config != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                action_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationActionType"),
                    (Fe = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Fe.action_type,
                  ),
                  "incremental_conversion_optimization_config.action_type",
                  i.id,
                ),
                ad_study_end_time:
                  (Oe =
                    (Be = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Be.ad_study_end_time) != null
                    ? Oe
                    : void 0,
                ad_study_id:
                  (We =
                    (qe = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : qe.ad_study_id) != null
                    ? We
                    : void 0,
                ad_study_name:
                  (Ue = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : Ue.ad_study_name,
                ad_study_start_time:
                  (Ve = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : Ve.ad_study_start_time,
                cell_id:
                  (He =
                    (Ge = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Ge.cell_id) != null
                    ? He
                    : void 0,
                cell_name:
                  (ze = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : ze.cell_name,
                holdout_size:
                  (je = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : je.holdout_size,
                ico_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdproIncrementalConversionOptimizationICOType"),
                    (Ke = e.incremental_conversion_optimization_config) == null
                      ? void 0
                      : Ke.ico_type,
                  ),
                  "incremental_conversion_optimization_config.ico_type",
                  i.id,
                ),
                objectives:
                  (Qe = e.incremental_conversion_optimization_config) == null
                    ? void 0
                    : Qe.objectives,
              })
            : null,
        issues_info: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (Xe = e.issues_info) == null
            ? void 0
            : Xe.map(function (e) {
                var t;
                return {
                  additional_info: (t =
                    o("TypeCoercionUtils")).coerceOptionalValue(
                    e.additional_info,
                  ),
                  error_code: t.coerceNonMaybeValue(
                    e.error_code,
                    "issues_info[].error_code",
                    i.id,
                  ),
                  error_message: t.coerceNonMaybeValue(
                    e.error_message,
                    "issues_info[].error_message",
                    i.id,
                  ),
                  error_summary: t.coerceNonMaybeValue(
                    e.error_summary,
                    "issues_info[].error_summary",
                    i.id,
                  ),
                  error_type: t.coerceNonMaybeValue(
                    e.error_type != null
                      ? o("enumUtils").coerce(
                          e.error_type,
                          r("AdsAPIActiveIssuesInfoType"),
                        )
                      : void 0,
                    "issues_info[].error_type",
                    i.id,
                  ),
                  level: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r("AdsAPIActiveIssuesInfoLevel"),
                      e.level,
                    ),
                    "issues_info[].level",
                    i.id,
                  ),
                };
              }),
        ),
        optimal_delivery_growth_opportunities:
          (Ye = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? Ye
            : void 0,
      };
    }
    ((l.coerceGraphQLSpecToGraphAPI = s),
      (l.coerceDynamicGraphQLSpecToGraphAPI = c),
      (l.coerceDynamicGraphQLSpecTier1ToGraphAPI = d),
      (l.coerceDynamicGraphQLSpecTier1V2ToGraphAPI = m),
      (l.coerceDynamicGraphQLSpecTier2ToGraphAPI = p),
      (l.coerceDynamicGraphQLSpecTier2V2ToGraphAPI = _));
  },
  98,
);
