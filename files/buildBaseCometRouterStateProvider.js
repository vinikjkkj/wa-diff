__d(
  "buildBaseCometRouterStateProvider",
  [
    "CometHiddenAPIContextProvider",
    "CometPassiveGetRouterStateContext",
    "CometPassiveGetRouterStatusContext",
    "CometRouteStoreContext",
    "CometRouterDispatcherContext",
    "CometRouterLoadingContextInternals_DO_NOT_USE",
    "CometRouterMaintainedRoutesStateContext",
    "CometRouterPushViewStackContext",
    "CometRouterRouteTopNavTypeContext",
    "CometRouterStateContext",
    "CometRouterUIComponentContext",
    "asyncToGeneratorRuntime",
    "cr:5632",
    "getTopMostRoute",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useLayoutEffect,
      p = c.useMemo,
      _ = c.useOptimistic,
      f = c.useState,
      g = c.useTransition,
      h = [],
      y = { loading: !1 },
      C = (e = n("cr:5632")) != null ? e : u.Fragment;
    function b(e, t, o) {
      var a = o.disableReactTransition,
        l = a === void 0 ? !1 : a,
        s = o.uiComponents,
        c = o.useLegacyHidden;
      function b(o) {
        var a,
          i,
          b = f(function () {
            return e.getCurrentRouterState();
          }),
          v = b[0],
          S = b[1],
          R = f(function () {
            return e.getMaintainedRouteState();
          }),
          L = R[0],
          E = R[1],
          k = t(),
          I = k[0],
          T = g(),
          D = T[0],
          x = T[1],
          $ = _(v),
          P = $[0],
          N = $[1],
          M = _(!1),
          w = M[0],
          A = M[1];
        (d(
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
          m(
            function () {
              e.markNavigationAsCommitted_INTERNAL_ONLY(v.routeKey);
            },
            [v.routeKey],
          ));
        var F = e.dispatcher,
          O = p(
            function () {
              return l
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
          B = p(
            function () {
              return l
                ? y
                : P == null || P === v
                  ? { hidePageTransitioningLoadingState: w, loading: D }
                  : {
                      currentState: v,
                      hidePageTransitioningLoadingState: w,
                      loading: D,
                      nextState: P,
                    };
            },
            [w, P, v, D],
          ),
          W = o.children;
        return u.jsx(r("CometHiddenAPIContextProvider"), {
          hiddenAPIOverride: c,
          children: u.jsx(r("CometRouterUIComponentContext").Provider, {
            value: s,
            children: u.jsx(r("CometRouterDispatcherContext").Provider, {
              value: O,
              children: u.jsx(
                r("CometRouterLoadingContextInternals_DO_NOT_USE").Provider,
                {
                  value: B,
                  children: u.jsx(r("CometRouterStateContext").Provider, {
                    value: v,
                    children: u.jsx(
                      r("CometPassiveGetRouterStateContext").Provider,
                      {
                        value: e.getCurrentRouterState,
                        children: u.jsx(
                          r("CometPassiveGetRouterStatusContext").Provider,
                          {
                            value: e.getCurrentRouterStatus,
                            children: u.jsx(
                              r("CometRouterMaintainedRoutesStateContext")
                                .Provider,
                              {
                                value: L,
                                children: u.jsx(
                                  r("CometRouterPushViewStackContext").Provider,
                                  {
                                    value:
                                      (a = v.pushViewStack) != null ? a : h,
                                    children: u.jsx(
                                      r("CometRouteStoreContext").Provider,
                                      {
                                        value: e.store,
                                        children: u.jsx(
                                          r("CometRouterRouteTopNavTypeContext")
                                            .Provider,
                                          {
                                            value:
                                              (i =
                                                r("getTopMostRoute")(
                                                  v,
                                                ).topNavType) != null
                                                ? i
                                                : "default",
                                            children: u.jsx(C, {
                                              children:
                                                typeof W == "function"
                                                  ? W(v)
                                                  : W,
                                            }),
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
      return ((b.displayName = b.name + " [from " + i.id + "]"), b);
    }
    l.default = b;
  },
  98,
);
