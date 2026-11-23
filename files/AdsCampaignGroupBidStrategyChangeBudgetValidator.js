__d(
  "AdsCampaignGroupBidStrategyChangeBudgetValidator",
  [
    "errorCode",
    "invariant",
    "AdsAPICampaignGroupPaths",
    "AdsAPICampaignGroupRecordUtils",
    "AdsBudgetUtils",
    "AdsCampaignGroupBudgetStrings",
    "AdsCampaignGroupBudgetValidationUtils",
    "AdsError",
    "AdsMinBudgetExperimentCohort",
    "AdsStrictValidator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = Object.freeze({
        account: {
          account_currency_ratio_to_usd: null,
          capabilities: null,
          currency: null,
          min_daily_budget: null,
          tax_country: null,
          timezone_id: null,
        },
        campaignGroup: {
          buying_type: null,
          daily_budget: null,
          lifetime_budget: null,
          lifetime_spent: null,
          objective: null,
          today_spent: null,
          yesterday_spent: null,
        },
        campaigns: null,
        budgetAmount: null,
        budgetMode: null,
      }),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDependencies = function () {
            return e;
          }),
          (a.shouldValidate = function (t) {
            var e = t.budgetAmount,
              n = t.budgetMode,
              r = t.campaignGroup;
            return (
              o("AdsAPICampaignGroupRecordUtils").hasBudget(r) &&
              e != null &&
              n != null
            );
          }),
          (a.validate = function (t) {
            var e = t.account,
              n = t.budgetAmount,
              r = t.budgetMode,
              a = t.campaignGroup,
              i = t.campaigns;
            (n != null && r != null) || u(0, 3615);
            var l = o(
                "AdsCampaignGroupBudgetValidationUtils",
              ).getMinRequiredBudgetData(e, r, a, i || []),
              s = l.minBudget,
              c = l.minBudgetExperimental,
              d = l.shouldMaybeExposeQE;
            if (
              (c != null &&
                n < c &&
                d &&
                o("AdsMinBudgetExperimentCohort").getMinBudgetExperimentCohort(
                  !0,
                ),
              n < s)
            ) {
              var m = e.currency;
              return [
                this.$AdsCampaignGroupBidStrategyChangeBudgetValidator$p_1(
                  s,
                  m,
                  r,
                ),
              ];
            }
            return [];
          }),
          (a.$AdsCampaignGroupBidStrategyChangeBudgetValidator$p_1 = function (
            t,
            n,
            a,
          ) {
            var e =
              a === "daily"
                ? r("AdsAPICampaignGroupPaths").DAILY_BUDGET
                : r("AdsAPICampaignGroupPaths").LIFETIME_BUDGET;
            return new (r("AdsError"))(
              1885650,
              o(
                "AdsCampaignGroupBudgetStrings",
              ).getCampaignGroupBudgetToggleOnModalBudgetTooLowForBids(
                o("AdsBudgetUtils").formatCurrency(t, n),
                !1,
              ),
              { level: r("AdsError").Level.WARN, path: e },
            );
          }),
          n
        );
      })(r("AdsStrictValidator")),
      d = new c();
    l.default = d;
  },
  98,
);
