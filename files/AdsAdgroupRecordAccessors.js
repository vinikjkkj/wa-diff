__d(
  "AdsAdgroupRecordAccessors",
  [
    "AdsAdObjectsAccessorUtils",
    "AdsAdgroupPlacementAccessorsFactory",
    "adsAdgroupCreativeAccessorsFactory",
    "adsAdgroupCreativeAssetGroupsSpecAccessorsFactory",
    "adsAdgroupCreativeAutomationSpecAccessorsFactory",
    "adsAdgroupMetadataAccessorsFactory",
    "adsAdgroupReviewConfigAccessorsFactory",
    "adsCreativeAudiencePairingPersonaAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e;
        return {
          account_id: (e = o(
            "AdsAdObjectsAccessorUtils",
          )).basicFieldAccessorFactory(t, n, "account_id"),
          ad_active_time: e.basicFieldAccessorFactory(t, n, "ad_active_time"),
          ad_review_feedback: {},
          ad_schedule_end_time: e.basicFieldAccessorFactory(
            t,
            n,
            "ad_schedule_end_time",
          ),
          ad_schedule_start_time: e.basicFieldAccessorFactory(
            t,
            n,
            "ad_schedule_start_time",
          ),
          adgroup_status: e.basicFieldAccessorFactory(t, n, "adgroup_status"),
          adset_id: e.basicFieldAccessorFactory(t, n, "adset_id"),
          adset: {},
          bid_amount: e.basicFieldAccessorFactory(t, n, "bid_amount"),
          bid_info: {},
          bid_type: e.basicFieldAccessorFactory(t, n, "bid_type"),
          biz_ai_enabled_state: e.basicFieldAccessorFactory(
            t,
            n,
            "biz_ai_enabled_state",
          ),
          campaign_id: e.basicFieldAccessorFactory(t, n, "campaign_id"),
          can_aggregate_social_feedback_on_edit: e.basicFieldAccessorFactory(
            t,
            n,
            "can_aggregate_social_feedback_on_edit",
          ),
          conversion_domain: e.basicFieldAccessorFactory(
            t,
            n,
            "conversion_domain",
          ),
          conversion_specs: {},
          created_time: e.basicFieldAccessorFactory(t, n, "created_time"),
          creative_asset_groups_spec: r(
            "adsAdgroupCreativeAssetGroupsSpecAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.creative_asset_groups_spec;
            },
            [].concat(n, ["creative_asset_groups_spec"]),
          ),
          creative_audience_pairing_persona: r(
            "adsCreativeAudiencePairingPersonaAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null
                ? void 0
                : n.creative_audience_pairing_persona;
            },
            [].concat(n, ["creative_audience_pairing_persona"]),
          ),
          creative_automation_spec: r(
            "adsAdgroupCreativeAutomationSpecAccessorsFactory",
          )(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.creative_automation_spec;
            },
            [].concat(n, ["creative_automation_spec"]),
          ),
          creative_delivery_push: e.basicFieldAccessorFactory(
            t,
            n,
            "creative_delivery_push",
          ),
          creative_history: {},
          creative_link_url: e.basicFieldAccessorFactory(
            t,
            n,
            "creative_link_url",
          ),
          creative: r("adsAdgroupCreativeAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.creative;
            },
            [].concat(n, ["creative"]),
          ),
          demolink_hash: e.basicFieldAccessorFactory(t, n, "demolink_hash"),
          display_sequence: e.basicFieldAccessorFactory(
            t,
            n,
            "display_sequence",
          ),
          effective_status: e.basicFieldAccessorFactory(
            t,
            n,
            "effective_status",
          ),
          engagement_audience: e.basicFieldAccessorFactory(
            t,
            n,
            "engagement_audience",
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
          is_creative_flex_feature_aware: e.basicFieldAccessorFactory(
            t,
            n,
            "is_creative_flex_feature_aware",
          ),
          is_eligible_for_message_editing: e.basicFieldAccessorFactory(
            t,
            n,
            "is_eligible_for_message_editing",
          ),
          is_organic_ad_joint_optimized: e.basicFieldAccessorFactory(
            t,
            n,
            "is_organic_ad_joint_optimized",
          ),
          last_updated_by_app_id: e.basicFieldAccessorFactory(
            t,
            n,
            "last_updated_by_app_id",
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
          manual_review_requested: e.basicFieldAccessorFactory(
            t,
            n,
            "manual_review_requested",
          ),
          meta_reward_adgroup_status: e.basicFieldAccessorFactory(
            t,
            n,
            "meta_reward_adgroup_status",
          ),
          metadata: r("adsAdgroupMetadataAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.metadata;
            },
            [].concat(n, ["metadata"]),
          ),
          name: e.basicFieldAccessorFactory(t, n, "name"),
          naming_template_custom_fields: e.basicFieldAccessorFactory(
            t,
            n,
            "naming_template_custom_fields",
          ),
          placement: r("AdsAdgroupPlacementAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.placement;
            },
            [].concat(n, ["placement"]),
          ),
          priority: e.basicFieldAccessorFactory(t, n, "priority"),
          product_set_optimization_setting: e.basicFieldAccessorFactory(
            t,
            n,
            "product_set_optimization_setting",
          ),
          related_media_user_opted_out: e.basicFieldAccessorFactory(
            t,
            n,
            "related_media_user_opted_out",
          ),
          review_config: r("adsAdgroupReviewConfigAccessorsFactory")(
            function (e) {
              var n;
              return (n = t(e)) == null ? void 0 : n.review_config;
            },
            [].concat(n, ["review_config"]),
          ),
          shops_ads_metadata_tags: e.basicListFieldAccessorFactory(
            t,
            n,
            "shops_ads_metadata_tags",
          ),
          source_ad_id: e.basicFieldAccessorFactory(t, n, "source_ad_id"),
          source_app_id: e.basicFieldAccessorFactory(t, n, "source_app_id"),
          status: e.basicFieldAccessorFactory(t, n, "status"),
          tracking_and_conversion_with_defaults: {},
          tracking_specs: e.basicFieldAccessorFactory(t, n, "tracking_specs"),
          updated_time: e.basicFieldAccessorFactory(t, n, "updated_time"),
          view_tags: e.basicFieldAccessorFactory(t, n, "view_tags"),
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
