__d(
  "WAWebDbEncryptionKey",
  [
    "invariant",
    "WABase64",
    "WALogger",
    "WAResolvable",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebDexieCastTypes",
    "WAWebMiscErrors",
    "WAWebPageLoadLogging",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "wawc_db_enc",
      c = "keys",
      d = 128,
      m = { name: "HKDF" },
      p = { hash: "SHA-256" },
      _ = o("WATimeUtils").WEEK_MILLISECONDS * 4 * 24,
      f = "fts_hmac_keys",
      g = "AES-CBC",
      h = (function () {
        function t() {
          var t = this;
          ((this.$6 = new (o("WAResolvable").Resolvable)()),
            (this.$7 = new (o("WAResolvable").Resolvable)()),
            (this.$9 = new (o("WAResolvable").Resolvable)()),
            (this.$11 = function (e) {
              return t
                .$10()
                .keys.orderBy("id")
                .toArray()
                .then(function (n) {
                  if (!n || n.length === 0) return t.$13(e);
                  var r = n[n.length - 1]._expiration;
                  if (r != null && r <= new Date().getTime()) return t.$13(e);
                  t.$8 = e;
                  var o = n.map(async function (t) {
                    var n = await self.crypto.subtle.deriveKey(
                      babelHelpers.extends({}, m, p, {
                        salt: e,
                        info: new Uint8Array(1),
                      }),
                      t.key,
                      { name: g, length: d },
                      !1,
                      ["encrypt", "decrypt"],
                    );
                    return babelHelpers.extends({}, t, { key: n });
                  });
                  return Promise.all(o).then(function (e) {
                    t.$2 = e;
                  });
                });
            }),
            (this.$12 = function () {
              return t
                .$10()
                [f].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$14();
                  if (e.length > 1)
                    throw new (o("WAWebMiscErrors").DBInvalidFtsHMACKey)();
                  t.$4 = e[e.length - 1];
                });
            }),
            (this.$13 = function (e) {
              return y().then(function (n) {
                return t
                  .$10()
                  .keys.add({ key: n, _expiration: new Date().getTime() + _ })
                  .then(function () {
                    return t.$11(e);
                  });
              });
            }),
            (this.$14 = function () {
              return y().then(function (e) {
                return t
                  .$10()
                  [f].add({ key: e })
                  .then(function () {
                    return t.$12();
                  });
              });
            }),
            (this.generateFinalDbEncryptionAndFtsKey = function (e) {
              if (t.$3 != null || t.$8 == null) return Promise.resolve();
              var n = o("WABase64").decodeB64(e);
              return (t.$15(n), t.$16(n), Promise.resolve());
            }),
            (this.$16 = function (e) {
              o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "generateFinalDbMsgEncryptionKey",
              );
              var n = t
                .$10()
                .keys.orderBy("id")
                .toArray()
                .then(function (n) {
                  var r = n.map(async function (n) {
                    t.$8 != null || s(0, 56319);
                    var r;
                    try {
                      r = await self.crypto.subtle.deriveKey(
                        babelHelpers.extends({}, m, p, {
                          salt: e,
                          info: new Uint8Array(t.$8 || 0),
                        }),
                        n.key,
                        { name: g, length: d },
                        !1,
                        ["encrypt", "decrypt"],
                      );
                    } catch (e) {
                      throw ((t.$8 = null), e);
                    }
                    return babelHelpers.extends({}, n, { key: r });
                  });
                  return Promise.all(r).then(function (e) {
                    ((t.$8 = null), (t.$3 = e), t.$6.resolve());
                  });
                });
              return n.finally(function () {
                (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "generateFinalDbMsgEncryptionKey",
                ),
                  (t.$8 = null));
              });
            }),
            (this.$15 = async function (n) {
              if (!t.$4 || t.$4.key == null || t.$4.id == null)
                throw (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Base ftsHMACKey is null in _generateFinalFtsHmacKey",
                      ])),
                  ),
                  new (o("WAWebMiscErrors").DBInvalidFtsHMACKey)()
                );
              var r = [t.$4.id, t.$4.key],
                a = r[0],
                i = r[1],
                l = await self.crypto.subtle.deriveKey(
                  babelHelpers.extends({}, m, p, {
                    salt: n,
                    info: new Uint8Array(0),
                  }),
                  i,
                  { name: "HMAC", hash: "SHA-256" },
                  !1,
                  ["sign"],
                );
              ((t.$5 = { id: a, key: l }), t.$7.resolve());
            }));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            var e,
              n,
              a = this;
            if (this.$1) return Promise.resolve();
            ((this.$1 = new (r("WAWeb-dexie"))(u, {
              chromeTransactionDurability: "relaxed",
              addons: [],
            })),
              this.$10()
                .version(1)
                .stores(
                  ((e = {}), (e[c] = "++id, _expirtation"), (e[f] = "++id"), e),
                ),
              this.$10()
                .version(2)
                .stores(((n = {}), (n[c] = "++id"), (n[f] = "++id"), n)));
            var i = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$10().open())
              .then(function () {
                return Promise.all([a.$11(i), a.$12()]);
              })
              .then(function () {
                return a.$9.resolve();
              });
          }),
          (n.$10 = function () {
            if (this.$1 == null)
              throw r("err")("[db_encryption_key] db is not initialized");
            return this.$1;
          }),
          (n.deleteKeys = function () {
            var e = this;
            return Promise.all([
              this.$10().table(c).clear(),
              this.$10().table(f).clear(),
            ])
              .then(function () {})
              .finally(function () {
                return (
                  (e.$1 = null),
                  o("WAWebDexieCastTypes")
                    .dexieCastToPromise(r("WAWeb-dexie").delete(u))
                    .catch(function () {
                      return r("WAWeb-dexie").delete(u);
                    })
                );
              });
          }),
          (n.resetDB = function () {
            var e;
            ((e = this.$1) == null || e.close(), (this.$1 = null));
          }),
          (n.deleteKeyCache = function () {
            ((this.$2 = null),
              (this.$4 = null),
              (this.$3 = null),
              (this.$6 = new (o("WAResolvable").Resolvable)()),
              (this.$7 = new (o("WAResolvable").Resolvable)()),
              (this.$5 = null),
              (this.$8 = null),
              (this.$9 = new (o("WAResolvable").Resolvable)()));
          }),
          (n.setFinalDbMsgEncKeys_TESTONLY = function (t) {
            this.$3 = t;
          }),
          (n.setKeys_TESTONLY = function (t) {
            this.$2 = t;
          }),
          (n.waitForFinalDbMsgEncKey = function () {
            return this.$6.promise;
          }),
          (n.waitForFinalFtsHmacKey = function () {
            return this.$7.promise;
          }),
          (n.waitForInit = function () {
            return this.$9.promise;
          }),
          (n.getEncKeys = function () {
            if (!this.$2) throw new (o("WAWebMiscErrors").DbEncKeyNotLoaded)(c);
            return this.$2;
          }),
          (n.getDbMsgEncKeys = function (t) {
            if (!this.$3)
              throw new (o("WAWebMiscErrors").DbMsgEncKeyNotLoaded)(
                t.tableName,
              );
            return this.$3;
          }),
          (n.getFtsHMACKey = function () {
            if (!this.$5) throw new (o("WAWebMiscErrors").DbEncKeyNotLoaded)(f);
            return this.$5;
          }),
          t
        );
      })();
    function y() {
      var e = new Uint8Array(d);
      return (
        self.crypto.getRandomValues(e),
        self.crypto.subtle.importKey("raw", e, m, !1, ["deriveKey"])
      );
    }
    var C = new h();
    ((l.DB_ENCRYPTION_CIPHER = g), (l.DbEncKeyStore = C));
  },
  98,
);
