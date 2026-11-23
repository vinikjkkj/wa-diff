__d(
  "WAWebStartPersistedJobs",
  [
    "WALogger",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJobsMigrationGating",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      if (o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()) {
        u().catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[jobs-manager] retiring the jobs database failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("jobs-manager-retire-failed");
        });
        return;
      }
      (await o("WAWebPersistedJobManager").startWebPersistedJobManager(),
        o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
          o("WAWebPersistedJobManager").getJobManager(),
        ));
    }
    async function u() {
      (await o(
        "WAWebEventsWaitForOfflineDeliveryEnd",
      ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
        await o("WAWebPersistedJobManager").retirePersistedJobs());
    }
    l.startPersistedJobs = s;
  },
  98,
);
