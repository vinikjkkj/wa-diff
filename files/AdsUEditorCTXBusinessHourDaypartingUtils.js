__d(
  "AdsUEditorCTXBusinessHourDaypartingUtils",
  [
    "fbt",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsApiScheduleObjectFields",
    "AdsDayPartingInterval",
    "AdsOptimizationStrings",
    "AdsPageStore",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
    "AdsUEditorCampaignGroupToggleDayPartingAction",
    "AdsUEditorHostIDs",
    "DayPartingUtils",
    "adsCampaignGetBudgetMode",
    "gkx",
    "immutable",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = [
        "sun_1_open",
        "mon_1_open",
        "tue_1_open",
        "wed_1_open",
        "thu_1_open",
        "fri_1_open",
        "sat_1_open",
      ],
      p = [
        "sun_1_close",
        "mon_1_close",
        "tue_1_close",
        "wed_1_close",
        "thu_1_close",
        "fri_1_close",
        "sat_1_close",
      ],
      _ = [
        "sun_2_close",
        "mon_2_close",
        "tue_2_close",
        "wed_2_close",
        "thu_2_close",
        "fri_2_close",
        "sat_2_close",
      ],
      f = 8 * o("DayPartingUtils").MINUTES_IN_HOUR,
      g = 21 * o("DayPartingUtils").MINUTES_IN_HOUR,
      h = 22 * o("DayPartingUtils").MINUTES_IN_HOUR,
      y = 4,
      C = [
        ((e = {}),
        (e[(d = o("AdsApiScheduleObjectFields")).START_MINUTE] = f),
        (e[d.END_MINUTE] = h),
        (e[d.DAYS] = [0, 6]),
        (e[d.TIMEZONE_TYPE] = "ADVERTISER"),
        e),
        ((u = {}),
        (u[d.START_MINUTE] = f),
        (u[d.END_MINUTE] = g),
        (u[d.DAYS] = [1, 2, 3, 4, 5]),
        (u[d.TIMEZONE_TYPE] = "ADVERTISER"),
        u),
      ],
      b = [
        ((c = {}),
        (c[d.START_MINUTE] = f),
        (c[d.END_MINUTE] = g),
        (c[d.DAYS] = [0, 1, 2, 3, 4, 5, 6]),
        (c[d.TIMEZONE_TYPE] = "ADVERTISER"),
        c),
      ],
      v = s._(/*BTDS*/ "{daypart label} is on by default", [
        s._param(
          "daypart label",
          o("AdsOptimizationStrings").getDayPartingLabel(),
        ),
      ]),
      S = s._(
        /*BTDS*/ "People will only see your ads during these suggested business hours.",
      );
    function R() {
      var e = r("gkx")("17449"),
        t = r("qex")._("4951");
      return e && t === !0;
    }
    function L() {
      var e = r("qex")._("3965");
      return e === !0;
    }
    function E() {
      return R()
        ? "test:ctx_business_hour_dayparting.enable_fallback_hours"
        : o(
              "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
            ).enableCTXAMBusinessHourDaypartingPipelineEligibleDefaulting(!1)
          ? "test:ctx_business_hour_dayparting_defaulting.pipeline_eligible"
          : o(
                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
              ).enableCTXAMBusinessHourDaypartingVerticalDefaulting(!1)
            ? "test:ctx_business_hour_dayparting_defaulting.enabled"
            : L()
              ? "test:ctx_business_hour_dayparting.enable_organic_hours"
              : "null";
    }
    function k(e) {
      var t;
      return (
        e === void 0 && (e = !0),
        e ? !1 : (t = r("qex")._("4951")) != null ? t : !1
      );
    }
    function I(e, t, n, a, l, s, u, c) {
      if (
        o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(t, !n, a, l, s, u)
      ) {
        var d = T(s, !0);
        d != null &&
          (c != null &&
            c.length > 0 &&
            r("AdsUEditorCampaignGroupToggleDayPartingAction").dispatch(
              {
                campaignGroupIDs: Array.from(c),
                campaignIDs: e,
                hostID: r("AdsUEditorHostIDs").EDITING,
                useDayParting: !0,
              },
              {
                line: "209",
                module: "AdsUEditorCTXBusinessHourDaypartingUtils.js",
                moduleID: i.id,
              },
            ),
          r("AdsUEditorCampaignDeliveryChangeCampaignScheduleAction").dispatch(
            {
              campaignIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              adsetSchedule: d,
              pacingType: ["day_parting"],
            },
            {
              line: "216",
              module: "AdsUEditorCTXBusinessHourDaypartingUtils.js",
              moduleID: i.id,
            },
          ));
      }
    }
    function T(e, t) {
      var n = A(e),
        r = o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).enableCTXAMBusinessHourDaypartingPipelineEligibleDefaulting(t);
      if (n == null) return r ? b : null;
      var a = o(
        "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
      ).enableCTXAMBusinessHourDaypartingVerticalDefaulting(t);
      return r || a ? n : null;
    }
    function D(e, t, n) {
      var a,
        i = new Map(
          e.map(function (e) {
            return [e.campaign.id, e];
          }),
        ),
        l = t.flatMap(function (e) {
          var t = i.get(e);
          return t == null ? [] : [t];
        });
      if (l.length === 0 || l.length !== t.length) return null;
      var s = l[0].campaign,
        u = (a = s.promoted_object) == null ? void 0 : a.page_id,
        c = s.pacing_type;
      if (
        l.some(function (e) {
          var t,
            n,
            a = e.campaign,
            i = e.campaignGroup,
            l = r("adsCampaignGetBudgetMode")(
              a.daily_budget,
              a.lifetime_budget,
            ),
            s = i.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
          return (
            l == null ||
            (a.adset_schedule != null && a.adset_schedule.size > 0) ||
            !r("immutable").is(a.pacing_type, c) ||
            ((t = a.promoted_object) == null ? void 0 : t.page_id) !== u ||
            !o(
              "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
            ).eligibleForCTXAMBusinessHourDaypartingForL2(
              i.objective,
              !s && o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(i),
              l,
              o("AdsAPICampaignRecordUtils").getDestinationType(a),
              (n = a.promoted_object) == null ? void 0 : n.page_id,
              a.optimization_goal,
            )
          );
        })
      )
        return null;
      var d = T(u, n);
      return d == null
        ? null
        : {
            adsetSchedule: d,
            campaignIDs: Array.from(t),
            campaignGroupIDs: Array.from(
              new Set(
                l.flatMap(function (e) {
                  var t = e.campaignGroup;
                  return t.budget_strategy === "CAMPAIGN_FLEX_BUDGET"
                    ? [t.id]
                    : [];
                }),
              ),
            ),
          };
    }
    function x(e, t, n, a, l, s, u) {
      o(
        "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
      ).eligibleForCTXAMBusinessHourDaypartingForL2(t, !n, a, l, s, u) &&
        k(!0) &&
        r("AdsUEditorCampaignDeliveryChangeCampaignScheduleAction").dispatch(
          {
            campaignIDs: e,
            hostID: r("AdsUEditorHostIDs").EDITING,
            adsetSchedule: C,
            pacingType: ["day_parting"],
          },
          {
            line: "347",
            module: "AdsUEditorCTXBusinessHourDaypartingUtils.js",
            moduleID: i.id,
          },
        );
    }
    function $(e, t, n, a, l, s, u, c, d) {
      if (
        o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(t, !n, a, l, s, d)
      ) {
        var m = u != null && u.length > 0 ? u : A(s);
        m != null &&
          m.length > 0 &&
          o(
            "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
          ).enableCTXAMBusinessHourDaypartingOrganicHours(!0) &&
          (c != null &&
            r("AdsUEditorCampaignGroupToggleDayPartingAction").dispatch(
              {
                campaignGroupIDs: c,
                campaignIDs: e,
                hostID: r("AdsUEditorHostIDs").EDITING,
                useDayParting: !0,
              },
              {
                line: "391",
                module: "AdsUEditorCTXBusinessHourDaypartingUtils.js",
                moduleID: i.id,
              },
            ),
          r("AdsUEditorCampaignDeliveryChangeCampaignScheduleAction").dispatch(
            {
              campaignIDs: e,
              hostID: r("AdsUEditorHostIDs").EDITING,
              adsetSchedule: m,
              pacingType: ["day_parting"],
            },
            {
              line: "398",
              module: "AdsUEditorCTXBusinessHourDaypartingUtils.js",
              moduleID: i.id,
            },
          ));
      }
    }
    function P(e, t, n, r, a, i, l, s) {
      if (
        !o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(e, !t, n, r, a, s)
      )
        return !1;
      var u = l != null && l.length > 0 ? l : A(a);
      return u == null || u.length === 0 || i == null ? !1 : j(u, i);
    }
    function N(e, t) {
      var n = m[e],
        r = p[e],
        o = _[e];
      return W(n, r, o, t);
    }
    function M(e) {
      var t;
      if (e == null) return null;
      var n = r("AdsPageStore").get(e);
      return (t = n.hours) != null ? t : null;
    }
    function w(e) {
      for (
        var t = o("DayPartingUtils").createArray(7, function () {
            return [];
          }),
          n = 0;
        n < 7;
        n++
      ) {
        var r = N(n, e);
        r != null && t[n].push(r);
      }
      return t;
    }
    function A(e) {
      var t = M(e);
      if (t == null) return null;
      var n = w(t),
        r = n.filter(function (e) {
          return e.length > 0;
        }).length;
      return r < y ? null : o("DayPartingUtils").mergeDays(n, "ADVERTISER");
    }
    function F(e) {
      if (e == null) return null;
      var t = e.split(":").map(Number),
        n = t[0],
        r = t[1];
      return n * 60 + r;
    }
    function O(e, t) {
      return t != null ? t : e;
    }
    function B(e, t) {
      return Math.abs(e - t) >= 1;
    }
    function W(e, t, n, o) {
      var a = F(o[e]),
        i = F(o[t]),
        l = F(o[n]),
        s = O(i, l);
      if (a == null || s == null) return null;
      var u = q(a, s),
        c = U(a),
        d = U(u, !0);
      return B(c, d) ? new (r("AdsDayPartingInterval"))(c, d) : null;
    }
    function q(e, t) {
      return t <= e
        ? o("DayPartingUtils").HOURS_IN_DAY *
            o("DayPartingUtils").MINUTES_IN_HOUR
        : t;
    }
    function U(e, t) {
      return t === !0 && e === 0 ? 24 : Math.ceil(e / 60);
    }
    function V(e, t, n, r, a, i, l) {
      if (
        !o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(e, !t, n, r, a, l)
      )
        return !1;
      var s = A(a);
      return s == null || i == null ? !1 : j(s, i);
    }
    function H(e, t, n, r, a, i, l) {
      return (
        o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(e, !t, n, r, a, l) &&
        i != null &&
        j(C, i)
      );
    }
    function G(e, t, n, r, a, i, l) {
      return (
        o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).eligibleForCTXAMBusinessHourDaypartingForL2(e, !t, n, r, a, l) &&
        i != null &&
        j(b, i)
      );
    }
    function z(e, t) {
      var n, r;
      return (
        ((n = e.days) == null ? void 0 : n.toLocaleString()) ===
          ((r = t.days) == null ? void 0 : r.toLocaleString()) &&
        e.end_minute === t.end_minute &&
        e.start_minute === t.start_minute &&
        e.timezone_type === t.timezone_type
      );
    }
    function j(e, t) {
      return e.length !== t.length
        ? !1
        : e.every(function (e, n) {
            return z(e, t[n]);
          });
    }
    ((l.CTX_DAILY_PRESET_AD_SCHEDULE = b),
      (l.AD_SCHEDULING_CTX_BUSINESS_HOUR_DAYPARTING_TITLE = v),
      (l.AD_SCHEDULING_CTX_BUSINESS_HOUR_DAYPARTING_FALLBACK_HOURS_NOTICE = S),
      (l.isInCTXBusinessHourDaypartingQEForAdoptionLogging = E),
      (l.enableCTXAMBusinessHourDaypartingFallbackHours = k),
      (l.setCTXBusinessHourAdScheduleForL2SpecifiedHours = I),
      (l.getCTXBusinessHourCreationDefault = D),
      (l.setCTXBusinessHourAdScheduleForL2FallbackHours = x),
      (l.setCTXBusinessHourAdScheduleForL2OrganicHours = $),
      (l.isDefaultedToCTXOrganicHours = P),
      (l.getCTXBusinessHourAdSchedule = A),
      (l.getDayPartingInterval = W),
      (l.isDefaultedToCTXBusinessHours = V),
      (l.isDefaultedToCTXFallbackHours = H),
      (l.isDefaultedToCTXDailyPresetSchedule = G),
      (l.compareDayPartArrays = j));
  },
  226,
);
