__d(
  "WAWebLoadgenStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDexieCastTypes",
    "WAWebLoadgenStorageUtils",
    "WAWebSchemaFtsLoadgenMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return (
        s == null &&
          (o("WAWebLoadgenStorageUtils").createStorage(),
          o("WAWebSchemaFtsLoadgenMetadata").addTable(),
          (s = o("WAWebLoadgenStorageUtils")
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
                  .sendLogs("Failed to initialize loadgen storage", {
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
      return o("WAWebLoadgenStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebLoadgenStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        });
    }
    function d() {
      s = null;
    }
    var m = { initialize: u, destroy: c, clearInitializePromise: d };
    l.default = m;
  },
  98,
);
