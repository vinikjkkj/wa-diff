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
              o = t.fileOrigin,
              a = t.generateThumbnailOnServer,
              i = t.hash,
              l = t.isViewOnce,
              s = t.signal,
              u = t.type,
              c = t.uploadOrigin,
              d = r("WAWebCreateMediaUploadMetrics")({
                type: u,
                uploadOrigin: c,
                fileOrigin: o,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                isViewOnce: l,
              }),
              m = d.handleCheckExistingError,
              p = d.handleCheckExistingSuccess,
              _ = d.handleStreamUploadStart,
              f = d.handleUploadAttemptError,
              g = d.handleUploadAttemptSuccess,
              h = d.handleUploadHostFound,
              y = d.handleUploadProgress,
              C = d.handleUploadSuccess,
              b = d.mediaId,
              v = function (t, n) {
                y(t.loaded + n);
              },
              S = (e = t.token) != null ? e : i;
            return this.getExistingOrUpload({
              ciphertextHmac: n,
              encFilehash: i,
              type: u,
              signal: s,
              onCheckExistingSuccess: p,
              onCheckExistingError: m,
              onUploadHostFound: h,
              onUploadAttemptSuccess: g,
              onUploadAttemptError: f,
              onUploadSuccess: C,
              onStreamUploadStart: _,
              onProgress: v,
              mediaId: b,
              token: S,
              generateThumbnailOnServer: a,
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
                fileOrigin: null,
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
