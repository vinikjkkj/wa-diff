__d(
  "WAWebAfterReadNuxLogging",
  ["WAWebArInterstitialScreenImpressionWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 4;
    function u(e) {
      new (o(
        "WAWebArInterstitialScreenImpressionWamEvent",
      ).ArInterstitialScreenImpressionWamEvent)({
        accountAfterReadDuration: e.accountAfterReadDuration,
        afterReadScreenEntryPoint: e.afterReadScreenEntryPoint,
        nuxVersion: e.nuxVersion,
      }).commit();
    }
    ((l.AR_NUX_VERSION_AFTER_READ = e),
      (l.AR_NUX_VERSION_AFTER_READ_EPHEMERAL = s),
      (l.logArInterstitialScreenImpression = u));
  },
  98,
);
