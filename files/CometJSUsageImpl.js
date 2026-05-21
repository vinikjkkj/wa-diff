__d(
  "CometJSUsageImpl",
  [
    "Random",
    "XCometJSUsageControllerRouteBuilder",
    "__debug",
    "cometAsyncFetchShared",
    "interaction-tracing",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var a = r("justknobx")._("5245");
      if (
        (((e == null ? void 0 : e.startsWith("ads.")) === !0 ||
          (e == null ? void 0 : e.startsWith("manage_ads.")) === !0) &&
          (a = r("justknobx")._("1006")),
        !!o("Random").coinflip(a))
      ) {
        var i = n("__debug").modulesMap,
          l = new Set(),
          s = new Set(),
          u = new Set(),
          c = new Set();
        for (var d of Object.entries(i)) {
          var m = d[0],
            p = d[1];
          if (
            p != null &&
            (p.factoryFinished ? l.add(m) : s.add(m),
            !p.id.startsWith("rd:") && p.dependencies)
          )
            for (var _ of p.dependencies) _ && _.id && c.add(_.id);
        }
        for (var f of Object.entries(i)) {
          var g = f[0],
            h = f[1];
          h != null &&
            !h.id.startsWith("rd:") &&
            h.factoryFinished &&
            (c.has(g) || u.add(g));
        }
        r("promiseDone")(
          r("cometAsyncFetchShared")(
            r("XCometJSUsageControllerRouteBuilder").buildURL({}),
            {
              data: {
                qpl_event_marker_id: t,
                root_modules: JSON.stringify(Array.from(u)),
                trace_policy: e,
                unused_modules: JSON.stringify(Array.from(s)),
                used_modules: JSON.stringify(Array.from(l)),
              },
              method: "POST",
            },
          ),
        );
      }
    }
    function s() {
      r("interaction-tracing").InteractionTracingCore.onStartInteraction(
        function (t) {
          t.onLog(function (n, r) {
            var o,
              a =
                (o = n.annotations) == null || (o = o.string) == null
                  ? void 0
                  : o.tracePolicy,
              i = t.getQPLEventMarkerId();
            e(a, i);
          });
        },
      );
    }
    var u = { setupCometJSUsageLogging: s };
    l.default = u;
  },
  98,
);
