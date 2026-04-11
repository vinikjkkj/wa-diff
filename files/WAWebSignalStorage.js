__d(
  "WAWebSignalStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebSchemaBasekey",
    "WAWebSchemaIdentity",
    "WAWebSchemaMeta",
    "WAWebSchemaPrekey",
    "WAWebSchemaSenderkey",
    "WAWebSchemaSession",
    "WAWebSchemaSignedPrekey",
    "WAWebSignalStorageUtils",
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
              o("WAWebSignalStorageUtils").createStorage(),
              o("WAWebSchemaBasekey").addTable(),
              o("WAWebSchemaIdentity").addTable(),
              o("WAWebSchemaMeta").addTable(),
              o("WAWebSchemaPrekey").addTable(),
              o("WAWebSchemaSenderkey").addTable(),
              o("WAWebSchemaSession").addTable(),
              o("WAWebSchemaSignedPrekey").addTable(),
              (s = o("WAWebSignalStorageUtils")
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
                      .sendLogs("Failed to initialize signal storage", {
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
      return o("WAWebSignalStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebSignalStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          s = null;
        });
    }
    ((l.getBaseKeyTable = o("WAWebSchemaBasekey").getTable),
      (l.getIdentityTable = o("WAWebSchemaIdentity").getTable),
      (l.getMetaTable = o("WAWebSchemaMeta").getTable),
      (l.getPreKeyTable = o("WAWebSchemaPrekey").getTable),
      (l.getSenderKeyTable = o("WAWebSchemaSenderkey").getTable),
      (l.getSessionTable = o("WAWebSchemaSession").getTable),
      (l.getSignedPreKeyTable = o("WAWebSchemaSignedPrekey").getTable),
      (l.initialize = u),
      (l.destroy = d));
  },
  98,
);
