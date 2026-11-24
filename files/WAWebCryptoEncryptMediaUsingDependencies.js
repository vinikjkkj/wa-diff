__d(
  "WAWebCryptoEncryptMediaUsingDependencies",
  [
    "WAArrayBuffersConcat",
    "WACryptoAesCbc",
    "WALogger",
    "WAPromiseProps",
    "WATypedArraysConcat",
    "WAWebCommonTaskScheduler",
    "WAWebCryptoCalculateFirstFrameSidecar",
    "WAWebCryptoCalculateStreamingSidecar",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMediaFileErrors",
    "WAWebMmsMediaTypes",
    "WAWebServerPropConstants",
    "WAWebWebpParseWebp",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 10;
    function d(e) {
      return e > o("WAWebServerPropConstants").DEFAULT_MAX_FILE_SIZE_BYTES;
    }
    function m(e) {
      var t = e.ivCiphertext,
        n = e.macKey,
        r = e.signature,
        a = o("WAArrayBuffersConcat").concatArrayBuffers(t, r);
      return {
        sidecar: o(
          "WAWebCryptoCalculateStreamingSidecar",
        ).calculateStreamingSidecar(a, n),
        firstFrameSidecar: Promise.resolve(void 0),
      };
    }
    function p(e) {
      var t = e.ivCiphertext,
        n = e.macKey,
        a = e.plaintext,
        i = e.signature,
        l = o("WAWebWebpParseWebp").parseWebp(a),
        s = l.firstFrameLength;
      return {
        sidecar: Promise.resolve(void 0),
        firstFrameSidecar:
          s != null
            ? r("WAWebCryptoCalculateFirstFrameSidecar")(
                s,
                o("WAArrayBuffersConcat").concatArrayBuffers(t, i),
                n,
              )
            : Promise.resolve(void 0),
      };
    }
    var _ = new Map([
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO, m],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO, m],
      [o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER, p],
    ]);
    async function f(e, t, n, a) {
      var i,
        l,
        s = n.encKey,
        u = n.iv,
        m = n.macKey,
        p = d(e.byteLength)
          ? await o("WACryptoAesCbc").aesCbcEncryptWithChunking({
              encKey: s,
              plaintext: e,
              optionalIv: u,
              delayInBetween: !0,
              yieldFn: function () {
                return r("WAWebCommonTaskScheduler").yield();
              },
            })
          : await o("WACryptoAesCbc").aesCbcEncrypt(s, e, u),
        f = await a.computeHmac({
          macKey: m,
          data: p,
          length: c,
          plaintextByteLength: e.byteLength,
        }),
        g = f.data,
        h = f.hmac,
        y = f.macKey,
        C =
          (i =
            (l = _.get(t)) == null
              ? void 0
              : l({
                  plaintext: e,
                  ivCiphertext: g,
                  signature: h,
                  macKey: y,
                })) != null
            ? i
            : {},
        b = C.sidecar,
        v = b === void 0 ? Promise.resolve(void 0) : b,
        S = C.firstFrameSidecar,
        R = S === void 0 ? Promise.resolve(void 0) : S,
        L = new Uint8Array(g).subarray(u.byteLength),
        E = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
          L,
          new Uint8Array(h),
        ]).buffer,
        k = a.computeFilehash({
          ciphertextHmac: E,
          plaintextByteLength: e.byteLength,
        }),
        I = await o("WAPromiseProps").promiseProps({
          filehash: k,
          sidecar: v,
          firstFrameSidecar: R,
        });
      return {
        ciphertextHmac: I.filehash.ciphertextHmac,
        hash: I.filehash.hash,
        sidecar: I.sidecar,
        firstFrameSidecar: I.firstFrameSidecar,
      };
    }
    function g(t) {
      return function (a) {
        var n = a.mediaKey,
          i = a.plaintext,
          l = a.type;
        return new Promise(function (a, c) {
          var d = { mediaKey: n.slice(0, 10), type: l };
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptMedia: start",
                ])),
            ),
            !l)
          )
            throw new (o("WAWebMediaFileErrors").MediaEncryptionError)(
              'encryptMedia: missing "type"',
            );
          if (!n)
            throw new (o("WAWebMediaFileErrors").MediaEncryptionError)(
              'encryptMedia: missing "mediaKey"',
            );
          r("WAWebCryptoCreateMediaKeys")(l, n)
            .then(function (e) {
              return f(i, l, e, t);
            })
            .then(function (e) {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptMedia: success",
                  ])),
              ),
                a(e));
            })
            .catch(function (e) {
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptMedia: error",
                    ])),
                ),
                e instanceof o("WAWebMediaFileErrors").MediaEncryptionError
                  ? e
                  : new (o("WAWebMediaFileErrors").MediaEncryptionError)(
                      "encryption error: " +
                        String(e) +
                        "; stack: " +
                        String(r("getErrorSafe")(e).stack),
                    )
              );
            })
            .catch(c);
        });
      };
    }
    l.createEncryptMediaUsingDependencies = g;
  },
  98,
);
