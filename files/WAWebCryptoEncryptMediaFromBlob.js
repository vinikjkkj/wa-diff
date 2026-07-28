__d(
  "WAWebCryptoEncryptMediaFromBlob",
  [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoSha256HmacBuilder",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysCast",
    "WAWebCryptoCreateMediaKeys",
    "WAWebFileUtils",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 16777216;
    function m(t) {
      var a = t.blob,
        i = t.mediaKey,
        l = t.type;
      return new (c || (c = n("Promise")))(function (t, n) {
        var c = { mediaKey: i.slice(0, 10), type: l };
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptMediaFromBlob: start",
              ])),
          ),
          !l)
        )
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMediaFromBlob: missing "type"',
          );
        if (!i)
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMediaFromBlob: missing "mediaKey"',
          );
        r("WAWebCryptoCreateMediaKeys")(l, i)
          .then(function (e) {
            return p(a, e);
          })
          .then(function (e) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMediaFromBlob: success",
                ])),
            ),
              t(e));
          })
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMediaFromBlob: error",
                  ])),
              ),
              e instanceof o("WAWebMiscErrors").MediaEncryptionError
                ? e
                : new (o("WAWebMiscErrors").MediaEncryptionError)(
                    "encryption error: " +
                      String(e) +
                      "; stack: " +
                      r("getErrorSafe")(e).stack,
                  )
            );
          })
          .catch(n);
      });
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var n,
              r = t.encKey,
              a = t.iv,
              i = t.macKey,
              l = yield (n = o("WACryptoAesCbc")).importRawKey(r),
              s = n.getIv(a),
              u = e.size,
              c = u + (n.AES_CBC_BLOCK_SIZE - (u % n.AES_CBC_BLOCK_SIZE)),
              m = new Uint8Array(c + o("WAMediaCrypto").HMAC_LENGTH),
              p = Math.max(1, Math.ceil(u / d)),
              _ = 0,
              f = s,
              g = 0;
            g < p;
            g++
          ) {
            var h = g === p - 1,
              y = g * d,
              C = Math.min(y + d, u),
              b = yield o("WAWebFileUtils").blobToArrayBuffer(e.slice(y, C)),
              v = new Uint8Array(b),
              S = yield o("WACryptoAesCbc").aesCbcEncryptChunk(h, v, f, l),
              R = S.encryptedChunk,
              L = S.nextIv;
            (m.set(R, _), (_ += R.byteLength), (f = L));
          }
          var E = new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(
            o("WATypedArraysCast").castTypedArrays(Uint8Array, i),
          )
            .update(s)
            .update(m.subarray(0, c))
            .finish()
            .subarray(0, o("WAMediaCrypto").HMAC_LENGTH);
          m.set(E, c);
          var k = yield o("WAMediaCalculateFilehash").calculateFilehash(m);
          return {
            ciphertextHmac: m.buffer,
            hash: k,
            sidecar: void 0,
            firstFrameSidecar: void 0,
          };
        })),
        _.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
