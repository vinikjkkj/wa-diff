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
        H = {},
        G = {},
        z = r("cometRouterCreatePersistentParamsManager")(
          [].concat(r("persistentQueryParams"), $),
        ),
        j = null,
        K = null,
        Q = null,
        X = null,
        Y = 0,
        J = null,
        Z = null,
        ee = new Set(),
        te = babelHelpers.extends({}, r("cometRouterConstants"), L),
        ne = D != null ? D : r("CometNavigationTracingQPLEvents").navigation,
        re = o("buildCometRouter.shared").buildCometRouterShared(
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
        oe = re.routerStatusManager,
        ae = re.maintainedStateManager,
        ie = re.defaultContext,
        le = null,
        se = !1,
        ue = function () {
          return r("getNonNullRouterState")(j);
        },
        ce = re.setMaintainedState;
      function de(e, t) {
        re.setCurrentRouterState(e, {
          currentRouterState: j,
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
                ? (e = Z) == null
                  ? void 0
                  : e.getState()
                : null;
            return (t = n == null ? void 0 : n.key) != null
              ? t
              : te.INIT_ROUTE_KEY;
          },
          keyToRouteStateMap: H,
          preventMaintain: t,
          setMaintainedState: ce,
          updateCurrentRouterState: function (t, n) {
            ((j = t), (K = n));
          },
        });
      }
      function me() {
        return (u || (u = r("ExecutionEnvironment"))).canUseDOM ? pe : null;
      }
      function pe() {
        var e;
        if (
          ((J = null),
          !o("cometRouterPopStateInterceptor").popStateInterceptorDidHandle())
        ) {
          var t = (u || (u = r("ExecutionEnvironment"))).canUseDOM
              ? (e = Z) == null
                ? void 0
                : e.getState()
              : null,
            n = t == null ? void 0 : t.key;
          if (n == null || !H[n]) {
            Pe.withContext({
              from: o("buildCometRouter.shared").getDispatchedFrom(ue),
            }).go(
              "" +
                window.location.pathname +
                window.location.search +
                window.location.hash,
              { navigationType: "popstate", replace: !0 },
            );
            return;
          }
          oe.startNavigation();
          var i = H[n],
            l = r(
              "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
            )(r("getTopMostRoute")(ue()), i, "popstate", T),
            s = l,
            c = s.pushViewStack;
          if (c != null && ee.has(c[c.length - 1].key)) return Ie();
          if (G[n]) {
            var m = G[n];
            l = babelHelpers.extends({}, l, { focusReturnRef: m });
          }
          var p = r("getTopMostRoute")(l),
            _ = r("getTopMostRouteInfo")(l),
            f = function () {
              var e = function (t) {
                (ae.isMaintained(
                  o("buildCometRouter.shared").getMaintainKey(p),
                ) &&
                  (t == null || t.addMetadata("maintained", "true")),
                  j &&
                    j.pushViewStack &&
                    (l.pushViewStack == null ||
                      j.pushViewStack.length > l.pushViewStack.length) &&
                    (t == null || t.addMetadata("closed_push_view", 1)));
                var e = r("getInstanceIdentifierFromRoute")(p);
                if (
                  (e != null && (t == null || t.setInstanceIdentifier(e)),
                  t == null || t.addMetadata("navigation_event", "onPopState"),
                  t == null || t.addMetadata("navigation_source", "popState"),
                  _e(l, null, t, !1, null),
                  n !== te.INIT_ROUTE_KEY && _.skipNotifyServer !== !0)
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
                      return n !== K;
                    },
                    function (e) {
                      Pe.withContext({
                        from: o("buildCometRouter.shared").getDispatchedFrom(
                          ue,
                        ),
                      }).go(e.url, {
                        navigationType: "popstate",
                        passthroughProps: _.passthroughProps,
                        replace: !0,
                        target: "self",
                      });
                    },
                    a,
                    F == null ? void 0 : F.ErrorRoot,
                  );
                }
              };
              if (T) e(null);
              else {
                var t,
                  i = ke != null ? ke : (d || (d = r("performanceNow")))();
                ((ke = null),
                  o("CometNavigationTracing").traceNavigation(
                    p.url,
                    p,
                    i,
                    e,
                    (t = _.navigationInteractionID) != null ? t : void 0,
                    ne,
                    O,
                    V,
                  ));
              }
            };
          if (K != null) {
            var g = o("cometRouterUnloadHookUtils").runUnloadHooks(ue(), i);
            if (g != null && le != null) {
              var h = function () {
                var e;
                (e = Z) == null ||
                  e.pushState(
                    [{ key: K != null ? K : " No route key" }, null, Q],
                    !1,
                  );
              };
              return Re(g, h, f);
            }
          }
          f();
        }
      }
      function _e(e, t, a, i, s, u) {
        (u === void 0 && (u = !1),
          re.loadingDone(
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
                X && (X.cancel(), (X = null));
              },
              setCurrentRouterState: de,
            },
            t,
            i,
            s,
            u,
          ));
      }
      function fe(e) {
        var t;
        ee.add(e);
        var n = ue(),
          r =
            (t = n.pushViewStack) == null
              ? void 0
              : t.filter(function (t) {
                  return t.key !== e;
                }),
          a =
            oe.getCurrentStatus() ===
            o("CometRouter.flow").RouterStatus.NO_ACTIVE_NAVIGATION;
        (_e(
          babelHelpers.extends({}, n, { pushViewStack: r }),
          null,
          null,
          !1,
          null,
        ),
          a && re.markNavigationAsCommitted(n.routeKey));
      }
      function ge(e) {
        return r("cometRouterPrefetchRouteDefinition")(
          e,
          a,
          F == null ? void 0 : F.ErrorRoot,
        );
      }
      function he(e, t, n) {
        var o = babelHelpers.extends({}, ie, n);
        return r("cometRouterPreloadRouteCode")(
          e,
          t,
          o,
          ue(),
          a,
          F == null ? void 0 : F.ErrorRoot,
        );
      }
      function ye(e, t, n, i) {
        (t === void 0 && (t = { navigationType: "navigation", replace: !1 }),
          i === void 0 && (i = {}));
        var l = babelHelpers.extends({}, ie, i);
        return (
          (X = r("cometRouterPrefetchRouteQueries")(
            e,
            t,
            l,
            ue,
            a,
            N,
            M,
            F == null ? void 0 : F.ErrorRoot,
            S,
            n,
            function (e) {
              return ae.getMaintainableWithKey(
                o("buildCometRouter.shared").getMaintainKey(e),
              );
            },
          )),
          X
        );
      }
      function Ce(e, t, n, r) {
        return be.apply(this, arguments);
      }
      function be() {
        return (
          (be = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a, i, l) {
              i === void 0 && (i = Object.freeze({}));
              var s = babelHelpers.extends({}, ie, l),
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
                        ne,
                        O,
                        V,
                      );
                };
                t(function (t) {
                  e(ve(u, a, i, s, t));
                });
              });
            },
          )),
          be.apply(this, arguments)
        );
      }
      function ve(e, t, n, r, o) {
        return Se.apply(this, arguments);
      }
      function Se() {
        return (
          (Se = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              if (se) {
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
              var g = re.prepareNavigationContext(e, n, l, {
                  getCurrentRouterState: ue,
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
                  te.RELOAD_RESOURCE_THRESHOLD >= 0 &&
                  Date.now() - te.RESOURCE_LOAD_EPOCH >
                    te.RELOAD_RESOURCE_THRESHOLD,
                I =
                  (u =
                    L == null
                      ? void 0
                      : L.navigatonForcedRefreshNavigationCountThreshold) !=
                  null
                    ? u
                    : te.NAVIGATION_COUNT_THRESHOLD,
                D = I >= 0 && Y >= I,
                x = null,
                $ = _(L),
                P = te.REFRESH_ON_CLIENT_CONSISTENCY
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
                    z.getUrlWithPersistentParams(b),
                    x,
                    v.replace,
                  )
                );
              }
              var A = v.force,
                O = v.linkRef,
                q = v.navigationType,
                U = v.onNavigate_DEPRECATED_FIXME,
                V = v.onNavigationTransitioning,
                j = v.onTransitionOptimistic,
                X = v.passthroughProps,
                J = v.previousActorID,
                ne = v.productAttributionUpdateProps,
                ie = v.replace,
                ce = ie === void 0 ? !1 : ie,
                de = v.skipNotifyServer,
                me = de === void 0 ? !1 : de,
                pe = v.target,
                ge = v.traceParams,
                he = { key: y };
              function ye(e, t, n) {
                var a = z.getUrlWithPersistentParams(e),
                  i = "",
                  l = o("ConstUriUtils").getUri(a);
                if (l != null) {
                  var s,
                    u = r("cometRouterCleanURLSearchParameters")(l, t, B);
                  i = (s = u == null ? void 0 : u.toString()) != null ? s : "";
                }
                if (n) {
                  var c;
                  (c = Z) == null || c.replaceState([he, null, i], !1);
                } else {
                  var d;
                  (d = Z) == null || d.pushState([he, null, i], !1);
                }
                Q = a;
              }
              if (
                (O != null && K != null && (G[K] = O),
                (H[y] = C),
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
                  !me && Le(L));
              else {
                s == null || s.addMetadata("unfetched_rd", 1);
                var Ce = oe.fetchingRoute();
                try {
                  var be,
                    ve = yield a.fetchForNavigation(
                      e,
                      J,
                      (be = r("getTopMostRoute")(C)) == null
                        ? void 0
                        : be.tracePolicy,
                      F == null ? void 0 : F.ErrorRoot,
                    );
                  s == null ||
                    s.addMarkerPoint(
                      "RouterState_FetchRouteEnd",
                      "AppTiming",
                      (d || (d = r("performanceNow")))(),
                    );
                  var Se = ve.route;
                  Ce.canceled
                    ? U == null || U(!1)
                    : Se.type !== "valid_route"
                      ? (s == null || s.cancelTrace("invalid_route", !0),
                        r("cometRouterNavigateOnWindow")(
                          Se.url,
                          "unmatched",
                          ce,
                        ),
                        oe.resetRouterStatus(),
                        U == null || U(!0))
                      : (Ee(
                          Se,
                          e,
                          !1,
                          ve.initialTimeSpentMetaData,
                          ve.backgroundInitialTimeSpentMetaData,
                        ),
                        Le(Se));
                } catch (t) {
                  (Ce.canceled
                    ? U == null || U(!1)
                    : Ee(
                        r("buildCometErrorRoute")(
                          e,
                          F == null ? void 0 : F.ErrorRoot,
                        ),
                        e,
                      ),
                    r("FBLogger")("comet_infra")
                      .catching(r("getErrorSafe")(t))
                      .mustfix(
                        "An error occured fetching a comet route for url: %s",
                        e,
                      ));
                }
              }
              function Le(t) {
                r("performRouteConsistencyPingback")(
                  e,
                  t,
                  J,
                  function () {
                    return y !== K;
                  },
                  function (t) {
                    return Ee(t, e, !0);
                  },
                  a,
                  F == null ? void 0 : F.ErrorRoot,
                );
              }
              function Ee(e, t, n, u, c) {
                var d, m, f, g, b;
                (n === void 0 && (n = !1),
                  o("cometRouterSubdomainUtils").checkSubdomainMismatch(e));
                var L = r("getInstanceIdentifierFromRoute")(e);
                (L != null && (s == null || s.setInstanceIdentifier(L)),
                  s == null || s.setTracePolicy(e.tracePolicy));
                var E = r("cometRouterSelectNavigation")(e, pe, h, ue(), a, i),
                  I = E.target,
                  D = I.route,
                  x = I.view,
                  $ = (d = E.modal) != null ? d : {},
                  P = $.route,
                  w = $.view,
                  O = c != null ? c : u,
                  B = c != null ? u : null,
                  W =
                    (m = N(
                      E,
                      O != null ? O : null,
                      B != null ? B : null,
                      M,
                      v,
                      function (e) {
                        return ae.getMaintainableWithKey(
                          o("buildCometRouter.shared").getMaintainKey(e),
                        );
                      },
                      ue,
                      S,
                    )) != null
                      ? m
                      : {},
                  H = W.mainEntryPointContainer,
                  G = W.mainTimeSpentMetaData,
                  z = W.modalEntryPointContainer,
                  K = W.modalTimeSpentMetaData;
                (((f = x == null ? void 0 : x.allResources) != null ? f : [])
                  .concat(
                    (g = w == null ? void 0 : w.allResources) != null ? g : [],
                  )
                  .forEach(function (e) {
                    return e.preload();
                  }),
                  r("Bootloader").forceFlush());
                var Q = r("cometRouterIsNavigationRefresh")(
                  P != null ? P : D,
                  ue(),
                );
                (Q && (s == null || s.addMetadata("refresh", 1)),
                  ae.isMaintained(
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
                var J = o("buildCometRouter.shared").buildRouteInfoExtras(
                    D,
                    G,
                    P,
                    K,
                    E,
                    l,
                    {
                      entryPointContainer: H,
                      getCurrentRouterState: ue,
                      maintainedStateManager: ae,
                      modalEntryPointContainer: z,
                      navigationInteractionID: T
                        ? void 0
                        : r(
                            "CometHeroLogging",
                          ).genHeroInteractionUUIDAndMarkStart(
                            s == null ? void 0 : s.getTraceId(),
                          ),
                      navigationType: q,
                      passthroughProps: X,
                      previousRouterState: C,
                      skipNotifyServer: me,
                    },
                  ),
                  Z = J.mainRouteInfoExtras,
                  te = J.modalRouteInfoExtras,
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
                          productAttributionUpdateProps: ne,
                          pushViewStackLimit: R,
                          routeInfoExtras: Z,
                          to: D,
                          wasHistoryReplaced: ce || n,
                        },
                      },
                      ee,
                      fe,
                    )),
                    P != null && te != null)
                  ) {
                    var ie =
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
                          dispatchedFrom: ie,
                          productAttributionUpdateProps: ne,
                          pushViewStackLimit: R,
                          routeInfoExtras: te,
                          to: P,
                          wasHistoryReplaced: !1,
                        },
                      },
                      ee,
                      fe,
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
                      te != null ? te : Z,
                      h,
                      F == null ? void 0 : F.ErrorRoot,
                    )));
                }
                var se = o("RouterViewTypes").actionToViewType[E.action];
                if (
                  (s == null || s.addMetadata("view_type", se), se === "hosted")
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
                for (var he in ge) s == null || s.addMetadata(he, ge[he]);
                var Ce = function () {
                    var t = e.canonicalRouteName;
                    (t != null &&
                      (s == null || s.addMetadata("canonical_route", t)),
                      pe !== "self" &&
                        _(e) &&
                        (Y++,
                        r("CometRouterMemoryUtils").logNavigationCount(Y)),
                      ye(oe, e.stripParams, ce || n),
                      _e(
                        re,
                        U,
                        s,
                        !0,
                        V,
                        v == null ? void 0 : v.preventMaintain,
                      ));
                  },
                  be = o("cometRouterUnloadHookUtils").runUnloadHooks(
                    ue(),
                    re,
                    A,
                  );
                if (A !== !0 && be != null && le != null) {
                  var ve = function () {
                      U == null || U(!1);
                    },
                    Se = function () {
                      var e = function () {
                        (j == null || j(), Ce());
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
                    Re(be, ve, Se)
                  );
                }
                Ce();
              }
            },
          )),
          Se.apply(this, arguments)
        );
      }
      function Re(e, t, n) {
        if (le == null) {
          r("FBLogger")("comet_infra").warn(
            "No onBeforeUnload Listener but ran onBeforeUnload hooks",
          );
          return;
        }
        se = !0;
        var o = !1,
          a = function (t) {
            return function () {
              (t(), (o = !0), (se = !1));
            };
          },
          i = a(t),
          l = a(n),
          u = function (t, n) {
            return function () {
              if ((t(i, l), !o))
                throw (
                  n(),
                  r("FBLogger")("comet_infra").mustfixThrow(
                    "onBeforeUnload configuration has an action that does NOT call either stayOnThisPage or leaveThisPage",
                  )
                );
            };
          },
          c = e.bodyText,
          d = e.onClose,
          m = e.primaryAction,
          p = e.primaryButtonLabel,
          _ = e.secondaryAction,
          f = e.secondaryButtonLabel,
          g = e.title,
          h = e.warnMessage,
          y = _ != null ? u(_, t) : i;
        return le(
          p != null ? p : s._(/*BTDS*/ "Leave Page"),
          m != null ? u(m, n) : l,
          f != null ? f : s._(/*BTDS*/ "Stay on Page"),
          y,
          g != null ? g : s._(/*BTDS*/ "Leave page?"),
          c != null ? c : h,
          d != null ? u(d, t) : y,
        );
      }
      function Le(e) {
        window.requestAnimationFrame(function () {
          window.requestAnimationFrame(function () {
            if (J !== null && J === e) {
              var t = ue(),
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
      function Ee(e) {
        if (e < 0) {
          var t;
          ((J = r("uuidv4")()), (t = Z) == null || t.go(e));
          var n = function () {
            return Le(J);
          };
          r("setTimeout")(n, te.POP_STATE_TIMEOUT);
        } else {
          var o;
          (o = Z) == null || o.go(e);
        }
      }
      var ke = null;
      function Ie(e) {
        var t, n, r;
        ((ke =
          (t =
            (n = e == null ? void 0 : e.eventTimestamp) != null
              ? n
              : (r = globalThis.event) == null
                ? void 0
                : r.timeStamp) != null
            ? t
            : null),
          Ee(-1));
      }
      function Te() {
        o("buildCometRouter.shared").popPushView(
          ue,
          function (e, t) {
            return Pe.goTo(e, t);
          },
          {
            getCurrentRouteStep: function () {
              var e, t;
              return (e = (t = Z) == null ? void 0 : t.getCurrentRouteStep()) !=
                null
                ? e
                : 0;
            },
            go: Ee,
          },
        );
      }
      function De(e) {
        return (
          (le = e),
          {
            cancel: function () {
              le === e && (le = null);
            },
          }
        );
      }
      function xe(e) {
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
            s != null && (z.setPersistentParams(s), (i = s.toString()));
          }
          if (
            ((Z = o("CometHistoryManager").createHistoryManager(
              { scrollRestorationBehavior: A },
              [{ key: te.INIT_ROUTE_KEY }, null, i],
              me(),
            )),
            C.isResolvedRedirect === !0)
          )
            try {
              Z.replaceState([{ key: te.INIT_ROUTE_KEY }, null, C.url], !1);
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
          (n("cr:20394") == null || n("cr:20394").registerHistoryManager(Z),
            window.addEventListener(
              "beforeunload",
              o("cometRouterUnloadHookUtils").createOnBeforeUnloadEventHandler(
                ue,
              ),
            ),
            r("promiseDone")(
              a
                .fetchRoute(e.url, F == null ? void 0 : F.ErrorRoot)
                .then(function (e) {
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
        (de(
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
              ? te.INIT_ROUTE_KEY
              : "initial_ssr",
            T,
          ),
        ),
          n("cr:20394") == null || n("cr:20394").setAllMaps(H),
          r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .INIT_ROUTER_END,
            routerState: ue(),
          }));
      }
      var $e = re.createRouterDispatcher({
          go: Ce,
          goBack: Ie,
          popPushView: Te,
          prefetchRouteDefinition: ge,
          prefetchRouteQueries: ye,
          preloadRouteCode: he,
        }),
        Pe = r("returnDispatcherWithLogging")(
          new (o("buildCometRouterDispatcher").Dispatcher)($e),
          ue,
        );
      n("cr:20394") == null || n("cr:20394").registerDispatcher(Pe);
      var Ne = window.location.href,
        Me = Ne != null && Ne !== "" ? r("absoluteToRelative")(Ne) : C.url,
        we = babelHelpers.extends({}, C, { url: Me });
      xe(we);
      var Ae = {
        dispatcher: Pe,
        getCurrentRouterState: ue,
        getCurrentRouterStatus: re.routerStatusManager.getCurrentStatus,
        getMaintainedRouteState: ae.getMaintainedState,
        listen: re.addListener,
        markNavigationAsCommitted_INTERNAL_ONLY: re.markNavigationAsCommitted,
        setUnloadListener: De,
        store: a,
      };
      return (o("currentCometRouterInstance").register(Ae), Ae);
    }
    var h = g;
    l.default = h;
  },
  226,
);
