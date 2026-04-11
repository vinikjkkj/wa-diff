__d(
  "WAWebSettingsLoggerUtils",
  ["WAWebSettingsClickWamEvent", "WAWebSettingsSearchInitiateWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      new (o("WAWebSettingsClickWamEvent").SettingsClickWamEvent)(e).commit();
    }
    function s(e) {
      new (o(
        "WAWebSettingsSearchInitiateWamEvent",
      ).SettingsSearchInitiateWamEvent)(e).commit();
    }
    ((l.logSettingsClick = e), (l.logSettingsSearchInitiate = s));
  },
  98,
);
