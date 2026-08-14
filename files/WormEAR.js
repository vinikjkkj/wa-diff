__d(
  "WormEAR",
  [
    "FBLogger",
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WACryptoSha256",
    "WACryptoSha256HmacBuilder",
    "WATimeUtils",
    "WormCallbacks",
    "WormEncoding",
    "WormIDbGetMinMaxKeySelector",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "memoizeStringOnly",
    "tweetnacl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "_encryptedContent",
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "WormEAREncryptionError"),
            (n.message = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t) || this),
            (o.name = "WormEARDecryptionError"),
            (o.message = t),
            (o.store = n),
            (o.maybeHashedPk = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t, n) {
      if (typeof e == "number") return e;
      var r = t.encode(e),
        a = new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(
          new Uint8Array(n),
        )
          .update(r)
          .finish();
      return a.buffer;
    }
    var m = 32,
      p = 2,
      _ = 128,
      f = 12,
      g = 256,
      h = new Uint8Array(0).buffer,
      y = "AES-GCM",
      C = "HKDF",
      b = "SHA-256",
      v = 3600,
      S = 24 * v,
      R = 0,
      L = S * 30 * 6,
      E = (function () {
        function t(e, t, n, a) {
          var i = this,
            l;
          ((this.$7 = 0),
            (this.$9 = !1),
            (this.$10 = !1),
            (this.$11 = r("memoizeStringOnly")(function (e) {
              var t = i.$2[e].nonEncryptedFields;
              if (t != null) return new Set(t);
            })),
            (this.$2 = e),
            (this.$1 = t),
            (this.$8 = (l = a == null ? void 0 : a.encKeyTtl) != null ? l : L),
            (this.$3 = o("WormEncoding").createEncoding()),
            (this.$4 = n),
            (this.$6 = crypto.subtle.importKey("raw", n, { name: y }, !1, [
              "encrypt",
              "decrypt",
            ])),
            (this.$5 = new Map()));
        }
        var a = t.prototype;
        return (
          (a.isSecureStore = function (t) {
            return this.$2[t].secure !== !1;
          }),
          (a.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield o("WACryptoSha256").sha256Base64(
                this.$4,
              )).substring(0, 5);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.prepareNewKeyVersion = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WACryptoDependencies").getCrypto(),
                t = e.getRandomValues(new Uint8Array(m)).buffer,
                n = e.getRandomValues(new Uint8Array(m)).buffer,
                r = e.getRandomValues(new Uint8Array(f)),
                a = yield this.$6,
                i = yield e.subtle.encrypt(
                  { iv: r, name: y, tagLength: _ },
                  a,
                  n,
                );
              return {
                clientKey: t,
                expiration: o("WATimeUtils").castToUnixTime(
                  o("WATimeUtils").unixTime() + this.$8,
                ),
                keyHash: yield this.$12(),
                salt: o("WABinary").Binary.build(r, i).readBuffer(),
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.init = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i) {
                var l = this;
                ((this.$5 = new Map()),
                  (this.$7 = 0),
                  (this.$9 = a.incorrectVersions),
                  (this.$10 = a.versionsLoss));
                var s = o("WACryptoDependencies").getCrypto(),
                  u = yield this.$12(),
                  c = !0;
                try {
                  yield (e || (e = n("Promise"))).all(
                    t.map(function (t) {
                      c = c && t.keyHash === u;
                      var r = t.salt,
                        o = r.slice(0, f),
                        a = r.slice(f);
                      return l.$6
                        .then(function (r) {
                          return (e || (e = n("Promise"))).all([
                            s.subtle.importKey(
                              "raw",
                              t.clientKey,
                              { name: C },
                              !1,
                              ["deriveKey"],
                            ),
                            s.subtle.decrypt(
                              { iv: new Uint8Array(o), name: y, tagLength: _ },
                              r,
                              a,
                            ),
                          ]);
                        })
                        .then(function (e) {
                          var t = e[0],
                            n = e[1];
                          return s.subtle.deriveKey(
                            { hash: { name: b }, info: h, name: C, salt: n },
                            t,
                            { length: g, name: y },
                            !0,
                            ["encrypt", "decrypt"],
                          );
                        })
                        .then(function (e) {
                          return s.subtle.exportKey("raw", e);
                        })
                        .then(function (e) {
                          ((l.$7 = Math.max(l.$7, t.version)),
                            l.$5.set(t.version, e));
                        });
                    }),
                  );
                } catch (e) {
                  var d, m;
                  throw (
                    r("FBLogger")("worm")
                      .catching(r("getErrorSafe")(e))
                      .mustfix(
                        "Error on keychain initialisation keyHashCheck: %s",
                        c,
                      ),
                    (d = (m = o("WormCallbacks").getWormCallbacks())
                      .onEARInitError) == null || d.call(m),
                    e
                  );
                } finally {
                  var p;
                  i == null ||
                    (p = i.eventFlow) == null ||
                    p.addAnnotations({ bool: { keyHashCheck: c } });
                }
              },
            );
            function a(e, n, r) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$13 = function (t) {
            if (this.$7 === 0)
              throw new u("EAR.Encryption. EAR is not initialised ");
            var e = this.$5.get(this.$7);
            if (e == null)
              throw new u("EAR.Encryption.Key does not exist for version");
            var n = o("tweetnacl").randomBytes(
                o("tweetnacl").secretbox.nonceLength,
              ),
              r = o("tweetnacl").secretbox(t, n, new Uint8Array(e));
            return o("WABinary").Binary.build(R, this.$7, n, r).readBuffer();
          }),
          (a.$14 = function (t, n, r) {
            var e = t.slice(0, p),
              a = new DataView(e).getUint8(1),
              i = this.$5.get(a);
            if (i == null)
              throw new c(
                "EAR.Decryption.Key does not exist for version: " +
                  a +
                  "; db: " +
                  this.$1 +
                  "; store: " +
                  n +
                  "; incorrectVersions: " +
                  this.$9.toString() +
                  " versionsLoss: " +
                  this.$10.toString(),
                n,
                r,
              );
            var l = t.slice(p, p + o("tweetnacl").secretbox.nonceLength),
              s = t.slice(p + o("tweetnacl").secretbox.nonceLength),
              u = o("tweetnacl").secretbox.open(
                new Uint8Array(s),
                new Uint8Array(l),
                new Uint8Array(i),
              );
            if (u == null)
              throw new c(
                "EAR.Decryption. Unable to decrypt; db: " +
                  this.$1 +
                  "; store: " +
                  n +
                  "; incorrectVersions: " +
                  this.$9.toString() +
                  " versionsLoss: " +
                  this.$10.toString(),
                n,
                r,
              );
            return u;
          }),
          (a.encryptEntity = function (t, n) {
            var e,
              r = this.$2[n],
              o = new Set();
            r.autoIncrement !== !0 && o.add(r.primaryKey);
            var a = r.indexes;
            if (a != null)
              for (var i of Object.keys(a)) {
                var l = a[i];
                for (var u of l.fields) o.add(u);
              }
            var c = {};
            for (var m of o) {
              var p;
              c[m] =
                (p = this.$11(n)) != null && p.has(m)
                  ? t[m]
                  : d(t[m], this.$3, this.$4);
            }
            return (
              r.autoIncrement === !0 &&
                t[r.primaryKey] != null &&
                (c[r.primaryKey] = t[r.primaryKey]),
              babelHelpers.extends(
                {},
                c,
                ((e = {}), (e[s] = this.$13(this.$3.encode(t))), e),
              )
            );
          }),
          (a.$15 = function (t, n, o) {
            if (
              ((t == null || typeof t != "object") &&
                r("FBLogger")("worm").mustfix(
                  "WORM.EAR: dbRecord is null or not object: %s, store: %s, reason %s",
                  String(t),
                  n,
                  o,
                ),
              t != null && t[s] != null)
            ) {
              var e = t[this.$2[n].primaryKey];
              return { encrypted: !0, encryptedEntity: t, pk: e };
            } else return { encrypted: !1, entity: t };
          }),
          (a.maybeDecrypt = function (t, n, r, o, a) {
            if (t == null || this.isSecureStore(n) === !1) return t;
            var e = this.$15(t, n, r);
            if (!e.encrypted) {
              if (a != null && a.shouldNotFailIfEntityIsNotEncrypted) return t;
              var i = t[this.$2[n].primaryKey];
              throw new c(
                "EAR.Decryption. Attempt to decrypt malformed encrypted entity in  db: " +
                  this.$1 +
                  ", store: " +
                  n +
                  ". Missing '" +
                  s +
                  "' property. Pk is " +
                  (i == null ? "empty" : "not empty"),
                n,
                i,
              );
            }
            o == null || o.addPoint("decrypt_start");
            var l = this.decryptEntity(e.encryptedEntity, n, e.pk);
            o == null || o.addPoint("decrypt_end");
            var u = this.$2[n];
            if (u.autoIncrement === !0) {
              var d;
              return babelHelpers.extends(
                {},
                l,
                ((d = {}), (d[u.primaryKey] = e.pk), d),
              );
            }
            return l;
          }),
          (a.maybeEncrypt = function (t, n, r) {
            if (this.isSecureStore(n) === !1) return t;
            r == null || r.addPoint("encrypt_start");
            var e = this.encryptEntity(t, n);
            return (r == null || r.addPoint("encrypt_end"), e);
          }),
          (a.decryptEntity = function (t, n, r) {
            return this.$3.decode(this.$14(t[s], n, r));
          }),
          (a.hashPk = function (t, n, r) {
            var e;
            return (e = this.$11(t)) != null && e.has(n)
              ? r
              : d(r, this.$3, this.$4);
          }),
          (a.hashSelector = function (t, n, r) {
            for (
              var e,
                a,
                i = [].concat(t),
                l =
                  (e =
                    (a = this.$2[n].indexes) == null || (a = a[r]) == null
                      ? void 0
                      : a.fields) != null
                    ? e
                    : [],
                s = 0;
              s < i.length;
              s++
            ) {
              var u,
                c = i[s],
                m = l[s];
              c !== o("WormIDbGetMinMaxKeySelector").getMaxSelector() &&
                c !== -1 / 0 &&
                (((u = this.$11(n)) != null && u.has(m)) ||
                  (i[s] = d(c, this.$3, this.$4)));
            }
            return i;
          }),
          t
        );
      })();
    ((l.ENCRYPTED_COLUMN_NAME = s),
      (l.EncryptionError = u),
      (l.DecryptionError = c),
      (l.WormEAR = E));
  },
  98,
);
