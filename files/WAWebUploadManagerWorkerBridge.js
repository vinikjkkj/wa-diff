__d(
  "WAWebUploadManagerWorkerBridge",
  [
    "WAAbortError",
    "WAWebAppTracker",
    "WAWebBackendWorkerClient",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoEncryptMediaFromBlob",
    "WAWebDeserializeBridgedError",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMmsClient",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebUploadManagerBase",
    "asyncToGeneratorRuntime",
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
              encryptMediaFromBlob: r("WAWebCryptoEncryptMediaFromBlob"),
            }) || this
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.encryptAndUpload = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.blob,
                  r = yield o(
                    "WAWebBackendWorkerClient",
                  ).getBackendWorkerBridge(),
                  a = o("WAWebUploadManagerBase").getNextUploadId();
                if (e.signal.aborted)
                  throw new (o("WAAbortError").AbortError)();
                o(
                  "WAWebMainThreadUploadManagerHandler",
                ).registerUploadCallbacks(a, t);
                var i = function () {
                  r.fireAndForget("media", "abortUpload", { uploadId: a });
                };
                e.signal.addEventListener("abort", i, { once: !0 });
                try {
                  var l = yield r.sendAndReceive("media", "encryptAndUpload", {
                    blob: n,
                    type: e.type,
                    mediaKey: e.mediaKey,
                    mediaKeyTimestamp: e.mediaKeyTimestamp,
                    userUploadAttemptCount: e.userUploadAttemptCount,
                    forwardedFromWeb: e.forwardedFromWeb,
                    uploadOrigin: e.uploadOrigin,
                    isViewOnce: e.isViewOnce,
                    isHdPhoto: e.isHdPhoto,
                    token: e.token,
                    uploadId: a,
                    serializedUploadQpl: o(
                      "WAWebMainThreadQplHandler",
                    ).serializeQplForBridge(e.uploadQpl),
                  });
                  if (l.success) return l.value;
                  throw o(
                    "WAWebDeserializeBridgedError",
                  ).deserializeBridgedError(l.error);
                } finally {
                  (e.signal.removeEventListener("abort", i),
                    o(
                      "WAWebMainThreadUploadManagerHandler",
                    ).unregisterUploadCallbacks(a));
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
      })(o("WAWebUploadManagerBase").UploadManagerBase),
      s = new e();
    l.default = s;
  },
  98,
);
