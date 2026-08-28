__d(
  "CombinedCampaignGroup-resolvers",
  [
    "AdsAPIBidStrategies",
    "AdsAPIPacingType",
    "AdsAdObjectRelayIDUtils",
    "AdsDML",
    "AdsDMLUtils",
    "AdsManagerAccountIDToNodeIDUtils",
    "AdsRelayReadInteropHostIDUtils",
    "AdsRelayReadInteropLogHostID",
    "AdsUEditorHostIDs",
    "ISOCountryCode",
    "err",
    "getGraphQLEnumSafe",
    "gkx",
    "ifRequired",
    "nullthrows",
    "subscribeCombinedStoreLive",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          var t = e.data.L3CampaignGroup(e.vars.id, function (e) {
            return e;
          });
          return t != null
            ? {
                adObjectLevel: e.vars.adObjectLevel,
                campaignGroup: t,
                hostID: e.vars.hostID,
                id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
                  e.vars.id,
                  e.vars.hostID,
                  e.vars.adObjectLevel,
                ),
              }
            : null;
        }),
      s = function () {
        var e = r("ifRequired")(
          "AdsCampaignGroupBulkEditStore",
          function (e) {
            return e;
          },
          function () {},
        );
        return r("nullthrows")(
          e,
          "The AdsCampaignGroupBulkEditStore is not available. This likely means this data is being accessed outside of the L3 bulk edit flow.",
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
                  campaignGroup: r,
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
        ? o(
            "subscribeCombinedStoreLive",
          ).subscribeCombinedCampaignGroupStoreLive(t)
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
          n !==
            o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels
              .CAMPAIGN_GROUP)
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
      return e.campaignGroup;
    }
    function p(e) {
      return e.campaignGroup.ab_test_config;
    }
    function _(e) {
      return { id: e.campaignGroup.account_id };
    }
    function f(e) {
      var t = e.campaignGroup.account_id,
        n = o("AdsManagerAccountIDToNodeIDUtils").getAccountNodeID(t);
      return n == null ? null : { id: n };
    }
    function g(e) {
      var t,
        n =
          (t = e.campaignGroup.promoted_object) == null
            ? void 0
            : t.product_catalog_id;
      return n == null ? null : { id: n };
    }
    function h(e) {
      return e.campaignGroup.adlabels;
    }
    function y(e) {
      return e.campaignGroup.adset_bid_amounts;
    }
    function C(e) {
      return e.campaignGroup.ad_creation_package_config;
    }
    function b(e) {
      return e.campaignGroup.id;
    }
    function v(e) {
      return e.campaignGroup.bid_strategy;
    }
    function S(e) {
      return e.campaignGroup.bid_strategy == null
        ? null
        : r("getGraphQLEnumSafe")(
            r("AdsAPIBidStrategies"),
            e.campaignGroup.bid_strategy,
          );
    }
    function R(e) {
      return e.campaignGroup.boosted_component_client_app_id;
    }
    function L(e) {
      return e.campaignGroup.boosted_component_product;
    }
    function E(e) {
      return e.campaignGroup.boosted_page_id;
    }
    function k(e) {
      return e.campaignGroup.brand_lift_studies;
    }
    function I(e) {
      return e.campaignGroup.budget_remaining == null
        ? "0"
        : e.campaignGroup.budget_remaining;
    }
    function T(e) {
      return e.campaignGroup.buy_with_integration_partner;
    }
    function D(e) {
      return e.campaignGroup.buy_with_prime_type;
    }
    function x(e) {
      return e.campaignGroup.buying_type;
    }
    function $(e) {
      return e.campaignGroup.campaign_group_active_time;
    }
    function P(e) {
      return e.campaignGroup.campaign_group_creation_source;
    }
    function N(e) {
      return e.campaignGroup.can_use_spend_cap;
    }
    function M(e) {
      return e.campaignGroup.collaborative_ads_partner_info;
    }
    function w(e) {
      return e.campaignGroup.created_time;
    }
    function A(e) {
      return e.campaignGroup.budget_scaling_cost_target;
    }
    function F(e) {
      return e.campaignGroup.budget_scaling_extra_budget;
    }
    function O(e) {
      return e.campaignGroup.budget_scaling_cost_target;
    }
    function B(e) {
      return e.campaignGroup.budget_scaling_extra_budget;
    }
    function W(e) {
      return e.campaignGroup.budget_scaling_cost_target_default;
    }
    function q(e) {
      return e.campaignGroup.budget_scaling_budget_multiplier_default;
    }
    function U(e) {
      return e.campaignGroup.daily_budget;
    }
    function V(e) {
      return e.campaignGroup.daily_budget;
    }
    function H(e) {
      return e.campaignGroup.daily_budget == null
        ? 0
        : parseInt(e.campaignGroup.daily_budget, 10);
    }
    function G(e) {
      return e.campaignGroup.effective_status;
    }
    function z(e) {
      return e.campaignGroup.incremental_conversion_optimization_config;
    }
    function j(e) {
      return e.campaignGroup.is_autobid;
    }
    function K(e) {
      return e.campaignGroup.is_average_price_pacing;
    }
    function Q(e) {
      var t;
      return (t = e.campaignGroup.is_message_campaign) != null ? t : !1;
    }
    function X(e) {
      return e.campaignGroup.is_meta_moment_maker_enabled;
    }
    function Y(e) {
      return e.campaignGroup.is_odax_campaign_group;
    }
    function J(e) {
      return e.campaignGroup.is_reels_trending_ads_enabled;
    }
    function Z(e) {
      return e.campaignGroup.frequency_control_specs;
    }
    function ee(e) {
      return e.campaignGroup.is_opted_into_experiments;
    }
    function te(e) {
      return e.campaignGroup.is_skadnetwork_attribution;
    }
    function ne(e) {
      return e.campaignGroup.agency_fee_config;
    }
    function re(e) {
      return e.campaignGroup.is_using_l3_schedule;
    }
    function oe(e) {
      return e.campaignGroup.last_budget_toggling_time;
    }
    function ae(e) {
      return e.campaignGroup.lifetime_budget;
    }
    function ie(e) {
      return e.campaignGroup.lifetime_budget == null
        ? null
        : parseInt(e.campaignGroup.lifetime_budget, 10);
    }
    function le(e) {
      return e.campaignGroup.lifetime_spent;
    }
    function se(e) {
      return e.campaignGroup.lightweight_split_test;
    }
    function ue(e) {
      return e.campaignGroup.lightweight_split_test_options;
    }
    function ce(e) {
      return e.campaignGroup.mc_experience_config;
    }
    function de(e) {
      return e.campaignGroup.name;
    }
    function me(e) {
      return e.campaignGroup.naming_template_custom_fields;
    }
    function pe(e) {
      return e.campaignGroup.objective;
    }
    function _e(e) {
      var t;
      return (t = e.campaignGroup.pacing_type) == null
        ? void 0
        : t
            .map(function (e) {
              return r("getGraphQLEnumSafe")(r("AdsAPIPacingType"), e);
            })
            .filter(Boolean);
    }
    function fe(e) {
      return e.campaignGroup.primary_attribution;
    }
    function ge(e) {
      return e.campaignGroup.is_pca_unified;
    }
    function he(e) {
      return e.campaignGroup.is_pca_unifiable;
    }
    function ye(e) {
      return e.campaignGroup.promoted_object;
    }
    function Ce(e) {
      return e.campaignGroup.smart_promotion_type;
    }
    function be(e) {
      return e.campaignGroup.source_campaign_id;
    }
    function ve(e) {
      return e.campaignGroup.source_recommendation_type;
    }
    function Se(e) {
      return e.campaignGroup.source_campaign_id != null
        ? {
            id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
              e.campaignGroup.source_campaign_id,
              e.hostID,
              e.adObjectLevel,
            ),
          }
        : null;
    }
    function Re(e) {
      return e.campaignGroup.special_ad_categories;
    }
    function Le(e) {
      return e.campaignGroup.special_ad_category;
    }
    function Ee(e) {
      var t;
      return (t = e.campaignGroup.special_ad_category_country) == null
        ? void 0
        : t
            .map(function (e) {
              return r("getGraphQLEnumSafe")(r("ISOCountryCode"), e);
            })
            .filter(Boolean);
    }
    function ke(e) {
      return e.campaignGroup.spend_cap;
    }
    function Ie(e) {
      return e.campaignGroup.start_time;
    }
    function Te(e) {
      return e.campaignGroup.status;
    }
    function De(e) {
      return e.campaignGroup.stop_time;
    }
    function xe(e) {
      return e.campaignGroup.study_ids;
    }
    function $e(e) {
      return e.campaignGroup.include_in_ad_study_id;
    }
    function Pe(e) {
      return e.campaignGroup.rf_prediction_id;
    }
    function Ne(e) {
      return e.campaignGroup.topline_id;
    }
    function Me(e) {
      return e.campaignGroup.updated_time;
    }
    function we(e) {
      return e.campaignGroup.yesterday_spent;
    }
    function Ae(e) {
      return { id: e.campaignGroup.id };
    }
    function Fe(e) {
      return e.campaignGroup.budget_strategy;
    }
    function Oe(e) {
      return e.campaignGroup.time_suggestion;
    }
    function Be(e) {
      return {
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
        id: e.campaignGroup.id,
      };
    }
    function We(e) {
      return e.campaignGroup.is_full_funnel;
    }
    function qe(e) {
      return e.campaignGroup.automation_unified_campaign_type;
    }
    function Ue(e) {
      return e.campaignGroup.include_in_ad_study_cell_id;
    }
    ((l.CombinedCampaignGroup = d),
      (l.self = m),
      (l.ab_test_config = p),
      (l.ad_account = _),
      (l.server_ad_account = f),
      (l.product_catalog = g),
      (l.adlabels = h),
      (l.adset_bid_amounts = y),
      (l.ad_creation_package_config = C),
      (l.ad_object_id = b),
      (l.bid_strategy = v),
      (l.bid_strategy_gql = S),
      (l.boosted_component_client_app_id = R),
      (l.boosted_component_product = L),
      (l.boosted_page_id = E),
      (l.brand_lift_studies = k),
      (l.budget_remaining = I),
      (l.buy_with_integration_partner = T),
      (l.buy_with_prime_type = D),
      (l.buying_type = x),
      (l.campaign_group_active_time = $),
      (l.campaign_group_creation_source = P),
      (l.can_use_spend_cap = N),
      (l.collaborative_ads_partner_info = M),
      (l.created_time = w),
      (l.budget_scaling_cost_target = A),
      (l.budget_scaling_extra_budget = F),
      (l.budget_scaling_cost_target_safe_value_str = O),
      (l.budget_scaling_extra_budget_safe_value_str = B),
      (l.budget_scaling_cost_target_default = W),
      (l.budget_scaling_budget_multiplier_default = q),
      (l.daily_budget = U),
      (l.daily_budget_safe_value_str = V),
      (l.daily_budget_gql = H),
      (l.effective_status = G),
      (l.incremental_conversion_optimization_config = z),
      (l.is_autobid = j),
      (l.is_average_price_pacing = K),
      (l.is_message_campaign = Q),
      (l.is_meta_moment_maker_enabled = X),
      (l.is_odax_campaign_group = Y),
      (l.is_reels_trending_ads_enabled = J),
      (l.frequency_control_specs = Z),
      (l.is_opted_into_experiments = ee),
      (l.is_skadnetwork_attribution = te),
      (l.agency_fee_config = ne),
      (l.is_using_l3_schedule = re),
      (l.last_budget_toggling_time = oe),
      (l.lifetime_budget_safe_value_str = ae),
      (l.lifetime_budget = ie),
      (l.lifetime_spent = le),
      (l.lightweight_split_test = se),
      (l.lightweight_split_test_options = ue),
      (l.mc_experience_config = ce),
      (l.name = de),
      (l.naming_template_custom_fields = me),
      (l.objective = pe),
      (l.pacing_type = _e),
      (l.primary_attribution = fe),
      (l.is_pca_unified = ge),
      (l.is_pca_unifiable = he),
      (l.promoted_object = ye),
      (l.smart_promotion_type = Ce),
      (l.source_campaign_id = be),
      (l.source_recommendation_type = ve),
      (l.source_object = Se),
      (l.special_ad_categories = Re),
      (l.special_ad_category = Le),
      (l.special_ad_category_country = Ee),
      (l.spend_cap = ke),
      (l.start_time = Ie),
      (l.status = Te),
      (l.stop_time = De),
      (l.study_ids = xe),
      (l.include_in_ad_study_id = $e),
      (l.rf_prediction_id = Pe),
      (l.topline_id = Ne),
      (l.updated_time = Me),
      (l.yesterday_spent = we),
      (l.publish_object_DO_NOT_USE = Ae),
      (l.budget_strategy = Fe),
      (l.time_suggestion = Oe),
      (l.utils = Be),
      (l.is_full_funnel = We),
      (l.automation_unified_campaign_type = qe),
      (l.include_in_ad_study_cell_id = Ue));
  },
  98,
);
