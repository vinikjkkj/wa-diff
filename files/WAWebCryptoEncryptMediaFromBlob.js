__d(
  "WAWebCryptoEncryptMediaFromBlob",
  [
    "WACryptoAesCbc",
    "WACryptoSha256HmacBuilder",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAMediaCrypto",
    "WATypedArraysCast",
    "WAWebCryptoCreateMediaKeys",
    "WAWebFileUtils",
    "WAWebMediaFileErrors",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 16777216;
    function d(t) {
      var n = t.blob,
        a = t.mediaKey,
        i = t.type;
      return new Promise(function (t, l) {
        var c = { mediaKey: a.slice(0, 10), type: i };
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptMediaFromBlob: start",
              ])),
          ),
          !i)
        )
          throw new (o("WAWebMediaFileErrors").MediaEncryptionError)(
            'encryptMediaFromBlob: missing "type"',
          );
        if (!a)
          throw new (o("WAWebMediaFileErrors").MediaEncryptionError)(
            'encryptMediaFromBlob: missing "mediaKey"',
          );
        r("WAWebCryptoCreateMediaKeys")(i, a)
          .then(function (e) {
            return m(n, e);
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
              e instanceof o("WAWebMediaFileErrors").MediaEncryptionError
                ? e
                : new (o("WAWebMediaFileErrors").MediaEncryptionError)(
                    "encryption error: " +
                      String(e) +
                      "; stack: " +
                      String(r("getErrorSafe")(e).stack),
                  )
            );
          })
          .catch(l);
      });
    }
    async function m(e, t) {
      for (
        var n,
          r = t.encKey,
          a = t.iv,
          i = t.macKey,
          l = await (n = o("WACryptoAesCbc")).importRawKey(r),
          s = n.getIv(a),
          u = e.size,
          d = u + (n.AES_CBC_BLOCK_SIZE - (u % n.AES_CBC_BLOCK_SIZE)),
          m = new Uint8Array(d + o("WAMediaCrypto").HMAC_LENGTH),
          p = Math.max(1, Math.ceil(u / c)),
          _ = 0,
          f = s,
          g = 0;
        g < p;
        g++
      ) {
        var h = g === p - 1,
          y = g * c,
          C = Math.min(y + c, u),
          b = await o("WAWebFileUtils").blobToArrayBuffer(e.slice(y, C)),
          v = new Uint8Array(b),
          S = await o("WACryptoAesCbc").aesCbcEncryptChunk(h, v, f, l),
          R = S.encryptedChunk,
          L = S.nextIv;
        (m.set(R, _), (_ += R.byteLength), (f = L));
      }
      var E = new (o("WACryptoSha256HmacBuilder").Sha256HMacBuilder)(
        o("WATypedArraysCast").castTypedArrays(Uint8Array, i),
      )
        .update(s)
        .update(m.subarray(0, d))
        .finish()
        .subarray(0, o("WAMediaCrypto").HMAC_LENGTH);
      m.set(E, d);
      var k = await o("WAMediaCalculateFilehash").calculateFilehash(m);
      return {
        ciphertextHmac: m.buffer,
        hash: k,
        sidecar: void 0,
        firstFrameSidecar: void 0,
      };
    }
    l.default = d;
  },
  98,
);
