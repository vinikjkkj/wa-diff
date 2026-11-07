__d(
  "WAWebPhotoCaptureBrowserPermissionButtonGating",
  ["WAWebABProps", "WAWebBrowserPermissionSupport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "camera",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_photo_capture_browser_permission_button",
        ) === !0
      );
    }
    l.isPhotoCaptureBrowserPermissionButtonEnabled = e;
  },
  98,
);
