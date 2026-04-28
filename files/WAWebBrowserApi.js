__d(
  "WAWebBrowserApi",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    function c() {
      var e;
      if (r("gkx")("17565")) return 1e3;
      var t = (e = self.navigator) == null ? void 0 : e.deviceMemory;
      return t == null ? t : t * 1e3;
    }
    function d() {
      var e;
      return r("gkx")("17565")
        ? 1
        : (e = self.navigator) == null
          ? void 0
          : e.hardwareConcurrency;
    }
    ((l.setMemClassOverride = s),
      (l.getMemClassOverride = u),
      (l.getMemClass = c),
      (l.getNumCpu = d));
  },
  98,
);
