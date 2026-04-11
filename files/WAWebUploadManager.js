__d(
  "WAWebUploadManager",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMemoizeConcurrent",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoRandomMediaKey",
    "WAWebFileUtils",
    "WAWebMediaDebugString",
    "WAWebMmsClient",
    "WAWebMmsClientErrors",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebNullFunc",
    "WAWebPonyfillsUrlSearchParams",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      var t = e.mediaKey,
        n = e.mediaKeyTimestamp;
      if (t != null && n != null) return { mediaKey: t, mediaKeyTimestamp: n };
      var o = r("WAWebCryptoRandomMediaKey")(),
        a = o.key,
        i = o.timestamp;
      return { mediaKey: a, mediaKeyTimestamp: i };
    }
    var v = (function () {
        function t() {
          var t = this;
          ((this._checkIfAlreadyUploaded = r("WAMemoizeConcurrent")(
            function (e) {
              return e.token;
            },
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t.encFilehash,
                    a = t.type,
                    i = { encFilehash: n, type: a },
                    l = o("WAWebMediaDebugString").getDebugString(n);
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager.checkIfAlreadyUploaded: [",
                        "] start",
                      ])),
                    l,
                  );
                  try {
                    var d = yield r("WAWebMmsClient")
                      .checkIfUploadExists(t)
                      .catch(
                        o("WAFilteredCatch").filteredCatch(
                          o("WAWebMmsClientErrors").MediaNotFoundError,
                          o("WAWebNullFunc").returnNull,
                        ),
                      );
                    return (
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadManager.checkIfAlreadyUploaded: [",
                            "] success",
                          ])),
                        l,
                      ),
                      d
                    );
                  } catch (e) {
                    throw (
                      r("getErrorSafe")(e).name ===
                      o("WAAbortError").ABORT_ERROR
                        ? o("WALogger").LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager.checkIfAlreadyUploaded: [",
                                "] canceled",
                              ])),
                            l,
                          )
                        : o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "uploadManager.checkIfAlreadyUploaded: [",
                                "] error",
                              ])),
                            l,
                          ),
                      e
                    );
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )),
            (this._memoizedUpload = r("WAMemoizeConcurrent")(
              function (e) {
                return e.token;
              },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t,
                      n = e.ciphertextHmac,
                      o = e.encFilehash,
                      a = e.generateThumbnailOnServer,
                      i = e.mediaId,
                      l = e.onFinalize,
                      s = e.onProgress,
                      u = e.onStreamUploadStart,
                      c = e.onUploadAttemptError,
                      d = e.onUploadAttemptSuccess,
                      m = e.onUploadHostFound,
                      p = e.onUploadSuccess,
                      _ = e.signal,
                      f = e.type,
                      g = yield r("WAWebMmsClient").upload({
                        ciphertextHmac: n,
                        encFilehash: o,
                        type: f,
                        signal: _,
                        onUploadHostFound: m,
                        onUploadAttemptSuccess: d,
                        onUploadAttemptError: c,
                        onProgress: s,
                        byteOffset: (t = e.byteOffset) != null ? t : 0,
                        onFinalize: l,
                        onStreamUploadStart: u,
                        mediaId: i,
                        token: e.token,
                        generateThumbnailOnServer: a,
                      });
                    return (p(), g);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )),
            (this._getExistingOrUpload = r("WAMemoizeConcurrent")(
              function (e) {
                return e.token;
              },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e.ciphertextHmac,
                      a = e.encFilehash,
                      i = e.generateThumbnailOnServer,
                      l = e.mediaId,
                      s = e.onCheckExistingError,
                      u = e.onCheckExistingSuccess,
                      c = e.onFinalize,
                      f = e.onProgress,
                      g = e.onStreamUploadStart,
                      h = e.onUploadAttemptError,
                      y = e.onUploadAttemptSuccess,
                      C = e.onUploadHostFound,
                      b = e.onUploadSuccess,
                      v = e.signal,
                      S = e.type,
                      R = { encFilehash: a, type: S },
                      L = o("WAWebMediaDebugString").getDebugString(a);
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadManager._getExistingOrUpload: [",
                          "] start",
                        ])),
                      L,
                    );
                    try {
                      var E = yield t
                        ._checkIfAlreadyUploaded({
                          encFilehash: a,
                          type: S,
                          signal: v,
                          mediaId: l,
                          token: e.token,
                          generateThumbnailOnServer: i,
                        })
                        .catch(function (e) {
                          throw (s(e), e);
                        })
                        .then(function (r) {
                          return (r == null ? void 0 : r.complete) === !0
                            ? (u(),
                              {
                                directPath: r.directPath,
                                handle: r.handle,
                                url: r.url,
                              })
                            : t._memoizedUpload({
                                ciphertextHmac: n,
                                encFilehash: a,
                                type: S,
                                signal: v,
                                onUploadHostFound: C,
                                onUploadAttemptSuccess: y,
                                onUploadAttemptError: h,
                                onUploadSuccess: b,
                                onCheckExistingSuccess: u,
                                onCheckExistingError: s,
                                onProgress: f,
                                onFinalize: c,
                                onStreamUploadStart: g,
                                byteOffset: r == null ? void 0 : r.resume,
                                mediaId: l,
                                token: e.token,
                                generateThumbnailOnServer: i,
                              });
                        });
                      return (
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "uploadManager._getExistingOrUpload: [",
                              "] success",
                            ])),
                          L,
                        ),
                        E
                      );
                    } catch (e) {
                      throw (
                        r("getErrorSafe")(e).name ===
                        o("WAAbortError").ABORT_ERROR
                          ? o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "uploadManager._getExistingOrUpload: [",
                                  "] canceled",
                                ])),
                              L,
                            )
                          : o("WALogger").WARN(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "uploadManager._getExistingOrUpload: [",
                                  "] error",
                                ])),
                              L,
                            ),
                        e
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )),
            o(
              "WAWebMmsDownloadUploadCrashLogger",
            ).downloadUploadCrashLogger.init());
        }
        var a = t.prototype;
        return (
          (a.encryptAndUpload = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = e.blob,
                  i = e.forwardedFromWeb,
                  l = e.isHdPhoto,
                  s = e.isViewOnce,
                  u = e.onFinalize,
                  c = e.onProgress,
                  d = e.signal,
                  m = e.type,
                  p = e.uploadOrigin,
                  _ = e.userUploadAttemptCount,
                  v = { type: m };
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadManager.encryptAndUpload: start",
                    ])),
                );
                var S = r("WAWebCreateMediaUploadMetrics")(m, p, _, i, s, l),
                  L = S.handleArrayBufferCreated,
                  E = S.handleCheckExistingError,
                  k = S.handleCheckExistingSuccess,
                  I = S.handleEncryptionStart,
                  T = S.handleEncryptionSuccess,
                  D = S.handleStreamUploadStart,
                  x = S.handleUploadAttemptError,
                  $ = S.handleUploadAttemptSuccess,
                  P = S.handleUploadError,
                  N = S.handleUploadHostFound,
                  M = S.handleUploadProgress,
                  w = S.handleUploadSuccess,
                  A = S.mediaId,
                  F = function (t, n) {
                    c == null || c(t, n);
                    var e = n + t.loaded;
                    M(e);
                  };
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(
                  A,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .UPLOAD_ENCRYPTION_STARTED,
                );
                try {
                  var O = b(e),
                    B = (C || (C = n("Promise")))
                      .resolve(a)
                      .then(function (e) {
                        o(
                          "WAWebMmsDownloadUploadCrashLogger",
                        ).downloadUploadCrashLogger.mark(
                          A,
                          o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                            .UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED,
                          { size: a instanceof Blob ? a.size : a.byteLength },
                        );
                        var t =
                          e instanceof Blob
                            ? o("WAWebFileUtils").blobToArrayBuffer(e)
                            : e;
                        return (
                          o(
                            "WAWebMmsDownloadUploadCrashLogger",
                          ).downloadUploadCrashLogger.mark(
                            A,
                            o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                              .UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED,
                          ),
                          t
                        );
                      })
                      .then(function (e) {
                        return (
                          L(e.byteLength),
                          I(),
                          o("WAWebAppTracker").AppTracker.start(
                            o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                          ),
                          r("WAWebCryptoEncryptMedia")({
                            type: m,
                            plaintext: e,
                            mediaKey: O.mediaKey,
                          }).finally(function () {
                            o("WAWebAppTracker").AppTracker.stop(
                              o("WAWebAppTracker").AppTrackerType
                                .MediaProcessing,
                            );
                          })
                        );
                      })
                      .then(function (n) {
                        var r,
                          a = n.ciphertextHmac,
                          l = n.firstFrameSidecar,
                          s = n.hash,
                          c = n.sidecar;
                        (T(),
                          o(
                            "WAWebMmsDownloadUploadCrashLogger",
                          ).downloadUploadCrashLogger.mark(
                            A,
                            o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                              .UPLOAD_ENCRYPTION_FINISHED,
                          ));
                        var p = e.mediaKey
                          ? t._getExistingOrUpload
                          : t._memoizedUpload;
                        return p({
                          ciphertextHmac: a,
                          encFilehash: s,
                          type: m,
                          signal: d,
                          onCheckExistingSuccess: k,
                          onCheckExistingError: E,
                          onUploadHostFound: N,
                          onUploadAttemptSuccess: $,
                          onUploadAttemptError: x,
                          onUploadSuccess: w,
                          onProgress: F,
                          onFinalize: u,
                          onStreamUploadStart: D,
                          mediaId: A,
                          token: (r = e.token) != null ? r : s,
                        }).then(function (e) {
                          return {
                            directPath: i ? R(e.directPath) : e.directPath,
                            encFilehash: s,
                            mediaKey: O.mediaKey,
                            mediaKeyTimestamp: O.mediaKeyTimestamp,
                            sidecar: c,
                            firstFrameSidecar: l,
                            url: e.url,
                            handle: e.handle,
                          };
                        });
                      }),
                    W = yield B;
                  return (
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadManager.encryptAndUpload: success",
                        ])),
                    ),
                    o(
                      "WAWebMmsDownloadUploadCrashLogger",
                    ).downloadUploadCrashLogger.mark(
                      A,
                      o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                        .UPLOAD_FINISHED,
                    ),
                    e.uploadQpl.endSuccess(),
                    W
                  );
                } catch (t) {
                  throw (
                    r("getErrorSafe")(t).name === o("WAAbortError").ABORT_ERROR
                      ? (o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "uploadManager.encryptAndUpload: canceled",
                            ])),
                        ),
                        e.uploadQpl.endFailWithError(
                          "upload_canceled",
                          "aborted",
                        ))
                      : (o("WALogger").WARN(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "uploadManager.encryptAndUpload: error",
                            ])),
                        ),
                        e.uploadQpl.endFailWithError(
                          "upload_failed",
                          r("getErrorSafe")(t).message,
                        )),
                    o(
                      "WAWebMmsDownloadUploadCrashLogger",
                    ).downloadUploadCrashLogger.mark(
                      A,
                      o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                        .UPLOAD_ERROR,
                    ),
                    P(r("getErrorSafe")(t)),
                    t
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.unencryptedUpload = function (t) {
            var e,
              n = t.file,
              o = t.generateThumbnailOnServer,
              a = t.hash,
              i = t.isViewOnce,
              l = t.signal,
              s = t.type,
              u = t.uploadOrigin,
              c = r("WAWebCreateMediaUploadMetrics")(s, u, 0, !1, i),
              d = c.handleCheckExistingError,
              m = c.handleCheckExistingSuccess,
              p = c.handleStreamUploadStart,
              _ = c.handleUploadAttemptError,
              f = c.handleUploadAttemptSuccess,
              g = c.handleUploadHostFound,
              h = c.handleUploadProgress,
              y = c.handleUploadSuccess,
              C = c.mediaId,
              b = function (t, n) {
                h(t.loaded + n);
              },
              v = (e = t.token) != null ? e : a;
            return this._getExistingOrUpload({
              ciphertextHmac: n,
              encFilehash: a,
              type: s,
              signal: l,
              onCheckExistingSuccess: m,
              onCheckExistingError: d,
              onUploadHostFound: g,
              onUploadAttemptSuccess: f,
              onUploadAttemptError: _,
              onUploadSuccess: y,
              onStreamUploadStart: p,
              onProgress: b,
              mediaId: C,
              token: v,
              generateThumbnailOnServer: o,
            });
          }),
          (a.uploadCoverPhoto = function (t) {
            var e,
              n = t.file,
              o = t.hash,
              a = t.isViewOnce,
              i = t.signal,
              l = t.type,
              s = t.uploadOrigin,
              u = r("WAWebCreateMediaUploadMetrics")(l, s, 0, !1, a),
              c = u.handleCheckExistingError,
              d = u.handleCheckExistingSuccess,
              m = u.handleStreamUploadStart,
              p = u.handleUploadAttemptError,
              _ = u.handleUploadAttemptSuccess,
              f = u.handleUploadHostFound,
              g = u.handleUploadProgress,
              h = u.handleUploadSuccess,
              y = u.mediaId,
              C = function (t, n) {
                g(t.loaded + n);
              },
              b = {
                ciphertextHmac: n,
                encFilehash: o,
                type: l,
                signal: i,
                onCheckExistingSuccess: d,
                onCheckExistingError: c,
                onUploadHostFound: f,
                onUploadAttemptSuccess: _,
                onUploadAttemptError: p,
                onUploadSuccess: h,
                onStreamUploadStart: m,
                onProgress: C,
                mediaId: y,
                token: (e = t.token) != null ? e : t.hash,
              };
            return this._memoizedUpload(b);
          }),
          t
        );
      })(),
      S = new v();
    function R(e) {
      var t = e.split("?"),
        n = t[0],
        a = t[1],
        i = new (r("WAWebPonyfillsUrlSearchParams"))(a),
        l = o("WATimeUtils").unixTime();
      return (i.set("_nc_hot", String(l)), n + "?" + i.toString());
    }
    l.default = S;
  },
  98,
);
