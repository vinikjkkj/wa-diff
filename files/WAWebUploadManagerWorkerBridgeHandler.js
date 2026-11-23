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
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["mediaId", "serializedUploadQpl", "uploadId"];
    function s(t, n, a) {
      var i = new Map();
      async function l(l) {
        var s = l.mediaId,
          u = l.serializedUploadQpl,
          d = l.uploadId,
          m = babelHelpers.objectWithoutPropertiesLoose(l, e),
          p = new AbortController();
        i.set(d, p);
        var _ = c(t, d, s),
          f = o("WAWebWorkerQplProxy").createWorkerQplProxy(u),
          g = {
            start: function (n) {
              t.fireAndForget("mainthread_appTracker", "start", { type: n });
            },
            stop: function (n) {
              t.fireAndForget("mainthread_appTracker", "stop", { type: n });
            },
          },
          h = o(
            "WAWebMmsClientUsingDependencies",
          ).createPartialMmsClientUsingDependencies({
            mediaHosts: n,
            networkStatus: a,
          }),
          y = new (o(
            "WAWebUploadManagerWorkerHandler",
          ).UploadManagerWorkerHandler)({
            appTracker: g,
            mmsClient: h,
            encryptMedia: o("WAWebCryptoEncryptMediaLocal").encryptMediaLocal,
            encryptMediaFromBlob: r("WAWebCryptoEncryptMediaFromBlob"),
          }),
          C = babelHelpers.extends({}, m, {
            fileOrigin: null,
            signal: p.signal,
            uploadQpl: f,
          });
        try {
          return await y.encryptAndUpload(C, _);
        } finally {
          i.delete(d);
        }
      }
      function s(e) {
        var t;
        (t = i.get(e)) == null || t.abort();
      }
      return { encryptAndUpload: l, abortUpload: s };
    }
    function u(e) {
      return o("WAWebDeserializeBridgedError").serializeBridgedError(e);
    }
    function c(e, t, n) {
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
        handleUploadAttemptError: function (r) {
          var n = r.error,
            o = r.failCount,
            a = r.overallLastUploadRetryPhase,
            i = r.overallT;
          e.fireAndForget(
            "mainthread_uploadmanager",
            "handleUploadAttemptError",
            {
              uploadId: t,
              error: u(n),
              overallT: i,
              failCount: o,
              retryPhase: a,
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
        mediaId: n,
        handleSendMessageStart: r("WAWebNoop"),
      };
    }
    l.createEncryptAndUploadHandler = s;
  },
  98,
);
