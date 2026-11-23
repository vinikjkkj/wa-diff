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
        var n = t.prototype;
        return (
          (n.encryptAndUpload = async function (t, n) {
            var e = t.blob;
            t.uploadQpl.addAnnotations({
              bool: {
                worker_bridge_ready: o(
                  "WAWebBackendWorkerClient",
                ).isBackendWorkerBridgeReady(),
              },
            });
            var a = await r("WAPromiseRaceAbort")(
              o("WAWebBackendWorkerClient").getBackendWorkerBridge(),
              t.signal,
            );
            t.uploadQpl.addPoint("worker_bridge_acquired");
            var i = o("WAWebUploadManagerBase").getNextUploadId();
            if (t.signal.aborted) throw new (o("WAAbortError").AbortError)();
            o("WAWebMainThreadUploadManagerHandler").registerUploadCallbacks(
              i,
              babelHelpers.extends({}, n, {
                handleUploadProgress: function (r) {
                  (n.handleUploadProgress(r),
                    t.onProgress == null ||
                      t.onProgress(
                        new ProgressEvent("progress", { loaded: r }),
                        0,
                      ));
                },
              }),
            );
            var l = function () {
              a.fireAndForget("media", "abortUpload", { uploadId: i });
            };
            t.signal.addEventListener("abort", l, { once: !0 });
            var s = function () {
              return o(
                "WAWebMainThreadUploadManagerHandler",
              ).unregisterUploadCallbacks(i);
            };
            try {
              var u = a.sendAndReceive("media", "encryptAndUpload", {
                blob: e,
                type: t.type,
                mediaKey: t.mediaKey,
                mediaKeyTimestamp: t.mediaKeyTimestamp,
                userUploadAttemptCount: t.userUploadAttemptCount,
                forwardedFromWeb: t.forwardedFromWeb,
                uploadOrigin: t.uploadOrigin,
                isViewOnce: t.isViewOnce,
                isHdPhoto: t.isHdPhoto,
                token: t.token,
                uploadId: i,
                mediaId: n.mediaId,
                serializedUploadQpl: o(
                  "WAWebMainThreadQplHandler",
                ).serializeQplForBridge(t.uploadQpl),
              });
              u.then(s, s);
              var c = await r("WAPromiseRaceAbort")(u, t.signal);
              if (c.success) return c.value;
              throw o("WAWebDeserializeBridgedError").deserializeBridgedError(
                c.error,
              );
            } finally {
              t.signal.removeEventListener("abort", l);
            }
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
