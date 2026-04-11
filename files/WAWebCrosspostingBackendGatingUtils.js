__d(
  "WAWebCrosspostingBackendGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_crossposting_enabled",
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_crosspost_settings_sync") >=
        1
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_crosspost_settings_sync") >=
        2
      );
    }
    ((l.statusCrosspostingEnabled = e),
      (l.crosspostSettingsSyncReceiverEnabled = s),
      (l.crosspostSettingsSyncSenderEnabled = u));
  },
  98,
);
