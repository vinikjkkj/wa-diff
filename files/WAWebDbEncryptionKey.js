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
    "WAWebDbErrors",
    "WAWebDexieCastTypes",
    "WAWebPageLoadLogging",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = "wawc_db_enc",
      p = "keys",
      _ = 128,
      f = { name: "HKDF" },
      g = { hash: "SHA-256" },
      h = o("WATimeUtils").WEEK_MILLISECONDS * 4 * 24,
      y = "fts_hmac_keys",
      C = "worm_ear_keys",
      b = 256,
      v = "worm-ear-v1",
      S = "AES-CBC",
      R = (function () {
        function t() {
          var t = this,
            a;
          ((this.$8 = new (a = o("WAResolvable")).Resolvable()),
            (this.$9 = new a.Resolvable()),
            (this.$10 = new a.Resolvable()),
            (this.$12 = new a.Resolvable()),
            (this.$14 = function (e) {
              return t
                .$13()
                .keys.orderBy("id")
                .toArray()
                .then(function (r) {
                  if (!r || r.length === 0) return t.$17(e);
                  var o = r[r.length - 1]._expiration;
                  if (o != null && o <= Date.now()) return t.$17(e);
                  t.$11 = e;
                  var a = r.map(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          var n = yield self.crypto.subtle.deriveKey(
                            babelHelpers.extends({}, f, g, {
                              salt: e,
                              info: new Uint8Array(1),
                            }),
                            t.key,
                            { name: S, length: _ },
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
                  return (d || (d = n("Promise"))).all(a).then(function (e) {
                    t.$2 = e;
                  });
                });
            }),
            (this.$15 = function () {
              return t
                .$13()
                [y].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$18();
                  if (e.length > 1)
                    throw new (o("WAWebDbErrors").DBInvalidFtsHMACKey)();
                  t.$4 = e[e.length - 1];
                });
            }),
            (this.$17 = function (e) {
              return L().then(function (n) {
                return t
                  .$13()
                  .keys.add({ key: n, _expiration: Date.now() + h })
                  .then(function () {
                    return t.$14(e);
                  });
              });
            }),
            (this.$18 = function () {
              return L().then(function (e) {
                return t
                  .$13()
                  [y].add({ key: e })
                  .then(function () {
                    return t.$15();
                  });
              });
            }),
            (this.$16 = function () {
              return t
                .$13()
                [C].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$19();
                  t.$6 = e[e.length - 1].key;
                });
            }),
            (this.$19 = function () {
              return E().then(function (e) {
                return t
                  .$13()
                  [C].add({ key: e })
                  .then(function () {
                    return t.$16();
                  });
              });
            }),
            (this.generateFinalDbEncryptionAndFtsKey = function (a) {
              if (t.$3 != null || t.$11 == null)
                return (d || (d = n("Promise"))).resolve();
              var i = o("WABase64").decodeB64(a);
              return (
                t.$20(i),
                t.$21(i),
                t.$22(i).catch(function (n) {
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to derive the final wormEarKey",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n))
                    .sendLogs("worm-ear-key-derive-failed"),
                    t.$10.resolve());
                }),
                (d || (d = n("Promise"))).resolve()
              );
            }),
            (this.$22 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = t.$6;
                  if (n == null)
                    throw (
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Base wormEarKey is null in generateFinalWormEarKey",
                            ])),
                        )
                        .sendLogs("worm-ear-key-base-missing"),
                      new (o("WAWebDbErrors").DbEncKeyNotLoaded)(C)
                    );
                  ((t.$7 = yield globalThis.crypto.subtle.deriveBits(
                    babelHelpers.extends({}, f, g, {
                      salt: e,
                      info: new TextEncoder().encode(v),
                    }),
                    n,
                    b,
                  )),
                    t.$10.resolve());
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$21 = function (e) {
              o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "generateFinalDbMsgEncryptionKey",
              );
              var r = t
                .$13()
                .keys.orderBy("id")
                .toArray()
                .then(function (r) {
                  var o = r.map(
                    (function () {
                      var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          t.$11 != null || s(0, 56319);
                          var r;
                          try {
                            r = yield self.crypto.subtle.deriveKey(
                              babelHelpers.extends({}, f, g, {
                                salt: e,
                                info: new Uint8Array(t.$11 || 0),
                              }),
                              n.key,
                              { name: S, length: _ },
                              !1,
                              ["encrypt", "decrypt"],
                            );
                          } catch (e) {
                            throw ((t.$11 = null), e);
                          }
                          return babelHelpers.extends({}, n, { key: r });
                        },
                      );
                      return function (e) {
                        return r.apply(this, arguments);
                      };
                    })(),
                  );
                  return (d || (d = n("Promise"))).all(o).then(function (e) {
                    ((t.$11 = null), (t.$3 = e), t.$8.resolve());
                  });
                });
              return r.finally(function () {
                (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "generateFinalDbMsgEncryptionKey",
                ),
                  (t.$11 = null));
              });
            }),
            (this.$20 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (!t.$4 || t.$4.key == null || t.$4.id == null)
                    throw (
                      o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Base ftsHMACKey is null in _generateFinalFtsHmacKey",
                          ])),
                      ),
                      new (o("WAWebDbErrors").DBInvalidFtsHMACKey)()
                    );
                  var n = [t.$4.id, t.$4.key],
                    r = n[0],
                    a = n[1],
                    i = yield self.crypto.subtle.deriveKey(
                      babelHelpers.extends({}, f, g, {
                        salt: e,
                        info: new Uint8Array(0),
                      }),
                      a,
                      { name: "HMAC", hash: "SHA-256" },
                      !1,
                      ["sign"],
                    );
                  ((t.$5 = { id: r, key: i }), t.$9.resolve());
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()));
        }
        var a = t.prototype;
        return (
          (a.init = function (t) {
            var e,
              a,
              i,
              l = this;
            if (this.$1) return (d || (d = n("Promise"))).resolve();
            ((this.$1 = new (r("WAWeb-dexie"))(m, {
              chromeTransactionDurability: "relaxed",
              addons: [],
            })),
              this.$13()
                .version(1)
                .stores(
                  ((e = {}), (e[p] = "++id, _expirtation"), (e[y] = "++id"), e),
                ),
              this.$13()
                .version(2)
                .stores(((a = {}), (a[p] = "++id"), (a[y] = "++id"), a)),
              this.$13()
                .version(3)
                .stores(
                  ((i = {}),
                  (i[p] = "++id"),
                  (i[y] = "++id"),
                  (i[C] = "++id"),
                  i),
                ));
            var s = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$13().open())
              .then(function () {
                return (d || (d = n("Promise"))).all([
                  l.$14(s),
                  l.$15(),
                  l.$16(),
                ]);
              })
              .then(function () {
                return l.$12.resolve();
              });
          }),
          (a.$13 = function () {
            if (this.$1 == null)
              throw r("err")("[db_encryption_key] db is not initialized");
            return this.$1;
          }),
          (a.deleteKeys = function () {
            var e = this;
            return (d || (d = n("Promise")))
              .all([
                this.$13().table(p).clear(),
                this.$13().table(y).clear(),
                this.$13().table(C).clear(),
              ])
              .then(function () {})
              .finally(function () {
                return (
                  (e.$1 = null),
                  o("WAWebDexieCastTypes")
                    .dexieCastToPromise(r("WAWeb-dexie").delete(m))
                    .catch(function () {
                      return r("WAWeb-dexie").delete(m);
                    })
                );
              });
          }),
          (a.resetDB = function () {
            var e;
            ((e = this.$1) == null || e.close(), (this.$1 = null));
          }),
          (a.deleteKeyCache = function () {
            var e;
            ((this.$2 = null),
              (this.$4 = null),
              (this.$3 = null),
              (this.$8 = new (e = o("WAResolvable")).Resolvable()),
              (this.$9 = new e.Resolvable()),
              (this.$10 = new e.Resolvable()),
              (this.$5 = null),
              (this.$6 = null),
              (this.$7 = null),
              (this.$11 = null),
              (this.$12 = new e.Resolvable()));
          }),
          (a.setFinalDbMsgEncKeys_TESTONLY = function (t) {
            this.$3 = t;
          }),
          (a.setKeys_TESTONLY = function (t) {
            this.$2 = t;
          }),
          (a.waitForFinalDbMsgEncKey = function () {
            return this.$8.promise;
          }),
          (a.waitForFinalFtsHmacKey = function () {
            return this.$9.promise;
          }),
          (a.waitForWormEarKey = function () {
            return this.$10.promise;
          }),
          (a.waitForInit = function () {
            return this.$12.promise;
          }),
          (a.getEncKeys = function () {
            if (!this.$2) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(p);
            return this.$2;
          }),
          (a.getDbMsgEncKeys = function (t) {
            if (!this.$3)
              throw new (o("WAWebDbErrors").DbMsgEncKeyNotLoaded)(t.tableName);
            return this.$3;
          }),
          (a.getFtsHMACKey = function () {
            if (!this.$5) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(y);
            return this.$5;
          }),
          (a.getWormEarKey = function () {
            if (!this.$7) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(C);
            return this.$7;
          }),
          t
        );
      })();
    function L() {
      var e = new Uint8Array(_);
      return (
        self.crypto.getRandomValues(e),
        self.crypto.subtle.importKey("raw", e, f, !1, ["deriveKey"])
      );
    }
    function E() {
      var e = new Uint8Array(_);
      return (
        globalThis.crypto.getRandomValues(e),
        globalThis.crypto.subtle.importKey("raw", e, f.name, !1, ["deriveBits"])
      );
    }
    var k = new R();
    ((l.DB_ENCRYPTION_CIPHER = S), (l.DbEncKeyStore = k));
  },
  98,
);
