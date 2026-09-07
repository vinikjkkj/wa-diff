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
      p = 10,
      _ = 3e3;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            a.byteLength < p)
          )
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "ciphertext too short: " + a.byteLength,
            );
          var _ = c.encKey,
            f = c.iv,
            g = c.macKey,
            y = o("WATypedArraysCast").castTypedArrays(Uint8Array, a);
          try {
            var b = o("WAWebABProps").getABPropConfigValue(
                "web_media_compute_in_worker_enabled",
              ),
              S = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                new Uint8Array(f),
                y.subarray(0, 0 - p),
              ]);
            return yield (
              b
                ? v({ macKey: g, data: S, truncateLength: p })
                : o("WACryptoHmac").hmacSha256(g, S, p)
            )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = y.buffer.slice(0 - p);
                      if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
                        throw new (o(
                          "WAWebMediaFileErrors",
                        ).MediaDecryptionError)("decryptMedia: hmac mismatch");
                      d && (yield r("WAWebCommonTaskScheduler").yield());
                      var n = y.subarray(0, 0 - p);
                      return b
                        ? h({ encKey: _, iv: f, ciphertext: n })
                        : C({ encKey: _, iv: f, ciphertext: n });
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
                      var t = b
                        ? yield R(e)
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
            var L = r("getErrorSafe")(e);
            throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "decryption error: " + String(L) + "; stack: " + L.stack,
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.encKey,
            r = e.iv,
            a = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                _,
                "[media][crypto] backend worker bridge timed out",
              )
              .catch(function (e) {
                if (e instanceof o("WACustomError").TimeoutError) return null;
                throw e;
              });
          if (a == null) {
            var i = o("WAWebABPropsCache").isABPropConfigsReady(),
              l = o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady();
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] worker bridge timeout, fallback to main ",
                    "",
                  ])),
                { isABPropsReady: i, isBridgeReady: l },
              ),
              C({ encKey: n, iv: r, ciphertext: t })
            );
          }
          return a.sendAndReceive(
            "crypto",
            "aesCbcDecrypt",
            { encKey: n, iv: r, ciphertext: t },
            !1,
            void 0,
            void 0,
            [t.buffer],
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ciphertext,
            n = e.encKey,
            r = e.iv;
          return o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.data,
            n = e.macKey,
            r = e.truncateLength,
            a = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                _,
                "[media][crypto] backend worker bridge timed out (hmac)",
              )
              .catch(function (e) {
                if (e instanceof o("WACustomError").TimeoutError) return null;
                throw e;
              });
          return a == null
            ? (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              _,
              "[media][crypto] backend worker bridge timed out (filehash)",
            )
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError) return null;
              throw e;
            });
          return t == null
            ? (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[media][crypto] bridge timeout (filehash), main fallback",
                  ])),
              ),
              o("WAMediaCalculateFilehash").calculateFilehash(e))
            : t.sendAndReceive("crypto", "sha256Base64", { data: e });
        })),
        L.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
