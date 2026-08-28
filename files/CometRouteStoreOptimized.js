__d(
  "CometRouteStoreOptimized",
  [
    "CometRelayRoutePrefetchCache",
    "CometRouteCache",
    "CometRouteMapperOptimized",
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
    function s(e, t) {
      return t.error ? !1 : u(e, t.result);
    }
    function u(e, t) {
      return t == null
        ? !1
        : t.routeMatchInfos.some(function (e) {
              return e.serverParamAccesses != null;
            }) ||
            r("CometRouteMapperOptimized").needsDynamicCacheReconciliation(e)
          ? !0
          : t.type === "routeRedirect" && u(t.redirectUrl, t.redirectResult);
    }
    function c(e) {
      var t = r("CometRouteCache").getRoute(e);
      if (t != null) return t;
      var n = r("CometRouteMapperOptimized").getCachedRoute(e);
      if (n != null) return n;
      var a = r("CometRouteMapperOptimized").getRoute(e);
      return a != null
        ? (o("CometRouterFalcoLoggingUtils").logRouteFetch(
            e,
            "client_fetched_route_from_mapper",
          ),
          a)
        : (o("CometRouterFalcoLoggingUtils").logRouteFetch(
            e,
            "client_unfetched_route_definition",
          ),
          null);
    }
    function d(t, a) {
      r("cometRouterLogger").log({
        eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
          .PREFETCH_ROUTE_DEFINITION,
        url: t,
      });
      var i = c(t);
      if (i != null) return (e || (e = n("Promise"))).resolve(i);
      var l = r("normalizeCometRouteStorePrefetchUrl")(t),
        s = r("CometRelayRoutePrefetchCache").get(l);
      return s
        ? s.promise.catch(function () {
            return m(t, a);
          })
        : m(t, a);
    }
    function m(e, t) {
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
    function p(t, a, i, l) {
      var s = c(t);
      return s != null && s.type !== "nonprefetchable_route"
        ? (e || (e = n("Promise"))).resolve({ prefetchable: !0, route: s })
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
    function _(e, t, o, a) {
      return r("notifyServerOnNavigation")(t, o).then(
        (function () {
          var o = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var o = yield r("getCometRouteFetchRouteData")(t, n, a),
              i = o.route,
              l = s(t, n);
            if (
              (l && r("installToCometRouteMapper")(t, n),
              !o.prefetchable &&
                l &&
                r("CometRouteCache").install(t, {
                  type: "nonprefetchable_route",
                  url: t,
                }),
              (i == null ? void 0 : i.type) === "valid_route" &&
                r("getCometRouteKey")(i) === r("getCometRouteKey")(e))
            )
              return null;
            (l || r("installToCometRouteMapper")(t, n),
              r("CometRouterEventFalcoEvent").log(function () {
                return {
                  comet_app_key: r("SiteData").comet_env,
                  event: "pingback_mismatch",
                  route: e.canonicalRouteName,
                  server_route: i.canonicalRouteName,
                };
              }));
            var u = o.prefetchable
              ? o.route
              : { type: "nonprefetchable_route", url: t };
            return (r("CometRouteCache").install(t, u), i);
          });
          return function (e) {
            return o.apply(this, arguments);
          };
        })(),
      );
    }
    function f(e) {
      var t,
        n = "",
        a = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      ((n = (t = a == null ? void 0 : a.getPath()) != null ? t : ""),
        r("CometRouteMapperOptimized").invalidatePath(n),
        r("CometRouteCache").invalidatePath(n));
    }
    var g = {
      fetchForNavigation: p,
      fetchForValidation: _,
      fetchRoute: d,
      getRoute: c,
      invalidatePath: f,
    };
    l.default = g;
  },
  98,
);
