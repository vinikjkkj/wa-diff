__d(
  "WAWebVoipBridgeMediaStreamHandlers",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBridgeMediaStreamHelpers",
    "WAWebVoipCameraFingerprint",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipLocalVideoPolicy",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        voipAcquireMediaStream: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n;
            if (
              t.type === "camera" &&
              !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
            )
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] local video is blocked, skipping camera acquisition",
                    ])),
                ),
                null
              );
            var a =
              (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
            return t.type === "camera" &&
              a != null &&
              o("WAWebVoipJoinWithoutCamera").consumeJoinWithoutCamera(a)
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] the call joins with its camera off, skipping camera acquisition",
                    ])),
                ),
                null)
              : o(
                  "WAWebVoipBridgeMediaStreamHelpers",
                ).voipAcquireMediaStreamImpl(t);
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })(),
        getIsValidVideoDevice: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.deviceId,
              n = e.isInActiveCall,
              r = e.targetWindow;
            return o("WAWebVoipAcquireMediaStream").getIsValidVideoDevice({
              deviceId: t,
              isInActiveCall: n,
              targetWindow: r,
            });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        cleanupPrewarmedCamera: function () {
          o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
        },
        logCameraFingerprint: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
              ? o("WAWebVoipCameraFingerprint").logCameraFingerprint()
              : !1;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getVoipCameraPermissionState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
              ? o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict()
              : null;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getVoipMicPermissionGranted: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return c(
              yield o(
                "WAWebMediaPermissionsUtils",
              ).queryMediaPermissionStateStrict("microphone"),
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getVoipCameraPermissionGranted: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
              ? c(
                  yield o(
                    "WAWebVoipAcquireMediaStream",
                  ).queryCameraPermissionStrict(),
                )
              : null;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function c(e) {
      return e === "granted"
        ? !0
        : e === "denied" || e === "prompt"
          ? !1
          : null;
    }
    l.VoipBridgeMediaStreamHandlers = u;
  },
  98,
);
