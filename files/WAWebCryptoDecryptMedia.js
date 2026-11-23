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
    async function g(t) {
      var n = t.ciphertextHmac,
        a = t.debugString,
        i = t.expectedPlaintextHash,
        l = t.mediaKeys,
        c = o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_media_decryption_enabled",
        );
      await r("WAWebCommonTaskScheduler").yield();
      var d = { mediaKeys: l };
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "decryptMedia: [",
              "] start",
            ])),
          a,
        ),
        n.byteLength < _)
      )
        throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
          "ciphertext too short: " + n.byteLength,
        );
      var m = l.encKey,
        p = l.iv,
        f = l.macKey,
        g = o("WATypedArraysCast").castTypedArrays(Uint8Array, n);
      try {
        var v = o("WAWebABProps").getABPropConfigValue(
            "web_media_compute_in_worker_enabled",
          ),
          S = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            new Uint8Array(p),
            g.subarray(0, 0 - _),
          ]);
        return await (
          v
            ? C({ macKey: f, data: S, truncateLength: _ })
            : o("WACryptoHmac").hmacSha256(f, S, _)
        )
          .then(async function (e) {
            var t = g.buffer.slice(0 - _);
            if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
              throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                "decryptMedia: " +
                  o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR,
              );
            c && (await r("WAWebCommonTaskScheduler").yield());
            var n = g.subarray(0, 0 - _);
            return v
              ? h({ encKey: m, iv: p, ciphertext: n })
              : y({ encKey: m, iv: p, ciphertext: n });
          })
          .then(async function (e) {
            if (i == null) return e;
            c && (await r("WAWebCommonTaskScheduler").yield());
            var t = v
              ? await b(e)
              : await o("WAMediaCalculateFilehash").calculateFilehash(e);
            if (t !== i)
              throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                "decryptMedia: " +
                  o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptMedia: [",
                    "] success",
                  ])),
                a,
              ),
              e
            );
          });
      } catch (e) {
        if (
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "decryptMedia: [",
                "] error",
              ])),
            a,
          ),
          e instanceof o("WAWebMediaFileErrors").MediaDecryptionError)
        )
          throw e;
        var R = r("getErrorSafe")(e);
        throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
          "decryption error: " + String(R) + "; stack: " + String(R.stack),
        );
      }
    }
    async function h(e) {
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
          y({ encKey: n, iv: r, ciphertext: t.slice() })
        );
      var i = await o("WAPromiseTimeout")
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
          y({ encKey: n, iv: r, ciphertext: t })
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
    }
    async function y(e) {
      var t = e.ciphertext,
        n = e.encKey,
        r = e.iv;
      return o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
    }
    async function C(e) {
      var t = e.data,
        n = e.macKey,
        r = e.truncateLength,
        a = await o("WAPromiseTimeout")
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
    }
    async function b(e) {
      var t = await o("WAPromiseTimeout")
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
    }
    l.default = g;
  },
  98,
);
