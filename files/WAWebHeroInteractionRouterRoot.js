__d(
  "WAWebHeroInteractionRouterRoot",
  [
    "CometAddInlineTiming",
    "Env",
    "WAWebEnvironment",
    "createHeroInteractionRouterRoot",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        (e || (e = r("Env"))).brsid != null
          ? String((e || (e = r("Env"))).brsid)
          : null,
      u = r("createHeroInteractionRouterRoot")(),
      c = null,
      d = {
        Component: u.Component,
        startInitialLoad: function (t) {
          var e;
          if (c == null) {
            var n = "wa.web." + t;
            ((c = u.startInitialLoad({
              tracePolicy: n,
              qplEvent: r("qpl")._(891430087, "3165"),
              metadata: {
                subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                environment: r("WAWebEnvironment").getEnvironment(),
              },
            })),
              (e = c) == null ||
                e.onComplete(function (e) {
                  s != null &&
                    o("CometAddInlineTiming").addInlineTiming(e.traceId, s, 0);
                }));
          }
        },
        startNavigation: function (t) {},
      };
    l.default = d;
  },
  98,
);
