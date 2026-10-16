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
    function e(e, t, n) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return s(e, t, n);
      var r = c(!1);
      return o("QPLFlow").endWith(r, function () {
        return o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted(
            o(
              "WAWebPersistedJobDefinitions",
            ).jobSerializers.sendRequestedKeyShare(e, t, n),
          );
      });
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          yield o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
          var a = c(!0);
          yield o("QPLFlow").endWith(
            a,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = yield o(
                "WAWebLazyPersistedQueue",
              ).whenPersistedQueuesReady(a);
              yield n.requestKeyShareNow(e, t, r);
            }),
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: {
            bool: { isPQ: e },
            string: { operationType: "sendRequestedKeyShare" },
          },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
    }
    l.requestKeyShare = e;
  },
  98,
);
