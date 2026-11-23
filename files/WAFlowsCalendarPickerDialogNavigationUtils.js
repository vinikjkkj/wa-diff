__d(
  "WAFlowsCalendarPickerDialogNavigationUtils",
  [
    "LocalDate",
    "Timezone",
    "WAFlowsCalendarPickerUtils",
    "WAFlowsGetFocusDateWithLocalDate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("Timezone").getEnvironmentTimezoneID() || o("Timezone").UTC,
      s = r("LocalDate").today(e),
      u = function () {
        var e = Math.max(
          o("WAFlowsCalendarPickerUtils").getDefaultMinYearOffset(),
          o("WAFlowsCalendarPickerUtils").getDefaultMaxYearOffset(),
        );
        return e * 12;
      },
      c = function (t, n) {
        var e = [];
        e = g(t, e);
        for (var r = 1; r <= u(); r++)
          ((n == null || h(-r, t, n)) &&
            (e = g(t.startOfMonth().subtractMonths(r), e)),
            (n == null || h(r, t, n)) &&
              (e = g(t.startOfMonth().addMonths(r), e)));
        return e.sort(function (e, t) {
          return e.year - t.year;
        });
      },
      d = function (t, n) {
        var e = [];
        return (
          t.forEach(function (t) {
            for (var r of t.months)
              if (y(t, r, n)) {
                e.push(t.year);
                break;
              }
          }),
          e.sort()
        );
      },
      m = function (t, n) {
        var e = [];
        return (
          n.forEach(function (n) {
            n.year === t && (e = n.months);
          }),
          e.toSorted(function (e, t) {
            return e - t;
          })
        );
      },
      p = function (t) {
        return f(t[0], function (e) {
          return e[0];
        });
      },
      _ = function (t) {
        return f(t[t.length - 1], function (e) {
          return e[e.length - 1];
        });
      },
      f = function (t, n) {
        var e = t.year,
          o = t.months.sort(),
          a = n(o),
          i = r("LocalDate").fromISOString(e + "-" + a + "-01");
        return i.toInstant(0) * 1e3;
      },
      g = function (t, n) {
        var e = t.getYear(),
          r = 0;
        return (
          n.forEach(function (n) {
            n.year === e && (n.months.push(t.getMonth()), (r = 1));
          }),
          r === 0 && n.push({ year: e, months: [t.getMonth()] }),
          n
        );
      },
      h = function (t, n, r) {
        for (
          var e = n.startOfMonth().addMonths(t), o = e.getMonth(), a = e;
          a.getMonth() === o;
        ) {
          if (
            !r ||
            r.every(function (e) {
              return e(a);
            })
          )
            return !0;
          a = a.addDays(1);
        }
        return !1;
      },
      y = function (t, n, o) {
        if (!o) return !0;
        for (
          var e = !1,
            a = r("LocalDate")
              .create(t.year, n, 1)
              .addMonths(1)
              .subtractDays(1),
            i = function () {
              var a = r("LocalDate").create(t.year, n, l);
              if (
                o.every(function (e) {
                  return e(a);
                })
              )
                return ((e = !0), 1);
            },
            l = 1;
          l <= a.day && !i();
          l++
        );
        return e;
      },
      C = function (t, n) {
        return (
          t != null &&
          n != null &&
          (t == null ? void 0 : t.month) === (n == null ? void 0 : n.month) &&
          (t == null ? void 0 : t.year) === (n == null ? void 0 : n.year)
        );
      },
      b = function (t, n) {
        if (t != null && n != null) {
          var e = o("WAFlowsGetFocusDateWithLocalDate").getDefaultLocalDate(n);
          return (
            t.year === (e == null ? void 0 : e.year) &&
            t.month === (e == null ? void 0 : e.month)
          );
        }
        return !1;
      },
      v = function (t) {
        return t.month === s.month && t.year === s.year;
      },
      S = function () {
        return s.day;
      };
    ((l.getNumOfSelectableMonths = u),
      (l.getValidMonthsAndYears = c),
      (l.getYearsList = d),
      (l.getMonthsListByYear = m),
      (l.getMinDateValueForMonthAndYearSelector = p),
      (l.getMaxDateValueForMonthAndYearSelector = _),
      (l.isSelectedMonthAndYear = C),
      (l.isLimitDateReached = b),
      (l.isDateCurrentMonthAndYear = v),
      (l.getTodayDayNumber = S));
  },
  98,
);
