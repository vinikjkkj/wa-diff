__d(
  "cometRouterNavigateOnWindow",
  [
    "CometRouterLogEventUtils",
    "ConstUriUtils",
    "ODS",
    "Random",
    "cometRouterLogger",
    "gkx",
    "goForceFullPageRedirectTo",
    "isLinkshimURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["/ads", "/help"];
    function u(e) {
      switch (e) {
        case "unmatched":
          return 364;
        case "history_back_failed":
          return 309;
        case "navigation_limit":
          return 59;
        case "session_time_limit":
          return 27;
        case "404":
          return 11;
        default:
          return 1;
      }
    }
    function c(t, n, a) {
      var i = o("ConstUriUtils").getUri(t);
      if (i && !r("isLinkshimURI")(i)) {
        if (
          !s.some(function (e) {
            return t.startsWith(e);
          })
        ) {
          var l = u(n);
          o("Random").coinflip(l) &&
            (e || (e = o("ODS"))).bumpEntityKey(
              2994,
              "comet_router",
              "force_reload." + n,
              l,
            );
        }
        (r("gkx")("26335") && alert("Reloading page due to " + n),
          r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .NAVIGATION_ON_WINDOW,
            nextRoute: t,
            reason: n,
          }),
          r("goForceFullPageRedirectTo")(t, a));
      }
    }
    l.default = c;
  },
  98,
);
