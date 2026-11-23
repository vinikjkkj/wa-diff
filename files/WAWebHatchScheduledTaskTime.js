__d(
  "WAWebHatchScheduledTaskTime",
  ["WAWebClock", "WAWebFbtIntlList", "WAWebL10N", "fbs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "UTC",
      s = { day: 7, month: 1, year: 2024 },
      u = "en-US-u-ca-gregory-nu-latn",
      c = 6e4,
      d = 864e5,
      m = ["year", "month", "day", "hour", "minute", "second"],
      p = {
        day: "numeric",
        hour: "numeric",
        hourCycle: "h23",
        minute: "numeric",
        month: "numeric",
        second: "numeric",
        year: "numeric",
      };
    function _(e) {
      var t = e.day,
        n = e.hour,
        r = e.minute,
        o = e.month,
        a = e.second,
        i = e.year;
      return new Date(Date.UTC(i, o - 1, t, n, r, a));
    }
    function f(e, t, n) {
      for (
        var r = D(t),
          o = _(e).getTime(),
          a = [o - d, o + d].map(function (e) {
            return T(r, e) - e;
          }),
          i = a[0],
          l = a[1],
          s = function (t) {
            var e = [t - i, t - l].filter(function (e) {
              return T(r, e) === t;
            });
            if (e.length > 0) return { v: Math.min.apply(Math, e) <= n };
          },
          u,
          m = o;
        m < o + d;
        m += c
      )
        if (((u = s(m)), u)) return u.v;
      return o - i <= n;
    }
    function g(e) {
      if (e != null)
        try {
          return new Intl.DateTimeFormat(void 0, {
            timeZone: e,
          }).resolvedOptions().timeZone;
        } catch (e) {
          return;
        }
    }
    function h(e, t) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        hour: "numeric",
        hourCycle: o("WAWebClock").Clock.getIs24Hour() ? "h23" : "h12",
        minute: "numeric",
        timeZone: t,
      }).format(e);
    }
    function y(e, t) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        day: "numeric",
        month: "short",
        timeZone: t,
        weekday: "short",
      }).format(e);
    }
    function C(e, t) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        timeZone: t,
        weekday: "short",
      }).format(e);
    }
    function b(e, t) {
      return new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
        day: "numeric",
        month: "numeric",
        timeZone: t,
        year: "numeric",
      }).format(e);
    }
    function v(e, t) {
      return t === "hours" && e === 1
        ? S()
        : t === "hours"
          ? r("fbs")
              ._(/*BTDS*/ "", [r("fbs")._plural(e, "count")])
              .toString()
          : t === "minutes"
            ? r("fbs")
                ._(/*BTDS*/ "", [r("fbs")._plural(e, "count")])
                .toString()
            : t === "seconds"
              ? r("fbs")
                  ._(/*BTDS*/ "", [r("fbs")._plural(e, "count")])
                  .toString()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function S() {
      return r("fbs")._(/*BTDS*/ "").toString();
    }
    function R(t) {
      var n = t.hour,
        r = t.minute;
      return h(
        _(babelHelpers.extends({}, s, { hour: n, minute: r, second: 0 })),
        e,
      );
    }
    function L(t) {
      return C(
        _(
          babelHelpers.extends({}, s, {
            day: s.day + t,
            hour: 0,
            minute: 0,
            second: 0,
          }),
        ),
        e,
      );
    }
    function E(e) {
      var t = r("WAWebL10N").getFullLocale(),
        n = new Intl.NumberFormat(t).format(e);
      return (function (e) {
        return e === "zero"
          ? r("fbs")
              ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
              .toString()
          : e === "one"
            ? r("fbs")
                ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
                .toString()
            : e === "two"
              ? r("fbs")
                  ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
                  .toString()
              : e === "few"
                ? r("fbs")
                    ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
                    .toString()
                : e === "many"
                  ? r("fbs")
                      ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
                      .toString()
                  : r("fbs")
                      ._(/*BTDS*/ "", [r("fbs")._param("day", n)])
                      .toString();
      })(new Intl.PluralRules(t, { type: "ordinal" }).select(e));
    }
    function k(t, n) {
      var o = _({
        day: n,
        hour: 0,
        minute: 0,
        month: t,
        second: 0,
        year: s.year,
      });
      return o.getUTCDate() !== n
        ? null
        : new Intl.DateTimeFormat(r("WAWebL10N").getFullLocale(), {
            calendar: "gregory",
            day: "numeric",
            month: "long",
            timeZone: e,
          }).format(o);
    }
    function I(e) {
      return r("WAWebFbtIntlList")(
        e,
        r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      ).toString();
    }
    function T(e, t) {
      var n = e.formatToParts(t),
        r = m.map(function (e) {
          var t;
          return Number(
            (t = n.find(function (t) {
              return t.type === e;
            })) == null
              ? void 0
              : t.value,
          );
        }),
        o = r[0],
        a = r[1],
        i = r[2],
        l = r[3],
        s = r[4],
        u = r[5];
      return Date.UTC(o, a - 1, i, l, s, u);
    }
    function D(e) {
      return new Intl.DateTimeFormat(
        u,
        babelHelpers.extends({}, p, { timeZone: g(e) }),
      );
    }
    ((l.WALL_CLOCK_TIME_ZONE = e),
      (l.getWallClockDate = _),
      (l.hasWallClockPassed = f),
      (l.getKnownTimeZone = g),
      (l.formatTime = h),
      (l.formatDay = y),
      (l.formatWeekday = C),
      (l.formatNumericDate = b),
      (l.formatInterval = v),
      (l.formatHourly = S),
      (l.formatTimeOfDay = R),
      (l.formatWeekdayNumber = L),
      (l.formatOrdinalDay = E),
      (l.formatMonthDay = k),
      (l.formatConjunctionList = I));
  },
  226,
);
