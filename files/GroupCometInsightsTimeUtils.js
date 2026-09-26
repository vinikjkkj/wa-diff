__d(
  "GroupCometInsightsTimeUtils",
  ["fbt", "CometLocalDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 864e5,
      u = 7 * e,
      c = 28 * e,
      d = 60 * e,
      m = "TWENTY_EIGHT_DAYS",
      p = function (t) {
        return Math.floor(t / 1e3);
      },
      _ = function (t) {
        return t * 1e3;
      },
      f = function (t) {
        var e = new Date(t.getTime());
        return (e.setHours(0, 0, 0, 0), e);
      },
      g = function (t) {
        var e = new Date(t.getTime());
        return (e.setHours(23, 59, 59, 999), e);
      },
      h = function () {
        return g(
          r("CometLocalDate")
            .fromDate(new Date())
            .getWithDaysAdded(-1)
            .getJSDate(),
        );
      },
      y = function () {
        return g(
          r("CometLocalDate")
            .fromDate(new Date())
            .getWithDaysAdded(-2)
            .getJSDate(),
        );
      },
      C = function () {
        return g(new Date());
      },
      b = [
        s._(/*BTDS*/ "M"),
        s._(/*BTDS*/ "T"),
        s._(/*BTDS*/ "W"),
        s._(/*BTDS*/ "T"),
        s._(/*BTDS*/ "F"),
        s._(/*BTDS*/ "S"),
        s._(/*BTDS*/ "S"),
      ],
      v = Object.freeze({
        SEVEN_DAYS: { duration: u, label: s._(/*BTDS*/ "Last 7 days") },
        SIXTY_DAYS: { duration: d, label: s._(/*BTDS*/ "Last 60 days") },
        TWENTY_EIGHT_DAYS: { duration: c, label: s._(/*BTDS*/ "Last 28 days") },
      }),
      S = function (n, r) {
        return (
          r === void 0 && (r = h()),
          new Date(r.getTime() - v[n].duration + e)
        );
      },
      R = function (n, r) {
        return [p(n.getTime() - e), p(r.getTime())];
      },
      L = function (n, r, o, a) {
        if (
          (o === void 0 && (o = !1),
          a === void 0 && (a = !0),
          (!a && r.getTime() === y().getTime()) ||
            (!o && r.getTime() === h().getTime()) ||
            (o && C().getTime() === r.getTime()))
        ) {
          var t = r.getTime() - n.getTime();
          if (t === v.SEVEN_DAYS.duration - e) return "SEVEN_DAYS";
          if (t === v.TWENTY_EIGHT_DAYS.duration - e)
            return "TWENTY_EIGHT_DAYS";
          if (t === v.SIXTY_DAYS.duration - e) return "SIXTY_DAYS";
        }
        return "CUSTOM";
      },
      E = function (t, n, r) {
        var e =
            t != null ? new Date(+t) : S(r != null ? r : "TWENTY_EIGHT_DAYS"),
          o = n != null ? new Date(+n) : h(),
          a = R(e, o),
          i = a[0],
          l = a[1];
        return { endDate: o, endTime: l, startDate: e, startTime: i };
      },
      k = function (t, n) {
        return t ? C() : n ? h() : y();
      },
      I = Object.freeze({
        DAYS_OF_WEEK_TEXT: b,
        DEFAULT_TIME_RANGE: m,
        ONE_DAY: e,
        PresetTimeRanges: v,
        getBeginningOfDay: f,
        getDefaultEndTimeState: k,
        getEndOfDay: g,
        getEndOfDayBeforeYesterday: y,
        getEndOfToday: C,
        getEndOfYesterday: h,
        getInsightsQueryDefaultsFromRouteParams: E,
        getNormalizedInsightsQueryTimeRange: R,
        getPresetTimeRangeStartDate: S,
        getTimeRangeKey: L,
        toMilliSeconds: _,
        toSeconds: p,
      });
    l.default = I;
  },
  226,
);
