__d(
  "WAWebCryptoDecryptMediaWorker",
  [
    "WAByteArray",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoSha256",
    "WACryptoUtils",
    "WATypedArraysConcat",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ciphertextHmac,
            r = t.encKey,
            a = t.expectedPlaintextHash,
            i = t.iv,
            l = t.macKey;
          if (n.byteLength < e)
            throw new (o("WAWebMiscErrors").MediaDecryptionError)(
              "ciphertext too short: " + n.byteLength,
            );
          var s = n instanceof Uint8Array ? n : new Uint8Array(n),
            u = s.subarray(0, 0 - e),
            c = o("WAByteArray").uint8ArrayToBuffer(s.slice(-e)),
            d = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              new Uint8Array(i),
              u,
            ]),
            m = yield o("WACryptoHmac").hmacSha256(l, d, e);
          if (!o("WACryptoUtils").arrayBuffersEqual(m, c))
            throw new (o("WAWebMiscErrors").MediaDecryptionError)(
              "decryptMedia: hmac mismatch",
            );
          var p = yield o("WACryptoAesCbc").aesCbcDecrypt(r, i, u);
          if (a != null) {
            var _ = yield o("WACryptoSha256").sha256Base64(p);
            if (_ !== a)
              throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                "decryptMedia: " +
                  o("WAWebMiscErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              );
          }
          return p;
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
