__d(
  "WAWebUpdateForwardedBotValidationStatusJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateForwardedBotValidationStatus",
          async function () {
            await o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["message"], async function (n) {
                var r = n[0],
                  o = await r.get(e.toString());
                (o == null ? void 0 : o.forwardedAiBotMessageInfo) != null &&
                  (await r.merge(e.toString(), {
                    forwardedAiBotMessageInfo: babelHelpers.extends(
                      {},
                      o.forwardedAiBotMessageInfo,
                      { validationStatus: t },
                    ),
                  }));
              });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.updateForwardedBotValidationStatus = e;
  },
  98,
);
