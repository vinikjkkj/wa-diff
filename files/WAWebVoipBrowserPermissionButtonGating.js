__d(
  "WAWebVoipBrowserPermissionButtonGating",
  ["WAWebABProps", "WAWebEnvironment", "WAWebVoipBrowserPermissionSupport"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        s(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_browser_permission_button_enabled",
        ) === !0
      );
    }
    function s(e) {
      return (
        !r("WAWebEnvironment").isWindows &&
        o(
          "WAWebVoipBrowserPermissionSupport",
        ).isBrowserPermissionButtonSupported(e)
      );
    }
    ((l.isBrowserPermissionButtonEnabled = e),
      (l.hasBrowserPermissionButton = s));
  },
  98,
);
