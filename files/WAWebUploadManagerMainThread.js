__d(
  "WAWebUploadManagerMainThread",
  [
    "WAWebAppTracker",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoEncryptMediaFromBlobLoadable",
    "WAWebMmsClient",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebUploadManagerBase",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return (
            e.call(this, {
              appTracker: o("WAWebAppTracker").AppTracker,
              crashLogger: o("WAWebMmsDownloadUploadCrashLogger")
                .downloadUploadCrashLogger,
              mmsClient: {
                upload: function (t) {
                  return r("WAWebMmsClient").upload(t);
                },
                checkIfUploadExists: function (t) {
                  return r("WAWebMmsClient").checkIfUploadExists(t);
                },
              },
              encryptMedia: r("WAWebCryptoEncryptMedia"),
              encryptMediaFromBlob: s,
            }) || this
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.unencryptedUpload = function (t) {
            var e,
              n = t.file,
              o = t.generateThumbnailOnServer,
              a = t.hash,
              i = t.isViewOnce,
              l = t.signal,
              s = t.type,
              u = t.uploadOrigin,
              c = r("WAWebCreateMediaUploadMetrics")({
                type: s,
                uploadOrigin: u,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                isViewOnce: i,
              }),
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
            return this.getExistingOrUpload({
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
              u = r("WAWebCreateMediaUploadMetrics")({
                type: l,
                uploadOrigin: s,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                isViewOnce: a,
              }),
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
            return this.memoizedUpload(b);
          }),
          t
        );
      })(o("WAWebUploadManagerBase").UploadManagerBase),
      s = function (t) {
        return o("WAWebCryptoEncryptMediaFromBlobLoadable")
          .requireEncryptMediaFromBlob()
          .then(function (e) {
            return e(t);
          });
      },
      u = new e();
    l.default = u;
  },
  98,
);
