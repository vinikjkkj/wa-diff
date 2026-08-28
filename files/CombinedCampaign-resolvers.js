__d(
  "CombinedCampaign-resolvers",
  [
    "AdsAPIOptimizationGoals",
    "AdsAdObjectRelayIDUtils",
    "AdsDML",
    "AdsDMLUtils",
    "AdsManagerAccountIDToNodeIDUtils",
    "AdsRelayReadInteropHostIDUtils",
    "AdsRelayReadInteropLogHostID",
    "AdsUEditorHostIDs",
    "err",
    "gkx",
    "ifRequired",
    "nullthrows",
    "subscribeCombinedStoreLive",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          return e.data.L2Campaign(e.vars.id, function (t) {
            return t != null
              ? {
                  adObjectLevel: e.vars.adObjectLevel,
                  campaign: t,
                  hostID: e.vars.hostID,
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(
                    e.vars.id,
                    e.vars.hostID,
                    e.vars.adObjectLevel,
                  ),
                }
              : null;
          });
        }),
      s = function () {
        var e = r("ifRequired")(
          "AdsCampaignBulkEditStore",
          function (e) {
            return e;
          },
          function () {},
        );
        return r("nullthrows")(
          e,
          "The AdsCampaignBulkEditStore store is not available. This likely means this data is being accessed outside of the L2 bulk edit flow.",
        );
      },
      u = function () {
        var e = s();
        return o("AdsDMLUtils").storeToQuery({
          dataGetter: function (t, n) {
            var e,
              r =
                (e = n.getState().rows.get(t.id)) == null ||
                e.current.toJS == null
                  ? void 0
                  : e.current.toJS();
            return r != null
              ? {
                  adObjectLevel: t.adObjectLevel,
                  campaign: r,
                  hostID: t.hostID,
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(t.id, t.hostID, t.adObjectLevel),
                }
              : null;
          },
          store: e,
        });
      };
    function c(t) {
      return r("gkx")("11010")
        ? o("subscribeCombinedStoreLive").subscribeCombinedCampaignStoreLive(t)
        : o("AdsDML").subscribeQueryLive(e, t);
    }
    function d(e) {
      var t = o("AdsRelayReadInteropHostIDUtils").decodeRelayIDWithHostID(e),
        n = t.adObjectLevel,
        a = t.hostID,
        l = t.id;
      if (
        (o("AdsRelayReadInteropLogHostID").maybeLogHostID(a, i.id),
        n != null &&
          n !== o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels.CAMPAIGN)
      )
        return c({ adObjectLevel: n, hostID: a, id: l });
      switch (a) {
        case r("AdsUEditorHostIDs").EDITING:
        case r("AdsUEditorHostIDs").TEST_AND_LEARN:
        case r("AdsUEditorHostIDs").EDITING_CREATIVE_CONTAINER:
          return c({ adObjectLevel: n, hostID: a, id: l });
        case r("AdsUEditorHostIDs").BULK_EDIT_DIALOG:
          return o("AdsDML").subscribeQueryLive(u(), {
            adObjectLevel: n,
            hostID: a,
            id: l,
          });
        case r("AdsUEditorHostIDs").CREATION:
        default:
          throw r("err")("Unhandled hostID " + a);
      }
    }
    function m(e) {
      return e.campaign;
    }
    function p(e) {
      return { id: e.campaign.account_id };
    }
    function _(e) {
      var t = e.campaign.account_id,
        n = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(t);
      return n == null ? null : { id: n };
    }
    function f(e) {
      return { id: e.campaign.id };
    }
    function g(e) {
      return e.campaign.account_id;
    }
    function h(e) {
      return e.campaign.id;
    }
    function y(e) {
      return e.campaign.attribution_count_type;
    }
    function C(e) {
      return e.campaign.attribution_spec;
    }
    function b(e) {
      return e.campaign.bid_amount;
    }
    function v(e) {
      return e.campaign.bid_strategy;
    }
    function S(e) {
      return e.campaign.cost_bidding_mode;
    }
    function R(e) {
      return e.campaign.brand_safety_config;
    }
    function L(e) {
      return e.campaign.retail_audience_config;
    }
    function E(e) {
      return e.campaign.calling_settings;
    }
    function k(e) {
      return e.campaign.messaging_structured_lead_spec;
    }
    function I(e) {
      return e.campaign.campaign_id;
    }
    function T(e) {
      var t = e.hostID;
      return {
        id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
          e.campaign.campaign_id,
          t,
          e.adObjectLevel,
        ),
      };
    }
    function D(e) {
      return e.campaign.budget_scaling_cost_target;
    }
    function x(e) {
      return e.campaign.budget_scaling_extra_budget;
    }
    function $(e) {
      return e.campaign.budget_scaling_cost_target;
    }
    function P(e) {
      return e.campaign.budget_scaling_extra_budget;
    }
    function N(e) {
      return e.campaign.budget_scaling_cost_target_default;
    }
    function M(e) {
      return e.campaign.budget_scaling_budget_multiplier_default;
    }
    function w(e) {
      return e.campaign.daily_budget;
    }
    function A(e) {
      return e.campaign.min_budget_spend_percentage;
    }
    function F(e) {
      return e.campaign.max_budget_spend_percentage;
    }
    function O(e) {
      return e.campaign.destination_type;
    }
    function B(e) {
      return e.campaign.automatic_manual_state;
    }
    function W(e) {
      return e.campaign.end_time;
    }
    function q(e) {
      return e.campaign.has_active_da_aco_ad;
    }
    function U(e) {
      return e.campaign.is_ba_skip_delayed_eligible;
    }
    function V(e) {
      return e.campaign.biz_ai_enabled_state;
    }
    function H(e) {
      return e.campaign.catalog_vertical;
    }
    function G(e) {
      return e.campaign.is_dynamic_creative_asset_customization;
    }
    function z(e) {
      return e.campaign.is_incremental_attribution_enabled;
    }
    function j(e) {
      return e.campaign.is_sequenced_conversion_creation;
    }
    function K(e) {
      return e.campaign.is_dynamic_creative_optimization;
    }
    function Q(e) {
      return e.campaign.is_dynamic_creative;
    }
    function X(e) {
      return e.campaign.is_eligible_for_advantage_plus_audience;
    }
    function Y(e) {
      return e.campaign.adaptive_geo_exclusion_eligible;
    }
    function J(e) {
      return e.campaign.is_average_price_pacing;
    }
    function Z(e) {
      return e.campaign.is_pca_unifiable_with_catalog;
    }
    function ee(e) {
      return e.campaign.lifetime_budget;
    }
    function te(e) {
      return e.campaign.name;
    }
    function ne(e) {
      return e.campaign.optimization_goal;
    }
    function re(e) {
      return e.campaign.pacing_type;
    }
    function oe(e) {
      return e.campaign.promoted_object;
    }
    function ae(e) {
      return { id: e.campaign.id };
    }
    function ie(e) {
      return e.campaign.saved_audience_id;
    }
    function le(e) {
      return e.campaign.source_adset_id;
    }
    function se(e) {
      return e.campaign.source_adset_id == null
        ? null
        : {
            id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
              e.campaign.source_adset_id,
              e.hostID,
              e.adObjectLevel,
            ),
          };
    }
    function ue(e) {
      return e.campaign.start_time;
    }
    function ce(e) {
      return e.campaign.targeting_as_signal;
    }
    function de(e) {
      return e.campaign.targeting;
    }
    function me(e) {
      return e.campaign.campaign_targeting_consolidation;
    }
    function pe(e) {
      return e.campaign.updated_time;
    }
    function _e(e) {
      return e.campaign.topline_id;
    }
    function fe(e) {
      return e.campaign.ad_count;
    }
    function ge(e) {
      return e.campaign.ad_keywords;
    }
    function he(e) {
      return e.campaign.adset_schedule;
    }
    function ye(e) {
      return e.campaign.asset_feed_id;
    }
    function Ce(e) {
      return e.campaign.asset_feed_optimization_type;
    }
    function be(e) {
      return e.campaign.bid_adjustments;
    }
    function ve(e) {
      return e.campaign.bid_constraints;
    }
    function Se(e) {
      return e.campaign.bid_info;
    }
    function Re(e) {
      return e.campaign.bid_type;
    }
    function Le(e) {
      return e.campaign.billing_event;
    }
    function Ee(e) {
      return e.campaign.budget_remaining;
    }
    function ke(e) {
      return e.campaign.budget_split_metadata_id;
    }
    function Ie(e) {
      return e.campaign.campaign_active_time;
    }
    function Te(e) {
      return e.campaign.campaign_attribution;
    }
    function De(e) {
      return e.campaign.campaign_creation_source;
    }
    function xe(e) {
      return e.campaign.conversion_goal_id;
    }
    function $e(e) {
      return e.campaign.conversion_location;
    }
    function Pe(e) {
      return e.campaign.conversion_locations;
    }
    function Ne(e) {
      return e.campaign.created_time;
    }
    function Me(e) {
      return e.campaign.cpr_benchmark;
    }
    function we(e) {
      return e.campaign.creative_diversity_label;
    }
    function Ae(e) {
      return e.campaign.creative_diversity_score;
    }
    function Fe(e) {
      return e.campaign.creative_fatigue_prediction_ple;
    }
    function Oe(e) {
      return e.campaign.repeat_reach_state;
    }
    function Be(e) {
      return e.campaign.creative_sequence;
    }
    function We(e) {
      return e.campaign.creative_sequence_repetition_pattern;
    }
    function qe(e) {
      return e.campaign.daily_imps;
    }
    function Ue(e) {
      return e.campaign.daily_min_spend_target;
    }
    function Ve(e) {
      return e.campaign.daily_spend_cap;
    }
    function He(e) {
      return e.campaign.delivery_info;
    }
    function Ge(e) {
      return e.campaign.delivery_status;
    }
    function ze(e) {
      return e.campaign.delivery_sub_status;
    }
    function je(e) {
      return e.campaign.dsa_beneficiary;
    }
    function Ke(e) {
      return e.campaign.dsa_payor;
    }
    function Qe(e) {
      return e.campaign.effective_status;
    }
    function Xe(e) {
      return e.campaign.existing_customer_budget_percentage;
    }
    function Ye(e) {
      return e.campaign.external_bid;
    }
    function Je(e) {
      return e.campaign.frequency_control_specs;
    }
    function Ze(e) {
      return e.campaign.full_funnel_exploration_mode;
    }
    function et(e) {
      return e.campaign.has_active_aco_autoflow_ad;
    }
    function tt(e) {
      return e.campaign.has_inspiration_gallery_consent;
    }
    function nt(e) {
      return e.campaign.include_in_ad_study_cell_id;
    }
    function rt(e) {
      return e.campaign.include_in_ad_study_id;
    }
    function ot(e) {
      return e.campaign.io_number;
    }
    function at(e) {
      return e.campaign.is_autobid;
    }
    function it(e) {
      return e.campaign.is_dynamic_creative_format_automation;
    }
    function lt(e) {
      return e.campaign.is_message_marketing;
    }
    function st(e) {
      return e.campaign.is_dc_follow_optimized;
    }
    function ut(e) {
      return e.campaign.is_organic_ad_joint_optimized;
    }
    function ct(e) {
      return e.campaign.is_pv_follow_optimized;
    }
    function dt(e) {
      return e.campaign.is_unified_attribution_window;
    }
    function mt(e) {
      return e.campaign.is_using_target_cpa;
    }
    function pt(e) {
      return e.campaign.lifetime_imps;
    }
    function _t(e) {
      return e.campaign.lifetime_min_spend_target;
    }
    function ft(e) {
      return e.campaign.lifetime_reach;
    }
    function gt(e) {
      return e.campaign.lifetime_spend_cap;
    }
    function ht(e) {
      return e.campaign.lifetime_spent;
    }
    function yt(e) {
      return e.campaign.lightweight_split_test;
    }
    function Ct(e) {
      return e.campaign.lightweight_split_test_options;
    }
    function bt(e) {
      return e.campaign.line_number;
    }
    function vt(e) {
      return e.campaign.marketing_goal;
    }
    function St(e) {
      return e.campaign.metrics_metadata;
    }
    function Rt(e) {
      return e.campaign.multi_ads;
    }
    function Lt(e) {
      return e.campaign.multi_event_conversion_attribution_window_seconds;
    }
    function Et(e) {
      return e.campaign.multi_optimization_goal_weight;
    }
    function kt(e) {
      return e.campaign.naming_template_custom_fields;
    }
    function It(e) {
      return e.campaign.optimization_sub_event;
    }
    function Tt(e) {
      return e.campaign.placement;
    }
    function Dt(e) {
      return e.campaign.prorated_daily_budget;
    }
    function xt(e) {
      return e.campaign.recurring_budget_semantics;
    }
    function $t(e) {
      var t;
      return (t = e.campaign) == null
        ? void 0
        : t.regional_regulated_categories;
    }
    function Pt(e) {
      var t;
      return (t = e.campaign) == null
        ? void 0
        : t.regional_regulation_identities;
    }
    function Nt(e) {
      return e.campaign.rf_prediction_id;
    }
    function Mt(e) {
      var t = e.campaign.rf_prediction_id;
      return t != null ? { id: String(t) } : null;
    }
    function wt(e) {
      return e.campaign.search_themes;
    }
    function At(e) {
      return e.campaign.shops_ads_metadata_tags;
    }
    function Ft(e) {
      return e.campaign.source_adset_id;
    }
    function Ot(e) {
      return e.campaign.status;
    }
    function Bt(e) {
      return e.campaign.study_ids;
    }
    function Wt(e) {
      return e.campaign.time_based_ad_rotation_id_blocks;
    }
    function qt(e) {
      return e.campaign.time_based_ad_rotation_intervals;
    }
    function Ut(e) {
      return e.campaign.time_suggestion;
    }
    function Vt(e) {
      return e.campaign.conversion_value_expression_spec;
    }
    function Ht(e) {
      return { id: e.campaign.campaign_id };
    }
    function Gt(e) {
      return e.campaign.live_video_ad_campaign_config;
    }
    function zt(e) {
      return e.campaign.value_adjustment_rule_collection_id;
    }
    function jt(e) {
      return e.campaign.value_rule_set_id;
    }
    function Kt(e) {
      return e.campaign.value_rules_entry_point;
    }
    function Qt(e) {
      return e.campaign.value_rules_spec;
    }
    function Xt(e) {
      return e.campaign.placement_soft_opt_out;
    }
    function Yt(e) {
      return {
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
        id: e.campaign.id,
      };
    }
    function Jt(e) {
      return e.campaign.sourced_content_brief_id;
    }
    function Zt(e) {
      return e.campaign.campaign_goal;
    }
    function en(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s = e.campaign.promoted_object,
        u =
          (t =
            (n =
              (o = s == null ? void 0 : s.custom_event_type) != null
                ? o
                : s == null ||
                    (a = s.omnichannel_object) == null ||
                    (a = a.pixel) == null ||
                    (a = a.at(0)) == null
                  ? void 0
                  : a.custom_event_type) != null
              ? n
              : s == null ||
                  (i = s.omnichannel_object) == null ||
                  (i = i.app) == null ||
                  (i = i.at(0)) == null
                ? void 0
                : i.custom_event_type) != null
            ? t
            : s == null ||
                (l = s.omnichannel_object) == null ||
                (l = l.offline) == null ||
                (l = l.at(0)) == null
              ? void 0
              : l.custom_event_type;
      return u === "PURCHASE"
        ? !0
        : u === "ADD_TO_CART"
          ? r("gkx")("12394")
          : u === "ADD_TO_WISHLIST"
            ? r("gkx")("25477")
            : !1;
    }
    function tn(e) {
      var t = e.campaign.optimization_goal;
      return (
        t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
        t === r("AdsAPIOptimizationGoals").VALUE
      );
    }
    ((l.CombinedCampaign = d),
      (l.self = m),
      (l.ad_account = p),
      (l.server_ad_account = _),
      (l.server_ad_campaign = f),
      (l.ad_account_id = g),
      (l.ad_object_id = h),
      (l.attribution_count_type = y),
      (l.attribution_spec = C),
      (l.bid_amount = b),
      (l.bid_strategy = v),
      (l.cost_bidding_mode = S),
      (l.brand_safety_config = R),
      (l.retail_audience_config = L),
      (l.calling_settings = E),
      (l.messaging_structured_lead_spec = k),
      (l.campaign_id = I),
      (l.combined_campaign_group = T),
      (l.budget_scaling_cost_target = D),
      (l.budget_scaling_extra_budget = x),
      (l.budget_scaling_cost_target_safe_value_str = $),
      (l.budget_scaling_extra_budget_safe_value_str = P),
      (l.budget_scaling_cost_target_default = N),
      (l.budget_scaling_budget_multiplier_default = M),
      (l.daily_budget = w),
      (l.min_budget_spend_percentage = A),
      (l.max_budget_spend_percentage = F),
      (l.destination_type = O),
      (l.automatic_manual_state = B),
      (l.end_time = W),
      (l.has_active_da_aco_ad = q),
      (l.is_ba_skip_delayed_eligible = U),
      (l.biz_ai_enabled_state = V),
      (l.catalog_vertical = H),
      (l.is_dynamic_creative_asset_customization = G),
      (l.is_incremental_attribution_enabled = z),
      (l.is_sequenced_conversion_creation = j),
      (l.is_dynamic_creative_optimization = K),
      (l.is_dynamic_creative = Q),
      (l.is_eligible_for_advantage_plus_audience = X),
      (l.adaptive_geo_exclusion_eligible = Y),
      (l.is_average_price_pacing = J),
      (l.is_pca_unifiable_with_catalog = Z),
      (l.lifetime_budget = ee),
      (l.name = te),
      (l.optimization_goal = ne),
      (l.pacing_type = re),
      (l.promoted_object = oe),
      (l.saved_audience = ae),
      (l.saved_audience_id = ie),
      (l.source_ad_id = le),
      (l.source_object = se),
      (l.start_time = ue),
      (l.targeting_as_signal = ce),
      (l.targeting = de),
      (l.campaign_targeting_consolidation = me),
      (l.updated_time = pe),
      (l.topline_id = _e),
      (l.ad_count = fe),
      (l.ad_keywords = ge),
      (l.adset_schedule = he),
      (l.asset_feed_id = ye),
      (l.asset_feed_optimization_type = Ce),
      (l.bid_adjustments = be),
      (l.bid_constraints = ve),
      (l.bid_info = Se),
      (l.bid_type = Re),
      (l.billing_event = Le),
      (l.budget_remaining = Ee),
      (l.budget_split_metadata_id = ke),
      (l.campaign_active_time = Ie),
      (l.campaign_attribution = Te),
      (l.campaign_creation_source = De),
      (l.conversion_goal_id = xe),
      (l.conversion_location = $e),
      (l.conversion_locations = Pe),
      (l.created_time = Ne),
      (l.cpr_benchmark = Me),
      (l.creative_diversity_label = we),
      (l.creative_diversity_score = Ae),
      (l.creative_fatigue_prediction_ple = Fe),
      (l.repeat_reach_state = Oe),
      (l.creative_sequence = Be),
      (l.creative_sequence_repetition_pattern = We),
      (l.daily_imps = qe),
      (l.daily_min_spend_target = Ue),
      (l.daily_spend_cap = Ve),
      (l.delivery_info = He),
      (l.delivery_status = Ge),
      (l.delivery_sub_status = ze),
      (l.dsa_beneficiary = je),
      (l.dsa_payor = Ke),
      (l.effective_status = Qe),
      (l.existing_customer_budget_percentage = Xe),
      (l.external_bid = Ye),
      (l.frequency_control_specs = Je),
      (l.full_funnel_exploration_mode = Ze),
      (l.has_active_aco_autoflow_ad = et),
      (l.has_inspiration_gallery_consent = tt),
      (l.include_in_ad_study_cell_id = nt),
      (l.include_in_ad_study_id = rt),
      (l.io_number = ot),
      (l.is_autobid = at),
      (l.is_dynamic_creative_format_automation = it),
      (l.is_message_marketing = lt),
      (l.is_dc_follow_optimized = st),
      (l.is_organic_ad_joint_optimized = ut),
      (l.is_pv_follow_optimized = ct),
      (l.is_unified_attribution_window = dt),
      (l.is_using_target_cpa = mt),
      (l.lifetime_imps = pt),
      (l.lifetime_min_spend_target = _t),
      (l.lifetime_reach = ft),
      (l.lifetime_spend_cap = gt),
      (l.lifetime_spent = ht),
      (l.lightweight_split_test = yt),
      (l.lightweight_split_test_options = Ct),
      (l.line_number = bt),
      (l.marketing_goal = vt),
      (l.metrics_metadata = St),
      (l.multi_ads = Rt),
      (l.multi_event_conversion_attribution_window_seconds = Lt),
      (l.multi_optimization_goal_weight = Et),
      (l.naming_template_custom_fields = kt),
      (l.optimization_sub_event = It),
      (l.placement = Tt),
      (l.prorated_daily_budget = Dt),
      (l.recurring_budget_semantics = xt),
      (l.regional_regulated_categories = $t),
      (l.regional_regulation_identities = Pt),
      (l.rf_prediction_id = Nt),
      (l.rf_prediction = Mt),
      (l.search_themes = wt),
      (l.shops_ads_metadata_tags = At),
      (l.source_adset_id = Ft),
      (l.status = Ot),
      (l.study_ids = Bt),
      (l.time_based_ad_rotation_id_blocks = Wt),
      (l.time_based_ad_rotation_intervals = qt),
      (l.time_suggestion = Ut),
      (l.conversion_value_expression_spec = Vt),
      (l.dynamic_targeting_category = Ht),
      (l.live_video_ad_campaign_config = Gt),
      (l.value_adjustment_rule_collection_id = zt),
      (l.value_rule_set_id = jt),
      (l.value_rules_entry_point = Kt),
      (l.value_rules_spec = Qt),
      (l.placement_soft_opt_out = Xt),
      (l.utils = Yt),
      (l.sourced_content_brief_id = Jt),
      (l.campaign_goal = Zt),
      (l.is_conversion_event_supported_for_pso = en),
      (l.is_optimization_goal_supported_for_pso = tn));
  },
  98,
);
