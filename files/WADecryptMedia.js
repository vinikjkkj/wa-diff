__d(
  "WADecryptMedia",
  ["WAMediaCrypto", "WAResultOrError", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WATagsLogger").TAGS(["WADecryptMedia"]);
    async function f(t, n, r, a) {
      _.WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Encountered enc-hash-mismatch - looking for a potential working hmac salt",
          ])),
      );
      var i = r.type === "preview" ? "preview" : r.mediaType,
        l =
          await o("WAMediaCrypto").deprecated_getAllCommonComputedMediaKeys(a),
        d;
      for (var m of l) {
        var p = m[0],
          f = m[1];
        try {
          if (p === i) continue;
          _.LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Trying ",
                " as an alternative hmac salt.",
              ])),
            p,
          );
          var g = o("WAResultOrError").makeResult(
            await o("WAMediaCrypto").hmacAndDecrypt(
              f.cipherKey,
              f.iv,
              t,
              f.hmacKey,
              n,
            ),
          );
          return (
            (d = { hmacAndDecryptResult: g, alternativeHmacSaltUsed: p }),
            _.LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Found a working hmac salt using ",
                  ".",
                ])),
              p,
            ),
            d
          );
        } catch (e) {
          _.LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " is not a working hmac salt.",
              ])),
            p,
          );
          continue;
        }
      }
      return {
        hmacAndDecryptResult:
          o("WAResultOrError").makeError("enc-hash-mismatch"),
      };
    }
    async function g(e) {
      var t = e.ciphertextHmac,
        n = e.mediaKey,
        r = e.mediaTypeDetails,
        a = e.plaintextHash,
        i = e.tryOtherHmacSalts,
        l = i === void 0 ? !0 : i;
      _.LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "Using default plaintext verifier",
          ])),
      );
      var s = t.byteLength - o("WAMediaCrypto").HMAC_LENGTH,
        u = new Uint8Array(t, s),
        c = new Uint8Array(t, 0, s),
        g;
      r.type === "preview"
        ? (g = o("WAMediaCrypto").computeMediaKeysForPreview(n))
        : (g = o("WAMediaCrypto").computeMediaKeys(n, r.mediaType));
      var h,
        y = null;
      if (
        ((h = await g
          .then(function (e) {
            var t = e.cipherKey,
              n = e.hmacKey,
              r = e.iv;
            return o("WAMediaCrypto").hmacAndDecrypt(t, r, c, n, u);
          })
          .then(o("WAResultOrError").makeResult)
          .catch(function (e) {
            var t = e instanceof o("WAMediaCrypto").HmacValidationError;
            return (
              (l || !t) &&
                _.ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Download Plaintext Error ",
                      "",
                    ])),
                  String(e),
                ),
              o("WAResultOrError").makeError(
                t ? "enc-hash-mismatch" : "decryption-error",
              )
            );
          })),
        l && h.success === !1 && h.error === "enc-hash-mismatch")
      ) {
        var C = await f(c, u, r, n);
        ((h = C.hmacAndDecryptResult), (y = C.alternativeHmacSaltUsed));
      }
      if (!h.success) return h;
      var b = h.value,
        v = b.plaintext,
        S = b.plaintextHash;
      return a !== S
        ? o("WAResultOrError").makeError("hash-mismatch")
        : (_.LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Download Plaintext Success",
              ])),
          ),
          o("WAResultOrError").makeResult({
            plaintext: v,
            alternativeHmacSaltUsed: y,
          }));
    }
    l.decryptMedia = g;
  },
  98,
);
