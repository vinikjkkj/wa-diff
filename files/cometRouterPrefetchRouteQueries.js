__d(
  "cometRouterPrefetchRouteQueries",
  [
    "Bootloader",
    "CometRouterLogEventUtils",
    "cometRouterAdjustExtraConfigForRoute",
    "cometRouterIsNavigationRefresh",
    "cometRouterLogger",
    "cometRouterSelectNavigation",
    "normalizeCometRouterUrl",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      t === void 0 && (t = { replace: !1 });
      var p = !1,
        _ = r("normalizeCometRouterUrl")(e),
        f = a(),
        g = i.getRoute(e),
        h = null,
        y = null;
      if (
        (r("cometRouterLogger").log({
          eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
            .PREFETCH_ROUTE_QUERIES,
          routeAlreadyFetched: g != null,
          url: e,
        }),
        g)
      )
        b(g);
      else {
        var C = n.actorID;
        r("promiseDone")(i.fetchForNavigation(_, C, null, u), function (e) {
          var t = e.route;
          b(
            t,
            e.initialTimeSpentMetaData,
            e.backgroundInitialTimeSpentMetaData,
          );
        });
      }
      function b(o, u, _) {
        if (
          (u === void 0 && (u = null),
          _ === void 0 && (_ = null),
          o.type === "valid_route")
        ) {
          var g = o;
          if (!p) {
            var C = r("cometRouterAdjustExtraConfigForRoute")(e, n, t, a()),
              b = r("cometRouterIsNavigationRefresh")(g, a());
            if (!b) {
              var v = r("cometRouterSelectNavigation")(
                g,
                C.target,
                C.dispatchedFrom,
                f,
                i,
              );
              if (v) {
                var S = l(
                  v,
                  u != null ? u : null,
                  _ != null ? _ : null,
                  s,
                  C,
                  m,
                  a,
                  c,
                );
                if (S) {
                  var R = S.mainEntryPointContainer,
                    L = S.modalEntryPointContainer;
                  if (((h = R), (y = L), d != null)) {
                    var E, k;
                    ((E = h) == null || E.lock(d),
                      (k = y) == null || k.lock(d));
                  }
                }
                r("Bootloader").forceFlush();
              }
            }
          }
        }
      }
      return {
        cancel: function () {
          if (!p) {
            if (d != null) {
              var e, t;
              ((e = h) == null || e.unlock(d), (t = y) == null || t.unlock(d));
            }
            p = !0;
          }
        },
        usePrefetchedEntrypointForRouting: function () {
          return { mainEntryPointContainer: h, modalEntryPointContainer: y };
        },
      };
    }
    l.default = e;
  },
  98,
);
