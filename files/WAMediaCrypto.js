__d(
  "WAMediaCrypto",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["WAMediaCrypto"]),
      d = (function (e) {
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
      m = new Uint8Array([2, 2]);
    function p(e, t) {
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
    function _(e, t) {
      var n = o("WAMediaHkdfInfo").getMediaHkdfInfo(t);
      return p(e, n);
    }
    function f(e) {
      var t = o("WAMediaHkdfInfo").getPreviewMediaHkdfInfo();
      return p(e, t);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            r = yield f(e);
          t.set("preview", r);
          var o = [
            "document",
            "image",
            "video",
            "audio",
            "md-app-state",
            "md-msg-hist",
          ];
          return (
            yield (u || (u = n("Promise"))).all(
              o.map(function (n) {
                return _(e, n).then(function (e) {
                  t.set(n, e);
                });
              }),
            ),
            t
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      switch (e) {
        case "image":
        case "video":
          return e;
        default:
          return null;
      }
    }
    var C = 16,
      b = 16,
      v = 10,
      S = 64 * 1024;
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            var l = new (o("WABinary").Binary)();
            (l.ensureCapacity(b + a.byteLength + C + v), l.writeByteArray(t));
            for (
              var s = new (o("WACryptoAesCbc").AesCbcStream)(
                  l,
                  "encrypt",
                  e,
                  t,
                ),
                c = 0,
                d = c + S;
              d < a.byteLength;
            ) {
              var m = a.slice(c, d);
              (yield s.append(new Uint8Array(m)), (c = d), (d += S));
            }
            var p = yield a.slice(c);
            yield s.finalize(new Uint8Array(p));
            var _ = l.peek(function (e) {
                return e.readByteArrayView();
              }),
              f = yield o("WACryptoHmac").encodeKeySha256(r),
              g = yield o("WACryptoHmac").sign(f, _);
            l.writeByteArray(new Uint8Array(g, 0, v));
            var h = l.readByteArrayView(),
              y = h.subarray(b),
              R = yield (u || (u = n("Promise"))).all([
                o("WACryptoDependencies")
                  .getCrypto()
                  .subtle.digest("SHA-256", y),
                o("WAMediaCryptoSidecar").shouldHaveStreamingSidecar(i)
                  ? o("WAMediaCryptoSidecar").calculateStreamingSidecar(f, h)
                  : void 0,
              ]),
              L = R[0],
              E = R[1];
            return {
              ciphertext: y,
              ciphertextHash: L,
              sidecar: E,
              ivCiphertext: _,
              ivCiphertextHmac: h,
            };
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WACryptoHmac").encodeKeySha256(e),
            a = o("WABinary").Binary.build(t, n).readByteArrayView();
          return o("WACryptoHmac").sign(r, a);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r, o) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (!(10 <= a.length && a.length <= 32))
              throw new d("Bad hmac size " + a.length);
            var i = o("WABinary").Binary.build(t, n).readByteArrayView(),
              l = yield o("WACryptoHmac")
                .hmacSha256(r, i)
                .then(function (e) {
                  return new Uint8Array(e);
                }),
              s = l.slice(0, a.length);
            if (!N(s, a)) throw new d("hmacAndDecrypt hmac mismatch");
            var u = yield o("WACryptoAesCbc").aesCbcDecrypt(e, t, n),
              c = yield o("WACryptoDependencies")
                .getCrypto()
                .subtle.digest("SHA-256", u);
            return {
              plaintextHash: o("WAHashUtils").toPlaintextHash(c),
              plaintext: u,
            };
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, a) {
      if (!(10 <= a.length && a.length <= 32))
        throw new d("Bad hmac size " + a.length);
      var i = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [t, n]);
      return o("WACryptoHmac")
        .hmacSha256(r, i, a.length)
        .then(function (e) {
          return new Uint8Array(e);
        })
        .then(function (e) {
          if (!o("WACryptoUtils").uint8ArraysEqual(e, a))
            throw new d("hmacAndDecrypt hmac mismatch");
        })
        .then(function () {
          var e = n.byteLength % C === v;
          return e === !0 ? n.subarray(0, -10) : n;
        })
        .then(function (n) {
          return x(e, t, n);
        });
    }
    function x(e, t, n) {
      var r = n.subarray(-C);
      return o("WACryptoAesCbc")
        .aesCbcEncrypt(e, m, r)
        .then(function (e) {
          return e.slice(b);
        })
        .then(function (e) {
          return o("WABinary").Binary.build(n, e).readByteArrayView();
        })
        .then(function (n) {
          return o("WACryptoAesCbc").aesCbcDecrypt(e, t, n);
        })
        .then(function (e) {
          return new Uint8Array(e, 0, e.byteLength - m.byteLength);
        })
        .then(function (e) {
          return { plaintext: e, nextIv: r };
        });
    }
    function $(e, t, n, r, o, a) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, u) {
            l > u.scanLengths.length &&
              c.ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptPartialChunks targetScan greater length of scanLength array",
                  ])),
              );
            var d = Math.min(l, u.scanLengths.length);
            if (d < 1)
              throw (
                c.ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Unable to decrypt partial due to invalid target scan",
                    ])),
                ),
                r("err")("Unable to decrypt partial due to invalid target scan")
              );
            for (
              var m = new (o("WABinary").Binary)(), p = [], _ = 0;
              _ < d;
              _++
            )
              p.push(new Uint8Array(u.sidecar, _ * 10, 10));
            for (var f = 0, g = n, h = 0, y = 0; y < d; y++) {
              var C = u.alignedScanLengths[y],
                b = f + C,
                v = a.subarray(f, b),
                S = yield D(t, g, v, i, p[y]),
                R = S.nextIv,
                L = S.plaintext;
              (m.write(L), (f += C), (g = R), (h += u.scanLengths[y]));
            }
            var E = m.readBuffer(h),
              k = yield o("WACryptoSha256").sha256(E);
            return {
              plaintextHash: o("WAHashUtils").toPlaintextHash(k),
              plaintext: E,
            };
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 1, r = e.length, o = 0; o < r; o++)
        n &= e[o] === t[o] ? 1 : 0;
      return n !== 0;
    }
    ((l.HmacValidationError = d),
      (l.DEFAULT_PADDING = m),
      (l.computeMediaKeys = _),
      (l.computeMediaKeysForPreview = f),
      (l.deprecated_getAllCommonComputedMediaKeys = g),
      (l.convertServerMediaTypeToPreviewMediaType = y),
      (l.CBC_BLOCK_SIZE = C),
      (l.IV_LENGTH = b),
      (l.HMAC_LENGTH = v),
      (l.encryptAndHmac = R),
      (l.hmacCiphertext = E),
      (l.hmacAndDecrypt = I),
      (l.hmacAndDecryptPartial = D),
      (l.decryptPartialChunks = $));
  },
  98,
);
