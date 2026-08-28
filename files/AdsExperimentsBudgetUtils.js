__d(
  "AdsExperimentsBudgetUtils",
  ["Currency", "Instant", "adsCampaignGroupGetBudgetType", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return (
          n /
          (t.account_currency_ratio_to_usd *
            o("Currency").getOffset(t.currency))
        );
      },
      s = function (t) {
        return (
          r("adsCampaignGroupGetBudgetType")(
            t == null ? void 0 : t.daily_budget,
            t == null ? void 0 : t.lifetime_budget,
          ) != null
        );
      },
      u = function (t) {
        return r("isTruthy")(t) && t !== "0";
      },
      c = function (t) {
        return r("isTruthy")(t) && t !== "0";
      },
      d = function (t) {
        return r("isTruthy")(t) && t !== 0;
      },
      m = function (t, n) {
        return t * o("Currency").getOffset(n);
      },
      p = function (t) {
        var e = t.configuredBudget,
          n = t.currency,
          r = t.originalDailyBudget,
          o = t.originalLifetimeBudget,
          a = e != null && n != null ? m(e, n) : null;
        return {
          daily_budget: a != null && r != null ? String(a) : r,
          lifetime_budget: a != null && o != null ? String(a) : o,
          budget_remaining: a != null && o != null ? String(a) : o,
        };
      },
      _ = function (t) {
        return t == null ? null : o("Instant").toISOString(t);
      },
      f = function (t, n) {
        var e = p(t);
        return babelHelpers.extends({}, e, {
          start_time: _(n.start_time),
          end_time: _(n.end_time),
        });
      };
    ((l.convertToUSD = e),
      (l.isCBOEnabled = s),
      (l.hasCampaignGroupDailyBudget = u),
      (l.hasCampaignGroupLifeTimeBudget = c),
      (l.hasCampaignDailyBudget = d),
      (l.convertDisplayToOffsetUnits = m),
      (l.applyBudgetOverride = p),
      (l.unixTimestampToISOString = _),
      (l.createCampaignWithBudgetAndSchedule = f));
  },
  98,
);
