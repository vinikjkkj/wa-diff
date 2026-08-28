__d(
  "AdsCampaignGroupBudgetValidationUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPICampaignRecordUtils",
    "AdsBudgetValidationUtils",
    "AdsCampaignBudgetConstants.experimental",
    "AdsError",
    "AdsErrorsCTAStrings",
    "AdsODAXUtils",
    "adsCampaignIsCampaignActive",
    "adsGetCampaignGroupBudget",
    "errorSummary",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d,
      m = ["campaign_spend_limit"],
      p = ["campaign_spend_cap"],
      _ = ["campaign_min_spend_target"],
      f = ["campaign_min_spend_target_or_campaign_group_budget_path"],
      g = ["asa_campaign_existing_customer_budget_percentage_target"],
      h = {
        bid: new (e = r("AdsError"))(
          2016046,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "All ad sets within this campaign must be using the same type of bidding. Automatic bid may cause spend to shift completely to these ad sets.",
            );
          }, {}),
          {
            level: e.Level.WARN,
            title: (d = r("errorSummary"))._(function (e) {
              return e._(/*BTDS*/ "Inconsistent Bid Types");
            }),
          },
        ),
        campaignGroupBudget: new e(
          1885650,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your budget must be at least {minimum_budget}. This minimum amount is required to account for any spending that occurs while your budget is updated, which may take up to 15 minutes.",
              [e._param("minimum_budget", t.minimum_budget)],
            );
          }, {}),
          {
            level: e.Level.WARN,
            title: d._(function (e) {
              return e._(/*BTDS*/ "Budget Too Low");
            }),
          },
        ),
        optimizationGoal: new e(
          2016047,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "You are optimizing for different events between your ad sets. For best results, we recommend using manual bid to specify how much you value each event. Using Automatic bidding may cause spend to shift unexpectedly.",
            );
          }, {}),
          {
            level: e.Level.NOTIFY,
            title: d._(function (e) {
              return e._(/*BTDS*/ "Inconsistent Optimization Goals");
            }),
          },
        ),
        minSpend: new e(
          2016055,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "The ad set minimum spend limit is larger than the campaign budget. Adjust either the campaign budget or the minimum spend limit.",
            );
          }, {}),
          {
            level: e.Level.RECOMMEND,
            title: d._(function (e) {
              return e._(
                /*BTDS*/ "Minimum Spend Limit Larger Than Campaign Budget",
              );
            }),
          },
        ),
        spendCapConflict: new e(
          1885665,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your daily minimum spend limit is too high. It must be less than or equal to 90\u0025 of your campaign spending limit.",
            );
          }, {}),
          {
            level: e.Level.WARN,
            title: d._(function (e) {
              return e._(
                /*BTDS*/ "Campaign maximum spend limit conflicting with minimum spend limit",
              );
            }),
            cta: r("AdsErrorsCTAStrings").EDIT_SPEND_LIMIT,
            path: m,
          },
        ),
        maxMinSpendLimitCoexisting: new e(
          2446299,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Using minimum and maximum spend limits together limits how your budget can be distributed. It may lead to a higher cost per action, lower return on ad spend or underdelivery.",
            );
          }, {}),
          {
            level: e.Level.RECOMMEND,
            title: d._(function (e) {
              return e._(
                /*BTDS*/ "Applying Multiple Spend Limits May Affect Performance",
              );
            }),
            helpCenterID: "2325095000852187",
            cta: c._(/*BTDS*/ "Learn more"),
            path: m,
          },
        ),
        maxSpendLimitAndBudgetConflict: new e(
          2446317,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your ad sets' combined maximum spend limit is lower than your campaign budget. To spend your entire budget, raise your maximum limits.",
            );
          }, {}),
          {
            level: e.Level.RECOMMEND,
            title: d._(function (e) {
              return e._(
                /*BTDS*/ "Campaign Budget Is Higher Than Maximum Spend Limit",
              );
            }),
            helpCenterID: "2325095000852187",
            cta: c._(/*BTDS*/ "Learn more"),
            path: m,
          },
        ),
        minSpendLimitAndCampaignBudgetConflict: new e(
          1885648,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your ad sets' combined minimum spend is higher than your campaign budget. Please lower your minimum limits or increase your budget.",
            );
          }, {}),
          {
            level: e.Level.WARN,
            title: d._(function (e) {
              return e._(
                /*BTDS*/ "Minimum Spend Limit Is Higher Than Campaign Budget",
              );
            }),
            path: f,
          },
        ),
        campaignGroupSpendCapLowerThanBudgetError: new e(
          3858640,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Your campaign's spending limit is lower than its daily budget. This means some of your budget won't be spent.",
            );
          }, {}),
          {},
        ),
      },
      y = [h.campaignGroupBudget],
      C = [h.bid, h.optimizationGoal],
      b = [h.spendCapConflict, h.maxMinSpendLimitCoexisting],
      v = [h.maxSpendLimitAndBudgetConflict];
    function S(e, t) {
      if (!e.length) return !0;
      for (var n = r("getByPath")(e[0], t), o = 1, a = e.length; o < a; o++)
        if (n !== r("getByPath")(e[o], t)) return !1;
      return !0;
    }
    function R(e) {
      return (
        (k(e.daily_min_spend_target) && I(e.daily_spend_cap)) ||
        (k(e.lifetime_min_spend_target) && I(e.lifetime_spend_cap))
      );
    }
    function L(e) {
      return I(e.daily_spend_cap) || I(e.lifetime_spend_cap);
    }
    function E(e) {
      return e != null && Number(e) !== 0;
    }
    function k(e) {
      return e != null && Number(e) !== 0;
    }
    function I(e) {
      return e != null && Number(e) !== 922337203685478;
    }
    function T(e) {
      return e
        .map(function (e) {
          var t, n;
          return Number(
            (t = (n = e.daily_spend_cap) != null ? n : e.lifetime_spend_cap) !=
              null
              ? t
              : 922337203685478,
          );
        })
        .reduce(function (e, t) {
          return e + t;
        });
    }
    function D(e) {
      var t = e.map(function (e) {
        var t, n;
        return Number(
          (t =
            (n = e.daily_min_spend_target) != null
              ? n
              : e.lifetime_min_spend_target) != null
            ? t
            : 0,
        );
      });
      return t.reduce(function (e, t) {
        return e + t;
      });
    }
    function x(e, t) {
      var n = e.filter(function (e) {
        return t.some(function (t) {
          return +t.key == +e.key;
        });
      });
      return n.length === e.length ? e : n;
    }
    function $(e) {
      return x(e, y);
    }
    function P(e) {
      return x(e, C);
    }
    function N(e) {
      return x(e, b);
    }
    function M(e) {
      return x(e, v);
    }
    function w(e, t, n, a) {
      var i = a.reduce(function (r, a) {
          var i = o("AdsBudgetValidationUtils").getMinimumBudgetByBudgetType(
              n.buying_type,
              o("AdsODAXUtils").maybeTranslateObjective(
                n.objective,
                o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  n.objective,
                  a,
                ),
                a.optimization_goal,
              ),
              n.objective,
              e,
              a,
              t,
              !0,
              !1,
              null,
              a,
            ),
            l = i.minBudget,
            s = i.shouldMaybeExposeQE;
          return r + l;
        }, 0),
        l = a.reduce(function (e, n) {
          return (
            e +
            (r("adsCampaignIsCampaignActive")(n)
              ? o("AdsBudgetValidationUtils").getCampaignOccupiedSpend(n, t)
              : 0)
          );
        }, 0);
      return (
        t === "lifetime" &&
          (l = Math.max(
            l,
            (+n.lifetime_spent || 0) +
              r("AdsCampaignBudgetConstants.experimental")
                .TODAY_YESTERDAY_SPEND_COEF *
                ((+n.today_spent || 0) + (+n.yesterday_spent || 0)),
          )),
        Math.max(i, l)
      );
    }
    ((l.CAMPAIGN_SPEND_LIMIT_PATH = m),
      (l.CAMPAIGN_SPEND_CAP_PATH = p),
      (l.CAMPAIGN_MIN_SPEND_TARGET_PATH = _),
      (l.CAMPAIGN_MIN_SPEND_TARGET_OR_CAMPAIGN_GROUP_BUDGET_PATH = f),
      (l.ASA_CAMPAIGN_EXISTING_CUSTOMER_BUDGET_PERCENTAGE_PATH = g),
      (l.errors = h),
      (l.haveUniformField = S),
      (l.isMaxMinSpendLimitsCoexisting = R),
      (l.hasMaxSpendLimit = L),
      (l.isValidBudgetSpendPercentage = E),
      (l.isValidMinSpendLimit = k),
      (l.isValidMaxSpendLimit = I),
      (l.getCampaignMaxSpendSum = T),
      (l.getCampaignMinSpendSum = D),
      (l.filterErrors = x),
      (l.filterCampaignGroupBudgetErrors = $),
      (l.filterBudgetErrors = P),
      (l.filterMaxMinSpendCapSetupErrors = N),
      (l.filterMaxSpendCapErrors = M),
      (l.getMinRequiredBudget = w),
      (l.getCampaignGroupBudget = r("adsGetCampaignGroupBudget")));
  },
  226,
);
