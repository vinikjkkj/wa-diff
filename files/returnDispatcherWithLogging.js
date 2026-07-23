__d(
  "returnDispatcherWithLogging",
  ["CometRouterLogEventUtils", "cometRouterLogger", "getTopMostRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.withOverrides(function (e) {
        return {
          go: function (a, i) {
            (r("cometRouterLogger").log({
              currTopMostRoute: r("getTopMostRoute")(t()),
              eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                .NAVIGATION_START,
              nextRoute: a,
              routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                .GO,
            }),
              e.go(a, i));
          },
          goAsync: function (n, a) {
            return (
              r("cometRouterLogger").log({
                currTopMostRoute: null,
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .NAVIGATION_START,
                nextRoute: n,
                routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                  .GO_ASYNC,
              }),
              e.goAsync(n, a)
            );
          },
          goBack: function (a) {
            (r("cometRouterLogger").log({
              currTopMostRoute: r("getTopMostRoute")(t()),
              eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                .NAVIGATION_START,
              routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                .BACK,
            }),
              e.goBack(a));
          },
          goTo: function (a, i) {
            (r("cometRouterLogger").log({
              currTopMostRoute: r("getTopMostRoute")(t()),
              eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                .NAVIGATION_START,
              nextRoute: a.url,
              routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                .GO_TO,
            }),
              e.goTo(a, i));
          },
          goToAsync: function (n, a) {
            return (
              r("cometRouterLogger").log({
                currTopMostRoute: null,
                eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                  .NAVIGATION_START,
                nextRoute: n.url,
                routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                  .GO_TO_ASYNC,
              }),
              e.goToAsync(n, a)
            );
          },
          popPushView: function () {
            (r("cometRouterLogger").log({
              currTopMostRoute: r("getTopMostRoute")(t()),
              eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
                .NAVIGATION_START,
              routerTrigger: o("CometRouterLogEventUtils").CometRouterTriggers
                .POP_PUSH_VIEW,
            }),
              e.popPushView());
          },
        };
      });
    }
    l.default = e;
  },
  98,
);
