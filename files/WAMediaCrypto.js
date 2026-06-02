__d(
  "WAMediaCrypto",
  [
    "WABinary",
    "WACryptoAesCbc",
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WACryptoSha256",
    "WACryptoUtils",
    "WACustomError",
    "WAHashUtils",
    "WAMediaCryptoSidecar",
    "WAMediaHkdfInfo",
    "WATagsLogger",
    "WATypedArraysConcat",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["WAMediaCrypto"]),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "HmacValidationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      d = new Uint8Array([2, 2]);
    function m(e, t) {
      return o("WACryptoHkdf")
        .extractAndExpand(new Uint8Array(e), t, 112)
        .then(function (e) {
          return {
            iv: new Uint8Array(e, 0, 16),
            cipherKey: new Uint8Array(e, 16, 32),
            hmacKey: new Uint8Array(e, 48, 32),
            refKey: new Uint8Array(e, 80, 32),
          };
        });
    }
    function p(e, t) {
      var n = o("WAMediaHkdfInfo").getMediaHkdfInfo(t);
      return m(e, n);
    }
    function _(e) {
      var t = o("WAMediaHkdfInfo").getPreviewMediaHkdfInfo();
      return m(e, t);
    }
    async function f(e) {
      var t = new Map(),
        n = await _(e);
      t.set("preview", n);
      var r = [
        "document",
        "image",
        "video",
        "audio",
        "md-app-state",
        "md-msg-hist",
      ];
      return (
        await Promise.all(
          r.map(function (n) {
            return p(e, n).then(function (e) {
              t.set(n, e);
            });
          }),
        ),
        t
      );
    }
    function g(e) {
      switch (e) {
        case "image":
        case "video":
          return e;
        default:
          return null;
      }
    }
    var h = 16,
      y = 16,
      C = 10,
      b = 64 * 1024;
    async function v(e, t, n, r, a) {
      var i = new (o("WABinary").Binary)();
      (i.ensureCapacity(y + r.byteLength + h + C), i.writeByteArray(t));
      for (
        var l = new (o("WACryptoAesCbc").AesCbcStream)(i, "encrypt", e, t),
          s = 0,
          u = s + b;
        u < r.byteLength;
      ) {
        var c = r.slice(s, u);
        (await l.append(new Uint8Array(c)), (s = u), (u += b));
      }
      var d = await r.slice(s);
      await l.finalize(new Uint8Array(d));
      var m = i.peek(function (e) {
          return e.readByteArrayView();
        }),
        p = await o("WACryptoHmac").encodeKeySha256(n),
        _ = await o("WACryptoHmac").sign(p, m);
      i.writeByteArray(new Uint8Array(_, 0, C));
      var f = i.readByteArrayView(),
        g = f.subarray(y),
        v = await Promise.all([
          o("WACryptoDependencies").getCrypto().subtle.digest("SHA-256", g),
          o("WAMediaCryptoSidecar").shouldHaveStreamingSidecar(a)
            ? o("WAMediaCryptoSidecar").calculateStreamingSidecar(p, f)
            : void 0,
        ]),
        S = v[0],
        R = v[1];
      return {
        ciphertext: g,
        ciphertextHash: S,
        sidecar: R,
        ivCiphertext: m,
        ivCiphertextHmac: f,
      };
    }
    async function S(e, t, n) {
      var r = await o("WACryptoHmac").encodeKeySha256(e),
        a = o("WABinary").Binary.build(t, n).readByteArrayView();
      return o("WACryptoHmac").sign(r, a);
    }
    async function R(e, t, n, r, a) {
      if (!(10 <= a.length && a.length <= 32))
        throw new c("Bad hmac size " + a.length);
      var i = o("WABinary").Binary.build(t, n).readByteArrayView(),
        l = await o("WACryptoHmac")
          .hmacSha256(r, i)
          .then(function (e) {
            return new Uint8Array(e);
          }),
        s = l.slice(0, a.length);
      if (!I(s, a)) throw new c("hmacAndDecrypt hmac mismatch");
      var u = await o("WACryptoAesCbc").aesCbcDecrypt(e, t, n),
        d = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.digest("SHA-256", u);
      return {
        plaintextHash: o("WAHashUtils").toPlaintextHash(d),
        plaintext: u,
      };
    }
    function L(e, t, n, r, a) {
      if (!(10 <= a.length && a.length <= 32))
        throw new c("Bad hmac size " + a.length);
      var i = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [t, n]);
      return o("WACryptoHmac")
        .hmacSha256(r, i, a.length)
        .then(function (e) {
          return new Uint8Array(e);
        })
        .then(function (e) {
          if (!o("WACryptoUtils").uint8ArraysEqual(e, a))
            throw new c("hmacAndDecrypt hmac mismatch");
        })
        .then(function () {
          var e = n.byteLength % h === C;
          return e === !0 ? n.subarray(0, -10) : n;
        })
        .then(function (n) {
          return E(e, t, n);
        });
    }
    function E(e, t, n) {
      var r = n.subarray(-h);
      return o("WACryptoAesCbc")
        .aesCbcEncrypt(e, d, r)
        .then(function (e) {
          return e.slice(y);
        })
        .then(function (e) {
          return o("WABinary").Binary.build(n, e).readByteArrayView();
        })
        .then(function (n) {
          return o("WACryptoAesCbc").aesCbcDecrypt(e, t, n);
        })
        .then(function (e) {
          return new Uint8Array(e, 0, e.byteLength - d.byteLength);
        })
        .then(function (e) {
          return { plaintext: e, nextIv: r };
        });
    }
    async function k(t, n, a, i, l, c) {
      l > c.scanLengths.length &&
        u.ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "decryptPartialChunks targetScan greater length of scanLength array",
            ])),
        );
      var d = Math.min(l, c.scanLengths.length);
      if (d < 1)
        throw (
          u.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Unable to decrypt partial due to invalid target scan",
              ])),
          ),
          r("err")("Unable to decrypt partial due to invalid target scan")
        );
      for (var m = new (o("WABinary").Binary)(), p = [], _ = 0; _ < d; _++)
        p.push(new Uint8Array(c.sidecar, _ * 10, 10));
      for (var f = 0, g = n, h = 0, y = 0; y < d; y++) {
        var C = c.alignedScanLengths[y],
          b = f + C,
          v = a.subarray(f, b),
          S = await L(t, g, v, i, p[y]),
          R = S.nextIv,
          E = S.plaintext;
        (m.write(E), (f += C), (g = R), (h += c.scanLengths[y]));
      }
      var k = m.readBuffer(h),
        I = await o("WACryptoSha256").sha256(k);
      return {
        plaintextHash: o("WAHashUtils").toPlaintextHash(I),
        plaintext: k,
      };
    }
    function I(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 1, r = e.length, o = 0; o < r; o++)
        n &= e[o] === t[o] ? 1 : 0;
      return n !== 0;
    }
    ((l.HmacValidationError = c),
      (l.DEFAULT_PADDING = d),
      (l.computeMediaKeys = p),
      (l.computeMediaKeysForPreview = _),
      (l.deprecated_getAllCommonComputedMediaKeys = f),
      (l.convertServerMediaTypeToPreviewMediaType = g),
      (l.CBC_BLOCK_SIZE = h),
      (l.IV_LENGTH = y),
      (l.HMAC_LENGTH = C),
      (l.encryptAndHmac = v),
      (l.hmacCiphertext = S),
      (l.hmacAndDecrypt = R),
      (l.hmacAndDecryptPartial = L),
      (l.decryptPartialChunks = k));
  },
  98,
);
