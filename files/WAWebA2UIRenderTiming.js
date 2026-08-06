__d(
  "WAWebA2UIRenderTiming",
  [],
  function (t, n, r, o, a, i) {
    var e = 8490,
      l = 4,
      s = 8,
      u = new Map(),
      c = 0;
    function d() {
      return ((c += 1), c);
    }
    var m = 256,
      p = new Set();
    function _(e) {
      if (p.has(e)) return !1;
      if (p.size >= m) {
        var t = p.values().next().value;
        t != null && p.delete(t);
      }
      return (p.add(e), !0);
    }
    function f(e) {
      p.delete(e);
    }
    function g(e, t) {
      u.set(e, t);
    }
    function h(e) {
      u.delete(e);
    }
    function y(t, n) {
      if (t === e && n[l] != null) {
        var r = n[s];
        if (typeof r == "string") {
          var o = u.get(r);
          o != null && (u.delete(r), o());
        }
      }
    }
    ((i.nextA2UIRenderInstanceKey = d),
      (i.markA2UIRenderStartedIfAbsent = _),
      (i.clearA2UIRenderStarted = f),
      (i.registerA2UIRenderCallback = g),
      (i.unregisterA2UIRenderCallback = h),
      (i.maybeEndA2UIRenderMarkerFromFieldStat = y));
  },
  66,
);
