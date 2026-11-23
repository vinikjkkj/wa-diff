__d(
  "WAWebVoipCameraFingerprint",
  [
    "WALogger",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipVideoCameraCapture",
    "WAWebWebcFingerprintWamEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0;
    async function u() {
      try {
        var t,
          n,
          a = await o("WAWebVoipAcquireMediaStream").getAvailableVideoDevices({
            isInActiveCall: !0,
            skipPermissionRequest: !0,
          }),
          i = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture
            .currentDeviceId,
          l =
            (t =
              (n = o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.getLastCapturedStream()) == null
                ? void 0
                : n.getVideoTracks()) != null
              ? t
              : [];
        if (
          !l.some(function (e) {
            return e.readyState === "live";
          })
        )
          return !1;
        var s = c(a, i);
        return s == null
          ? !1
          : (new (o("WAWebWebcFingerprintWamEvent").WebcFingerprintWamEvent)({
              peripherals: s,
            }).commit(),
            !0);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: logCameraFingerprint failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-camera-fingerprint-failed"),
          !1
        );
      }
    }
    function c(e, t) {
      var n = e.find(function (e) {
        return e.deviceId === t;
      });
      return n == null
        ? null
        : JSON.stringify({
            camera: {
              name: n.label,
              capabilities: {
                isDefault: e[0].deviceId === n.deviceId,
                isEnabled: !0,
                enclosureRotation: s,
              },
            },
          });
    }
    ((l.logCameraFingerprint = u), (l.getCameraFingerprintPeripherals = c));
  },
  98,
);
