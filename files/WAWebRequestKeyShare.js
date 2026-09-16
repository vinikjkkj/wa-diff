__d(
  "WAWebRequestKeyShare",
  [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r) {
      var a = o("WAWebJobsMigrationGating").isPersistedQueuesEnabled(),
        i = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: a },
              string: { operationType: "sendRequestedKeyShare" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      return a
        ? o("QPLFlow").endWith(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady(i);
              yield n.requestKeyShareNow(e, t, r);
            }),
          )
        : o("QPLFlow").endWith(i, function () {
            return o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.sendRequestedKeyShare(e, t, r),
              );
          });
    }
    l.requestKeyShare = e;
  },
  98,
);
