__d(
  "BUIDateRangeUtils",
  ["fbt", "invariant", "LocalDate", "LocalDateInterval", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = { text: s._(/*BTDS*/ "Custom"), value: "CUSTOM" },
      c = { includeToday: !1, interval: null, option: null },
      d = s._(/*BTDS*/ "Select dates");
    function m(t) {
      var n = t.value;
      if (!n) return c;
      var o = t.options,
        a = n.compareInterval,
        i = n.comparePreset,
        l = n.interval,
        s = n.preset,
        d = !r("isStringNullOrEmpty")(s),
        m = d
          ? o.find(function (e) {
              return e.value === s;
            })
          : null;
      if ((!d || m || s === e.value || u(0, 2876, s), m != null)) {
        var p = !!n.includeToday;
        return {
          includeToday: p,
          interval: y({ includeToday: p, option: m, timezoneID: t.timezoneID }),
          option: m,
          compareInterval: a,
          comparePreset: i,
        };
      }
      return l
        ? C({
            dateRestraints: t.dateRestraints,
            defaultIncludeToday: t.defaultIncludeToday,
            options: t.options,
            timezoneID: t.timezoneID,
            value: l,
            compareInterval: a,
            comparePreset: i,
          })
        : c;
    }
    function p(e, t) {
      if (!e) return d;
      var n = D(e.start, t),
        r = D(e.end.subtractDays(1), t);
      return n === r
        ? s._(/*BTDS*/ "{date}", [s._param("date", n)])
        : s._(/*BTDS*/ "{startDate} \u2013 {endDate}", [
            s._param("startDate", n),
            s._param("endDate", r),
          ]);
    }
    function _(e) {
      var t = e.option;
      return t ? t.text : d;
    }
    function f(e) {
      var t = e.dateRestraints,
        n = e.options,
        o = e.timezoneID;
      if (!t) return n;
      var a = r("LocalDate").today(o);
      return n.filter(function (e) {
        var n = e.calculateInterval(a);
        return g(n.start, t) && g(n.end.subtractDays(1), t);
      });
    }
    function g(e, t) {
      return (
        !t ||
        t.every(function (t) {
          return t(e);
        })
      );
    }
    function h(t, n) {
      var r = t && t.option;
      return r
        ? n.find(function (e) {
            return e.value === r.value;
          })
          ? r
          : e
        : null;
    }
    function y(t) {
      var n = t.compareInterval,
        o = t.includeToday,
        a = t.option,
        i = t.timezoneID,
        l = t.value;
      if (a.value === e.value) return n && l ? l : null;
      var s = r("LocalDate").today(i);
      return o && a.calculateIntervalIncludingToday
        ? a.calculateIntervalIncludingToday(s)
        : a.calculateInterval(s);
    }
    function C(t) {
      var n = t.defaultIncludeToday,
        o = t.options,
        a = t.timezoneID,
        i = t.value;
      if (!i) return c;
      var l = o && f(t),
        s = !1,
        u;
      if (l) {
        var d = r("LocalDate").today(a),
          m = l.find(function (e) {
            return e.calculateInterval(d).equals(i);
          }),
          p = l.find(function (e) {
            return (
              e.calculateIntervalIncludingToday &&
              e.calculateIntervalIncludingToday(d).equals(i)
            );
          });
        (n || !m) && p ? ((u = p), (s = !0)) : (u = m);
      }
      return {
        compareInterval: t.compareInterval,
        comparePreset: t.comparePreset,
        includeToday: s,
        interval: i,
        option: u || e,
      };
    }
    function b(e) {
      return {
        includeToday: e.includeToday,
        interval: e.interval ? e.interval : void 0,
        preset: e.option ? e.option.value : void 0,
        compareInterval: e.compareInterval,
        comparePreset: e.comparePreset,
      };
    }
    function v(e, t) {
      return e === t ? !0 : !e || !t ? !1 : e.equals(t);
    }
    function S(e, t) {
      return (
        e.option === t.option &&
        e.includeToday === t.includeToday &&
        v(e.interval, t.interval) &&
        v(e.compareInterval, t.compareInterval)
      );
    }
    function R(e, t) {
      return new (r("LocalDateInterval"))(
        e.start.min(t),
        e.end.max(t.addDays(1)),
      );
    }
    function L(e, t) {
      return t.isBefore(e.end) ? r("LocalDateInterval").create(t, e.end) : I(t);
    }
    function E(e, t) {
      var n = t.addDays(1);
      return n.isAfter(e.start)
        ? r("LocalDateInterval").create(e.start, n)
        : R(e, t);
    }
    function k(e, t) {
      return e.equals(t)
        ? new (r("LocalDateInterval"))(e, e.addDays(1))
        : new (r("LocalDateInterval"))(e.min(t), e.max(t));
    }
    function I(e) {
      return new (r("LocalDateInterval"))(e, e.addDays(1));
    }
    function T(e, t) {
      return s._(/*BTDS*/ "{preset}: {dateRange}", [
        s._param("preset", e),
        s._param("dateRange", t),
      ]);
    }
    function D(e, t) {
      return e.format(t != null ? t : "M j, Y");
    }
    ((l.CUSTOM = e),
      (l.calculateDefaultSelection = m),
      (l.verbose = p),
      (l.friendly = _),
      (l.getValidOptions = f),
      (l.getValidSelectionOption = h),
      (l.calculateOptionInterval = y),
      (l.calculateSelectedOption = C),
      (l.rangeSelectionToValue = b),
      (l.isSameInterval = v),
      (l.isSameSelection = S),
      (l.expandInterval = R),
      (l.setIntervalStart = L),
      (l.setIntervalEnd = E),
      (l.createInterval = k),
      (l.createSingleDayInterval = I),
      (l.createCombinedLabel = T));
  },
  226,
);
