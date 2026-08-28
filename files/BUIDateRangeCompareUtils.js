__d(
  "BUIDateRangeCompareUtils",
  [
    "invariant",
    "BUIDateRangeComparePresets",
    "BUIDateRangeConsts",
    "BUIDateRangeUtils",
    "Locale",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("BUIDateRangeConsts").BUIDateRangeIntervalPositionType,
      s = e.END,
      u = e.START,
      c = n("BUIDateRangeConsts").BUIDateRangeIntervalType,
      d = c.COMPARE_INTERVAL,
      m = c.INTERVAL,
      p = n("BUIDateRangeUtils").CUSTOM,
      _ = n("BUIDateRangeUtils").setIntervalEnd,
      f = n("BUIDateRangeUtils").setIntervalStart,
      g = 100,
      h = {
        COMPARE_LABEL_SINGLE_DAY_WIDTH: g,
        calculateDateRangeOnClick: function (t) {
          var e = t.date,
            r = t.flags,
            o = t.selection,
            a = r.isOddClick,
            i = r.shouldSetCompareInterval,
            s = o.compareInterval,
            u = o.comparePreset,
            c = o.interval;
          if (
            ((c && s) || l(0, 3487),
            i
              ? ((s = a ? f(s, e) : _(s, e)), (i = a), (u = p.value))
              : ((c = a ? f(c, e) : _(c, e)),
                (i = !a),
                !a && u && u !== p.value && (i = !1)),
            u && u !== p.value)
          ) {
            var d = n("BUIDateRangeComparePresets")[u];
            c && (s = d.calculateInterval(c));
          }
          return {
            compareInterval: s,
            comparePreset: u,
            interval: c,
            shouldSetCompareInterval: i,
          };
        },
        getCompareInterval: function (t, r) {
          var e = n("BUIDateRangeComparePresets")[r];
          if (e) return e.calculateInterval(t);
        },
        getOverlap: function (t, r) {
          return !t ||
            !r ||
            t.start.isAfterOrEqual(r.end.subtractDays(1)) ||
            t.end.subtractDays(1).isBeforeOrEqual(r.start)
            ? null
            : t.start.isBefore(r.start)
              ? n("BUIDateRangeUtils").createInterval(
                  r.start,
                  r.end.min(t.end).subtractDays(1),
                )
              : n("BUIDateRangeUtils").createInterval(
                  t.start,
                  t.end.min(r.end).subtractDays(1),
                );
        },
        getBorderRadius: function (t, r) {
          var e = t.getDayOfWeek(),
            o = r ? "0 6px 6px 0" : "0 3px 3px 0",
            a = r ? "6px 0 0 6px" : "3px 0 0 3px";
          return e === 0
            ? n("Locale").isRTL()
              ? o
              : a
            : e === 6
              ? n("Locale").isRTL()
                ? a
                : o
              : null;
        },
        getCompareHeaderHighlightState: function (t, n, r) {
          return !r && !n && t
            ? null
            : { intervalType: n ? d : m, position: t ? u : s };
        },
      };
    a.exports = h;
  },
  null,
);
