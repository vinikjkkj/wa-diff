__d(
  "WormEarAsync",
  [
    "FBLogger",
    "WABinary",
    "WACryptoDependencies",
    "WACryptoSha256",
    "WATimeUtils",
    "WormCallbacks",
    "WormEar",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 128,
      u = 12,
      c = 256,
      d = new Uint8Array(0).buffer,
      m = "AES-GCM",
      p = "HKDF",
      _ = "SHA-256",
      f = 0,
      g = (function (e) {
        function t(t, n, r, o) {
          var a;
          return (
            (a = e.call(this, t, n, r, f, o) || this),
            (a.$WormEarAsync$p_1 = crypto.subtle.importKey(
              "raw",
              r,
              { name: m },
              !1,
              ["encrypt", "decrypt"],
            )),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.$WormEarAsync$p_2 = async function () {
            return (
              await o("WACryptoSha256").sha256Base64(this.masterKey)
            ).substring(0, 5);
          }),
          (n.prepareNewKeyVersion = async function () {
            var e = o("WACryptoDependencies").getCrypto(),
              t = e.getRandomValues(
                new Uint8Array(o("WormEar").HKDF_SEED_LENGTH_IN_BYTES),
              ).buffer,
              n = e.getRandomValues(
                new Uint8Array(o("WormEar").HKDF_SEED_LENGTH_IN_BYTES),
              ).buffer,
              r = e.getRandomValues(new Uint8Array(u)),
              a = await this.$WormEarAsync$p_1,
              i = await e.subtle.encrypt(
                { iv: r, name: m, tagLength: s },
                a,
                n,
              );
            return {
              clientKey: t,
              expiration: o("WATimeUtils").castToUnixTime(
                o("WATimeUtils").unixTime() + this.encKeyTtl,
              ),
              keyHash: await this.$WormEarAsync$p_2(),
              salt: o("WABinary").Binary.build(r, i).readBuffer(),
            };
          }),
          (n.init = async function (t, n) {
            var e = this;
            this.resetKeyChain();
            var a = o("WACryptoDependencies").getCrypto(),
              i = await this.$WormEarAsync$p_2(),
              l = !0;
            try {
              await Promise.all(
                t.map(function (t) {
                  l = l && t.keyHash === i;
                  var n = t.salt,
                    r = n.slice(0, u),
                    o = n.slice(u);
                  return e.$WormEarAsync$p_1
                    .then(function (e) {
                      return Promise.all([
                        a.subtle.importKey(
                          "raw",
                          t.clientKey,
                          { name: p },
                          !1,
                          ["deriveKey"],
                        ),
                        a.subtle.decrypt(
                          { iv: new Uint8Array(r), name: m, tagLength: s },
                          e,
                          o,
                        ),
                      ]);
                    })
                    .then(function (e) {
                      var t = e[0],
                        n = e[1];
                      return a.subtle.deriveKey(
                        { hash: { name: _ }, info: d, name: p, salt: n },
                        t,
                        { length: c, name: m },
                        !0,
                        ["encrypt", "decrypt"],
                      );
                    })
                    .then(function (e) {
                      return a.subtle.exportKey("raw", e);
                    })
                    .then(function (n) {
                      e.setKeyVersion(t.version, n);
                    });
                }),
              );
            } catch (e) {
              var f, g;
              throw (
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "Error on keychain initialisation keyHashCheck: %s",
                    l,
                  ),
                (f = (g = o("WormCallbacks").getWormCallbacks())
                  .onEARInitError) == null || f.call(g),
                e
              );
            } finally {
              var h;
              n == null ||
                (h = n.eventFlow) == null ||
                h.addAnnotations({ bool: { keyHashCheck: l } });
            }
          }),
          t
        );
      })((e = o("WormEar")).WormEar);
    ((l.DecryptionError = e.DecryptionError),
      (l.ENCRYPTED_COLUMN_NAME = e.ENCRYPTED_COLUMN_NAME),
      (l.EncryptionError = e.EncryptionError),
      (l.WormEarAsync = g));
  },
  98,
);
