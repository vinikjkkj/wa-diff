__d(
  "WAWebFtsLightClient",
  [
    "WAWebFtsStorage",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebWorkerSafeBackendApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    async function s() {
      return (
        e != null ||
          (e = await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
            "getFtsClientInstance",
          )),
        e
      );
    }
    function u(e) {
      return o("WAWebSchemaFtsIndexingQueue")
        .getFtsIndexingQueueTable()
        .bulkCreateOrReplace(
          e.map(function (e) {
            return { id: e };
          }),
        );
    }
    async function c(t) {
      if (o("WAWebRuntimeEnvironmentUtils").isWorker())
        return o("WAWebFtsStorage")
          .getIndexV3Table()
          .bulkRemoveByIndex(["id"], t);
      var n = e != null ? e : await s();
      await n.purge(t);
    }
    async function d() {
      if (o("WAWebRuntimeEnvironmentUtils").isWorker())
        return Promise.resolve();
      var t = e != null ? e : await s();
      await t.index();
    }
    var m = { purge: c, index: d, addToIndexingTable: u };
    l.ftsLightClient = m;
  },
  98,
);
