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
        r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel === void 0
          ? !1
          : r("HeroTracingCoreConfig").fixParentInteractionIdWhenCancel,
      S = "root",
      R = new WeakSet();
    function L(e, t, n) {
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
    function E(e, t, n, a, i) {
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
    function k(e, t, n, a) {
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
    function I(e, t, n, a) {
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
    function T(e, t, n) {
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
    function D(e, t, n) {
      o(
        "interaction-tracing-metrics",
      ).InteractionTracingMetricsCore.addHeroBootload(t, {
        moduleIDs: Array.from(e),
        pageletStack: n,
      });
    }
    function x(e) {
      if (!e) return "No placeholder";
      var t = e.boundaryName != null ? "@" + e.boundaryName : "",
        n =
          o(
            "hero-tracing-placeholder",
          ).HeroPlaceholderUtils.createThenableDescription(e.thenables) ||
          "No Promises";
      return n + t;
    }
    function $(e, t) {
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
    var P = new Set(),
      N = new Map();
    function M(e, t) {
      return e == null || t == null ? null : e + "::" + t;
    }
    function w(e) {
      e != null && r("clearImmediate")(e);
    }
    function A(e) {
      if (e != null) {
        var t = N.get(e);
        t != null && (w(t), N.delete(e));
      }
    }
    function F(e) {
      return r("setImmediateAcrossTransitions")(e);
    }
    function O(e, t) {
      A(e);
      var n = F(function () {
        (N.get(e) === n && N.delete(e), t());
      });
      N.set(e, n);
    }
    function B(t) {
      var a,
        i,
        l,
        m = t.ref,
        _ = babelHelpers.objectWithoutPropertiesLoose(t, e),
        P = g(o("hero-tracing-placeholder").HeroInteractionContext.Context),
        N = g(o("hero-tracing-placeholder").HeroInteractionIDContext),
        w = b(null),
        B = b(null),
        W = g(r("HiddenSubtreePassiveContext")),
        q = (a = _.interactionDesc) != null ? a : "No Description",
        U = _.interactionUUID,
        V = b(_.shouldDeferUnmountCleanup),
        H = M(_.unmountCleanupHandoffKey, U),
        G = b(H);
      y(
        function () {
          ((V.current = _.shouldDeferUnmountCleanup), (G.current = H));
        },
        [_.shouldDeferUnmountCleanup, H],
      );
      var z = b({}),
        j = b({}),
        K = b({}),
        Q = b(null),
        X = b(N),
        Y = r("useStable")(
          o("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID,
        ),
        J = C(
          function () {
            var e;
            return [].concat(P.pageletStack, [
              (e = _.pageletName) != null ? e : S,
            ]);
          },
          [P.pageletStack, _.pageletName],
        ),
        Z = b([]),
        ee = b(new Set()),
        te = f(function () {
          return r("objectValues")(z.current).some(function (e) {
            return e.shouldHold;
          });
        }, []),
        ne = f(
          function (e, t, n) {
            B.current !== e &&
              w.current == null &&
              !W.getCurrentState().hidden &&
              !te() &&
              (w.current = o(
                "foregroundRequestAnimationFrame",
              ).foregroundRequestAnimationFrame(function () {
                ((w.current = null),
                  !W.getCurrentState().hidden &&
                    B.current !== e &&
                    !te() &&
                    ((B.current = e),
                    n !== e &&
                      o("HeroLogger").endHeroInteraction(e, J, "SUCCESS"),
                    n != null && P.unhold(n, n + "_" + Y),
                    T(Z.current, e, J),
                    D(ee.current, e, J),
                    (Z.current = []),
                    (ee.current = new Set())));
              }));
          },
          [W, P, Y, J, te],
        );
      if (U != null) {
        var re = o(
          "interaction-tracing-metrics",
        ).InteractionTracingMetricsCore.get(U);
        re != null &&
          re.completed == null &&
          o(
            "interaction-tracing-metrics",
          ).InteractionTracingMetricsCore.addFirstMarkerPoint(
            U,
            "HeroTrace_start",
            "AppTiming",
            (d || (d = r("performanceNow")))(),
          );
      }
      var oe = f(
          function () {
            var e = Q.current;
            e != null && ne(e.interactionUUID, e.interactionDesc, N);
          },
          [N, ne],
        ),
        ae = f(
          function (e, t, n) {
            var a = Q.current;
            if (a != null && B.current !== a.interactionUUID) {
              var i = v ? X.current : n;
              (i != null && P.unhold(i, i + "_" + Y),
                r("HeroTracingCoreConfig")
                  .removeHoldOnParentContextOnNewInteraction &&
                  P.unhold(a.interactionUUID, a.interactionUUID + "_" + Y),
                i !== a.interactionUUID
                  ? o("HeroLogger").endHeroInteraction(
                      a.interactionUUID,
                      J,
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
              (T(Z.current, a.interactionUUID, J),
              D(ee.current, a.interactionUUID, J)),
              (Z.current = []),
              (ee.current = new Set()),
              (B.current = null),
              w.current && w.current(),
              (w.current = null),
              (Q.current = e),
              (X.current = n),
              e !== null &&
                n != null &&
                P.hold(
                  n,
                  J,
                  "Sub Interaction:" + e.interactionDesc,
                  n + "_" + Y,
                ));
          },
          [P, Y, J],
        ),
        ie = b(null);
      (h(
        function () {
          var e = G.current;
          return (
            e != null && A(e),
            function () {
              var e = function () {
                  return ae(null, "Unmount");
                },
                t = (V.current == null ? void 0 : V.current()) === !0;
              if (t) {
                var n = G.current;
                n == null ? (ie.current = F(e)) : O(n, e);
              } else e();
            }
          );
        },
        [ae],
      ),
        y(
          function () {
            var e;
            if (
              !(
                r("HeroTracingCoreConfig").enableResetCompletedFix === !0 &&
                U != null &&
                ((e = o(
                  "interaction-tracing-metrics",
                ).InteractionTracingMetricsCore.get(U)) == null
                  ? void 0
                  : e.completed) != null
              )
            ) {
              var t = null;
              (U != null && (t = { interactionDesc: q, interactionUUID: U }),
                ae(t, "New Interaction", N),
                U != null && ne(U, q, N));
            }
          },
          [q, U, N, ae, ne],
        ),
        y(
          function () {
            if (U != null) {
              var e = W.getCurrentState().hidden,
                t = W.getCurrentState().backgrounded,
                n = W.subscribeToChanges(function (n) {
                  var r = n.hidden,
                    a = n.backgrounded,
                    i = e,
                    l = t;
                  if (((e = r), (t = a), i !== r && r))
                    ae({ interactionDesc: q, interactionUUID: U }, "Hidden");
                  else if ((i && !r) || (l && !a)) {
                    var s = o(
                      "interaction-tracing-metrics",
                    ).InteractionTracingMetricsCore.get(U);
                    (s != null &&
                      s.completed == null &&
                      B.current === U &&
                      (B.current = null),
                      ne(U, q, N));
                  }
                });
              return (
                U != null && ne(U, q, N),
                function () {
                  return n.remove();
                }
              );
            }
          },
          [W, U, q, ae, ne, N],
        ));
      var le = C(
          function () {
            var e = {
              consumeBootload: function (t) {
                ee.current.add(t);
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
                  a = (e = j.current[o]) != null ? e : Object.create(null);
                (n != null ? (a[t] = n) : delete a[t], (j.current[o] = a));
              },
              logPageletVC: function (t, n, r, a, i) {
                var e = i[i.length - 1],
                  l = j.current[e],
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
                      $(K.current[e], r),
                    )),
                    (K.current[e] = {}),
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
                  B.current !== t && l)
                ) {
                  var e,
                    c,
                    d = s[s.length - 1],
                    m = (e = K.current[d]) != null ? e : Object.create(null),
                    p = (c = m[i]) != null ? c : Object.create(null);
                  ((p.commitDuration = a), (m[i] = p), (K.current[d] = m));
                }
              },
              logReactPostCommit: function (t, n, o, a, i, l, s) {
                if (
                  ((u || (u = r("HeroTracingCoreDependencies")))
                    .UserTimingUtils == null ||
                    (
                      u || (u = r("HeroTracingCoreDependencies"))
                    ).UserTimingUtils.measureReactPostCommit(n, a),
                  B.current !== t && l)
                ) {
                  var e,
                    c,
                    d = s[s.length - 1],
                    m = (e = K.current[d]) != null ? e : Object.create(null),
                    p = (c = m[i]) != null ? c : Object.create(null);
                  ((p.postCommitDuration = a), (m[i] = p), (K.current[d] = m));
                }
              },
              logReactRender: function (t, n, r, a, i, l, s, u, c) {
                if (
                  B.current !== t &&
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
                    p = (e = K.current[m]) != null ? e : Object.create(null),
                    _ = (d = p[i]) != null ? d : Object.create(null);
                  ((_.actualDuration = l),
                    (_.baseDuration = s),
                    (p[i] = _),
                    (K.current[m] = p));
                }
              },
              pageletStack: P.pageletStack,
              registerPlaceholder: function (t, n, r) {
                var e = z.current[n];
                if ((w.current && w.current(), (w.current = null), e != null)) {
                  e.shouldHold = !0;
                  return;
                }
                var o = new Set();
                ((z.current[n] = {
                  pageletStack: r,
                  shouldHold: !0,
                  thenables: o,
                }),
                  E(t, n, r, x(z.current[n]), t));
              },
              removePlaceholder: function (t, n) {
                var e = z.current[n] != null;
                if (e) {
                  var r = z.current[n];
                  (delete z.current[n], oe(), I(t, n, r.pageletStack, x(r)));
                }
              },
              suspenseCallback: function (t, n, r, a, i) {
                var e,
                  l = z.current[n],
                  s = {
                    boundaryName: i,
                    pageletStack: r,
                    shouldHold:
                      (e = l == null ? void 0 : l.shouldHold) != null ? e : !1,
                    thenables: a,
                  };
                z.current[n] = s;
                var u = x(s);
                (l == null && E(t, n, r, u),
                  a.forEach(function (e) {
                    if (!R.has(e)) {
                      var n;
                      R.add(e);
                      var a =
                          (n = (c || (c = o("PromiseAnnotate"))).getDisplayName(
                            e,
                          )) != null
                            ? n
                            : "Promise",
                        i = o(
                          "hero-tracing-placeholder",
                        ).HeroPlaceholderUtils.getSimpleUUID();
                      (L(t, i, a),
                        e.then(function () {
                          k(t, i, r, a);
                        }));
                    }
                  }));
                var d = x(l);
                l != null && u !== d && (I(t, n, r, d), E(t, n, r, u));
              },
              unhold: function (n, r) {
                e.removePlaceholder(n, r);
              },
            };
            return e;
          },
          [P.pageletStack, oe],
        ),
        se = C(function () {
          return {
            consumeBootload: function (t) {
              ee.current.add(t);
            },
            retainQuery: function (t) {
              Z.current.push(t);
            },
            wrapPrepareQueryResource: function (t) {
              return t();
            },
          };
        }, []),
        ue = (i = _.pageletName) != null ? i : S,
        ce = o(
          "HeroTracingPlatformDependenciesType",
        ).getHeroInteractionHostInstanceProps(_);
      return p.jsx(
        o("hero-tracing-placeholder").HeroInteractionContext.Context.Provider,
        {
          value: le,
          children: p.jsx(
            o("hero-tracing-placeholder").HeroInteractionIDContext.Provider,
            {
              value: U,
              children: p.jsx(
                o("hero-tracing-placeholder")
                  .HeroCurrentInteractionForLoggingContext.Provider,
                {
                  value: Q,
                  children: p.jsx(r("RelayProfilerContext").Provider, {
                    value: se,
                    children: p.jsx(r("HeroPagelet.react"), {
                      isMutationRoot: !0,
                      name: ue,
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
                              babelHelpers.extends({}, ce, {
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
    ((B.displayName = B.name + " [from " + i.id + "]"),
      (B.displayName = "HeroInteraction"),
      (l.default = B));
  },
  98,
);
