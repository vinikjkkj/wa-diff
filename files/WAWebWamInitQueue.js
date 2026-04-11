__d(
  "WAWebWamInitQueue",
  ["WAWebWamRuntimeProvider"],
  function (t, n, r, o, a, i, l) {
    var e = [];
    function s(t, n) {
      (n === void 0 && (n = !1), e.push([t, n]));
    }
    function u(t, n) {
      e.push([!1, t, n]);
    }
    function c() {
      var t = o("WAWebWamRuntimeProvider").getWamRuntime();
      if (t != null) {
        var n = e.splice(0);
        n.forEach(function (e) {
          e.length === 2 ? t.commit.apply(t, e) : t.set(e[1], e[2]);
        });
      }
    }
    ((l.queueEvent = s), (l.queueMetric = u), (l.processQueuedJobs = c));
  },
  98,
);
