__d(
  "WAWebA2UIRenderTiming",
  [],
  function (t, n, r, o, a, i) {
    var e = 8490,
      l = 4,
      s = 8,
      u = 0,
      c = new Map(),
      d = 0;
    function m() {
      return ((d += 1), d);
    }
    function p(e, t) {
      c.set(e, t);
    }
    function _(e) {
      c.delete(e);
    }
    function f(t, n) {
      if (t === e && n[l] === u) {
        var r = n[s];
        if (typeof r == "string") {
          var o = c.get(r);
          o != null && (c.delete(r), o());
        }
      }
    }
    ((i.nextA2UIRenderInstanceKey = m),
      (i.registerA2UIRenderCallback = p),
      (i.unregisterA2UIRenderCallback = _),
      (i.maybeEndA2UIRenderMarkerFromFieldStat = f));
  },
  66,
);
