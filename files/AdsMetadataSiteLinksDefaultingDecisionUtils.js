__d(
  "AdsMetadataSiteLinksDefaultingDecisionUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMetadataSiteExtensionDecisionTypes",
    "AdsMetadataSiteExtensionUtils",
    "AdsSiteLinksSharedCooldownGK",
    "PEDefaultOnExclusions",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
        r("AdsAPIOptimizationGoals").LINK_CLICKS,
      ],
      s = new WeakMap(),
      u = new WeakMap();
    function c(e, t, n) {
      return {
        decision: o("AdsMetadataSiteExtensionDecisionTypes").blockSEDecision(
          e,
          o(
            "AdsMetadataSiteExtensionDecisionTypes",
          ).createSEDecisionInputResolution("not_required", "not_required", n),
          { blockingReasons: t, blockingReasonsExhaustive: !1 },
        ),
        logFields: { se_default_enabled: !1 },
        shouldDynamicSEOptOut: !1,
        shouldLog: !0,
        stage: "blocked_before_mutation",
      };
    }
    function d(t) {
      return t.defaultOnType === "BING_API"
        ? (t.optimizationGoal ===
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
            r("gkx")("1025")) ||
            (t.optimizationGoal != null &&
              e.includes(t.optimizationGoal) &&
              r("gkx")("8267"))
        : t.defaultOnType === "CRAWLED_HIGH_QUALITY"
          ? r("gkx")("8505") || r("gkx")("8506")
          : t.defaultOnType === "GEN_AI" ||
              t.defaultOnType === "SHOP" ||
              t.defaultOnType === "STICKY" ||
              t.defaultOnType === "MANUAL" ||
              t.defaultOnType === "MANUAL_CAMPAIGN" ||
              t.defaultOnType === "SITE_LINK_RECOMMENDATION_V2" ||
              t.defaultOnType === "LLM_JUDGE_DEFAULTING"
            ? !0
            : t.defaultOnType === "DSL_ELIGIBLE" &&
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).isDynamicSEDefaultOptInEnabled();
    }
    function m(e) {
      return o("AdsSiteLinksSharedCooldownGK").isSEDisableDefaultOn()
        ? "GK_BLOCKED"
        : o("PEDefaultOnExclusions").isExcludedBySaefSensitiveVerticals()
          ? "SENSITIVE_VERTICAL"
          : e === "defaulted_on"
            ? "PE_DEFAULTING"
            : null;
    }
    function p(e, t, n, r) {
      var a,
        i,
        l = o(
          "AdsMetadataSiteExtensionDecisionTypes",
        ).getSEPEDefaultingInputStatus(r),
        s = m(r);
      if (s != null) return c(s, [s], l);
      var u =
          ((a = (i = e.siteLinksSpec) == null ? void 0 : i.size) != null
            ? a
            : 0) > 0,
        p =
          e.defaultOnType === "LLM_JUDGE_DEFAULTING" ||
          o("AdsMetadataSiteExtensionUtils").shouldDefaultOn(e.siteLinksSpec),
        _ = u ? "NOT_DEFAULTING_ELIGIBLE" : "NO_SITE_LINKS";
      if (!p) return c(_, [_], l);
      var f = t != null && n != null,
        g = o(
          "AdsMetadataSiteExtensionDecisionTypes",
        ).createSEDecisionInputResolution(
          t != null ? "loaded" : "unavailable",
          n != null ? "loaded" : "unavailable",
          l,
        ),
        h = f && l !== "unavailable",
        y = o("AdsMetadataConnectedSourcesUtils").sitelinkShouldStickyOptOut(
          t,
          n,
        ),
        C = o(
          "AdsMetadataConnectedSourcesUtils",
        ).dynamicSEShouldStickyOptOutByGK(t, n),
        b = f ? { is_in_cooldown_period: y, sticky_opt_out: y } : {};
      return y && u
        ? {
            decision: o(
              "AdsMetadataSiteExtensionDecisionTypes",
            ).blockSEDecision("COOLDOWN", g, {
              blockingReasons: ["COOLDOWN"],
              blockingReasonsExhaustive: !1,
            }),
            logFields: {
              is_in_cooldown_period: !0,
              se_default_enabled: !1,
              sticky_opt_out: !0,
            },
            shouldDynamicSEOptOut: C,
            shouldLog: !0,
            stage: "blocked_before_mutation",
          }
        : e.isUnseenCreativeSetupDefault === !0 || d(e)
          ? {
              decision: o(
                "AdsMetadataSiteExtensionDecisionTypes",
              ).allowSEDecision(g, { blockingReasonsExhaustive: h }),
              logFields: babelHelpers.extends({}, b, {
                se_default_enabled: !0,
              }),
              shouldDynamicSEOptOut: C,
              shouldLog: e.siteLinksSpec != null,
              stage: "evaluate_after_mutation",
            }
          : {
              decision: o(
                "AdsMetadataSiteExtensionDecisionTypes",
              ).blockSEDecision("RECOMMENDATION_TYPE_DISABLED", g, {
                blockingReasons: ["RECOMMENDATION_TYPE_DISABLED"],
                blockingReasonsExhaustive: h,
              }),
              logFields: babelHelpers.extends({}, b, {
                se_default_enabled: !1,
              }),
              shouldDynamicSEOptOut: C,
              shouldLog: e.siteLinksSpec != null,
              stage: "evaluate_after_mutation",
            };
    }
    function _(e, t, n, r) {
      var o = s.get(e);
      if (o != null) return o;
      var a = p(e, t, n == null ? void 0 : n.getValue(), r());
      return (s.set(e, a), a);
    }
    function f(e) {
      var t,
        n = (t = e.first()) == null ? void 0 : t.site_link_recommendation_type;
      return n === "LLM_JUDGE_DEFAULTING"
        ? n
        : o("AdsMetadataConnectedSourcesUtils").getSiteLinksDefaultOnType(e);
    }
    function g(e, t, n, r, o) {
      return p(
        {
          adgroupIDs: [],
          defaultOnType: f(e),
          optimizationGoal: o,
          siteLinksSpec: e,
        },
        t,
        n,
        r,
      ).decision;
    }
    function h(e, t) {
      var n,
        r = (n = u.get(e)) != null ? n : new Set();
      (r.add(t), u.set(e, r));
    }
    function y(e) {
      var t;
      return Array.from((t = u.get(e)) != null ? t : []);
    }
    ((l.getSiteLinksDefaultingPolicyBlock = m),
      (l.getSiteLinksSpecDefaultingEvaluation = _),
      (l.getDefaultOnTypeForSiteLinks = f),
      (l.evaluateSiteLinksDefaulting = g),
      (l.recordSiteLinksSpecDefaultingAdgroup = h),
      (l.getProcessedSiteLinksSpecDefaultingAdgroupIDs = y));
  },
  98,
);
