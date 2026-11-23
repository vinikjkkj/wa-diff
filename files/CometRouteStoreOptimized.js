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
    "SiteData",
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
    n("cr:3468") != null && n("cr:3468")();
    function e(e, t) {
      return t.error ? !1 : s(e, t.result);
    }
    function s(e, t) {
      return t == null
        ? !1
        : t.routeMatchInfos.some(function (e) {
              return e.serverParamAccesses != null;
            }) ||
            r("CometRouteMapperOptimized").needsDynamicCacheReconciliation(
              e,
              t.type !== "routeDefinition" ||
                t.routeDefinition.prefetchable === !1,
            )
          ? !0
          : t.type === "routeRedirect" && s(t.redirectUrl, t.redirectResult);
    }
    function u(e) {
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
    function c(e, t) {
      r("cometRouterLogger").log({
        eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
          .PREFETCH_ROUTE_DEFINITION,
        url: e,
      });
      var n = u(e);
      if (n != null) return Promise.resolve(n);
      var a = r("normalizeCometRouteStorePrefetchUrl")(e),
        i = r("CometRelayRoutePrefetchCache").get(a);
      return i
        ? i.promise.catch(function () {
            return d(e, t);
          })
        : d(e, t);
    }
    function d(e, t) {
      return o("fetchAnonymousCometRoute")
        .fetchAnonymousCometRouteForPreload(e)
        .then(async function (n) {
          var o = await r("getCometRouteFetchRouteData")(e, n, t),
            a = o.prefetchable
              ? o.route
              : { type: "nonprefetchable_route", url: e };
          if (!n.error) {
            (r("installToCometRouteMapper")(e, n),
              r("CometRouteCache").install(e, a));
            var i = await r("getCometRouteBackgroundData")(
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
        });
    }
    function m(e, t, n, a) {
      var i = u(e);
      return i != null && i.type !== "nonprefetchable_route"
        ? Promise.resolve({ prefetchable: !0, route: i })
        : o("fetchAnonymousCometRoute")
            .fetchAnonymousCometRouteForTransition(e, t, n)
            .then(async function (t) {
              var n = await r("getCometRouteFetchRouteData")(e, t, a),
                o = n.prefetchable
                  ? n.route
                  : { type: "nonprefetchable_route", url: e };
              (r("installToCometRouteMapper")(e, t),
                r("CometRouteCache").install(e, o));
              var i = t.error
                  ? null
                  : await r("getCometRouteBackgroundData")(
                      n,
                      t.backgroundResult,
                    ),
                l = i != null ? i : {},
                s = l.backgroundUrl,
                u = l.result;
              if (s != null && u != null && !t.error) {
                var c = u.prefetchable
                  ? u.route
                  : { type: "nonprefetchable_route", url: s };
                (r("installToCometRouteMapper")(s, {
                  error: !1,
                  result: t.backgroundResult,
                }),
                  r("CometRouteCache").install(s, c),
                  (n = babelHelpers.extends({}, n, {
                    backgroundInitialTimeSpentMetaData:
                      u.initialTimeSpentMetaData,
                  })));
              }
              return n;
            });
    }
    function p(t, n, o, a) {
      return r("notifyServerOnNavigation")(n, o).then(async function (o) {
        var i = await r("getCometRouteFetchRouteData")(n, o, a),
          l = i.route,
          s = e(n, o);
        if (
          (s && r("installToCometRouteMapper")(n, o),
          !i.prefetchable &&
            s &&
            r("CometRouteCache").install(n, {
              type: "nonprefetchable_route",
              url: n,
            }),
          (l == null ? void 0 : l.type) === "valid_route" &&
            r("getCometRouteKey")(l) === r("getCometRouteKey")(t))
        )
          return null;
        (s || r("installToCometRouteMapper")(n, o),
          r("CometRouterEventFalcoEvent").log(function () {
            return {
              comet_app_key: r("SiteData").comet_env,
              event: "pingback_mismatch",
              route: t.canonicalRouteName,
              server_route: l.canonicalRouteName,
            };
          }));
        var u = i.prefetchable
          ? i.route
          : { type: "nonprefetchable_route", url: n };
        return (r("CometRouteCache").install(n, u), l);
      });
    }
    function _(e) {
      var t,
        n = "",
        a = o("ConstUriUtils").getUri(r("normalizeCometRouterConstUri")(e));
      ((n = (t = a == null ? void 0 : a.getPath()) != null ? t : ""),
        r("CometRouteMapperOptimized").invalidatePath(n),
        r("CometRouteCache").invalidatePath(n));
    }
    var f = {
      fetchForNavigation: m,
      fetchForValidation: p,
      fetchRoute: c,
      getRoute: u,
      invalidatePath: _,
    };
    l.default = f;
  },
  98,
);
