__d(
  "WebBloksTimerRestart",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = e.bloksContext.objectSet.environment.timeoutIDS,
        r = n.get(t);
      r == null ||
        r.hostTimerID != null ||
        (r.hostTimerID = window.setTimeout(r.tick, r.intervalMs));
    }
    i.default = e;
  },
  66,
);
