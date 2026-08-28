__d(
  "adsIsPreloadingDebugModeFromURI",
  ["getQueryParamFromURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("getQueryParamFromURI")("preloadingdebug") ||
        r("getQueryParamFromURI")("preloadingonly")
      );
    }
    l.default = e;
  },
  98,
);
