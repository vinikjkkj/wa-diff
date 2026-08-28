__d(
  "WormEarAsync",
  [
    "FBLogger",
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WACryptoSha256",
    "WATimeUtils",
    "WormCallbacks",
    "WormEar",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 128,
      c = 12,
      d = 256,
      m = new Uint8Array(0).buffer,
      p = "AES-GCM",
      _ = "HKDF",
      f = "SHA-256",
      g = 0,
      h = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t, n, r, g, o) || this),
            (a.$WormEarAsync$p_1 = crypto.subtle.importKey(
              "raw",
              r,
              { name: p },
              !1,
              ["encrypt", "decrypt"],
            )),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.$WormEarAsync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield o("WACryptoSha256").sha256Base64(
                this.masterKey,
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
                t = e.getRandomValues(
                  new Uint8Array(o("WormEar").HKDF_SEED_LENGTH_IN_BYTES),
                ).buffer,
                n = e.getRandomValues(
                  new Uint8Array(o("WormEar").HKDF_SEED_LENGTH_IN_BYTES),
                ).buffer,
                r = e.getRandomValues(new Uint8Array(c)),
                a = yield this.$WormEarAsync$p_1,
                i = yield e.subtle.encrypt(
                  { iv: r, name: p, tagLength: u },
                  a,
                  n,
                );
              return {
                clientKey: t,
                expiration: o("WATimeUtils").castToUnixTime(
                  o("WATimeUtils").unixTime() + this.encKeyTtl,
                ),
                keyHash: yield this.$WormEarAsync$p_2(),
                salt: o("WABinary").Binary.build(r, i).readBuffer(),
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.init = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this;
                this.resetKeyChain();
                var i = o("WACryptoDependencies").getCrypto(),
                  l = yield this.$WormEarAsync$p_2(),
                  g = !0;
                try {
                  yield (s || (s = n("Promise"))).all(
                    e.map(function (e) {
                      g = g && e.keyHash === l;
                      var t = e.salt,
                        r = t.slice(0, c),
                        o = t.slice(c);
                      return a.$WormEarAsync$p_1
                        .then(function (t) {
                          return (s || (s = n("Promise"))).all([
                            i.subtle.importKey(
                              "raw",
                              e.clientKey,
                              { name: _ },
                              !1,
                              ["deriveKey"],
                            ),
                            i.subtle.decrypt(
                              { iv: new Uint8Array(r), name: p, tagLength: u },
                              t,
                              o,
                            ),
                          ]);
                        })
                        .then(function (e) {
                          var t = e[0],
                            n = e[1];
                          return i.subtle.deriveKey(
                            { hash: { name: f }, info: m, name: _, salt: n },
                            t,
                            { length: d, name: p },
                            !0,
                            ["encrypt", "decrypt"],
                          );
                        })
                        .then(function (e) {
                          return i.subtle.exportKey("raw", e);
                        })
                        .then(function (t) {
                          a.setKeyVersion(e.version, t);
                        });
                    }),
                  );
                } catch (e) {
                  var h, y;
                  throw (
                    r("FBLogger")("worm")
                      .catching(r("getErrorSafe")(e))
                      .mustfix(
                        "Error on keychain initialisation keyHashCheck: %s",
                        g,
                      ),
                    (h = (y = o("WormCallbacks").getWormCallbacks())
                      .onEARInitError) == null || h.call(y),
                    e
                  );
                } finally {
                  var C;
                  t == null ||
                    (C = t.eventFlow) == null ||
                    C.addAnnotations({ bool: { keyHashCheck: g } });
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })((e = o("WormEar")).WormEar);
    ((l.DecryptionError = e.DecryptionError),
      (l.ENCRYPTED_COLUMN_NAME = e.ENCRYPTED_COLUMN_NAME),
      (l.EncryptionError = e.EncryptionError),
      (l.WormEarAsync = h));
  },
  98,
);
