__d(
  "WAWebBroadcastDeviceClassifier",
  ["WAWebMobilePlatforms", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebUserPrefsMeUser").isMeAccount(e);
      if (t) {
        var n;
        return e.isCompanion()
          ? "self:web_companion"
          : "self:primary:" +
              ((n = o("WAWebMobilePlatforms").getMobilePlatform()) != null
                ? n
                : "unknown");
      }
      return e.isCompanion() ? "recipient:companion" : "recipient:primary";
    }
    l.classifyBroadcastDevice = e;
  },
  98,
);
