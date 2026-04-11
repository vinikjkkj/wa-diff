__d(
  "WAWebFtsLightClient",
  [
    "Promise",
    "WAWebFtsStorage",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            s != null ||
              (s = yield o(
                "WAWebWorkerSafeBackendApi",
              ).workerSafeSendAndReceive("getFtsClientInstance")),
            s
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebSchemaFtsIndexingQueue")
        .getFtsIndexingQueueTable()
        .bulkCreateOrReplace(
          e.map(function (e) {
            return { id: e };
          }),
        );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker())
            return o("WAWebFtsStorage")
              .getIndexV3Table()
              .bulkRemoveByIndex(["id"], e);
          var t = s != null ? s : yield u();
          yield t.purge(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker())
            return (e || (e = n("Promise"))).resolve();
          var t = s != null ? s : yield u();
          yield t.index();
        })),
        f.apply(this, arguments)
      );
    }
    var g = { purge: m, index: _, addToIndexingTable: d };
    l.ftsLightClient = g;
  },
  98,
);
