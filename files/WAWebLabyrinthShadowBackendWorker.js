__d(
  "WAWebLabyrinthShadowBackendWorker",
  [
    "WAResultOrError",
    "WAWebApiContact",
    "WAWebLabyrinthShadowCompareController",
    "WAWebLabyrinthShadowFetchController",
    "WAWebRelayEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = e.auth,
        r = e.context,
        a = e.maxThreads,
        i = e.ownerAccountId,
        l = e.previousUnresolved,
        s = e.state;
      (await t.isReady, await o("WAWebApiContact").warmUpAllLidPnMappings());
      var u = self.performance.now(),
        c = await o(
          "WAWebLabyrinthShadowFetchController",
        ).fetchLabyrinthShadowThreads({
          environment: await o(
            "WAWebRelayEnvironment",
          ).createXControllerGraphQLEnvironment(n),
          maxThreads: a,
          ownerAccountId: i,
          state: s,
        });
      if (!c.success) return c;
      var d = self.performance.now() - u,
        m = await o(
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
    }
    l.runLabyrinthShadowInWorker = e;
  },
  98,
);
