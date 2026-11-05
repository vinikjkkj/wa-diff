__d(
  "WAWebHatchApiKeyGating",
  ["WAWebHatchFrontendGating", "WAWebHatchGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebHatchGating").getHatchSupportedConnectActions();
      return o("WAWebHatchFrontendGating").isHatchSecureCredentialsEnabled()
        ? e
        : e.filter(function (e) {
            return e !== "api_key";
          });
    }
    function s() {
      return (
        o("WAWebHatchFrontendGating").isHatchConnectorsEnabled() &&
        e().includes("api_key")
      );
    }
    ((l.getHatchDeclaredConnectActions = e),
      (l.isHatchApiKeyConnectEnabled = s));
  },
  98,
);
