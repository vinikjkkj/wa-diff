__d(
  "CometRootInitClient",
  [
    "CometProductAttribution",
    "ErrorGuard",
    "cr:2694",
    "extractTimeSpentFromCometRoute",
    "initCometPlatformWebPage",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("CometGHLTestUBT").__setRef(
        "CometRootInitClient",
      ),
      u = r("requireDeferred")("addCometProfileSwitchAnnotation").__setRef(
        "CometRootInitClient",
      );
    function c(e) {
      var t = e.client_id,
        a = e.initialRoute,
        i = e.timeSpentMetadata,
        l = e.traceAPI;
      (r("initCometPlatformWebPage")(t, {
        disableTimeSpentLogging: !1,
        productAttribution: o(
          "CometProductAttribution",
        ).getProductAttributionFromRoute(a, "via_cold_start"),
        timeSpentMetadata: i,
        timeSpentRoute: r("extractTimeSpentFromCometRoute")(a),
      }),
        s.onReady(function (e) {
          return e(l);
        }),
        n("cr:2694") != null && n("cr:2694")(),
        u.onReady(function (e) {
          return e(l);
        }));
    }
    function d(t, n) {
      t.forEach(function (t) {
        (e || (e = r("ErrorGuard"))).applyWithGuard(t, null, [n]);
      });
    }
    function m(e) {
      return function (t) {
        (e != null && e.preInit && d(e == null ? void 0 : e.preInit, t),
          c(t),
          e != null && e.postInit && d(e == null ? void 0 : e.postInit, t));
      };
    }
    var p = m();
    ((l.makeInitClient = m), (l.initClient = p));
  },
  98,
);
