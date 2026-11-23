__d(
  "WAFlowsCalendarPickerUtils",
  ["WAFlowsDatePickerUtils", "WAFlowsLocalDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAFlowsLocalDate").today(),
      s = 100,
      u = 5,
      c = { start: "start-date", end: "end-date" },
      d = "#0000004d",
      m = function (t) {
        return t.toISOString();
      },
      p = function (t) {
        return t.year + "-" + t.month;
      },
      _ = function (t, n, r) {
        if (typeof t == "string" && t.length) {
          var e = o("WAFlowsDatePickerUtils").getLocalDate(t);
          if (e) {
            var a = new Date(e.year, e.month - 1, e.day);
            return o("WAFlowsDatePickerUtils").formatDisplayDate(a, n, r);
          } else return "";
        } else return "";
      },
      f = function (t, n, r, o, a, i, l) {
        return (
          r === void 0 && (r = "start"),
          r === "start"
            ? E(n, o, l, o)
            : k(
                t != null && t.length ? t : o,
                a,
                i,
                t != null && t.length ? t : o,
              )
        );
      },
      g = function (t, n, r, o, a, i, l) {
        return (
          r === void 0 && (r = "start"),
          r === "start"
            ? E(
                n != null && n.length ? n : a,
                o,
                i,
                n != null && n.length ? n : a,
              )
            : k(t, a, l, a)
        );
      },
      h = function () {
        return s;
      },
      y = function () {
        return u;
      },
      C = function () {
        return e.year - h() + "-01-01";
      },
      b = function () {
        return e.year + y() + "-12-31";
      },
      v = function (t, n, r, o, a) {
        return a ? (o === "end" ? S(n, t) : S(t, r)) : t;
      },
      S = function (t, n) {
        var e;
        return t || n
          ? ((e = {}),
            (e[c.start] = t != null ? t : ""),
            (e[c.end] = n != null ? n : ""),
            e)
          : null;
      },
      R = function () {
        return c;
      },
      L = function () {
        return d;
      },
      E = function (t, n, r, a) {
        if (t != null && r != null) {
          var e,
            i =
              (e = o("WAFlowsDatePickerUtils").getLocalDate(t)) == null
                ? void 0
                : e.subtractDays(r),
            l = o("WAFlowsDatePickerUtils").getLocalDate(n);
          if (i && l) return i != null && i.isAfter(l) ? m(i) : n;
          if (i) return m(i);
          if (l) return n;
        }
        return a;
      },
      k = function (t, n, r, a) {
        if (t != null && r != null) {
          var e,
            i =
              (e = o("WAFlowsDatePickerUtils").getLocalDate(t)) == null
                ? void 0
                : e.addDays(r),
            l = o("WAFlowsDatePickerUtils").getLocalDate(n);
          if (i && l) return i != null && i.isBefore(l) ? m(i) : n;
          if (i) return m(i);
          if (l) return n;
        }
        return a;
      },
      I = function () {
        return e.day;
      },
      T = function (n) {
        return n.month === e.month && n.year === e.year;
      },
      D = function (t, n) {
        if (t != null && n != null) {
          var e = o("WAFlowsDatePickerUtils").getLocalDate(n);
          return (
            t.year === (e == null ? void 0 : e.year) &&
            t.month === (e == null ? void 0 : e.month)
          );
        }
        return !1;
      },
      x = function (t, n) {
        return (
          t != null &&
          n != null &&
          (t == null ? void 0 : t.month) === (n == null ? void 0 : n.month) &&
          (t == null ? void 0 : t.year) === (n == null ? void 0 : n.year)
        );
      };
    ((l.getISODate = m),
      (l.getISODateWithoutDay = p),
      (l.getDisplayDate = _),
      (l.getDerivedMinDate = f),
      (l.getDerivedMaxDate = g),
      (l.getDefaultMinYearOffset = h),
      (l.getDefaultMaxYearOffset = y),
      (l.getDefaultMinDate = C),
      (l.getDefaultMaxDate = b),
      (l.getFormattedDate = v),
      (l.getRangeKeys = R),
      (l.getDialogOverlayColor = L),
      (l.getTodayDayNumber = I),
      (l.isDateCurrentMonthAndYear = T),
      (l.isLimitDateReached = D),
      (l.isSelectedMonthAndYear = x));
  },
  98,
);
