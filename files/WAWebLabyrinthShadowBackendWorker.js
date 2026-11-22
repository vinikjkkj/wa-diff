__d(
  "WAWebLabyrinthShadowBackendWorker",
  [
    "WAResultOrError",
    "WAWebApiContact",
    "WAWebLabyrinthShadowCompareController",
    "WAWebLabyrinthShadowFetchController",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.auth,
            r = e.context,
            a = e.maxThreads,
            i = e.ownerAccountId,
            l = e.previousUnresolved,
            s = e.state;
          (yield t.isReady,
            yield o("WAWebApiContact").warmUpAllLidPnMappings());
          var u = self.performance.now(),
            c = yield o(
              "WAWebLabyrinthShadowFetchController",
            ).fetchLabyrinthShadowThreads({
              environment: yield o(
                "WAWebRelayEnvironment",
              ).createXControllerGraphQLEnvironment(n),
              maxThreads: a,
              ownerAccountId: i,
              state: s,
            });
          if (!c.success) return c;
          var d = self.performance.now() - u,
            m = yield o(
              "WAWebLabyrinthShadowCompareController",
            ).compareLabyrinthShadow({
              context: r,
              keys: c.value.keys,
              previousUnresolved: l,
              threads: c.value.threads,
            });
          return o("WAResultOrError").makeResult(
            babelHelpers.extends({}, m, {
              durationMs: self.performance.now() - u,
              fetchMs: d,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.runLabyrinthShadowInWorker = e;
  },
  98,
);
