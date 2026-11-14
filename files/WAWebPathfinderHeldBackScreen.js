__d(
  "WAWebPathfinderHeldBackScreen",
  ["WAWebPathfinderHeldBackSurface"],
  function (t, n, r, o, a, i, l) {
    var e = "unknown",
      s = null;
    function u(t) {
      var n =
        t === e
          ? o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface()
          : o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(t);
      s = n != null ? { name: t, verdict: n } : null;
    }
    function c(e) {
      return s != null && s.name === e ? s.verdict : void 0;
    }
    function d(t) {
      var n;
      return t === e
        ? void 0
        : (n = o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(t)) !=
            null
          ? n
          : void 0;
    }
    function m(t, n) {
      if (n != null) {
        if (t === "BACKGROUND") return c(n);
        n === e && u(n);
      }
    }
    ((l.noteEnteredScreen = u),
      (l.leavingVerdict = c),
      (l.enteringVerdict = d),
      (l.getLifecycleHeldBackVerdict = m));
  },
  98,
);
