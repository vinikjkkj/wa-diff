__d(
  "WAWebPathfinderBackIntent",
  ["WAWebPathfinderHeldBackSurface", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = '[data-testid="btn-closer-drawer"]',
      s = 500,
      u = new Set(["Alt", "Control", "Meta", "Shift"]),
      c = 229,
      d = null;
    function m(e) {
      !_() ||
        u.has(e.key) ||
        (e.key === "Escape" && !e.isComposing && e.keyCode !== c
          ? f(e.target)
          : (d = null));
    }
    function p(t) {
      if (_()) {
        var n = t.target;
        n instanceof Element && n.closest(e) != null ? f(n) : (d = null);
      }
    }
    function _() {
      return r("justknobx")._("8535");
    }
    function f(e) {
      d = o("WAWebPathfinderHeldBackSurface").isInsideHeldBackElement(e)
        ? null
        : Date.now();
    }
    function g(e) {
      var t = d;
      return t == null || e < t ? !1 : ((d = null), e - t <= s && _());
    }
    ((l.handleBackKeyDown = m),
      (l.handleBackClick = p),
      (l.consumeBackIntent = g));
  },
  98,
);
