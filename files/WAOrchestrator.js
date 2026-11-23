__d(
  "WAOrchestrator",
  [
    "WAConcurrentBucketJobQueue",
    "WAConcurrentPreemptiveJobQueue",
    "WADefaultJobNoQueue",
    "WAGlobals",
    "WAJobOrchestratorTypes",
    "WAOrchestratorJobStatsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = { maxConcurrency: 1 },
        t = "default",
        n = {},
        r = e,
        a = new (o("WAOrchestratorJobStatsLogger").JobStatsLogger)();
      return function (i, l) {
        var c, d, m, p, _;
        i === void 0 && (i = !1);
        var f = i ? t : o("WAGlobals").getConfig().orchestratorVersion(),
          g = (c = u()) != null ? c : e,
          h;
        if (
          (l == null ||
            l.addPoint("get_orchestrator", {
              string: { orchestrator: f },
              int: {
                maxConcurrency: g.maxConcurrency,
                highPriorityQuota:
                  (d =
                    (m = g.jobPrioritiesQuota) == null
                      ? void 0
                      : m.get(o("WAJobOrchestratorTypes").JobPriority.HIGH)) !=
                  null
                    ? d
                    : 0,
                lowPriorityQuota:
                  (p =
                    (_ = g.jobPrioritiesQuota) == null
                      ? void 0
                      : _.get(o("WAJobOrchestratorTypes").JobPriority.LOW)) !=
                  null
                    ? p
                    : 0,
              },
            }),
          n[f])
        )
          return (s(r, g) && ((r = g), n[f].updateConfig(g)), n[f]);
        switch (f) {
          case "preemptive": {
            h = new (o(
              "WAConcurrentPreemptiveJobQueue",
            ).WAConcurrentPreemptiveJobQueue)();
            break;
          }
          case "bucket": {
            h = new (o(
              "WAConcurrentBucketJobQueue",
            ).WAConcurrentBucketJobQueue)();
            break;
          }
          default:
            h = new (o("WADefaultJobNoQueue").WADefaultJobNoQueue)();
            break;
        }
        return (h.init(g, a), (n[f] = h), (r = g), h);
      };
    }
    function s(e, t) {
      var n, r, o, a;
      return e.maxConcurrency !== t.maxConcurrency ||
        ((n = e.jobPrioritiesQuota) == null ? void 0 : n.size) !==
          ((r = t.jobPrioritiesQuota) == null ? void 0 : r.size) ||
        Object.keys((o = e.maxConcurrencyPerJob) != null ? o : {}).length !==
          Object.keys((a = t.maxConcurrencyPerJob) != null ? a : {}).length
        ? !0
        : JSON.stringify(e) !== JSON.stringify(t);
    }
    function u() {
      var e = {
        jobPrioritiesQuota: new Map([
          [o("WAJobOrchestratorTypes").JobPriority.HIGH, 5],
          [o("WAJobOrchestratorTypes").JobPriority.LOW, 1],
        ]),
        maxConcurrency: 5,
        maxConcurrencyPerJob: {},
      };
      return e;
    }
    l.getInstanceDelegate = e;
  },
  98,
);
