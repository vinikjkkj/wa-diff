__d(
  "WAFlowsIsDateUnavailable",
  ["WAFlowsDatePickerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.date,
          n = t.endDate,
          r = t.includeDays,
          o = t.maxDate,
          a = t.maxDays,
          i = t.minDate,
          l = t.minDays,
          f = t.source,
          g = t.unavailableDates,
          h = f === "end" ? n : e;
        return (
          s(h, g) ||
          d(h, r) ||
          u(h, i) ||
          c(h, o) ||
          m(e, n, l) ||
          _(e, n, a) ||
          p(e, n)
        );
      },
      s = function (t, n) {
        return (t != null && (n == null ? void 0 : n.includes(t))) || !1;
      },
      u = function (t, n) {
        var e = o("WAFlowsDatePickerUtils").getLocalDate(t),
          r = o("WAFlowsDatePickerUtils").getLocalDate(n);
        return (r != null && (e == null ? void 0 : e.isBefore(r))) || !1;
      },
      c = function (t, n) {
        var e = o("WAFlowsDatePickerUtils").getLocalDate(t),
          r = o("WAFlowsDatePickerUtils").getLocalDate(n);
        return (r != null && (e == null ? void 0 : e.isAfter(r))) || !1;
      },
      d = function (t, n) {
        var e = new Map([
            [0, "Sun"],
            [1, "Mon"],
            [2, "Tue"],
            [3, "Wed"],
            [4, "Thu"],
            [5, "Fri"],
            [6, "Sat"],
          ]),
          r = o("WAFlowsDatePickerUtils").getLocalDate(t),
          a = r != null ? e.get(r.getDayOfWeek()) : null;
        return (r && n && !(a != null && n.includes(a))) || !1;
      },
      m = function (t, n, r) {
        var e = o("WAFlowsDatePickerUtils").getLocalDate(t),
          a = o("WAFlowsDatePickerUtils").getLocalDate(n);
        return (
          (r != null && e != null && a != null && e.daysBetween(a) < r) || !1
        );
      },
      p = function (t, n) {
        var e = o("WAFlowsDatePickerUtils").getLocalDate(t),
          r = o("WAFlowsDatePickerUtils").getLocalDate(n);
        return (e && (r == null ? void 0 : r.isBefore(e))) || !1;
      },
      _ = function (t, n, r) {
        var e = o("WAFlowsDatePickerUtils").getLocalDate(t),
          a = o("WAFlowsDatePickerUtils").getLocalDate(n);
        return (
          (r != null && e != null && a != null && e.daysBetween(a) > r) || !1
        );
      };
    l.isDateUnavailable = e;
  },
  98,
);
