__d(
  "WAWebCoexStateStaleRepair",
  [
    "WATimeUtils",
    "WAWebCoexProductStateStore",
    "WAWebCoexStateSyncCoordinator",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebCoexProductStateStore").getCoexProductState();
          if (e == null) {
            yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
              "companion_bootstrap",
            );
            return;
          }
          var t = Date.now() - e.fetchedAtMs;
          (t < 0 || t >= o("WATimeUtils").DAY_MILLISECONDS) &&
            (yield o("WAWebCoexStateSyncCoordinator").requestCoexStateRefresh(
              "stale_repair",
            ));
        })),
        s.apply(this, arguments)
      );
    }
    l.startCoexStateRepair = e;
  },
  98,
);
