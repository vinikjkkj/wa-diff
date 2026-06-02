__d(
  "WAWebMarkAddOnsAsReadJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebAddOnsMarkAddOnsAsReadDb",
    "WAWebAddonMarkAsReadUtils",
    "WAWebBackendApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "markAddOnsAsRead",
          async function (e) {
            (await o("WAWebAddOnsMarkAddOnsAsReadDb").markAddOnsAsReadDb(
              e.updates,
            ),
              o("WAWebBackendApi").frontendFireAndForget("markAddOnsAsReadUi", {
                updatedMsgKeys: e.updates,
              }));
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted({ updates: e });
    }
    async function s(e) {
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "markAddOnsAsReadUsingAddonInfra",
          async function (e) {
            return o("WAWebAddonMarkAsReadUtils").processMarkAsRead(e.addons);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted({ addons: e });
    }
    function u(e) {
      return e.length === 0
        ? Promise.resolve({ updatedAddOns: new Map(), updatedOrphans: [] })
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "markUnclassifiedAddOnsAsRead",
              async function (e) {
                var t = await o(
                  "WAWebAddOnsMarkAddOnsAsReadDb",
                ).markUnclassifiedAddOnsAsReadDb(e.msgKeys);
                return (
                  o("WAWebBackendApi").frontendFireAndForget(
                    "markAddOnsAsReadUi",
                    { updatedMsgKeys: t.updatedAddOns },
                  ),
                  t
                );
              },
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted({ msgKeys: e });
    }
    ((l.markAddOnsAsReadJob = e),
      (l.markAddOnsAsReadUsingAddonInfraJob = s),
      (l.markUnclassifiedAddOnsAsReadJob = u));
  },
  98,
);
