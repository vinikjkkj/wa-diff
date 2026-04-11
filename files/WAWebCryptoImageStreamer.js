__d(
  "WAWebCryptoImageStreamer",
  [
    "Promise",
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
    "WAWebMediaInMemoryBlobCache",
    "WAWebPromiseQueue",
    "asyncToGeneratorRuntime",
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
      _,
      f = (function (e) {
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
      g = 10,
      h = 16,
      y = new Uint8Array([2, 2]),
      C = new Uint8Array([255, 217]),
      b = (function () {
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
        var a = t.prototype;
        return (
          (a.setCryptoKeys = function (t) {
            ((this._cryptoKeys = t), (this._nextChunkIV = t.iv));
          }),
          (a._validateSidecar = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                t === 0 && (this._nextChunkIV = n.iv);
                var a = n.macKey,
                  i = this._scansSideCar.slice(t * g, t * g + g),
                  l = r("WANullthrows")(this._nextChunkIV);
                this._nextChunkIV = e.slice(0 - h);
                var s = o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                    new Uint8Array(l),
                    new Uint8Array(e),
                  ]),
                  u = yield o("WACryptoHmac").hmacSha256(a, s, g);
                if (!o("WACryptoUtils").arrayBuffersEqual(u, i)) throw new f(t);
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._cleanupCipherTextAndIV = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = e,
                  a = t === 0,
                  i = r.byteLength % h === 0,
                  l = !i,
                  s;
                if (a) s = n.iv;
                else {
                  var u = this._increasingScanLengths[t - 1];
                  s = this._downloadedBytes.slice(u - h, u);
                }
                if ((l && (r = r.slice(0, r.byteLength - g)), i)) {
                  var c = yield v(r, n);
                  return {
                    cipherText: o("WATypedArraysConcat").concatTypedArrays(
                      Uint8Array,
                      [new Uint8Array(r), new Uint8Array(c)],
                    ),
                    iv: s,
                  };
                }
                return { cipherText: r, iv: s };
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._getLastFullyLoadedChunkIndex = function (t) {
            for (var e = 0, n = 0; n < this._alignedScanLengths.length; n++)
              if (((e += this._alignedScanLengths[n]), t < e)) return n;
            return this._alignedScanLengths.length;
          }),
          (a._handleChunk = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, r) {
                yield this._validateSidecar(t, n, r);
                var a = yield this._cleanupCipherTextAndIV(t, n, r),
                  i = a.cipherText,
                  l = a.iv,
                  s = yield o("WACryptoAesCbc").aesCbcDecrypt(r.encKey, l, i),
                  u = yield o("WACrypto").removeEncryptedPadding(s, y.buffer);
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
                    n + 1,
                    this._scanLengths.length,
                  ),
                  u
                );
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a._generateBlobFromFullyLoadedChunks = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  a = yield (_ || (_ = n("Promise"))).all(
                    this._decryptedChunks.slice(0, e),
                  ),
                  i = r("sumBy")(this._scanLengths.slice(0, e), function (e) {
                    return e;
                  }),
                  l = o("WATypedArraysConcat")
                    .concatTypedArrays(
                      Uint8Array,
                      a.map(function (e) {
                        return new Uint8Array(e);
                      }),
                    )
                    .slice(0, i),
                  u = o("WACryptoUtils").arrayBuffersEqual(
                    C.buffer,
                    l.slice(-C.length).buffer,
                  )
                    ? l
                    : o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
                        l,
                        C,
                      ]),
                  c = [u],
                  d =
                    this._mimetype != null
                      ? new Blob(c, { type: this._mimetype })
                      : new Blob(c),
                  m = R(this._filehash, e);
                return (
                  o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                    m,
                    d,
                  ),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ImageStreamer] progressive img ",
                        "/",
                        " chunks",
                      ])),
                    e,
                    this._scanLengths.length,
                  ),
                  (t = this._onProgressiveUpdate) == null || t.call(this, e),
                  (this._lastDecryptedChunk = e),
                  u.buffer
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a._decryptFullyLoadedChunks = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                for (var o = 0; o < t; o++)
                  if (!this._decryptedChunks[o]) {
                    var a = o === 0 ? 0 : this._increasingScanLengths[o - 1],
                      i = e.slice(a, a + this._alignedScanLengths[o]);
                    (yield (_ || (_ = n("Promise"))).all(this._decryptedChunks),
                      this._decryptedChunks[o] ||
                        (this._decryptedChunks[o] = this._handleChunk(
                          i,
                          o,
                          r,
                        )));
                  }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.handleProgress = function (t, r) {
            var e = this;
            return this._promiseQueue.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (!e._alignedScanLengths.length) {
                  e._alignedScanLengths = o(
                    "WAAlignChunkLengthsToMultipleOfAesBlockSize",
                  ).alignChunkLengthsToMultipleOfAesBlockSize(
                    e._scanLengths,
                    t,
                  );
                  for (var n = 0; n < e._alignedScanLengths.length; n++) {
                    var a = e._alignedScanLengths[n],
                      i = n === 0 ? a : e._increasingScanLengths[n - 1] + a;
                    e._increasingScanLengths.push(i);
                  }
                }
                var l =
                    typeof r == "string"
                      ? r.length
                      : r.byteLength + e._downloadedBytes.byteLength,
                  s = e._getLastFullyLoadedChunkIndex(l),
                  _ = e._cryptoKeys;
                if (s <= e._lastDecryptedChunk || _ == null)
                  return (
                    (e._downloadedBytes = o(
                      "WAArrayBuffersConcat",
                    ).concatArrayBuffers(
                      e._downloadedBytes,
                      typeof r == "string"
                        ? yield o(
                            "WAArrayBufferUtils",
                          ).largeStringToArrayBuffer(
                            r.slice(e._downloadedBytes.byteLength),
                          )
                        : r,
                    )),
                    null
                  );
                try {
                  var g =
                    typeof r == "string"
                      ? yield o("WAArrayBufferUtils").largeStringToArrayBuffer(
                          r.slice(e._downloadedBytes.byteLength),
                        )
                      : r;
                  return (
                    (e._downloadedBytes = o(
                      "WAArrayBuffersConcat",
                    ).concatArrayBuffers(e._downloadedBytes, g)),
                    yield e._decryptFullyLoadedChunks(e._downloadedBytes, s, _),
                    yield e._generateBlobFromFullyLoadedChunks(s)
                  );
                } catch (t) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ImageStreamer:handleProgress error: ",
                        "",
                      ])),
                    t.message,
                  );
                  var h =
                    t.message +
                    ", [" +
                    e._debugString +
                    "]" +
                    ("scanLengths length: " +
                      e._scanLengths.length +
                      ", scansSidecar byteLength: " +
                      e._scansSideCar.byteLength +
                      ".");
                  t instanceof f
                    ? (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "ImageStreamer:chunk validation error: ",
                            "",
                          ])),
                        h,
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
                        h,
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
              }),
            );
          }),
          t
        );
      })();
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.encKey,
            r = yield o("WACryptoAesCbc").aesCbcEncrypt(
              n,
              y,
              new Uint8Array(e.slice(0 - h)),
            );
          return r.slice(0 - h);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return e + "-progressive-" + t;
    }
    function L(e, t) {
      if (t != null && Number.isInteger(t))
        for (var n = t; n > 0; )
          (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(
            R(e, n),
          ),
            n--);
      o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(e);
    }
    ((l.EOI_TAG = C),
      (l.ImageStreamer = b),
      (l.getProgressiveMediaCacheKey = R),
      (l.deleteFromInMemoryMediaBlobCache = L));
  },
  98,
);
