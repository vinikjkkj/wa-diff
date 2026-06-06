__d(
  "WAWebCryptoDecryptMedia",
  [
    "WACommonTaskScheduler",
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
    "WAWebMiscErrors",
    "WAWebReleaseToEventLoop",
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
    async function f(t) {
      var n = t.ciphertextHmac,
        a = t.debugString,
        i = t.expectedPlaintextHash,
        l = t.mediaKeys,
        c = o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_media_decryption_enabled",
        ),
        d = o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web");
      d
        ? await r("WACommonTaskScheduler").yield()
        : c
          ? await o("WAWebReleaseToEventLoop").releaseToEventLoop()
          : await Promise.resolve();
      var m = { mediaKeys: l };
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "decryptMedia: [",
              "] start",
            ])),
          a,
        ),
        n.byteLength < p)
      )
        throw new (o("WAWebMiscErrors").MediaDecryptionError)(
          "ciphertext too short: " + n.byteLength,
        );
      var _ = l.encKey,
        f = l.iv,
        b = l.macKey,
        v = o("WATypedArraysCast").castTypedArrays(Uint8Array, n);
      try {
        var S = o("WAWebABProps").getABPropConfigValue(
            "web_media_compute_in_worker_enabled",
          ),
          R = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
            new Uint8Array(f),
            v.subarray(0, 0 - p),
          ]);
        return await (
          S
            ? y({ macKey: b, data: R, truncateLength: p })
            : o("WACryptoHmac").hmacSha256(b, R, p)
        )
          .then(async function (e) {
            var t = v.buffer.slice(0 - p);
            if (!o("WACryptoUtils").arrayBuffersEqual(e, t))
              throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                "decryptMedia: hmac mismatch",
              );
            c &&
              (d
                ? await r("WACommonTaskScheduler").yield()
                : await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var n = v.subarray(0, 0 - p);
            return S
              ? g({ encKey: _, iv: f, ciphertext: n })
              : h({ encKey: _, iv: f, ciphertext: n });
          })
          .then(async function (e) {
            if (i == null) return e;
            c &&
              (d
                ? await r("WACommonTaskScheduler").yield()
                : await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            var t = S
              ? await C(e)
              : await o("WAMediaCalculateFilehash").calculateFilehash(e);
            if (t !== i)
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
          e instanceof o("WAWebMiscErrors").MediaDecryptionError)
        )
          throw e;
        var L = r("getErrorSafe")(e);
        throw new (o("WAWebMiscErrors").MediaDecryptionError)(
          "decryption error: " + String(L) + "; stack: " + L.stack,
        );
      }
    }
    async function g(e) {
      var t = e.ciphertext,
        n = e.encKey,
        r = e.iv,
        a = await o("WAPromiseTimeout")
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
          h({ encKey: n, iv: r, ciphertext: t })
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
    }
    async function h(e) {
      var t = e.ciphertext,
        n = e.encKey,
        r = e.iv;
      return o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
    }
    async function y(e) {
      var t = e.data,
        n = e.macKey,
        r = e.truncateLength,
        a = await o("WAPromiseTimeout")
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
    }
    async function C(e) {
      var t = await o("WAPromiseTimeout")
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
    }
    l.default = f;
  },
  98,
);
