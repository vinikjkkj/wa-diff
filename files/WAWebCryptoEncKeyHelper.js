__d(
  "WAWebCryptoEncKeyHelper",
  [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebDbEncryptionKey",
    "WAWebInvocationInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return (
        s == null && (s = o("WAWebCryptoEncryptionSaltHelper").getOrGenSalt()),
        s
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield u();
          if (!(!e || e.constructor !== Uint8Array))
            return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield u();
          !e ||
            e.constructor !== Uint8Array ||
            o("WAWebInvocationInterface").get().initDatabaseEncnKey(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return (
        o("WAWebBackendWorkerClient").recordInitDbFinalKey({ salt: e }),
        o("WAWebInvocationInterface")
          .get()
          .generateFinalDbEncryptionAndFtsKey(e)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise"))).all([
            o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeys(),
            o("WAWebInvocationInterface").get().deleteDbEncKeyCache(),
          ]);
        })),
        g.apply(this, arguments)
      );
    }
    (o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
      s = (e || (e = n("Promise"))).resolve(null);
    }),
      (l.getSalt = u),
      (l.initEncSalt = c),
      (l.initEncSaltForInvoker = m),
      (l.generateFinalDbEncryptionAndFtsKeyForInvoker = _),
      (l.deleteEncKeysAndCache = f));
  },
  98,
);
