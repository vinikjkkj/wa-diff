__d(
  "WebBloksTimerCancel",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = t.objectSet.environment.timeoutIDS,
        o = r.get(n);
      ((o == null ? void 0 : o.hostTimerID) != null &&
        window.clearTimeout(o.hostTimerID),
        r.delete(n));
    }
    i.default = e;
  },
  66,
);
