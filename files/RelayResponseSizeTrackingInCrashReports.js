__d(
  "RelayResponseSizeTrackingInCrashReports",
  [
    "BrowserCrashConfig",
    "PerformanceObserver",
    "RSTLogForCrash",
    "RelayObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      r("BrowserCrashConfig").SHOULD_CAPTURE_RELAY_RESPONSE_SIZE && c();
    }
    var s = !1,
      u = 4e3;
    function c() {
      s ||
        ((s = !0),
        o("PerformanceObserver").observe("resource", d),
        window.setInterval(function () {
          var e = f(p, 10);
          o("RSTLogForCrash").logForCrash(
            "topSizedRelayQueries",
            e,
            o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
            { isSystem: !0 },
          );
        }, u));
    }
    function d(e) {
      var t = m(e);
      if (t != null) {
        var n = o("RelayObserver").getAndDeleteRelayData(t);
        if (n != null) {
          var r = n.queryName;
          _(r, e.transferSize, e.responseEnd);
        }
      }
    }
    function m(e) {
      try {
        var t = e.name,
          n = new URL(t);
        return n.searchParams.get("__crash_obid");
      } catch (e) {
        return null;
      }
    }
    var p = new Map();
    function _(e, t, n) {
      var r = p.get(e);
      (r == null &&
        (r = {
          queryName: e,
          totalResponseSize: 0,
          maxResponseSize: 0,
          queryCount: 0,
          lastResponseSize: 0,
          lastResponseTime: 0,
        }),
        (r.totalResponseSize += t),
        (r.maxResponseSize = Math.max(r.maxResponseSize, t)),
        (r.queryCount += 1),
        (r.lastResponseSize = t),
        (r.lastResponseTime = n),
        p.set(e, r));
    }
    function f(e, t) {
      t === void 0 && (t = 10);
      var n = [];
      for (var r of e) {
        var o = r[0],
          a = r[1];
        n.push({ queryName: o, totalResponseSize: a.totalResponseSize });
      }
      return (
        n.sort(function (e, t) {
          return t.totalResponseSize - e.totalResponseSize;
        }),
        n
          .slice(0, t)
          .map(function (e) {
            return e.queryName + ":" + e.totalResponseSize;
          })
          .join(",")
      );
    }
    ((l.initRelayResponseSizeTrackingInCrashReports = e),
      (l.startMonitoring = c));
  },
  98,
);
