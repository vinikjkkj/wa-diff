__d(
  "CometRouteStore",
  [
    "CometRelayRoutePrefetchCache",
    "CometRouteCache",
    "CometRouteMapper",
    "CometRouterEventFalcoEvent",
    "CometRouterFalcoLoggingUtils",
    "CometRouterLogEventUtils",
    "ConstUriUtils",
    "Promise",
    "SiteData",
    "asyncToGeneratorRuntime",
    "cometRouterLogger",
    "cr:3468",
    "fetchAnonymousCometRoute",
    "getCometRouteBackgroundData",
    "getCometRouteFetchRouteData",
    "getCometRouteKey",
    "installToCometRouteMapper",
    "normalizeCometRouteStorePrefetchUrl",
    "normalizeCometRouterConstUri",
    "notifyServerOnNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    n("cr:3468") != null && n("cr:3468")();
    function s(e) {
      var t = r("CometRouteCache").getRoute(e);
      if (t != null) return t;
      var n = r("CometRouteMapper").getRoute(e);
      return n != null
        ? (o("CometRouterFalcoLoggingUtils").logRouteFetch(
            e,
            "client_fetched_route_from_mapper",
          ),
          r("CometRouteCache").install(e, n),
          n)
        : (o("CometRouterFalcoLoggingUtils").logRouteFetch(
            e,
            "client_unfetched_route_definition",
          ),
          null);
    }
    function u(t, a) {
      r("cometRouterLogger").log({
        eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
          .PREFETCH_ROUTE_DEFINITION,
        url: t,
      });
      var i = s(t);
      if (i != null) return (e || (e = n("Promise"))).resolve(i);
      var l = r("normalizeCometRouteStorePrefetchUrl")(t),
        u = r("CometRelayRoutePrefetchCache").get(l);
      return u
        ? u.promise.catch(function () {
            return c(t, a);
          })
        : c(t, a);
    }
    function c(e, t) {
      return o("fetchAnonymousCometRoute")
        .fetchAnonymousCometRouteForPreload(e)
        .then(
          (function () {
            var o = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var o = yield r("getCometRouteFetchRouteData")(e, n, t),
                  a = o.prefetchable
                    ? o.route
                    : { type: "nonprefetchable_route", url: e };
                if (!n.error) {
                  (r("installToCometRouteMapper")(e, n),
                    r("CometRouteCache").install(e, a));
                  var i = yield r("getCometRouteBackgroundData")(
                      o,
                      n.backgroundResult,
                    ),
                    l = i != null ? i : {},
                    s = l.backgroundUrl,
                    u = l.result;
                  if (s != null && u != null) {
                    var c = u.prefetchable
                      ? u.route
                      : { type: "nonprefetchable_route", url: s };
                    (r("installToCometRouteMapper")(s, {
                      error: !1,
                      result: n.backgroundResult,
                    }),
                      r("CometRouteCache").install(s, c));
                  }
                }
                return a;
              },
            );
            return function (e) {
              return o.apply(this, arguments);
            };
          })(),
        );
    }
    function d(t, a, i, l) {
      var u = s(t);
      return u != null && u.type !== "nonprefetchable_route"
        ? (e || (e = n("Promise"))).resolve({ prefetchable: !0, route: u })
        : o("fetchAnonymousCometRoute")
            .fetchAnonymousCometRouteForTransition(t, a, i)
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield r("getCometRouteFetchRouteData")(t, e, l),
                      o = n.prefetchable
                        ? n.route
                        : { type: "nonprefetchable_route", url: t };
                    (r("installToCometRouteMapper")(t, e),
                      r("CometRouteCache").install(t, o));
                    var a = e.error
                        ? null
                        : yield r("getCometRouteBackgroundData")(
                            n,
                            e.backgroundResult,
                          ),
                      i = a != null ? a : {},
                      s = i.backgroundUrl,
                      u = i.result;
                    if (s != null && u != null && !e.error) {
                      var c = u.prefetchable
                        ? u.route
                        : { type: "nonprefetchable_route", url: s };
                      (r("installToCometRouteMapper")(s, {
                        error: !1,
                        result: e.backgroundResult,
                      }),
                        r("CometRouteCache").install(s, c),
                        (n = babelHelpers.extends({}, n, {
                          backgroundInitialTimeSpentMetaData:
                            u.initialTimeSpentMetaData,
                        })));
                    }
                    return n;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
    }
    function m(e, t, o, a) {
      return r("notifyServerOnNavigation")(t, o).then(
        (function () {
          var o = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var o = yield r("getCometRouteFetchRouteData")(t, n, a),
              i = o.route;
            if (
              (i == null ? void 0 : i.type) === "valid_route" &&
              r("getCometRouteKey")(i) === r("getCometRouteKey")(e)
            )
              return null;
            (r("CometRouterEventFalcoEvent").log(function () {
              return {
                comet_app_key: r("SiteData").comet_env,
                event: "pingback_mismatch",
                route: e.canonicalRouteName,
                server_route: i.canonicalRouteName,
              };
            }),
              r("installToCometRouteMapper")(t, n));
            var l = o.prefetchable
              ? o.route
              : { type: "nonprefetchable_route", url: t };
            return (r("CometRouteCache").install(t, l), i);
          });
          return function (e) {
            return o.apply(this, arguments);
          };
        })(),
      );
    }
    function p(e) {
      var t,
        n = "",
        a = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      ((n = (t = a == null ? void 0 : a.getPath()) != null ? t : ""),
        r("CometRouteMapper").invalidatePath(n),
        r("CometRouteCache").invalidatePath(n));
    }
    var _ = {
      fetchForNavigation: d,
      fetchForValidation: m,
      fetchRoute: u,
      getRoute: s,
      invalidatePath: p,
    };
    l.default = _;
  },
  98,
);
