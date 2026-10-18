__d(
  "WAWebVoipBrowserPermissionSupport",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      camera: "HTMLCameraElement",
      camera_and_microphone: "HTMLUserMediaElement",
      microphone: "HTMLMicrophoneElement",
    };
    function l(t, n) {
      return (
        n === void 0 && (n = window),
        n != null && e[t] in n && "HTMLUserMediaElement" in n
      );
    }
    i.isBrowserPermissionButtonSupported = l;
  },
  66,
);
