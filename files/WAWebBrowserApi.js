__d(
  "WAWebBrowserApi",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      if (r("gkx")("17565")) return 1e3;
      var t = (e = self.navigator) == null ? void 0 : e.deviceMemory;
      return t == null ? t : t * 1e3;
    }
    function s() {
      var e;
      return r("gkx")("17565")
        ? 1
        : (e = self.navigator) == null
          ? void 0
          : e.hardwareConcurrency;
    }
    ((l.getMemClass = e), (l.getNumCpu = s));
  },
  98,
);
