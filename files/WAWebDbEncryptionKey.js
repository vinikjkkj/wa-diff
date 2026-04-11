__d(
  "WAWebDbEncryptionKey",
  [
    "invariant",
    "Promise",
    "WABase64",
    "WALogger",
    "WAResolvable",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebDexieCastTypes",
    "WAWebMiscErrors",
    "WAWebPageLoadLogging",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = "wawc_db_enc",
      d = "keys",
      m = 128,
      p = { name: "HKDF" },
      _ = { hash: "SHA-256" },
      f = o("WATimeUtils").WEEK_MILLISECONDS * 4 * 24,
      g = "fts_hmac_keys",
      h = "AES-CBC",
      y = (function () {
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
                .then(function (r) {
                  if (!r || r.length === 0) return t.$13(e);
                  var o = r[r.length - 1]._expiration;
                  if (o != null && o <= new Date().getTime()) return t.$13(e);
                  t.$8 = e;
                  var a = r.map(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          var n = yield self.crypto.subtle.deriveKey(
                            babelHelpers.extends({}, p, _, {
                              salt: e,
                              info: new Uint8Array(1),
                            }),
                            t.key,
                            { name: h, length: m },
                            !1,
                            ["encrypt", "decrypt"],
                          );
                          return babelHelpers.extends({}, t, { key: n });
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  );
                  return (u || (u = n("Promise"))).all(a).then(function (e) {
                    t.$2 = e;
                  });
                });
            }),
            (this.$12 = function () {
              return t
                .$10()
                [g].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$14();
                  if (e.length > 1)
                    throw new (o("WAWebMiscErrors").DBInvalidFtsHMACKey)();
                  t.$4 = e[e.length - 1];
                });
            }),
            (this.$13 = function (e) {
              return C().then(function (n) {
                return t
                  .$10()
                  .keys.add({ key: n, _expiration: new Date().getTime() + f })
                  .then(function () {
                    return t.$11(e);
                  });
              });
            }),
            (this.$14 = function () {
              return C().then(function (e) {
                return t
                  .$10()
                  [g].add({ key: e })
                  .then(function () {
                    return t.$12();
                  });
              });
            }),
            (this.generateFinalDbEncryptionAndFtsKey = function (e) {
              if (t.$3 != null || t.$8 == null)
                return (u || (u = n("Promise"))).resolve();
              var r = o("WABase64").decodeB64(e);
              return (t.$15(r), t.$16(r), (u || (u = n("Promise"))).resolve());
            }),
            (this.$16 = function (e) {
              o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "generateFinalDbMsgEncryptionKey",
              );
              var r = t
                .$10()
                .keys.orderBy("id")
                .toArray()
                .then(function (r) {
                  var o = r.map(
                    (function () {
                      var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          t.$8 != null || s(0, 56319);
                          var r;
                          try {
                            r = yield self.crypto.subtle.deriveKey(
                              babelHelpers.extends({}, p, _, {
                                salt: e,
                                info: new Uint8Array(t.$8 || 0),
                              }),
                              n.key,
                              { name: h, length: m },
                              !1,
                              ["encrypt", "decrypt"],
                            );
                          } catch (e) {
                            throw ((t.$8 = null), e);
                          }
                          return babelHelpers.extends({}, n, { key: r });
                        },
                      );
                      return function (e) {
                        return r.apply(this, arguments);
                      };
                    })(),
                  );
                  return (u || (u = n("Promise"))).all(o).then(function (e) {
                    ((t.$8 = null), (t.$3 = e), t.$6.resolve());
                  });
                });
              return r.finally(function () {
                (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "generateFinalDbMsgEncryptionKey",
                ),
                  (t.$8 = null));
              });
            }),
            (this.$15 = (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
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
                    l = yield self.crypto.subtle.deriveKey(
                      babelHelpers.extends({}, p, _, {
                        salt: n,
                        info: new Uint8Array(0),
                      }),
                      i,
                      { name: "HMAC", hash: "SHA-256" },
                      !1,
                      ["sign"],
                    );
                  ((t.$5 = { id: a, key: l }), t.$7.resolve());
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })()));
        }
        var a = t.prototype;
        return (
          (a.init = function (t) {
            var e,
              a,
              i = this;
            if (this.$1) return (u || (u = n("Promise"))).resolve();
            ((this.$1 = new (r("WAWeb-dexie"))(c, {
              chromeTransactionDurability: "relaxed",
              addons: [],
            })),
              this.$10()
                .version(1)
                .stores(
                  ((e = {}), (e[d] = "++id, _expirtation"), (e[g] = "++id"), e),
                ),
              this.$10()
                .version(2)
                .stores(((a = {}), (a[d] = "++id"), (a[g] = "++id"), a)));
            var l = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$10().open())
              .then(function () {
                return (u || (u = n("Promise"))).all([i.$11(l), i.$12()]);
              })
              .then(function () {
                return i.$9.resolve();
              });
          }),
          (a.$10 = function () {
            if (this.$1 == null)
              throw r("err")("[db_encryption_key] db is not initialized");
            return this.$1;
          }),
          (a.deleteKeys = function () {
            var e = this;
            return (u || (u = n("Promise")))
              .all([this.$10().table(d).clear(), this.$10().table(g).clear()])
              .then(function () {})
              .finally(function () {
                return (
                  (e.$1 = null),
                  o("WAWebDexieCastTypes")
                    .dexieCastToPromise(r("WAWeb-dexie").delete(c))
                    .catch(function () {
                      return r("WAWeb-dexie").delete(c);
                    })
                );
              });
          }),
          (a.resetDB = function () {
            var e;
            ((e = this.$1) == null || e.close(), (this.$1 = null));
          }),
          (a.deleteKeyCache = function () {
            ((this.$2 = null),
              (this.$4 = null),
              (this.$3 = null),
              (this.$6 = new (o("WAResolvable").Resolvable)()),
              (this.$7 = new (o("WAResolvable").Resolvable)()),
              (this.$5 = null),
              (this.$8 = null),
              (this.$9 = new (o("WAResolvable").Resolvable)()));
          }),
          (a.setFinalDbMsgEncKeys_TESTONLY = function (t) {
            this.$3 = t;
          }),
          (a.setKeys_TESTONLY = function (t) {
            this.$2 = t;
          }),
          (a.waitForFinalDbMsgEncKey = function () {
            return this.$6.promise;
          }),
          (a.waitForFinalFtsHmacKey = function () {
            return this.$7.promise;
          }),
          (a.waitForInit = function () {
            return this.$9.promise;
          }),
          (a.getEncKeys = function () {
            if (!this.$2) throw new (o("WAWebMiscErrors").DbEncKeyNotLoaded)(d);
            return this.$2;
          }),
          (a.getDbMsgEncKeys = function (t) {
            if (!this.$3)
              throw new (o("WAWebMiscErrors").DbMsgEncKeyNotLoaded)(
                t.tableName,
              );
            return this.$3;
          }),
          (a.getFtsHMACKey = function () {
            if (!this.$5) throw new (o("WAWebMiscErrors").DbEncKeyNotLoaded)(g);
            return this.$5;
          }),
          t
        );
      })();
    function C() {
      var e = new Uint8Array(m);
      return (
        self.crypto.getRandomValues(e),
        self.crypto.subtle.importKey("raw", e, p, !1, ["deriveKey"])
      );
    }
    var b = new y();
    ((l.DB_ENCRYPTION_CIPHER = h), (l.DbEncKeyStore = b));
  },
  98,
);
