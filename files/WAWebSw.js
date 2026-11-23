__d(
  "WAWebSw",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebStatusSwPrefetchHandler",
    "WAWebSwBase",
    "WAWebSwCacheHelper",
    "WAWebSwCallPopoutHandler",
    "WAWebSwInterruptOfflineResume",
    "WAWebSwNotificationClickHandler",
    "WAWebSwObjectStores",
    "WAWebSwPeriodicSyncHandler",
    "WAWebSwPushHandler",
    "WAWebSwStickerHandler",
    "WAWebSwStopCommsHandler",
    "WAWebSwVideoStreamingHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      (o("WAWebSwInterruptOfflineResume").listenForDatabaseVersionChanges(),
        o("WAWebSwInterruptOfflineResume").listenForMessageCacheFailure());
      var t = [
        new (r("WAWebSwNotificationClickHandler"))(),
        new (r("WAWebSwCallPopoutHandler"))(),
        new (r("WAWebStatusSwPrefetchHandler"))(),
        new (r("WAWebSwVideoStreamingHandler"))(),
        new (r("WAWebSwStickerHandler"))(
          new (o("WAWebSwCacheHelper").CacheHelper)("wa-stickers"),
          r("WAWebSwObjectStores").stickers,
        ),
        new (r("WAWebSwStopCommsHandler"))(),
        new (r("WAWebSwPeriodicSyncHandler"))(),
        new (r("WAWebSwPushHandler"))(),
      ];
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["[sw] version: ", ""])),
        o("WAWebBuildConstants").VERSION_STR,
      ),
        o("WAWebSwBase").addSWBaseHandlers(t));
    }
    l.initHandlers = s;
  },
  98,
);
