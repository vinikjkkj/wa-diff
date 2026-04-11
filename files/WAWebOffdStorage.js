__d(
  "WAWebOffdStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebOffdStorageUtils",
    "WAWebSchemaDanglingReceipt",
    "WAWebSchemaPeerReadReceipt",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSchemaReadReceipt",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            s == null &&
              (yield o("WAWebDbRolloutUtil").loadSchemaVersions(),
              o("WAWebOffdStorageUtils").createStorage(),
              o("WAWebSchemaReadReceipt").addTable(),
              o("WAWebSchemaDanglingReceipt").addTable(),
              o("WAWebSchemaPeerReadReceipt").addTable(),
              o("WAWebSchemaPendingDeviceSync").addTable(),
              (s = o("WAWebOffdStorageUtils")
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
                      .sendLogs("Failed to initialize offd storage", {
                        sendLogsType:
                          o("WALogger").SendLogsType
                            .CRASH_OR_UNRECOVERABLE_ERROR_SAD,
                      }),
                    t
                  );
                }))),
            s
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return o("WAWebOffdStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebOffdStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          s = null;
        });
    }
    ((l.initialize = u), (l.destroy = d));
  },
  98,
);
