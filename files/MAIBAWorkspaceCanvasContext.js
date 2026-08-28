__d(
  "MAIBAWorkspaceCanvasContext",
  [
    "MAIBAChatAppUIActions",
    "MAIBAObservabilityUtils",
    "MAIBAWorkspaceExperienceRegistry",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useMAIBAWorkspaceCanvasLifecycle",
    "useMAIBAWorkspaceInlineEntryPointCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useLayoutEffect,
      f = u.useMemo,
      g = u.useRef,
      h = u.useState,
      y = r("requireDeferred")(
        "MAIBAWorkspaceCanvasLifecycleObserver",
      ).__setRef("MAIBAWorkspaceCanvasContext"),
      C = {
        canNavigateBack: !1,
        closeCanvas: function () {},
        externalConversationID: null,
        getLatestWorkspaceEntity: function (t) {
          return t;
        },
        getLoadedEntryPointForEntity: function () {
          return null;
        },
        getWorkspaceById: function () {
          return null;
        },
        isLatestWorkspaceVersion: function () {
          return !0;
        },
        isWidthTransitioningRef: { current: !1 },
        latestDraftPreviewId: null,
        loadedEntryPoint: null,
        loadExperienceEntryPoint: function () {},
        navigateBack: function () {},
        navigateToExperience: function () {},
        navigateToWorkspaceId: function () {
          return !1;
        },
        openCanvas: function () {},
        preloadExperienceEntryPoint: function () {},
        publishWorkspace: function () {},
        refreshOpenExperience: function () {},
        registerDraftPreview: function () {},
        registerWorkspaceVersion: function () {},
        resolveLatestWorkspaceEntity: function (t) {
          return t;
        },
        state: {
          entity: null,
          isCanvasOpen: !1,
          isFullScreen: !1,
          userClosedSinceLastOpen: !1,
        },
        unregisterDraftPreview: function () {},
      },
      b = c(C);
    function v(e) {
      return (
        e.renderInlineWorkspace != null ||
        e.renderInlineWorkspacePillPublish != null
      );
    }
    function S(e) {
      var t = e.activeEntityRef,
        n = e.draftPreviewIDsRef,
        r = e.experienceStackRef,
        o = e.externalConversationID,
        a = e.inlinePillMapConversationIDRef,
        i = e.inlinePillMapRef,
        l = e.latestWorkspaceByIDRef,
        s = e.latestWorkspaceByTypeAndIDRef,
        u = e.prevConversationRef,
        c = e.publishedEntityConversationIDRef,
        d = e.recordConversationIDRef,
        m = e.recordRef,
        p = e.setCanNavigateBack,
        _ = e.setInlinePillMap,
        f = e.setLatestDraftPreviewId,
        g = e.setLatestVersionByTypeAndID,
        h = e.setLoadedEntryPoint,
        y = e.setLoadedEntryPointConversationID,
        C = e.setState;
      if (u.current !== o) {
        var b = u.current;
        u.current = o;
        var v = new Set();
        if (d.current === b) {
          var S = m.current;
          (S != null && v.add(S.loaded),
            (m.current = null),
            (d.current = null),
            h(null),
            y(null));
        }
        if (a.current === b) {
          for (var R of i.current.values()) v.add(R);
          var L = new Map();
          ((i.current = L), (a.current = null), _(L));
        }
        for (var E of r.current) v.add(E.loaded);
        r.current = [];
        for (var k of v) k.dispose();
        p(!1);
        var I = c.current === b;
        (I && ((t.current = null), (c.current = null)),
          C(function (e) {
            return babelHelpers.extends({}, e, {
              entity: I ? null : e.entity,
              entityConversationID: I ? null : e.entityConversationID,
              userClosedSinceLastOpen: !1,
            });
          }),
          l.current.clear(),
          s.current.clear(),
          g(new Map()),
          (n.current = []),
          f(null));
      }
    }
    function R(e, t, n, r, a, i, l, s, u, c, d, m, p, _, f) {
      if (i.current === n) {
        var g = e.workspace_type;
        if (!(g == null || g === "")) {
          var h = r.current,
            y = o("useMAIBAWorkspaceInlineEntryPointCache").entryPointKey(e),
            C = l.current === n ? s.current : null;
          if (
            C != null &&
            o("useMAIBAWorkspaceInlineEntryPointCache").entryPointKey(
              C.entity,
            ) === y
          ) {
            p(e, C.loaded);
            return;
          }
          if (
            C != null &&
            o("MAIBAWorkspaceExperienceRegistry").getWorkspaceExperiencePolicy(
              g,
            ).inlineRefresh &&
            o("useMAIBAWorkspaceInlineEntryPointCache").entryPointInstanceKey(
              C.entity,
            ) ===
              o("useMAIBAWorkspaceInlineEntryPointCache").entryPointInstanceKey(
                e,
              )
          ) {
            ((s.current = { entity: e, loaded: C.loaded }), p(e, C.loaded));
            return;
          }
          var b = o(
              "useMAIBAWorkspaceInlineEntryPointCache",
            ).entryPointInstanceKey(e),
            S = u.current === n ? c.current.get(b) : null,
            R = a.current.get(b);
          if (
            S != null &&
            (R === y ||
              o(
                "MAIBAWorkspaceExperienceRegistry",
              ).getWorkspaceExperiencePolicy(g).inlineRefresh)
          ) {
            var L =
              C != null &&
              o("useMAIBAWorkspaceInlineEntryPointCache").entryPointInstanceKey(
                C.entity,
              ) === b &&
              C.loaded !== S
                ? [C.loaded]
                : [];
            ((s.current = { entity: e, loaded: S }),
              (l.current = n),
              p(e, S),
              _(S),
              f(n),
              d(L));
            return;
          }
          (o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
            "experience_module_requested",
          ),
            o("MAIBAWorkspaceExperienceRegistry")
              .loadWorkspaceExperienceAsync(g)
              .then(function (C) {
                if (!(C == null || r.current !== h || i.current !== n)) {
                  o("MAIBAObservabilityUtils").addMAIBAWorkspaceLoadMarkerPoint(
                    "experience_module_loaded",
                  );
                  var S = s.current;
                  if (
                    S != null &&
                    o("useMAIBAWorkspaceInlineEntryPointCache").entryPointKey(
                      S.entity,
                    ) === y
                  ) {
                    p(e, S.loaded);
                    return;
                  }
                  var R = u.current === n ? c.current.get(b) : null,
                    L = u.current === n ? a.current.get(b) : null;
                  if (
                    R != null &&
                    (L === y ||
                      o(
                        "MAIBAWorkspaceExperienceRegistry",
                      ).getWorkspaceExperiencePolicy(g).inlineRefresh)
                  ) {
                    var E =
                      S != null &&
                      o(
                        "useMAIBAWorkspaceInlineEntryPointCache",
                      ).entryPointInstanceKey(S.entity) === b &&
                      S.loaded !== R
                        ? [S.loaded]
                        : [];
                    ((s.current = { entity: e, loaded: R }),
                      (l.current = n),
                      p(e, R),
                      _(R),
                      f(n),
                      d(E));
                    return;
                  }
                  var k = u.current === n ? c.current.get(b) : null,
                    I = C.loadExperienceEntryPoint(t, e, n);
                  if (I != null) {
                    var T = [];
                    if (S != null && S.loaded !== I) {
                      var D =
                          o(
                            "useMAIBAWorkspaceInlineEntryPointCache",
                          ).entryPointInstanceKey(S.entity) !== b,
                        x = D && v(S.loaded);
                      (D && !x && m(S.entity, S.loaded), x || T.push(S.loaded));
                    }
                    (k != null && k !== I && T.push(k),
                      (s.current = { entity: e, loaded: I }),
                      (l.current = n),
                      p(e, I),
                      _(I),
                      f(n),
                      d(T));
                  }
                }
              }));
        }
      }
    }
    function L(e) {
      var t = e.experienceStackRef,
        n = e.inlinePillMapConversationIDRef,
        r = e.inlinePillMapRef,
        o = e.recordConversationIDRef,
        a = e.recordRef,
        i = new Set(),
        l = a.current;
      (l != null && (i.add(l.loaded), (a.current = null)), (o.current = null));
      for (var s of r.current.values()) i.add(s);
      n.current = null;
      for (var u of t.current) i.add(u.loaded);
      t.current = [];
      for (var c of i) c.dispose();
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(90),
        n = e.children,
        r = e.externalConversationID,
        a = e.isCanvasOpen,
        i = e.isFullScreen,
        l = i === void 0 ? !1 : i,
        u = g(r),
        c = g(0),
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            entity: null,
            entityConversationID: null,
            userClosedSinceLastOpen: !1,
          }),
          (t[0] = d))
        : (d = t[0]);
      var m = h(d),
        f = m[0],
        C = m[1],
        v = g(null),
        E = g(null),
        $ = h(null),
        P = $[0],
        N = $[1],
        M = h(null),
        w = M[0],
        A = M[1],
        F = g(null),
        O = g(null),
        B;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = []), (t[1] = B))
        : (B = t[1]);
      var W = g(B),
        q = h(!1),
        U = q[0],
        V = q[1],
        H = o("RelayHooks").useRelayEnvironment(),
        G;
      t[2] !== H
        ? ((G = {
            getEnvironment: function () {
              return H;
            },
          }),
          (t[2] = H),
          (t[3] = G))
        : (G = t[3]);
      var z = G,
        j;
      t[4] !== z || t[5] !== r
        ? ((j = {
            entryPointLoadGenerationRef: c,
            environmentProvider: z,
            experienceStackRef: W,
            externalConversationID: r,
            prevConversationRef: u,
            recordConversationIDRef: O,
            recordRef: F,
          }),
          (t[4] = z),
          (t[5] = r),
          (t[6] = j))
        : (j = t[6]);
      var K = o(
          "useMAIBAWorkspaceInlineEntryPointCache",
        ).useMAIBAWorkspaceInlineEntryPointCache(j),
        Q = K.disposeUnownedEntryPoints,
        X = K.getLoadedEntryPointForEntity,
        Y = K.inlinePillEntryPointKeysRef,
        J = K.inlinePillMapConversationIDRef,
        Z = K.inlinePillMapRef,
        ee = K.inlinePillPreloadKeysRef,
        te = K.preloadExperienceEntryPoint,
        ne = K.removeInlinePillEntry,
        re = K.setInlinePillEntry,
        oe = K.setInlinePillMap,
        ae;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = new Map()), (t[7] = ae))
        : (ae = t[7]);
      var ie = g(ae),
        le;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = new Map()), (t[8] = le))
        : (le = t[8]);
      var se = g(le),
        ue = h(x),
        ce = ue[0],
        de = ue[1],
        me = g(!1),
        pe;
      t[9] !== r
        ? ((pe = function (t) {
            ((v.current = t),
              (E.current = r),
              C(function (e) {
                return babelHelpers.extends({}, e, {
                  entity: t,
                  entityConversationID: r,
                });
              }));
          }),
          (t[9] = r),
          (t[10] = pe))
        : (pe = t[10]);
      var _e = pe;
      o("useMAIBAWorkspaceCanvasLifecycle").useMAIBAWorkspaceCanvasLifecycle(
        r,
        f.entityConversationID === r ? f.entity : null,
        a,
      );
      var fe;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = function (t) {
            var e,
              n,
              r,
              a = t.workspace_id;
            if (
              a == null ||
              a === "" ||
              !o(
                "MAIBAWorkspaceExperienceRegistry",
              ).getWorkspaceExperiencePolicy(t.workspace_type)
                .resolveToLatestVersion
            )
              return t;
            var i = ((e = t.workspace_type) != null ? e : "") + ":" + a,
              l = se.current.get(i);
            if (
              l == null ||
              ((n = t.version) != null ? n : 0) >=
                ((r = l.version) != null ? r : 0)
            ) {
              var s, u, c, d;
              se.current.set(i, t);
              var m = ie.current.get(a);
              (m == null ||
                ((s = t.version) != null ? s : 0) >=
                  ((u = m.version) != null ? u : 0)) &&
                ie.current.set(a, t);
              var p = v.current;
              return (
                p != null &&
                  o(
                    "useMAIBAWorkspaceInlineEntryPointCache",
                  ).entryPointInstanceKey(p) ===
                    o(
                      "useMAIBAWorkspaceInlineEntryPointCache",
                    ).entryPointInstanceKey(t) &&
                  ((c = t.version) != null ? c : 0) >
                    ((d = p.version) != null ? d : 0) &&
                  ((v.current = t),
                  C(function (e) {
                    return babelHelpers.extends({}, e, { entity: t });
                  })),
                t
              );
            }
            return l;
          }),
          (t[11] = fe))
        : (fe = t[11]);
      var ge = fe,
        he;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((he = function (t) {
            var e,
              n,
              r = t.workspace_id;
            if (
              !(r == null || r === "") &&
              o(
                "MAIBAWorkspaceExperienceRegistry",
              ).getWorkspaceExperiencePolicy(t.workspace_type)
                .resolveToLatestVersion
            ) {
              var a = ((e = t.workspace_type) != null ? e : "") + ":" + r,
                i = (n = t.version) != null ? n : 0;
              de(function (e) {
                var t = e.get(a);
                if (t != null && t >= i) return e;
                var n = new Map(e);
                return (n.set(a, i), n);
              });
            }
          }),
          (t[12] = he))
        : (he = t[12]);
      var ye = he,
        Ce;
      t[13] !== ce
        ? ((Ce = function (t) {
            var e,
              n,
              r = t.workspace_id;
            if (
              r == null ||
              r === "" ||
              !o(
                "MAIBAWorkspaceExperienceRegistry",
              ).getWorkspaceExperiencePolicy(t.workspace_type)
                .resolveToLatestVersion
            )
              return !0;
            var a = ((e = t.workspace_type) != null ? e : "") + ":" + r,
              i = ce.get(a);
            return i == null || ((n = t.version) != null ? n : 0) >= i;
          }),
          (t[13] = ce),
          (t[14] = Ce))
        : (Ce = t[14]);
      var be = Ce,
        ve = h(null),
        Se = ve[0],
        Re = ve[1],
        Le;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = []), (t[15] = Le))
        : (Le = t[15]);
      var Ee = g(Le),
        ke;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = function (t) {
            ((Ee.current = [].concat(
              Ee.current.filter(function (e) {
                return e !== t;
              }),
              [t],
            )),
              Re(t));
          }),
          (t[16] = ke))
        : (ke = t[16]);
      var Ie = ke,
        Te;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = function (t) {
            var e;
            ((Ee.current = Ee.current.filter(function (e) {
              return e !== t;
            })),
              Re((e = Ee.current[Ee.current.length - 1]) != null ? e : null));
          }),
          (t[17] = Te))
        : (Te = t[17]);
      var De = Te,
        xe;
      t[18] !== r || t[19] !== a
        ? ((xe = function () {
            (a ||
              y.onReady(function (e) {
                e.startMAIBAWorkspaceLoad(r, v.current, "open_canvas");
              }),
              C(D),
              o("MAIBAChatAppUIActions").toggleMAIBAChatCanvasMode(!0));
          }),
          (t[18] = r),
          (t[19] = a),
          (t[20] = xe))
        : (xe = t[20]);
      var $e = xe,
        Pe;
      t[21] !== Q
        ? ((Pe = function () {
            (y.onReady(T),
              (v.current = null),
              C(I),
              o("MAIBAChatAppUIActions").toggleMAIBAChatCanvasMode(!1));
            var e = W.current.map(k);
            ((W.current = []), Q(e), V(!1));
          }),
          (t[21] = Q),
          (t[22] = Pe))
        : (Pe = t[22]);
      var Ne = Pe,
        Me;
      t[23] !== Q || t[24] !== z || t[25] !== r || t[26] !== Z || t[27] !== re
        ? ((Me = function () {
            var e = W.current;
            if (e.length !== 0) {
              var t = e.pop();
              if ((V(e.length > 0), t != null)) {
                var n = F.current;
                ((F.current = t),
                  (O.current = r),
                  (v.current = t.entity),
                  (E.current = r),
                  C(function (e) {
                    return babelHelpers.extends({}, e, {
                      entity: t.entity,
                      entityConversationID: r,
                    });
                  }),
                  N(t.loaded),
                  A(r),
                  n != null && Q([n.loaded]));
                var a = t.entity,
                  i = a.workspace_type;
                if (
                  !(
                    i == null ||
                    i === "" ||
                    !o(
                      "MAIBAWorkspaceExperienceRegistry",
                    ).getWorkspaceExperiencePolicy(i).refetchOnReturn
                  )
                ) {
                  var l = c.current;
                  o("MAIBAWorkspaceExperienceRegistry")
                    .loadWorkspaceExperienceAsync(i)
                    .then(function (e) {
                      if (!(e == null || c.current !== l || u.current !== r)) {
                        var t = F.current;
                        if (
                          !(
                            t == null ||
                            o(
                              "useMAIBAWorkspaceInlineEntryPointCache",
                            ).entryPointInstanceKey(t.entity) !==
                              o(
                                "useMAIBAWorkspaceInlineEntryPointCache",
                              ).entryPointInstanceKey(a)
                          )
                        ) {
                          var n = e.loadExperienceEntryPoint(z, a, r);
                          if (n != null) {
                            var i = Z.current.get(
                                o(
                                  "useMAIBAWorkspaceInlineEntryPointCache",
                                ).entryPointInstanceKey(a),
                              ),
                              s = { entity: a, loaded: n };
                            ((F.current = s),
                              (O.current = r),
                              re(a, n),
                              N(n),
                              A(r),
                              Q([t.loaded].concat(i == null ? [] : [i])));
                          }
                        }
                      }
                    });
                }
              }
            }
          }),
          (t[23] = Q),
          (t[24] = z),
          (t[25] = r),
          (t[26] = Z),
          (t[27] = re),
          (t[28] = Me))
        : (Me = t[28]);
      var we = Me,
        Ae;
      t[29] !== Q ||
      t[30] !== z ||
      t[31] !== r ||
      t[32] !== Y ||
      t[33] !== J ||
      t[34] !== Z ||
      t[35] !== ne ||
      t[36] !== re
        ? ((Ae = function (t) {
            R(t, z, r, c, Y, u, O, F, J, Z, Q, ne, re, N, A);
          }),
          (t[29] = Q),
          (t[30] = z),
          (t[31] = r),
          (t[32] = Y),
          (t[33] = J),
          (t[34] = Z),
          (t[35] = ne),
          (t[36] = re),
          (t[37] = Ae))
        : (Ae = t[37]);
      var Fe = Ae,
        Oe;
      t[38] !== Fe || t[39] !== _e
        ? ((Oe = function (t) {
            var e = F.current;
            (e != null && (W.current.push(e), V(!0)),
              (F.current = null),
              (O.current = null),
              _e(t),
              Fe(t));
          }),
          (t[38] = Fe),
          (t[39] = _e),
          (t[40] = Oe))
        : (Oe = t[40]);
      var Be = Oe,
        We;
      t[41] !== Be
        ? ((We = function (t) {
            var e = ie.current.get(t);
            return e == null ? !1 : (Be(e), !0);
          }),
          (t[41] = Be),
          (t[42] = We))
        : (We = t[42]);
      var qe = We,
        Ue;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ue = function (t) {
            var e;
            return (e = ie.current.get(t)) != null ? e : null;
          }),
          (t[43] = Ue))
        : (Ue = t[43]);
      var Ve = Ue,
        He;
      t[44] !== ce
        ? ((He = function (t) {
            var e,
              n,
              r = t.workspace_id;
            if (
              r == null ||
              r === "" ||
              !o(
                "MAIBAWorkspaceExperienceRegistry",
              ).getWorkspaceExperiencePolicy(t.workspace_type)
                .resolveToLatestVersion
            )
              return t;
            var a = ((e = t.workspace_type) != null ? e : "") + ":" + r,
              i = se.current.get(a),
              l = ce.get(a);
            return i == null ||
              (l != null && ((n = i.version) != null ? n : 0) < l)
              ? t
              : i;
          }),
          (t[44] = ce),
          (t[45] = He))
        : (He = t[45]);
      var Ge = He,
        ze;
      t[46] !== r || t[47] !== Fe || t[48] !== _e
        ? ((ze = function () {
            var e,
              t = F.current;
            if (!(t == null || O.current !== r)) {
              var n = t.entity,
                a = n.workspace_type;
              if (
                !(
                  a == null ||
                  !o(
                    "MAIBAWorkspaceExperienceRegistry",
                  ).getWorkspaceExperiencePolicy(a).inlineRefresh
                )
              ) {
                var i = babelHelpers.extends({}, n, {
                  version: ((e = n.version) != null ? e : 1) + 1,
                });
                (_e(i), Fe(i));
              }
            }
          }),
          (t[46] = r),
          (t[47] = Fe),
          (t[48] = _e),
          (t[49] = ze))
        : (ze = t[49]);
      var je = ze,
        Ke,
        Qe;
      (t[50] !== Y || t[51] !== J || t[52] !== Z || t[53] !== ee
        ? ((Ke = function () {
            var e = ee.current;
            return function () {
              ((c.current = c.current + 1),
                (Y.current = new Map()),
                e.clear(),
                L({
                  experienceStackRef: W,
                  inlinePillMapConversationIDRef: J,
                  inlinePillMapRef: Z,
                  recordConversationIDRef: O,
                  recordRef: F,
                }));
            };
          }),
          (Qe = [Y, J, Z, ee]),
          (t[50] = Y),
          (t[51] = J),
          (t[52] = Z),
          (t[53] = ee),
          (t[54] = Ke),
          (t[55] = Qe))
        : ((Ke = t[54]), (Qe = t[55])),
        p(Ke, Qe));
      var Xe, Ye;
      (t[56] !== r ||
      t[57] !== Y ||
      t[58] !== J ||
      t[59] !== Z ||
      t[60] !== ee ||
      t[61] !== oe
        ? ((Xe = function () {
            (u.current !== r &&
              ((c.current = c.current + 1),
              (Y.current = new Map()),
              ee.current.clear()),
              S({
                activeEntityRef: v,
                draftPreviewIDsRef: Ee,
                experienceStackRef: W,
                externalConversationID: r,
                inlinePillMapConversationIDRef: J,
                inlinePillMapRef: Z,
                latestWorkspaceByIDRef: ie,
                latestWorkspaceByTypeAndIDRef: se,
                prevConversationRef: u,
                publishedEntityConversationIDRef: E,
                recordConversationIDRef: O,
                recordRef: F,
                setCanNavigateBack: V,
                setInlinePillMap: oe,
                setLatestDraftPreviewId: Re,
                setLatestVersionByTypeAndID: de,
                setLoadedEntryPoint: N,
                setLoadedEntryPointConversationID: A,
                setState: C,
              }));
          }),
          (Ye = [r, Y, J, Z, ee, oe]),
          (t[56] = r),
          (t[57] = Y),
          (t[58] = J),
          (t[59] = Z),
          (t[60] = ee),
          (t[61] = oe),
          (t[62] = Xe),
          (t[63] = Ye))
        : ((Xe = t[62]), (Ye = t[63])),
        _(Xe, Ye));
      var Je = f.entityConversationID === r,
        Ze = w === r,
        et = Ze ? P : null,
        tt = Je ? f.entity : null,
        nt;
      t[64] !== a ||
      t[65] !== l ||
      t[66] !== f.userClosedSinceLastOpen ||
      t[67] !== tt
        ? ((nt = {
            entity: tt,
            isCanvasOpen: a,
            isFullScreen: l,
            userClosedSinceLastOpen: f.userClosedSinceLastOpen,
          }),
          (t[64] = a),
          (t[65] = l),
          (t[66] = f.userClosedSinceLastOpen),
          (t[67] = tt),
          (t[68] = nt))
        : (nt = t[68]);
      var rt;
      t[69] !== U ||
      t[70] !== Ne ||
      t[71] !== r ||
      t[72] !== Ge ||
      t[73] !== X ||
      t[74] !== be ||
      t[75] !== Se ||
      t[76] !== Fe ||
      t[77] !== we ||
      t[78] !== Be ||
      t[79] !== qe ||
      t[80] !== $e ||
      t[81] !== te ||
      t[82] !== _e ||
      t[83] !== je ||
      t[84] !== et ||
      t[85] !== nt
        ? ((rt = {
            canNavigateBack: U,
            closeCanvas: Ne,
            externalConversationID: r,
            getLatestWorkspaceEntity: Ge,
            getLoadedEntryPointForEntity: X,
            getWorkspaceById: Ve,
            isLatestWorkspaceVersion: be,
            isWidthTransitioningRef: me,
            latestDraftPreviewId: Se,
            loadedEntryPoint: et,
            loadExperienceEntryPoint: Fe,
            navigateBack: we,
            navigateToExperience: Be,
            navigateToWorkspaceId: qe,
            openCanvas: $e,
            preloadExperienceEntryPoint: te,
            publishWorkspace: _e,
            refreshOpenExperience: je,
            registerDraftPreview: Ie,
            registerWorkspaceVersion: ye,
            resolveLatestWorkspaceEntity: ge,
            state: nt,
            unregisterDraftPreview: De,
          }),
          (t[69] = U),
          (t[70] = Ne),
          (t[71] = r),
          (t[72] = Ge),
          (t[73] = X),
          (t[74] = be),
          (t[75] = Se),
          (t[76] = Fe),
          (t[77] = we),
          (t[78] = Be),
          (t[79] = qe),
          (t[80] = $e),
          (t[81] = te),
          (t[82] = _e),
          (t[83] = je),
          (t[84] = et),
          (t[85] = nt),
          (t[86] = rt))
        : (rt = t[86]);
      var ot = rt,
        at;
      return (
        t[87] !== n || t[88] !== ot
          ? ((at = s.jsx(b.Provider, { value: ot, children: n })),
            (t[87] = n),
            (t[88] = ot),
            (t[89] = at))
          : (at = t[89]),
        at
      );
    }
    function k(e) {
      return e.loaded;
    }
    function I(e) {
      return babelHelpers.extends({}, e, { userClosedSinceLastOpen: !0 });
    }
    function T(e) {
      e.cancelMAIBAWorkspaceLoad("canvas_closed");
    }
    function D(e) {
      return babelHelpers.extends({}, e, { userClosedSinceLastOpen: !1 });
    }
    function x() {
      return new Map();
    }
    function $() {
      return m(b);
    }
    function P() {
      var e = $(),
        t = e.externalConversationID;
      return t != null;
    }
    ((l.MAIBAWorkspaceCanvasProvider = E),
      (l.useMAIBAWorkspaceCanvas = $),
      (l.useIsMAIBAWorkspaceCanvasMounted = P));
  },
  98,
);
