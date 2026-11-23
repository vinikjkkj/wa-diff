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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        voipAcquireMediaStream: async function (n) {
          var t;
          return n.type === "camera" &&
            !o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] local video is blocked, skipping camera acquisition",
                  ])),
              ),
              null)
            : n.type === "camera" &&
                o("WAWebVoipJoinWithoutCamera").consumeJoinWithoutCamera(
                  (t = r("WAWebCallCollection").activeCall) == null
                    ? void 0
                    : t.id,
                )
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] the call joins with its camera off, skipping camera acquisition",
                    ])),
                ),
                null)
              : o(
                  "WAWebVoipBridgeMediaStreamHelpers",
                ).voipAcquireMediaStreamImpl(n);
        },
        getIsValidVideoDevice: async function (t) {
          var e = t.deviceId,
            n = t.isInActiveCall,
            r = t.targetWindow;
          return o("WAWebVoipAcquireMediaStream").getIsValidVideoDevice({
            deviceId: e,
            isInActiveCall: n,
            targetWindow: r,
          });
        },
        cleanupPrewarmedCamera: function () {
          o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
        },
        logCameraFingerprint: async function () {
          return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
            ? o("WAWebVoipCameraFingerprint").logCameraFingerprint()
            : !1;
        },
        getVoipCameraPermissionState: async function () {
          return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
            ? o("WAWebVoipAcquireMediaStream").queryCameraPermissionStrict()
            : null;
        },
        getVoipMicPermissionGranted: async function () {
          return c(
            await o(
              "WAWebMediaPermissionsUtils",
            ).queryMediaPermissionStateStrict("microphone"),
          );
        },
        getVoipCameraPermissionGranted: async function () {
          return o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()
            ? c(
                await o(
                  "WAWebVoipAcquireMediaStream",
                ).queryCameraPermissionStrict(),
              )
            : null;
        },
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
