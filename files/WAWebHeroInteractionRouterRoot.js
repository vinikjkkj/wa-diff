__d(
  "WAWebHeroInteractionRouterRoot",
  [
    "CometAddInlineTiming",
    "Env",
    "WAWebEnvironment",
    "WAWebNoopGC",
    "WAWebQplEmployeeSampling",
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
      u = r("qpl")._(858078457, "1005"),
      c = r("createHeroInteractionRouterRoot")(),
      d = null,
      m = {
        Component: c.Component,
        startInitialLoad: function (t) {
          var e;
          if (d == null) {
            (o("WAWebNoopGC").installGCNoopWrapper(),
              o("WAWebQplEmployeeSampling").sampleEveryEmployeeInstance(u));
            var n = "wa.web." + t;
            ((d = c.startInitialLoad({
              tracePolicy: n,
              qplEvent: u,
              metadata: {
                subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                environment: r("WAWebEnvironment").getEnvironment(),
              },
            })),
              (e = d) == null ||
                e.onComplete(function (e) {
                  s != null &&
                    o("CometAddInlineTiming").addInlineTiming(e.traceId, s, 0);
                }));
          }
        },
        startNavigation: function (t) {},
        addInitialLoadAnnotation: function (t, n) {
          var e;
          (e = d) == null || e.addAnnotation(t, n);
        },
      };
    l.default = m;
  },
  98,
);
