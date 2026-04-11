__d(
  "MemoryUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return window.performance && window.performance.memory;
    }
    function l() {
      return window.navigator && window.navigator.deviceMemory;
    }
    function s() {
      return (
        window.performance &&
        typeof window.performance.measureUserAgentSpecificMemory == "function"
      );
    }
    function u(e) {
      try {
        if (e != null && typeof e == "function") {
          var t, n;
          return (t =
            (n = c(e.toString())) == null
              ? void 0
              : n.endsWith("{ [native code] }")) != null
            ? t
            : !1;
        }
        return !1;
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    function d() {
      return typeof window.gc != "function" ||
        typeof window.gc.toString != "function"
        ? !1
        : c(window.gc.toString()) === "function gc() { [native code] }";
    }
    var m = d() ? window.gc : null;
    function p(t) {
      t === void 0 && (t = { runGC: !0 });
      var n = null;
      if (l()) {
        var r = parseFloat(window.navigator.deviceMemory);
        isNaN(r) || (n = r * 1024 * 1024 * 1024);
      }
      if (e()) {
        var o, a;
        m != null && t.runGC && m();
        var i =
            (o = (a = window.performance) == null ? void 0 : a.memory) != null
              ? o
              : {},
          s = i.jsHeapSizeLimit,
          u = i.totalJSHeapSize,
          c = i.usedJSHeapSize;
        return {
          usedJSHeapSize: c,
          jsHeapSizeLimit: s,
          totalJSHeapSize: u,
          deviceMemory: n,
        };
      }
      return {
        usedJSHeapSize: null,
        jsHeapSizeLimit: null,
        totalJSHeapSize: null,
        deviceMemory: null,
      };
    }
    ((i.isMemoryAPISupported = e),
      (i.isMeasureMemoryOriginTrialSupported = s),
      (i.isFunctionNative = u),
      (i.isGarbageCollectionAPIAvailable = d),
      (i.getCurrentMemory = p));
  },
  66,
);
