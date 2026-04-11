__d(
  "useWAWebDynamicModesCacheWarmup",
  [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebGetDynamicAIModesAction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(function () {
        !o("WAWebBotUtils").isMetaAiBot(e.id) ||
          !o("WAWebBotBaseGating").isDynamicModeSelectorEnabled() ||
          o("WAWebGetDynamicAIModesAction").getDynamicAIModesAction();
      }, []);
    }
    l.useWAWebDynamicModesCacheWarmup = u;
  },
  98,
);
