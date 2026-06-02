__d(
  "WAWebCrosspostingJob",
  ["WAWebEligibilityCheckHelper", "WAWebOrchestratorNonPersistedJob"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob("crosspostStatus", async function () {
          try {
            var i = await r.arrayBuffer();
            await o("WAWebEligibilityCheckHelper").initiateCrossposting({
              statusTimestamp: e,
              statusKey: t,
              destinations: n,
              statusBlob: i,
              caption: a,
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
