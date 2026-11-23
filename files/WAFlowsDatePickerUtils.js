__d(
  "WAFlowsDatePickerUtils",
  ["fbt", "WAFlowsLocalDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "yyyy-MM-dd",
      u = "YYYY-MM-DD",
      c = /^\d{4}-\d{2}-\d{2}$/,
      d = { min: 1900, max: 2100 },
      m = new Set(["gregory", "iso8601", "buddhist", "japanese", "roc"]),
      p = { day: "numeric" },
      _ = { year: "numeric" },
      f = { year: "numeric", month: "short", day: "numeric" },
      g = new Set(["day,month,year", "month,day,year", "year,month,day"]),
      h = new Map(),
      y = function (t, n) {
        var e = (t != null ? t : "") + "|" + JSON.stringify(n),
          r = h.get(e);
        return (
          r == null &&
            ((r = new Intl.DateTimeFormat(t, n)),
            m.has(r.resolvedOptions().calendar) ||
              (r = new Intl.DateTimeFormat(
                t,
                babelHelpers.extends({}, n, { calendar: "gregory" }),
              )),
            h.set(e, r)),
          r
        );
      },
      C = function (t, n) {
        return y(n, p).format(t);
      },
      b = function (t, n) {
        return y(n, _).format(t);
      },
      v = function (t) {
        var e = t.locale,
          n = t.maxDateValue,
          r = t.minDateValue,
          o = t.month,
          a = t.year;
        return new Array(new Date(a, o + 1, 0).getDate())
          .fill(1)
          .reduce(function (t, i, l) {
            return k({
              day: i + l,
              month: o,
              year: a,
              minDateValue: r,
              maxDateValue: n,
            })
              ? t.concat({ value: i + l, label: C(new Date(a, o, i + l), e) })
              : t;
          }, []);
      },
      S = function (t) {
        var e = t.maxDateValue,
          n = t.minDateValue,
          r = t.year;
        return E().reduce(function (t, o, a) {
          return I({ month: a, year: r, minDateValue: n, maxDateValue: e })
            ? t.concat({
                value: a,
                label: s._(/*BTDS*/ "", [s._param("month", o)]),
              })
            : t;
        }, []);
      },
      R = function (t) {
        var e = t.locale,
          n = t.maxDateValue,
          r = t.minDateValue,
          o = L({ minDateValue: r, maxDateValue: n }),
          a = o.maxYear,
          i = o.minYear;
        return new Array(a - i + 1).fill(i).map(function (t, n) {
          return { value: t + n, label: b(new Date(t + n, 0, 1), e) };
        });
      },
      L = function (t) {
        var e = t.maxDateValue,
          n = t.minDateValue,
          r = {
            minDay: 0,
            minMonth: 0,
            minYear: d.min,
            maxDay: 31,
            maxMonth: 11,
            maxYear: d.max,
          };
        if (n !== void 0) {
          var o = new Date(n);
          ((r.minDay = o.getDate()),
            (r.minMonth = o.getMonth()),
            (r.minYear = o.getFullYear()));
        }
        if (e !== void 0) {
          var a = new Date(e);
          ((r.maxDay = a.getDate()),
            (r.maxMonth = a.getMonth()),
            (r.maxYear = a.getFullYear()));
        }
        return r;
      },
      E = function () {
        return [
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
        ];
      },
      k = function (t) {
        var e = t.day,
          n = t.maxDateValue,
          r = t.minDateValue,
          o = t.month,
          a = t.year,
          i = L({ minDateValue: r, maxDateValue: n }),
          l = i.maxDay,
          s = i.maxMonth,
          u = i.maxYear,
          c = i.minDay,
          d = i.minMonth,
          m = i.minYear;
        return (
          (a > m || (a === m && (o > d || (o === d && e >= c)))) &&
          (a < u || (a === u && (o < s || (o === s && e <= l))))
        );
      },
      I = function (t) {
        var e = t.maxDateValue,
          n = t.minDateValue,
          r = t.month,
          o = t.year,
          a = L({ minDateValue: n, maxDateValue: e }),
          i = a.maxMonth,
          l = a.maxYear,
          s = a.minMonth,
          u = a.minYear;
        return (o > u || (o === u && r >= s)) && (o < l || (o === l && r <= i));
      },
      T = function (t, n) {
        return y(t, n)
          .formatToParts()
          .reduce(function (e, t) {
            var n = t.type;
            return n === "year" || n === "month" || n === "day"
              ? e.concat(n)
              : e;
          }, []);
      },
      D = function (t, n) {
        n === void 0 && (n = ["year", "month", "day"]);
        var e = T(t, f),
          r = g.has(e.join(",")) ? e : T(t, {});
        return r.filter(function (e) {
          return n.includes(e);
        });
      },
      x = function (t, n, r) {
        var e = new Date(r, n, t),
          o = e.getDate();
        return o === t ? o : new Date(r, n + 1, 0).getDate();
      },
      $ = function (t) {
        return P(t) ? Number(t) : void 0;
      },
      P = function (t) {
        return typeof t == "string" && /^-?[0-9]+$/.test(t);
      },
      N = function (t) {
        return t == null || t === "" || typeof t != "string" ? void 0 : M(t);
      },
      M = function (t) {
        var e = new Date(t),
          n = e.getTimezoneOffset() * 6e4;
        return new Date(e.getTime() + n).getTime();
      },
      w = function (t) {
        try {
          return typeof t == "string" && t.length
            ? r("WAFlowsLocalDate").fromISOString(t)
            : void 0;
        } catch (e) {
          return;
        }
      },
      A = function (t, n, r) {
        if (typeof t == "string" && t.length) {
          var e = w(t);
          if (e) {
            var o = new Date(e.year, e.month - 1, e.day);
            return O(o, n, r);
          } else return "";
        } else return "";
      },
      F = function (t) {
        var e = new Date(t),
          n = e.getFullYear(),
          r = (e.getMonth() + 1).toString(10).padStart(2, "0"),
          o = e.getDate().toString(10).padStart(2, "0");
        return n + "-" + r + "-" + o;
      };
    function O(e, t, n) {
      var r = E(),
        o = C(e, t),
        a = String(
          r.find(function (t, n) {
            return n === e.getMonth();
          }),
        ),
        i = b(e, t),
        l = D(t, n),
        s = { day: o, month: a, year: i },
        u = l.map(function (e) {
          return s[e];
        });
      return "" + u.join(" ");
    }
    var B = function (t) {
      return typeof t == "string" && c.test(t);
    };
    ((l.DEFAULT_DATE_FORMAT_ANDROID = e),
      (l.DEFAULT_DATE_FORMAT_WEB = u),
      (l.getDays = v),
      (l.getMonths = S),
      (l.getYears = R),
      (l.getMonthLabels = E),
      (l.getDatePartsForLocale = D),
      (l.getClosestValidDay = x),
      (l.getTimestampFromStr = $),
      (l.isValidStrTimestamp = P),
      (l.getTimestampFromDateStr = N),
      (l.getLocalDate = w),
      (l.getDisplayDate = A),
      (l.getFormattedDateFromTimestamp = F),
      (l.formatDisplayDate = O),
      (l.isValidFormattedDateStr = B));
  },
  226,
);
