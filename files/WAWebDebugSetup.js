__d(
  "WAWebDebugSetup",
  ["WAWebBuildConstants", "cr:10195", "cr:10234", "cr:13603"],
  function (t, n, r, o, a, i, l) {
    function e() {
      ((window.Debug = { VERSION: o("WAWebBuildConstants").VERSION_STR }),
        n("cr:10234") &&
          (window.Debug.pinClientToCdev = function (e) {
            n("cr:10234").setDebugRoutingToken(e);
          }),
        n("cr:10195") &&
          (window.Debug.overrideDefaultBotForTest = function (e) {
            n("cr:10195").setDebugDefaultBotOverride(e);
          }),
        n("cr:13603") &&
          (window.Debug.forceLinkDeviceCodeManualRefresh =
            n("cr:13603").forceManualRefresh));
    }
    l.setupDebugGlobal = e;
  },
  98,
);
