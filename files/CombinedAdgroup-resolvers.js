__d(
  "CombinedAdgroup-resolvers",
  [
    "AdsAdObjectRelayIDUtils",
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDMLUtils",
    "AdsRelayReadInteropHostIDUtils",
    "AdsRelayReadInteropLogHostID",
    "AdsUEditorHostIDs",
    "LoadObject",
    "err",
    "gkx",
    "ifRequired",
    "nullthrows",
    "subscribeCombinedStoreLive",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          return e.data.L1Adgroup(e.vars.id, function (t) {
            return t != null
              ? {
                  adgroup: t,
                  adObjectLevel: e.vars.adObjectLevel,
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
        var e = r("ifRequired")("AdsAdgroupBulkEditStore", function (e) {
          return e;
        });
        return r("nullthrows")(
          e,
          "The Adgroup bulk edit store is not available. This likely means this data is being accessed outside of the L1 bulk edit flow.",
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
                  adgroup: r,
                  adObjectLevel: t.adObjectLevel,
                  hostID: t.hostID,
                  id: o(
                    "AdsRelayReadInteropHostIDUtils",
                  ).encodeRelayIDWithHostID(t.id, t.hostID, t.adObjectLevel),
                }
              : null;
          },
          store: e,
        });
      },
      c = function () {
        var e,
          t =
            (e = r("ifRequired")(
              "AdsEditingCreativeContainerAdgroupDraftFragmentsDataProvider",
              function (e) {
                return e;
              },
            )) == null
              ? void 0
              : e.toFluxStore();
        return r("nullthrows")(
          t,
          "The Creative editing store is not available. This likely means this data is being accessed outside of the creative editing flow.",
        );
      },
      d = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(
        function () {
          return [c()];
        },
        function (e) {
          var t,
            n = c(),
            a = n.getState().get(e.id);
          return (t =
            a == null
              ? void 0
              : a.map(function (t) {
                  return {
                    adgroup: t.toJS(),
                    adObjectLevel: e.adObjectLevel,
                    hostID: e.hostID,
                    id: o(
                      "AdsRelayReadInteropHostIDUtils",
                    ).encodeRelayIDWithHostID(e.id, e.hostID, e.adObjectLevel),
                  };
                })) != null
            ? t
            : r("LoadObject").withValue(null, { creatorModuleID: i.id });
        },
      ),
      m = o("AdsDML")
        .Query({ name: i.id, liveResolverDMLQuery: !0 })
        .Derived(function (e) {
          return d(e.vars);
        });
    function p(t) {
      return r("gkx")("11010")
        ? o("subscribeCombinedStoreLive").subscribeCombinedAdgroupStoreLive(t)
        : o("AdsDML").subscribeQueryLive(e, t);
    }
    function _(e) {
      var t = o("AdsRelayReadInteropHostIDUtils").decodeRelayIDWithHostID(e),
        n = t.adObjectLevel,
        a = t.hostID,
        l = t.id;
      if (
        (o("AdsRelayReadInteropLogHostID").maybeLogHostID(a, i.id),
        n != null &&
          n !== o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels.ADGROUP)
      )
        return p({ adObjectLevel: n, hostID: a, id: l });
      switch (a) {
        case r("AdsUEditorHostIDs").EDITING:
        case r("AdsUEditorHostIDs").TEST_AND_LEARN:
          return p({ adObjectLevel: n, hostID: a, id: l });
        case r("AdsUEditorHostIDs").BULK_EDIT_DIALOG:
          return o("AdsDML").subscribeQueryLive(u(), {
            adObjectLevel: n,
            hostID: a,
            id: l,
          });
        case r("AdsUEditorHostIDs").EDITING_CREATIVE_CONTAINER:
          return o("AdsDML").subscribeQueryLive(m, {
            adObjectLevel: n,
            hostID: a,
            id: l,
          });
        case r("AdsUEditorHostIDs").CREATION:
        default:
          throw r("err")("Unhandled hostID " + a);
      }
    }
    function f(e) {
      return { id: e.adgroup.account_id };
    }
    function g(e) {
      return { id: e.adgroup.id };
    }
    function h(e) {
      return e.adgroup;
    }
    function y(e) {
      return e.adgroup.id;
    }
    function C(e) {
      return e.adgroup.adset_id;
    }
    function b(e) {
      return e.adgroup.campaign_id;
    }
    function v(e) {
      var t = e.hostID;
      return {
        id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
          e.adgroup.campaign_id,
          t,
          e.adObjectLevel,
        ),
      };
    }
    function S(e) {
      var t = e.hostID;
      return {
        id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
          e.adgroup.adset_id,
          t,
          e.adObjectLevel,
        ),
      };
    }
    function R(e) {
      return e.adgroup.creative;
    }
    function L(e) {
      return e.adgroup.metadata;
    }
    function E(e) {
      return e.adgroup.name;
    }
    function k(e) {
      return e.adgroup.conversion_specs;
    }
    function I(e) {
      return e.adgroup.source_ad_id;
    }
    function T(e) {
      var t = e.adgroup.source_ad_id;
      return e == null || t == null
        ? null
        : {
            id: o("AdsRelayReadInteropHostIDUtils").encodeRelayIDWithHostID(
              t,
              e.hostID,
              e.adObjectLevel,
            ),
          };
    }
    function D(e) {
      return e.adgroup.tracking_and_conversion_with_defaults;
    }
    function x(e) {
      return e.adgroup.updated_time;
    }
    function $(e) {
      return e.adgroup.creative_asset_groups_spec;
    }
    function P(e) {
      return e.adgroup.creative_automation_spec;
    }
    function N(e) {
      return e.adgroup.ad_review_feedback;
    }
    function M(e) {
      return e.adgroup.account_id;
    }
    function w(e) {
      return e.adgroup.ad_active_time;
    }
    function A(e) {
      return e.adgroup.ad_schedule_end_time;
    }
    function F(e) {
      return e.adgroup.ad_schedule_start_time;
    }
    function O(e) {
      return e.adgroup.adgroup_status;
    }
    function B(e) {
      return e.adgroup.adset;
    }
    function W(e) {
      return e.adgroup.bid_amount;
    }
    function q(e) {
      return e.adgroup.bid_info;
    }
    function U(e) {
      return e.adgroup.bid_type;
    }
    function V(e) {
      return e.adgroup.can_aggregate_social_feedback_on_edit;
    }
    function H(e) {
      return e.adgroup.conversion_domain;
    }
    function G(e) {
      return e.adgroup.created_time;
    }
    function z(e) {
      return e.adgroup.creative_link_url;
    }
    function j(e) {
      return e.adgroup.delivery_info;
    }
    function K(e) {
      return e.adgroup.delivery_status;
    }
    function Q(e) {
      return e.adgroup.demolink_hash;
    }
    function X(e) {
      return e.adgroup.display_sequence;
    }
    function Y(e) {
      return e.adgroup.effective_status;
    }
    function J(e) {
      return e.adgroup.engagement_audience;
    }
    function Z(e) {
      return e.adgroup.id;
    }
    function ee(e) {
      return e.adgroup.creative_delivery_push;
    }
    function te(e) {
      return e.adgroup.creative_audience_pairing_persona;
    }
    function ne(e) {
      return e.adgroup.include_in_ad_study_cell_id;
    }
    function re(e) {
      return e.adgroup.include_in_ad_study_id;
    }
    function oe(e) {
      return e.adgroup.is_creative_flex_feature_aware;
    }
    function ae(e) {
      return e.adgroup.is_organic_ad_joint_optimized === 1;
    }
    function ie(e) {
      return e.adgroup.is_eligible_for_message_editing;
    }
    function le(e) {
      return e.adgroup.last_updated_by_app_id;
    }
    function se(e) {
      return e.adgroup.lightweight_split_test;
    }
    function ue(e) {
      return e.adgroup.lightweight_split_test_options;
    }
    function ce(e) {
      return e.adgroup.manual_review_requested;
    }
    function de(e) {
      return e.adgroup.biz_ai_enabled_state;
    }
    function me(e) {
      return e.adgroup.meta_reward_adgroup_status;
    }
    function pe(e) {
      return e.adgroup.naming_template_custom_fields;
    }
    function _e(e) {
      return e.adgroup.priority;
    }
    function fe(e) {
      return e.adgroup.review_config;
    }
    function ge(e) {
      return e.adgroup.shops_ads_metadata_tags;
    }
    function he(e) {
      return e.adgroup.source_app_id;
    }
    function ye(e) {
      return e.adgroup.status;
    }
    function Ce(e) {
      return e.adgroup.targeting;
    }
    function be(e) {
      return e.adgroup.tracking_specs;
    }
    function ve(e) {
      return e.adgroup.view_tags;
    }
    function Se(e) {
      return {
        adgroup_id: e.adgroup.id,
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
      };
    }
    function Re(e) {
      return e.adgroup.placement;
    }
    function Le(e) {
      return {
        adObjectLevel: e.adObjectLevel,
        hostID: e.hostID,
        id: e.adgroup.id,
      };
    }
    function Ee(e) {
      return { id: e.id };
    }
    ((l.CombinedAdgroup = _),
      (l.ad_account = f),
      (l.server_adgroup = g),
      (l.self = h),
      (l.ad_object_id = y),
      (l.adset_id = C),
      (l.campaign_id = b),
      (l.combined_campaign_group = v),
      (l.combined_campaign = S),
      (l.creative = R),
      (l.metadata = L),
      (l.name = E),
      (l.conversion_specs = k),
      (l.source_ad_id = I),
      (l.source_object = T),
      (l.tracking_and_conversion_with_defaults = D),
      (l.updated_time = x),
      (l.creative_asset_groups_spec = $),
      (l.creative_automation_spec = P),
      (l.ad_review_feedback = N),
      (l.account_id = M),
      (l.ad_active_time = w),
      (l.ad_schedule_end_time = A),
      (l.ad_schedule_start_time = F),
      (l.adgroup_status = O),
      (l.adset = B),
      (l.bid_amount = W),
      (l.bid_info = q),
      (l.bid_type = U),
      (l.can_aggregate_social_feedback_on_edit = V),
      (l.conversion_domain = H),
      (l.created_time = G),
      (l.creative_link_url = z),
      (l.delivery_info = j),
      (l.delivery_status = K),
      (l.demolink_hash = Q),
      (l.display_sequence = X),
      (l.effective_status = Y),
      (l.engagement_audience = J),
      (l.adgroup_id = Z),
      (l.creative_delivery_push = ee),
      (l.creative_audience_pairing_persona = te),
      (l.include_in_ad_study_cell_id = ne),
      (l.include_in_ad_study_id = re),
      (l.is_creative_flex_feature_aware = oe),
      (l.is_organic_ad_joint_optimized = ae),
      (l.is_eligible_for_message_editing = ie),
      (l.last_updated_by_app_id = le),
      (l.lightweight_split_test = se),
      (l.lightweight_split_test_options = ue),
      (l.manual_review_requested = ce),
      (l.biz_ai_enabled_state = de),
      (l.meta_reward_adgroup_status = me),
      (l.naming_template_custom_fields = pe),
      (l.priority = _e),
      (l.review_config = fe),
      (l.shops_ads_metadata_tags = ge),
      (l.source_app_id = he),
      (l.status = ye),
      (l.targeting = Ce),
      (l.tracking_specs = be),
      (l.view_tags = ve),
      (l.semantic_fields = Se),
      (l.placement = Re),
      (l.utils = Le),
      (l.catalog_ui = Ee));
  },
  98,
);
