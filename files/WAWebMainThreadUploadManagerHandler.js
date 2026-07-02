__d(
  "WAWebMainThreadUploadManagerHandler",
  ["WALogger", "WAWebDeserializeBridgedError"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map();
    function u(e, t) {
      s.set(e, { callbacks: t });
    }
    function c(e) {
      s.delete(e);
    }
    function d(t) {
      var n = s.get(t);
      return n == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebMainThreadUploadManagerHandler missing callbacks for ",
                "",
              ])),
            t,
          ),
          null)
        : n;
    }
    function m(e) {
      return o("WAWebDeserializeBridgedError").deserializeBridgedError(e);
    }
    function p(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleEncryptionStart();
    }
    function _(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleEncryptionSuccess();
    }
    function f(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleStreamUploadStart();
    }
    function g(e) {
      var t;
      (t = d(e.uploadId)) == null ||
        t.callbacks.handleArrayBufferCreated(e.byteLength);
    }
    function h(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleCheckExistingSuccess();
    }
    function y(e) {
      var t;
      (t = d(e.uploadId)) == null ||
        t.callbacks.handleCheckExistingError(m(e.error));
    }
    function C(e) {
      var t;
      (t = d(e.uploadId)) == null ||
        t.callbacks.handleUploadHostFound({
          hostName: e.hostName,
          hostClass: e.hostClass,
          failCount: e.failCount,
        });
    }
    function b(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleUploadAttemptSuccess();
    }
    function v(e) {
      var t;
      (t = d(e.uploadId)) == null ||
        t.callbacks.handleUploadAttemptError(
          m(e.error),
          e.overallT,
          e.failCount,
          e.retryPhase,
        );
    }
    function S(e) {
      var t;
      (t = d(e.uploadId)) == null ||
        t.callbacks.handleUploadProgress(e.bytesTransferred);
    }
    function R(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleUploadSuccess();
    }
    function L(e) {
      var t;
      (t = d(e.uploadId)) == null || t.callbacks.handleUploadError(m(e.error));
    }
    ((l.registerUploadCallbacks = u),
      (l.unregisterUploadCallbacks = c),
      (l.handleEncryptionStart = p),
      (l.handleEncryptionSuccess = _),
      (l.handleStreamUploadStart = f),
      (l.handleArrayBufferCreated = g),
      (l.handleCheckExistingSuccess = h),
      (l.handleCheckExistingError = y),
      (l.handleUploadHostFound = C),
      (l.handleUploadAttemptSuccess = b),
      (l.handleUploadAttemptError = v),
      (l.handleUploadProgress = S),
      (l.handleUploadSuccess = R),
      (l.handleUploadError = L));
  },
  98,
);
