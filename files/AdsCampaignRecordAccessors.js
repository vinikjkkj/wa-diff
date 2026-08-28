__d(
  "AdsCampaignRecordAccessors",
  [
    "AdsAdObjectsAccessorUtils",
    "adsAdKeywordsAccessorsFactory",
    "adsBidAdjustmentsAccessorsFactory",
    "adsBidConstraintsAccessorsFactory",
    "adsCampaignBrandSafetyConfigAccessorsFactory",
    "adsCampaignGoalAccessorsFactory",
    "adsCampaignMultiAdsAccessorsFactory",
    "adsCampaignPromotedObjectAccessorsFactory",
    "adsCampaignRetailAudienceConfigAccessorsFactory",
    "adsCampaignTargetingAccessorsFactory",
    "adsLiveVideoAdCampaignConfigAccessorsFactory",
    "adsProductDeliveryPreferenceAccessorsFactory",
    "adsSavedAudienceAccessorsFactory",
    "adsTimeSuggestionFieldAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e;
        return {
          account_id: (e = o(
            "AdsAdObjectsAccessorUtils",
          )).basicFieldAccessorFactory(t, n, "account_id"),
          ad_count: e.basicFieldAccessorFactory(t, n, "ad_count"),
          ad_keywords: r("adsAdKeywordsAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.ad_keywords;
            },
            [].concat(n, ["ad_keywords"]),
          ),
          adset_schedule: e.basicListFieldAccessorFactory(
            t,
            n,
            "adset_schedule",
          ),
          anchor_click_through_attribution_window_seconds:
            e.basicFieldAccessorFactory(
              t,
              n,
              "anchor_click_through_attribution_window_seconds",
            ),
          anchor_engaged_view_attribution_window_seconds:
            e.basicFieldAccessorFactory(
              t,
              n,
              "anchor_engaged_view_attribution_window_seconds",
            ),
          anchor_view_through_attribution_window_seconds:
            e.basicFieldAccessorFactory(
              t,
              n,
              "anchor_view_through_attribution_window_seconds",
            ),
          asset_feed_id: e.basicFieldAccessorFactory(t, n, "asset_feed_id"),
          asset_feed_optimization_type: e.basicFieldAccessorFactory(
            t,
            n,
            "asset_feed_optimization_type",
          ),
          attribution_count_type: e.basicFieldAccessorFactory(
            t,
            n,
            "attribution_count_type",
          ),
          attribution_spec: e.basicListFieldAccessorFactory(
            t,
            n,
            "attribution_spec",
          ),
          automatic_manual_state: e.basicFieldAccessorFactory(
            t,
            n,
            "automatic_manual_state",
          ),
          calling_settings: e.basicFieldAccessorFactory(
            t,
            n,
            "calling_settings",
          ),
          bid_adjustments: r("adsBidAdjustmentsAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.bid_adjustments;
            },
            [].concat(n, ["bid_adjustments"]),
          ),
          bid_amount: e.basicFieldAccessorFactory(t, n, "bid_amount"),
          bid_constraints: r("adsBidConstraintsAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.bid_constraints;
            },
            [].concat(n, ["bid_constraints"]),
          ),
          bid_info: e.basicFieldAccessorFactory(t, n, "bid_info"),
          bid_strategy: e.basicFieldAccessorFactory(t, n, "bid_strategy"),
          bid_type: e.basicFieldAccessorFactory(t, n, "bid_type"),
          billing_event: e.basicFieldAccessorFactory(t, n, "billing_event"),
          brand_safety_config: r(
            "adsCampaignBrandSafetyConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.brand_safety_config;
            },
            [].concat(n, ["brand_safety_config"]),
          ),
          budget_remaining: e.basicFieldAccessorFactory(
            t,
            n,
            "budget_remaining",
          ),
          budget_scaling_cost_target: e.basicFieldAccessorFactory(
            t,
            n,
            "budget_scaling_cost_target",
          ),
          budget_scaling_extra_budget: e.basicFieldAccessorFactory(
            t,
            n,
            "budget_scaling_extra_budget",
          ),
          budget_split_metadata_id: e.basicFieldAccessorFactory(
            t,
            n,
            "budget_split_metadata_id",
          ),
          catalog_vertical: e.basicFieldAccessorFactory(
            t,
            n,
            "catalog_vertical",
          ),
          campaign_active_time: e.basicFieldAccessorFactory(
            t,
            n,
            "campaign_active_time",
          ),
          campaign_attribution: e.basicFieldAccessorFactory(
            t,
            n,
            "campaign_attribution",
          ),
          campaign_goal: r("adsCampaignGoalAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.campaign_goal;
            },
            [].concat(n, ["campaign_goal"]),
          ),
          campaign_id: e.basicFieldAccessorFactory(t, n, "campaign_id"),
          campaign_targeting_consolidation: e.basicFieldAccessorFactory(
            t,
            n,
            "campaign_targeting_consolidation",
          ),
          conversion_goal_id: e.basicFieldAccessorFactory(
            t,
            n,
            "conversion_goal_id",
          ),
          conversion_value_expression_spec: e.basicListFieldAccessorFactory(
            t,
            n,
            "conversion_value_expression_spec",
          ),
          conversion_locations: e.basicListFieldAccessorFactory(
            t,
            n,
            "conversion_locations",
          ),
          cost_bidding_mode: e.basicFieldAccessorFactory(
            t,
            n,
            "cost_bidding_mode",
          ),
          bid_constraint_source: e.basicFieldAccessorFactory(
            t,
            n,
            "bid_constraint_source",
          ),
          created_time: e.basicFieldAccessorFactory(t, n, "created_time"),
          creative_sequence: e.basicListFieldAccessorFactory(
            t,
            n,
            "creative_sequence",
          ),
          creative_sequence_repetition_pattern: e.basicFieldAccessorFactory(
            t,
            n,
            "creative_sequence_repetition_pattern",
          ),
          daily_budget: e.basicFieldAccessorFactory(t, n, "daily_budget"),
          daily_imps: e.basicFieldAccessorFactory(t, n, "daily_imps"),
          daily_min_spend_target: e.basicFieldAccessorFactory(
            t,
            n,
            "daily_min_spend_target",
          ),
          daily_spend_cap: e.basicFieldAccessorFactory(t, n, "daily_spend_cap"),
          destination_type: e.basicFieldAccessorFactory(
            t,
            n,
            "destination_type",
          ),
          dsa_beneficiary: e.basicFieldAccessorFactory(t, n, "dsa_beneficiary"),
          dsa_payor: e.basicFieldAccessorFactory(t, n, "dsa_payor"),
          effective_status: e.basicFieldAccessorFactory(
            t,
            n,
            "effective_status",
          ),
          existing_customer_budget_percentage: e.basicFieldAccessorFactory(
            t,
            n,
            "existing_customer_budget_percentage",
          ),
          end_time: e.basicFieldAccessorFactory(t, n, "end_time"),
          external_bid: e.basicFieldAccessorFactory(t, n, "external_bid"),
          frequency_control_specs: e.basicListFieldAccessorFactory(
            t,
            n,
            "frequency_control_specs",
          ),
          full_funnel_exploration_mode: e.basicFieldAccessorFactory(
            t,
            n,
            "full_funnel_exploration_mode",
          ),
          has_active_aco_autoflow_ad: e.basicFieldAccessorFactory(
            t,
            n,
            "has_active_aco_autoflow_ad",
          ),
          has_active_da_aco_ad: e.basicFieldAccessorFactory(
            t,
            n,
            "has_active_da_aco_ad",
          ),
          has_inspiration_gallery_consent: e.basicFieldAccessorFactory(
            t,
            n,
            "has_inspiration_gallery_consent",
          ),
          id: e.basicFieldAccessorFactory(t, n, "id"),
          include_in_ad_study_cell_id: e.basicFieldAccessorFactory(
            t,
            n,
            "include_in_ad_study_cell_id",
          ),
          include_in_ad_study_id: e.basicFieldAccessorFactory(
            t,
            n,
            "include_in_ad_study_id",
          ),
          io_number: e.basicFieldAccessorFactory(t, n, "io_number"),
          is_autobid: e.basicFieldAccessorFactory(t, n, "is_autobid"),
          is_average_price_pacing: e.basicFieldAccessorFactory(
            t,
            n,
            "is_average_price_pacing",
          ),
          is_dynamic_creative: e.basicFieldAccessorFactory(
            t,
            n,
            "is_dynamic_creative",
          ),
          is_ba_skip_delayed_eligible: e.basicFieldAccessorFactory(
            t,
            n,
            "is_ba_skip_delayed_eligible",
          ),
          is_dynamic_creative_asset_customization: e.basicFieldAccessorFactory(
            t,
            n,
            "is_dynamic_creative_asset_customization",
          ),
          is_dynamic_creative_format_automation: e.basicFieldAccessorFactory(
            t,
            n,
            "is_dynamic_creative_format_automation",
          ),
          is_dynamic_creative_optimization: e.basicFieldAccessorFactory(
            t,
            n,
            "is_dynamic_creative_optimization",
          ),
          is_incremental_attribution_enabled: e.basicFieldAccessorFactory(
            t,
            n,
            "is_incremental_attribution_enabled",
          ),
          is_pca_unifiable_with_catalog: e.basicFieldAccessorFactory(
            t,
            n,
            "is_pca_unifiable_with_catalog",
          ),
          biz_ai_enabled_state: e.basicFieldAccessorFactory(
            t,
            n,
            "biz_ai_enabled_state",
          ),
          is_lifetime_flex_with_valid_schedule: e.basicFieldAccessorFactory(
            t,
            n,
            "is_lifetime_flex_with_valid_schedule",
          ),
          is_dc_follow_optimized: e.basicFieldAccessorFactory(
            t,
            n,
            "is_dc_follow_optimized",
          ),
          is_organic_ad_joint_optimized: e.basicFieldAccessorFactory(
            t,
            n,
            "is_organic_ad_joint_optimized",
          ),
          is_pv_follow_optimized: e.basicFieldAccessorFactory(
            t,
            n,
            "is_pv_follow_optimized",
          ),
          is_sequenced_conversion_creation: e.basicFieldAccessorFactory(
            t,
            n,
            "is_sequenced_conversion_creation",
          ),
          is_unified_attribution_window: e.basicFieldAccessorFactory(
            t,
            n,
            "is_unified_attribution_window",
          ),
          lifetime_budget: e.basicFieldAccessorFactory(t, n, "lifetime_budget"),
          lifetime_imps: e.basicFieldAccessorFactory(t, n, "lifetime_imps"),
          lifetime_min_spend_target: e.basicFieldAccessorFactory(
            t,
            n,
            "lifetime_min_spend_target",
          ),
          lifetime_reach: e.basicFieldAccessorFactory(t, n, "lifetime_reach"),
          lifetime_spend_cap: e.basicFieldAccessorFactory(
            t,
            n,
            "lifetime_spend_cap",
          ),
          lightweight_split_test: e.basicFieldAccessorFactory(
            t,
            n,
            "lightweight_split_test",
          ),
          lightweight_split_test_options: e.basicFieldAccessorFactory(
            t,
            n,
            "lightweight_split_test_options",
          ),
          lifetime_spent: e.basicFieldAccessorFactory(t, n, "lifetime_spent"),
          line_number: e.basicFieldAccessorFactory(t, n, "line_number"),
          marketing_goal: e.basicFieldAccessorFactory(t, n, "marketing_goal"),
          max_budget_spend_percentage: e.basicFieldAccessorFactory(
            t,
            n,
            "max_budget_spend_percentage",
          ),
          messaging_structured_lead_spec: e.basicFieldAccessorFactory(
            t,
            n,
            "messaging_structured_lead_spec",
          ),
          metrics_metadata: {},
          min_budget_spend_percentage: e.basicFieldAccessorFactory(
            t,
            n,
            "min_budget_spend_percentage",
          ),
          multi_ads: r("adsCampaignMultiAdsAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.multi_ads;
            },
            [].concat(n, ["multi_ads"]),
          ),
          multi_event_conversion_attribution_window_seconds:
            e.basicFieldAccessorFactory(
              t,
              n,
              "multi_event_conversion_attribution_window_seconds",
            ),
          multi_optimization_goal_weight: e.basicFieldAccessorFactory(
            t,
            n,
            "multi_optimization_goal_weight",
          ),
          name: e.basicFieldAccessorFactory(t, n, "name"),
          naming_template_custom_fields: e.basicFieldAccessorFactory(
            t,
            n,
            "naming_template_custom_fields",
          ),
          optimization_goal: e.basicFieldAccessorFactory(
            t,
            n,
            "optimization_goal",
          ),
          optimization_sub_event: e.basicFieldAccessorFactory(
            t,
            n,
            "optimization_sub_event",
          ),
          pacing_type: e.basicListFieldAccessorFactory(t, n, "pacing_type"),
          partnership_ad_content_list_id: e.basicFieldAccessorFactory(
            t,
            n,
            "partnership_ad_content_list_id",
          ),
          placement: e.basicListFieldAccessorFactory(t, n, "placement"),
          product_delivery_preference: r(
            "adsProductDeliveryPreferenceAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.product_delivery_preference;
            },
            [].concat(n, ["product_delivery_preference"]),
          ),
          live_video_ad_campaign_config: r(
            "adsLiveVideoAdCampaignConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.live_video_ad_campaign_config;
            },
            [].concat(n, ["live_video_ad_campaign_config"]),
          ),
          promoted_object: r("adsCampaignPromotedObjectAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.promoted_object;
            },
            [].concat(n, ["promoted_object"]),
          ),
          prorated_daily_budget: e.basicFieldAccessorFactory(
            t,
            n,
            "prorated_daily_budget",
          ),
          publisher_platforms_status: e.basicFieldAccessorFactory(
            t,
            n,
            "publisher_platforms_status",
          ),
          recurring_budget_semantics: e.basicFieldAccessorFactory(
            t,
            n,
            "recurring_budget_semantics",
          ),
          regional_regulated_categories: e.basicFieldAccessorFactory(
            t,
            n,
            "regional_regulated_categories",
          ),
          regional_regulation_identities: e.basicFieldAccessorFactory(
            t,
            n,
            "regional_regulation_identities",
          ),
          retail_audience_config: r(
            "adsCampaignRetailAudienceConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.retail_audience_config;
            },
            [].concat(n, ["retail_audience_config"]),
          ),
          rf_prediction_id: e.basicFieldAccessorFactory(
            t,
            n,
            "rf_prediction_id",
          ),
          saved_audience_id: e.basicFieldAccessorFactory(
            t,
            n,
            "saved_audience_id",
          ),
          saved_audience: r("adsSavedAudienceAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.saved_audience;
            },
            [].concat(n, ["saved_audience"]),
          ),
          search_themes: e.basicListFieldAccessorFactory(t, n, "search_themes"),
          shops_ads_metadata_tags: e.basicListFieldAccessorFactory(
            t,
            n,
            "shops_ads_metadata_tags",
          ),
          should_prorate_budget: e.basicFieldAccessorFactory(
            t,
            n,
            "should_prorate_budget",
          ),
          source_adset_id: e.basicFieldAccessorFactory(t, n, "source_adset_id"),
          sourced_content_brief_id: e.basicFieldAccessorFactory(
            t,
            n,
            "sourced_content_brief_id",
          ),
          start_time: e.basicFieldAccessorFactory(t, n, "start_time"),
          status: e.basicFieldAccessorFactory(t, n, "status"),
          study_ids: e.basicListFieldAccessorFactory(t, n, "study_ids"),
          targeting: r("adsCampaignTargetingAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.targeting;
            },
            [].concat(n, ["targeting"]),
          ),
          targeting_as_signal: e.basicFieldAccessorFactory(
            t,
            n,
            "targeting_as_signal",
          ),
          time_based_ad_rotation_id_blocks: e.basicListFieldAccessorFactory(
            t,
            n,
            "time_based_ad_rotation_id_blocks",
          ),
          time_based_ad_rotation_intervals: e.basicListFieldAccessorFactory(
            t,
            n,
            "time_based_ad_rotation_intervals",
          ),
          time_suggestion: r("adsTimeSuggestionFieldAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.time_suggestion;
            },
            [].concat(n, ["time_suggestion"]),
          ),
          topline_id: e.basicFieldAccessorFactory(t, n, "topline_id"),
          updated_time: e.basicFieldAccessorFactory(t, n, "updated_time"),
          value_adjustment_rule_collection_id: e.basicFieldAccessorFactory(
            t,
            n,
            "value_adjustment_rule_collection_id",
          ),
          value_rule_set_id: e.basicFieldAccessorFactory(
            t,
            n,
            "value_rule_set_id",
          ),
          value_rules_applied: e.basicFieldAccessorFactory(
            t,
            n,
            "value_rules_applied",
          ),
          value_rules_entry_point: e.basicFieldAccessorFactory(
            t,
            n,
            "value_rules_entry_point",
          ),
          value_rules_spec: e.basicFieldAccessorFactory(
            t,
            n,
            "value_rules_spec",
          ),
          placement_soft_opt_out: e.basicListFieldAccessorFactory(
            t,
            n,
            "placement_soft_opt_out",
          ),
        };
      },
      s = e(function (e) {
        return e;
      }, []),
      u = s;
    l.default = u;
  },
  98,
);
