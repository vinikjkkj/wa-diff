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
    var c = null;
    function d(e) {
      c = e;
    }
    function m() {
      return c;
    }
    function p() {
      var e;
      if (r("gkx")("17565")) return 1e3;
      var t = (e = self.navigator) == null ? void 0 : e.deviceMemory;
      return t == null ? t : t * 1e3;
    }
    function _() {
      var e;
      return r("gkx")("17565")
        ? 1
        : (e = self.navigator) == null
          ? void 0
          : e.hardwareConcurrency;
    }
    function f() {
      var e = globalThis.navigator;
      if (e != null) {
        var t = e.cpu;
        if (t != null) {
          var n = t.performance;
          return typeof n == "string" ? n : void 0;
        }
      }
    }
    ((l.setMemClassOverride = s),
      (l.getMemClassOverride = u),
      (l.setOsVersionOverride = d),
      (l.getOsVersionOverride = m),
      (l.getMemClass = p),
      (l.getNumCpu = _),
      (l.readCpuPerformanceClass = f));
  },
  98,
);
