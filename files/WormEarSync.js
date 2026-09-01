__d(
  "WormEarSync",
  [
    "FBLogger",
    "WABase64",
    "WABinary",
    "WACryptoHkdfSync",
    "WACryptoSha256Builder",
    "WATimeUtils",
    "WormCallbacks",
    "WormEar",
    "err",
    "getErrorSafe",
    "tweetnacl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 32,
      u = 5,
      c = "worm-ear-v2",
      d = (function (t) {
        function n(n, a, i, l) {
          var s;
          if (
            ((s = t.call(this, n, a, i, e, l) || this),
            i.byteLength !== o("tweetnacl").secretbox.keyLength)
          )
            throw r("err")(
              "WormEarSync: master key must be " +
                o("tweetnacl").secretbox.keyLength +
                " bytes, got " +
                i.byteLength +
                "; db: " +
                a,
            );
          return (
            (s.$WormEarSync$p_1 = new Uint8Array(i)),
            (s.$WormEarSync$p_2 = o("WABase64")
              .encodeB64(
                new (o("WACryptoSha256Builder").Sha256Builder)()
                  .update(s.$WormEarSync$p_1)
                  .finish(),
              )
              .substring(0, u)),
            s
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.prepareNewKeyVersion = function () {
            var e,
              t = (e = o("tweetnacl")).randomBytes(
                o("WormEar").HKDF_SEED_LENGTH_IN_BYTES,
              ),
              n = e.randomBytes(o("WormEar").HKDF_SEED_LENGTH_IN_BYTES),
              r = e.randomBytes(e.secretbox.nonceLength),
              a = e.secretbox(n, r, this.$WormEarSync$p_1);
            return {
              clientKey: t.buffer,
              expiration: o("WATimeUtils").castToUnixTime(
                o("WATimeUtils").unixTime() + this.encKeyTtl,
              ),
              keyHash: this.$WormEarSync$p_2,
              salt: o("WABinary").Binary.build(r, a).readBuffer(),
            };
          }),
          (a.init = function (t, n) {
            this.resetKeyChain();
            var e = !0;
            try {
              for (var a of t)
                ((e = e && a.keyHash === this.$WormEarSync$p_2),
                  this.setKeyVersion(a.version, this.$WormEarSync$p_3(a)));
            } catch (t) {
              var i, l;
              throw (
                r("FBLogger")("worm")
                  .catching(r("getErrorSafe")(t))
                  .mustfix(
                    "Error on keychain initialisation keyHashCheck: %s",
                    e,
                  ),
                (i = (l = o("WormCallbacks").getWormCallbacks())
                  .onEARInitError) == null || i.call(l),
                t
              );
            } finally {
              var s;
              n == null ||
                (s = n.eventFlow) == null ||
                s.addAnnotations({ bool: { keyHashCheck: e } });
            }
          }),
          (a.$WormEarSync$p_3 = function (t) {
            var e = new Uint8Array(t.salt),
              n = o("tweetnacl").secretbox.open(
                e.subarray(o("tweetnacl").secretbox.nonceLength),
                e.subarray(0, o("tweetnacl").secretbox.nonceLength),
                this.$WormEarSync$p_1,
              );
            if (n == null)
              throw r("err")(
                "WormEarSync: unable to unwrap salt for key version " +
                  t.version,
              );
            var a = o("WACryptoHkdfSync").hkdf(
              new Uint8Array(t.clientKey),
              n,
              o("WABinary").Binary.build(c, t.version).readByteArrayView(),
              s,
            );
            return a.slice().buffer;
          }),
          n
        );
      })(o("WormEar").WormEar);
    l.WormEarSync = d;
  },
  98,
);
