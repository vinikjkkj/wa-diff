__d(
  "WAWebVoipBrowserPermissionButtonGating",
  ["WAWebABProps", "WAWebBrowserPermissionSupport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_browser_permission_button_enabled",
        ) === !0
      );
    }
    l.isBrowserPermissionButtonEnabled = e;
  },
  98,
);
