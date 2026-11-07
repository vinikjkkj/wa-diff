__d(
  "WAWebSuspiciousLinkWam",
  [
    "WAWebWamEnumLogType",
    "WAWebWamRuntimeProvider",
    "WAWebWebcMinorEventLogWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWamRuntimeProvider").getWamRuntime();
          if (t == null) return !1;
          var n = c(e);
          return (n.runPreCommitValidation(), yield t.commit(n, !1), !0);
        })),
        s.apply(this, arguments)
      );
    }
    function u(t) {
      var n = t.count,
        r = t.metric;
      return e({ count: n, metric: r, realm: "dedicated" });
    }
    function c(e) {
      var t = e.count,
        n = e.metric,
        r = e.realm;
      return new (o(
        "WAWebWebcMinorEventLogWamEvent",
      ).WebcMinorEventLogWamEvent)({
        logType: o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT,
        logReason: "suspicious-host-checks",
        logContext: r + ":" + n,
        logCount: t,
      });
    }
    ((l.commitSuspiciousLinkMetric = e),
      (l.commitDedicatedSuspiciousLinkMetric = u),
      (l.createSuspiciousLinkMetricEvent = c));
  },
  98,
);
