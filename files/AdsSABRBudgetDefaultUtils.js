__d(
  "AdsSABRBudgetDefaultUtils",
  [
    "$InternalEnum",
    "AdsAPIObjectiveIntEnumUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsUEditorMessagingDestinationUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "Mid" || e === "Low" || e === "Tail";
    }
    function u(e) {
      if (!r("justknobx")._("844")) return !1;
      e ? r("qex")._("5809") : r("qex")._("5810");
      var t = e ? r("qex")._("5811") : r("qex")._("5812");
      return t != null ? t : !1;
    }
    function c(e, t, n) {
      var r = o("AdsAPIObjectiveIntEnumUtils").convertAPIObjectiveToInt(t),
        a = null;
      if (e != null)
        if (n) {
          var i;
          a =
            e == null ||
            (i = e.sabr_budget_l3) == null ||
            (i = i.find(function (e) {
              return e.objective === r;
            })) == null
              ? void 0
              : i.budget;
        } else {
          var l;
          a =
            e == null ||
            (l = e.sabr_budget_l2) == null ||
            (l = l.find(function (e) {
              return e.objective === r;
            })) == null
              ? void 0
              : l.budget;
        }
      return a;
    }
    var d = n("$InternalEnum")({
      SABR: "sabr",
      SABR_VERTICAL_FALLBACK: "sabr_vertical_fallback",
      STICKY_SETTING_FALLBACK: "sticky_setting_fallback",
    });
    function m(e) {
      return e === "sabr_vertical_fallback"
        ? d.SABR_VERTICAL_FALLBACK
        : e === "sticky_setting_fallback"
          ? d.STICKY_SETTING_FALLBACK
          : d.SABR;
    }
    function p(e, t, n, r) {
      if (r != null && !s(r))
        return { budget: null, recommendationType: d.SABR };
      var a = o("AdsAPIObjectiveIntEnumUtils").convertAPIObjectiveToInt(t),
        i = null,
        l = d.SABR;
      if (e != null)
        if (n) {
          var u, c;
          i =
            (u = e.sabr_budget_l3) == null ||
            (u = u.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : u.budget;
          var p =
            (c = e.recommendation_type_l3) == null ||
            (c = c.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : c.recommendation_type;
          l = m(p);
        } else {
          var _, f;
          i =
            (_ = e.sabr_budget_l2) == null ||
            (_ = _.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : _.budget;
          var g =
            (f = e.recommendation_type_l2) == null ||
            (f = f.find(function (e) {
              return e.objective === a;
            })) == null
              ? void 0
              : f.recommendation_type;
          l = m(g);
        }
      return { budget: i, recommendationType: l };
    }
    function _(e, t, n) {
      var o;
      if (t == null) return e;
      var a =
        (o = n ? r("qex")._("2238") : r("qex")._("2335")) != null ? o : !1;
      return a ? t : e;
    }
    function f(e, t) {
      if (
        t == null ||
        (t !== r("AdsAPIObjectives").LINK_CLICKS &&
          t !== r("AdsAPIObjectives").OUTCOME_SALES)
      )
        return !1;
      if (t === r("AdsAPIObjectives").OUTCOME_SALES) {
        var n = r("justknobx")._("4171");
        if (n) return !1;
      }
      if (t === r("AdsAPIObjectives").LINK_CLICKS) {
        var o = r("justknobx")._("373");
        if (o) return !1;
      }
      return e ? r("gkx")("11307") : r("gkx")("11313");
    }
    var g = new Set([
      (e = r("AdsAPIObjectives")).OUTCOME_SALES,
      e.LINK_CLICKS,
      e.OUTCOME_LEADS,
      e.OUTCOME_AWARENESS,
      e.APP_INSTALLS,
    ]);
    function h(e) {
      return e == null ? !1 : g.has(e);
    }
    var y = new Set([
      r("AdsAPIOptimizationGoals").CONVERSATIONS,
      r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
      r("AdsAPIOptimizationGoals").REPLIES,
    ]);
    function C(e, t) {
      return e == null
        ? !1
        : !!(
            y.has(e) ||
            (t != null &&
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isClickToMessageAdDestination(t))
          );
    }
    function b(e, t, n, o) {
      if ((t != null && !h(t)) || C(n, o)) return !1;
      var a = e ? r("gkx")("3533") : r("gkx")("3758");
      return a ? !0 : u(e);
    }
    function v(e, t, n, o) {
      if ((t != null && !h(t)) || C(n, o)) return !1;
      var a = e ? r("gkx")("3533") : r("gkx")("3758");
      return a ? !0 : u(e);
    }
    ((l.getDefaultSabrBudget = c),
      (l.SabrRecommendationType = d),
      (l.getDefaultSabrBudgetV2 = p),
      (l.selectSabrBudgetTier = _),
      (l.isSABRBudgetDefaultingEnabled = f),
      (l.isObjectiveEligibleForSABRV2 = h),
      (l.isOptimizationGoalExcludedFromSABRV2 = C),
      (l.isSABRBudgetDefaultingV2Enabled = b),
      (l.isSABRGuidanceAndDefaultingCombinedEnabled = v));
  },
  98,
);
