__d(
  "JSSelfProfilerProbe",
  ["Env"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : "";
    }
    function u() {
      return typeof Profiler != "function" ||
        typeof Profiler.toString != "function"
        ? !1
        : s(Profiler.toString()).endsWith("{ [native code] }");
    }
    function c() {
      if (!u() || (e || (e = r("Env"))).jssp_header_sent !== !0) return !1;
      try {
        var t = new Profiler({ sampleInterval: 1e3, maxBufferSize: 10 });
        t.stop();
      } catch (e) {
        return !1;
      }
      return !0;
    }
    function d() {
      var e = window.PerformanceObserver;
      if (e == null) return [];
      var t = e.supportedEntryTypes;
      return t != null ? t : [];
    }
    function m() {
      return d().includes("longtask");
    }
    function p() {
      return d().includes("event");
    }
    var _ = {
        isJSSPAvailable: c(),
        isJSSPNative: u(),
        isLongtaskAvailable: m(),
        isINPAvailable: p(),
      },
      f = _;
    l.default = f;
  },
  98,
);
