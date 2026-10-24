__d(
  "WAWebDebugSetup",
  [
    "WAWebBuildConstants",
    "cr:10195",
    "cr:13603",
    "cr:17682",
    "cr:17683",
    "cr:38770",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      ((window.Debug = { VERSION: o("WAWebBuildConstants").VERSION_STR }),
        n("cr:17682") &&
          (window.Debug.pinClientToCdev = function (e) {
            (r("vulture")("rvG4QbuPhiHWay1qiaTVr4fr99w="),
              n("cr:17682").setDebugRoutingToken(e));
          }),
        n("cr:10195") &&
          (window.Debug.overrideDefaultBotForTest = function (e) {
            (r("vulture")("Zw5ffAt5UFSOtxX_pPAoVOplLwQ="),
              n("cr:10195").setDebugDefaultBotOverride(e));
          }),
        n("cr:13603") &&
          (window.Debug.forceLinkDeviceCodeManualRefresh =
            n("cr:13603").forceManualRefresh),
        n("cr:38770") &&
          (window.Debug.getCurrentAltLinkingRef = function () {
            r("vulture")("k7dRl4kx4D2lr5HhHF2LtBAhcC8=");
            var e = n("cr:38770").getCurrentRef();
            return e == null
              ? null
              : btoa(
                  Array.from(e, function (e) {
                    return String.fromCharCode(e);
                  }).join(""),
                );
          }),
        n("cr:17683") &&
          ((window.Debug.enableFlipperConnection =
            n("cr:17683").enableFlipperConnection),
          (window.Debug.disableFlipperConnection =
            n("cr:17683").disableFlipperConnection)));
    }
    l.setupDebugGlobal = e;
  },
  98,
);
