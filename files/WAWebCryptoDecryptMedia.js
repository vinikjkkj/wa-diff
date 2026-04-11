__d(
  "WAWebCryptoDecryptMedia",
  [
    "Promise",
    "WACommonTaskScheduler",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseDelays",
    "WAPromiseTimeout",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebMiscErrors",
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
            ),
            m = o("WAWebABProps").getABPropConfigValue(
              "wmi_worker_scheduler_web",
            );
          m
            ? yield r("WACommonTaskScheduler").yield()
            : d
              ? yield o("WAPromiseDelays").releaseToEventLoop()
              : yield (p || (p = n("Promise"))).resolve();
          var f = { mediaKeys: c };
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
            throw new (o("WAWebMiscErrors").MediaDecryptionError)(
              "ciphertext too short: " + a.byteLength,
            );
          var g = c.encKey,
            h = c.iv,
            C = c.macKey,
            v = o("WATypedArraysCast").castTypedArrays(Uint8Array, a);
          try {
            var R = o("WAWebABProps").getABPropConfigValue(
                "web_media_compute_in_worker_enabled",
              ),
              E = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                new Uint8Array(h),
                v.subarray(0, 0 - _),
              ]);
            return yield (
              R
                ? S({ macKey: C, data: E, truncateLength: _ })
                : o("WACryptoHmac").hmacSha256(C, E, _)
            )
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = v.buffer.slice(0 - _);
                      if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
                        throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                          "decryptMedia: hmac mismatch",
                        );
                      d &&
                        (m
                          ? yield r("WACommonTaskScheduler").yield()
                          : yield o("WAPromiseDelays").releaseToEventLoop());
                      var n = v.subarray(0, 0 - _);
                      return R
                        ? y({ encKey: g, iv: h, ciphertext: n })
                        : b({ encKey: g, iv: h, ciphertext: n });
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
                      d &&
                        (m
                          ? yield r("WACommonTaskScheduler").yield()
                          : yield o("WAPromiseDelays").releaseToEventLoop());
                      var t = R
                        ? yield L(e)
                        : yield o("WAMediaCalculateFilehash").calculateFilehash(
                            e,
                          );
                      if (t !== l)
                        throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                          "decryptMedia: " +
                            o("WAWebMiscErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
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
              e instanceof o("WAWebMiscErrors").MediaDecryptionError)
            )
              throw e;
            var k = r("getErrorSafe")(e);
            throw new (o("WAWebMiscErrors").MediaDecryptionError)(
              "decryption error: " + String(k) + "; stack: " + k.stack,
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
            a = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                f,
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
              b({ encKey: n, iv: r, ciphertext: t })
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
