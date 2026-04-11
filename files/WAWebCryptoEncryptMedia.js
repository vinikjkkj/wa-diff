__d(
  "WAWebCryptoEncryptMedia",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 10;
    function _(e) {
      var t = e.ivCiphertext,
        r = e.macKey,
        a = e.signature,
        i = o("WAArrayBuffersConcat").concatArrayBuffers(t, a);
      return {
        sidecar: o(
          "WAWebCryptoCalculateStreamingSidecar",
        ).calculateStreamingSidecar(i, r),
        firstFrameSidecar: (m || (m = n("Promise"))).resolve(),
      };
    }
    function f(e) {
      var t = e.ivCiphertext,
        a = e.macKey,
        i = e.plaintext,
        l = e.signature,
        s = o("WAWebWebpParseWebp").parseWebp(i),
        u = s.firstFrameLength;
      return {
        sidecar: (m || (m = n("Promise"))).resolve(),
        firstFrameSidecar:
          u != null
            ? r("WAWebCryptoCalculateFirstFrameSidecar")(
                u,
                o("WAArrayBuffersConcat").concatArrayBuffers(t, l),
                a,
              )
            : (m || (m = n("Promise"))).resolve(),
      };
    }
    var g = new Map([
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, _],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO, _],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, f],
    ]);
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l,
            s = a.encKey,
            u = a.iv,
            _ = a.macKey,
            f = o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(
              e.byteLength,
            ),
            h = _,
            y = o("WAWebMmsPerformanceExperimentSwitch").shouldEncryptInChunks(
              e.byteLength,
            )
              ? yield o("WACryptoAesCbc").aesCbcEncryptWithChunking({
                  encKey: s,
                  plaintext: e,
                  optionalIv: u,
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
              : yield o("WACryptoAesCbc").aesCbcEncrypt(s, e, u),
            C;
          if (f) {
            var b = yield o("WAWebMediaWorkerProxy").hmacSha256InWorker(
                h,
                y,
                p,
              ),
              v = b.result,
              S = b.transferredBuffer,
              R = b.transferredKeyBuffer;
            ((h = R),
              (y = S),
              v.success
                ? (C = v.value.hmac)
                : o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hmacSha256InWorker: size:",
                          ", failed: ",
                          "",
                        ])),
                      y.byteLength,
                      v.error,
                    )
                    .sendLogs("worker-hmac-sha256-failed"));
          }
          C == null && (C = yield o("WACryptoHmac").hmacSha256(h, y, p));
          var L =
              (i =
                (l = g.get(t)) == null
                  ? void 0
                  : l({
                      plaintext: e,
                      ivCiphertext: y,
                      signature: C,
                      macKey: h,
                    })) != null
                ? i
                : {},
            E = L.sidecar,
            k = E === void 0 ? (m || (m = n("Promise"))).resolve() : E,
            I = L.firstFrameSidecar,
            T = I === void 0 ? (m || (m = n("Promise"))).resolve() : I,
            D = new Uint8Array(y).subarray(u.byteLength),
            x = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              D,
              new Uint8Array(C),
            ]).buffer,
            $;
          f
            ? ($ = o("WAWebMediaWorkerProxy")
                .calculateFilehashInWorker(x)
                .then(function (e) {
                  var t = e.result,
                    n = e.transferredBuffer;
                  return (
                    (x = n),
                    t.success
                      ? t.value.filehash
                      : (o("WALogger")
                          .WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "calculateFilehashInWorker: size:",
                                " failed: ",
                                "",
                              ])),
                            x.byteLength,
                            t.error,
                          )
                          .sendLogs("worker-calculate-filehash-error"),
                        o("WAMediaCalculateFilehash").calculateFilehash(x))
                  );
                }))
            : ($ = o("WAMediaCalculateFilehash").calculateFilehash(x));
          var P = yield o("WAPromiseProps").promiseProps({
            hash: $,
            sidecar: k,
            firstFrameSidecar: T,
          });
          return babelHelpers.extends({ ciphertextHmac: x }, P);
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      var a = t.mediaKey,
        i = t.plaintext,
        l = t.type;
      return new (m || (m = n("Promise")))(function (t, n) {
        var c = { mediaKey: a.slice(0, 10), type: l };
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptMedia: start",
              ])),
          ),
          !l)
        )
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMedia: missing "type"',
          );
        if (!a)
          throw new (o("WAWebMiscErrors").MediaEncryptionError)(
            'encryptMedia: missing "mediaKey"',
          );
        r("WAWebCryptoCreateMediaKeys")(l, a)
          .then(function (e) {
            return h(i, l, e);
          })
          .then(function (e) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMedia: success",
                ])),
            ),
              t(e));
          })
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMedia: error",
                  ])),
              ),
              e instanceof o("WAWebMiscErrors").MediaEncryptionError
                ? e
                : new (o("WAWebMiscErrors").MediaEncryptionError)(
                    "encryption error: " + String(e) + "; stack: " + e.stack,
                  )
            );
          })
          .catch(n);
      });
    }
    l.default = C;
  },
  98,
);
