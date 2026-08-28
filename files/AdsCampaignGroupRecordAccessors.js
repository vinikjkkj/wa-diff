__d(
  "AdsCampaignGroupRecordAccessors",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCampaignGroupABTestConfigAccessorsFactory",
    "adsCampaignGroupAdCreationPackageConfigAccessorsFactory",
    "adsCampaignGroupAdvertiserIntentAccessorsFactory",
    "adsCampaignGroupAgencyFeeConfigAccessorsFactory",
    "adsCampaignGroupBidConstraintsAccessorsFactory",
    "adsCampaignGroupBrandLiftStudiesAccessorsFactory",
    "adsCampaignGroupIncrementalConversionOptimizationConfigAccessorsFactory",
    "adsCampaignGroupLightweightSplitTestOptionsAccessorsFactory",
    "adsCampaignGroupMetaCheckoutExperienceConfigAccessorsFactory",
    "adsCampaignGroupMetricsMetadataAccessorsFactory",
    "adsCampaignGroupPromotedObjectAccessorsFactory",
    "adsCollaborativeAdsPartnerInfoAccessorsFactory",
    "adsTimeSuggestionFieldAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e;
        return {
          ab_test_config: r("adsCampaignGroupABTestConfigAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.ab_test_config;
            },
            [].concat(n, ["ab_test_config"]),
          ),
          account_id: (e = o(
            "AdsAdObjectsAccessorUtils",
          )).basicFieldAccessorFactory(t, n, "account_id"),
          ad_creation_package_config: r(
            "adsCampaignGroupAdCreationPackageConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.ad_creation_package_config;
            },
            [].concat(n, ["ad_creation_package_config"]),
          ),
          adlabels: e.basicListFieldAccessorFactory(t, n, "adlabels"),
          adset_bid_amounts: e.basicListFieldAccessorFactory(
            t,
            n,
            "adset_bid_amounts",
          ),
          adset_budgets: e.basicListFieldAccessorFactory(t, n, "adset_budgets"),
          advertiser_intent: r(
            "adsCampaignGroupAdvertiserIntentAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.advertiser_intent;
            },
            [].concat(n, ["advertiser_intent"]),
          ),
          agency_fee_config: r(
            "adsCampaignGroupAgencyFeeConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.agency_fee_config;
            },
            [].concat(n, ["agency_fee_config"]),
          ),
          automation_unified_campaign_type: e.basicFieldAccessorFactory(
            t,
            n,
            "automation_unified_campaign_type",
          ),
          bid_strategy: e.basicFieldAccessorFactory(t, n, "bid_strategy"),
          bid_constraints: r("adsCampaignGroupBidConstraintsAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.bid_constraints;
            },
            [].concat(n, ["bid_constraints"]),
          ),
          boosted_component_client_app_id: e.basicFieldAccessorFactory(
            t,
            n,
            "boosted_component_client_app_id",
          ),
          boosted_component_product: e.basicFieldAccessorFactory(
            t,
            n,
            "boosted_component_product",
          ),
          boosted_page_id: e.basicFieldAccessorFactory(t, n, "boosted_page_id"),
          brand_lift_studies: r(
            "adsCampaignGroupBrandLiftStudiesAccessorsFactory",
          )(function (e) {
            var n;
            return (n = t(e)) == null ? void 0 : n.brand_lift_studies;
          }),
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
          budget_strategy: e.basicFieldAccessorFactory(t, n, "budget_strategy"),
          buy_with_integration_partner: e.basicFieldAccessorFactory(
            t,
            n,
            "buy_with_integration_partner",
          ),
          buy_with_prime_type: e.basicFieldAccessorFactory(
            t,
            n,
            "buy_with_prime_type",
          ),
          buying_type: e.basicFieldAccessorFactory(t, n, "buying_type"),
          can_use_spend_cap: e.basicFieldAccessorFactory(
            t,
            n,
            "can_use_spend_cap",
          ),
          collaborative_ads_partner_info: r(
            "adsCollaborativeAdsPartnerInfoAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.collaborative_ads_partner_info;
            },
            [].concat(n, ["collaborative_ads_partner_info"]),
          ),
          created_time: e.basicFieldAccessorFactory(t, n, "created_time"),
          daily_budget: e.basicFieldAccessorFactory(t, n, "daily_budget"),
          default_lifetime_flex_budget: e.basicFieldAccessorFactory(
            t,
            n,
            "default_lifetime_flex_budget",
          ),
          effective_status: e.basicFieldAccessorFactory(
            t,
            n,
            "effective_status",
          ),
          has_secondary_skadnetwork_reporting: e.basicFieldAccessorFactory(
            t,
            n,
            "has_secondary_skadnetwork_reporting",
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
          mc_experience_config: r(
            "adsCampaignGroupMetaCheckoutExperienceConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.mc_experience_config;
            },
            [].concat(n, ["mc_experience_config"]),
          ),
          incremental_conversion_optimization_config: r(
            "adsCampaignGroupIncrementalConversionOptimizationConfigAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.incremental_conversion_optimization_config;
            },
            [].concat(n, ["incremental_conversion_optimization_config"]),
          ),
          is_autobid: e.basicFieldAccessorFactory(t, n, "is_autobid"),
          is_odax_campaign_group: e.basicFieldAccessorFactory(
            t,
            n,
            "is_odax_campaign_group",
          ),
          is_pca_unified: e.basicFieldAccessorFactory(t, n, "is_pca_unified"),
          is_skadnetwork_attribution: e.basicFieldAccessorFactory(
            t,
            n,
            "is_skadnetwork_attribution",
          ),
          is_using_l3_schedule: e.basicFieldAccessorFactory(
            t,
            n,
            "is_using_l3_schedule",
          ),
          is_average_price_pacing: e.basicFieldAccessorFactory(
            t,
            n,
            "is_average_price_pacing",
          ),
          is_direct_send_campaign: e.basicFieldAccessorFactory(
            t,
            n,
            "is_direct_send_campaign",
          ),
          is_message_campaign: e.basicFieldAccessorFactory(
            t,
            n,
            "is_message_campaign",
          ),
          is_full_funnel: e.basicFieldAccessorFactory(t, n, "is_full_funnel"),
          is_meta_moment_maker_enabled: e.basicFieldAccessorFactory(
            t,
            n,
            "is_meta_moment_maker_enabled",
          ),
          is_reels_trending_ads_enabled: e.basicFieldAccessorFactory(
            t,
            n,
            "is_reels_trending_ads_enabled",
          ),
          frequency_control_specs: e.basicFieldAccessorFactory(
            t,
            n,
            "frequency_control_specs",
          ),
          last_budget_toggling_time: e.basicFieldAccessorFactory(
            t,
            n,
            "last_budget_toggling_time",
          ),
          lifetime_budget: e.basicFieldAccessorFactory(t, n, "lifetime_budget"),
          lifetime_spent: e.basicFieldAccessorFactory(t, n, "lifetime_spent"),
          lightweight_split_test: e.basicFieldAccessorFactory(
            t,
            n,
            "lightweight_split_test",
          ),
          lightweight_split_test_options: r(
            "adsCampaignGroupLightweightSplitTestOptionsAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.lightweight_split_test_options;
            },
            [].concat(n, ["lightweight_split_test_options"]),
          ),
          linked_testimonial_brief_id: e.basicFieldAccessorFactory(
            t,
            n,
            "linked_testimonial_brief_id",
          ),
          metrics_metadata: r(
            "adsCampaignGroupMetricsMetadataAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.metrics_metadata;
            },
            [].concat(n, ["metrics_metadata"]),
          ),
          name: e.basicFieldAccessorFactory(t, n, "name"),
          naming_template_custom_fields: e.basicFieldAccessorFactory(
            t,
            n,
            "naming_template_custom_fields",
          ),
          is_opted_into_experiments: e.basicFieldAccessorFactory(
            t,
            n,
            "is_opted_into_experiments",
          ),
          objective: e.basicFieldAccessorFactory(t, n, "objective"),
          pacing_type: e.basicListFieldAccessorFactory(t, n, "pacing_type"),
          primary_attribution: e.basicFieldAccessorFactory(
            t,
            n,
            "primary_attribution",
          ),
          promoted_object: r("adsCampaignGroupPromotedObjectAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.promoted_object;
            },
            [].concat(n, ["promoted_object"]),
          ),
          should_prorate_budget: e.basicFieldAccessorFactory(
            t,
            n,
            "should_prorate_budget",
          ),
          smart_promotion_type: e.basicFieldAccessorFactory(
            t,
            n,
            "smart_promotion_type",
          ),
          source_campaign_id: e.basicFieldAccessorFactory(
            t,
            n,
            "source_campaign_id",
          ),
          source_recommendation_type: e.basicFieldAccessorFactory(
            t,
            n,
            "source_recommendation_type",
          ),
          special_ad_categories: e.basicListFieldAccessorFactory(
            t,
            n,
            "special_ad_categories",
          ),
          special_ad_category: e.basicFieldAccessorFactory(
            t,
            n,
            "special_ad_category",
          ),
          special_ad_category_country: e.basicListFieldAccessorFactory(
            t,
            n,
            "special_ad_category_country",
          ),
          spend_cap: e.basicFieldAccessorFactory(t, n, "spend_cap"),
          start_time: e.basicFieldAccessorFactory(t, n, "start_time"),
          status: e.basicFieldAccessorFactory(t, n, "status"),
          stop_time: e.basicFieldAccessorFactory(t, n, "stop_time"),
          study_ids: e.basicListFieldAccessorFactory(t, n, "study_ids"),
          time_suggestion: r("adsTimeSuggestionFieldAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.time_suggestion;
            },
            [].concat(n, ["time_suggestion"]),
          ),
          topline_id: e.basicFieldAccessorFactory(t, n, "topline_id"),
          updated_time: e.basicFieldAccessorFactory(t, n, "updated_time"),
          yesterday_spent: e.basicFieldAccessorFactory(t, n, "yesterday_spent"),
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
