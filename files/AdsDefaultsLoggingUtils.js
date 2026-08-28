__d(
  "AdsDefaultsLoggingUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdvantageAudienceUtils",
    "AdsExperimentsBudgetUtils",
    "AdsInterfacesLogger",
    "AdsOSAUAdvantagePlusCreativeScoreFixExperimentUtils",
    "AdsSABRBudgetDefaultUtils",
    "AdsValidationConsts",
    "AdsZeroOutcomeBudgetDefaultUtils",
    "FBLogger",
    "adsCampaignConvertUSDBudgetToCurrency",
    "getErrorSafe",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u,
        c = o(
          "AdsAdvantageAudienceUtils",
        ).isAdvantageAudienceEnabledInTargetSpec(e);
      r("AdsInterfacesLogger").log({
        eventName: "ads_advantage_audience_defaulted",
        data:
          ((u = {}),
          (u.campaign_id = n),
          (u.campaign_group_id = a),
          (u.objective = t),
          (u.is_enabled = c),
          (u.source = i),
          (u.original_ad_object_id = s),
          (u.message = l),
          u),
      });
    }
    function s(e, t, n, o, a, i) {
      var l,
        s = !1;
      (e == null ? void 0 : e.age_range) != null
        ? (s =
            (e == null ? void 0 : e.age_range[0]) ===
              r("AdsValidationConsts").minAgeDefault &&
            (e == null ? void 0 : e.age_range[1]) ===
              r("AdsValidationConsts").maxAge)
        : (s =
            (e == null ? void 0 : e.age_max) != null &&
            e.age_max === r("AdsValidationConsts").maxAge &&
            (e == null ? void 0 : e.age_min) != null &&
            e.age_min === r("AdsValidationConsts").minAgeDefault);
      var u = e != null && e.genders == null,
        c = e != null && e.flexible_spec == null,
        d = s && u && c;
      r("AdsInterfacesLogger").log({
        eventName: "ads_audience_expansion_retargeting_defaulted",
        data:
          ((l = {}),
          (l.campaign_id = n),
          (l.campaign_group_id = o),
          (l.objective = t),
          (l.is_enabled = d),
          (l.source = a),
          (l.original_ad_object_id = i),
          l),
      });
    }
    function u(e, t, n, a, i, l, s) {
      var u,
        c = o("AdsExperimentsBudgetUtils").isCBOEnabled({
          daily_budget: e,
          lifetime_budget: t,
        });
      r("AdsInterfacesLogger").log({
        eventName: "ads_cbo_defaulting",
        data:
          ((u = {}),
          (u.campaign_id = a),
          (u.campaign_group_id = i),
          (u.objective = n),
          (u.is_enabled = c),
          (u.source = l),
          (u.original_ad_object_id = s),
          u),
      });
    }
    function c(e, t, n, a, i, l, s) {
      try {
        var u,
          c,
          d = o("AdsExperimentsBudgetUtils").isCBOEnabled({
            daily_budget: n.daily_budget,
            lifetime_budget: n.lifetime_budget,
          }),
          m = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
            (u = n.objective) != null ? u : r("AdsAPIObjectives").NONE,
            t,
          ),
          p = o("AdsAPICampaignRecordUtils").getOptimizationGoal(t),
          _ = d
            ? o("AdsAPICampaignGroupRecordUtils").getBudgetType(n)
            : o("AdsAPICampaignRecordUtils").getBudgetMode(t),
          f = d
            ? o("AdsAPICampaignGroupRecordUtils").getBudgetValue(n)
            : o("AdsAPICampaignRecordUtils").getBudgetValue(t),
          g = o(
            "AdsZeroOutcomeBudgetDefaultUtils",
          ).getMinDailyBudgetExperimental(e.account);
        r("AdsInterfacesLogger").log({
          eventName: "ads_zero_outcome_budget_defaulting",
          data:
            ((c = {}),
            (c.campaign_id = i),
            (c.campaign_group_id = l),
            (c.objective = a),
            (c.new_value = f),
            (c.rf_budget_value = r("adsCampaignConvertUSDBudgetToCurrency")(
              e.account.currency,
              parseInt(f, 10),
            )),
            (c.old_value = g),
            (c.is_enabled = d),
            (c.is_campaign_group_budget = d && parseInt(f, 10) <= 2500),
            (c.source = s),
            (c.optimization_goal = p),
            (c.creative_object_type = m),
            (c.message = _),
            (c.experiment_variant = o(
              "AdsSABRBudgetDefaultUtils",
            ).isSABRBudgetDefaultingEnabled(!1, a)),
            c),
        });
      } catch (e) {
        r("FBLogger")("ads_zero_outcome_budget_defaulting")
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error");
      }
    }
    function d(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: "ads_optimization_goal_defaulting",
        data:
          ((s = {}),
          (s.campaign_id = o),
          (s.campaign_group_id = a),
          (s.objective = t),
          (s.optimization_goal = e),
          (s.message = n),
          (s.source = i),
          (s.original_ad_object_id = l),
          s),
      });
    }
    function m(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_onsite_CLO_default",
        data:
          ((a = {}),
          (a.ad_account_id = e),
          (a.campaign_id = t),
          (a.campaign_group_id = n),
          (a.source = o),
          a),
      });
    }
    function p(e) {
      if (e == null) return null;
      var t = babelHelpers.extends({}, e);
      return (
        delete t.instagram_actor_id,
        delete t.instagram_user_id,
        delete t.threads_user_id,
        t
      );
    }
    function _(e, t, n, o, a, i, l) {
      try {
        var s,
          u = JSON.stringify(p(e));
        r("AdsInterfacesLogger").log({
          eventName: "ads_creative_spec_defaulting",
          data:
            ((s = {}),
            (s.adgroup_id = t),
            (s.campaign_id = n),
            (s.campaign_group_id = o),
            (s.message = u),
            (s.source = a),
            (s.original_ad_object_id = i),
            (s.objective = l),
            s),
        });
      } catch (e) {
        r("FBLogger")("ads_creative_spec_defaulting_logging")
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error");
      }
    }
    function f(e, t, n, a) {
      try {
        var i;
        if (
          a !== r("AdsAPIObjectives").OUTCOME_LEADS &&
          a !== r("AdsAPIObjectives").LEAD_GENERATION
        )
          return;
        var l = o(
          "AdsOSAUAdvantagePlusCreativeScoreFixExperimentUtils",
        ).isLeadsEnabled({ logExposure: !1 });
        r("AdsInterfacesLogger").log({
          eventName:
            "ads_os_au_advantage_plus_creative_leads_score_fix_defaulting",
          data:
            ((i = {}),
            (i.adgroup_id = e),
            (i.campaign_id = t),
            (i.campaign_group_id = n),
            (i.is_enabled = l),
            i),
        });
      } catch (e) {
        r("FBLogger")(
          "ads_os_au_advantage_plus_creative_leads_score_fix_defaulting",
        )
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error");
      }
    }
    function g(e, t, n, o) {
      var a,
        i = r("isTruthy")(e == null ? void 0 : e.product_catalog_id);
      r("AdsInterfacesLogger").log({
        eventName: "ads_advantage_catalog_duplication_default",
        data:
          ((a = {}),
          (a.campaign_group_id = t),
          (a.is_enabled = i),
          (a.source = o),
          (a.original_ad_object_id = n),
          a),
      });
    }
    function h(e, t, n, o, a, i) {
      var l,
        s,
        u,
        c,
        d,
        m,
        p =
          (e == null || (l = e.audience_network_positions) == null
            ? void 0
            : l.length) || 0,
        _ =
          (e == null || (s = e.facebook_positions) == null
            ? void 0
            : s.length) || 0,
        f =
          (e == null || (u = e.instagram_positions) == null
            ? void 0
            : u.length) || 0,
        g =
          (e == null || (c = e.messenger_positions) == null
            ? void 0
            : c.length) || 0,
        h =
          (e == null || (d = e.whatsapp_positions) == null
            ? void 0
            : d.length) || 0,
        y = p + _ + f + g + h;
      r("AdsInterfacesLogger").log({
        eventName: "ads_duplication_number_of_placements_defaulted",
        data:
          ((m = {}),
          (m.campaign_id = n),
          (m.campaign_group_id = o),
          (m.objective = t),
          (m.message = y),
          (m.source = a),
          (m.original_ad_object_id = i),
          m),
      });
    }
    function y(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_catalog_match_rate_defaulting",
        data:
          ((n = {}),
          (n.campaign_group_id = e.length === 1 ? e[0] : null),
          (n.adgroup_id = t.length === 1 ? t[0] : null),
          (n.is_enabled = !0),
          n),
      });
    }
    function C(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_cpas_creation_defaulting",
        data:
          ((n = {}),
          (n.action_type = "inline_default"),
          (n.source = e),
          (n.message = t),
          n),
      });
    }
    function b(e, t, n, a, i, l) {
      try {
        var s, u, c, d, m, p, _, f;
        if (t.collaborative_ads_partner_info == null) return;
        var g = o("AdsAPICampaignRecordUtils").getOptimizationGoal(e),
          h =
            ((s = t.promoted_object) == null ? void 0 : s.product_catalog_id) !=
            null,
          y =
            (u =
              (c = e.promoted_object) == null ? void 0 : c.custom_event_type) !=
            null
              ? u
              : "",
          C = (d = e.conversion_locations) != null ? d : "",
          b =
            (l == null ||
            (m = l.object_story_spec) == null ||
            (m = m.link_data) == null
              ? void 0
              : m.link) != null ||
            (l == null ||
            (p = l.object_story_spec) == null ||
            (p = p.template_data) == null
              ? void 0
              : p.link) != null,
          v =
            (l == null ||
            (_ = l.template_url_spec) == null ||
            (_ = _.config) == null
              ? void 0
              : _.app_id) != null;
        r("AdsInterfacesLogger").log({
          eventName: "ads_cpas_creation_defaulting",
          data:
            ((f = {}),
            (f.action_type = "publish_default"),
            (f.campaign_id = n),
            (f.campaign_group_id = a),
            (f.is_enabled = !0),
            (f.objective = t.objective),
            (f.optimization_goal = g),
            (f.source = i),
            (f.message =
              "has_partner_info=" +
              String(t.collaborative_ads_partner_info != null) +
              ("|catalog_on=" + String(h)) +
              ("|conversion_event=" + y) +
              ("|conversion_locations=" + C) +
              ("|has_website_url=" + String(b)) +
              ("|has_app_id=" + String(v))),
            f),
        });
      } catch (e) {
        r("FBLogger")("ads_cpas_creation_defaulting")
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error");
      }
    }
    function v(e, t, n, o, a, i, l, s, u) {
      try {
        var c,
          d,
          m,
          p,
          _,
          f =
            (c =
              (d =
                (m = e.creative) == null ||
                (m = m.object_story_spec) == null ||
                (m = m.link_data) == null ||
                (m = m.call_to_action) == null
                  ? void 0
                  : m.type) != null
                ? d
                : (p = e.creative) == null ||
                    (p = p.asset_feed_spec) == null ||
                    (p = p.call_to_action_types) == null
                  ? void 0
                  : p[0]) != null
              ? c
              : null;
        r("AdsInterfacesLogger").log({
          eventName: "ads_sabr_cta_defaulting",
          data:
            ((_ = {}),
            (_.adgroup_id = t),
            (_.campaign_id = n),
            (_.campaign_group_id = o),
            (_.objective = a),
            (_.optimization_goal = i),
            (_.creative_object_type = l),
            (_.campaign_destination_type = s),
            (_.message =
              "model_predicted_cta=" +
              u.modelPredictedCTA +
              ("|is_cta_eligible=" + String(u.isCTAEligible)) +
              ("|applied_cta=" + String(f)) +
              ("|suggested_ctas=" +
                u.suggestions
                  .map(function (e) {
                    return e.ctaType;
                  })
                  .join(",")) +
              ("|suggested_cta_scores=" +
                u.suggestions
                  .map(function (e) {
                    return e.score.toFixed(4);
                  })
                  .join(","))),
            _),
        });
      } catch (e) {
        r("FBLogger")("ads_sabr_cta_defaulting_logging")
          .catching(r("getErrorSafe")(e))
          .mustfix("Unexpected error");
      }
    }
    ((l.logAdvantageAudienceDefaulting = e),
      (l.logAudienceExpansionRetargetingDefaulting = s),
      (l.logCampaignGroupBudgetTypeDefaulting = u),
      (l.logZeroOutcomeBudgetDefaulting = c),
      (l.logOptimizationGoalDefaulting = d),
      (l.logCLODefaulting = m),
      (l.logCreativeSpecDefaulting = _),
      (l.logOSAUAdvantagePlusCreativeScoreFixDefaulting = f),
      (l.logAdvantageCatalogDefaultingInDuplication = g),
      (l.logDefaultNumberOfPlacementPositions = h),
      (l.logCatalogMatchRateDefaulting = y),
      (l.logCPASDefaultApplied = C),
      (l.logCPASCreationDefaulting = b),
      (l.logSABRCTADefaulting = v));
  },
  98,
);
