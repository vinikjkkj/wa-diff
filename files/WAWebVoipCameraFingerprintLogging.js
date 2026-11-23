__d(
  "WAWebVoipCameraFingerprintLogging",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipWaCallEnums",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = m();
    function u() {
      s = m();
    }
    function c(e, t) {
      ((s.eligible = e && t), d());
    }
    async function d() {
      var e = s;
      if (p(e)) {
        if (e.pending) {
          e.retryRequested = !0;
          return;
        }
        ((e.pending = !0), (e.retryRequested = !1));
        try {
          e.logged = await _();
        } finally {
          e.pending = !1;
        }
        e.retryRequested && p(e) && (await d());
      }
    }
    function m() {
      return { eligible: !1, logged: !1, pending: !1, retryRequested: !1 };
    }
    function p(e) {
      return (
        e === s &&
        e.eligible &&
        !e.logged &&
        o("WAWebVoipLocalCallStateStore").getLocalCallState() ===
          o("WAWebVoipWaCallEnums").CallState.CallActive &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_camera_fingerprint_logging_enabled",
        )
      );
    }
    async function _() {
      try {
        return await o("WAWebBackendApi").frontendSendAndReceive(
          "logCameraFingerprint",
          {},
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: camera fingerprint dispatch failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-camera-fingerprint-dispatch-failed"),
          !1
        );
      }
    }
    ((l.resetCameraFingerprintLogging = u),
      (l.maybeLogCameraFingerprint = c),
      (l.retryCameraFingerprint = d));
  },
  98,
);
