__d(
  "WAWebUploadManagerWorkerBridgeHandler",
  [
    "WAWebCryptoEncryptMediaFromBlob",
    "WAWebCryptoEncryptMediaLocal",
    "WAWebDeserializeBridgedError",
    "WAWebMmsClientUsingDependencies",
    "WAWebNoop",
    "WAWebUploadManagerWorkerHandler",
    "WAWebWorkerQplProxy",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["serializedUploadQpl", "uploadId"];
    function s(t, a, i) {
      var l = new Map();
      function s(e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (
          (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var s = n.serializedUploadQpl,
              u = n.uploadId,
              d = babelHelpers.objectWithoutPropertiesLoose(n, e),
              m = new AbortController();
            l.set(u, m);
            var p = c(t, u),
              _ = o("WAWebWorkerQplProxy").createWorkerQplProxy(s),
              f = {
                start: function (n) {
                  t.fireAndForget("mainthread_appTracker", "start", {
                    type: n,
                  });
                },
                stop: function (n) {
                  t.fireAndForget("mainthread_appTracker", "stop", { type: n });
                },
              },
              g = {
                init: r("WAWebNoop"),
                mark: function (n, r, o) {
                  t.fireAndForget("mainthread_crashLogger", "mark", {
                    mediaId: n,
                    progressType: r,
                    metadata: o,
                  });
                },
              },
              h = o(
                "WAWebMmsClientUsingDependencies",
              ).createPartialMmsClientUsingDependencies({
                mediaHosts: a,
                networkStatus: i,
              }),
              y = new (o(
                "WAWebUploadManagerWorkerHandler",
              ).UploadManagerWorkerHandler)({
                appTracker: f,
                crashLogger: g,
                mmsClient: h,
                encryptMedia: o("WAWebCryptoEncryptMediaLocal")
                  .encryptMediaLocal,
                encryptMediaFromBlob: r("WAWebCryptoEncryptMediaFromBlob"),
              }),
              C = babelHelpers.extends({}, d, {
                signal: m.signal,
                uploadQpl: _,
              });
            try {
              return yield y.encryptAndUpload(C, p);
            } finally {
              l.delete(u);
            }
          })),
          u.apply(this, arguments)
        );
      }
      function d(e) {
        var t;
        (t = l.get(e)) == null || t.abort();
      }
      return { encryptAndUpload: s, abortUpload: d };
    }
    function u(e) {
      return o("WAWebDeserializeBridgedError").serializeBridgedError(e);
    }
    function c(e, t) {
      return {
        handleEncryptionStart: function () {
          e.fireAndForget("mainthread_uploadmanager", "handleEncryptionStart", {
            uploadId: t,
          });
        },
        handleEncryptionSuccess: function () {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleEncryptionSuccess",
            { uploadId: t },
          );
        },
        handleStreamUploadStart: function () {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleStreamUploadStart",
            { uploadId: t },
          );
        },
        handleArrayBufferCreated: function (r) {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleArrayBufferCreated",
            { uploadId: t, byteLength: r },
          );
        },
        handleCheckExistingSuccess: function () {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleCheckExistingSuccess",
            { uploadId: t },
          );
        },
        handleCheckExistingError: function (r) {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleCheckExistingError",
            { uploadId: t, error: u(r) },
          );
        },
        handleUploadHostFound: function (r) {
          var n = r.failCount,
            o = r.hostClass,
            a = r.hostName;
          e.fireAndForget("mainthread_uploadmanager", "handleUploadHostFound", {
            uploadId: t,
            hostName: a,
            hostClass: o,
            failCount: n,
          });
        },
        handleUploadAttemptSuccess: function () {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleUploadAttemptSuccess",
            { uploadId: t },
          );
        },
        handleUploadAttemptError: function (r, o, a, i) {
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleUploadAttemptError",
            {
              uploadId: t,
              error: u(r),
              overallT: o,
              failCount: a,
              retryPhase: i,
            },
          );
        },
        handleUploadProgress: function (r) {
          e.fireAndForget("mainthread_uploadmanager", "handleUploadProgress", {
            uploadId: t,
            bytesTransferred: r,
          });
        },
        handleUploadSuccess: function () {
          e.fireAndForget("mainthread_uploadmanager", "handleUploadSuccess", {
            uploadId: t,
          });
        },
        handleUploadError: function (r) {
          e.fireAndForget("mainthread_uploadmanager", "handleUploadError", {
            uploadId: t,
            error: u(r),
          });
        },
        mediaId: 0,
        handleSendMessageStart: r("WAWebNoop"),
      };
    }
    l.createEncryptAndUploadHandler = s;
  },
  98,
);
