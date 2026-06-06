__d(
  "WAWebJobsStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebJobsStorageUtils",
    "WAWebSchemaJobs",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      return (
        s == null &&
          (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          o("WAWebJobsStorageUtils").createStorage(),
          o("WAWebSchemaJobs").addTable(),
          (s = o("WAWebJobsStorageUtils")
            .getStorage()
            .initialize()
            .catch(function (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .verbose()
                  .sendLogs("Failed to initialize jobs storage", {
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
      return o("WAWebJobsStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebJobsStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          s = null;
        });
    }
    ((l.initialize = u), (l.destroy = c));
  },
  98,
);
