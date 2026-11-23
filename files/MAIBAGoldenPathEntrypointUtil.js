__d(
  "MAIBAGoldenPathEntrypointUtil",
  [
    "fbt",
    "AdAccountRecommendationType",
    "AdsAIContextualEntryPointAvailabilityUtils",
    "AdsAIUserInteractionSources",
    "AdsGuidancePEV2Logger",
    "AdsMgmtAdObjectLevelTransformUtils",
    "MAIBAEntrypointAutoLoggerMetadata",
    "MAIBAGP1AnalyzeTopicsUtil",
    "MAIBAGP1RecommendationTypePromptString$FbtEnum",
    "MAIBAGP6AdObjectLevelPlural$FbtEnum",
    "MAIBAGP6AdObjectLevelSingular$FbtEnum",
    "MAIBAGP6RecommendationTypePromptString$FbtEnum",
    "MAIBAGoldenPathEntrypointConstants",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = function (t) {
        e: return t === "capi_event_coverage"
          ? o("MAIBAGoldenPathEntrypointConstants")
              .MAIBA_GP4_CAPI_EVENT_COVERAGE_PROMPT
          : t === "pixel_upsell"
            ? o("MAIBAGoldenPathEntrypointConstants")
                .MAIBA_GP4_PIXEL_UPSELL_PROMPT
            : t === "signals_growth_capi_v2"
              ? o("MAIBAGoldenPathEntrypointConstants")
                  .MAIBA_GP4_SIGNALS_GROWTH_CAPI_V2_MFR_PROMPT
              : void 0;
      },
      c = function () {
        return s._(/*BTDS*/ "");
      },
      d = function (t, n, r) {
        var e;
        if (r != null) {
          var a = o("MAIBAGP1AnalyzeTopicsUtil").getMAIBAPromptForTopic(r, t);
          if (a != null) return a;
        }
        if (t === "AD_ACCOUNT" || n == null || n.length === 0)
          return s._(/*BTDS*/ "");
        var i = (e = n == null ? void 0 : n.length) != null ? e : 1,
          l = o("AdsMgmtAdObjectLevelTransformUtils")
            .transformAdObjectLevelToType(t)
            .replace("_", " ");
        return s._(/*BTDS*/ "", [
          s._plural(i),
          s._plural(i),
          s._plural(i),
          s._plural(i),
          s._param("ad-object-level", l),
        ]);
      },
      m = new Set([
        "advantage_plus_audience",
        "autoflow_opt_in",
        "music",
        "automatic_placements",
        "signals_growth_capi_v2",
        "capi_event_coverage",
        "pixel_upsell",
        "conversion_leads_optimization",
        "offsite_conversion",
        "atleast_6_placements",
        "six_plus_manual_placements",
        "advanced_campaign_budget",
        "ig_surfaces_manual_placements",
        "ctx_sabr_cbo",
      ]),
      p = new Map(
        Object.keys(r("AdAccountRecommendationType")).map(function (e) {
          return [r("AdAccountRecommendationType")[e], e];
        }),
      );
    function _(e) {
      var t;
      return e == null || !m.has(e) ? null : (t = p.get(e)) != null ? t : null;
    }
    var f = new Map(
      Object.keys(r("AdAccountRecommendationType")).map(function (e) {
        return [e, r("AdAccountRecommendationType")[e]];
      }),
    );
    function g(e) {
      var t;
      return e == null ? null : (t = f.get(e)) != null ? t : null;
    }
    var h = new Set([
        "GUIDANCE_CARD_SYD",
        "GUIDANCE_CARD_TABLE",
        "GUIDANCE_CARD_ACTIONS_PANEL",
      ]),
      y = new Set(["AD_OBJECT_HOVER", "ACTION_BAR", "AD_PREVIEW_CARD"]);
    function C(e, t) {
      return (
        t === void 0 && (t = "Mid-Flight Recommendation"),
        h.has(e)
          ? t === "Pre-Create Recommendation"
            ? r("AdsAIUserInteractionSources")
                .START_CHAT_FROM_GP6_PCR_ENTRYPOINT
            : r("AdsAIUserInteractionSources")
                .START_CHAT_FROM_GP1_MFR_ENTRYPOINT
          : y.has(e)
            ? r("AdsAIUserInteractionSources")
                .START_CHAT_FROM_GP1_NON_MFR_ENTRYPOINT
            : null
      );
    }
    function b(e, t) {
      if (
        (t === void 0 && (t = "Mid-Flight Recommendation"),
        t === "Pre-Create Recommendation")
      )
        return "gp6_pcr_entrypoint";
      switch (e) {
        case "signals_growth_capi_v2":
          return "gp4_signals_growth_capi_v2";
        case "capi_event_coverage":
          return "gp4_capi_event_coverage";
      }
      return null;
    }
    function v() {
      return !r("justknobx")._("6758") && r("gkx")("16218");
    }
    function S(e, t, n, r) {
      return e === "advantage_plus_audience"
        ? s._(/*BTDS*/ "")
        : e === "advanced_campaign_budget"
          ? s._(/*BTDS*/ "")
          : e === "atleast_6_placements" || e === "six_plus_manual_placements"
            ? s._(/*BTDS*/ "")
            : e === "automatic_placements"
              ? s._(/*BTDS*/ "")
              : e === "ctx_sabr_cbo"
                ? s._(/*BTDS*/ "")
                : e === "ig_surfaces_manual_placements"
                  ? v()
                    ? s._(/*BTDS*/ "")
                    : s._(/*BTDS*/ "")
                  : o("MAIBAGoldenPathEntrypointConstants")
                      .MAIBA_GUIDANCE_PROMPT;
    }
    function R(e, t, n, a) {
      var i,
        l = t.replace("_", " "),
        u = (i = n == null ? void 0 : n.length) != null ? i : 1,
        c,
        d = a == null ? void 0 : a.header;
      if (
        e != null &&
        r("MAIBAGP1RecommendationTypePromptString$FbtEnum")[e] != null &&
        (o(
          "AdsAIContextualEntryPointAvailabilityUtils",
        ).CONTEXTUAL_ENTRY_POINT_GUIDANCE_TYPES_IN_PROD.has(e) ||
          o(
            "AdsAIContextualEntryPointAvailabilityUtils",
          ).CONTEXTUAL_ENTRY_POINT_GUIDANCE_TYPES_IN_DEV.has(e))
      )
        return s._(/*BTDS*/ "", [
          s._plural(u),
          s._plural(u),
          s._plural(u),
          s._enum(e, r("MAIBAGP1RecommendationTypePromptString$FbtEnum")),
          s._param("ad-object-level", l),
        ]);
      e: return e === "signals_growth_capi_v2"
        ? ((c = a == null ? void 0 : a.partnerName),
          c != null
            ? s._(/*BTDS*/ "", [s._param("partnerName", c)])
            : d != null && d.includes("Conversions API Gateway")
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ ""))
        : e === "capi_event_coverage"
          ? s._(/*BTDS*/ "")
          : e === "pixel_upsell"
            ? s._(/*BTDS*/ "")
            : o("MAIBAGoldenPathEntrypointConstants").MAIBA_GUIDANCE_PROMPT;
    }
    var L = new Set(["ad", "ad_set", "campaign", "ad_account"]);
    function E(e, t, n) {
      var o,
        a = (o = n == null ? void 0 : n.length) != null ? o : 1,
        i = e != null ? e : "default",
        l = L.has(t) ? t : "default";
      return a === 1
        ? s._(/*BTDS*/ "", [
            s._enum(l, r("MAIBAGP6AdObjectLevelSingular$FbtEnum")),
            s._enum(i, r("MAIBAGP6RecommendationTypePromptString$FbtEnum")),
          ])
        : s._(/*BTDS*/ "", [
            s._enum(l, r("MAIBAGP6AdObjectLevelPlural$FbtEnum")),
            s._enum(i, r("MAIBAGP6RecommendationTypePromptString$FbtEnum")),
          ]);
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n, r, o) {
      return (
        o === void 0 && (o = "Mid-Flight Recommendation"),
        o === "Pre-Create Recommendation"
          ? E(e, t, n)
          : o === "Pre-Flight Recommendation"
            ? S(e, t, n, r)
            : o === "Mid-Flight Recommendation"
              ? R(e, t, n, r)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      o,
                  );
                })()
      );
    }
    function I(e) {
      return e === "CAPI_SETUP_ESTIMATED_DAILY_RESULTS"
        ? s._(/*BTDS*/ "")
        : o("MAIBAGoldenPathEntrypointConstants").MAIBA_GUIDANCE_PROMPT;
    }
    var T = {
      padding0: { paddingInlineStart: "x1c1uobl", $$css: !0 },
      padding6: { paddingInlineStart: "x25sj25", $$css: !0 },
      padding12: { paddingInlineStart: "x1g0dm76", $$css: !0 },
      padding24: { paddingInlineStart: "x13jy36j", $$css: !0 },
    };
    function D(e) {
      return e >= 110
        ? T.padding24
        : e >= 85
          ? T.padding12
          : e >= 50
            ? T.padding6
            : T.padding0;
    }
    function x(e) {
      return e == null ? null : typeof e == "string" ? e : String(e);
    }
    function $(e) {
      var t = e.liftEstimation,
        n = e.liftEstimationHeader,
        r = e.mfrCardBody,
        a = e.outcomeFooter,
        i = e.outcomeTitle,
        l = e.promptId,
        s = e.recommendationId,
        u = e.recommendationType,
        c = e.targetAdObjectIDs,
        d = e.targetAdObjectLevel,
        m = e.viewerAdObjectLevel,
        p = o(
          "AdsMgmtAdObjectLevelTransformUtils",
        ).transformRecommendationObjectLevel(d);
      return {
        ad_object_ids: c,
        ad_object_level: p,
        recommendation_id: s,
        additional_info: JSON.stringify({
          lift_estimation_header: x(n),
          lift_estimation: x(t),
          recommendation_id: s,
          mfr_card_body: x(r),
          outcome_title: i,
          outcome_footer: a,
        }),
        admin_text: void 0,
        recommendation_type: _(u),
        recommendation_type_string: u,
        viewer_ad_object_level: o(
          "AdsMgmtAdObjectLevelTransformUtils",
        ).transformObjectTypeTypeToLevel(m),
        prompt_id: l,
      };
    }
    function P(e) {
      var t,
        n = e.adAccountID,
        r = e.extraInfo,
        o = e.recommendationId,
        a = e.recommendationType;
      return {
        ad_object_ids: [n],
        ad_object_level: "AD_ACCOUNT",
        recommendation_id: o,
        additional_info: JSON.stringify({
          lift_estimation: r == null ? void 0 : r.liftEstimation,
          recommendation_id: o,
          crm_capi_integrated: r == null ? void 0 : r.crmCapiIntegrated,
          recommendation_stage: "PCR",
          os_score: (t = r == null ? void 0 : r.osScoreLift) != null ? t : 0,
        }),
        admin_text: void 0,
        recommendation_type: _(a),
        recommendation_type_string: a,
        viewer_ad_object_level: "AD_ACCOUNT",
        prompt_id: "gp6_pcr_entrypoint",
      };
    }
    function N(e) {
      var t = e.adAccountId,
        n = e.entrypoint,
        r = e.isEligible,
        a = e.isInSitu,
        i = e.liftEstimation,
        l = e.liftEstimationHeader,
        s = e.mfrCardBody,
        u = e.outcomeFooter,
        c = e.outcomeTitle,
        d = e.promptId,
        m = e.recommendationHashString,
        p = e.recommendationId,
        _ = e.recommendationSource,
        f = e.recommendationType,
        g = e.targetAdObjectIDs,
        h = e.targetAdObjectLevel,
        y = e.viewerAdObjectLevel,
        C = null;
      (h != null &&
        (C = $({
          liftEstimation: i != null ? i : "",
          liftEstimationHeader: l != null ? l : "",
          mfrCardBody: s,
          outcomeFooter: u,
          outcomeTitle: c,
          promptId: d,
          recommendationId: p != null ? p : null,
          recommendationType: f,
          targetAdObjectIDs: g,
          targetAdObjectLevel: h,
          viewerAdObjectLevel: y,
        })),
        o("AdsGuidancePEV2Logger").logImpressionPEV2({
          ad_account_id: t,
          source: n,
          widget: "maiba_mfr_entrypoint",
          component: "maiba_mfr_entrypoint",
          is_eligible: r,
          is_in_situ: a != null ? a : !1,
          entrypoint: n,
          recommendation_type: f,
          recommendation_source: _,
          target_ad_object_ids: g,
          target_ad_object_level: h,
          recommendation_hash_string: m,
          entrypoint_context: C,
        }));
    }
    function M(e, t, n, r) {
      return e == null && t == null && n.length === 0 && r == null;
    }
    function w() {
      return (
        r("gkx")("28937") ||
        ((r("justknobx")._("7639") || r("gkx")("29504")) &&
          r("qex")._("6056") === !0)
      );
    }
    function A(e, t, n, r) {
      return M(e, t, n, r) && w()
        ? o("MAIBAGP1AnalyzeTopicsUtil").SCORECARD_WEEKLY_REPORT_ID
        : o("MAIBAGP1AnalyzeTopicsUtil").getAnalyzeTopicPromptID(t, e != null);
    }
    function F(e, t, n, r) {
      var a,
        i,
        l = (a = r == null ? void 0 : r.promptCategory) != null ? a : "";
      return e === o("MAIBAGP1AnalyzeTopicsUtil").SCORECARD_WEEKLY_REPORT_ID
        ? {
            prompt: o(
              "MAIBAGP1AnalyzeTopicsUtil",
            ).SCORECARD_WEEKLY_REPORT_USER_MESSAGE.toString(),
            promptCategory: "scorecard",
            promptHighRetentionTopic: "",
          }
        : {
            prompt:
              t != null && t !== ""
                ? t
                : (i = r == null ? void 0 : r.prompt) != null
                  ? i
                  : "",
            promptCategory: l,
            promptHighRetentionTopic: n != null ? n : t != null ? "custom" : "",
          };
    }
    ((l.GOLDEN_PATH_GP1 = (e = o(
      "MAIBAGoldenPathEntrypointConstants",
    )).GOLDEN_PATH_GP1),
      (l.GOLDEN_PATH_GP3 = e.GOLDEN_PATH_GP3),
      (l.GOLDEN_PATH_GP4 = e.GOLDEN_PATH_GP4),
      (l.GP_AM_TABLE_BUTTON_LABEL = e.GP_AM_TABLE_BUTTON_LABEL),
      (l.GP_IN_SITU_CARD_TITLE = e.GP_IN_SITU_CARD_TITLE),
      (l.MAIBA_GP4_CAPI_EVENT_COVERAGE_PROMPT =
        e.MAIBA_GP4_CAPI_EVENT_COVERAGE_PROMPT),
      (l.MAIBA_GP4_GUIDANCE_PROMPT = e.MAIBA_GP4_GUIDANCE_PROMPT),
      (l.MAIBA_GP4_PIXEL_UPSELL_PROMPT = e.MAIBA_GP4_PIXEL_UPSELL_PROMPT),
      (l.MAIBA_GP4_SIGNALS_GROWTH_CAPI_V2_MFR_PROMPT =
        e.MAIBA_GP4_SIGNALS_GROWTH_CAPI_V2_MFR_PROMPT),
      (l.MAIBA_GP6_PCR_GUIDANCE_PROMPT = e.MAIBA_GP6_PCR_GUIDANCE_PROMPT),
      (l.MAIBA_GUIDANCE_PROMPT = e.MAIBA_GUIDANCE_PROMPT),
      (l.MAIBA_PFR_GUIDANCE_PROMPT = e.MAIBA_PFR_GUIDANCE_PROMPT),
      (l.RECOMMENDATION_STAGE_NON_MFR = e.RECOMMENDATION_STAGE_NON_MFR),
      (l.buildMAIBAEntrypointClickMetadata = o(
        "MAIBAEntrypointAutoLoggerMetadata",
      ).buildMAIBAEntrypointClickMetadata),
      (l.getMAIBAGP4Prompt = u),
      (l.getMAIBAImproveCreativePrompt = c),
      (l.getMAIBAAnalysisPrompt = d),
      (l.transformRecommendationObject = _),
      (l.transformXFBRecommendationType = g),
      (l.getGPEntrypointCallsite = C),
      (l.getMAIBAPromptIDByRecommendationType = b),
      (l.getMAIBAPromptByRecommendationType = k),
      (l.getMAIBAPromptByEntrypoint = I),
      (l.getDynamicHeaderPadding = D),
      (l.buildMAIBAMFREntrypointContext = $),
      (l.buildMAIBAPCREntrypointContext = P),
      (l.logMAIBAMFREntrypointImpression = N),
      (l.isEligibleForScorecardWithExposure = w),
      (l.getActionBarPromptID = A),
      (l.getActionBarChatOverrides = F));
  },
  226,
);
