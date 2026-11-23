__d(
  "WAWebStatusStorageInitialize",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebSchemaStatus",
    "WAWebStatusStorageUtils",
    "WAWebStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      return (
        s == null &&
          (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          o("WAWebStatusStorageUtils").createStorage(),
          o("WAWebSchemaStatus").addTable(),
          (s = o("WAWebStatusStorageUtils")
            .getStorage()
            .initialize()
            .catch(function (t) {
              var n = "Unknown error";
              throw (
                t instanceof o("WAWebStorage").AlreadyInitializedError ||
                t instanceof o("WAWebStorage").NoSuchDatabaseError
                  ? (n = t.toString())
                  : t instanceof r("WAWeb-dexie").DexieError &&
                    (n = "Unknown DexieError"),
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to initialize status storage: ",
                        "",
                      ])),
                    n,
                  )
                  .verbose()
                  .sendLogs("failed-to-initialize-status-storage", {
                    sendLogsType:
                      o("WALogger").SendLogsType
                        .CRASH_OR_UNRECOVERABLE_ERROR_SAD,
                  }),
                t
              );
            }))),
        s
      );
    }
    l.initialize = u;
  },
  98,
);
