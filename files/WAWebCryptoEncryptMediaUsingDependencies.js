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
    "WAWebServerPropConstants",
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
      return e > o("WAWebServerPropConstants").DEFAULT_MAX_FILE_SIZE_BYTES;
    }
    function p(e) {
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
    function _(e) {
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
    var f = new Map([
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, p],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO, p],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, _],
    ]);
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l,
              s,
              u = a.encKey,
              p = a.iv,
              _ = a.macKey,
              g = m(e.byteLength)
                ? yield o("WACryptoAesCbc").aesCbcEncryptWithChunking({
                    encKey: u,
                    plaintext: e,
                    optionalIv: p,
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
                : yield o("WACryptoAesCbc").aesCbcEncrypt(u, e, p),
              h = yield i.computeHmac({
                macKey: _,
                data: g,
                length: d,
                plaintextByteLength: e.byteLength,
              }),
              y = h.data,
              C = h.hmac,
              b = h.macKey,
              v =
                (l =
                  (s = f.get(t)) == null
                    ? void 0
                    : s({
                        plaintext: e,
                        ivCiphertext: y,
                        signature: C,
                        macKey: b,
                      })) != null
                  ? l
                  : {},
              S = v.sidecar,
              R = S === void 0 ? (c || (c = n("Promise"))).resolve() : S,
              L = v.firstFrameSidecar,
              E = L === void 0 ? (c || (c = n("Promise"))).resolve() : L,
              k = new Uint8Array(y).subarray(p.byteLength),
              I = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                k,
                new Uint8Array(C),
              ]).buffer,
              T = i.computeFilehash({
                ciphertextHmac: I,
                plaintextByteLength: e.byteLength,
              }),
              D = yield o("WAPromiseProps").promiseProps({
                filehash: T,
                sidecar: R,
                firstFrameSidecar: E,
              });
            return {
              ciphertextHmac: D.filehash.ciphertextHmac,
              hash: D.filehash.hash,
              sidecar: D.sidecar,
              firstFrameSidecar: D.firstFrameSidecar,
            };
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(t) {
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
              return g(l, d, e, t);
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
    l.createEncryptMediaUsingDependencies = y;
  },
  98,
);
