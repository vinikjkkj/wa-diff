__d(
  "WAWebCryptoImageStreamer",
  [
    "WAAlignChunkLengthsToMultipleOfAesBlockSize",
    "WAArrayBufferUtils",
    "WAArrayBuffersConcat",
    "WACrypto",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoUtils",
    "WACustomError",
    "WALogger",
    "WANullthrows",
    "WATypedArraysConcat",
    "WAWebIdentityFunction",
    "WAWebMediaInMemoryBlobCache",
    "WAWebPromiseQueue",
    "getErrorSafe",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "Chunk " + t + " does not match sidecar") || this),
            (n.name = "ChunkValidationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      f = 10,
      g = 16,
      h = new Uint8Array([2, 2]),
      y = new Uint8Array([255, 217]),
      C = (function () {
        function t(e) {
          var t;
          ((this._alignedScanLengths = []),
            (this._increasingScanLengths = []),
            (this._lastDecryptedChunk = 0),
            (this._promiseQueue = new (o("WAWebPromiseQueue").PromiseQueue)()),
            (this._downloadedBytes = new ArrayBuffer(0)));
          var n = e.cryptoKeys,
            r = e.debugString,
            a = e.filehash,
            i = e.mimetype,
            l = e.onProgressiveUpdate,
            s = e.scanLengths,
            u = e.scansSidecar;
          ((this._cryptoKeys = n),
            (this._scanLengths = s),
            (this._scansSideCar = u),
            (this._filehash = a),
            (this._mimetype = i),
            (this._nextChunkIV =
              (t = this._cryptoKeys) == null ? void 0 : t.iv),
            (this._decryptedChunks = new Array(s.length)),
            (this._onProgressiveUpdate = l),
            (this._debugString = r));
        }
        var n = t.prototype;
        return (
          (n.setCryptoKeys = function (t) {
            ((this._cryptoKeys = t), (this._nextChunkIV = t.iv));
          }),
          (n._validateSidecar = async function (t, n, a) {
            n === 0 && (this._nextChunkIV = a.iv);
            var e = a.macKey,
              i = this._scansSideCar.slice(n * f, n * f + f),
              l = r("WANullthrows")(this._nextChunkIV);
            this._nextChunkIV = t.slice(0 - g);
            var s = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                new Uint8Array(l),
                new Uint8Array(t),
              ]),
              u = await o("WACryptoHmac").hmacSha256(e, s, f);
            if (!o("WACryptoUtils").arrayBuffersEqual(u, i)) throw new _(n);
          }),
          (n._cleanupCipherTextAndIV = async function (t, n, r) {
            var e = t,
              a = n === 0,
              i = e.byteLength % g === 0,
              l = !i,
              s;
            if (a) s = r.iv;
            else {
              var u = this._increasingScanLengths[n - 1];
              s = this._downloadedBytes.slice(u - g, u);
            }
            if ((l && (e = e.slice(0, e.byteLength - f)), i)) {
              var c = await b(e, r);
              return {
                cipherText: o("WATypedArraysConcat").concatTypedArrays(
                  Uint8Array,
                  [new Uint8Array(e), new Uint8Array(c)],
                ),
                iv: s,
              };
            }
            return { cipherText: e, iv: s };
          }),
          (n._getLastFullyLoadedChunkIndex = function (t) {
            for (var e = 0, n = 0; n < this._alignedScanLengths.length; n++)
              if (((e += this._alignedScanLengths[n]), t < e)) return n;
            return this._alignedScanLengths.length;
          }),
          (n._handleChunk = async function (n, r, a) {
            await this._validateSidecar(n, r, a);
            var t = await this._cleanupCipherTextAndIV(n, r, a),
              i = t.cipherText,
              l = t.iv,
              s = await o("WACryptoAesCbc").aesCbcDecrypt(a.encKey, l, i),
              u = await o("WACrypto").removeEncryptedPadding(s, h.buffer);
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ImageStreamer: [",
                    "] Successfully decrypted chunk ",
                    " of ",
                    " total",
                  ])),
                this._debugString,
                r + 1,
                this._scanLengths.length,
              ),
              u
            );
          }),
          (n._generateBlobFromFullyLoadedChunks = async function (t) {
            var e,
              n = await Promise.all(this._decryptedChunks.slice(0, t)),
              a = r("sumBy")(
                this._scanLengths.slice(0, t),
                o("WAWebIdentityFunction").identityFunction,
              ),
              i = o("WATypedArraysConcat")
                .concatTypedArrays(
                  Uint8Array,
                  n.map(function (e) {
                    return new Uint8Array(e);
                  }),
                )
                .slice(0, a),
              l = o("WACryptoUtils").arrayBuffersEqual(
                y.buffer,
                i.slice(-y.length).buffer,
              )
                ? i
                : o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    i,
                    y,
                  ]),
              u = [l],
              c =
                this._mimetype != null
                  ? new Blob(u, { type: this._mimetype })
                  : new Blob(u),
              d = v(this._filehash, t);
            return (
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(d, c),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[ImageStreamer] progressive img ",
                    "/",
                    " chunks",
                  ])),
                t,
                this._scanLengths.length,
              ),
              (e = this._onProgressiveUpdate) == null || e.call(this, t),
              (this._lastDecryptedChunk = t),
              l.buffer
            );
          }),
          (n._decryptFullyLoadedChunks = async function (t, n, r) {
            for (var e = 0; e < n; e++)
              if (!this._decryptedChunks[e]) {
                var o = e === 0 ? 0 : this._increasingScanLengths[e - 1],
                  a = t.slice(o, o + this._alignedScanLengths[e]);
                (await Promise.all(this._decryptedChunks),
                  this._decryptedChunks[e] ||
                    (this._decryptedChunks[e] = this._handleChunk(a, e, r)));
              }
          }),
          (n.handleProgress = function (t, n) {
            var e = this;
            return this._promiseQueue.enqueue(async function () {
              if (!e._alignedScanLengths.length) {
                e._alignedScanLengths = o(
                  "WAAlignChunkLengthsToMultipleOfAesBlockSize",
                ).alignChunkLengthsToMultipleOfAesBlockSize(e._scanLengths, t);
                for (var a = 0; a < e._alignedScanLengths.length; a++) {
                  var i = e._alignedScanLengths[a],
                    l = a === 0 ? i : e._increasingScanLengths[a - 1] + i;
                  e._increasingScanLengths.push(l);
                }
              }
              var s =
                  typeof n == "string"
                    ? n.length
                    : n.byteLength + e._downloadedBytes.byteLength,
                f = e._getLastFullyLoadedChunkIndex(s),
                g = e._cryptoKeys;
              if (f <= e._lastDecryptedChunk || g == null)
                return (
                  (e._downloadedBytes = o(
                    "WAArrayBuffersConcat",
                  ).concatArrayBuffers(
                    e._downloadedBytes,
                    typeof n == "string"
                      ? await o("WAArrayBufferUtils").largeStringToArrayBuffer(
                          n.slice(e._downloadedBytes.byteLength),
                        )
                      : n,
                  )),
                  null
                );
              try {
                var h =
                  typeof n == "string"
                    ? await o("WAArrayBufferUtils").largeStringToArrayBuffer(
                        n.slice(e._downloadedBytes.byteLength),
                      )
                    : n;
                return (
                  (e._downloadedBytes = o(
                    "WAArrayBuffersConcat",
                  ).concatArrayBuffers(e._downloadedBytes, h)),
                  await e._decryptFullyLoadedChunks(e._downloadedBytes, f, g),
                  await e._generateBlobFromFullyLoadedChunks(f)
                );
              } catch (t) {
                var y = r("getErrorSafe")(t);
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ImageStreamer:handleProgress error: ",
                        "",
                      ])),
                    y.message,
                  )
                  .catching(y);
                var C =
                  y.message +
                  ", [" +
                  e._debugString +
                  "]" +
                  ("scanLengths length: " +
                    e._scanLengths.length +
                    ", scansSidecar byteLength: " +
                    e._scansSideCar.byteLength +
                    ".");
                t instanceof _
                  ? (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "ImageStreamer:chunk validation error: ",
                          "",
                        ])),
                      C,
                    ),
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:chunk validation error",
                          ])),
                      )
                      .tags("non-sad")
                      .sendLogs("ImageStreamer:chunk validation error", {
                        sampling: 0.01,
                      }))
                  : (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "ImageStreamer:handleProgress error: ",
                          "",
                        ])),
                      C,
                    ),
                    o("WALogger")
                      .ERROR(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:handleProgress error",
                          ])),
                      )
                      .sendLogs("ImageStreamer:handleProgress error"));
              }
            });
          }),
          t
        );
      })();
    async function b(e, t) {
      var n = t.encKey,
        r = await o("WACryptoAesCbc").aesCbcEncrypt(
          n,
          h,
          new Uint8Array(e.slice(0 - g)),
        );
      return r.slice(0 - g);
    }
    function v(e, t) {
      return e + "-progressive-" + t;
    }
    function S(e, t) {
      if (t != null && Number.isInteger(t))
        for (var n = t; n > 0; )
          (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(
            v(e, n),
          ),
            n--);
      o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(e);
    }
    ((l.EOI_TAG = y),
      (l.ImageStreamer = C),
      (l.getProgressiveMediaCacheKey = v),
      (l.deleteFromInMemoryMediaBlobCache = S));
  },
  98,
);
