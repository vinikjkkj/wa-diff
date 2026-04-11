__d(
  "WebBloksScreenHost",
  [
    "WebBloksBind",
    "WebBloksComponentContext",
    "WebBloksExternalVariables",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useLayoutEffect,
      m = u.useMemo,
      p = u.useState;
    function _(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(49),
        a = e.externalVariables,
        i = e.isLoadingNode,
        l = e.screen,
        u = i === void 0 ? !1 : i,
        m;
      r[0] !== u || r[1] !== l
        ? ((m = function () {
            return new (o("WebBloksComponentContext").WebBloksComponentContext)(
              l.getTreeManager().bloksContext,
              l.options.ownerContext,
              u,
            );
          }),
          (r[0] = u),
          (r[1] = l),
          (r[2] = m))
        : (m = r[2]);
      var _ = p(m),
        g = _[0],
        h = g.renderNode,
        y;
      r[3] !== l
        ? ((y = function () {
            return o("WebBloksExternalVariables").getProcessedDataPropEntries(
              l.getTreeManager().initialTreeResources,
            );
          }),
          (r[3] = l),
          (r[4] = y))
        : (y = r[4]);
      var C = p(y),
        b = C[0],
        v;
      r[5] !== b || r[6] !== a || r[7] !== l.options.externalVariables
        ? ((v = function () {
            var e = new Map();
            return (
              o("WebBloksUtils").putAll(e, a),
              o("WebBloksUtils").putAll(e, l.options.externalVariables),
              o("WebBloksExternalVariables").getProcessedExternalVariables(e, b)
            );
          }),
          (r[5] = b),
          (r[6] = a),
          (r[7] = l.options.externalVariables),
          (r[8] = v))
        : (v = r[8]);
      var S = p(v),
        R = S[0],
        L = S[1],
        E;
      r[9] !== R || r[10] !== l
        ? ((E = function () {
            var e = l.getTreeManager();
            return o("WebBloksBind").bind(
              e.bloksContext,
              e.unboundModel,
              e.treeResourcesState,
              R,
            );
          }),
          (r[9] = R),
          (r[10] = l),
          (r[11] = E))
        : (E = r[11]);
      var k = p(E),
        I = k[0],
        T = k[1],
        D = p((t = l.options.initialContainer) == null ? void 0 : t.model),
        x = D[0],
        $ = D[1],
        P = p((n = l.options.initialContainer) == null ? void 0 : n.config),
        N = P[0],
        M = P[1],
        w,
        A;
      (r[12] !== l
        ? ((w = function () {
            l.setOnContainerUpdate(function (e, t) {
              ($(e), M(t));
            });
          }),
          (A = [l]),
          (r[12] = l),
          (r[13] = w),
          (r[14] = A))
        : ((w = r[13]), (A = r[14])),
        d(w, A));
      var F, O;
      (r[15] !== b || r[16] !== a || r[17] !== R || r[18] !== l
        ? ((F = function () {
            var e = f(R, a, b),
              t = e.needsUpdate,
              n = e.updatedExternalVariables;
            if (t) {
              L(n);
              var r = l.getTreeManager();
              T(
                o("WebBloksBind").bind(
                  r.bloksContext,
                  r.unboundModel,
                  r.treeResourcesState,
                  n,
                ),
              );
            }
          }),
          (O = [b, a, R, l]),
          (r[15] = b),
          (r[16] = a),
          (r[17] = R),
          (r[18] = l),
          (r[19] = F),
          (r[20] = O))
        : ((F = r[19]), (O = r[20])),
        c(F, O));
      var B, W;
      (r[21] !== I || r[22] !== l
        ? ((B = function () {
            l.getTreeManager().setCommittedBoundTree(I);
          }),
          (W = [l, I]),
          (r[21] = I),
          (r[22] = l),
          (r[23] = B),
          (r[24] = W))
        : ((B = r[23]), (W = r[24])),
        c(B, W));
      var q, U;
      (r[25] !== R || r[26] !== l
        ? ((q = function () {
            var e = l.getTreeManager(),
              t = function (n) {
                T(
                  o("WebBloksBind").bind(
                    e.bloksContext,
                    n.unboundModel,
                    n.treeResourcesState,
                    R,
                    e.bindResult,
                  ),
                );
              };
            return (
              e.onNewTreeAndVariablesListener.on(t),
              function () {
                return e.onNewTreeAndVariablesListener.off(t);
              }
            );
          }),
          (U = [R, l]),
          (r[25] = R),
          (r[26] = l),
          (r[27] = q),
          (r[28] = U))
        : ((q = r[27]), (U = r[28])),
        c(q, U));
      var V, H;
      (r[29] !== u
        ? ((V = function () {
            u ||
              o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
                "--web-bloks-ttrc-end",
              );
          }),
          (H = [u]),
          (r[29] = u),
          (r[30] = V),
          (r[31] = H))
        : ((V = r[30]), (H = r[31])),
        c(V, H));
      var G;
      r[32] !== x || r[33] !== l.objectSet
        ? ((G =
            x != null
              ? l.objectSet.getContainerConfigModuleForName(x.styleId)
                  .ContainerComponent
              : null),
          (r[32] = x),
          (r[33] = l.objectSet),
          (r[34] = G))
        : (G = r[34]);
      var z = G,
        j,
        K;
      r[35] !== I.boundModel || r[36] !== h
        ? ((K = h(I.boundModel)),
          (r[35] = I.boundModel),
          (r[36] = h),
          (r[37] = K))
        : (K = r[37]);
      var Q = K;
      if (z != null && N != null) {
        var X;
        (r[38] !== z || r[39] !== N || r[40] !== Q
          ? ((X = s.jsx(z, { containerConfig: N, children: Q })),
            (r[38] = z),
            (r[39] = N),
            (r[40] = Q),
            (r[41] = X))
          : (X = r[41]),
          (j = X));
      } else j = Q;
      var Y = j,
        J = l.objectSet.mountEffectsQueue,
        Z,
        ee;
      (r[42] !== Y || r[43] !== J
        ? ((Z = function () {
            Y != null && !J.isEmpty() && J.runEffects();
          }),
          (ee = [J, Y]),
          (r[42] = Y),
          (r[43] = J),
          (r[44] = Z),
          (r[45] = ee))
        : ((Z = r[44]), (ee = r[45])),
        c(Z, ee));
      var te;
      return (
        r[46] !== g || r[47] !== Y
          ? ((te = s.jsx(
              o("WebBloksComponentContext").WebBloksComponentContextContext
                .Provider,
              { value: g, children: Y },
            )),
            (r[46] = g),
            (r[47] = Y),
            (r[48] = te))
          : (te = r[48]),
        te
      );
    }
    function f(e, t, n) {
      var r = !1;
      if (!t) return { needsUpdate: r, updatedExternalVariables: e };
      var o = e;
      for (var a of t.entries()) {
        var i = a[0],
          l = a[1],
          s = n.get(i);
        s != null && o.get(s) !== l && ((r = !0), o.set(s, l));
      }
      return { needsUpdate: r, updatedExternalVariables: o };
    }
    l.default = _;
  },
  98,
);
