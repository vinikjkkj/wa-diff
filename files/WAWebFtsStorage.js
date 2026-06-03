__d(
  "WAWebFtsStorage",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebFtsStorageConsts",
    "WAWebFtsStorageUtils",
    "WAWebSchemaFtsPurgeRangeQueue",
    "WAWebSchemaFtsV1Index",
    "WAWebSchemaFtsV2Index",
    "WAWebSchemaFtsV2TokenPrefixes",
    "WAWebSchemaFtsV3Index",
    "WAWebSchemaManifest",
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
              o("WAWebFtsStorageUtils").createStorage(),
              o("WAWebSchemaManifest").addTable(),
              o("WAWebSchemaFtsV1Index").deprecateTable(),
              o("WAWebSchemaFtsV2Index").addTable(),
              o("WAWebSchemaFtsV2TokenPrefixes").addTable(),
              o("WAWebSchemaFtsPurgeRangeQueue").addTable(),
              o("WAWebSchemaFtsV3Index").addTable(),
              (s = o("WAWebFtsStorageUtils")
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
                      .sendLogs("Failed to initialize fts storage", {
                        sendLogsType:
                          o("WALogger").SendLogsType
                            .EXTREMELY_BAD_USER_EXPERIENCE_SAD,
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
      return o("WAWebFtsStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebFtsStorageConsts").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          return (
            (s = null),
            o("WAWebDexieCastTypes").dexieCastToPromise(
              new (r("WAWeb-dexie"))("fts-storage-dogfooding").delete(),
            )
          );
        });
    }
    function m() {
      s = null;
    }
    ((l.getManifestTable = o("WAWebSchemaManifest").getTable),
      (l.getPurgeRangeQueueTable = o("WAWebSchemaFtsPurgeRangeQueue").getTable),
      (l.getIndexV3Table = o("WAWebSchemaFtsV3Index").getTable),
      (l.initialize = u),
      (l.destroy = d),
      (l.clearInitializePromise = m));
  },
  98,
);
