__d(
  "WAWebCrosspostingJob",
  ["WAWebEligibilityCheckHelper", "WAWebOrchestratorNonPersistedJob"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.caption,
        n = e.destinations,
        r = e.statusBlob,
        a = e.statusKey,
        i = e.statusTimestamp;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob("crosspostStatus", async function () {
          try {
            var e = await r.arrayBuffer();
            await o("WAWebEligibilityCheckHelper").initiateCrossposting({
              statusTimestamp: i,
              statusKey: a,
              destinations: n,
              statusBlob: e,
              caption: t,
            });
          } catch (e) {
            throw e;
          }
        })
        .waitUntilCompleted();
    }
    l.crosspostStatus = e;
  },
  98,
);
