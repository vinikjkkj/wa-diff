__d(
  "buildBaseCometRouterStateProvider",
  [
    "CometHiddenAPIContextProvider",
    "CometPassiveGetRouterStateContext",
    "CometPassiveGetRouterStatusContext",
    "CometRouteStoreContext",
    "CometRouterDispatcherContext",
    "CometRouterFocusManager.react",
    "CometRouterLoadingContextInternals_DO_NOT_USE",
    "CometRouterMaintainedRoutesStateContext",
    "CometRouterPushViewStackContext",
    "CometRouterRouteTopNavTypeContext",
    "CometRouterStateContext",
    "CometRouterUIComponentContext",
    "asyncToGeneratorRuntime",
    "getTopMostRoute",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useLayoutEffect,
      m = u.useMemo,
      p = u.useOptimistic,
      _ = u.useState,
      f = u.useTransition,
      g = [],
      h = { loading: !1 };
    function y(e, t, a) {
      a === void 0 && (a = {});
      var l = a,
        u = l.uiComponents,
        y = u === void 0 ? {} : u,
        C = l.disableReactTransition,
        b = C === void 0 ? !1 : C,
        v = l.useLegacyHidden;
      function S(a) {
        var i,
          l,
          u = _(function () {
            return e.getCurrentRouterState();
          }),
          C = u[0],
          S = u[1],
          R = _(function () {
            return e.getMaintainedRouteState();
          }),
          L = R[0],
          E = R[1],
          k = t(),
          I = k[0],
          T = f(),
          D = T[0],
          x = T[1],
          $ = p(C),
          P = $[0],
          N = $[1],
          M = p(!1),
          w = M[0],
          A = M[1];
        (c(
          function () {
            var t = e.getCurrentRouterState(),
              n = e.getMaintainedRouteState();
            (S(t), E(n));
            var r = e.listen(function (t, n, r) {
                var o = e.getCurrentRouterState(),
                  a = e.getMaintainedRouteState();
                t === !0
                  ? x(function () {
                      (N(o), S(o), E(a), n == null || n(!0), r == null || r());
                    })
                  : (S(o), E(a), n == null || n(!0));
              }),
              o = e.setUnloadListener(function (e, t, n, r, o, a, i) {
                I({
                  body: a,
                  cancel: n,
                  confirm: e,
                  onCloseButtonPress: i,
                  primaryAction: t,
                  secondaryAction: r,
                  title: o,
                });
              });
            return function () {
              (r.cancel(), o.cancel());
            };
          },
          [x, N, I],
        ),
          d(
            function () {
              e.markNavigationAsCommitted_INTERNAL_ONLY(C.routeKey);
            },
            [C.routeKey],
          ));
        var F = e.dispatcher,
          O = m(
            function () {
              return b
                ? F
                : F.withOverrides(function (e) {
                    return {
                      go: function (r, o) {
                        x(
                          n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              ((o == null
                                ? void 0
                                : o.hidePageTransitioningLoadingState) === !0 &&
                                A(!0),
                                yield e.goAsync(r, o));
                            },
                          ),
                        );
                      },
                      goTo: function (r, o) {
                        x(
                          n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              ((o == null
                                ? void 0
                                : o.hidePageTransitioningLoadingState) === !0 &&
                                A(!0),
                                yield e.goToAsync(r, o));
                            },
                          ),
                        );
                      },
                    };
                  });
            },
            [F, A, x],
          ),
          B = m(
            function () {
              return b
                ? h
                : P == null || P === C
                  ? { hidePageTransitioningLoadingState: w, loading: D }
                  : {
                      currentState: C,
                      hidePageTransitioningLoadingState: w,
                      loading: D,
                      nextState: P,
                    };
            },
            [w, P, C, D],
          ),
          W = a.children;
        return s.jsx(r("CometHiddenAPIContextProvider"), {
          hiddenAPIOverride: v,
          children: s.jsx(r("CometRouterUIComponentContext").Provider, {
            value: y,
            children: s.jsx(r("CometRouterDispatcherContext").Provider, {
              value: O,
              children: s.jsx(
                r("CometRouterLoadingContextInternals_DO_NOT_USE").Provider,
                {
                  value: B,
                  children: s.jsx(r("CometRouterStateContext").Provider, {
                    value: C,
                    children: s.jsx(
                      r("CometPassiveGetRouterStateContext").Provider,
                      {
                        value: e.getCurrentRouterState,
                        children: s.jsx(
                          r("CometPassiveGetRouterStatusContext").Provider,
                          {
                            value: e.getCurrentRouterStatus,
                            children: s.jsx(
                              r("CometRouterMaintainedRoutesStateContext")
                                .Provider,
                              {
                                value: L,
                                children: s.jsx(
                                  r("CometRouterPushViewStackContext").Provider,
                                  {
                                    value:
                                      (i = C.pushViewStack) != null ? i : g,
                                    children: s.jsx(
                                      r("CometRouteStoreContext").Provider,
                                      {
                                        value: e.store,
                                        children: s.jsx(
                                          r("CometRouterRouteTopNavTypeContext")
                                            .Provider,
                                          {
                                            value:
                                              (l =
                                                r("getTopMostRoute")(
                                                  C,
                                                ).topNavType) != null
                                                ? l
                                                : "default",
                                            children: s.jsx(
                                              o("CometRouterFocusManager.react")
                                                .CometRouterFocusManager,
                                              {
                                                children:
                                                  typeof W == "function"
                                                    ? W(C)
                                                    : W,
                                              },
                                            ),
                                          },
                                        ),
                                      },
                                    ),
                                  },
                                ),
                              },
                            ),
                          },
                        ),
                      },
                    ),
                  }),
                },
              ),
            }),
          }),
        });
      }
      return ((S.displayName = S.name + " [from " + i.id + "]"), S);
    }
    l.default = y;
  },
  98,
);
