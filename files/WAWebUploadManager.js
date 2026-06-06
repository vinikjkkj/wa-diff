__d(
  "WAWebUploadManager",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      var t = e.mediaKey,
        n = e.mediaKeyTimestamp;
      if (t != null && n != null) return { mediaKey: t, mediaKeyTimestamp: n };
      var o = r("WAWebCryptoRandomMediaKey")(),
        a = o.key,
        i = o.timestamp;
      return { mediaKey: a, mediaKeyTimestamp: i };
    }
    var b = (function () {
        function t() {
          var t = this;
          ((this.$1 = r("WAMemoizeConcurrent")(
            function (e) {
              return e.token;
            },
            async function (t) {
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
                var d = await r("WAWebMmsClient")
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
                  r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
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
          )),
            (this.$3 = r("WAMemoizeConcurrent")(
              function (e) {
                return e.token;
              },
              async function (e) {
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
                  g = await r("WAWebMmsClient").upload({
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
            )),
            (this.$2 = r("WAMemoizeConcurrent")(
              function (e) {
                return e.token;
              },
              async function (e) {
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
                  var E = await t
                    .$1({
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
                        : t.$3({
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
                    r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
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
            )),
            o(
              "WAWebMmsDownloadUploadCrashLogger",
            ).downloadUploadCrashLogger.init());
        }
        var n = t.prototype;
        return (
          (n.encryptAndUpload = async function (t) {
            var e = this,
              n = t.blob,
              a = t.forwardedFromWeb,
              i = t.isHdPhoto,
              l = t.isViewOnce,
              s = t.onFinalize,
              u = t.onProgress,
              c = t.signal,
              d = t.type,
              m = t.uploadOrigin,
              p = t.userUploadAttemptCount,
              _ = { type: d };
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "uploadManager.encryptAndUpload: start",
                ])),
            );
            var b = r("WAWebCreateMediaUploadMetrics")(d, m, p, a, l, i),
              v = b.handleArrayBufferCreated,
              R = b.handleCheckExistingError,
              L = b.handleCheckExistingSuccess,
              E = b.handleEncryptionStart,
              k = b.handleEncryptionSuccess,
              I = b.handleStreamUploadStart,
              T = b.handleUploadAttemptError,
              D = b.handleUploadAttemptSuccess,
              x = b.handleUploadError,
              $ = b.handleUploadHostFound,
              P = b.handleUploadProgress,
              N = b.handleUploadSuccess,
              M = b.mediaId,
              w = function (t, n) {
                u == null || u(t, n);
                var e = n + t.loaded;
                P(e);
              };
            o(
              "WAWebMmsDownloadUploadCrashLogger",
            ).downloadUploadCrashLogger.mark(
              M,
              o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                .UPLOAD_ENCRYPTION_STARTED,
            );
            try {
              var A = C(t),
                F = Promise.resolve(n)
                  .then(function (e) {
                    o(
                      "WAWebMmsDownloadUploadCrashLogger",
                    ).downloadUploadCrashLogger.mark(
                      M,
                      o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                        .UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED,
                      { size: n instanceof Blob ? n.size : n.byteLength },
                    );
                    var t =
                      e instanceof Blob
                        ? o("WAWebFileUtils").blobToArrayBuffer(e)
                        : e;
                    return (
                      o(
                        "WAWebMmsDownloadUploadCrashLogger",
                      ).downloadUploadCrashLogger.mark(
                        M,
                        o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                          .UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED,
                      ),
                      t
                    );
                  })
                  .then(function (e) {
                    return (
                      v(e.byteLength),
                      E(),
                      o("WAWebAppTracker").AppTracker.start(
                        o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                      ),
                      r("WAWebCryptoEncryptMedia")({
                        type: d,
                        plaintext: e,
                        mediaKey: A.mediaKey,
                      }).finally(function () {
                        o("WAWebAppTracker").AppTracker.stop(
                          o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                        );
                      })
                    );
                  })
                  .then(function (n) {
                    var r,
                      i = n.ciphertextHmac,
                      l = n.firstFrameSidecar,
                      u = n.hash,
                      m = n.sidecar;
                    (k(),
                      o(
                        "WAWebMmsDownloadUploadCrashLogger",
                      ).downloadUploadCrashLogger.mark(
                        M,
                        o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                          .UPLOAD_ENCRYPTION_FINISHED,
                      ));
                    var p = t.mediaKey ? e.$2 : e.$3;
                    return p({
                      ciphertextHmac: i,
                      encFilehash: u,
                      type: d,
                      signal: c,
                      onCheckExistingSuccess: L,
                      onCheckExistingError: R,
                      onUploadHostFound: $,
                      onUploadAttemptSuccess: D,
                      onUploadAttemptError: T,
                      onUploadSuccess: N,
                      onProgress: w,
                      onFinalize: s,
                      onStreamUploadStart: I,
                      mediaId: M,
                      token: (r = t.token) != null ? r : u,
                    }).then(function (e) {
                      return {
                        directPath: a ? S(e.directPath) : e.directPath,
                        encFilehash: u,
                        mediaKey: A.mediaKey,
                        mediaKeyTimestamp: A.mediaKeyTimestamp,
                        sidecar: m,
                        firstFrameSidecar: l,
                        url: e.url,
                        handle: e.handle,
                      };
                    });
                  }),
                O = await F;
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
                  M,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .UPLOAD_FINISHED,
                ),
                t.uploadQpl.endSuccess(),
                O
              );
            } catch (e) {
              throw (
                r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                  ? (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadManager.encryptAndUpload: canceled",
                        ])),
                    ),
                    t.uploadQpl.endFailWithError("upload_canceled", "aborted"))
                  : (o("WALogger").WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "uploadManager.encryptAndUpload: error",
                        ])),
                    ),
                    t.uploadQpl.endFailWithError(
                      "upload_failed",
                      r("getErrorSafe")(e).message,
                    )),
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(
                  M,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .UPLOAD_ERROR,
                ),
                x(r("getErrorSafe")(e)),
                e
              );
            }
          }),
          (n.unencryptedUpload = function (t) {
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
            return this.$2({
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
          (n.uploadCoverPhoto = function (t) {
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
            return this.$3(b);
          }),
          t
        );
      })(),
      v = new b();
    function S(e) {
      var t = e.split("?"),
        n = t[0],
        a = t[1],
        i = new (r("WAWebPonyfillsUrlSearchParams"))(a),
        l = o("WATimeUtils").unixTime();
      return (i.set("_nc_hot", String(l)), n + "?" + i.toString());
    }
    l.default = v;
  },
  98,
);
