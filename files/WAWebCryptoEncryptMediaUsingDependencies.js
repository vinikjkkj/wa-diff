__d(
  "WAWebCryptoEncryptMediaUsingDependencies",
  [
    "Promise",
    "WAArrayBuffersConcat",
    "WACommonTaskScheduler",
    "WACryptoAesCbc",
    "WALogger",
    "WAPromiseProps",
    "WATypedArraysConcat",
    "WAWebABProps",
    "WAWebCryptoCalculateFirstFrameSidecar",
    "WAWebCryptoCalculateStreamingSidecar",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebMmsPerformanceExperimentSwitch",
    "WAWebWebpParseWebp",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 10;
    function m(e) {
      var t = e.ivCiphertext,
        r = e.macKey,
        a = e.signature,
        i = o("WAArrayBuffersConcat").concatArrayBuffers(t, a);
      return {
        sidecar: o(
          "WAWebCryptoCalculateStreamingSidecar",
        ).calculateStreamingSidecar(i, r),
        firstFrameSidecar: (c || (c = n("Promise"))).resolve(),
      };
    }
    function p(e) {
      var t = e.ivCiphertext,
        a = e.macKey,
        i = e.plaintext,
        l = e.signature,
        s = o("WAWebWebpParseWebp").parseWebp(i),
        u = s.firstFrameLength;
      return {
        sidecar: (c || (c = n("Promise"))).resolve(),
        firstFrameSidecar:
          u != null
            ? r("WAWebCryptoCalculateFirstFrameSidecar")(
                u,
                o("WAArrayBuffersConcat").concatArrayBuffers(t, l),
                a,
              )
            : (c || (c = n("Promise"))).resolve(),
      };
    }
    var _ = new Map([
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, m],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO, m],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, p],
    ]);
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l,
              s,
              u = a.encKey,
              m = a.iv,
              p = a.macKey,
              f = o(
                "WAWebMmsPerformanceExperimentSwitch",
              ).shouldEncryptInChunks(e.byteLength)
                ? yield o("WACryptoAesCbc").aesCbcEncryptWithChunking({
                    encKey: u,
                    plaintext: e,
                    optionalIv: m,
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
                : yield o("WACryptoAesCbc").aesCbcEncrypt(u, e, m),
              g = yield i.computeHmac({
                macKey: p,
                data: f,
                length: d,
                plaintextByteLength: e.byteLength,
              }),
              h = g.data,
              y = g.hmac,
              C = g.macKey,
              b =
                (l =
                  (s = _.get(t)) == null
                    ? void 0
                    : s({
                        plaintext: e,
                        ivCiphertext: h,
                        signature: y,
                        macKey: C,
                      })) != null
                  ? l
                  : {},
              v = b.sidecar,
              S = v === void 0 ? (c || (c = n("Promise"))).resolve() : v,
              R = b.firstFrameSidecar,
              L = R === void 0 ? (c || (c = n("Promise"))).resolve() : R,
              E = new Uint8Array(h).subarray(m.byteLength),
              k = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                E,
                new Uint8Array(y),
              ]).buffer,
              I = i.computeFilehash({
                ciphertextHmac: k,
                plaintextByteLength: e.byteLength,
              }),
              T = yield o("WAPromiseProps").promiseProps({
                filehash: I,
                sidecar: S,
                firstFrameSidecar: L,
              });
            return {
              ciphertextHmac: T.filehash.ciphertextHmac,
              hash: T.filehash.hash,
              sidecar: T.sidecar,
              firstFrameSidecar: T.firstFrameSidecar,
            };
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(t) {
      return function (i) {
        var a = i.mediaKey,
          l = i.plaintext,
          d = i.type;
        return new (c || (c = n("Promise")))(function (n, i) {
          var c = { mediaKey: a.slice(0, 10), type: d };
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMedia: start",
                ])),
            ),
            !d)
          )
            throw new (o("WAWebMiscErrors").MediaEncryptionError)(
              'encryptMedia: missing "type"',
            );
          if (!a)
            throw new (o("WAWebMiscErrors").MediaEncryptionError)(
              'encryptMedia: missing "mediaKey"',
            );
          r("WAWebCryptoCreateMediaKeys")(d, a)
            .then(function (e) {
              return f(l, d, e, t);
            })
            .then(function (e) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMedia: success",
                  ])),
              ),
                n(e));
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
                      "encryption error: " +
                        String(e) +
                        "; stack: " +
                        r("getErrorSafe")(e).stack,
                    )
              );
            })
            .catch(i);
        });
      };
    }
    l.createEncryptMediaUsingDependencies = h;
  },
  98,
);
