__d(
  "AdsPEStatsUtils",
  [
    "invariant",
    "AdsReportDatePresetType",
    "DateTime",
    "FBLogger",
    "LoadObject",
    "LocalDateInterval",
    "Timezone",
    "isTruthy",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 37,
      u = r("objectValues")(r("AdsReportDatePresetType")).filter(function (e) {
        return e.length > 0;
      });
    function c(t, n, a) {
      var i,
        l,
        u = r("DateTime").now(n).addMonths(-e),
        c = r("DateTime").fromISOString(a, n),
        m = f(t.value);
      e: {
        if (m === "lifetime") return d(n, a);
        if (m === "maximum") {
          ((i = u.isAfter(c) ? u : c),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "today") {
          ((i = r("DateTime").now(n).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "yesterday") {
          ((i = r("DateTime").now(n).addDays(-1).startOfDay()),
            (l = r("DateTime").now(n).startOfDay()));
          break e;
        }
        if (m === "last_2d" || m === "last_2_days") {
          ((i = r("DateTime").now(n).addDays(-1).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_7_days") {
          ((i = r("DateTime").now(n).addDays(-6).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_14_days") {
          ((i = r("DateTime").now(n).addDays(-13).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_28_days") {
          ((i = r("DateTime").now(n).addDays(-27).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_30_days") {
          ((i = r("DateTime").now(n).addDays(-29).startOfDay()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_7d") {
          ((i = r("DateTime").now(n).addDays(-7).startOfDay()),
            (l = r("DateTime").now(n).startOfDay()));
          break e;
        }
        if (m === "last_14d") {
          ((i = r("DateTime").now(n).addDays(-14).startOfDay()),
            (l = r("DateTime").now(n).startOfDay()));
          break e;
        }
        if (m === "last_28d") {
          ((i = r("DateTime").now(n).addDays(-28).startOfDay()),
            (l = r("DateTime").now(n).startOfDay()));
          break e;
        }
        if (m === "last_30d") {
          ((i = r("DateTime").now(n).addDays(-30).startOfDay()),
            (l = r("DateTime").now(n).startOfDay()));
          break e;
        }
        if (m === "this_week" || m === "this_week_sun_today") {
          ((i = r("DateTime").now(n).startOfWeek()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m === "last_week" || m === "last_week_sun_sat") {
          ((i = r("DateTime").now(n).addWeeks(-1).startOfWeek()),
            (l = r("DateTime").now(n).startOfWeek()));
          break e;
        }
        if (m === "last_month") {
          ((i = r("DateTime").now(n).addMonths(-1).startOfMonth()),
            (l = r("DateTime").now(n).startOfMonth()));
          break e;
        }
        if (m === "this_month") {
          ((i = r("DateTime").now(n).startOfMonth()),
            (l = r("DateTime").now(n).addDays(1).startOfDay()));
          break e;
        }
        if (m == null) {
          ((t.start != null && t.start !== 0) || s(0, 3772),
            (i = r("DateTime")
              .fromLegacyArgs(t.start, o("Timezone").UTC)
              .getEquivalentInTimezone(n)),
            (t.end != null && t.end !== 0) || s(0, 3773),
            (l = r("DateTime")
              .fromLegacyArgs(t.end, o("Timezone").UTC)
              .getEquivalentInTimezone(n)));
          break e;
        }
        {
          s(0, 37287, m);
          break e;
        }
      }
      return { start: i.toString(), end: l.toString() };
    }
    function d(e, t) {
      return (
        e === void 0 && (e = o("Timezone").UTC),
        {
          start: t,
          end: r("DateTime").now(e).addDays(1).startOfDay().toString(),
        }
      );
    }
    function m(e, t) {
      e === void 0 && (e = o("Timezone").UTC);
      var n = d(e, t);
      return r("LoadObject").withValue(
        r("LocalDateInterval").fromStrings(n.start, n.end),
        { creatorModuleID: i.id },
      );
    }
    function p(e, t, n) {
      var o = _(e, t, n);
      return o == null
        ? (r("FBLogger")("ads").mustfix("Account not loaded"), null)
        : o;
    }
    function _(e, t, n) {
      return t == null ? null : c(e, t, n);
    }
    function f(e) {
      if (!r("isTruthy")(e)) return e;
      var t = null;
      return (
        u.forEach(function (n) {
          e.startsWith(n) && (t == null || n.length > t.length) && (t = n);
        }),
        t != null ? t : e
      );
    }
    ((l.eventToRange = c),
      (l.getLifetimeRange = d),
      (l.getLifetimeInterval = m),
      (l.updateStatRange = p),
      (l.updateStatRangeSoft = _));
  },
  98,
);
