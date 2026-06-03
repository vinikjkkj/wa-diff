__d(
  "WAWebWorkerFrontendInterface",
  [
    "Promise",
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebDbEncryptionKey",
    "WAWebInvocationDispatcher",
    "WAWebSchemaVersions",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        setLogoutState: function (t) {
          return (
            (r("WAWebBrokerGlobalAppState").isLogoutInProgress = t),
            (s || (s = n("Promise"))).resolve()
          );
        },
        sendLogs: function (t, n) {
          return r("WAWebInvocationDispatcher").invoke("sendLogs", [t, n]);
        },
        deleteDbEncKeyCache: function () {
          return (s || (s = n("Promise"))).resolve(
            o("WAWebDbEncryptionKey").DbEncKeyStore == null
              ? void 0
              : o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeyCache(),
          );
        },
        initDatabaseEncnKey: function (t) {
          return o("WAWebDbEncryptionKey").DbEncKeyStore
            ? o("WAWebDbEncryptionKey").DbEncKeyStore.init(t)
            : (s || (s = n("Promise"))).resolve();
        },
        generateFinalDbEncryptionAndFtsKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (o("WAWebDbEncryptionKey").DbEncKeyStore)
              return (
                yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit(),
                o(
                  "WAWebDbEncryptionKey",
                ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(e)
              );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        setSchemaVersions: function (r) {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[storage] start setSchemaVersions from fts worker interface",
                ])),
            ),
            o("WAWebSchemaVersions").setSchemaVersions(r),
            (s || (s = n("Promise"))).resolve()
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
