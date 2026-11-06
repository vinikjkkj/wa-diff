__d(
  "WAWebPttBrowserPermissionButtonGating",
  ["WAWebABProps", "WAWebBrowserPermissionSupport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_ptt_browser_permission_button",
        ) === !0
      );
    }
    l.isPttBrowserPermissionButtonEnabled = e;
  },
  98,
);
