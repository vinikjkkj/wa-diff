__d(
  "WebBloksTimerStart",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r, o, a) {
      var i = Number(n),
        l = t.objectSet.environment.timeoutIDS,
        s = function () {
          if ((e.executeCatch(o, [a, t]), r)) {
            var n = l.get(a);
            n != null && (n.hostTimerID = window.setTimeout(s, i));
          } else l.delete(a);
        },
        u = window.setTimeout(s, i);
      l.set(a, { hostTimerID: u, tick: s, intervalMs: i });
    }
    i.default = e;
  },
  66,
);
