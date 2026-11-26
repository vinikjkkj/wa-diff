__d(
  "WAWebDbEncryptionKey",
  [
    "invariant",
    "WABase64",
    "WALogger",
    "WAResolvable",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebDbErrors",
    "WAWebDexieCastTypes",
    "WAWebDexieObservability",
    "WAWebPageLoadLogging",
    "WAWebStorageCmd",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = "wawc_db_enc",
      m = "keys",
      p = 128,
      _ = { name: "HKDF" },
      f = { hash: "SHA-256" },
      g = o("WATimeUtils").WEEK_MILLISECONDS * 4 * 24,
      h = "fts_hmac_keys",
      y = "worm_ear_keys",
      C = 256,
      b = "worm-ear-v1",
      v = "AES-CBC",
      S = (function () {
        function t() {
          var t = this,
            n;
          ((this.$8 = new (n = o("WAResolvable")).Resolvable()),
            (this.$9 = new n.Resolvable()),
            (this.$10 = new n.Resolvable()),
            (this.$12 = new n.Resolvable()),
            (this.$14 = function (e) {
              return t
                .$13()
                .keys.orderBy("id")
                .toArray()
                .then(function (n) {
                  if (!n || n.length === 0) return t.$17(e);
                  var r = n[n.length - 1]._expiration;
                  if (r != null && r <= Date.now()) return t.$17(e);
                  t.$11 = e;
                  var o = n.map(async function (t) {
                    var n = await self.crypto.subtle.deriveKey(
                      babelHelpers.extends({}, _, f, {
                        salt: e,
                        info: new Uint8Array(1),
                      }),
                      t.key,
                      { name: v, length: p },
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
            (this.$15 = function () {
              return t
                .$13()
                [h].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$18();
                  if (e.length > 1)
                    throw new (o("WAWebDbErrors").DBInvalidFtsHMACKey)();
                  t.$4 = e[e.length - 1];
                });
            }),
            (this.$17 = function (e) {
              return R().then(function (n) {
                return t
                  .$13()
                  .keys.add({ key: n, _expiration: Date.now() + g })
                  .then(function () {
                    return t.$14(e);
                  });
              });
            }),
            (this.$18 = function () {
              return R().then(function (e) {
                return t
                  .$13()
                  [h].add({ key: e })
                  .then(function () {
                    return t.$15();
                  });
              });
            }),
            (this.$16 = function () {
              return t
                .$13()
                [y].orderBy("id")
                .toArray()
                .then(function (e) {
                  if (!e || e.length === 0) return t.$19();
                  t.$6 = e[e.length - 1].key;
                });
            }),
            (this.$19 = function () {
              return L().then(function (e) {
                return t
                  .$13()
                  [y].add({ key: e })
                  .then(function () {
                    return t.$16();
                  });
              });
            }),
            (this.generateFinalDbEncryptionAndFtsKey = function (n) {
              if (t.$3 != null || t.$11 == null) return Promise.resolve();
              var a = o("WABase64").decodeB64(n);
              return (
                t.$20(a),
                t.$21(a),
                t.$22(a).catch(function (n) {
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
                Promise.resolve()
              );
            }),
            (this.$22 = async function (e) {
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
                  new (o("WAWebDbErrors").DbEncKeyNotLoaded)(y)
                );
              ((t.$7 = await globalThis.crypto.subtle.deriveBits(
                babelHelpers.extends({}, _, f, {
                  salt: e,
                  info: new TextEncoder().encode(b),
                }),
                n,
                C,
              )),
                t.$10.resolve());
            }),
            (this.$21 = function (e) {
              o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "generateFinalDbMsgEncryptionKey",
              );
              var n = t
                .$13()
                .keys.orderBy("id")
                .toArray()
                .then(function (n) {
                  var r = n.map(async function (n) {
                    t.$11 != null || s(0, 56319);
                    var r;
                    try {
                      r = await self.crypto.subtle.deriveKey(
                        babelHelpers.extends({}, _, f, {
                          salt: e,
                          info: new Uint8Array(t.$11 || 0),
                        }),
                        n.key,
                        { name: v, length: p },
                        !1,
                        ["encrypt", "decrypt"],
                      );
                    } catch (e) {
                      throw ((t.$11 = null), e);
                    }
                    return babelHelpers.extends({}, n, { key: r });
                  });
                  return Promise.all(r).then(function (e) {
                    ((t.$11 = null), (t.$3 = e), t.$8.resolve());
                  });
                });
              return n.finally(function () {
                (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "generateFinalDbMsgEncryptionKey",
                ),
                  (t.$11 = null));
              });
            }),
            (this.$20 = async function (e) {
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
                i = await self.crypto.subtle.deriveKey(
                  babelHelpers.extends({}, _, f, {
                    salt: e,
                    info: new Uint8Array(0),
                  }),
                  a,
                  { name: "HMAC", hash: "SHA-256" },
                  !1,
                  ["sign"],
                );
              ((t.$5 = { id: r, key: i }), t.$9.resolve());
            }));
        }
        var n = t.prototype;
        return (
          (n.init = function (t) {
            var e,
              n,
              a,
              i = this;
            if (this.$1) return Promise.resolve();
            ((this.$1 = new (r("WAWeb-dexie"))(d, {
              chromeTransactionDurability: "relaxed",
              addons: [],
            })),
              o("WAWebDexieObservability").dropDexieObservability(this.$1),
              o("WAWebStorageCmd").notifyOnVersionChange(this.$13(), d),
              this.$13()
                .version(1)
                .stores(
                  ((e = {}), (e[m] = "++id, _expirtation"), (e[h] = "++id"), e),
                ),
              this.$13()
                .version(2)
                .stores(((n = {}), (n[m] = "++id"), (n[h] = "++id"), n)),
              this.$13()
                .version(3)
                .stores(
                  ((a = {}),
                  (a[m] = "++id"),
                  (a[h] = "++id"),
                  (a[y] = "++id"),
                  a),
                ));
            var l = t.buffer.slice(t.byteOffset, t.byteLength + t.byteOffset);
            return o("WAWebDexieCastTypes")
              .dexieCastToPromise(this.$13().open())
              .then(function () {
                return Promise.all([i.$14(l), i.$15(), i.$16()]);
              })
              .then(function () {
                return i.$12.resolve();
              });
          }),
          (n.$13 = function () {
            if (this.$1 == null)
              throw r("err")("[db_encryption_key] db is not initialized");
            return this.$1;
          }),
          (n.deleteKeys = function () {
            var e = this;
            return Promise.all([
              this.$13().table(m).clear(),
              this.$13().table(h).clear(),
              this.$13().table(y).clear(),
            ])
              .then(function () {})
              .finally(function () {
                return (
                  (e.$1 = null),
                  o("WAWebDexieCastTypes")
                    .dexieCastToPromise(r("WAWeb-dexie").delete(d))
                    .catch(function () {
                      return r("WAWeb-dexie").delete(d);
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
              (this.$8 = new (o("WAResolvable").Resolvable)()),
              (this.$9 = new (o("WAResolvable").Resolvable)()),
              this.$10.resolveWasCalled() &&
                (this.$10 = new (o("WAResolvable").Resolvable)()),
              (this.$5 = null),
              (this.$6 = null),
              (this.$7 = null),
              (this.$11 = null),
              (this.$12 = new (o("WAResolvable").Resolvable)()));
          }),
          (n.setFinalDbMsgEncKeys_TESTONLY = function (t) {
            this.$3 = t;
          }),
          (n.setKeys_TESTONLY = function (t) {
            this.$2 = t;
          }),
          (n.waitForFinalDbMsgEncKey = function () {
            return this.$8.promise;
          }),
          (n.waitForFinalFtsHmacKey = function () {
            return this.$9.promise;
          }),
          (n.waitForWormEarKey = function () {
            return this.$10.promise;
          }),
          (n.waitForInit = function () {
            return this.$12.promise;
          }),
          (n.getEncKeys = function () {
            if (!this.$2) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(m);
            return this.$2;
          }),
          (n.getDbMsgEncKeys = function (t) {
            if (!this.$3)
              throw new (o("WAWebDbErrors").DbMsgEncKeyNotLoaded)(t.tableName);
            return this.$3;
          }),
          (n.getFtsHMACKey = function () {
            if (!this.$5) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(h);
            return this.$5;
          }),
          (n.getWormEarKey = function () {
            if (!this.$7) throw new (o("WAWebDbErrors").DbEncKeyNotLoaded)(y);
            return this.$7;
          }),
          t
        );
      })();
    function R() {
      var e = new Uint8Array(p);
      return (
        self.crypto.getRandomValues(e),
        self.crypto.subtle.importKey("raw", e, _, !1, ["deriveKey"])
      );
    }
    function L() {
      var e = new Uint8Array(p);
      return (
        globalThis.crypto.getRandomValues(e),
        globalThis.crypto.subtle.importKey("raw", e, _.name, !1, ["deriveBits"])
      );
    }
    var E = new S();
    ((l.DB_ENCRYPTION_CIPHER = v), (l.DbEncKeyStore = E));
  },
  98,
);
