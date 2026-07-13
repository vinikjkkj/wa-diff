__d(
  "WAWebUploadManagerBase",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMemoizeConcurrent",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCryptoRandomMediaKey",
    "WAWebFileUtils",
    "WAWebMediaDebugString",
    "WAWebMmsClientErrors",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebMmsMediaTypes",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      f,
      g,
      h,
      y,
      C,
      b = 0;
    function v() {
      return "" + b++;
    }
    function S(e) {
      var t = e.mediaKey,
        n = e.mediaKeyTimestamp;
      if (t != null && n != null) return { mediaKey: t, mediaKeyTimestamp: n };
      var o = r("WAWebCryptoRandomMediaKey")(),
        a = o.key,
        i = o.timestamp;
      return { mediaKey: a, mediaKeyTimestamp: i };
    }
    var R = (function () {
      function t(t) {
        var a = this;
        ((this.$1 = r("WAMemoizeConcurrent")(
          function (e) {
            return e.token;
          },
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.encFilehash,
                  i = t.type,
                  l = { encFilehash: n, type: i },
                  d = o("WAWebMediaDebugString").getDebugString(n);
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadManager.checkIfAlreadyUploaded: [",
                      "] start",
                    ])),
                  d,
                );
                try {
                  var m = yield a.deps.mmsClient
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
                      d,
                    ),
                    m
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
                          d,
                        )
                      : o("WALogger").WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "uploadManager.checkIfAlreadyUploaded: [",
                              "] error",
                            ])),
                          d,
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
          (this.memoizedUpload = r("WAMemoizeConcurrent")(
            function (e) {
              return e.token;
            },
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n = e.ciphertextHmac,
                    r = e.encFilehash,
                    o = e.generateThumbnailOnServer,
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
                    g = yield a.deps.mmsClient.upload({
                      ciphertextHmac: n,
                      encFilehash: r,
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
                      generateThumbnailOnServer: o,
                    });
                  return (p(), g);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )),
          (this.getExistingOrUpload = r("WAMemoizeConcurrent")(
            function (e) {
              return e.token;
            },
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.ciphertextHmac,
                    n = e.encFilehash,
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
                    R = { encFilehash: n, type: S },
                    L = o("WAWebMediaDebugString").getDebugString(n);
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager._getExistingOrUpload: [",
                        "] start",
                      ])),
                    L,
                  );
                  try {
                    var E = yield a
                      .$1({
                        encFilehash: n,
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
                          : a.memoizedUpload({
                              ciphertextHmac: t,
                              encFilehash: n,
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
          (this.deps = t),
          t.crashLogger.init());
      }
      var a = t.prototype;
      return (
        (a.encryptAndUpload = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var a = this,
                i = e.blob,
                l = e.forwardedFromWeb,
                s = e.onFinalize,
                u = e.onProgress,
                c = e.signal,
                d = e.type,
                m = { type: d };
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadManager.encryptAndUpload: start",
                  ])),
              ),
                e.uploadQpl.addPoint("upload_start"));
              var p = t.handleArrayBufferCreated,
                _ = t.handleCheckExistingError,
                b = t.handleCheckExistingSuccess,
                v = t.handleEncryptionStart,
                R = t.handleEncryptionSuccess,
                E = t.handleStreamUploadStart,
                k = t.handleUploadAttemptError,
                I = t.handleUploadAttemptSuccess,
                T = t.handleUploadError,
                D = t.handleUploadHostFound,
                x = t.handleUploadProgress,
                $ = t.handleUploadSuccess,
                P = t.mediaId,
                N = function (t, n) {
                  u == null || u(t, n);
                  var e = n + t.loaded;
                  x(e);
                };
              this.deps.crashLogger.mark(
                P,
                o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                  .UPLOAD_ENCRYPTION_STARTED,
              );
              try {
                var M = S(e),
                  w =
                    d === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
                    i instanceof Blob
                      ? o("WAWebABProps").getABPropConfigValue(
                          "web_streaming_document_encrypt_min_bytes",
                        )
                      : 0,
                  A;
                if (w > 0 && i instanceof Blob && i.size >= w) {
                  var F = i;
                  A = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (p(F.size),
                        v(),
                        a.deps.appTracker.start(
                          o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                        ));
                      try {
                        return yield a.deps.encryptMediaFromBlob({
                          type: d,
                          blob: F,
                          mediaKey: M.mediaKey,
                        });
                      } finally {
                        a.deps.appTracker.stop(
                          o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                        );
                      }
                    },
                  )();
                } else
                  A = (C || (C = n("Promise")))
                    .resolve(i)
                    .then(function (e) {
                      a.deps.crashLogger.mark(
                        P,
                        o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                          .UPLOAD_BLOB_TO_ARRAY_BUFFER_STARTED,
                        { size: i instanceof Blob ? i.size : i.byteLength },
                      );
                      var t =
                        e instanceof Blob
                          ? o("WAWebFileUtils").blobToArrayBuffer(e)
                          : e;
                      return (
                        a.deps.crashLogger.mark(
                          P,
                          o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                            .UPLOAD_BLOB_TO_ARRAY_BUFFER_FINISHED,
                        ),
                        t
                      );
                    })
                    .then(function (e) {
                      return (
                        p(e.byteLength),
                        v(),
                        a.deps.appTracker.start(
                          o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                        ),
                        a.deps
                          .encryptMedia({
                            type: d,
                            plaintext: e,
                            mediaKey: M.mediaKey,
                          })
                          .finally(function () {
                            a.deps.appTracker.stop(
                              o("WAWebAppTracker").AppTrackerType
                                .MediaProcessing,
                            );
                          })
                      );
                    });
                var O = A.then(function (t) {
                    var n,
                      r = t.ciphertextHmac,
                      i = t.firstFrameSidecar,
                      u = t.hash,
                      m = t.sidecar;
                    (R(),
                      a.deps.crashLogger.mark(
                        P,
                        o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                          .UPLOAD_ENCRYPTION_FINISHED,
                      ));
                    var p = e.mediaKey
                      ? a.getExistingOrUpload
                      : a.memoizedUpload;
                    return p({
                      ciphertextHmac: r,
                      encFilehash: u,
                      type: d,
                      signal: c,
                      onCheckExistingSuccess: b,
                      onCheckExistingError: _,
                      onUploadHostFound: D,
                      onUploadAttemptSuccess: I,
                      onUploadAttemptError: k,
                      onUploadSuccess: $,
                      onProgress: N,
                      onFinalize: s,
                      onStreamUploadStart: E,
                      mediaId: P,
                      token: (n = e.token) != null ? n : u,
                    }).then(function (e) {
                      return {
                        directPath: l ? L(e.directPath) : e.directPath,
                        encFilehash: u,
                        mediaKey: M.mediaKey,
                        mediaKeyTimestamp: M.mediaKeyTimestamp,
                        sidecar: m,
                        firstFrameSidecar: i,
                        url: e.url,
                        handle: e.handle,
                      };
                    });
                  }),
                  B = yield O;
                return (
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadManager.encryptAndUpload: success",
                      ])),
                  ),
                  this.deps.crashLogger.mark(
                    P,
                    o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                      .UPLOAD_FINISHED,
                  ),
                  e.uploadQpl.addPoint("upload_end"),
                  e.uploadQpl.endSuccess(),
                  B
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
                  this.deps.crashLogger.mark(
                    P,
                    o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                      .UPLOAD_ERROR,
                  ),
                  T(r("getErrorSafe")(t)),
                  t
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    function L(e) {
      var t = e.split("?"),
        n = t[0],
        r = t[1],
        a = new URLSearchParams(r),
        i = o("WATimeUtils").unixTime();
      return (a.set("_nc_hot", String(i)), n + "?" + a.toString());
    }
    ((l.getNextUploadId = v), (l.UploadManagerBase = R));
  },
  98,
);
