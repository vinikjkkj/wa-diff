__d(
  "WAWebBackendWorkerInitLivenessProbe",
  ["WALogger", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 6e4;
    function u(e, t) {
      var n = !1,
        o = self.setTimeout(function () {
          c(t)
            .then(function (t) {
              !n && e.isActive() && d(e, t);
            })
            .catch(r("WAWebNoop"));
        }, s);
      return function () {
        ((n = !0), self.clearTimeout(o));
      };
    }
    async function c(e) {
      if (globalThis.navigator.locks != null) {
        var t = await globalThis.navigator.locks.query(),
          n = t.held;
        return (n == null
          ? void 0
          : n.some(function (t) {
              return t.name === e;
            })) === !0
          ? "lock_held"
          : "lock_free";
      }
      return "no_locks_api";
    }
    function d(t, n) {
      (t.addPoint("worker_init_probe_" + n, {
        string: { worker_init_probe_result: n },
      }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[backend-worker] init not complete after ",
              "ms, kill-switch lock: ",
              "",
            ])),
          s,
          n,
        ));
    }
    l.scheduleBackendWorkerInitLivenessProbe = u;
  },
  98,
);
