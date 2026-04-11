__d(
  "HeroInteraction.react",
  [
    "HeroLogger",
    "HeroPagelet.react",
    "HeroTracingCoreConfig",
    "HeroTracingCoreDependencies",
    "HeroTracingPlatformDependencies",
    "HeroTracingPlatformDependenciesType",
    "HiddenSubtreePassiveContext",
    "Promise",
    "PromiseAnnotate",
    "RelayProfilerContext",
    "clearImmediate",
    "foregroundRequestAnimationFrame",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "objectEntries",
    "objectValues",
    "performanceNow",
    "react",
    "setImmediateAcrossTransitions",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useCallback,
      g = _.useContext,
      h = _.useEffect,
      y = _.useLayoutEffect,
      C = _.useMemo,
      b = _.useRef,
      v =
        r("HeroTracingCoreConfig").deferUnmountCleanup === void 0
          ? !1
          : r("HeroTracingCoreConfig").deferUnmountCleanup,
      S =
        r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel === void 0
          ? !1
          : r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel,
      R = "root",
      L = new WeakSet();
    function E(e, t, n) {
      (o("HeroLogger").markStart(e, t),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.markPlaceholderStart(
          e,
          t,
          (d || (d = r("performanceNow")))(),
          n,
          "SuspensePromise",
        ));
    }
    function k(e, t, n, a, i) {
      (o("HeroLogger").markStartPlaceholder(e, t, void 0, n, a, i),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.markPlaceholderStart(
          e,
          t,
          (d || (d = r("performanceNow")))(),
          a,
          "PlaceholderWait",
        ));
    }
    function I(e, t, n, a) {
      (o("HeroLogger").markEnd(
        e,
        n,
        "SuspensePromise",
        "Promise Wait: " + a,
        t,
        void 0,
        void 0,
        "Placeholder",
      ),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.markPlaceholderEnd(
          e,
          t,
          a,
          (d || (d = r("performanceNow")))(),
        ));
    }
    function T(e, t, n, a) {
      (o("HeroLogger").markEndPlaceholder(
        e,
        n,
        "PlaceholderWait",
        "Placeholder Wait: " + a,
        t,
        void 0,
        void 0,
      ),
        o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.markPlaceholderEnd(
          e,
          t,
          a,
          (d || (d = r("performanceNow")))(),
        ));
    }
    function D(e, t, n) {
      o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addHeroRelay(t, {
        pageletStack: n,
        queries: e,
      });
      for (var a of e) {
        var i;
        if (!(a.isExecTime && a.flushes.length === 0)) {
          o("HeroLogger").measure(t, n, "Relay", a.name, a.start, a.end, {
            full_duration:
              (((i = a.end) != null ? i : (d || (d = r("performanceNow")))()) -
                a.start) /
              1e3,
            is_preloaded: a.isPreloaded === !0,
            networkStart: a.networkStart / 1e3,
            networkDuration: a.end != null ? (a.end - a.networkStart) / 1e3 : 0,
          });
          for (var l = 0; l < a.flushes.length; l++) {
            var s = a.flushes[l];
            o("HeroLogger").measure(
              t,
              n,
              "RelayFlush",
              a.name + "(" + s.label + ")",
              a.start,
              s.time,
              {
                flush: s.label,
                queryName: a.name,
                full_duration: (s.time - a.start) / 1e3,
                is_preloaded: a.isPreloaded === !0,
              },
            );
          }
        }
      }
    }
    function x(e, t, n) {
      o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addHeroBootload(t, {
        moduleIDs: Array.from(e),
        pageletStack: n,
      });
    }
    function $(e) {
      if (!e) return "No placeholder";
      var t = e.boundaryName != null ? "@" + e.boundaryName : "",
        n =
          o(
            "hero-tracing-placeholder",
          ).HeroPlaceholderUtils.createThenableDescription(e.thenables) ||
          "No Promises";
      return n + t;
    }
    function P(e, t) {
      if (e == null) return null;
      var n = {
        commitCount: 0,
        lastBaseDuration: 0,
        maxBaseDuration: 0,
        totalActualDuration: 0,
        totalCommitDuration: 0,
        totalPostCommitDuration: 0,
        zeroDurationCommitCount: 0,
        zeroDurationPostCommitCount: 0,
      };
      for (var o of r("objectEntries")(e)) {
        var a = o[0],
          i = o[1];
        if (a > t) break;
        var l = i.actualDuration,
          s = l === void 0 ? 0 : l,
          u = i.baseDuration,
          c = u === void 0 ? 0 : u,
          d = i.commitDuration,
          m = d === void 0 ? 0 : d,
          p = i.postCommitDuration,
          _ = p === void 0 ? 0 : p;
        (n.commitCount++,
          i.commitDuration === 0 && n.zeroDurationCommitCount++,
          i.postCommitDuration === 0 && n.zeroDurationPostCommitCount++,
          (n.maxBaseDuration = Math.max(n.maxBaseDuration, c)),
          (n.lastBaseDuration = c),
          (n.totalActualDuration += s),
          (n.totalCommitDuration += m),
          (n.totalPostCommitDuration += _));
      }
      return n;
    }
    var N = new Set();
    function M(t) {
      var a,
        i,
        l,
        m = t.ref,
        _ = babelHelpers.objectWithoutPropertiesLoose(t, e),
        N = g(o("hero-tracing-placeholder").HeroInteractionContext.Context),
        M = g(o("hero-tracing-placeholder").HeroInteractionIDContext),
        w = b(null),
        A = b(null),
        F = g(r("HiddenSubtreePassiveContext")),
        O = (a = _.interactionDesc) != null ? a : "No Description",
        B = _.interactionUUID,
        W = b({}),
        q = b({}),
        U = b({}),
        V = b(null),
        H = b(M),
        G = r("useStable")(
          o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID,
        ),
        z = C(
          function () {
            var e;
            return [].concat(N.pageletStack, [
              (e = _.pageletName) != null ? e : R,
            ]);
          },
          [N.pageletStack, _.pageletName],
        ),
        j = b([]),
        K = b(new Set()),
        Q = f(function () {
          return r("objectValues")(W.current).some(function (e) {
            return e.shouldHold;
          });
        }, []),
        X = f(
          function (e, t, n) {
            A.current !== e &&
              w.current == null &&
              !F.getCurrentState().hidden &&
              !Q() &&
              (w.current = o(
                "foregroundRequestAnimationFrame",
              ).foregroundRequestAnimationFrame(function () {
                ((w.current = null),
                  !F.getCurrentState().hidden &&
                    A.current !== e &&
                    !Q() &&
                    ((A.current = e),
                    n !== e &&
                      o("HeroLogger").endHeroInteraction(e, z, "SUCCESS"),
                    n != null && N.unhold(n, n + "_" + G),
                    D(j.current, e, z),
                    x(K.current, e, z),
                    (j.current = []),
                    (K.current = new Set())));
              }));
          },
          [F, N, G, z, Q],
        );
      if (B != null) {
        var Y = o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.get(B);
        Y != null &&
          Y.completed == null &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addFirstMarkerPoint(
            B,
            "HeroTrace_start",
            "AppTiming",
            (d || (d = r("performanceNow")))(),
          );
      }
      var J = f(
          function () {
            var e = V.current;
            e != null && X(e.interactionUUID, e.interactionDesc, M);
          },
          [M, X],
        ),
        Z = f(
          function (e, t, n) {
            var a = V.current;
            if (a != null && A.current !== a.interactionUUID) {
              var i = S ? H.current : n;
              (i != null && N.unhold(i, i + "_" + G),
                r("HeroTracingCoreConfig")
                  .removeHoldOnParentContextOnNewInteraction &&
                  N.unhold(a.interactionUUID, a.interactionUUID + "_" + G),
                i !== a.interactionUUID
                  ? o("HeroLogger").endHeroInteraction(
                      a.interactionUUID,
                      z,
                      "ABORT",
                      t,
                    )
                  : i != null &&
                    o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.addMetadata(
                      i,
                      "childInteractionAborted",
                      1,
                    ),
                e !== null &&
                  a.interactionUUID === e.interactionUUID &&
                  o("HeroLogger").genHeroInteractionUUIDAndMarkStart(
                    e.interactionUUID,
                  ));
            }
            (a != null &&
              (D(j.current, a.interactionUUID, z),
              x(K.current, a.interactionUUID, z)),
              (j.current = []),
              (K.current = new Set()),
              (A.current = null),
              w.current && w.current(),
              (w.current = null),
              (V.current = e),
              (H.current = n),
              e !== null &&
                n != null &&
                N.hold(
                  n,
                  z,
                  "Sub Interaction:" + e.interactionDesc,
                  n + "_" + G,
                ));
          },
          [N, G, z],
        ),
        ee = b(null);
      (h(
        function () {
          return (
            v === !0 && r("clearImmediate")(ee.current),
            function () {
              var e = function () {
                return Z(null, "Unmount");
              };
              v === !0
                ? (ee.current = r("setImmediateAcrossTransitions")(e))
                : e();
            }
          );
        },
        [Z],
      ),
        y(
          function () {
            var e;
            if (
              !(
                r("HeroTracingCoreConfig").enableResetCompletedFix === !0 &&
                B != null &&
                ((e = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(B)) == null
                  ? void 0
                  : e.completed) != null
              )
            ) {
              var t = null;
              (B != null && (t = { interactionDesc: O, interactionUUID: B }),
                Z(t, "New Interaction", M),
                B != null && X(B, O, M));
            }
          },
          [O, B, M, Z, X],
        ),
        y(
          function () {
            if (B != null) {
              var e = F.getCurrentState().hidden,
                t = F.getCurrentState().backgrounded,
                n = F.subscribeToChanges(function (n) {
                  var r = n.hidden,
                    a = n.backgrounded,
                    i = e,
                    l = t;
                  if (((e = r), (t = a), i !== r && r))
                    Z({ interactionDesc: O, interactionUUID: B }, "Hidden");
                  else if ((i && !r) || (l && !a)) {
                    var s = o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.get(B);
                    (s != null &&
                      s.completed == null &&
                      A.current === B &&
                      (A.current = null),
                      X(B, O, M));
                  }
                });
              return (
                B != null && X(B, O, M),
                function () {
                  return n.remove();
                }
              );
            }
          },
          [F, B, O, Z, X, M],
        ));
      var te = C(
          function () {
            var e = {
              consumeBootload: function (t) {
                K.current.add(t);
              },
              hold: function (r, a, i, l, u) {
                i === void 0 && (i = "Hold");
                var t =
                    l != null
                      ? l
                      : o(
                          "hero-tracing-placeholder",
                        ).HeroPlaceholderUtils.getSimpleUUID(),
                  d = new (s || (s = n("Promise")))(function () {});
                return (
                  (c || (c = o("PromiseAnnotate"))).setDisplayName(d, i),
                  e.suspenseCallback(r, t, a, new Set([d]), u),
                  e.registerPlaceholder(r, t, a),
                  t
                );
              },
              logHeroRender: function (t, n, r) {},
              logMetadata: function (t, n, r) {
                var e,
                  o = r[r.length - 1],
                  a = (e = q.current[o]) != null ? e : Object.create(null);
                (n != null ? (a[t] = n) : delete a[t], (q.current[o] = a));
              },
              logPageletVC: function (t, n, r, a, i) {
                var e = i[i.length - 1],
                  l = q.current[e],
                  s = l != null ? babelHelpers.extends({}, l) : void 0;
                (s &&
                  o(
                    "interaction-tracing-metrics",
                  ).InteractionTracingMetricsCore.addMountPointMetadata(
                    t,
                    e,
                    s,
                  ),
                  a != null &&
                    o("HeroLogger").measure(
                      t,
                      [].concat(i),
                      "VCWithoutImage",
                      "VCWithoutImage: " + i[i.length - 1],
                      Math.min(n, a),
                      a,
                      s,
                    ),
                  r != null &&
                    ((s = Object.assign(
                      s != null ? s : babelHelpers.extends({}, null),
                      P(U.current[e], r),
                    )),
                    (U.current[e] = {}),
                    o("HeroLogger").measure(
                      t,
                      [].concat(i),
                      "VC",
                      "VC: " + i[i.length - 1],
                      Math.min(n, r),
                      r,
                      s,
                    )));
              },
              logReactCommit: function (t, n, o, a, i, l, s) {
                if (
                  ((u || (u = r("HeroTracingCoreDependencies")))
                    .UserTimingUtils == null ||
                    (
                      u || (u = r("HeroTracingCoreDependencies"))
                    ).UserTimingUtils.measureReactCommit(n, i, a),
                  A.current !== t && l)
                ) {
                  var e,
                    c,
                    d = s[s.length - 1],
                    m = (e = U.current[d]) != null ? e : Object.create(null),
                    p = (c = m[i]) != null ? c : Object.create(null);
                  ((p.commitDuration = a), (m[i] = p), (U.current[d] = m));
                }
              },
              logReactPostCommit: function (t, n, o, a, i, l, s) {
                if (
                  ((u || (u = r("HeroTracingCoreDependencies")))
                    .UserTimingUtils == null ||
                    (
                      u || (u = r("HeroTracingCoreDependencies"))
                    ).UserTimingUtils.measureReactPostCommit(n, a),
                  A.current !== t && l)
                ) {
                  var e,
                    c,
                    d = s[s.length - 1],
                    m = (e = U.current[d]) != null ? e : Object.create(null),
                    p = (c = m[i]) != null ? c : Object.create(null);
                  ((p.postCommitDuration = a), (m[i] = p), (U.current[d] = m));
                }
              },
              logReactRender: function (t, n, r, a, i, l, s, u, c) {
                if (
                  A.current !== t &&
                  (o("HeroLogger").measure(
                    t,
                    [].concat(c),
                    "ReactRender",
                    "ReactRender: " + n,
                    a,
                    i,
                    { actualDuration: l, baseDuration: s, phase: r },
                  ),
                  u)
                ) {
                  var e,
                    d,
                    m = c[c.length - 1],
                    p = (e = U.current[m]) != null ? e : Object.create(null),
                    _ = (d = p[i]) != null ? d : Object.create(null);
                  ((_.actualDuration = l),
                    (_.baseDuration = s),
                    (p[i] = _),
                    (U.current[m] = p));
                }
              },
              pageletStack: N.pageletStack,
              registerPlaceholder: function (t, n, r) {
                var e = W.current[n];
                if ((w.current && w.current(), (w.current = null), e != null)) {
                  e.shouldHold = !0;
                  return;
                }
                var o = new Set();
                ((W.current[n] = {
                  pageletStack: r,
                  shouldHold: !0,
                  thenables: o,
                }),
                  k(t, n, r, $(W.current[n]), t));
              },
              removePlaceholder: function (t, n) {
                var e = W.current[n] != null;
                if (e) {
                  var r = W.current[n];
                  (delete W.current[n], J(), T(t, n, r.pageletStack, $(r)));
                }
              },
              suspenseCallback: function (t, n, r, a, i) {
                var e,
                  l = W.current[n],
                  s = {
                    boundaryName: i,
                    pageletStack: r,
                    shouldHold:
                      (e = l == null ? void 0 : l.shouldHold) != null ? e : !1,
                    thenables: a,
                  };
                W.current[n] = s;
                var u = $(s);
                (l == null && k(t, n, r, u),
                  a.forEach(function (e) {
                    if (!L.has(e)) {
                      var n;
                      L.add(e);
                      var a =
                          (n = (c || (c = o("PromiseAnnotate"))).getDisplayName(
                            e,
                          )) != null
                            ? n
                            : "Promise",
                        i = o(
                          "hero-tracing-placeholder",
                        ).HeroPlaceholderUtils.getSimpleUUID();
                      (E(t, i, a),
                        e.then(function () {
                          I(t, i, r, a);
                        }));
                    }
                  }));
                var d = $(l);
                l != null && u !== d && (T(t, n, r, d), k(t, n, r, u));
              },
              unhold: function (n, r) {
                e.removePlaceholder(n, r);
              },
            };
            return e;
          },
          [N.pageletStack, J],
        ),
        ne = C(function () {
          return {
            consumeBootload: function (t) {
              K.current.add(t);
            },
            retainQuery: function (t) {
              j.current.push(t);
            },
            wrapPrepareQueryResource: function (t) {
              return t();
            },
          };
        }, []),
        re = (i = _.pageletName) != null ? i : R,
        oe = o(
          "HeroTracingPlatformDependenciesType",
        ).getHeroInteractionHostInstanceProps(_);
      return p.jsx(
        o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        {
          value: te,
          children: p.jsx(
            o("hero-tracing-placeholder").HeroInteractionIDContext.Provider,
            {
              value: B,
              children: p.jsx(
                o("hero-tracing-placeholder")
                  .HeroCurrentInteractionForLoggingContext.Provider,
                {
                  value: V,
                  children: p.jsx(r("RelayProfilerContext").Provider, {
                    value: ne,
                    children: p.jsx(r("HeroPagelet.react"), {
                      isMutationRoot: !0,
                      name: re,
                      observeTextMutation: _.observeTextMutation,
                      ref: m,
                      alwaysMarkMutationRootAsVisualChange:
                        (l = _.alwaysMarkMutationRootAsVisualChange) != null
                          ? l
                          : r("HeroTracingCoreConfig")
                              .alwaysMarkMutationRootAsVisualChange,
                      children: function (t, n) {
                        return _.renderTrackedDOMElement
                          ? p.jsxs(p.Fragment, {
                              children: [
                                _.renderTrackedDOMElement(t, _.children),
                                p.jsx(n, {}),
                              ],
                            })
                          : p.jsxs(
                              r("HeroTracingPlatformDependencies")
                                .HostInstanceTrackableComponent,
                              babelHelpers.extends({}, oe, {
                                ref: t,
                                children: [p.jsx(n, {}), _.children],
                              }),
                            );
                      },
                    }),
                  }),
                },
              ),
            },
          ),
        },
      );
    }
    ((M.displayName = M.name + " [from " + i.id + "]"),
      (M.displayName = "HeroInteraction"),
      (l.default = M));
  },
  98,
);
