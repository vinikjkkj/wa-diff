__d(
  "WAWebWorkerFrontendInterface",
  [
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebDbEncryptionKey",
    "WAWebInvocationDispatcher",
    "WAWebSchemaVersions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        setLogoutState: function (t) {
          return (
            (r("WAWebBrokerGlobalAppState").isLogoutInProgress = t),
            Promise.resolve()
          );
        },
        sendLogs: function (t, n) {
          return r("WAWebInvocationDispatcher").invoke("sendLogs", [t, n]);
        },
        deleteDbEncKeyCache: function () {
          return Promise.resolve(
            o("WAWebDbEncryptionKey").DbEncKeyStore == null
              ? void 0
              : o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeyCache(),
          );
        },
        initDatabaseEncnKey: function (t) {
          return o("WAWebDbEncryptionKey").DbEncKeyStore
            ? o("WAWebDbEncryptionKey").DbEncKeyStore.init(t)
            : Promise.resolve();
        },
        generateFinalDbEncryptionAndFtsKey: async function (t) {
          if (o("WAWebDbEncryptionKey").DbEncKeyStore)
            return (
              await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit(),
              o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(t)
            );
        },
        setSchemaVersions: function (n) {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] start setSchemaVersions from fts worker interface",
                ])),
            ),
            o("WAWebSchemaVersions").setSchemaVersions(n),
            Promise.resolve()
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
