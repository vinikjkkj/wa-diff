__d(
  "WAWebVoipCameraFingerprintLogging",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = p();
    function u() {
      s = p();
    }
    function c(e, t) {
      ((s.eligible = e && t), d());
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = s;
          if (_(e)) {
            if (e.pending) {
              e.retryRequested = !0;
              return;
            }
            ((e.pending = !0), (e.retryRequested = !1));
            try {
              e.logged = yield f();
            } finally {
              e.pending = !1;
            }
            e.retryRequested && _(e) && (yield d());
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return { eligible: !1, logged: !1, pending: !1, retryRequested: !1 };
    }
    function _(e) {
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
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o("WAWebBackendApi").frontendSendAndReceive(
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.resetCameraFingerprintLogging = u),
      (l.maybeLogCameraFingerprint = c),
      (l.retryCameraFingerprint = d));
  },
  98,
);
