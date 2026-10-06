__d(
  "WAWebBrowserApi",
  ["Promise", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u(e) {
      s = e;
    }
    function c() {
      return s;
    }
    var d = null;
    function m(e) {
      d = e;
    }
    function p() {
      return d;
    }
    function _() {
      if (r("gkx")("17565")) return 1e3;
      var e = self.navigator,
        t = e == null ? void 0 : e.deviceMemory;
      return t == null ? t : t * 1e3;
    }
    function f() {
      var e;
      return r("gkx")("17565")
        ? 1
        : (e = self.navigator) == null
          ? void 0
          : e.hardwareConcurrency;
    }
    function g() {
      var e = globalThis.navigator;
      if (e != null) {
        var t = e.cpu;
        if (t != null) {
          var n = t.performance;
          return typeof n == "string" ? n : void 0;
        }
      }
    }
    function h() {
      var t = globalThis.navigator;
      if (t == null) return (e || (e = n("Promise"))).resolve(void 0);
      var r = t.userAgentData,
        o = r == null ? void 0 : r.getHighEntropyValues;
      return o == null
        ? (e || (e = n("Promise"))).resolve(void 0)
        : o
            .call(r, ["architecture", "bitness"])
            .then(function (e) {
              var t = e.architecture;
              if (!(t == null || t === "")) {
                var n = e.bitness;
                return n == null || n === "" ? t : t + "-" + n;
              }
            })
            .catch(function () {});
    }
    ((l.setMemClassOverride = u),
      (l.getMemClassOverride = c),
      (l.setOsVersionOverride = m),
      (l.getOsVersionOverride = p),
      (l.getMemClass = _),
      (l.getNumCpu = f),
      (l.readCpuPerformanceClass = g),
      (l.getCpuArchitecture = h));
  },
  98,
);
