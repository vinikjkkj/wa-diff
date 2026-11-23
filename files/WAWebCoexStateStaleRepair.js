__d(
  "WAWebCoexStateStaleRepair",
  [
    "WATimeUtils",
    "WAWebCoexProductStateStore",
    "WAWebCoexStateSyncCoordinator",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WAWebCoexProductStateStore").getCoexProductState();
      if (e == null) {
        await o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
          "companion_bootstrap",
        );
        return;
      }
      var t = Date.now() - e.fetchedAtMs;
      (t < 0 || t >= o("WATimeUtils").DAY_MILLISECONDS) &&
        (await o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
          "stale_repair",
        ));
    }
    l.startCoexStateRepair = e;
  },
  98,
);
