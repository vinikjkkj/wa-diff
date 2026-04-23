__d(
  "WAWebIdbEncryption",
  [
    "invariant",
    "WAWeb-dexie",
    "WAWebDbEncryptionKey",
    "WAWebDexieCastTypes",
    "WAWebIdbAsyncAwaitConfig",
    "WAWebIdbHelpers",
    "WAWebStorageSchema",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["poll-votes", "chat", "sync-keys", "orphan-tc-token"];
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (!o("WAWebDbEncryptionKey").DbEncKeyStore)
              throw r("err")("feature is not yet implemented");
            var i = a
                ? o("WAWebDbEncryptionKey").DbEncKeyStore.getDbMsgEncKeys({
                    tableName: t.tableName,
                  })
                : o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys(),
              l = i[i.length - 1],
              u = new Uint8Array(16);
            self.crypto.getRandomValues(u);
            var c;
            typeof e == "string"
              ? (n === o("WAWebStorageSchema").EncryptedValueType.STRING ||
                  s(0, 87945, t.tableName, t.columnName, typeof e),
                (c = new TextEncoder().encode(e)))
              : (c = e);
            try {
              var d = self.crypto.subtle.encrypt(
                  {
                    iv: u,
                    name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER,
                  },
                  l.key,
                  c,
                ),
                m;
              o("WAWebIdbAsyncAwaitConfig").isAsyncAwaitPrepEnabled() ||
              r("WAWeb-dexie").currentTransaction != null
                ? (m = r("WAWeb-dexie").waitFor(d))
                : (m = d);
              var p = yield o("WAWebDexieCastTypes").dexieCastToPromise(m);
              return { _data: p, iv: u, _keyId: l.id, _scheme: a ? 1 : 0 };
            } catch (e) {
              var _ = r("getErrorSafe")(e);
              throw (
                o("WAWebIdbHelpers").logStorageError(
                  _,
                  "encryptDbMaterial",
                  null,
                ),
                _
              );
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(t, n, r) {
      var a = t._keyId,
        i = t._scheme,
        l = r && !e.includes(n),
        s = e.includes(n) && i === 1;
      return l || s
        ? o("WAWebDbEncryptionKey")
            .DbEncKeyStore.getDbMsgEncKeys({ tableName: n })
            .filter(function (e) {
              return e.id === a;
            })[0]
        : o("WAWebDbEncryptionKey")
            .DbEncKeyStore.getEncKeys()
            .filter(function (e) {
              return e.id === a;
            })[0];
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (!o("WAWebDbEncryptionKey").DbEncKeyStore)
              throw r("err")("feature is not yet implemented");
            var i = e._data,
              l = e.iv,
              u = null;
            if (
              ((u = d(e, t.tableName, a)), u != null || s(0, 56353), i == null)
            )
              return i;
            try {
              var c = self.crypto.subtle.decrypt(
                  {
                    iv: l,
                    name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER,
                  },
                  u.key,
                  i,
                ),
                m =
                  r("WAWeb-dexie").currentTransaction == null
                    ? c
                    : r("WAWeb-dexie").waitFor(c),
                p = yield o("WAWebDexieCastTypes").dexieCastToPromise(m),
                _ =
                  n === o("WAWebStorageSchema").EncryptedValueType.STRING
                    ? new TextDecoder("utf-8").decode(p)
                    : p;
              return _;
            } catch (e) {
              var f = r("getErrorSafe")(e);
              throw (
                o("WAWebIdbHelpers").logStorageError(
                  f,
                  "decryptDbMaterial",
                  null,
                ),
                f
              );
            }
          },
        )),
        p.apply(this, arguments)
      );
    }
    ((l.encryptDbMaterial = u),
      (l.getDecryptionKey = d),
      (l.decryptDbMaterial = m));
  },
  98,
);
