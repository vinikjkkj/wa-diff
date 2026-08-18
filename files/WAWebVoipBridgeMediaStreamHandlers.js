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
    };
    l.VoipBridgeMediaStreamHandlers = e;
  },
  98,
);
