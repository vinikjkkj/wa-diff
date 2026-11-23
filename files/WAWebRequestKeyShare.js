__d(
  "WAWebRequestKeyShare",
  [
    "QPLFlow",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return s(e, t, n);
      var r = u(!1);
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
    async function s(e, t, n) {
      await o("WAWebLazyPersistedQueue").whenPersistedQueuesMayOpen();
      var r = u(!0);
      await o("QPLFlow").endWith(r, async function () {
        var a = await o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(r);
        await a.requestKeyShareNow(e, t, n);
      });
    }
    function u(e) {
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
