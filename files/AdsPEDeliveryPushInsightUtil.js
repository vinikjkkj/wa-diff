__d(
  "AdsPEDeliveryPushInsightUtil",
  [
    "fbt",
    "$InternalEnum",
    "AdsBudgetOverspendWarningUtilsShared",
    "AdsCurrencyFormatter",
    "AdsExperimentsMulticellCreativeTestConstants",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "active",
        "ad_set_in_learning_phase",
        "delivery_limited",
        "learning_exit_unsuccessful",
      ],
      u = s._(/*BTDS*/ "Low budget used");
    function c(t) {
      return t.some(function (t) {
        return e.includes(t);
      });
    }
    function d(e, t) {
      return {
        caller: "ADS_MANAGER_TABLE",
        filter: {
          account_id: e,
          ad_objects_spec: { object_ids: t, level: "L1" },
          expires_after: 0,
          purpose: "DELIVERY_PUSH",
          symptom: "DELTA",
          lever: "BUDGET",
        },
      };
    }
    var m = n("$InternalEnum")({
      UseExisting: "use_existing",
      AddNew: "add_new",
    });
    function p() {
      return r("gkx")("18973");
    }
    function _(e) {
      var t,
        n,
        o = e.shouldLog;
      return p()
        ? !0
        : o
          ? (t = r("qex")._("2112")) != null
            ? t
            : !1
          : (n = r("qex")._("2113")) != null
            ? n
            : !1;
    }
    function f() {
      return _({ shouldLog: !0 });
    }
    function g() {
      return _({ shouldLog: !1 });
    }
    function h(e) {
      return e == null || e <= 0;
    }
    function y(e) {
      var t = e.additiveBudget,
        n = e.budgetPercentage,
        r = e.isAdditive,
        a = e.isDailyBudget,
        i = e.previousValidDailyBudget;
      return r
        ? h(t)
        : n == null ||
            n <= 0 ||
            n >
              o("AdsExperimentsMulticellCreativeTestConstants")
                .MAX_TEST_BUDGET_PERCENTAGE
          ? !0
          : a
            ? i == null || i <= 0
            : !1;
    }
    function C(e) {
      var t = e.accountAvgDailyCampaignBudget,
        n = e.accountAvgDailyCampaignGroupBudget,
        a = e.additiveBudget,
        i = e.currency,
        l = e.existingParentDailyBudget,
        u = e.isCBO;
      if (a == null || a <= 0 || l == null || r("gkx")("15120")) return null;
      var c = l + a,
        d = o("AdsBudgetOverspendWarningUtilsShared").shouldShowWarning(
          c,
          null,
          l,
          u ? n : t,
          null,
        );
      if (!d) return null;
      var m = o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
        i,
        c,
      );
      return u
        ? s._(
            /*BTDS*/ "This raises your daily campaign budget to {new daily campaign budget}, which looks higher than usual. If it's correct, you can ignore this warning.",
            [s._param("new daily campaign budget", m)],
          )
        : s._(
            /*BTDS*/ "This raises your daily ad set budget to {new daily ad set budget}, which looks higher than usual. If it's correct, you can ignore this warning.",
            [s._param("new daily ad set budget", m)],
          );
    }
    function b() {
      return r("gkx")("21401") || !0;
    }
    ((l.DELIVERY_PUSH_PILL_TEXT = u),
      (l.isDeliverySubstatusSupported = c),
      (l.getBatchedBrainInsightsInput = d),
      (l.DeliveryPushBudgetSource = m),
      (l.getIsAdditiveBudgetExperimentEnabled = f),
      (l.getIsAdditiveBudgetExperimentEnabledWithoutLogging = g),
      (l.getIsAdditiveBudgetInvalid = h),
      (l.getIsBudgetInvalid = y),
      (l.getAdditiveBudgetOverspendWarning = C),
      (l.isDeliveryPushPillFeatureGateOpen = b));
  },
  226,
);
