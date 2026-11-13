__d(
  "WAWebStartPersistedJobs",
  [
    "WALogger",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJobsMigrationGating",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebJobsMigrationGating").isJobsManagerDecommissioned()) {
            c().catch(function (t) {
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
          (yield o("WAWebPersistedJobManager").startWebPersistedJobManager(),
            o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
              o("WAWebPersistedJobManager").getJobManager(),
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
            yield o("WAWebPersistedJobManager").retirePersistedJobs());
        })),
        d.apply(this, arguments)
      );
    }
    l.startPersistedJobs = s;
  },
  98,
);
