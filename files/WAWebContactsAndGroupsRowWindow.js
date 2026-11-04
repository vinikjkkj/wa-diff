__d(
  "WAWebContactsAndGroupsRowWindow",
  [],
  function (t, n, r, o, a, i) {
    var e = 1.5,
      l = 0.5,
      s = 1;
    function u(e, t) {
      for (var n = [0], r = 0; r < e; r++) n.push(n[r] + t(r));
      return n;
    }
    function c(t, n, r) {
      r === void 0 && (r = e);
      var o = t.height * r,
        a = _(n, t.top - o),
        i = f(n, t.top + t.height + o);
      return { end: Math.max(a, i), start: a };
    }
    function d(e, t, n) {
      var r = t.height * l,
        o = n.length - 1,
        a = e.start === 0 || n[e.start] <= t.top - r,
        i = e.end >= o || n[e.end] >= t.top + t.height + r;
      return a && i;
    }
    function m(e, t, n) {
      var r = p(e.start, e.end);
      if (n == null) return r;
      var o = p(Math.max(n - s, 0), Math.min(n + s + 1, t)).filter(
        function (t) {
          return t < e.start || t >= e.end;
        },
      );
      return [].concat(o, r).sort(function (e, t) {
        return e - t;
      });
    }
    function p(e, t) {
      return Array.from({ length: Math.max(t - e, 0) }, function (t, n) {
        return e + n;
      });
    }
    function _(e, t) {
      for (var n = 0, r = e.length - 1; n < r; ) {
        var o = Math.ceil((n + r) / 2);
        e[o] <= t ? (n = o) : (r = o - 1);
      }
      return n;
    }
    function f(e, t) {
      for (var n = 0, r = e.length - 1; n < r; ) {
        var o = Math.floor((n + r) / 2);
        e[o] >= t ? (r = o) : (n = o + 1);
      }
      return n;
    }
    ((i.OVERSCAN_VIEWPORTS = e),
      (i.getRowOffsets = u),
      (i.getRowRange = c),
      (i.isViewportCovered = d),
      (i.getRenderedRowIndexes = m));
  },
  66,
);
