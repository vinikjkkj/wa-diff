__d(
  "CTXDaypartingOnAMUtils",
  [
    "fbt",
    "$InternalEnum",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsApiScheduleObjectFields",
    "AdsAutomatedAdSpecMutationReason",
    "AdsAutomatedAdSpecMutationUseCaseName",
    "AdsCallAdsDaypartingPresetConstants",
    "AdsInterfacesLogger",
    "AdsUEditorCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
    "AdsUEditorCampaignGroupToggleDayPartingAction",
    "AdsUEditorHostIDs",
    "DateConsts",
    "DateTime",
    "GeoGuidanceCard.react",
    "GeoGuidanceCardContent.react",
    "GeoGuidanceCardHeader.react",
    "GeoLink.react",
    "URI",
    "adsAutomatedAdSpecMutation",
    "justknobx",
    "qex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = n("$InternalEnum")({
        BUSINESS_HOURS: "business_hours",
        SUGGESTED_HOURS: "suggested_hours",
        MON_FRI: "mon_fri",
        MON_SAT: "mon_sat",
        DAILY: "daily",
      }),
      g = 480,
      h = 1260,
      y =
        ((c = {}),
        (c[f.MON_FRI] = {
          label: s._(/*BTDS*/ "Monday-Friday {startTime}-{endTime}", [
            s._param("startTime", b(g)),
            s._param("endTime", b(h)),
          ]),
          schedule: [
            ((e = {}),
            (e[o("AdsApiScheduleObjectFields").START_MINUTE] = g),
            (e[o("AdsApiScheduleObjectFields").END_MINUTE] = h),
            (e[o("AdsApiScheduleObjectFields").DAYS] = [1, 2, 3, 4, 5]),
            (e[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = "ADVERTISER"),
            e),
          ],
        }),
        (c[f.MON_SAT] = {
          label: s._(/*BTDS*/ "Monday-Saturday {startTime}-{endTime}", [
            s._param("startTime", b(g)),
            s._param("endTime", b(h)),
          ]),
          schedule: [
            ((u = {}),
            (u[o("AdsApiScheduleObjectFields").START_MINUTE] = g),
            (u[o("AdsApiScheduleObjectFields").END_MINUTE] = h),
            (u[o("AdsApiScheduleObjectFields").DAYS] = [1, 2, 3, 4, 5, 6]),
            (u[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = "ADVERTISER"),
            u),
          ],
        }),
        (c[f.DAILY] = {
          label: s._(/*BTDS*/ "Daily {startTime}-{endTime}", [
            s._param("startTime", b(g)),
            s._param("endTime", b(h)),
          ]),
          schedule: o("AdsUEditorCTXBusinessHourDaypartingUtils")
            .CTX_DAILY_PRESET_AD_SCHEDULE,
        }),
        c),
      C = [
        s._(/*BTDS*/ "Sunday"),
        s._(/*BTDS*/ "Monday"),
        s._(/*BTDS*/ "Tuesday"),
        s._(/*BTDS*/ "Wednesday"),
        s._(/*BTDS*/ "Thursday"),
        s._(/*BTDS*/ "Friday"),
        s._(/*BTDS*/ "Saturday"),
      ];
    function b(e) {
      var t = Math.floor(e / 60),
        n = t === 0 ? 12 : t > 12 ? t - 12 : t;
      return t >= 12
        ? s._(/*BTDS*/ "{hour} PM", [s._param("hour", n)])
        : s._(/*BTDS*/ "{hour} AM", [s._param("hour", n)]);
    }
    function v(e) {
      return e === 0 ? 7 : e;
    }
    function S(e) {
      return e.sort(function (e, t) {
        return v(e) - v(t);
      });
    }
    function R(e) {
      if (e.length === 7) return s._(/*BTDS*/ "Daily");
      var t = e.map(v);
      return t.length > 1 && t[t.length - 1] - t[0] === t.length - 1
        ? s._(/*BTDS*/ "{startDay}-{endDay}", [
            s._param("startDay", C[e[0]]),
            s._param("endDay", C[e[e.length - 1]]),
          ])
        : e
            .map(function (e) {
              return C[e];
            })
            .join(", ");
    }
    function L(e) {
      if (e.length === 0) return "";
      var t = new Map();
      for (var n of e) {
        var r,
          a,
          i = Number(n[o("AdsApiScheduleObjectFields").START_MINUTE]),
          l = Number(n[o("AdsApiScheduleObjectFields").END_MINUTE]),
          u = i + "-" + l,
          c = (r = n[o("AdsApiScheduleObjectFields").DAYS]) != null ? r : [],
          d = (a = t.get(u)) != null ? a : [];
        (d.push.apply(d, c), t.set(u, d));
      }
      var m = [];
      return (
        t.forEach(function (e, t) {
          var n = S(e),
            r = t.split("-").map(Number),
            o = r[0],
            a = r[1];
          m.push(
            s._(/*BTDS*/ "{dayRange} from {startTime}-{endTime}", [
              s._param("dayRange", R(n)),
              s._param("startTime", b(o)),
              s._param("endTime", b(a)),
            ]),
          );
        }),
        m.join(", ")
      );
    }
    function E(e) {
      return e.length === 0
        ? s._(/*BTDS*/ "Suggested hours")
        : s._(/*BTDS*/ "Suggested hours: {scheduleRange}", [
            s._param("scheduleRange", L(e)),
          ]);
    }
    function k(e) {
      return e != null && e.length > 0 ? e : null;
    }
    var I = babelHelpers.extends(
      {},
      o("AdsCallAdsDaypartingPresetConstants").CTC_PRESET_SCHEDULES,
      y,
    );
    function T(e, t) {
      var n = [],
        r = P(f.BUSINESS_HOURS, e);
      r != null &&
        n.push({
          value: f.BUSINESS_HOURS,
          label: s._(/*BTDS*/ "Your business hours"),
        });
      var o = k(t);
      return (
        o != null && n.push({ value: f.SUGGESTED_HOURS, label: E(o) }),
        n.push(
          { value: f.MON_FRI, label: y[f.MON_FRI].label },
          { value: f.MON_SAT, label: y[f.MON_SAT].label },
          { value: f.DAILY, label: y[f.DAILY].label },
        ),
        n
      );
    }
    function D(e, t) {
      return o(
        "AdsUEditorCTXBusinessHourDaypartingUtils",
      ).getCTXBusinessHourAdSchedule(e) != null
        ? f.BUSINESS_HOURS
        : k(t) != null
          ? f.SUGGESTED_HOURS
          : f.MON_SAT;
    }
    function x(e, t) {
      var n = [];
      if (e === f.BUSINESS_HOURS)
        n.push({
          value: f.BUSINESS_HOURS,
          label: s._(/*BTDS*/ "Your business hours"),
        });
      else if (e === f.SUGGESTED_HOURS) {
        var r = k(t);
        r != null && n.push({ value: f.SUGGESTED_HOURS, label: E(r) });
      }
      return (
        n.push(
          { value: f.MON_FRI, label: y[f.MON_FRI].label },
          { value: f.MON_SAT, label: y[f.MON_SAT].label },
          { value: f.DAILY, label: y[f.DAILY].label },
        ),
        n
      );
    }
    function $(e, t, n, r) {
      t === void 0 && (t = "ADVERTISER");
      var a;
      if (e === f.BUSINESS_HOURS) {
        var i;
        a =
          (i = o(
            "AdsUEditorCTXBusinessHourDaypartingUtils",
          ).getCTXBusinessHourAdSchedule(n)) != null
            ? i
            : null;
      } else if (e === f.SUGGESTED_HOURS) a = k(r);
      else {
        var l, s;
        a = (l = (s = y[e]) == null ? void 0 : s.schedule) != null ? l : null;
      }
      return a == null
        ? null
        : a.map(function (e) {
            var n;
            return babelHelpers.extends(
              {},
              e,
              ((n = {}),
              (n[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = t),
              n),
            );
          });
    }
    function P(e, t, n) {
      var r, a;
      if (e === f.BUSINESS_HOURS) {
        var i;
        return (i = o(
          "AdsUEditorCTXBusinessHourDaypartingUtils",
        ).getCTXBusinessHourAdSchedule(t)) != null
          ? i
          : null;
      }
      return e === f.SUGGESTED_HOURS
        ? k(n)
        : (r = (a = y[e]) == null ? void 0 : a.schedule) != null
          ? r
          : null;
    }
    function N(e, t, n, r) {
      var a = P(e, n, r);
      return a == null
        ? null
        : a.map(function (e) {
            var n;
            return babelHelpers.extends(
              {},
              e,
              ((n = {}),
              (n[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = t),
              n),
            );
          });
    }
    function M(e, t) {
      if ((e === void 0 && (e = !1), t === void 0 && (t = "unknown"), e)) {
        var n,
          o = r("qex")._("3272") === !0;
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_dayparting_on_am_exposure_event",
            data:
              ((n = {}),
              (n.new_value = t),
              (n.old_value = o ? "test" : "control"),
              (n.is_active = e),
              n),
          }),
          o
        );
      }
      return r("qex")._("3431") === !0;
    }
    function w(e, t) {
      var n =
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS;
      return n && t === r("AdsAPIOptimizationGoals").CONVERSATIONS;
    }
    function A(e, t) {
      var n =
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").LINK_CLICKS;
      return (
        M(!1) &&
        n &&
        r("qex")._("5260") === !0 &&
        t === r("AdsAPIOptimizationGoals").CONVERSATIONS
      );
    }
    function F(e, t, n) {
      return e !== "daily" ? !1 : t != null && n != null ? w(t, n) : !0;
    }
    function O(e, t, n) {
      return e != null && e !== "unknown"
        ? { effectiveBudgetMode: e, isCBO: !1 }
        : t != null && Number(t) > 0
          ? { effectiveBudgetMode: "daily", isCBO: !0 }
          : n != null && Number(n) > 0
            ? { effectiveBudgetMode: "lifetime", isCBO: !0 }
            : { effectiveBudgetMode: e, isCBO: !1 };
    }
    var B = [
      ((d = {}),
      (d[o("AdsApiScheduleObjectFields").START_MINUTE] = 0),
      (d[o("AdsApiScheduleObjectFields").END_MINUTE] = 1440),
      (d[o("AdsApiScheduleObjectFields").DAYS] = [0, 1, 2, 3, 4, 5, 6]),
      (d[o("AdsApiScheduleObjectFields").TIMEZONE_TYPE] = "ADVERTISER"),
      d),
    ];
    function W(e, t, n) {
      if (e == null || e.length === 0) return null;
      var r = [];
      for (var a of e) a != null && r.push(a);
      if (r.length === 0) return null;
      var i = n != null ? n : "ADVERTISER";
      for (var l of f.members()) {
        var s = $(l, i, t);
        if (
          s != null &&
          o("AdsUEditorCTXBusinessHourDaypartingUtils").compareDayPartArrays(
            r,
            s,
          )
        )
          return l;
      }
      return null;
    }
    function q(e) {
      if (e == null || e.length !== 1) return !1;
      var t = e[0];
      if (t == null) return !1;
      var n = t,
        r = n[o("AdsApiScheduleObjectFields").START_MINUTE],
        a = n[o("AdsApiScheduleObjectFields").END_MINUTE],
        i = n[o("AdsApiScheduleObjectFields").DAYS];
      return r === 0 && a === 1440 && Array.isArray(i) && i.length === 7;
    }
    function U(e, t, n, a, l) {
      o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
        r("justknobx")._("515"),
        {
          useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
            .ADS_CAMPAIGN_DELIVERY_CHANGE_SCHEDULE_CTX_DAYPARTING_UTILS,
          campaignIDs: e,
          mutationFn: function () {
            r(
              "AdsUEditorCampaignDeliveryChangeCampaignScheduleAction",
            ).dispatch(
              {
                campaignIDs: e,
                hostID: t,
                adsetSchedule: n,
                pacingType: a,
                timezoneID: l != null ? l : null,
              },
              {
                line: "685",
                module: "CTXDaypartingOnAMUtils.js",
                moduleID: i.id,
              },
            );
          },
          reasons: new Set([
            r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
          ]),
        },
      );
    }
    function V(e, t, n, a) {
      o("adsAutomatedAdSpecMutation").maybeHandleAutomatedAdSpecMutation(
        r("justknobx")._("515"),
        {
          useCaseName: r("AdsAutomatedAdSpecMutationUseCaseName")
            .ADS_CAMPAIGN_GROUP_TOGGLE_DAY_PARTING_CTX_DAYPARTING_UTILS,
          campaignGroupIDs: e,
          campaignIDs: t,
          mutationFn: function () {
            r("AdsUEditorCampaignGroupToggleDayPartingAction").dispatch(
              {
                campaignGroupIDs: e,
                campaignIDs: t,
                hostID: n,
                useDayParting: a,
              },
              {
                line: "717",
                module: "CTXDaypartingOnAMUtils.js",
                moduleID: i.id,
              },
            );
          },
          reasons: new Set([
            r("AdsAutomatedAdSpecMutationReason").MISSING_TRIGGER,
          ]),
        },
      );
    }
    function H(e, t, n, r, o) {
      o === void 0 && (o = !1);
      var a = o ? T(n)[0].value : D(n),
        i = $(a, void 0, n);
      U(e, t, i != null ? i : [], r);
    }
    function G(e, t, n, a, i, l, s) {
      if (!F(n, t, i)) return !1;
      var u = o(
          "AdsUEditorCTXBusinessHourDaypartingUtils",
        ).getCTXBusinessHourAdSchedule(a),
        c = o(
          "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
        ).enableCTXAMBusinessHourDaypartingPipelineEligibleDefaulting(!0),
        d =
          u != null
            ? o(
                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
              ).enableCTXAMBusinessHourDaypartingVerticalDefaulting(!0)
            : !1;
      if (!c && !d) return !1;
      var m = u != null ? f.BUSINESS_HOURS : f.DAILY,
        p = $(m, void 0, a, s);
      if (p == null) return !1;
      if (
        (U([].concat(e), r("AdsUEditorHostIDs").EDITING, p, ["day_parting"]),
        l == null)
      )
        return !0;
      for (var _ of l)
        (_.siblingIDsWithoutSchedule.length > 0 &&
          U(
            [].concat(_.siblingIDsWithoutSchedule),
            r("AdsUEditorHostIDs").EDITING,
            B,
            ["day_parting"],
          ),
          V(
            [_.campaignGroupID],
            [].concat(_.campaignIDs),
            r("AdsUEditorHostIDs").EDITING,
            !0,
          ));
      return !0;
    }
    function z(e, t) {
      var n = D(e, t);
      return j(n);
    }
    function j(e) {
      return e === f.BUSINESS_HOURS
        ? "business_hours"
        : e === f.SUGGESTED_HOURS
          ? "suggested_hours"
          : "fallback";
    }
    function K(e) {
      return new (m || (m = r("URI")))(
        "/profile.php?id=" +
          String(e != null ? e : "") +
          "&sk=directory_basic_info",
      );
    }
    function Q(e, t, n) {
      var r = null;
      if (e === "business_hours") {
        var a;
        r =
          (a = o(
            "AdsUEditorCTXBusinessHourDaypartingUtils",
          ).getCTXBusinessHourAdSchedule(t)) != null
            ? a
            : null;
      } else e === "suggested_hours" && (r = k(n));
      return r != null && r.length > 0 ? L(r) : "";
    }
    function X() {
      try {
        return r("justknobx")._("4229") === !0;
      } catch (e) {
        return !1;
      }
    }
    function Y(e, t, n) {
      var a = new Set([0, 1, 2, 3, 4, 5, 6]),
        i = r("DateTime")
          .fromLegacyArgs(e * o("DateConsts").MS_PER_SEC, n)
          .startOfDay(),
        l = r("DateTime")
          .fromLegacyArgs(t * o("DateConsts").MS_PER_SEC, n)
          .startOfDay(),
        s = l.getUnixTimestampSeconds() - i.getUnixTimestampSeconds(),
        u = s / o("DateConsts").SEC_PER_DAY;
      if (u >= o("DateConsts").DAYS_PER_WEEK) return a;
      for (
        var c = l.addDays(1).startOfDay(), d = new Set(), m = i;
        m.getUnixTimestampSeconds() < c.getUnixTimestampSeconds();
      )
        (d.add(m.getDayOfWeek()), (m = m.addDays(1)));
      return d;
    }
    function J(e, t) {
      if (e == null) return null;
      var n = [];
      for (var r of e) {
        var a;
        if (r != null) {
          var i = r[o("AdsApiScheduleObjectFields").DAYS];
          if (i != null) {
            var l = i.filter(function (e) {
              return t.has(e);
            });
            l.length !== 0 &&
              n.push(
                babelHelpers.extends(
                  {},
                  r,
                  ((a = {}), (a[o("AdsApiScheduleObjectFields").DAYS] = l), a),
                ),
              );
          }
        }
      }
      return n;
    }
    function Z(e, t, n, r) {
      return t.size >= 7
        ? [].concat(e)
        : e.filter(function (e) {
            var a = P(e.value, n, r);
            return a == null
              ? !1
              : a.some(function (e) {
                  var n = e[o("AdsApiScheduleObjectFields").DAYS];
                  return (
                    n != null &&
                    n.some(function (e) {
                      return t.has(e);
                    })
                  );
                });
          });
    }
    function ee(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.organicHours,
        a = e.pageID,
        i = e.scheduleTier,
        l;
      t[0] !== a ? ((l = K(a)), (t[0] = a), (t[1] = l)) : (l = t[1]);
      var u = l,
        c;
      t[2] !== n || t[3] !== a || t[4] !== i
        ? ((c = Q(i, a, n)), (t[2] = n), (t[3] = a), (t[4] = i), (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      t[6] !== i
        ? ((m =
            i === "business_hours"
              ? s._(
                  /*BTDS*/ "People will only see your ads during your business hours",
                )
              : i === "suggested_hours"
                ? s._(
                    /*BTDS*/ "People will only see your ads during your suggested business hours",
                  )
                : s._(
                    /*BTDS*/ "People will only see your ads during these hours",
                  )),
          (t[6] = i),
          (t[7] = m))
        : (m = t[7]);
      var p = m,
        f;
      t[8] !== u || t[9] !== d || t[10] !== i
        ? ((f =
            i === "business_hours"
              ? s._(
                  /*BTDS*/ "Based on the business hours you set on {pageLink}, ads will run {scheduleDescription}.",
                  [
                    s._param(
                      "pageLink",
                      _.jsx(r("GeoLink.react"), {
                        href: u,
                        target: "_blank",
                        children: s._(/*BTDS*/ "your Page"),
                      }),
                    ),
                    s._param("scheduleDescription", d),
                  ],
                )
              : i === "suggested_hours"
                ? s._(
                    /*BTDS*/ "Based on when you typically message customers, ads will run {scheduleDescription}. Or to use your business hours, {setHoursLink} and then refresh this page.",
                    [
                      s._param("scheduleDescription", d),
                      s._param(
                        "setHoursLink",
                        _.jsx(r("GeoLink.react"), {
                          href: u,
                          target: "_blank",
                          children: s._(/*BTDS*/ "set them on Facebook"),
                        }),
                      ),
                    ],
                  )
                : s._(
                    /*BTDS*/ "To use your business hours instead, {setHoursLink} and then refresh this page.",
                    [
                      s._param(
                        "setHoursLink",
                        _.jsx(r("GeoLink.react"), {
                          href: u,
                          target: "_blank",
                          children: s._(/*BTDS*/ "set them on Facebook"),
                        }),
                      ),
                    ],
                  )),
          (t[8] = u),
          (t[9] = d),
          (t[10] = i),
          (t[11] = f))
        : (f = t[11]);
      var g = f,
        h;
      t[12] !== p
        ? ((h = _.jsx(r("GeoGuidanceCardHeader.react"), { heading: p })),
          (t[12] = p),
          (t[13] = h))
        : (h = t[13]);
      var y;
      t[14] !== g
        ? ((y = _.jsx(r("GeoGuidanceCardContent.react"), {
            children: _.jsx("span", { children: g }),
          })),
          (t[14] = g),
          (t[15] = y))
        : (y = t[15]);
      var C;
      return (
        t[16] !== h || t[17] !== y
          ? ((C = _.jsx(r("GeoGuidanceCard.react"), {
              header: h,
              status: "active-feedback",
              children: y,
            })),
            (t[16] = h),
            (t[17] = y),
            (t[18] = C))
          : (C = t[18]),
        C
      );
    }
    ((l.PresetSchedule = f),
      (l.formatScheduleRange = L),
      (l.getSuggestedHoursLabel = E),
      (l.getSuggestedHoursSchedule = k),
      (l.PRESET_SCHEDULES = I),
      (l.getCTXPresetScheduleOptions = T),
      (l.getDefaultScheduleTier = D),
      (l.getPresetScheduleOptionsForTier = x),
      (l.getCTXScheduleForPreset = $),
      (l.getScheduleForPreset = P),
      (l.getScheduleForPresetWithTimezone = N),
      (l.isInCTXDaypartingOnAMQE = M),
      (l.isEligibleForCTXDaypartingOnAM = w),
      (l.shouldShowCTXDaypartingPFR = A),
      (l.isEligibleForCampaignSchedulingDailyBudget = F),
      (l.getEffectiveBudgetMode = O),
      (l.FULL_DAY_SCHEDULE = B),
      (l.matchPresetFromSchedule = W),
      (l.isFullDaySchedule = q),
      (l.dispatchCampaignScheduleChange = U),
      (l.dispatchCampaignGroupToggleDayParting = V),
      (l.setCTXDefaultScheduleForDailyBudget = H),
      (l.applyCTXBusinessHourAdScheduleForDailyBudget = G),
      (l.getScheduleTier = z),
      (l.getScheduleTierForPreset = j),
      (l.isScheduleTrimmingEnabled = X),
      (l.getCampaignDateRangeDays = Y),
      (l.trimScheduleToCampaignDays = J),
      (l.filterPresetOptionsByCampaignDays = Z),
      (l.CTXDaypartingInfoBanner = ee));
  },
  226,
);
