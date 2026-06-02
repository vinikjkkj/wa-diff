__d(
  "WAWebWorkerStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieBootstrap",
    "WAWebDexieCastTypes",
    "WAWebSchemaDeferredMessagesStorage",
    "WAWebSchemaLocalStorage",
    "WAWebStorage",
    "WAWebWorkerStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      return (
        o("WAWebDexieBootstrap").patchDexie(),
        s == null &&
          (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          o("WAWebWorkerStorageUtils").createStorage(),
          o("WAWebSchemaLocalStorage").addTable(),
          o("WAWebSchemaDeferredMessagesStorage").addTable(),
          (s = o("WAWebWorkerStorageUtils")
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
                        "[worker] Failed to initialize model storage: ",
                        "",
                      ])),
                    n,
                  )
                  .verbose()
                  .sendLogs("failed-to-initialize-model-storage", {
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
    function c() {
      return o("WAWebWorkerStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebWorkerStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          s = null;
        });
    }
    ((l.getLocalStorageTable = o("WAWebSchemaLocalStorage").getTable),
      (l.getDeferredMessagesTable = o(
        "WAWebSchemaDeferredMessagesStorage",
      ).getTable),
      (l.initialize = u),
      (l.destroy = c));
  },
  98,
);
