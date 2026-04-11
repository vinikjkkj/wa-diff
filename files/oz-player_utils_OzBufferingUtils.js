__d(
  "oz-player/utils/OzBufferingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.1,
      l = 1,
      s = 0.2;
    function u(e, t, n) {
      if (c(e, n)) return !0;
      for (var r = e.currentTime, o = 0, a = 0; a < e.buffered.length; a++) {
        var i = e.buffered.start(a),
          l = e.buffered.end(a);
        if (i <= r && l >= r) {
          o = l;
          break;
        }
      }
      return o - r > t;
    }
    function c(e, t) {
      for (var n = e.currentTime, r = 0, o = 0; o < e.buffered.length; o++) {
        var a = e.buffered.start(o),
          i = e.buffered.end(o);
        if (a <= n && i >= n) {
          r = i;
          break;
        }
      }
      return Math.abs(r - t) <= s || Math.abs(n - t) <= s;
    }
    function d(e, t) {
      if (!t) return 0;
      var n = null;
      for (var r of t) r.startTime <= e && r.endTime > e && (n = r);
      return n ? n.endTime - e : 0;
    }
    function m(e) {
      for (var t = [], n = 0; n < e.buffered.length; n++)
        t.push({
          rangeStart: e.buffered.start(n),
          rangeEnd: e.buffered.end(n),
        });
      return t;
    }
    function p(e, t, n, r) {
      if (n.length === 0 || t.size === 0) return !1;
      for (var o = null, a = 0; a < n.length; a++) {
        var i = n[a],
          l = t.get(i);
        if (f(e, 0, l)) {
          o = i;
          break;
        }
      }
      if (o == null) return !1;
      var s = !0;
      return (
        t.forEach(function (t, n) {
          if (o !== n) {
            var a = t.getBufferedRanges();
            a.forEach(function (t) {
              s = _(e, t, r, s);
            });
          }
        }),
        !s
      );
    }
    function _(e, t, n, r) {
      return e >= t.startTime && e < t.endTime + n ? !1 : r;
    }
    function f(e, t, n) {
      if ((t === void 0 && (t = 0), n)) {
        for (var r = n.getBufferedRanges(), o = 0; o < r.length; o++)
          if (r[o].startTime <= e && r[o].endTime > e && r[o].endTime - e > t)
            return !0;
      }
      return !1;
    }
    ((i.BUFFER_UNDERFLOW_THRESHOLD = e),
      (i.BUFFER_OVERFLOW_THRESHOLD = l),
      (i.BUFFER_FUDGE_FACTOR = s),
      (i.hasEnoughBuffer = u),
      (i.hasBufferedToOrReachedEnd = c),
      (i.getBufferAheadFromCurrentTime = d),
      (i.getNumericalRangesFromSourceBuffer = m),
      (i.hasEnoughPartialBuffer = p),
      (i.hasBuffer = f));
  },
  66,
);
