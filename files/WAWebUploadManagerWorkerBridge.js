__d(
  "WAWebUploadManagerWorkerBridge",
  [
    "WAAbortError",
    "WAPromiseRaceAbort",
    "WAWebAppTracker",
    "WAWebBackendWorkerClient",
    "WAWebCryptoEncryptMedia",
    "WAWebCryptoEncryptMediaFromBlobLoadable",
    "WAWebDeserializeBridgedError",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMmsClient",
    "WAWebUploadManagerBase",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return (
            e.call(this, {
              appTracker: o("WAWebAppTracker").AppTracker,
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
        var a = t.prototype;
        return (
          (a.encryptAndUpload = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.blob;
                e.uploadQpl.addAnnotations({
                  bool: {
                    worker_bridge_ready: o(
                      "WAWebBackendWorkerClient",
                    ).isBackendWorkerBridgeReady(),
                  },
                });
                var a = yield r("WAPromiseRaceAbort")(
                  o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
                  e.signal,
                );
                e.uploadQpl.addPoint("worker_bridge_acquired");
                var i = o("WAWebUploadManagerBase").getNextUploadId();
                if (e.signal.aborted)
                  throw new (o("WAAbortError").AbortError)();
                o(
                  "WAWebMainThreadUploadManagerHandler",
                ).registerUploadCallbacks(i, t);
                var l = function () {
                  a.fireAndForget("media", "abortUpload", { uploadId: i });
                };
                e.signal.addEventListener("abort", l, { once: !0 });
                var s = function () {
                  return o(
                    "WAWebMainThreadUploadManagerHandler",
                  ).unregisterUploadCallbacks(i);
                };
                try {
                  var u = a.sendAndReceive("media", "encryptAndUpload", {
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
                    uploadId: i,
                    mediaId: t.mediaId,
                    serializedUploadQpl: o(
                      "WAWebMainThreadQplHandler",
                    ).serializeQplForBridge(e.uploadQpl),
                  });
                  u.then(s, s);
                  var c = yield r("WAPromiseRaceAbort")(u, e.signal);
                  if (c.success) return c.value;
                  throw o(
                    "WAWebDeserializeBridgedError",
                  ).deserializeBridgedError(c.error);
                } finally {
                  e.signal.removeEventListener("abort", l);
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
