__d(
  "WebBloksScreenHost",
  [
    "WebBloksBind",
    "WebBloksComponentContext",
    "WebBloksExternalVariables",
    "WebBloksUtils",
    "react",
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
        r = e.externalVariables,
        a = e.isLoadingNode,
        i = a === void 0 ? !1 : a,
        l = e.screen,
        u = p(function () {
          return new (o("WebBloksComponentContext").WebBloksComponentContext)(
            l.getTreeManager().bloksContext,
            l.options.ownerContext,
            i,
          );
        }),
        _ = u[0],
        g = _.renderNode,
        h = p(function () {
          return o("WebBloksExternalVariables").getProcessedDataPropEntries(
            l.getTreeManager().initialTreeResources,
          );
        }),
        y = h[0],
        C = p(function () {
          var e = new Map();
          return (
            o("WebBloksUtils").putAll(e, r),
            o("WebBloksUtils").putAll(e, l.options.externalVariables),
            o("WebBloksExternalVariables").getProcessedExternalVariables(e, y)
          );
        }),
        b = C[0],
        v = C[1],
        S = p(function () {
          var e = l.getTreeManager();
          return o("WebBloksBind").bind(
            e.bloksContext,
            e.unboundModel,
            e.treeResourcesState,
            b,
          );
        }),
        R = S[0],
        L = S[1],
        E = p((t = l.options.initialContainer) == null ? void 0 : t.model),
        k = E[0],
        I = E[1],
        T = p((n = l.options.initialContainer) == null ? void 0 : n.config),
        D = T[0],
        x = T[1];
      (d(
        function () {
          l.setOnContainerUpdate(function (e, t) {
            (I(e), x(t));
          });
        },
        [l],
      ),
        c(
          function () {
            var e = f(b, r, y),
              t = e.needsUpdate,
              n = e.updatedExternalVariables;
            if (t) {
              v(n);
              var a = l.getTreeManager();
              L(
                o("WebBloksBind").bind(
                  a.bloksContext,
                  a.unboundModel,
                  a.treeResourcesState,
                  n,
                ),
              );
            }
          },
          [y, r, b, l],
        ),
        d(
          function () {
            l.getTreeManager().setCommittedBoundTree(R);
          },
          [l, R],
        ),
        c(
          function () {
            var e = l.getTreeManager();
            function t(t) {
              L(
                o("WebBloksBind").bind(
                  e.bloksContext,
                  t.unboundModel,
                  t.treeResourcesState,
                  b,
                  e.bindResult,
                ),
              );
            }
            return (
              e.onNewTreeAndVariablesListener.on(t),
              function () {
                return e.onNewTreeAndVariablesListener.off(t);
              }
            );
          },
          [b, l],
        ),
        c(
          function () {
            i ||
              o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
                "--web-bloks-ttrc-end",
              );
          },
          [i],
        ));
      var $ =
          k != null
            ? l.objectSet.getContainerConfigModuleForName(k.getWireStyleId())
                .ContainerComponent
            : null,
        P = m(
          function () {
            var e = g(R.boundModel);
            return $ != null && D != null
              ? s.jsx($, { containerConfig: D, children: e })
              : e;
          },
          [g, R.boundModel, $, D],
        ),
        N = l.objectSet.mountEffectsQueue;
      return (
        c(
          function () {
            P != null && !N.isEmpty() && N.runEffects();
          },
          [N, P],
        ),
        s.jsx(
          o("WebBloksComponentContext").WebBloksComponentContextContext
            .Provider,
          { value: _, children: P },
        )
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
