__d(
  "withAdsHeroTracing",
  [
    "AdsALSubsurface",
    "AdsALSurface",
    "AdsALSurfaceHeroTracingRootPlugin",
    "AdsPerfInteractionsController",
    "AdsUnmountDebugEventBuffer",
    "CometHeroInteractionIDContext",
    "CometHeroInteractionWithDiv.react",
    "CometVisualCompletionConstants",
    "HeroInteractionIgnoreWithDiv.react",
    "InteractionTracingMetrics",
    "LoadingMarkerArea.react",
    "QPLEvent",
    "clearImmediate",
    "emptyHook",
    "getInteractionIDWithInheritance",
    "gkx",
    "hero-tracing",
    "hero-tracing-placeholder",
    "justknobx",
    "performanceNow",
    "react",
    "react-compiler-runtime",
    "setImmediateAcrossTransitions",
    "shouldDeferHeroTracing",
    "useCometDisplayTimingTrackerForInteraction",
    "useMergeRefs",
    "useVirtualizationContext",
    "withAdsErrorBoundary",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = s || (s = o("react")),
      d = s,
      m = d.startTransition,
      p = d.useCallback,
      _ = d.useContext,
      f = d.useEffect,
      g = d.useLayoutEffect,
      h = d.useRef,
      y = d.useState;
    function C(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.metadata,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { nonInteractive: !0, trackMutation: !1 }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a.componentName
        ? ((l = o("AdsALSubsurface").getDynamicSubsurface(a.componentName)),
          (t[1] = a.componentName),
          (t[2] = l))
        : (l = t[2]);
      var s = "heroRoot-" + a.htRootName,
        u;
      if (t[3] !== a.htRootName || t[4] !== s) {
        var d;
        ((u = { click: ((d = {}), (d[s] = a.htRootName), d) }),
          (t[3] = a.htRootName),
          (t[4] = s),
          (t[5] = u));
      } else u = t[5];
      var m;
      t[6] !== l || t[7] !== u
        ? ((m = {
            surface: r("AdsALSurfaceHeroTracingRootPlugin"),
            capability: i,
            subsurface: l,
            uiEventMetadata: u,
          }),
          (t[6] = l),
          (t[7] = u),
          (t[8] = m))
        : (m = t[8]);
      var p = m,
        _;
      return (
        t[9] !== p || t[10] !== n
          ? ((_ = c.jsx(
              r("AdsALSurface"),
              babelHelpers.extends({}, p, { children: n }),
            )),
            (t[9] = p),
            (t[10] = n),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    var b = new Map();
    function v(e) {
      return (
        e != null &&
        (u || (u = o("QPLEvent"))).getMarkerId(e.qplEvent) === 270206071
      );
    }
    function S(e, t) {
      return e == null || t == null ? null : e + "::" + t;
    }
    function R(t, n, a, i) {
      var l = o("react-compiler-runtime").c(24),
        s;
      l[0] !== n
        ? ((s = n && r("justknobx")._("4579")), (l[0] = n), (l[1] = s))
        : (s = l[1]);
      var u = s,
        c;
      l[2] !== t || l[3] !== u || l[4] !== i
        ? ((c = u ? S(i, t) : null),
          (l[2] = t),
          (l[3] = u),
          (l[4] = i),
          (l[5] = c))
        : (c = l[5]);
      var d = c,
        m;
      l[6] !== d || l[7] !== t || l[8] !== a || l[9] !== u
        ? ((m = {
            handoffID: d,
            interactionUUID: t,
            shouldDeferUnmountCleanup: a,
            shouldEnableAnnotations: u,
          }),
          (l[6] = d),
          (l[7] = t),
          (l[8] = a),
          (l[9] = u),
          (l[10] = m))
        : (m = l[10]);
      var p = h(m),
        _,
        f;
      (l[11] !== d || l[12] !== t || l[13] !== a || l[14] !== u
        ? ((_ = function () {
            p.current = {
              handoffID: d,
              interactionUUID: t,
              shouldDeferUnmountCleanup: a,
              shouldEnableAnnotations: u,
            };
          }),
          (f = [d, t, a, u]),
          (l[11] = d),
          (l[12] = t),
          (l[13] = a),
          (l[14] = u),
          (l[15] = _),
          (l[16] = f))
        : ((_ = l[15]), (f = l[16])),
        g(_, f));
      var y, C;
      (l[17] !== d || l[18] !== t || l[19] !== u
        ? ((y = function () {
            var n;
            if (
              (u &&
                t != null &&
                r("InteractionTracingMetrics").addAnnotationBoolean(
                  t,
                  "tableRemountAnnotationsEnabled",
                  !0,
                ),
              d != null)
            ) {
              var a = b.get(d);
              if (!(a == null || t == null)) {
                var i = t;
                (r("clearImmediate")(a.cleanupImmediateID), b.delete(d));
                var l = (e || (e = r("performanceNow")))(),
                  s =
                    (n = r("InteractionTracingMetrics").get(i)) == null
                      ? void 0
                      : n.completed,
                  c = s != null,
                  m = s != null && s >= a.deferredUnmountTime && s <= l,
                  p = o(
                    "hero-tracing-placeholder",
                  ).HeroPendingPlaceholderTracker.dump(i).length,
                  _ = r(
                    "AdsPerfInteractionsController",
                  ).getActiveInteractionTraceAPI(i),
                  f = _ != null,
                  g = _ != null,
                  h = c,
                  y = p,
                  C = !1,
                  v = 0,
                  S = 0,
                  R = 0,
                  L = !1;
                (r("InteractionTracingMetrics").addAnnotationBoolean(
                  i,
                  "tableRemountHandoffWasClaimed",
                  !0,
                ),
                  r("InteractionTracingMetrics").addAnnotationInt(
                    i,
                    "tableRemountHandoffGapMs",
                    Math.max(0, Math.round(l - a.deferredUnmountTime)),
                  ),
                  r("InteractionTracingMetrics").addAnnotationInt(
                    i,
                    "tableRemountHeroTrackedLoadCountAtDeferredUnmount",
                    a.heroTrackedLoadCountAtDeferredUnmount,
                  ),
                  r("InteractionTracingMetrics").addAnnotationInt(
                    i,
                    "tableRemountHeroTrackedLoadCountAtClaim",
                    p,
                  ),
                  r("InteractionTracingMetrics").addAnnotationBoolean(
                    i,
                    "tableRemountActiveTraceWasAvailableAtClaim",
                    f,
                  ),
                  r("InteractionTracingMetrics").addAnnotationBoolean(
                    i,
                    "tableRemountInteractionWasAlreadyCompleteAtClaim",
                    c,
                  ),
                  r("InteractionTracingMetrics").addAnnotationBoolean(
                    i,
                    "tableRemountInteractionCompletedDuringHandoff",
                    m,
                  ),
                  s != null &&
                    r("InteractionTracingMetrics").addAnnotationInt(
                      i,
                      "tableRemountInteractionCompleteBeforeClaimMs",
                      Math.max(0, Math.round(l - s)),
                    ),
                  r("InteractionTracingMetrics").addAnnotationBoolean(
                    i,
                    "tableRemountFinalLogAnnotationsWereAttached",
                    g,
                  ));
                var E = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
                    onEnd: function (t) {
                      t.interactionID === i && (y = Math.max(0, y - 1));
                    },
                    onStart: function (t) {
                      t.interactionID === i &&
                        ((v = v + 1), (y = y + 1), h && (S = S + 1));
                    },
                  }),
                  k = !1,
                  I = function () {
                    k || ((k = !0), E());
                  },
                  T = function () {
                    L ||
                      ((L = !0),
                      r("InteractionTracingMetrics").addAnnotationInt(
                        i,
                        "tableRemountHeroTrackedLoadStartsAfterClaim",
                        v,
                      ),
                      r("InteractionTracingMetrics").addAnnotationBoolean(
                        i,
                        "tableRemountHadHeroTrackedLoadAfterClaim",
                        p > 0 || v > 0,
                      ),
                      r("InteractionTracingMetrics").addAnnotationBoolean(
                        i,
                        "tableRemountHeroCompleteWasObservedAfterClaim",
                        C,
                      ),
                      C &&
                        r("InteractionTracingMetrics").addAnnotationInt(
                          i,
                          "tableRemountHeroTrackedLoadCountAtHeroComplete",
                          R,
                        ),
                      r("InteractionTracingMetrics").addAnnotationInt(
                        i,
                        "tableRemountHeroTrackedLoadStartsAfterHeroComplete",
                        S,
                      ),
                      r("InteractionTracingMetrics").addAnnotationBoolean(
                        i,
                        "tableRemountHadLateHeroTrackedLoadAfterHeroComplete",
                        S > 0,
                      ),
                      r("InteractionTracingMetrics").addAnnotationInt(
                        i,
                        "tableRemountHeroTrackedLoadCountAtFinalLog",
                        y,
                      ));
                  };
                if (_ == null) {
                  I();
                  return;
                }
                return (
                  _.onCompleteSync(function () {
                    ((h = !0), (C = !0), (R = y));
                  }),
                  _.onBeforeLog(function () {
                    (T(), I());
                  }),
                  function () {
                    I();
                  }
                );
              }
            }
          }),
          (C = [d, t, u]),
          (l[17] = d),
          (l[18] = t),
          (l[19] = u),
          (l[20] = y),
          (l[21] = C))
        : ((y = l[20]), (C = l[21])),
        g(y, C));
      var v, R;
      (l[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            return function () {
              var t = p.current,
                n = t.handoffID,
                a = t.interactionUUID,
                i = t.shouldDeferUnmountCleanup,
                l = t.shouldEnableAnnotations;
              if (!(n == null || a == null || !l || !i())) {
                var s = (e || (e = r("performanceNow")))(),
                  u = o(
                    "hero-tracing-placeholder",
                  ).HeroPendingPlaceholderTracker.dump(a).length;
                r("InteractionTracingMetrics").addAnnotationBoolean(
                  a,
                  "tableRemountUnmountWasDeferred",
                  !0,
                );
                var c = r("setImmediateAcrossTransitions")(function () {
                  var e = b.get(n);
                  (e == null ? void 0 : e.cleanupImmediateID) === c &&
                    b.delete(n);
                });
                b.set(n, {
                  cleanupImmediateID: c,
                  deferredUnmountTime: s,
                  heroTrackedLoadCountAtDeferredUnmount: u,
                });
              }
            };
          }),
          (R = []),
          (l[22] = v),
          (l[23] = R))
        : ((v = l[22]), (R = l[23])),
        g(v, R));
    }
    function L(t, n) {
      var a,
        i = n != null ? n : {},
        l = i.alwaysMarkMutationRootAsVisualChange,
        s = i.callsitesToDefer,
        u = i.deferPolicy,
        c = i.heroRootComponentName,
        d = i.inheritParentInteraction,
        _ = d === void 0 ? !1 : d,
        g = i.observeTextMutation,
        C = i.parentInteractionID,
        b = i.preserveInteractionAcrossRouterRemount,
        S = b === void 0 ? !1 : b,
        L = i.preserveInteractionOnRemount,
        E = L === void 0 ? !1 : L,
        k = i.shouldSubscribeToInteractionChanges,
        I = k === void 0 ? !0 : k,
        T = i.unmountCleanupHandoffKey,
        D = y(r("AdsPerfInteractionsController").getActiveInteraction(t)),
        x = D[0],
        $ = D[1],
        P = r("getInteractionIDWithInheritance")(C, x),
        N = v(r("AdsPerfInteractionsController").getActiveInteractionConfig(t)),
        M =
          P != null
            ? r("AdsPerfInteractionsController").getInteractionTraceType(P)
            : null,
        w = r("useCometDisplayTimingTrackerForInteraction")("AdsHeroWrapper"),
        A = h(
          ((a = r("AdsPerfInteractionsController").getActiveInteractionConfig(
            t,
          )) == null
            ? void 0
            : a.isNavigation) === !0,
        ),
        F = h(null),
        O = r("useMergeRefs")(M === "INTERACTION" ? w : null, F),
        B = u != null ? u : "trace_type_is_navigation",
        W = S === !0,
        q =
          P != null
            ? r("AdsPerfInteractionsController").getInteractionStartCallsite(P)
            : null,
        U = p(
          function () {
            return (q != null && (s == null ? void 0 : s.has(q)) === !0) ||
              B === "unconditional"
              ? !0
              : B === "trace_type_is_navigation"
                ? M === "NAVIGATION"
                : B === "interaction_config_is_navigation"
                  ? A.current === !0
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          B,
                      );
                    })();
          },
          [s, B, q, M],
        );
      (R(P, N, U, T),
        f(
          function () {
            function n(n, a, i) {
              var l;
              ((A.current = a.isNavigation === !0),
                (l = F.current) == null ||
                  l.removeAttribute(
                    r("CometVisualCompletionConstants").ATTRIBUTE_NAME,
                  ),
                i != null && n.addAnnotation("interaction_component_name", i),
                a.addIgnoreDynamicAfterHeroDone === !0 &&
                  (n == null ||
                    n.onCompleteSync(function () {
                      var e;
                      r("AdsPerfInteractionsController").getActiveInteraction(
                        t,
                      ) === n.getTraceId() &&
                        ((e = F.current) == null ||
                          e.setAttribute(
                            r("CometVisualCompletionConstants").ATTRIBUTE_NAME,
                            r("CometVisualCompletionConstants").IGNORE_DYNAMIC,
                          ));
                    })));
              {
                var s = (e || (e = r("performanceNow")))(),
                  u = window.location.href;
                n.onCompleteSync(function (t) {
                  try {
                    var n,
                      a =
                        (n = t.annotations.string) == null
                          ? void 0
                          : n.cancelType;
                    if (a !== "aborted:Unmount") return;
                    var i = t.traceId;
                    (r("InteractionTracingMetrics").addAnnotation(
                      i,
                      "unmountDebug_recentEvents",
                      o("AdsUnmountDebugEventBuffer").getRecentEventsString(),
                    ),
                      r("InteractionTracingMetrics").addAnnotationInt(
                        i,
                        "unmountDebug_mountDurationMs",
                        Math.round((e || (e = r("performanceNow")))() - s),
                      ),
                      r("InteractionTracingMetrics").addAnnotationBoolean(
                        i,
                        "unmountDebug_urlChanged",
                        u !== window.location.href,
                      ),
                      r("InteractionTracingMetrics").addAnnotation(
                        i,
                        "unmountDebug_visibilityState",
                        document.visibilityState,
                      ));
                  } catch (e) {}
                });
              }
            }
            var a = r("AdsPerfInteractionsController").getActiveInteraction(t),
              i = r("AdsPerfInteractionsController").getActiveInteractionConfig(
                t,
              );
            if (a != null && i != null) {
              var l = r(
                "AdsPerfInteractionsController",
              ).getActiveInteractionTraceAPI(a);
              if (l) {
                if (r("gkx")("25396")) {
                  var s = l.getTraceId();
                  $(function (e) {
                    return e === s ? e : s;
                  });
                }
                n(l, i, c);
              }
            }
            if (I)
              return (
                r("AdsPerfInteractionsController").registerListener(
                  t,
                  function (e, t) {
                    (n(e, t, c),
                      r("shouldDeferHeroTracing")(t.qplEvent)
                        ? m(function () {
                            $(e.getTraceId());
                          })
                        : $(e.getTraceId()));
                  },
                ),
                function () {
                  return r("AdsPerfInteractionsController").unregisterListener(
                    t,
                  );
                }
              );
          },
          [t, c, I],
        ));
      var V = _ === !0 ? "root[" + t + "]" : null;
      return babelHelpers.extends(
        { interactionDesc: t, interactionUUID: P },
        W
          ? { shouldDeferUnmountCleanup: U, unmountCleanupHandoffKey: T }
          : void 0,
        {
          pageletName: V,
          preserveInteractionOnRemount: E === !0 ? !0 : void 0,
          ref: O,
          observeTextMutation: g,
          alwaysMarkMutationRootAsVisualChange: l,
        },
      );
    }
    function E(e, t, n) {
      var o = n != null ? n : {},
        a = o.alwaysMarkMutationRootAsVisualChange,
        l = o.callsitesToDefer,
        s = o.currentInteractionID,
        u = o.deferPolicy,
        d = o.fallbackComponent,
        m = o.heroRootComponentName,
        g = o.ignoreErrorBoundary,
        h = g === void 0 ? !0 : g,
        y = o.ignoreParentInteraction,
        b = y === void 0 ? !1 : y,
        v = o.inheritParentInteraction,
        S = v === void 0 ? !1 : v,
        R = o.observeTextMutation,
        E = o.preserveInteractionOnRemount,
        k = o.xstyle,
        I = s == null;
      function T() {
        return _(r("CometHeroInteractionIDContext"));
      }
      var D = S ? T : r("emptyHook").thatReturnsNull,
        x = function () {
          var e;
          if (m != null) return m;
          var n = (e = t.displayName) != null ? e : t.name;
          if (n == null) return null;
          var r = n.match(/from\s(.+.react)/);
          return r == null ? n : r.pop();
        },
        $ = x(),
        P = h
          ? t
          : r("withAdsErrorBoundary")($ != null ? $ : i.id, t, {
              fallbackComponent: d,
            });
      function N(t) {
        "use no forget";
        var o = D(),
          i = L(
            e,
            babelHelpers.extends(
              {
                inheritParentInteraction: S,
                parentInteractionID: o,
                preserveInteractionOnRemount: E,
                shouldSubscribeToInteractionChanges: I,
                observeTextMutation: R,
                alwaysMarkMutationRootAsVisualChange: a,
                heroRootComponentName: $,
              },
              (n == null
                ? void 0
                : n.preserveInteractionAcrossRouterRemount) === !0
                ? {
                    callsitesToDefer: l,
                    preserveInteractionAcrossRouterRemount: !0,
                    deferPolicy: u,
                    unmountCleanupHandoffKey: n.unmountCleanupHandoffKey,
                  }
                : void 0,
            ),
          ),
          s = p(function (t) {
            t
              ? (r(
                  "AdsPerfInteractionsController",
                ).addToVirtualizedHeroTracingComponents(e),
                r("AdsPerfInteractionsController").annotateAndCancel(
                  e,
                  "Unmount:Virtualized",
                ))
              : r(
                  "AdsPerfInteractionsController",
                ).removeFromVirtualizedHeroTracingComponents(e);
          }, []),
          d = r("useVirtualizationContext")(),
          m = d.subscribeToVirtualizationStatus;
        f(
          function () {
            var e = m(s);
            return function () {
              e();
            };
          },
          [s, m],
        );
        var _ = { componentName: $ != null ? $ : "unnamed", htRootName: e },
          g = c.jsx(r("LoadingMarkerArea.react"), {
            name: $ != null ? $ : "unnamed_hero_root",
            children: c.jsx(C, {
              metadata: _,
              children: c.jsx(
                r("CometHeroInteractionWithDiv.react"),
                babelHelpers.extends({}, i, {
                  xstyle: k,
                  children: c.jsx(P, babelHelpers.extends({}, t)),
                }),
              ),
            }),
          });
        return b
          ? c.jsx(r("HeroInteractionIgnoreWithDiv.react"), { children: g })
          : g;
      }
      return ((N.displayName = N.name + " [from " + i.id + "]"), N);
    }
    ((E.root = function (e, t) {
      return E(
        e,
        function (t) {
          var e = t.children;
          return e;
        },
        t,
      );
    }),
      (E.useAdsHeroTracing = L));
    var k = E;
    l.default = k;
  },
  98,
);
