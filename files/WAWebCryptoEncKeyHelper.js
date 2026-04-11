__d(
  "WAWebCryptoEncKeyHelper",
  [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebCryptoEncryptionSaltHelper",
    "WAWebDbEncryptionKey",
    "WAWebInvocationInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s == null &&
            (s = o("WAWebCryptoEncryptionSaltHelper").getOrGenSalt());
          var e = yield s;
          if (!(!e || e.constructor !== Uint8Array))
            return o("WAWebDbEncryptionKey").DbEncKeyStore.init(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s == null &&
            (s = o("WAWebCryptoEncryptionSaltHelper").getOrGenSalt());
          var e = yield s;
          !e ||
            e.constructor !== Uint8Array ||
            o("WAWebInvocationInterface").get().initDatabaseEncnKey(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return o("WAWebInvocationInterface")
        .get()
        .generateFinalDbEncryptionAndFtsKey(e);
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise"))).all([
            o("WAWebDbEncryptionKey").DbEncKeyStore.deleteKeys(),
            o("WAWebInvocationInterface").get().deleteDbEncKeyCache(),
          ]);
        })),
        f.apply(this, arguments)
      );
    }
    (o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
      s = (e || (e = n("Promise"))).resolve(null);
    }),
      (l.initEncSalt = u),
      (l.initEncSaltForInvoker = d),
      (l.generateFinalDbEncryptionAndFtsKeyForInvoker = p),
      (l.deleteEncKeysAndCache = _));
  },
  98,
);
