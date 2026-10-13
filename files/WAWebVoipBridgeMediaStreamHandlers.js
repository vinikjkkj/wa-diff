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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        voipAcquireMediaStream: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n,
              a =
                (n = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : n.id;
            return t.type === "camera" &&
              a != null &&
              o("WAWebVoipJoinWithoutCamera").consumeJoinWithoutCamera(a)
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
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
        logCameraFingerprint: function () {
          return o("WAWebVoipCameraFingerprint").logCameraFingerprint();
        },
        getVoipCameraPermissionState: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebVoipAcquireMediaStream",
            ).queryCameraPermissionStrict();
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getVoipMicPermissionGranted: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return u(
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
            return u(
              yield o(
                "WAWebVoipAcquireMediaStream",
              ).queryCameraPermissionStrict(),
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function u(e) {
      return e === "granted"
        ? !0
        : e === "denied" || e === "prompt"
          ? !1
          : null;
    }
    l.VoipBridgeMediaStreamHandlers = s;
  },
  98,
);
