__d(
  "AdsInterfacesRouter",
  [
    "invariant",
    "AdsInterfacesRouteBuilder",
    "AdsInterfacesRouteDI",
    "AdsInterfacesRouterEvents",
    "EventListener",
    "Parent",
    "URI",
    "memoizeWithArgsByKey",
    "serializeFormQueryMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e, t, n) {
      return t.getNavigatableInfo(n.constructor, n.params, {
        destination: e,
        params: {},
        fragment: null,
        replaceState: !1,
      });
    }
    var c = r("memoizeWithArgsByKey")(u),
      d = (function () {
        function t() {}
        ((t.get = function () {
          return r("AdsInterfacesRouteDI").getRouter();
        }),
          (t.getOrNull = function () {
            return r("AdsInterfacesRouteDI").getRouterOrNull();
          }));
        var n = t.prototype;
        return (
          (n.getNavigatableByURI = function (t) {
            var e = r("AdsInterfacesRouteDI").getResolver(),
              n = e.getRouteInfo(t, !1);
            return n == null || n.routeClass == null
              ? null
              : n.routeClass.toShortNavigatable();
          }),
          (n.getLeafRoute = function () {
            var e = r("AdsInterfacesRouteDI").getResolver();
            return e.getCurrentLeafRoute(!0);
          }),
          (n.getGivenName = function () {
            return this.getLeafRoute().givenName;
          }),
          (n.getParams = function () {
            return this.getLeafRoute().params;
          }),
          (n.getTypedParams = function () {
            return this.getLeafRoute().params;
          }),
          (n.getQueryParams = function () {
            return this.getLeafRoute().queryParams;
          }),
          (n.getSemanticParams = function () {
            return this.getLeafRoute().semanticParams;
          }),
          (n.getActiveState = function () {
            return this.getLeafRoute().activeState;
          }),
          (n.getFragment = function () {
            return this.getLeafRoute().fragment;
          }),
          (n.getRoutes = function () {
            var e = r("AdsInterfacesRouteDI").getResolver();
            return e.getCurrentRoutes(!0);
          }),
          (n.getRoutesGivenName = function () {
            return this.getRoutes().map(function (e) {
              return e.givenName;
            });
          }),
          (n.hasActiveRoute = function (t) {
            var e = r("AdsInterfacesRouteDI").getResolver(),
              n = e.getCurrentLeafRoute(!0),
              o = c(t, t, e, n);
            if (o.isExternal) return !1;
            var a = o.routeClass,
              i = e.getRoutesByLeafRoute(n);
            return i.some(function (e) {
              return e instanceof a;
            });
          }),
          (n.isActiveRoute = function (t) {
            var e = r("AdsInterfacesRouteDI").getResolver(),
              n = e.getCurrentLeafRoute(!0),
              o = c(t, t, e, n);
            return o.isActiveRoute;
          }),
          (n.getBuilder = function () {
            return new (r("AdsInterfacesRouteBuilder"))(this);
          }),
          (n.navigateTo = function (t, n, o, a) {
            var e = r("AdsInterfacesRouteDI").getEventManager();
            e.navigate(t, n, o, !!a);
          }),
          (n.updateParams = function (t, n, o) {
            var e = r("AdsInterfacesRouteDI").getEventManager();
            e.navigate(null, t, n, !!o);
          }),
          (n.reload = function (t, n) {
            var e = r("AdsInterfacesRouteDI").getEventManager();
            e.reload(t, !!n);
          }),
          (n.bootloadRoute = function (t, n) {
            this.$1(t, n, !1);
          }),
          (n.preloadRoute = function (t, n) {
            this.$1(t, n, !0);
          }),
          (n.$1 = function (t, n, o) {
            var e = r("AdsInterfacesRouteDI").getEventManager(),
              a = r("AdsInterfacesRouteDI").getResolver(),
              i = a.getCurrentLeafRoute(!0),
              l = a.normalizeNavigatableToClassOrURI(i.constructor, i.params, {
                destination: t,
                params: {},
                fragment: null,
                replaceState: !1,
              }),
              s = l.destination;
            if (s.routeName) {
              var u = n || {},
                c = new s(),
                d = a.getRoutesByLeafRoute(c);
              e.loadRoutes(
                d,
                function () {
                  (u.onSuccess && u.onSuccess(),
                    u.onComplete && u.onComplete());
                },
                function (e) {
                  (u.onFailure && u.onFailure(e),
                    u.onComplete && u.onComplete());
                },
                null,
                o,
              );
            }
          }),
          (n.getURITo = function (t, n, o, a) {
            var e = o || {},
              i = r("AdsInterfacesRouteDI").getResolver(),
              l = i.getCurrentLeafRoute(!0),
              s = i.getNavigatableInfo(l.constructor, l.params, {
                destination: t,
                params: n || {},
                fragment: e.fragment,
                replaceState: !!e.replaceState,
                resetRouteParams: !!e.resetRouteParams,
                preservedRouteParams: e.preservedRouteParams || [],
              }),
              u = null;
            return (
              a &&
                !s.isExternal &&
                s.routeClass &&
                (u = i.redirectClassToURI(s.routeClass, s.params || {})),
              u || s.uri
            );
          }),
          (n.addEventListener = function (t, n) {
            var e = r("AdsInterfacesRouteDI").getEventManager();
            switch (t) {
              case r("AdsInterfacesRouterEvents").POPSTATE:
                return e.listenToPopState(n);
              case r("AdsInterfacesRouterEvents").NAVIGATE:
                return e.listenToNavigate(n);
              case r("AdsInterfacesRouterEvents").RELOAD:
                return e.listenToReload(n);
              case r("AdsInterfacesRouterEvents").ROUTE_CHANGE:
                return e.listenToRouteChange(n);
              default:
                return s(
                  !1,
                  "addEventListener encountered an unknown event type",
                );
            }
          }),
          (n.captureUserEvents = function () {
            var e = this;
            (m(
              "click",
              function (e) {
                var t = e.target;
                if (!(t instanceof Node)) return null;
                var n = o("Parent").byTag(t, "a");
                return n instanceof HTMLAnchorElement ? n : null;
              },
              function (t, n) {
                return e.$2(t, n);
              },
            ),
              m(
                "submit",
                function (e) {
                  var t = e.target;
                  if (!(t instanceof Node)) return null;
                  var n = o("Parent").byTag(t, "form");
                  return n instanceof HTMLFormElement ? n : null;
                },
                function (t, n) {
                  return e.$3(t, n);
                },
              ));
          }),
          (n.$2 = function (n, o) {
            if (!(!o.href || (o.target && o.target !== "_self"))) {
              var t = n;
              !t.shiftKey &&
                !t.ctrlKey &&
                !t.metaKey &&
                t.which !== 2 &&
                t.button !== 4 &&
                this.$4(n, new (e || (e = r("URI")))(o.href));
            }
          }),
          (n.$3 = function (n, o) {
            o.action &&
              o.method === "get" &&
              this.$4(
                n,
                new (e || (e = r("URI")))(o.action).addQueryData(
                  r("serializeFormQueryMap")(o),
                ),
              );
          }),
          (n.$4 = function (t, n) {
            this.getNavigatableByURI(n) &&
              (t.preventDefault(), this.navigateTo(n));
          }),
          t
        );
      })();
    function m(e, t, n) {
      var o;
      (r("EventListener").capture(document, e, function (e) {
        o = t(e);
      }),
        r("EventListener").registerDefault(e, function (e) {
          o && (e.defaultPrevented || n(e, o), (o = void 0));
        }));
    }
    l.default = d;
  },
  98,
);
