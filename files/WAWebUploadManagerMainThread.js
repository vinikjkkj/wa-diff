__d(
  "WAWebUploadManagerMainThread",
  [
    "WAWebAppTracker",
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
        return (babelHelpers.inheritsLoose(t, e), t);
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
