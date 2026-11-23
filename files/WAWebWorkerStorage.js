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
    var e,
      s = "push-offline-resume-treatment",
      u = "treatment-v1",
      c;
    async function d(t) {
      (t === void 0 && (t = {}),
        o("WAWebDexieBootstrap").patchDexie(),
        c == null &&
          (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          o("WAWebWorkerStorageUtils").createStorage(),
          o("WAWebSchemaLocalStorage").addTable(),
          o("WAWebSchemaDeferredMessagesStorage").addTable(),
          (c = o("WAWebWorkerStorageUtils")
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
        await c,
        t.clearPushOfflineResumeTreatment === !0 &&
          (await o("WAWebSchemaLocalStorage").getTable().bulkRemove([s])));
    }
    async function m() {
      await d();
      var e = await o("WAWebSchemaLocalStorage").getTable().get(s);
      return (e == null ? void 0 : e.value) === u;
    }
    function p() {
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
          c = null;
        });
    }
    ((l.getLocalStorageTable = o("WAWebSchemaLocalStorage").getTable),
      (l.initialize = d),
      (l.hasPushOfflineResumeTreatment = m),
      (l.destroy = p));
  },
  98,
);
