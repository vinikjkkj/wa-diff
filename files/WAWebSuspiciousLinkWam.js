__d(
  "WAWebSuspiciousLinkWam",
  [
    "WAWebWamEnumLogType",
    "WAWebWamRuntimeProvider",
    "WAWebWebcMinorEventLogWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebWamRuntimeProvider").getWamRuntime();
      if (t == null) return !1;
      var n = u(e);
      return (n.runPreCommitValidation(), await t.commit(n, !1), !0);
    }
    function s(t) {
      var n = t.count,
        r = t.metric;
      return e({ count: n, metric: r, realm: "dedicated" });
    }
    function u(e) {
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
      (l.commitDedicatedSuspiciousLinkMetric = s),
      (l.createSuspiciousLinkMetricEvent = u));
  },
  98,
);
