__d(
  "CometRootInitClient",
  [
    "CometProductAttribution",
    "ErrorGuard",
    "cr:2694",
    "cr:5833",
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
    function c(t) {
      var a = t.client_id,
        i = t.initialRoute,
        l = t.timeSpentMetadata,
        c = t.traceAPI;
      (n("cr:5833") != null &&
        (e || (e = r("ErrorGuard"))).applyWithGuard(
          function () {
            return n("cr:5833").registerCometRHCInitialLoadTrace(c);
          },
          null,
          [],
        ),
        r("initCometPlatformWebPage")(a, {
          disableTimeSpentLogging: !1,
          productAttribution: o(
            "CometProductAttribution",
          ).getProductAttributionFromRoute(i, "via_cold_start"),
          timeSpentMetadata: l,
          timeSpentRoute: r("extractTimeSpentFromCometRoute")(i),
          traceAPI: c,
        }),
        s.onReady(function (e) {
          return e(c);
        }),
        n("cr:2694") != null && n("cr:2694")(),
        u.onReady(function (e) {
          return e(c);
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
