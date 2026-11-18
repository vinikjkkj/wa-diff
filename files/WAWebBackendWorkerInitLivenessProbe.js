__d(
  "WAWebBackendWorkerInitLivenessProbe",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3e4;
    function u(e, t) {
      var n = !1,
        r = self.setTimeout(function () {
          c(t).then(function (t) {
            !n && e.isActive() && m(e, t);
          });
        }, s);
      return function () {
        ((n = !0), self.clearTimeout(r));
      };
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (globalThis.navigator.locks != null)
            try {
              var t = yield globalThis.navigator.locks.query(),
                n = t.held,
                r = t.pending;
              return (n == null
                ? void 0
                : n.some(function (t) {
                    return t.name === e;
                  })) === !0
                ? "lock_held"
                : (r == null
                      ? void 0
                      : r.some(function (t) {
                          return t.name === e;
                        })) === !0
                  ? "lock_pending"
                  : "lock_free";
            } catch (e) {
              return "query_error";
            }
          return "no_locks_api";
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, n) {
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
