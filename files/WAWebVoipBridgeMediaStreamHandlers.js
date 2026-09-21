__d(
  "WAWebVoipBridgeMediaStreamHandlers",
  [
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBridgeMediaStreamHelpers",
    "WAWebVoipCameraPrewarm",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      voipAcquireMediaStream: o("WAWebVoipBridgeMediaStreamHelpers")
        .voipAcquireMediaStreamImpl,
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
      getVoipCameraPermissionState: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getVoipMicPermissionGranted: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipAcquireMediaStream").queryPermissionStatus(
              !1,
            ),
            t = e.micPermission;
          return s(t);
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      getVoipCameraPermissionGranted: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return s(
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
    function s(e) {
      return e === "granted" ? !0 : e === "denied" ? !1 : null;
    }
    l.VoipBridgeMediaStreamHandlers = e;
  },
  98,
);
