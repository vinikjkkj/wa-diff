__d(
  "WAWebCryptoEncKeyHelper",
  [
    "WAWebBackendEventBus",
    "WAWebBackendWorkerInitState",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebDbEncryptionKey",
    "WAWebInvocationInterface",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        e == null && (e = o("WAWebCryptoEncryptionSaltHelper").getOrGenSalt()),
        e
      );
    }
    async function u() {
      var e = await s();
      if (!(!e || e.constructor !== Uint8Array))
        return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
    }
    async function c() {
      var e = await s();
      !e ||
        e.constructor !== Uint8Array ||
        o("WAWebInvocationInterface").get().initDatabaseEncnKey(e);
    }
    function d(e) {
      return (
        o("WAWebBackendWorkerInitState").recordInitDbFinalKey({ salt: e }),
        o("WAWebInvocationInterface")
          .get()
          .generateFinalDbEncryptionAndFtsKey(e)
      );
    }
    async function m() {
      await Promise.all([
        o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeys(),
        o("WAWebInvocationInterface").get().deleteDbEncKeyCache(),
      ]);
    }
    (o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
      e = Promise.resolve(null);
    }),
      (l.getSalt = s),
      (l.initEncSalt = u),
      (l.initEncSaltForInvoker = c),
      (l.generateFinalDbEncryptionAndFtsKeyForInvoker = d),
      (l.deleteEncKeysAndCache = m));
  },
  98,
);
