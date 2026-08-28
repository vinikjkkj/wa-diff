__d(
  "CTXUnstructuredLeadsAdsStoreUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMessengerVisualEditorUtils",
    "AdsPageStore",
    "CTXChatBuilderFeatureGating",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CtxDfoEngagementRemovalNoticeUtils",
    "CurrentAdAccount",
    "gkx",
    "isStringNullOrEmpty",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o, a) {
      return (
        o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        e == null || t == null || n == null
          ? !1
          : n === r("AdCampaignDestination").MESSENGER &&
              (t === r("AdsAPIObjectives").OUTCOME_LEADS ||
                t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
            ? b(e, a)
            : n === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
                n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
              ? y(e, o)
              : !1
      );
    }
    function u(t, n, o, a, i) {
      var l =
        t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW ||
        t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN ||
        t ===
          r("AdsMessengerVisualEditorLandingScreenType")
            .LITE_WEIGHT_AUTOMATED_CHAT;
      return i !== r("AdsAPIOptimizationGoals").LEAD_GENERATION
        ? !1
        : l && e(a, n, o);
    }
    function c(t, n, o) {
      return (
        t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (n === r("AdCampaignDestination").MESSENGER ||
          n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT) &&
        e(o, t, n)
      );
    }
    function d(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n =
          t === r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE,
        o = f(e) !== "VISUAL_EDITOR";
      return n || o;
    }
    function m(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n =
          t ===
          r("AdsMessengerVisualEditorLandingScreenType")
            .LITE_WEIGHT_AUTOMATED_CHAT;
      return n;
    }
    function p(e) {
      if (r("isStringNullOrEmpty")(e)) return !1;
      var t = _(e),
        n = t === r("AdsMessengerVisualEditorLandingScreenType").CTD_LEAD_GEN,
        o = t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN,
        a =
          t === r("AdsMessengerVisualEditorLandingScreenType").CTM_LEAD_GEN_NEW;
      return n || o || a;
    }
    function _(e) {
      var t;
      if (r("isStringNullOrEmpty")(e))
        return r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE;
      var n = JSON.parse(e);
      return (t = n == null ? void 0 : n.landing_screen_type) != null
        ? t
        : r("AdsMessengerVisualEditorLandingScreenType").WELCOME_MESSAGE;
    }
    function f(e) {
      if (r("isStringNullOrEmpty")(e)) return "LEGACY_DATA";
      var t = JSON.parse(e);
      return o("AdsMessengerVisualEditorUtils").getWelcomeMessageDataType(t);
    }
    function g(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n == null ? void 0 : n.leadgen_tos_accepted) === !0;
    }
    var h = s._(
      /*BTDS*/ "Only messaging templates that include Meta's Lead Ads Terms allow leads to be downloaded. You can view conversations with your leads by navigating to your Inbox in Meta Business Suite.",
    );
    function y(e, t) {
      var n,
        o,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null,
        i =
          (o =
            a == null ? void 0 : a.is_ctd_leads_optimization_goal_eligible) !=
          null
            ? o
            : !1;
      return (t && C(a), i ? (t ? r("gkx")("15422") : r("gkx")("15423")) : !1);
    }
    function C(e) {
      var t =
        e == null
          ? void 0
          : e.ctd_leads_optimization_eligibility_expansion_universe;
      if (t != null)
        switch (t) {
          case "ctd_lo_everywhere_backtest_universe":
            r("qex")._("3120");
            break;
          case "ctd_lo_post_ucd_backtest_universe":
            r("qex")._("4568");
            break;
          case "ctd_lo_relaxed_eligibility":
            r("qex")._("679");
            break;
          case "ctd_lo_h126_signal_eligibility_expansion":
            r("qex")._("3429");
            break;
          case "ctd_lo_everywhere_v2_am":
            r("qex")._("2232");
            break;
          default:
            return;
        }
    }
    function b(e, t) {
      var n,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      if ((a == null ? void 0 : a.is_messaging_light_switch_enabled) === !0)
        return !1;
      if (
        (a == null ? void 0 : a.is_ctm_leads_optimization_goal_eligible) === !0
      )
        if (t) {
          var i = r("gkx")("14363");
          return (
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              var e;
              return {
                condition: i ? "test" : "control",
                feature_name: "ctm_lo_pre_ucd_enablement_launch",
                hbt_name: "ctm_leads_optimization_holdout",
                unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
                unit_type: "ad_account_id",
              };
            }),
            i
          );
        } else return r("gkx")("14364");
      var l = r("gkx")("7550");
      if ((a == null ? void 0 : a.is_ctm_lo_goal_eligible_incl_ucd_po) === !0) {
        if (l) {
          if (
            o("CtxDfoEngagementRemovalNoticeUtils").isInPhase1QEUniverse(
              o("CtxDfoEngagementRemovalNoticeUtils")
                .OdaxCtxDfoRemovalQEEntrypoint.CTM_LO_POST_UCD_HOLDOUT,
            )
          )
            return !0;
          var s = t ? r("qex")._("2022") === !0 : r("qex")._("5244") === !0;
          return !s;
        }
        var u = r("gkx")("26186");
        if (u)
          if (t) {
            var c = r("gkx")("14363");
            return (
              r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
                var e;
                return {
                  condition: c ? "test" : "control",
                  feature_name: "ctm_lo_post_ucd_cas_enablement_launch",
                  hbt_name: "ctm_leads_optimization_holdout",
                  unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
                  unit_type: "ad_account_id",
                };
              }),
              c
            );
          } else return r("gkx")("14364");
        else return !1;
      }
      if (l) return !0;
      if (t) {
        var d = r("gkx")("14363");
        return (
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            var e;
            return {
              condition: d ? "test" : "control",
              feature_name: "ctm_lo_dfo_everywhere_cas_enablement_launch",
              hbt_name: "ctm_leads_optimization_holdout",
              unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
              unit_type: "ad_account_id",
            };
          }),
          d
        );
      } else return r("gkx")("14364");
    }
    function v(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n = o == null ? void 0 : o.automated_chat_default_template_id) !=
        null
        ? n
        : "";
    }
    var S = function (t) {
      var e;
      if (t == null || !r("gkx")("13501")) return !1;
      var n =
        (e = r("AdsPageStore").getLoadObject(t)) == null
          ? void 0
          : e.getValue();
      return (n == null ? void 0 : n.is_inbox_waba) === !0;
    };
    function R(t, n, o, a) {
      var i = n;
      (a === r("AdsAPIObjectives").OUTCOME_LEADS ||
        n === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (i = r("AdsAPIObjectives").OUTCOME_LEADS);
      var l = e(t, i, o);
      return l;
    }
    function L(t, n, a, i) {
      var l = n;
      (i === r("AdsAPIObjectives").OUTCOME_LEADS ||
        n === r("AdsAPIObjectives").OUTCOME_LEADS) &&
        (l = r("AdsAPIObjectives").OUTCOME_LEADS);
      var s = e(t, l, a),
        u = o(
          "CTXChatBuilderFeatureGating",
        ).enableMessageTemplateRedesignForCTD(a, t, l);
      return s && u;
    }
    ((l.enableUnstructuredLeadsOptimization = e),
      (l.shouldShowToSCard = u),
      (l.disableConvertedFormsTemplateForUnstructuredLeads = c),
      (l.isStartConversationsOrPartnerAppAd = d),
      (l.isAutomaticChatAppAd = m),
      (l.isLeadGenLandingScreenType = p),
      (l.hasPageAcceptedToS = g),
      (l.hideDownloadLinkText = h),
      (l.getAutomatedChatDefaultTemplateID = v),
      (l.isInboxWABAForLeadGen = S),
      (l.enableCTMUnstructuredLeadsOptimizationMessageTemplateDefaulting = R),
      (l.enableCTDUnstructuredLeadsOptimizationMessageTemplateDefaulting = L));
  },
  226,
);
