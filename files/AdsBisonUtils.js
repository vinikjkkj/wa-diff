__d(
  "AdsBisonUtils",
  ["AdsAPIBidStrategies", "AdsAPIOptimizationGoals", "BinarySearch", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2.5,
      s = 2,
      u = 6,
      c = [
        "actions",
        "bid",
        "impressions",
        "reach",
        "spend",
        "predicted_errors_conversions",
        "predicted_errors_reach",
        "reach_lower_bound",
        "reach_upper_bound",
        "actions_lower_bound",
        "actions_upper_bound",
      ],
      d = [].concat(c, [
        "marketing_message_delivery",
        "marketing_message_delivery_lower_bound",
        "marketing_message_delivery_upper_bound",
      ]),
      m = {
        getReachEstimateByBudget: function (t, n, o, a, i) {
          i === void 0 && (i = !1);
          var e = m.getEmptyPoint();
          if (n <= 0 || !t || t.length === 0 || !t[0]) return e;
          if (i) return m.getReachEstimateByTargetCPA(t, n, o);
          var l = o == null || o === 0 || a ? Number.MAX_SAFE_INTEGER : o,
            s;
          for (s = 0; s < t.length && !(t[s].spend > n || t[s].bid > l); s++);
          if (s === 0) {
            var u = t[0],
              c = Math.min(n / u.spend, l / u.bid),
              d = c * u.spend;
            return m.interpolatePoint(d, e, u, "spend");
          }
          if (s === t.length) {
            var p = t[t.length - 1];
            if (r("gkx")("9118")) {
              if (t.length >= 2) {
                var _ = t[t.length - 2];
                return m.interpolatePoint(n, _, p, "spend");
              }
              return m.interpolatePoint(n, e, p, "spend");
            }
            return p;
          }
          var f = t[s - 1],
            g = t[s],
            h = Math.min(
              (n - f.spend) / (g.spend - f.spend),
              (l - f.bid) / (g.bid - f.bid),
            ),
            y = f.spend + h * (g.spend - f.spend);
          return m.interpolatePoint(y, f, g, "spend");
        },
        interpolateCBOCampaignGroupByBudget: function (t, n) {
          var e = m.getEmptyPoint();
          return t == null || t.length === 0
            ? e
            : n > t[t.length - 1].spend
              ? t[t.length - 1]
              : ((e = m.interpolateCBOOutcome(t, null, n)), e);
        },
        interpolateCBOOutcome: function (t, n, r) {
          for (var e = m.getEmptyPoint(), o = 0, a = 0; a < t.length - 1; a++)
            t[a].spend > r ||
              r > t[a + 1].spend ||
              ((o =
                t[a + 1].spend - t[a].spend == 0
                  ? 0
                  : (r - t[a].spend) / (t[a + 1].spend - t[a].spend)),
              (e = m.interpolatedPointOnSelectedCampaignCurve(
                o,
                a,
                a + 1,
                n != null ? n : t,
              )));
          return e;
        },
        interpolateCBOCampaignByBudget: function (t, n, o, a) {
          var e = m.getEmptyPoint();
          return a !== r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP ||
            t == null ||
            t.length === 0 ||
            n == null ||
            n.length === 0
            ? e
            : o > t[t.length - 1].spend
              ? n[n.length - 1]
              : ((e = m.interpolateCBOOutcome(t, n, o)), e);
        },
        interpolatedPointOnSelectedCampaignCurve: function (t, n, r, o) {
          var e = o[n],
            a = o[r],
            i = function (r) {
              var n = e[r],
                o = a[r];
              return n == null || o == null ? 0 : n + t * (o - n);
            },
            l = m.getEmptyPoint();
          for (var s of c) l[s] = i(s);
          return l;
        },
        getInterpolatedPointByTargetCPA: function (t, n) {
          var e = m.getEmptyPoint();
          if (n == null || n <= 0) return e;
          var r;
          for (r = 0; r < t.length; r++) {
            var o = t[r].spend,
              a = t[r].actions;
            if (a !== 0 && o / a >= n) break;
          }
          var i = babelHelpers.extends({}, t[t.length - 1]);
          if (r < t.length) {
            var l = r === 0 ? e : t[r - 1],
              s = t[r],
              u = l.spend,
              c = s.spend,
              d = l.actions,
              p = s.actions,
              _ = n * d - u,
              f = n * (d - p) - (u - c),
              g = f > 0 ? _ / f : 0,
              h = u + g * (c - u);
            i = m.interpolatePoint(h, l, s, "spend");
          }
          return i;
        },
        getReachEstimateByTargetCPA: function (t, n, r) {
          var e = m.getInterpolatedPointByTargetCPA(t, r);
          return m.scalePointByBudgetFactor(e, n);
        },
        getReachEstimateForBidStrategy: function (t, n, o, a) {
          switch (a) {
            case r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP:
              return m.getReachEstimateByBudget(t, n, o, !0, !1);
            case r("AdsAPIBidStrategies").TARGET_COST:
              return m.getReachEstimateByBudget(t, n, o, !1, !0);
            case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
              return m.getReachEstimateByBudget(t, n, o, !1, !1);
            case r("AdsAPIBidStrategies").COST_CAP:
              return m.getReachEstimateForCostCap(t, n, o);
            default:
              return m.getEmptyPoint();
          }
        },
        getBoundsWithErrorPrediction: function (n, r, o, a, i) {
          var t = r < 0 ? 2 * n : r;
          if (i === !0) return { max: a != null ? a : t, mid: n, min: o || 0 };
          var l = Math.max(o || 0, n / e),
            s = Math.min(
              a != null ? a : Number.MAX_SAFE_INTEGER,
              Math.min(n * e, t),
            );
          return (
            (l = Math.max(0, Math.min(n - u / 2, l))),
            (s = Math.max(l + u, s)),
            { max: s, mid: n, min: l }
          );
        },
        getLastAcceptableConfidence: function (n, r) {
          if (!Array.isArray(n) || n.length === 0) return m.getEmptyPoint();
          var t =
              r === "reach"
                ? "predicted_errors_reach"
                : "predicted_errors_conversions",
            o = n.findIndex(function (n) {
              return n[t] > e;
            }),
            a = o > 0 ? n[o - 1] : n[n.length - 1];
          return a;
        },
        checkBudgetConfidenceMultiplier: function (n, r, o) {
          if (!Array.isArray(n) || n.length < 2) return !1;
          var t =
              r === "reach"
                ? "predicted_errors_reach"
                : "predicted_errors_conversions",
            a = n.findIndex(function (n) {
              return n[t] > e;
            });
          if (a <= 0) return !0;
          var i = s * o;
          if (n[a - 1].spend > i) return !0;
          if (n[a].spend < i) return !1;
          var l = m.getPointFromSpend(s * o, n);
          return l[t] < e;
        },
        getPointFromSpend: function (t, n) {
          if (n.length === 0) return m.getEmptyPoint();
          var e = m.getEmptyPoint();
          e.spend = t;
          var r = o("BinarySearch").findBoundInArray(
            n,
            e,
            function (e, t) {
              return e.spend - t.spend;
            },
            o("BinarySearch").LEAST_UPPER_BOUND,
          );
          if (r >= n.length) return n[n.length - 1];
          var a = r === 0 ? m.getEmptyPoint() : n[r - 1],
            i = n[r];
          return m.interpolatePoint(t, a, i, "spend");
        },
        interpolatePoint: function (t, n, r, o, a) {
          var e = n[o],
            i = r[o];
          if (e === i) return n;
          var l = function (a) {
              var o = n[a],
                l = r[a];
              if (o == null || l == null) return 0;
              var s = (l - o) / (i - e);
              return o + s * (t - e);
            },
            s = m.getEmptyPoint(a);
          for (var u of a === !0 ? d : c) s[u] = l(u);
          return s;
        },
        scalePointByBudgetFactor: function (t, n) {
          var e = n < t.spend ? n / t.spend : 1;
          for (var r in t)
            t[r] == null
              ? (t[r] = 0)
              : r === "spend"
                ? (t[r] = Math.min(t[r], n))
                : r !== "bid" && (t[r] *= e);
          return t;
        },
        getLastPointOfEstimate: function (t, n) {
          var e = n != null ? n : t.daily_outcomes_curve;
          return e.length === 0 ? m.getEmptyPoint() : e[e.length - 1];
        },
        getLastPointPredictionForCampaign: function (t) {
          var e = t.curve;
          return !e || e.length === 0 ? m.getEmptyPoint() : e[e.length - 1];
        },
        getEmptyPoint: function (t) {
          return t === !0
            ? {
                actions: 0,
                bid: 0,
                impressions: 0,
                reach: 0,
                spend: 0,
                predicted_errors_conversions: 1,
                predicted_errors_reach: 1,
                reach_lower_bound: 0,
                reach_upper_bound: 0,
                actions_lower_bound: 0,
                actions_upper_bound: 0,
                marketing_message_delivery: 0,
                marketing_message_delivery_lower_bound: 0,
                marketing_message_delivery_upper_bound: 0,
              }
            : {
                actions: 0,
                bid: 0,
                impressions: 0,
                reach: 0,
                spend: 0,
                predicted_errors_conversions: 1,
                predicted_errors_reach: 1,
                reach_lower_bound: 0,
                reach_upper_bound: 0,
                actions_lower_bound: 0,
                actions_upper_bound: 0,
              };
        },
        getEstimatedCVR: function (t, n) {
          return n === 0 ? 0 : t / n;
        },
        shouldShowActions: function (t) {
          switch (t) {
            case r("AdsAPIOptimizationGoals").APP_INSTALLS:
            case r("AdsAPIOptimizationGoals").EVENT_RESPONSES:
            case r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS:
            case r("AdsAPIOptimizationGoals").LEAD_GENERATION:
            case r("AdsAPIOptimizationGoals").LINK_CLICKS:
            case r("AdsAPIOptimizationGoals").OFFER_CLAIMS:
            case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
            case r("AdsAPIOptimizationGoals").PAGE_ENGAGEMENT:
            case r("AdsAPIOptimizationGoals").PAGE_LIKES:
            case r("AdsAPIOptimizationGoals").POST_ENGAGEMENT:
            case r("AdsAPIOptimizationGoals").VIDEO_VIEWS:
            case r("AdsAPIOptimizationGoals").QUALITY_CALL:
            case r("AdsAPIOptimizationGoals").CONVERSATIONS:
            case r("AdsAPIOptimizationGoals").REPLIES:
            case r("AdsAPIOptimizationGoals").THRUPLAY:
            case r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS:
              return !0;
            default:
              return !1;
          }
        },
        getReachEstimateForCostCap: function (t, n, r) {
          var e = m.getEmptyPoint();
          if (n <= 0 || !t || t.length === 0 || !t[0] || r == null || r === 0)
            return e;
          var o;
          for (o = 0; o < t.length && !(t[o].spend > n); o++);
          var a;
          if (o === 0) {
            var i = t[0];
            a = m.interpolatePoint(n, e, i, "spend");
          } else if (o === t.length) a = t[t.length - 1];
          else {
            var l = t[o - 1],
              s = t[o];
            a = m.interpolatePoint(n, l, s, "spend");
          }
          var u = a.spend / a.actions,
            c = r >= u;
          return c ? a : m.getInterpolatedPointByTargetCPA(t, r);
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
