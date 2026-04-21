__d(
  "WebBloksTimerStop",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = e.bloksContext.objectSet.environment.timeoutIDS,
        r = n.get(t);
      (r == null ? void 0 : r.hostTimerID) != null &&
        (window.clearTimeout(r.hostTimerID), (r.hostTimerID = null));
    }
    i.default = e;
  },
  66,
);
