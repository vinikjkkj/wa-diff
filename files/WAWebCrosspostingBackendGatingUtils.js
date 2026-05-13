__d(
  "WAWebCrosspostingBackendGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_crosspost_settings_sync") >=
        1
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_crosspost_settings_sync") >=
        2
      );
    }
    ((l.crosspostSettingsSyncReceiverEnabled = e),
      (l.crosspostSettingsSyncSenderEnabled = s));
  },
  98,
);
