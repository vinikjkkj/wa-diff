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
    "RouterViewTypes",
    "SiteData",
    "absoluteToRelative",
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
      m = (d || (d = o("react"))).startTransition;
    function p(e) {
      var t;
      if ((e == null ? void 0 : e.type) !== "valid_route") return !0;
      var n =
        (t = e == null ? void 0 : e.isNavigationEligibleForForcedRefresh) !=
        null
          ? t
          : !0;
      return n;
    }
    function _(e, t) {
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
    function f(t, a) {
      var i = t.defaultTransparentPushViewTarget,
        l = t.disableTimeSpentLogging,
        d = t.initialActorID,
        f = t.initialBackgroundRoute,
        g = t.initialBackgroundTimeSpentMetadata,
        h = t.initialLoadTraceId,
        y = t.initialRootRoute,
        C = t.initialTimeSpentMetadata,
        b = t.makeCometRouteContainer,
        v = b === void 0 ? r("makeCometRouteEntryPointContainer") : b,
        S = t.pushViewStackLimit,
        R = t.cometRouterConstantsOverride,
        L = t.disableReactTransition,
        E = L === void 0 ? !1 : L,
        k = t.disableQPLLogging,
        I = k === void 0 ? !1 : k,
        T = t.navigationQPLEvent,
        D = t.persistentParameters,
        x = D === void 0 ? [] : D,
        $ = t.preloadEntrypoint,
        P = $ === void 0 ? r("cometRouterPreloadEntrypoint") : $,
        N = t.relayEnvironmentFactory,
        M = t.scrollRestorationBehavior,
        w = M === void 0 ? "manual" : M,
        A = t.uiComponents,
        F = t.VCConfigOverride,
        O = t.siteCleanQueryParams,
        B = t.hooks,
        W = t.warnUsageOutsideOfComet,
        q = W === void 0 ? !0 : W,
        U = t.navigationNamespace,
        V =
          (A == null ? void 0 : A.ErrorRoot) ===
            r("CometRouterErrorRoot_MISSING_FIXME") || A == null
            ? void 0
            : A.ErrorRoot,
        H = {},
        G = {},
        z = r("cometRouterCreatePersistentParamsManager")(
          [].concat(r("persistentQueryParams"), x),
        ),
        j = null,
        K = null,
        Q = null,
        X = null,
        Y = 0,
        J = null,
        Z = null,
        ee = new Set(),
        te = babelHelpers.extends({}, r("cometRouterConstants"), R),
        ne = T != null ? T : r("CometNavigationTracingQPLEvents").navigation,
        re = o("buildCometRouter.shared").buildCometRouterShared(
          d != null ? d : r("CurrentUser").getID(),
          {
            hasNoMemoryConcern: r("CometRouterMemoryUtils").hasNoMemoryConcern,
            updateAndInformMaintainedTabs:
              n("cr:20394") == null
                ? void 0
                : n("cr:20394").updateAndInformMaintainedTabs,
          },
          E,
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
      function de(t, o) {
        re.setCurrentRouterState(t, {
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
            var t,
              n,
              o = (e || (e = r("ExecutionEnvironment"))).canUseDOM
                ? (t = Z) == null
                  ? void 0
                  : t.getState()
                : null;
            return (n = o == null ? void 0 : o.key) != null
              ? n
              : te.INIT_ROUTE_KEY;
          },
          keyToRouteStateMap: H,
          preventMaintain: o,
          setMaintainedState: ce,
          updateCurrentRouterState: function (t, n) {
            ((j = t), (K = n));
          },
        });
      }
      function me() {
        return (e || (e = r("ExecutionEnvironment"))).canUseDOM ? pe : null;
      }
      function pe() {
        var t;
        if (
          ((J = null),
          !o("cometRouterPopStateInterceptor").popStateInterceptorDidHandle())
        ) {
          var n = (e || (e = r("ExecutionEnvironment"))).canUseDOM
              ? (t = Z) == null
                ? void 0
                : t.getState()
              : null,
            i = n == null ? void 0 : n.key;
          if (i == null || !H[i]) {
            xe.withContext({
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
          var l = H[i],
            s = r(
              "cometRouterSetOriginalReferrerWithNavigationTypeAndInteraction",
            )(r("getTopMostRoute")(ue()), l, "popstate", I),
            c = s,
            d = c.pushViewStack;
          if (d != null && ee.has(d[d.length - 1].key)) return Ee();
          if (G[i]) {
            var m = G[i];
            s = babelHelpers.extends({}, s, { focusReturnRef: m });
          }
          var p = r("getTopMostRoute")(s),
            _ = r("getTopMostRouteInfo")(s),
            f = function () {
              var e = function (t) {
                (ae.isMaintained(
                  o("buildCometRouter.shared").getMaintainKey(p),
                ) &&
                  (t == null || t.addMetadata("maintained", "true")),
                  j &&
                    j.pushViewStack &&
                    (s.pushViewStack == null ||
                      j.pushViewStack.length > s.pushViewStack.length) &&
                    (t == null || t.addMetadata("closed_push_view", 1)));
                var e = r("getInstanceIdentifierFromRoute")(p);
                if (
                  (e != null && (t == null || t.setInstanceIdentifier(e)),
                  t == null || t.addMetadata("navigation_event", "onPopState"),
                  t == null || t.addMetadata("navigation_source", "popState"),
                  _e(s, null, t, !1, null),
                  i !== te.INIT_ROUTE_KEY && _.skipNotifyServer !== !0)
                ) {
                  var n,
                    l =
                      _ == null || (n = _.referrer) == null
                        ? void 0
                        : n.actorID;
                  r("performRouteConsistencyPingback")(
                    p.url,
                    p,
                    l,
                    function () {
                      return i !== K;
                    },
                    function (e) {
                      xe.withContext({
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
                    V,
                  );
                }
              };
              if (I) e(null);
              else {
                var t,
                  n = Le != null ? Le : (u || (u = r("performanceNow")))();
                ((Le = null),
                  o("CometNavigationTracing").traceNavigation(
                    p.url,
                    p,
                    n,
                    e,
                    (t = _.navigationInteractionID) != null ? t : void 0,
                    ne,
                    F,
                    U,
                  ));
              }
            };
          if (K != null) {
            var g = o("cometRouterUnloadHookUtils").runUnloadHooks(ue(), l);
            if (g != null && le != null) {
              var h = function () {
                var e;
                (e = Z) == null ||
                  e.pushState(
                    [{ key: K != null ? K : " No route key" }, null, Q],
                    !1,
                  );
              };
              return ve(g, h, f);
            }
          }
          f();
        }
      }
      function _e(e, t, a, i, s, c) {
        (c === void 0 && (c = !1),
          re.loadingDone(
            e,
            {
              onAfterStateUpdate: function (t) {
                if (
                  (a == null ||
                    a.addMarkerPoint(
                      "RouterState_Updated",
                      "AppTiming",
                      (u || (u = r("performanceNow")))(),
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
              onStateUpdateCommitted: function () {
                a == null ||
                  a.addMarkerPoint(
                    "RouterState_Committed",
                    "AppTiming",
                    (u || (u = r("performanceNow")))(),
                  );
              },
              setCurrentRouterState: de,
            },
            t,
            i,
            s,
            c,
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
        return r("cometRouterPrefetchRouteDefinition")(e, a, V);
      }
      function he(e, t, n) {
        var o = babelHelpers.extends({}, ie, n);
        return r("cometRouterPreloadRouteCode")(e, t, o, ue(), a, V);
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
            P,
            N,
            V,
            v,
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
      async function Ce(e, t, n, a) {
        n === void 0 && (n = Object.freeze({}));
        var i = babelHelpers.extends({}, ie, a),
          l = r("normalizeCometRouterUrl")(e);
        await new Promise(function (e) {
          var r = function (r) {
            n.traceApi != null || I
              ? r(n.traceApi)
              : o("CometNavigationTracing").traceNavigation(
                  l,
                  t,
                  n.eventTimestamp,
                  r,
                  void 0,
                  ne,
                  F,
                  U,
                );
          };
          r(function (r) {
            e(be(l, t, n, i, r));
          });
        });
      }
      async function be(e, t, n, l, s) {
        var c,
          d = o("ConstUriUtils").getUri(e);
        if (
          (d != null &&
            d.getPath() === "/undefined" &&
            r("FBLogger")("comet_infra").mustfix(
              "/undefined was passed a url to the Comet Router. Please make sure you're building a URL using RouteBuilders",
              "comet_infra",
            ),
          !r("isCometRouterUrl")(e))
        ) {
          r("FBLogger")("comet_infra")
            .addToCategoryKey("non_comet_route_url")
            .debug("Cannot use Comet Router to navigate to a non-router URL");
          return;
        }
        if (se) {
          s == null || s.cancelTrace("dropped", !0);
          return;
        }
        var f =
          B == null || B.onBeforeNavigation == null
            ? void 0
            : B.onBeforeNavigation(e);
        if (f != null && f.handled) {
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
          R = r("cometRouterAdjustExtraConfigForRoute")(b, l, g.extras, C),
          L = t != null ? t : a.getRoute(b),
          k =
            te.RELOAD_RESOURCE_THRESHOLD >= 0 &&
            Date.now() - te.RESOURCE_LOAD_EPOCH > te.RELOAD_RESOURCE_THRESHOLD,
          T =
            (c =
              L == null
                ? void 0
                : L.navigatonForcedRefreshNavigationCountThreshold) != null
              ? c
              : te.NAVIGATION_COUNT_THRESHOLD,
          D = T >= 0 && Y >= T,
          x = null,
          $ = p(L),
          M = te.REFRESH_ON_CLIENT_CONSISTENCY
            ? r("ClientConsistency").getPendingRefresh()
            : null;
        if (
          ($
            ? M != null
              ? _(L, M) &&
                ((x = M), r("CometClientConsistency").logRefreshOnNav(x))
              : D
                ? (x = "navigation_limit")
                : k && (x = "session_time_limit")
            : (x = null),
          x != null &&
            r("SiteData").push_phase === "TS" &&
            !_(L, x) &&
            (x = null),
          x != null)
        ) {
          if (
            (s == null || s.setTracePolicy(L == null ? void 0 : L.tracePolicy),
            (L == null ? void 0 : L.type) === "valid_route")
          ) {
            var w = L.canonicalRouteName;
            w != null && (s == null || s.addMetadata("canonical_route", w));
          }
          return (
            s == null || s.cancelTrace("refresh:" + x, !0),
            r("cometRouterNavigateOnWindow")(
              z.getUrlWithPersistentParams(b),
              x,
              R.replace,
            )
          );
        }
        var A = R.force,
          F = R.linkRef,
          W = R.navigationType,
          q = R.onNavigate_DEPRECATED_FIXME,
          U = R.onNavigationTransitioning,
          j = R.onTransitionOptimistic,
          X = R.passthroughProps,
          J = R.previousActorID,
          ne = R.productAttributionUpdateProps,
          ie = R.replace,
          ce = ie === void 0 ? !1 : ie,
          de = R.skipNotifyServer,
          me = de === void 0 ? !1 : de,
          pe = R.target,
          ge = R.traceParams,
          he = { key: y };
        function ye(e, t, n) {
          var a = z.getUrlWithPersistentParams(e),
            i = "",
            l = o("ConstUriUtils").getUri(a);
          if (l != null) {
            var s,
              u = r("cometRouterCleanURLSearchParameters")(l, t, O);
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
          (F != null && K != null && (G[K] = F),
          (H[y] = C),
          s == null || s.addMetadata("comet_env", r("SiteData").comet_env),
          s == null ||
            s.addMarkerPoint(
              "RouterState_FetchRouteStart",
              "AppTiming",
              (u || (u = r("performanceNow")))(),
            ),
          (L == null ? void 0 : L.type) === "valid_route")
        )
          (s == null ||
            s.addMarkerPoint(
              "RouterState_FetchRouteEnd",
              "AppTiming",
              (u || (u = r("performanceNow")))(),
            ),
            Ee(L, e),
            !me && Le(L));
        else {
          s == null || s.addMetadata("unfetched_rd", 1);
          var Ce = oe.fetchingRoute();
          try {
            var be,
              Se = await a.fetchForNavigation(
                e,
                J,
                (be = r("getTopMostRoute")(C)) == null
                  ? void 0
                  : be.tracePolicy,
                V,
              );
            s == null ||
              s.addMarkerPoint(
                "RouterState_FetchRouteEnd",
                "AppTiming",
                (u || (u = r("performanceNow")))(),
              );
            var Re = Se.route;
            Ce.canceled
              ? q == null || q(!1)
              : Re.type !== "valid_route"
                ? (s == null || s.cancelTrace("invalid_route", !0),
                  r("cometRouterNavigateOnWindow")(Re.url, "unmatched", ce),
                  oe.resetRouterStatus(),
                  q == null || q(!0))
                : (Ee(
                    Re,
                    e,
                    !1,
                    Se.initialTimeSpentMetaData,
                    Se.backgroundInitialTimeSpentMetaData,
                  ),
                  Le(Re));
          } catch (t) {
            (Ce.canceled
              ? q == null || q(!1)
              : Ee(r("buildCometErrorRoute")(e, V), e),
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
            V,
          );
        }
        function Ee(e, t, n, u, c) {
          var d, _, f, g, b;
          (n === void 0 && (n = !1),
            o("cometRouterSubdomainUtils").checkSubdomainMismatch(e));
          var L = r("getInstanceIdentifierFromRoute")(e);
          (L != null && (s == null || s.setInstanceIdentifier(L)),
            s == null || s.setTracePolicy(e.tracePolicy));
          var k = r("cometRouterSelectNavigation")(e, pe, h, ue(), a, i),
            T = k.target,
            D = T.route,
            x = T.view,
            $ = (d = k.modal) != null ? d : {},
            M = $.route,
            w = $.view,
            F = c != null ? c : u,
            O = c != null ? u : null,
            B =
              (_ = P(
                k,
                F != null ? F : null,
                O != null ? O : null,
                N,
                R,
                function (e) {
                  return ae.getMaintainableWithKey(
                    o("buildCometRouter.shared").getMaintainKey(e),
                  );
                },
                ue,
                v,
              )) != null
                ? _
                : {},
            H = B.mainEntryPointContainer,
            G = B.mainTimeSpentMetaData,
            z = B.modalEntryPointContainer,
            K = B.modalTimeSpentMetaData;
          (((f = x == null ? void 0 : x.allResources) != null ? f : [])
            .concat((g = w == null ? void 0 : w.allResources) != null ? g : [])
            .forEach(function (e) {
              return e.preload();
            }),
            r("Bootloader").forceFlush());
          var Q = r("cometRouterIsNavigationRefresh")(M != null ? M : D, ue());
          (Q && (s == null || s.addMetadata("refresh", 1)),
            ae.isMaintained(o("buildCometRouter.shared").getMaintainKey(D)) &&
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
              M,
              K,
              k,
              l,
              {
                entryPointContainer: H,
                getCurrentRouterState: ue,
                maintainedStateManager: ae,
                modalEntryPointContainer: z,
                navigationInteractionID: I
                  ? void 0
                  : r("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(
                      s == null ? void 0 : s.getTraceId(),
                    ),
                navigationType: W,
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
                  __type: k.action,
                  payload: {
                    dispatchedFrom: h,
                    productAttributionUpdateProps: ne,
                    pushViewStackLimit: S,
                    routeInfoExtras: Z,
                    to: D,
                    wasHistoryReplaced: ce || n,
                  },
                },
                ee,
                fe,
              )),
              M != null && te != null)
            ) {
              var ie =
                k.action === "loadTab"
                  ? "rootView"
                  : k.action === "loadHosted"
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
                    pushViewStackLimit: S,
                    routeInfoExtras: te,
                    to: M,
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
                V,
              )));
          }
          var se = o("RouterViewTypes").actionToViewType[k.action];
          if ((s == null || s.addMetadata("view_type", se), se === "hosted")) {
            var de;
            s == null ||
              s.addMetadata(
                "host_route",
                (de = re.main.route.tracePolicy) != null ? de : "",
              );
          }
          k.action === "addPushView" &&
            re.pushViewStack != null &&
            (s == null ||
              s.addMetadata("push_view_count", re.pushViewStack.length));
          for (var he in ge) s == null || s.addMetadata(he, ge[he]);
          var Ce = function () {
              var t = e.canonicalRouteName;
              (t != null && (s == null || s.addMetadata("canonical_route", t)),
                pe !== "self" &&
                  p(e) &&
                  (Y++, r("CometRouterMemoryUtils").logNavigationCount(Y)),
                ye(oe, e.stripParams, ce || n),
                _e(re, q, s, !0, U, R == null ? void 0 : R.preventMaintain));
            },
            be = o("cometRouterUnloadHookUtils").runUnloadHooks(ue(), re, A);
          if (A !== !0 && be != null && le != null) {
            var Se = function () {
                q == null || q(!1);
              },
              Re = function () {
                var e = function () {
                  (j == null || j(), Ce());
                };
                E
                  ? e()
                  : m(function () {
                      e();
                    });
              };
            return (
              s == null || s.addMetadata("onbeforeunload_dialog_triggered", 1),
              s == null || s.cancelTrace("dropped", !0),
              ve(be, Se, Re)
            );
          }
          Ce();
        }
      }
      function ve(e, t, n) {
        var o = le;
        if (o == null) {
          r("FBLogger")("comet_infra").warn(
            "No onBeforeUnload Listener but ran onBeforeUnload hooks",
          );
          return;
        }
        se = !0;
        var a = !1,
          i = function (t) {
            return function () {
              (t(), (a = !0), (se = !1));
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
          _ != null ? _ : s._(/*BTDS*/ ""),
          p != null ? c(p, n) : u,
          g != null ? g : s._(/*BTDS*/ ""),
          C,
          h != null ? h : s._(/*BTDS*/ ""),
          d != null ? d : y,
          m != null ? c(m, t) : C,
        );
      }
      function Se(e) {
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
      function Re(e) {
        if (e < 0) {
          var t;
          ((J = r("uuidv4")()), (t = Z) == null || t.go(e));
          var n = function () {
            return Se(J);
          };
          r("setTimeout")(n, te.POP_STATE_TIMEOUT);
        } else {
          var o;
          (o = Z) == null || o.go(e);
        }
      }
      var Le = null;
      function Ee(e) {
        var t, n, r;
        ((Le =
          (t =
            (n = e == null ? void 0 : e.eventTimestamp) != null
              ? n
              : (r = globalThis.event) == null
                ? void 0
                : r.timeStamp) != null
            ? t
            : null),
          Re(-1));
      }
      function ke() {
        o("buildCometRouter.shared").popPushView(
          ue,
          function (e, t) {
            return xe.goTo(e, t);
          },
          {
            getCurrentRouteStep: function () {
              var e, t;
              return (e = (t = Z) == null ? void 0 : t.getCurrentRouteStep()) !=
                null
                ? e
                : 0;
            },
            go: Re,
          },
        );
      }
      function Ie(e) {
        return (
          (le = e),
          {
            cancel: function () {
              le === e && (le = null);
            },
          }
        );
      }
      function Te(t) {
        var i;
        if (
          (r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .INIT_ROUTER_START,
          }),
          T == null &&
            !I &&
            r("FBLogger")("comet_infra", "qpl_initial_load_undefined").info(
              "No %s QPL event set for trace policy '%s'. Falling back to default.",
              "NAVIGATION",
              y.tracePolicy,
            ),
          !r("gkx")("20935") &&
            q &&
            r("FBLogger")("comet_infra")
              .addToCategoryKey("runtime_site_is_not_comet_in_router")
              .mustfix(
                "CometRouter should only be used in Comet! Using it in Blue may cause unexpected behavior.",
              ),
          (e || (e = r("ExecutionEnvironment"))).canUseDOM)
        ) {
          var l = "",
            s = o("ConstUriUtils").getUri(window.location.href);
          if (s != null) {
            var u = r("cometRouterCleanURLSearchParameters")(
              s,
              t.stripParams,
              O,
            );
            u != null && (z.setPersistentParams(u), (l = u.toString()));
          }
          if (
            ((Z = o("CometHistoryManager").createHistoryManager(
              { scrollRestorationBehavior: w },
              [{ key: te.INIT_ROUTE_KEY }, null, l],
              me(),
            )),
            y.isResolvedRedirect === !0)
          )
            try {
              var m = y.url;
              if (!r("gkx")("29872")) {
                var p = window.location.hash;
                p !== "" && !m.includes("#") && (m += p);
              }
              Z.replaceState([{ key: te.INIT_ROUTE_KEY }, null, m], !1);
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
              a.fetchRoute(t.url, V).then(function (e) {
                e.onNavigationCallback && e.onNavigationCallback(e);
              }),
            ));
        }
        var _ =
            typeof (c || (c = r("performance"))).getEntriesByType == "function"
              ? (c || (c = r("performance"))).getEntriesByType("navigation")[0]
              : null,
          b =
            (_ == null ? void 0 : _.type) === "reload" ||
            ((i = (c || (c = r("performance"))).navigation) == null
              ? void 0
              : i.type) === "reload"
              ? "reload"
              : "initial",
          S = {
            getEnvironmentProviderForRoute: function (t) {
              return r("cometRouterBuildEnvironmentProviderFromRoute")(t, d, N);
            },
            makeCometRouteContainer: v,
          };
        (de(
          r("cometRouterBuildInitialRouterState")(
            f != null ? f : y,
            h,
            f != null ? g : C,
            f != null ? y : null,
            f != null ? C : null,
            S,
            (e || (e = r("ExecutionEnvironment"))).canUseDOM
              ? document.referrer
              : null,
            b,
            (e || (e = r("ExecutionEnvironment"))).canUseDOM
              ? te.INIT_ROUTE_KEY
              : "initial_ssr",
            I,
          ),
        ),
          n("cr:20394") == null || n("cr:20394").setAllMaps(H),
          r("cometRouterLogger").log({
            eventName: o("CometRouterLogEventUtils").CometRouterLoggingEvent
              .INIT_ROUTER_END,
            routerState: ue(),
          }));
      }
      var De = re.createRouterDispatcher({
          go: Ce,
          goBack: Ee,
          popPushView: ke,
          prefetchRouteDefinition: ge,
          prefetchRouteQueries: ye,
          preloadRouteCode: he,
        }),
        xe = r("returnDispatcherWithLogging")(
          new (o("buildCometRouterDispatcher").Dispatcher)(De),
          ue,
        );
      n("cr:20394") == null || n("cr:20394").registerDispatcher(xe);
      var $e = window.location.href,
        Pe = $e != null && $e !== "" ? r("absoluteToRelative")($e) : y.url,
        Ne = babelHelpers.extends({}, y, { url: Pe });
      Te(Ne);
      var Me = {
        dispatcher: xe,
        getCurrentRouterState: ue,
        getCurrentRouterStatus: re.routerStatusManager.getCurrentStatus,
        getMaintainedRouteState: ae.getMaintainedState,
        listen: re.addListener,
        markNavigationAsCommitted_INTERNAL_ONLY: re.markNavigationAsCommitted,
        setUnloadListener: Ie,
        store: a,
      };
      return (o("currentCometRouterInstance").register(Me), Me);
    }
    var g = f;
    l.default = g;
  },
  226,
);
