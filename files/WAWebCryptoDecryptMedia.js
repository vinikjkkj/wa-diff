__d(
  "WAWebCryptoDecryptMedia",
  [
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebCommonTaskScheduler",
    "WAWebMediaFileErrors",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 10,
      f = 3e3;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ciphertextHmac,
            i = t.debugString,
            l = t.expectedPlaintextHash,
            c = t.mediaKeys,
            d = o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_media_decryption_enabled",
            );
          yield r("WAWebCommonTaskScheduler").yield();
          var m = { mediaKeys: c };
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptMedia: [",
                  "] start",
                ])),
              i,
            ),
            a.byteLength < _)
          )
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "ciphertext too short: " + a.byteLength,
            );
          var p = c.encKey,
            f = c.iv,
            g = c.macKey,
            h = o("WATypedArraysCast").castTypedArrays(Uint8Array, a);
          try {
            var C = o("WAWebABProps").getABPropConfigValue(
                "web_media_compute_in_worker_enabled",
              ),
              v = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                new Uint8Array(f),
                h.subarray(0, 0 - _),
              ]);
            return yield (
              C
                ? S({ macKey: g, data: v, truncateLength: _ })
                : o("WACryptoHmac").hmacSha256(g, v, _)
            )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = h.buffer.slice(0 - _);
                      if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
                        throw new (o(
                          "WAWebMediaFileErrors",
                        ).MediaDecryptionError)(
                          "decryptMedia: " +
                            o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR,
                        );
                      d && (yield r("WAWebCommonTaskScheduler").yield());
                      var n = h.subarray(0, 0 - _);
                      return C
                        ? y({ encKey: p, iv: f, ciphertext: n })
                        : b({ encKey: p, iv: f, ciphertext: n });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (l == null) return e;
                      d && (yield r("WAWebCommonTaskScheduler").yield());
                      var t = C
                        ? yield L(e)
                        : yield o("WAMediaCalculateFilehash").calculateFilehash(
                            e,
                          );
                      if (t !== l)
                        throw new (o(
                          "WAWebMediaFileErrors",
                        ).MediaDecryptionError)(
                          "decryptMedia: " +
                            o("WAWebMediaFileErrors")
                              .PLAINTEXT_HASH_MISMATCH_ERROR,
                        );
                      return (
                        o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "decryptMedia: [",
                              "] success",
                            ])),
                          i,
                        ),
                        e
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          } catch (e) {
            if (
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] error",
                  ])),
                i,
              ),
              e instanceof o("WAWebMediaFileErrors").MediaDecryptionError)
            )
              throw e;
            var R = r("getErrorSafe")(e);
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "decryption error: " + String(R) + "; stack: " + R.stack,
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.encKey,
            r = e.iv,
            a = t.buffer;
          if (!(a instanceof ArrayBuffer))
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[media][crypto] shared ciphertext buffer, fallback to main",
                    ])),
                )
                .sendLogs("media-decrypt-shared-ciphertext"),
              b({ encKey: n, iv: r, ciphertext: t.slice() })
            );
          var i = yield o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              f,
              "[media][crypto] backend worker bridge timed out",
            )
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError) return null;
              throw e;
            });
          if (i == null) {
            var l = o("WAWebABPropsCache").isABPropConfigsReady(),
              s = o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady();
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] worker bridge timeout, fallback to main ",
                    "",
                  ])),
                { isABPropsReady: l, isBridgeReady: s },
              ),
              b({ encKey: n, iv: r, ciphertext: t })
            );
          }
          return i.sendAndReceive(
            "crypto",
            "aesCbcDecrypt",
            { encKey: n, iv: r, ciphertext: t },
            !1,
            void 0,
            void 0,
            [a],
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.encKey,
            r = e.iv;
          return o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.macKey,
            r = e.truncateLength,
            a = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                f,
                "[media][crypto] backend worker bridge timed out (hmac)",
              )
              .catch(function (e) {
                if (e instanceof o("WACustomError").TimeoutError) return null;
                throw e;
              });
          return a == null
            ? (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout (hmac), main fallback",
                  ])),
              ),
              o("WACryptoHmac").hmacSha256(n, t, r))
            : a.sendAndReceive(
                "crypto",
                "hmacSha256",
                { macKey: n, data: t, truncateLength: r },
                !1,
                void 0,
                void 0,
                [t.buffer],
              );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              f,
              "[media][crypto] backend worker bridge timed out (filehash)",
            )
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError) return null;
              throw e;
            });
          return t == null
            ? (o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout (filehash), main fallback",
                  ])),
              ),
              o("WAMediaCalculateFilehash").calculateFilehash(e))
            : t.sendAndReceive("crypto", "sha256Base64", { data: e });
        })),
        E.apply(this, arguments)
      );
    }
    l.default = g;
  },
  98,
);
