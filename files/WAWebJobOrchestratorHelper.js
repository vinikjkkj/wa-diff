__d(
  "WAWebJobOrchestratorHelper",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return t instanceof Map || t instanceof Set ? Array.from(t) : t;
    }
    function l(t, n) {
      var r, o, a, i;
      return t.maxConcurrency !== n.maxConcurrency ||
        ((r = t.jobPrioritiesQuota) == null ? void 0 : r.size) !==
          ((o = n.jobPrioritiesQuota) == null ? void 0 : o.size) ||
        Object.keys((a = t.maxConcurrencyPerJob) != null ? a : {}).length !==
          Object.keys((i = n.maxConcurrencyPerJob) != null ? i : {}).length
        ? !0
        : JSON.stringify(t, e) !== JSON.stringify(n, e);
    }
    i.hasConfigChanged = l;
  },
  66,
);
