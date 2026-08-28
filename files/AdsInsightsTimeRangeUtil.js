__d(
  "AdsInsightsTimeRangeUtil",
  [
    "fbt",
    "invariant",
    "AdsInsightsTimeRange",
    "AdsPEStatsUtils",
    "BUIDateRangeCompareUtils",
    "LocalDate",
    "LocalDateInterval",
    "expectationViolation",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e, t, n) {
      if (e === "lifetime") return (n || u(0, 2760), n());
      var o = r("AdsInsightsTimeRange").getAllPresetDefinitions(),
        a = Object.keys(o).map(function (e) {
          return o[e];
        }),
        i = a.find(function (t) {
          return t.value === e;
        });
      return (i || u(0, 2761, e), i.calculateInterval(t));
    }
    function c(t, n, o) {
      var a = t.getValidDatePresetOrNull();
      return a != null ? e(a, n, o) : r("nullthrows")(t.interval);
    }
    function d(e) {
      var t = e.getValidDatePresetOrNull();
      if (t != null) return { date_preset: t };
      var n = e.interval;
      return (n || u(0, 18098), { time_range: m(n) });
    }
    function m(e) {
      return {
        since: e.start.toString(),
        until: e.end.subtractDays(1).toString(),
      };
    }
    function p(e) {
      return e.length === 0
        ? Object.freeze({})
        : e.length === 1
          ? { time_range: m(e[0]) }
          : { time_ranges: e.map(m) };
    }
    function _(e, t) {
      var n = t.getValidDatePresetOrNull();
      return n != null ? babelHelpers.extends({}, e, { date_preset: n }) : e;
    }
    function f(e, t) {
      return {
        since: 1e3 * e.start.toInstant(t),
        until: 1e3 * e.end.subtractDays(1).toInstant(t),
      };
    }
    function g(e, t) {
      var n = c(e, t, function () {
        return u(!1, "Lifetime cannot be be current or comparison time range");
      });
      return r("LocalDateInterval").create(n.start, n.end.subtractDays(1));
    }
    function h(e) {
      if (e === "lifetime") return s._(/*BTDS*/ "Lifetime");
      var t = r("AdsInsightsTimeRange").getAllPresetDefinitions(),
        n = Object.keys(t).map(function (e) {
          return t[e];
        }),
        o = n.find(function (t) {
          return t.value === e;
        });
      return (o || u(0, 2762, e), o.text);
    }
    function y(e, t) {
      var n = r("AdsInsightsTimeRange").interval(c(e, r("LocalDate").today(t)));
      return d(n);
    }
    function C(e, t, n) {
      if (!t) return {};
      n == null &&
        r("expectationViolation")(
          "timezoneID is requried for benchmark time range API with date preset",
        );
      var o = r("LocalDate").today(n == null ? 1 : n),
        a = function (t) {
          var e = c(t, o);
          return m(e);
        };
      return {
        comparison_time_ranges: { current_range: a(e), comparison_range: a(t) },
      };
    }
    function b(e, t, n) {
      if (e.preset === "lifetime" || e.preset === "maximum")
        return (
          r("expectationViolation")(
            "Not support doing date comparison for LIFETIME or Maximum",
          ),
          null
        );
      var a = r("LocalDate").today(t),
        i = c(e, a),
        l = o("BUIDateRangeCompareUtils").getCompareInterval(i, n);
      return l === void 0 ? null : r("AdsInsightsTimeRange").interval(l);
    }
    function v(e, t) {
      var n = r("LocalDate").today(e),
        o = n.addDays(1),
        a = c(t, n, function () {
          return r("LocalDateInterval").create(
            r("LocalDate").create(2014, 1, 1),
            o,
          );
        }),
        i = !1;
      return (a.start.isAfter(n) && (i = !0), i);
    }
    function S(t, n, a) {
      var i = function (t) {
          var e = r("LocalDate").today(a);
          return e.isBefore(t.end)
            ? r("LocalDateInterval").create(t.start, e.addDays(1))
            : t;
        },
        l =
          n.preset === "lifetime"
            ? o("AdsPEStatsUtils").getLifetimeInterval(a, t).getValue()
            : n.preset != null
              ? i(e(n.preset, r("LocalDate").today(a)))
              : null,
        s = n.interval != null ? i(n.interval) : l;
      return (
        s != null || u(0, 79263),
        c(n, r("LocalDate").today(a), function () {
          return s;
        }).toTimeInterval(a)
      );
    }
    ((l.presetToDateInterval = e),
      (l.toDateInterval = c),
      (l.toAPIParams = d),
      (l.intervalToAPIParams = m),
      (l.intervalsToAPIParams = p),
      (l.getAPIParamsWithDatePreset = _),
      (l.toDatePicker = f),
      (l.toComparisonColumnHeaderInterval = g),
      (l.getPresetLabel = h),
      (l.toAPIParamsForComparisonSort = y),
      (l.toBenchmarkTimeRangesAPIParams = C),
      (l.toCompareTimeRange = b),
      (l.isTimeRangeInFuture = v),
      (l.parseTimeRange = S));
  },
  226,
);
