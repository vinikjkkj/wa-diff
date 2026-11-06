__d(
  "WAWebBrowserPermissionSupport",
  ["WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      camera: "HTMLCameraElement",
      camera_and_microphone: "HTMLUserMediaElement",
      microphone: "HTMLMicrophoneElement",
    };
    function s(t, n) {
      return (
        n === void 0 && (n = window),
        n != null && e[t] in n && "HTMLUserMediaElement" in n
      );
    }
    function u(e) {
      return !r("WAWebEnvironment").isWindows && s(e);
    }
    ((l.isBrowserPermissionButtonSupported = s),
      (l.hasBrowserPermissionButton = u));
  },
  98,
);
