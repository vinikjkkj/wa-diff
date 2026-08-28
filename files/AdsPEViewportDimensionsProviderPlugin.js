__d(
  "AdsPEViewportDimensionsProviderPlugin",
  [
    "CometSSRViewportHints",
    "ServerJsRuntimeEnvironment",
    "getViewportDimensions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e, t;
      if (!o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime())
        return r("getViewportDimensions")();
      var n = o("CometSSRViewportHints").getDimensionsGuess();
      return {
        width: (e = n == null ? void 0 : n.width_px) != null ? e : 0,
        height: (t = n == null ? void 0 : n.height_px) != null ? t : 0,
      };
    }
    var s = { initialState: e() },
      u = s;
    l.default = u;
  },
  98,
);
