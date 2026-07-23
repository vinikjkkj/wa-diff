__d(
  "buildCometRouter.shared",
  [
    "CometRouterLogEventUtils",
    "ExecutionEnvironment",
    "MaintainedRouteConfig",
    "cometRouterCreateMaintainedStateManager",
    "cometRouterCreateRouterStatusManager",
    "cometRouterEntryPointContainerLock",
    "cometRouterIsNavigationRefresh",
    "cometRouterLogger",
    "cometUniqueID",
    "createRouteKey",
    "getSecondTopViewInfo",
    "isTransparentPushView",
    "normalizeCometRouterUrl",
    "performanceNow",
    "promiseDone",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return e.tabKey;
    }
    function c(e) {
      var t = e(),
        n = t.hosted,
        r = t.pushViewStack;
      return r != null && r.length > 0
        ? "pushView"
        : n != null
          ? "hostedView"
          : "rootView";
    }
    function d(e, t) {
      return (
        e.push(t),
        {
          cancel: function () {
            return r("removeFromArray")(e, t);
          },
        }
      );
    }
    function m(e, t, n, r) {
      return function (i, l, s) {
        var a = u(i.main.route),
          c = u(l.main.route);
        if (c !== a) {
          c != null && e.isMaintained(c) && e.unmaintain(c);
          var d = o("MaintainedRouteConfig").getMaintainedRouteConfig(a);
          if (a != null && d != null) {
            var m = d.cleanup,
              p = d.maintained,
              _ = d.maintainRouteForMs,
              f =
                p &&
                !e.isMaintained(a) &&
                ((r == null ? void 0 : r.hasNoMemoryConcern) == null ||
                  r.hasNoMemoryConcern(a)) &&
                !s;
            f &&
              (o("cometRouterEntryPointContainerLock").lockEntrypointContainers(
                t,
                i,
              ),
              e.maintain(
                a,
                i.main,
                _,
                function () {
                  (r == null ||
                    r.updateAndInformMaintainedTabs == null ||
                    r.updateAndInformMaintainedTabs(
                      e.getMaintainedState(),
                      "end",
                      a,
                    ),
                    o(
                      "cometRouterEntryPointContainerLock",
                    ).unlockEntrypointContainers(t, i));
                },
                function () {
                  (m(), n(!1));
                },
              ),
              r == null ||
                r.updateAndInformMaintainedTabs == null ||
                r.updateAndInformMaintainedTabs(
                  e.getMaintainedState(),
                  "start",
                  a,
                ));
          }
        }
      };
    }
    function p() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? r("cometUniqueID")()
        : Symbol();
    }
    function _(e, t, n) {
      return function (a, i, l, u) {
        var o,
          d,
          m = u.getCurrentRouterState,
          p = r("normalizeCometRouterUrl")(a),
          _ = babelHelpers.extends({}, n, l),
          f = 0,
          g,
          h =
            (o = i.eventTimestamp) != null
              ? o
              : (d = globalThis.event) == null
                ? void 0
                : d.timeStamp;
        h != null
          ? ((f = h), (g = (s || (s = r("performanceNow")))() - f))
          : (f = (s || (s = r("performanceNow")))());
        var y = i,
          C = t.startNavigation(y.replace);
        C && (y = babelHelpers.extends({}, y, { replace: !0 }));
        var b = babelHelpers.extends({}, m(), { focusReturnRef: null }),
          v = e(),
          S = c(m);
        return {
          context: _,
          dispatchedFrom: S,
          eventQueueTime: g,
          extras: y,
          navigationKey: v,
          previousRouterState: b,
          routingStart: f,
          url: p,
        };
      };
    }
    function f(e) {
      var t = e.go,
        n = e.goBack,
        o = e.popPushView,
        a = e.prefetchRouteDefinition,
        i = e.prefetchRouteQueries,
        l = e.preloadRouteCode;
      return {
        go: function (n, o, a) {
          r("promiseDone")(t(n, null, o, a));
        },
        goAsync: function (n, r, o) {
          return t(n, null, r, o);
        },
        goBack: n,
        goTo: function (n, o, a) {
          r("promiseDone")(t(n.url, n, o, a));
        },
        goToAsync: function (n, r, o) {
          return t(n.url, n, r, o);
        },
        popPushView: o,
        prefetchRouteDefinition: a,
        prefetchRouteQueries: i,
        preloadRouteCode: l,
      };
    }
    function g(e, t, n) {
      n === void 0 && (n = !1);
      var o = [],
        a = r("cometRouterCreateRouterStatusManager")(),
        i = r("cometRouterCreateMaintainedStateManager")(),
        l = function (t, r, a) {
          o.forEach(function (e) {
            return e(t && !n, r, a);
          });
        },
        s = function (t) {
          a.resetRouterStatus(t);
        },
        u = function (t, n, r, o, i, s) {
          o === void 0 && (o = !0);
          var e = n.onAfterStateUpdate,
            u = n.onBeforeStateUpdate,
            c = n.setCurrentRouterState;
          (u && u(),
            a.internalStateUpdated(t.routeKey),
            c(t, s),
            l(o != null ? o : !0, r, i),
            e && e(t));
        },
        c = p(),
        g = m(i, c, l, t),
        h = { actorID: e, from: "rootView" },
        y = b(c),
        C = _(r("createRouteKey"), a, h);
      return {
        addListener: function (t) {
          return d(o, t);
        },
        createRouterDispatcher: f,
        defaultContext: h,
        loadingDone: u,
        maintainedStateManager: i,
        markNavigationAsCommitted: s,
        prepareNavigationContext: C,
        routerStatusManager: a,
        setCurrentRouterState: y,
        setMaintainedState: g,
      };
    }
    function h(e, t, n, r) {
      var a,
        i = null,
        l = u(t);
      if (
        e.action === "loadTab" &&
        l != null &&
        ((a = o("MaintainedRouteConfig").getMaintainedRouteConfig(l)) == null
          ? void 0
          : a.maintained) === !0
      ) {
        var s = r.getMaintainableWithKey(l);
        s != null
          ? (i = s.mainScrollKey)
          : u(n.main.route) === l && n.main.mainScrollKey != null
            ? (i = n.main.mainScrollKey)
            : (i = Date.now());
      }
      return i;
    }
    function y(e, t, n, o, a, i, l) {
      var s,
        u = l.entryPointContainer,
        c = l.getCurrentRouterState,
        d = l.maintainedStateManager,
        m = l.modalEntryPointContainer,
        p = l.navigationInteractionID,
        _ = l.navigationType,
        f = l.passthroughProps,
        g = l.previousRouterState,
        y = l.skipNotifyServer,
        C = r("cometRouterIsNavigationRefresh")(n != null ? n : e, c()),
        b = h(a, e, g, d),
        v = {
          entryPointContainer: u,
          mainScrollKey: b,
          navigationInteractionID: p,
          passthroughProps: f,
          referrer: {
            actorID: i.actorID,
            isBackgroundRoute: n != null,
            navigationType: _ != null ? _ : "navigation",
            tracePolicy: (s = i.tracePolicy) != null ? s : "comet.app",
            url: i.url,
          },
          refreshKey: C ? String(Date.now()) : null,
          skipNotifyServer: y != null ? y : !1,
          timeSpentMetaData: t,
        },
        S =
          n != null
            ? babelHelpers.extends({}, v, {
                entryPointContainer: m,
                mainScrollKey: null,
                timeSpentMetaData: o,
              })
            : null;
      return { mainRouteInfoExtras: v, modalRouteInfoExtras: S };
    }
    function C(e, t, n) {
      var o,
        a = e(),
        i = a.pushViewStack;
      if (!(i == null || i.length === 0)) {
        var l = i[i.length - 1];
        if (r("isTransparentPushView")(l.route)) {
          var s,
            u,
            c =
              (s = r("getSecondTopViewInfo")(a)) == null ? void 0 : s.routeInfo;
          if (
            c != null &&
            ((u = c.referrer) == null ? void 0 : u.isBackgroundRoute) === !0
          ) {
            t(c.route, { navigationType: "navigation", replace: !1 });
            return;
          }
        }
        var d =
            (o =
              n == null || n.getCurrentRouteStep == null
                ? void 0
                : n.getCurrentRouteStep()) != null
              ? o
              : 0,
          m = l.depth + d;
        n.go(-m);
      }
    }
    function b(e) {
      return function (n, a) {
        var t = a.currentRouterState,
          i = a.debugUtils,
          l = a.getRouteKey,
          s = a.keyToRouteStateMap,
          c = a.preventMaintain,
          d = a.setMaintainedState,
          m = a.updateCurrentRouterState,
          p = l();
        ((s[p] = n),
          t != null &&
            (o("cometRouterEntryPointContainerLock").unlockEntrypointContainers(
              e,
              t,
            ),
            d(t, n, c)),
          r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .NAVIGATION_ROUTER_STATE_UPDATE,
            prevRouterState: t,
            routerState: n,
          }),
          o("cometRouterEntryPointContainerLock").lockEntrypointContainers(
            e,
            n,
          ),
          m(n, p),
          i != null &&
            (i.setTabKeyToRouteKeyMap == null ||
              i.setTabKeyToRouteKeyMap(u(n.main.route), p),
            i.updateInfo == null || i.updateInfo(p)));
      };
    }
    ((l.buildCometRouterShared = g),
      (l.buildRouteInfoExtras = y),
      (l.getMaintainKey = u),
      (l.getDispatchedFrom = c),
      (l.popPushView = C));
  },
  98,
);
