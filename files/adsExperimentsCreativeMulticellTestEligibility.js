__d(
  "adsExperimentsCreativeMulticellTestEligibility",
  [
    "$InternalEnum",
    "AdStudiesProvider",
    "AdsAPIBidStrategies",
    "AdsExperimentsBudgetUtils",
    "IsAppAdUtils",
    "adsExperimentIsLiftStudy",
    "adsSplitTestIsSplitTestSupported",
    "adsTALGetAllStudiesSelector",
    "isFalsey",
    "justknobx",
    "only",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        o("AdsExperimentsBudgetUtils").hasCampaignGroupDailyBudget(
          e.daily_budget,
        ) ||
        o("AdsExperimentsBudgetUtils").hasCampaignDailyBudget(t.daily_budget)
      );
    }
    function s(e, t) {
      return (
        e.bid_strategy === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP ||
        t.bid_strategy === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
      );
    }
    function u(e, t, n) {
      return (
        e.lightweight_split_test != null ||
        t.lightweight_split_test != null ||
        n.lightweight_split_test != null
      );
    }
    function c(e, t, n, a) {
      var i,
        l,
        s = r("adsTALGetAllStudiesSelector")().getValue();
      if (r("justknobx")._("875")) {
        var u,
          c,
          d,
          m,
          p,
          _ = !1;
        e == null ||
          (u = e.study_ids) == null ||
          u.forEach(function (e) {
            var t =
              s == null
                ? void 0
                : s.find(function (t) {
                    return t.id === e;
                  });
            t != null &&
              o("adsExperimentIsLiftStudy").isLiftStudy(t) &&
              (_ = !0);
          });
        var f =
            e.study_ids != null &&
            ((c = e.study_ids) == null ? void 0 : c.length) > 0,
          g =
            e.include_in_ad_study_id != null ||
            t.include_in_ad_study_id != null ||
            (t.study_ids != null &&
              ((d = t.study_ids) == null ? void 0 : d.length) > 0) ||
            (n != null &&
              (((m = n.publishedStudyIDs) == null ? void 0 : m.length) > 0 ||
                ((p = n.draftStudyIDs) == null ? void 0 : p.length) > 0));
        return g || (f && !_);
      }
      var h = !1,
        y = function (t) {
          t == null ||
            t.forEach(function (e) {
              var t =
                s == null
                  ? void 0
                  : s.find(function (t) {
                      return t.id === e;
                    });
              t != null
                ? o("adsExperimentIsLiftStudy").isLiftStudy(t) || (h = !0)
                : a != null &&
                  r("AdStudiesProvider")().get({ adAccountID: a, studyID: e });
            });
        };
      (y(e == null ? void 0 : e.study_ids),
        y(t == null ? void 0 : t.study_ids));
      var C =
        e.include_in_ad_study_id != null ||
        t.include_in_ad_study_id != null ||
        (n != null &&
          (((i = n.publishedStudyIDs) == null ? void 0 : i.length) > 0 ||
            ((l = n.draftStudyIDs) == null ? void 0 : l.length) > 0));
      return C || h;
    }
    function d(e) {
      return e.ab_test_config != null;
    }
    var m = n("$InternalEnum")({
      ALREADY_IN_TEST: "already_in_test",
      UNSUPPORTED_BID_STRATEGY: "unsupported_bid_strategy",
    });
    function p(e) {
      var t = e.adAccountID,
        n = e.creativeMulticellStudies,
        o = e.isEligiblePCAUnifiedL1,
        a = e.isPCAUnifiedFormatEnabled,
        i = e.selectedAdGroups,
        l = e.selectedCampaignGroups,
        p = e.selectedCampaigns,
        _ = r("only")(i),
        f = r("only")(p),
        g = r("only")(l);
      if (_ == null || f == null || g == null) return { isEligible: !1 };
      var h = s(g, f),
        y = u(_, g, f),
        C = c(g, f, n, t),
        b = d(g),
        v = r("adsSplitTestIsSplitTestSupported")({
          buyingType: g.buying_type,
          objective: g.objective,
        }),
        S = r("IsAppAdUtils").isSKANOrAEMCampaign(g, f),
        R =
          !o &&
          r("isFalsey")(f.is_dynamic_creative_optimization) &&
          !a &&
          !b &&
          v &&
          !S &&
          _.include_in_ad_study_id == null,
        L = C || y,
        E = !1,
        k = null;
      return (
        L
          ? ((E = !0), (k = m.ALREADY_IN_TEST))
          : h || ((E = !0), (k = m.UNSUPPORTED_BID_STRATEGY)),
        { isEligible: R, shouldDisabledButton: E, disabledReason: k }
      );
    }
    ((l.hasDailyBudget = e),
      (l.hasLowestCostWithoutCapBidStrategy = s),
      (l.AdsExperimentsCreativeMulticellTestDisabledReason = m),
      (l.adsExperimentsCreativeMulticellTestEligibility = p));
  },
  98,
);
