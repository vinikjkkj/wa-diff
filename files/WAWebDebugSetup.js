__d(
  "WAWebDebugSetup",
  [
    "WAWebBuildConstants",
    "cr:10195",
    "cr:10234",
    "cr:13603",
    "cr:38770",
    "cr:38771",
  ],
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
            n("cr:13603").forceManualRefresh),
        n("cr:38770") &&
          (window.Debug.getCurrentAltLinkingRef = function () {
            var e = n("cr:38770").getCurrentRef();
            return e == null
              ? null
              : btoa(
                  Array.from(e, function (e) {
                    return String.fromCharCode(e);
                  }).join(""),
                );
          }),
        n("cr:38771") &&
          ((window.Debug.enableFlipperConnection =
            n("cr:38771").enableFlipperConnection),
          (window.Debug.disableFlipperConnection =
            n("cr:38771").disableFlipperConnection)));
    }
    l.setupDebugGlobal = e;
  },
  98,
);
