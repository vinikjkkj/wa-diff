__d(
  "MAIBAPreviewPublishFieldFormatter",
  [
    "MAIBAPreviewPublishAdsEnumFormatter",
    "MAIBAPreviewPublishBillingEventFormatter",
    "MAIBAPreviewPublishBooleanFormatter",
    "MAIBAPreviewPublishBudgetStrategyFormatter",
    "MAIBAPreviewPublishCurrencyFormatter",
    "MAIBAPreviewPublishDurationFormatter",
    "MAIBAPreviewPublishEnumAtomFormatter",
    "MAIBAPreviewPublishNamedIDFormatter",
    "MAIBAPreviewPublishPercentFormatter",
    "MAIBAPreviewPublishScheduleFormatter",
    "MAIBAPreviewPublishSettingFormatter",
    "MAIBAPreviewPublishTimestampFormatter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        "bid_amount",
        "daily_budget",
        "daily_min_spend_target",
        "daily_spend_cap",
        "lifetime_budget",
        "lifetime_min_spend_target",
        "lifetime_spend_cap",
        "spend_cap",
      ]),
      s = new Set([
        "budget_rebalance_flag",
        "is_adset_budget_sharing_enabled",
        "is_autobid",
        "is_average_price_pacing",
        "is_ba_skip_delayed_eligible",
        "is_budget_schedule_enabled",
        "is_dc_follow_optimized",
        "is_incremental_attribution_enabled",
        "is_meta_moment_maker_enabled",
        "is_organic_ad_joint_optimized",
        "is_reels_trending_ads_enabled",
        "is_sequenced_conversion_creation",
        "is_skadnetwork_attribution",
        "use_upstream_event",
        "value_rules_applied",
      ]),
      u = new Set([
        "existing_customer_budget_percentage",
        "max_budget_spend_percentage",
        "min_budget_spend_percentage",
      ]),
      c = new Set(["multi_event_conversion_attribution_window_seconds"]),
      d = new Set(["interval_days"]),
      m = new Set([
        "cost_bidding_mode",
        "creative_sequence_repetition_pattern",
        "event",
        "full_funnel_exploration_mode",
        "multi_optimization_goal_weight",
        "optimization_goal",
        "optimization_sub_event",
        "pacing_type",
        "regional_regulated_categories",
        "smart_promotion_type",
        "special_ad_categories",
        "special_ad_category",
      ]),
      p = new Set([
        "end_time",
        "start_time",
        "stop_time",
        "time_based_ad_rotation_intervals",
        "time_start",
        "time_stop",
      ]),
      _ = new Set(["adset_schedule"]),
      f = new Set([
        "rf_prediction_id",
        "saved_audience_id",
        "time_based_ad_rotation_id_blocks",
        "value_rule_set_id",
      ]),
      g = new Set(["pixel_id"]);
    function h(t) {
      return e.has(t);
    }
    function y() {
      var t = new Map(),
        n = function (n, r) {
          n.forEach(function (e) {
            return t.set(e, r);
          });
        };
      return (
        n(e, function (e, t) {
          return o("MAIBAPreviewPublishCurrencyFormatter").formatCurrencyValue(
            e,
            t.currency,
          );
        }),
        n(s, function (e) {
          return o("MAIBAPreviewPublishBooleanFormatter").formatBooleanValue(e);
        }),
        n(u, function (e) {
          return o("MAIBAPreviewPublishPercentFormatter").formatPercentageValue(
            e,
          );
        }),
        n(c, function (e) {
          return o(
            "MAIBAPreviewPublishDurationFormatter",
          ).formatDurationSecondsValue(e);
        }),
        n(d, function (e) {
          return o(
            "MAIBAPreviewPublishDurationFormatter",
          ).formatDurationDaysValue(e);
        }),
        n(m, function (e) {
          return o("MAIBAPreviewPublishEnumAtomFormatter").formatEnumValue(e);
        }),
        n(p, function (e, t) {
          return o(
            "MAIBAPreviewPublishTimestampFormatter",
          ).formatTimestampValue(e, t.timezoneID);
        }),
        n(_, function (e) {
          return o("MAIBAPreviewPublishScheduleFormatter").formatScheduleValue(
            e,
          );
        }),
        n(f, function (e, t, n) {
          return o("MAIBAPreviewPublishNamedIDFormatter").formatEntityIDValue(
            n,
            e,
            t.entityNames,
          );
        }),
        n(g, function (e, t) {
          return o("MAIBAPreviewPublishNamedIDFormatter").formatPixelIDValue(
            e,
            t.pixelNames,
          );
        }),
        t.set("bid_strategy", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").bidStrategyLabel(e);
        }),
        t.set("billing_event", function (e) {
          return o(
            "MAIBAPreviewPublishBillingEventFormatter",
          ).billingEventLabel(e);
        }),
        t.set("budget_strategy", function (e) {
          return o(
            "MAIBAPreviewPublishBudgetStrategyFormatter",
          ).budgetStrategyLabel(e);
        }),
        t.set("buying_type", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").buyingTypeLabel(e);
        }),
        t.set("call_to_action_type", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").callToActionLabel(e);
        }),
        t.set("destination_type", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").destinationTypeLabel(
            e,
          );
        }),
        t.set("custom_event_type", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").standardEventLabel(e);
        }),
        t.set("objective", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").objectiveLabel(e);
        }),
        t.set("status", function (e) {
          return o("MAIBAPreviewPublishAdsEnumFormatter").statusLabel(e);
        }),
        t.set("automatic_manual_state", function (e) {
          return o(
            "MAIBAPreviewPublishSettingFormatter",
          ).messageDestinationModeLabel(e);
        }),
        t.set("biz_ai_enabled_state", function (e) {
          return o(
            "MAIBAPreviewPublishSettingFormatter",
          ).businessAIRepliesLabel(e);
        }),
        t.set("special_ad_category_country", function (e) {
          return o(
            "MAIBAPreviewPublishSettingFormatter",
          ).specialAdCategoryCountriesLabel(e);
        }),
        t.set("targeting_as_signal", function (e) {
          return o(
            "MAIBAPreviewPublishSettingFormatter",
          ).audienceSuggestionsLabel(e);
        }),
        t.set("targeting_optimization", function (e) {
          return o(
            "MAIBAPreviewPublishSettingFormatter",
          ).detailedTargetingExpansionLabel(e);
        }),
        t
      );
    }
    var C = y();
    function b(e, t, n) {
      var r, o;
      return t == null || t === ""
        ? null
        : (r = (o = C.get(e)) == null ? void 0 : o(t, n, e)) != null
          ? r
          : null;
    }
    ((l.isCurrencyField = h), (l.formatFieldValue = b));
  },
  98,
);
