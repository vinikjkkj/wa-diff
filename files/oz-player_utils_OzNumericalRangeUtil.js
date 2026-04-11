__d(
  "oz-player/utils/OzNumericalRangeUtil",
  ["oz-player/utils/OzNumericalHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.01;
    function s(t, n) {
      var r = n.rangeEnd;
      return r == null
        ? !1
        : Math.abs(t.rangeStart - r) > e && t.rangeStart > r;
    }
    function u(t, n) {
      var r = t.rangeEnd,
        o = n.rangeEnd;
      return r == null ? !0 : o == null ? !1 : Math.abs(r - o) > e && r > o;
    }
    function c(t, n, r, o) {
      var a = r.rangeEnd;
      return a == null
        ? !1
        : n === a || (Math.abs(n - a) > (o != null ? o : e) && n > a);
    }
    function d(t, n, r) {
      var o = n.rangeEnd;
      if (o == null) return !1;
      var a = r != null ? r : e;
      return t - n.rangeStart >= a && o - t >= a;
    }
    function m(t, n) {
      return t > n - e;
    }
    function p(e) {
      if (!e.length) return [];
      var t = [],
        n = e[0];
      t.push(n);
      for (var r = 1; r < e.length; r++) {
        var o = e[r];
        if (u(o, n))
          s(o, n)
            ? ((n = { rangeStart: o.rangeStart, rangeEnd: o.rangeEnd }),
              t.push(n))
            : (n.rangeEnd = o.rangeEnd);
        else continue;
      }
      return t;
    }
    function _(e, t, n) {
      return t
        .reduceRight(function (t, r) {
          if (c(e, r.rangeStart, n) || c(e, n.rangeStart, r)) t.push(r);
          else {
            var o = n.rangeEnd;
            (o != null &&
              (r.rangeEnd == null || c(e, r.rangeEnd, n)) &&
              t.push({ rangeStart: o, rangeEnd: r.rangeEnd }),
              m(n.rangeStart, r.rangeStart) &&
                t.push({ rangeStart: r.rangeStart, rangeEnd: n.rangeStart }));
          }
          return t;
        }, [])
        .filter(function (e) {
          return e.rangeEnd == null || e.rangeStart < e.rangeEnd;
        })
        .reverse();
    }
    function f(t, n, r, o) {
      o === void 0 && (o = e);
      for (var a = 0; a < r.length; a++) {
        var i = r[a],
          l = i.rangeStart;
        if (m(n, l) && !c(t, n, i, o)) return a;
      }
      return -1;
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          o = r.rangeStart;
        if (!m(e, o)) return n;
      }
      return -1;
    }
    function h(e, t, n) {
      return e >= t
        ? 0
        : n.reduceRight(function (n, r) {
            var o = r.rangeEnd,
              a = r.rangeStart;
            return t < a || (o != null && e > o)
              ? n
              : o == null || t <= o
                ? Math.min(t - a, t - e) + n
                : e >= a
                  ? Math.min(o - e, t - e) + n
                  : o - a + n;
          }, 0);
    }
    function y(e, t) {
      for (
        var n,
          r = e.length === 0 && (n = t[t.length - 1]) != null ? n : null,
          a = 0;
        a < e.length;
        a++
      ) {
        for (var i = e[a], l = a; l < t.length; l++) {
          var s = t[l];
          if (
            o("oz-player/utils/OzNumericalHelper").equalTo(
              i.rangeStart,
              s.rangeStart,
            ) &&
            i.rangeEnd != null &&
            s.rangeEnd != null &&
            o("oz-player/utils/OzNumericalHelper").equalTo(
              i.rangeEnd,
              s.rangeEnd,
            )
          )
            break;
          if (
            s.rangeEnd != null &&
            i.rangeEnd != null &&
            !o("oz-player/utils/OzNumericalHelper").equalTo(
              i.rangeStart,
              s.rangeStart,
            )
          ) {
            r = { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd };
            break;
          } else if (
            s.rangeEnd != null &&
            i.rangeEnd != null &&
            o("oz-player/utils/OzNumericalHelper").equalTo(
              i.rangeStart,
              s.rangeStart,
            ) &&
            !o("oz-player/utils/OzNumericalHelper").equalTo(
              i.rangeEnd,
              s.rangeEnd,
            )
          ) {
            r = { rangeStart: i.rangeEnd, rangeEnd: s.rangeEnd };
            break;
          }
        }
        if (r !== null) break;
      }
      return r;
    }
    ((l.isWithin = d),
      (l.isLargerThan = m),
      (l.mergeSortedRanges = p),
      (l.diffSortedRanges = _),
      (l.findCurrentRangeIndex = f),
      (l.findNextRangeIndex = g),
      (l.findDiffCoveredByRanges = h),
      (l.firstAddedInSortedRanges = y));
  },
  98,
);
