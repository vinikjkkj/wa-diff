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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      return (
        s == null &&
          (await o("WAWebDbRolloutUtil").loadSchemaVersions(),
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
    }
    function c() {
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
      (l.destroy = c));
  },
  98,
);
