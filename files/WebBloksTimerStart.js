__d(
  "WebBloksTimerStart",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r, o, a) {
      var i = Number(n),
        l = null,
        s = t.objectSet.environment.timeoutIDS,
        u = function () {
          (e.executeCatch(o, [a, t]),
            r
              ? s.has(a) && ((l = window.setTimeout(u, i)), s.set(a, l))
              : s.delete(a));
        };
      ((l = window.setTimeout(u, i)), s.set(a, l));
    }
    i.default = e;
  },
  66,
);
