__d(
  "WAWebRequestKeyShare",
  [
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()
        ? o("WAWebLazyPersistedQueue")
            .whenPersistedQueuesReady()
            .then(function (r) {
              return r.requestKeyShareNow(e, t, n);
            })
        : o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilPersisted(
              o(
                "WAWebPersistedJobDefinitions",
              ).jobSerializers.sendRequestedKeyShare(e, t, n),
            );
    }
    l.requestKeyShare = e;
  },
  98,
);
