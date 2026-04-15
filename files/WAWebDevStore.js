__d(
  "WAWebDevStore",
  [
    "WAWebCollections",
    "WAWebConnModel",
    "WAWebDebugCommandCollection",
    "WAWebHistorySyncProgressModel",
    "WAWebNoticeModel",
    "WAWebPrimaryFeaturesModel",
    "WAWebPttPrefs",
    "WAWebSettingsModel",
    "WAWebStreamModel",
    "WAWebWidStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = babelHelpers.extends(
      {
        Conn: o("WAWebConnModel").Conn,
        DebugCommand: r("WAWebDebugCommandCollection"),
        WAWebNoticeModel: r("WAWebNoticeModel"),
        PttPrefs: o("WAWebPttPrefs").PttPrefs,
        WAWebSettingsModel: r("WAWebSettingsModel"),
        Stream: o("WAWebStreamModel").Stream,
        WAWebWidStore: r("WAWebWidStore"),
        PrimaryFeatures: o("WAWebPrimaryFeaturesModel").PrimaryFeatures,
        getHistorySyncProgressModel: o("WAWebHistorySyncProgressModel")
          .getHistorySyncProgressModel,
      },
      r("WAWebCollections"),
    );
    l.default = e;
  },
  98,
);
