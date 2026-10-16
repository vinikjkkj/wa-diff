__d(
  "CometRelayHeapPressureGC",
  ["ExecutionEnvironment", "performance", "performanceNow", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1048576,
      d = 10 * 1e3,
      m = 60;
    function p(e) {
      return e != null && e > 0 ? e : null;
    }
    function _() {
      var e,
        t = p(r("qex")._("461")),
        n = p(r("qex")._("517")),
        o = p(r("qex")._("1336"));
      if (t == null && n == null && o == null) return null;
      var a = (e = p(r("qex")._("2640"))) != null ? e : m;
      return {
        heapLimitRatio: o,
        heapThresholdMB: n,
        logExposureThresholdMB: t != null ? t : 0,
        minGCIntervalMS: a * 1e3,
      };
    }
    function f() {
      r("qex")._("5044");
    }
    function g(e, t, n, r) {
      return (
        (n != null && e > n * c) ||
        (r != null && t != null && t > 0 && e > t * r)
      );
    }
    function h() {
      if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) return null;
      var t = _();
      if (t == null) return null;
      var n = t.heapLimitRatio,
        o = t.heapThresholdMB,
        a = t.logExposureThresholdMB,
        i = t.minGCIntervalMS,
        l = !1,
        m = -1 / 0,
        p = -1 / 0;
      return function () {
        var e = (s || (s = r("performanceNow")))();
        if (e - m < d) return !1;
        m = e;
        var t = (u || (u = r("performance"))).memory,
          _ = t == null ? void 0 : t.usedJSHeapSize;
        if (_ == null) return !1;
        if (!l) {
          if (_ <= a * c) return !1;
          ((l = !0), f());
        }
        return e - p < i || !g(_, t == null ? void 0 : t.jsHeapSizeLimit, o, n)
          ? !1
          : ((p = e), !0);
      };
    }
    l.createShouldScheduleHeapPressureGC = h;
  },
  98,
);
