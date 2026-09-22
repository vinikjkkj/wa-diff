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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "push-offline-resume-treatment",
      u = "treatment-v1",
      c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          (t === void 0 && (t = {}),
            o("WAWebDexieBootstrap").patchDexie(),
            c == null &&
              (yield o("WAWebDbRolloutUtil").loadSchemaVersions(),
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
            yield c);
          var a = o("WAWebWorkerStorageUtils")
            .getStorage()
            .table("local_storage");
          if (t.clearPushOfflineResumeTreatment === !0) {
            (yield a.bulkRemove([s]),
              t.onPushOfflineResumeTreatment == null ||
                t.onPushOfflineResumeTreatment(!1));
            return;
          }
          t.onPushOfflineResumeTreatment == null ||
            t.onPushOfflineResumeTreatment(
              ((n = yield a.get(s)) == null ? void 0 : n.value) === u,
            );
        })),
        m.apply(this, arguments)
      );
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
      (l.destroy = p));
  },
  98,
);
