__d(
  "buildCometRouter",
  [
    "fbt",
    "Bootloader",
    "ClientConsistency",
    "CometClientConsistency",
    "CometHeroLogging",
    "CometHistoryManager",
    "CometNavigationTracing",
    "CometNavigationTracingQPLEvents",
    "CometRouter.flow",
    "CometRouterErrorRoot_MISSING_FIXME",
    "CometRouterLogEventUtils",
    "CometRouterMemoryUtils",
    "CometTimeSpentNavigation",
    "CometVisitationManager",
    "ConstUriUtils",
    "CurrentUser",
    "ExecutionEnvironment",
    "FBLogger",
    "MWChatInteraction",
    "Promise",
    "RouterViewTypes",
    "SiteData",
    "absoluteToRelative",
    "asyncToGeneratorRuntime",
    "buildCometErrorRoute",
    "buildCometRouter.shared",
    "buildCometRouterDispatcher",
    "cometRouterAdjustExtraConfigForRoute",
    "cometRouterBuildEnvironmentProviderFromRoute",
    "cometRouterBuildErrorRouteState",
    "cometRouterBuildInitialRouterState",
    "cometRouterCleanURLSearchParameters",
    "cometRouterConstants",
    "cometRouterCreatePersistentParamsManager",
    "cometRouterIsNavigationRefresh",
    "cometRouterLogger",
    "cometRouterNavigateOnWindow",
    "cometRouterPopStateInterceptor",
    "cometRouterPrefetchRouteDefinition",
    "cometRouterPrefetchRouteQueries",
    "cometRouterPreloadEntrypoint",
    "cometRouterPreloadRouteCode",
    "cometRouterReducer",
    "cometRouterSelectNavigation",
    "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
    "cometRouterSubdomainUtils",
    "cometRouterUnloadHookUtils",
    "cr:11053",
    "cr:20394",
    "currentCometRouterInstance",
    "extractTimeSpentFromCometRoute",
    "getErrorSafe",
    "getInstanceIdentifierFromRoute",
    "getNonNullRouterState",
    "getTopMostRoute",
    "getTopMostRouteInfo",
    "gkx",
    "isCometRouterUrl",
    "makeCometRouteEntryPointContainer",
    "normalizeCometRouterUrl",
    "performRouteConsistencyPingback",
    "performance",
    "performanceNow",
    "persistentQueryParams",
    "promiseDone",
    "react",
    "returnDispatcherWithLogging",
    "setTimeout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = (m || (m = o("react"))).startTransition;
    function _(e) {
      var t;
      if ((e == null ? void 0 : e.type) !== "valid_route") return !0;
      var n =
        (t = e == null ? void 0 : e.isNavigationEligibleForForcedRefresh) !=
        null
          ? t
          : !0;
      return n;
    }
    function f(e, t) {
      var n, r;
      if ((e == null ? void 0 : e.type) !== "valid_route") return !0;
      var o =
        (n =
          e == null ||
          (r = e.navigationForcedRefreshIndividualReasonEligibility) == null
            ? void 0
            : r[t]) != null
          ? n
          : !0;
      return o;
    }
    function g(t, a) {
      var i = t.defaultTransparentPushViewTarget,
        l = t.disableTimeSpentLogging,
        m = t.initialActorID,
        g = t.initialBackgroundRoute,
        h = t.initialBackgroundTimeSpentMetadata,
        y = t.initialLoadTraceId,
        C = t.initialRootRoute,
        b = t.initialTimeSpentMetadata,
        v = t.makeCometRouteContainer,
        S = v === void 0 ? r("makeCometRouteEntryPointContainer") : v,
        R = t.pushViewStackLimit,
        L = t.cometRouterConstantsOverride,
        E = t.disableReactTransition,
        k = E === void 0 ? !1 : E,
        I = t.disableQPLLogging,
        T = I === void 0 ? !1 : I,
        D = t.navigationQPLEvent,
        x = t.persistentParameters,
        $ = x === void 0 ? [] : x,
        P = t.preloadEntrypoint,
        N = P === void 0 ? r("cometRouterPreloadEntrypoint") : P,
        M = t.relayEnvironmentFactory,
        w = t.scrollRestorationBehavior,
        A = w === void 0 ? "manual" : w,
        F = t.uiComponents,
        O = t.VCConfigOverride,
        B = t.siteCleanQueryParams,
        W = t.hooks,
        q = t.warnUsageOutsideOfComet,
        U = q === void 0 ? !0 : q,
        V = t.navigationNamespace,
        H =
          (F == null ? void 0 : F.ErrorRoot) ===
            r("CometRouterErrorRoot_MISSING_FIXME") || F == null
            ? void 0
            : F.ErrorRoot,
        G = {},
        z = {},
        j = r("cometRouterCreatePersistentParamsManager")(
          [].concat(r("persistentQueryParams"), $),
        ),
        K = null,
        Q = null,
        X = null,
        Y = null,
        J = 0,
        Z = null,
        ee = null,
        te = new Set(),
        ne = babelHelpers.extends({}, r("cometRouterConstants"), L),
        re = D != null ? D : r("CometNavigationTracingQPLEvents").navigation,
        oe = o("buildCometRouter.shared").buildCometRouterShared(
          m != null ? m : r("CurrentUser").getID(),
          {
            hasNoMemoryConcern: r("CometRouterMemoryUtils").hasNoMemoryConcern,
            updateAndInformMaintainedTabs:
              n("cr:20394") == null
                ? void 0
                : n("cr:20394").updateAndInformMaintainedTabs,
          },
          k,
        ),
        ae = oe.routerStatusManager,
        ie = oe.maintainedStateManager,
        le = oe.defaultContext,
        se = null,
        ue = !1,
        ce = function () {
          return r("getNonNullRouterState")(K);
        },
        de = oe.setMaintainedState;
      function me(e, t) {
        oe.setCurrentRouterState(e, {
          currentRouterState: K,
          debugUtils: {
            setTabKeyToRouteKeyMap:
              n("cr:20394") == null
                ? void 0
                : n("cr:20394").setTabKeyToRouteKeyMap,
            updateInfo:
              n("cr:20394") == null ? void 0 : n("cr:20394").updateInfo,
          },
          getRouteKey: function () {
            var e,
              t,
              n = (u || (u = r("ExecutionEnvironment"))).canUseDOM
                ? (e = ee) == null
                  ? void 0
                  : e.getState()
                : null;
            return (t = n == null ? void 0 : n.key) != null
              ? t
              : ne.INIT_ROUTE_KEY;
          },
          keyToRouteStateMap: G,
          preventMaintain: t,
          setMaintainedState: de,
          updateCurrentRouterState: function (t, n) {
            ((K = t), (Q = n));
          },
        });
      }
      function pe() {
        return (u || (u = r("ExecutionEnvironment"))).canUseDOM ? _e : null;
      }
      function _e() {
        var e;
        if (
          ((Z = null),
          !o("cometRouterPopStateInterceptor").popStateInterceptorDidHandle())
        ) {
          var t = (u || (u = r("ExecutionEnvironment"))).canUseDOM
              ? (e = ee) == null
                ? void 0
                : e.getState()
              : null,
            n = t == null ? void 0 : t.key;
          if (n == null || !G[n]) {
            Ne.withContext({
              from: o("buildCometRouter.shared").getDispatchedFrom(ce),
            }).go(
              "" +
                window.location.pathname +
                window.location.search +
                window.location.hash,
              { navigationType: "popstate", replace: !0 },
            );
            return;
          }
          ae.startNavigation();
          var i = G[n],
            l = r(
              "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
            )(r("getTopMostRoute")(ce()), i, "popstate", T),
            s = l,
            c = s.pushViewStack;
          if (c != null && te.has(c[c.length - 1].key)) return Te();
          if (z[n]) {
            var m = z[n];
            l = babelHelpers.extends({}, l, { focusReturnRef: m });
          }
          var p = r("getTopMostRoute")(l),
            _ = r("getTopMostRouteInfo")(l),
            f = function () {
              var e = function (t) {
                (ie.isMaintained(
                  o("buildCometRouter.shared").getMaintainKey(p),
                ) &&
                  (t == null || t.addMetadata("maintained", "true")),
                  K &&
                    K.pushViewStack &&
                    (l.pushViewStack == null ||
                      K.pushViewStack.length > l.pushViewStack.length) &&
                    (t == null || t.addMetadata("closed_push_view", 1)));
                var e = r("getInstanceIdentifierFromRoute")(p);
                if (
                  (e != null && (t == null || t.setInstanceIdentifier(e)),
                  t == null || t.addMetadata("navigation_event", "onPopState"),
                  t == null || t.addMetadata("navigation_source", "popState"),
                  fe(l, null, t, !1, null),
                  n !== ne.INIT_ROUTE_KEY && _.skipNotifyServer !== !0)
                ) {
                  var i,
                    s =
                      _ == null || (i = _.referrer) == null
                        ? void 0
                        : i.actorID;
                  r("performRouteConsistencyPingback")(
                    p.url,
                    p,
                    s,
                    function () {
                      return n !== Q;
                    },
                    function (e) {
                      Ne.withContext({
                        from: o("buildCometRouter.shared").getDispatchedFrom(
                          ce,
                        ),
                      }).go(e.url, {
                        navigationType: "popstate",
                        passthroughProps: _.passthroughProps,
                        replace: !0,
                        target: "self",
                      });
                    },
                    a,
                    H,
                  );
                }
              };
              if (T) e(null);
              else {
                var t,
                  i = Ie != null ? Ie : (d || (d = r("performanceNow")))();
                ((Ie = null),
                  o("CometNavigationTracing").traceNavigation(
                    p.url,
                    p,
                    i,
                    e,
                    (t = _.navigationInteractionID) != null ? t : void 0,
                    re,
                    O,
                    V,
                  ));
              }
            };
          if (Q != null) {
            var g = o("cometRouterUnloadHookUtils").runUnloadHooks(ce(), i);
            if (g != null && se != null) {
              var h = function () {
                var e;
                (e = ee) == null ||
                  e.pushState(
                    [{ key: Q != null ? Q : " No route key" }, null, X],
                    !1,
                  );
              };
              return Le(g, h, f);
            }
          }
          f();
        }
      }
      function fe(e, t, a, i, s, u) {
        (u === void 0 && (u = !1),
          oe.loadingDone(
            e,
            {
              onAfterStateUpdate: function (t) {
                if (
                  (a == null ||
                    a.addMarkerPoint(
                      "RouterState_Updated",
                      "AppTiming",
                      (d || (d = r("performanceNow")))(),
                    ),
                  l !== !0)
                ) {
                  o("CometVisitationManager").updateFromRouterState(t);
                  var e = r("getTopMostRoute")(t),
                    i = r("getTopMostRouteInfo")(t);
                  (r("CometTimeSpentNavigation").changePath(
                    r("extractTimeSpentFromCometRoute")(e),
                    i.productAttribution,
                    i.timeSpentMetaData,
                  ),
                    n("cr:11053") != null && n("cr:11053").logNavigation(e));
                }
              },
              onBeforeStateUpdate: function () {
                Y && (Y.cancel(), (Y = null));
              },
              onStateUpdateCommitted: function () {
                a == null ||
                  a.addMarkerPoint(
                    "RouterState_Committed",
                    "AppTiming",
                    (d || (d = r("performanceNow")))(),
                  );
              },
              setCurrentRouterState: me,
            },
            t,
            i,
            s,
            u,
          ));
      }
      function ge(e) {
        var t;
        te.add(e);
        var n = ce(),
          r =
            (t = n.pushViewStack) == null
              ? void 0
              : t.filter(function (t) {
                  return t.key !== e;
                }),
          a =
            ae.getCurrentStatus() ===
            o("CometRouter.flow").RouterStatus.NO_ACTIVE_NAVIGATION;
        (fe(
          babelHelpers.extends({}, n, { pushViewStack: r }),
          null,
          null,
          !1,
          null,
        ),
          a && oe.markNavigationAsCommitted(n.routeKey));
      }
      function he(e) {
        return r("cometRouterPrefetchRouteDefinition")(e, a, H);
      }
      function ye(e, t, n) {
        var o = babelHelpers.extends({}, le, n);
        return r("cometRouterPreloadRouteCode")(e, t, o, ce(), a, H);
      }
      function Ce(e, t, n, i) {
        (t === void 0 && (t = { navigationType: "navigation", replace: !1 }),
          i === void 0 && (i = {}));
        var l = babelHelpers.extends({}, le, i);
        return (
          (Y = r("cometRouterPrefetchRouteQueries")(
            e,
            t,
            l,
            ce,
            a,
            N,
            M,
            H,
            S,
            n,
            function (e) {
              return ie.getMaintainableWithKey(
                o("buildCometRouter.shared").getMaintainKey(e),
              );
            },
          )),
          Y
        );
      }
      function be(e, t, n, r) {
        return ve.apply(this, arguments);
      }
      function ve() {
        return (
          (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a, i, l) {
              i === void 0 && (i = Object.freeze({}));
              var s = babelHelpers.extends({}, le, l),
                u = r("normalizeCometRouterUrl")(t);
              yield new (e || (e = n("Promise")))(function (e) {
                var t = function (t) {
                  i.traceApi != null || T
                    ? t(i.traceApi)
                    : o("CometNavigationTracing").traceNavigation(
                        u,
                        a,
                        i.eventTimestamp,
                        t,
                        void 0,
                        re,
                        O,
                        V,
                      );
                };
                t(function (t) {
                  e(Se(u, a, i, s, t));
                });
              });
            },
          )),
          ve.apply(this, arguments)
        );
      }
      function Se(e, t, n, r, o) {
        return Re.apply(this, arguments);
      }
      function Re() {
        return (
          (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n, l, s) {
              var u,
                c = o("ConstUriUtils").getUri(e);
              if (
                (c != null &&
                  c.getPath() === "/undefined" &&
                  r("FBLogger")("comet_infra").mustfix(
                    "/undefined was passed a url to the Comet Router. Please make sure you're building a URL using RouteBuilders",
                    "comet_infra",
                  ),
                !r("isCometRouterUrl")(e))
              ) {
                r("FBLogger")("comet_infra")
                  .addToCategoryKey("non_comet_route_url")
                  .debug(
                    "Cannot use Comet Router to navigate to a non-router URL",
                  );
                return;
              }
              if (ue) {
                s == null || s.cancelTrace("dropped", !0);
                return;
              }
              var m =
                W == null || W.onBeforeNavigation == null
                  ? void 0
                  : W.onBeforeNavigation(e);
              if (m != null && m.handled) {
                s == null || s.cancelTrace("dropped", !0);
                return;
              }
              var g = oe.prepareNavigationContext(e, n, l, {
                  getCurrentRouterState: ce,
                }),
                h = g.dispatchedFrom,
                y = g.navigationKey,
                C = g.previousRouterState,
                b = g.url,
                v = r("cometRouterAdjustExtraConfigForRoute")(
                  b,
                  l,
                  g.extras,
                  C,
                ),
                L = t != null ? t : a.getRoute(b),
                E =
                  ne.RELOAD_RESOURCE_THRESHOLD >= 0 &&
                  Date.now() - ne.RESOURCE_LOAD_EPOCH >
                    ne.RELOAD_RESOURCE_THRESHOLD,
                I =
                  (u =
                    L == null
                      ? void 0
                      : L.navigatonForcedRefreshNavigationCountThreshold) !=
                  null
                    ? u
                    : ne.NAVIGATION_COUNT_THRESHOLD,
                D = I >= 0 && J >= I,
                x = null,
                $ = _(L),
                P = ne.REFRESH_ON_CLIENT_CONSISTENCY
                  ? r("ClientConsistency").getPendingRefresh()
                  : null;
              if (
                ($
                  ? P != null
                    ? f(L, P) &&
                      ((x = P), r("CometClientConsistency").logRefreshOnNav(x))
                    : D
                      ? (x = "navigation_limit")
                      : E && (x = "session_time_limit")
                  : (x = null),
                x != null &&
                  r("SiteData").push_phase === "TS" &&
                  !f(L, x) &&
                  (x = null),
                x != null)
              ) {
                if (
                  (s == null ||
                    s.setTracePolicy(L == null ? void 0 : L.tracePolicy),
                  (L == null ? void 0 : L.type) === "valid_route")
                ) {
                  var w = L.canonicalRouteName;
                  w != null &&
                    (s == null || s.addMetadata("canonical_route", w));
                }
                return (
                  s == null || s.cancelTrace("refresh:" + x, !0),
                  r("cometRouterNavigateOnWindow")(
                    j.getUrlWithPersistentParams(b),
                    x,
                    v.replace,
                  )
                );
              }
              var A = v.force,
                F = v.linkRef,
                O = v.navigationType,
                q = v.onNavigate_DEPRECATED_FIXME,
                U = v.onNavigationTransitioning,
                V = v.onTransitionOptimistic,
                K = v.passthroughProps,
                Y = v.previousActorID,
                Z = v.productAttributionUpdateProps,
                re = v.replace,
                le = re === void 0 ? !1 : re,
                de = v.skipNotifyServer,
                me = de === void 0 ? !1 : de,
                pe = v.target,
                _e = v.traceParams,
                he = { key: y };
              function ye(e, t, n) {
                var a = j.getUrlWithPersistentParams(e),
                  i = "",
                  l = o("ConstUriUtils").getUri(a);
                if (l != null) {
                  var s,
                    u = r("cometRouterCleanURLSearchParameters")(l, t, B);
                  i = (s = u == null ? void 0 : u.toString()) != null ? s : "";
                }
                if (n) {
                  var c;
                  (c = ee) == null || c.replaceState([he, null, i], !1);
                } else {
                  var d;
                  (d = ee) == null || d.pushState([he, null, i], !1);
                }
                X = a;
              }
              if (
                (F != null && Q != null && (z[Q] = F),
                (G[y] = C),
                s == null ||
                  s.addMetadata("comet_env", r("SiteData").comet_env),
                s == null ||
                  s.addMarkerPoint(
                    "RouterState_FetchRouteStart",
                    "AppTiming",
                    (d || (d = r("performanceNow")))(),
                  ),
                (L == null ? void 0 : L.type) === "valid_route")
              )
                (s == null ||
                  s.addMarkerPoint(
                    "RouterState_FetchRouteEnd",
                    "AppTiming",
                    (d || (d = r("performanceNow")))(),
                  ),
                  Ee(L, e),
                  !me && Re(L));
              else {
                s == null || s.addMetadata("unfetched_rd", 1);
                var Ce = ae.fetchingRoute();
                try {
                  var be,
                    ve = yield a.fetchForNavigation(
                      e,
                      Y,
                      (be = r("getTopMostRoute")(C)) == null
                        ? void 0
                        : be.tracePolicy,
                      H,
                    );
                  s == null ||
                    s.addMarkerPoint(
                      "RouterState_FetchRouteEnd",
                      "AppTiming",
                      (d || (d = r("performanceNow")))(),
                    );
                  var Se = ve.route;
                  Ce.canceled
                    ? q == null || q(!1)
                    : Se.type !== "valid_route"
                      ? (s == null || s.cancelTrace("invalid_route", !0),
                        r("cometRouterNavigateOnWindow")(
                          Se.url,
                          "unmatched",
                          le,
                        ),
                        ae.resetRouterStatus(),
                        q == null || q(!0))
                      : (Ee(
                          Se,
                          e,
                          !1,
                          ve.initialTimeSpentMetaData,
                          ve.backgroundInitialTimeSpentMetaData,
                        ),
                        Re(Se));
                } catch (t) {
                  (Ce.canceled
                    ? q == null || q(!1)
                    : Ee(r("buildCometErrorRoute")(e, H), e),
                    r("FBLogger")("comet_infra")
                      .catching(r("getErrorSafe")(t))
                      .mustfix(
                        "An error occured fetching a comet route for url: %s",
                        e,
                      ));
                }
              }
              function Re(t) {
                r("performRouteConsistencyPingback")(
                  e,
                  t,
                  Y,
                  function () {
                    return y !== Q;
                  },
                  function (t) {
                    return Ee(t, e, !0);
                  },
                  a,
                  H,
                );
              }
              function Ee(e, t, n, u, c) {
                var d, m, f, g, b;
                (n === void 0 && (n = !1),
                  o("cometRouterSubdomainUtils").checkSubdomainMismatch(e));
                var L = r("getInstanceIdentifierFromRoute")(e);
                (L != null && (s == null || s.setInstanceIdentifier(L)),
                  s == null || s.setTracePolicy(e.tracePolicy));
                var E = r("cometRouterSelectNavigation")(e, pe, h, ce(), a, i),
                  I = E.target,
                  D = I.route,
                  x = I.view,
                  $ = (d = E.modal) != null ? d : {},
                  P = $.route,
                  w = $.view,
                  F = c != null ? c : u,
                  B = c != null ? u : null,
                  W =
                    (m = N(
                      E,
                      F != null ? F : null,
                      B != null ? B : null,
                      M,
                      v,
                      function (e) {
                        return ie.getMaintainableWithKey(
                          o("buildCometRouter.shared").getMaintainKey(e),
                        );
                      },
                      ce,
                      S,
                    )) != null
                      ? m
                      : {},
                  G = W.mainEntryPointContainer,
                  z = W.mainTimeSpentMetaData,
                  j = W.modalEntryPointContainer,
                  Q = W.modalTimeSpentMetaData;
                (((f = x == null ? void 0 : x.allResources) != null ? f : [])
                  .concat(
                    (g = w == null ? void 0 : w.allResources) != null ? g : [],
                  )
                  .forEach(function (e) {
                    return e.preload();
                  }),
                  r("Bootloader").forceFlush());
                var X = r("cometRouterIsNavigationRefresh")(
                  P != null ? P : D,
                  ce(),
                );
                (X && (s == null || s.addMetadata("refresh", 1)),
                  ie.isMaintained(
                    o("buildCometRouter.shared").getMaintainKey(D),
                  ) &&
                    (s == null || s.addMetadata("maintained", "true")),
                  D.params.thread_key != null &&
                    s != null &&
                    o("MWChatInteraction").set(
                      String(D.params.thread_key),
                      s.getTraceId(),
                    ),
                  D.params.folder_id != null &&
                    D.params.thread_key == null &&
                    (s == null || s.addMetadata("is_community", !0)));
                var Y = o("buildCometRouter.shared").buildRouteInfoExtras(
                    D,
                    z,
                    P,
                    Q,
                    E,
                    l,
                    {
                      entryPointContainer: G,
                      getCurrentRouterState: ce,
                      maintainedStateManager: ie,
                      modalEntryPointContainer: j,
                      navigationInteractionID: T
                        ? void 0
                        : r(
                            "CometHeroLogging",
                          ).genHeroInteractionUUIDAndMarkStart(
                            s == null ? void 0 : s.getTraceId(),
                          ),
                      navigationType: O,
                      passthroughProps: K,
                      previousRouterState: C,
                      skipNotifyServer: me,
                    },
                  ),
                  ee = Y.mainRouteInfoExtras,
                  ne = Y.modalRouteInfoExtras,
                  re,
                  oe =
                    e.canonicalUrl != null && e.canonicalUrl !== ""
                      ? e.canonicalUrl
                      : (b = e.url) != null
                        ? b
                        : t;
                try {
                  if (
                    ((re = r("cometRouterReducer")(
                      y,
                      C,
                      {
                        __type: E.action,
                        payload: {
                          dispatchedFrom: h,
                          productAttributionUpdateProps: Z,
                          pushViewStackLimit: R,
                          routeInfoExtras: ee,
                          to: D,
                          wasHistoryReplaced: le || n,
                        },
                      },
                      te,
                      ge,
                    )),
                    P != null && ne != null)
                  ) {
                    var ae =
                      E.action === "loadTab"
                        ? "rootView"
                        : E.action === "loadHosted"
                          ? "hostedView"
                          : "pushView";
                    re = r("cometRouterReducer")(
                      y,
                      re,
                      {
                        __type: "addPushView",
                        payload: {
                          dispatchedFrom: ae,
                          productAttributionUpdateProps: Z,
                          pushViewStackLimit: R,
                          routeInfoExtras: ne,
                          to: P,
                          wasHistoryReplaced: !1,
                        },
                      },
                      te,
                      ge,
                    );
                  }
                } catch (e) {
                  (r("FBLogger")("comet_infra")
                    .catching(r("getErrorSafe")(e))
                    .mustfix(
                      "Error determining router state, redirecting to Comet Error page",
                    ),
                    (re = r("cometRouterBuildErrorRouteState")(
                      C,
                      y,
                      oe,
                      ne != null ? ne : ee,
                      h,
                      H,
                    )));
                }
                var ue = o("RouterViewTypes").actionToViewType[E.action];
                if (
                  (s == null || s.addMetadata("view_type", ue), ue === "hosted")
                ) {
                  var de;
                  s == null ||
                    s.addMetadata(
                      "host_route",
                      (de = re.main.route.tracePolicy) != null ? de : "",
                    );
                }
                E.action === "addPushView" &&
                  re.pushViewStack != null &&
                  (s == null ||
                    s.addMetadata("push_view_count", re.pushViewStack.length));
                for (var he in _e) s == null || s.addMetadata(he, _e[he]);
                var Ce = function () {
                    var t = e.canonicalRouteName;
                    (t != null &&
                      (s == null || s.addMetadata("canonical_route", t)),
                      pe !== "self" &&
                        _(e) &&
                        (J++,
                        r("CometRouterMemoryUtils").logNavigationCount(J)),
                      ye(oe, e.stripParams, le || n),
                      fe(
                        re,
                        q,
                        s,
                        !0,
                        U,
                        v == null ? void 0 : v.preventMaintain,
                      ));
                  },
                  be = o("cometRouterUnloadHookUtils").runUnloadHooks(
                    ce(),
                    re,
                    A,
                  );
                if (A !== !0 && be != null && se != null) {
                  var ve = function () {
                      q == null || q(!1);
                    },
                    Se = function () {
                      var e = function () {
                        (V == null || V(), Ce());
                      };
                      k
                        ? e()
                        : p(function () {
                            e();
                          });
                    };
                  return (
                    s == null ||
                      s.addMetadata("onbeforeunload_dialog_triggered", 1),
                    s == null || s.cancelTrace("dropped", !0),
                    Le(be, ve, Se)
                  );
                }
                Ce();
              }
            },
          )),
          Re.apply(this, arguments)
        );
      }
      function Le(e, t, n) {
        var o = se;
        if (o == null) {
          r("FBLogger")("comet_infra").warn(
            "No onBeforeUnload Listener but ran onBeforeUnload hooks",
          );
          return;
        }
        ue = !0;
        var a = !1,
          i = function (t) {
            return function () {
              (t(), (a = !0), (ue = !1));
            };
          },
          l = i(t),
          u = i(n),
          c = function (t, n) {
            return function () {
              if ((t(l, u), !a))
                throw (
                  n(),
                  r("FBLogger")("comet_infra").mustfixThrow(
                    "onBeforeUnload configuration has an action that does NOT call either stayOnThisPage or leaveThisPage",
                  )
                );
            };
          },
          d = e.bodyText,
          m = e.onClose,
          p = e.primaryAction,
          _ = e.primaryButtonLabel,
          f = e.secondaryAction,
          g = e.secondaryButtonLabel,
          h = e.title,
          y = e.warnMessage,
          C = f != null ? c(f, t) : l;
        return o(
          _ != null ? _ : s._(/*BTDS*/ "Leave Page"),
          p != null ? c(p, n) : u,
          g != null ? g : s._(/*BTDS*/ "Stay on Page"),
          C,
          h != null ? h : s._(/*BTDS*/ "Leave page?"),
          d != null ? d : y,
          m != null ? c(m, t) : C,
        );
      }
      function Ee(e) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            if (Z !== null && Z === e) {
              var t = ce(),
                n = t.hosted,
                o = t.main,
                a = t.pushViewStack,
                i = null;
              (a != null && a.length > 1
                ? (i = a[a.length - 2].route.url)
                : n != null
                  ? (i = n.route.url)
                  : (i = o.route.url),
                r("cometRouterNavigateOnWindow")(i, "history_back_failed"));
            }
          });
        });
      }
      function ke(e) {
        if (e < 0) {
          var t;
          ((Z = r("uuidv4")()), (t = ee) == null || t.go(e));
          var n = function () {
            return Ee(Z);
          };
          r("setTimeout")(n, ne.POP_STATE_TIMEOUT);
        } else {
          var o;
          (o = ee) == null || o.go(e);
        }
      }
      var Ie = null;
      function Te(e) {
        var t, n, r;
        ((Ie =
          (t =
            (n = e == null ? void 0 : e.eventTimestamp) != null
              ? n
              : (r = globalThis.event) == null
                ? void 0
                : r.timeStamp) != null
            ? t
            : null),
          ke(-1));
      }
      function De() {
        o("buildCometRouter.shared").popPushView(
          ce,
          function (e, t) {
            return Ne.goTo(e, t);
          },
          {
            getCurrentRouteStep: function () {
              var e, t;
              return (e =
                (t = ee) == null ? void 0 : t.getCurrentRouteStep()) != null
                ? e
                : 0;
            },
            go: ke,
          },
        );
      }
      function xe(e) {
        return (
          (se = e),
          {
            cancel: function () {
              se === e && (se = null);
            },
          }
        );
      }
      function $e(e) {
        var t;
        if (
          (r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .INIT_ROUTER_START,
          }),
          D == null &&
            !T &&
            r("FBLogger")("comet_infra", "qpl_initial_load_undefined").info(
              "No %s QPL event set for trace policy '%s'. Falling back to default.",
              "NAVIGATION",
              C.tracePolicy,
            ),
          !r("gkx")("20935") &&
            U &&
            r("FBLogger")("comet_infra")
              .addToCategoryKey("runtime_site_is_not_comet_in_router")
              .mustfix(
                "CometRouter should only be used in Comet! Using it in Blue may cause unexpected behavior.",
              ),
          (u || (u = r("ExecutionEnvironment"))).canUseDOM)
        ) {
          var i = "",
            l = o("ConstUriUtils").getUri(window.location.href);
          if (l != null) {
            var s = r("cometRouterCleanURLSearchParameters")(
              l,
              e.stripParams,
              B,
            );
            s != null && (j.setPersistentParams(s), (i = s.toString()));
          }
          if (
            ((ee = o("CometHistoryManager").createHistoryManager(
              { scrollRestorationBehavior: A },
              [{ key: ne.INIT_ROUTE_KEY }, null, i],
              pe(),
            )),
            C.isResolvedRedirect === !0)
          )
            try {
              ee.replaceState([{ key: ne.INIT_ROUTE_KEY }, null, C.url], !1);
            } catch (e) {
              r("FBLogger")(
                "comet_infra",
                "initial_load_redirect_replace_state_failed",
              )
                .catching(r("getErrorSafe")(e))
                .warn(
                  "Failed to update URL bar after server-resolved initial-load redirect.",
                );
            }
          (n("cr:20394") == null || n("cr:20394").registerHistoryManager(ee),
            window.addEventListener(
              "beforeunload",
              o("cometRouterUnloadHookUtils").createOnBeforeUnloadEventHandler(
                ce,
              ),
            ),
            r("promiseDone")(
              a.fetchRoute(e.url, H).then(function (e) {
                e.onNavigationCallback && e.onNavigationCallback(e);
              }),
            ));
        }
        var d =
            typeof (c || (c = r("performance"))).getEntriesByType == "function"
              ? (c || (c = r("performance"))).getEntriesByType("navigation")[0]
              : null,
          p =
            (d == null ? void 0 : d.type) === "reload" ||
            ((t = (c || (c = r("performance"))).navigation) == null
              ? void 0
              : t.type) === "reload"
              ? "reload"
              : "initial",
          _ = {
            getEnvironmentProviderForRoute: function (t) {
              return r("cometRouterBuildEnvironmentProviderFromRoute")(t, m, M);
            },
            makeCometRouteContainer: S,
          };
        (me(
          r("cometRouterBuildInitialRouterState")(
            g != null ? g : C,
            y,
            g != null ? h : b,
            g != null ? C : null,
            g != null ? b : null,
            _,
            (u || (u = r("ExecutionEnvironment"))).canUseDOM
              ? document.referrer
              : null,
            p,
            (u || (u = r("ExecutionEnvironment"))).canUseDOM
              ? ne.INIT_ROUTE_KEY
              : "initial_ssr",
            T,
          ),
        ),
          n("cr:20394") == null || n("cr:20394").setAllMaps(G),
          r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .INIT_ROUTER_END,
            routerState: ce(),
          }));
      }
      var Pe = oe.createRouterDispatcher({
          go: be,
          goBack: Te,
          popPushView: De,
          prefetchRouteDefinition: he,
          prefetchRouteQueries: Ce,
          preloadRouteCode: ye,
        }),
        Ne = r("returnDispatcherWithLogging")(
          new (o("buildCometRouterDispatcher").Dispatcher)(Pe),
          ce,
        );
      n("cr:20394") == null || n("cr:20394").registerDispatcher(Ne);
      var Me = window.location.href,
        we = Me != null && Me !== "" ? r("absoluteToRelative")(Me) : C.url,
        Ae = babelHelpers.extends({}, C, { url: we });
      $e(Ae);
      var Fe = {
        dispatcher: Ne,
        getCurrentRouterState: ce,
        getCurrentRouterStatus: oe.routerStatusManager.getCurrentStatus,
        getMaintainedRouteState: ie.getMaintainedState,
        listen: oe.addListener,
        markNavigationAsCommitted_INTERNAL_ONLY: oe.markNavigationAsCommitted,
        setUnloadListener: xe,
        store: a,
      };
      return (o("currentCometRouterInstance").register(Fe), Fe);
    }
    var h = g;
    l.default = h;
  },
  226,
);
