__d(
  "AdsCampaignGoalExpressionUtils",
  ["AdsCampaignGoalAutoCAUtils", "AudienceLabelsGKUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("qex")._("4754");
    }
    function s() {
      return r("qex")._("1754") === !0;
    }
    function u(t) {
      var n = t.isCTVEnabled,
        o = n === void 0 ? !1 : n,
        a = t.isHECEnabled;
      if (a || o) return !1;
      if (s() || r("gkx")("22488")) return !0;
      var i = e();
      return i != null;
    }
    function c() {
      if (r("gkx")("22488")) return !0;
      var t = e();
      return t === "treatment_full";
    }
    function d() {
      return (
        r("gkx")("22658") ||
        g() ||
        o("AudienceLabelsGKUtils").isNCALabelsExclusionQEEnabled()
      );
    }
    function m() {
      return u({ isHECEnabled: !1 }) && r("gkx")("24172");
    }
    function p(e) {
      return e === 2 || e === 1 || e === 3 || e === 6;
    }
    function _(e) {
      var t,
        n =
          (t =
            e == null
              ? void 0
              : e.some(function (e) {
                  return p(e);
                })) != null
            ? t
            : !1;
      return (
        n &&
        o("AudienceLabelsGKUtils").isL2CustomAudienceLabelSelectionGKEnabled()
      );
    }
    function f() {
      return r("gkx")("21379");
    }
    function g() {
      return r("gkx")("21917") || f();
    }
    function h(e, t) {
      var n,
        r =
          (n =
            e == null
              ? void 0
              : e.some(function (e) {
                  return p(e);
                })) != null
            ? n
            : !1;
      return !r || !o("AdsCampaignGoalAutoCAUtils").isAutoCAApplied(t)
        ? !1
        : g();
    }
    function y(e, t) {
      var n,
        r =
          (n =
            e == null
              ? void 0
              : e.some(function (e) {
                  return p(e);
                })) != null
            ? n
            : !1;
      return !r || o("AdsCampaignGoalAutoCAUtils").isAutoCAApplied(t)
        ? !1
        : g();
    }
    function C(e) {
      var t,
        n =
          (t =
            e == null
              ? void 0
              : e.some(function (e) {
                  return p(e);
                })) != null
            ? t
            : !1;
      return n ? f() : !1;
    }
    function b(e) {
      return e !== 2;
    }
    function v(e) {
      return (
        e.length > 0 &&
        e.every(function (e) {
          return e === 1;
        })
      );
    }
    function S() {
      if (!r("gkx")("21249")) return !1;
      if (r("qex")._("470") === !0) return s();
      var t = e();
      return t != null;
    }
    function R(e, t) {
      return e && t ? 6 : e ? 1 : t ? 3 : 2;
    }
    ((l.getArm = e),
      (l.hasGoalExpressionGAAccess = s),
      (l.shouldUseGoalExpression = u),
      (l.shouldUseGoalExpressionFull = c),
      (l.shouldSplitExclusionSection = d),
      (l.shouldShowVARInGoalExpression = m),
      (l.isNCAGoalType = p),
      (l.shouldShowAudienceLabelSelection = _),
      (l.isAutoCAWithoutOptOutEnabled = f),
      (l.isAutoCAExperienceEnabled = g),
      (l.shouldShowAutoCA = h),
      (l.shouldOfferAutoCA = y),
      (l.shouldShowAutoCARetentionSection = C),
      (l.shouldApplyNCAExclusionRecommendations = b),
      (l.isExclusionAutoSelected = v),
      (l.shouldAutoOptInNCAGoal = S),
      (l.getGoalTypeForEngagedAudiences = R));
  },
  98,
);
