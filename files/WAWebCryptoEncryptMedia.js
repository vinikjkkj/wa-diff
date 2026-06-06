__d(
  "WAWebCryptoEncryptMedia",
  [
    "WAArrayBuffersConcat",
    "WACommonTaskScheduler",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAPromiseProps",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebCryptoCalculateFirstFrameSidecar",
    "WAWebCryptoCalculateStreamingSidecar",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMediaWorkerProxy",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebMmsPerformanceExperimentSwitch",
    "WAWebPREGatingUtils",
    "WAWebWebpParseWebp",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 10;
    function p(e) {
      var t = e.ivCiphertext,
        n = e.macKey,
        r = e.signature,
        a = o("WAArrayBuffersConcat").concatArrayBuffers(t, r);
      return {
        sidecar: o(
          "WAWebCryptoCalculateStreamingSidecar",
        ).calculateStreamingSidecar(a, n),
        firstFrameSidecar: Promise.resolve(),
      };
    }
    function _(e) {
      var t = e.ivCiphertext,
        n = e.macKey,
        a = e.plaintext,
        i = e.signature,
        l = o("WAWebWebpParseWebp").parseWebp(a),
        s = l.firstFrameLength;
      return {
        sidecar: Promise.resolve(),
        firstFrameSidecar:
          s != null
            ? r("WAWebCryptoCalculateFirstFrameSidecar")(
                s,
                o("WAArrayBuffersConcat").concatArrayBuffers(t, i),
                n,
              )
            : Promise.resolve(),
      };
    }
    var f = new Map([
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, p],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO, p],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, _],
    ]);
    async function g(t, n, a) {
      var i,
        l,
        u = a.encKey,
        c = a.iv,
        d = a.macKey,
        p = o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(
          t.byteLength,
        ),
        _ = d,
        g = o("WAWebMmsPerformanceExperimentSwitch").shouldEncryptInChunks(
          t.byteLength,
        )
          ? await o("WACryptoAesCbc").aesCbcEncryptWithChunking({
              encKey: u,
              plaintext: t,
              optionalIv: c,
              delayInBetween: o("WAWebABProps").getABPropConfigValue(
                "web_anr_media_chunk_enc_delay_enabled",
              ),
              yieldFn: o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? function () {
                    return r("WACommonTaskScheduler").yield();
                  }
                : void 0,
            })
          : await o("WACryptoAesCbc").aesCbcEncrypt(u, t, c),
        h;
      if (p) {
        var y = await o("WAWebMediaWorkerProxy").hmacSha256InWorker(_, g, m),
          C = y.result,
          b = y.transferredBuffer,
          v = y.transferredKeyBuffer;
        ((_ = v),
          (g = b),
          C.success
            ? (h = C.value.hmac)
            : o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hmacSha256InWorker: size:",
                      ", failed: ",
                      "",
                    ])),
                  g.byteLength,
                  C.error,
                )
                .sendLogs("worker-hmac-sha256-failed"));
      }
      h == null && (h = await o("WACryptoHmac").hmacSha256(_, g, m));
      var S =
          (i =
            (l = f.get(n)) == null
              ? void 0
              : l({
                  plaintext: t,
                  ivCiphertext: g,
                  signature: h,
                  macKey: _,
                })) != null
            ? i
            : {},
        R = S.sidecar,
        L = R === void 0 ? Promise.resolve() : R,
        E = S.firstFrameSidecar,
        k = E === void 0 ? Promise.resolve() : E,
        I = new Uint8Array(g).subarray(c.byteLength),
        T = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
          I,
          new Uint8Array(h),
        ]).buffer,
        D;
      p
        ? (D = o("WAWebMediaWorkerProxy")
            .calculateFilehashInWorker(T)
            .then(function (e) {
              var t = e.result,
                n = e.transferredBuffer;
              return (
                (T = n),
                t.success
                  ? t.value.filehash
                  : (o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "calculateFilehashInWorker: size:",
                            " failed: ",
                            "",
                          ])),
                        T.byteLength,
                        t.error,
                      )
                      .sendLogs("worker-calculate-filehash-error"),
                    o("WAMediaCalculateFilehash").calculateFilehash(T))
              );
            }))
        : (D = o("WAMediaCalculateFilehash").calculateFilehash(T));
      var x = await o("WAPromiseProps").promiseProps({
        hash: D,
        sidecar: L,
        firstFrameSidecar: k,
      });
      return babelHelpers.extends({ ciphertextHmac: T }, x);
    }
    function h(e) {
      var t = e.mediaKey,
        n = e.plaintext,
        a = e.type;
      return new Promise(function (e, i) {
        var l = { mediaKey: t.slice(0, 10), type: a };
        if (
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "encryptMedia: start",
              ])),
          ),
          !a)
        )
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMedia: missing "type"',
          );
        if (!t)
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMedia: missing "mediaKey"',
          );
        r("WAWebCryptoCreateMediaKeys")(a, t)
          .then(function (e) {
            return g(n, a, e);
          })
          .then(function (t) {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMedia: success",
                ])),
            ),
              e(t));
          })
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMedia: error",
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
          .catch(i);
      });
    }
    l.default = h;
  },
  98,
);
