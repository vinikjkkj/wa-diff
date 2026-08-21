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
      o === void 0 && (o = {});
      var a = o,
        l = a.uiComponents,
        s = l === void 0 ? {} : l,
        c = a.disableReactTransition,
        b = c === void 0 ? !1 : c,
        v = a.useLegacyHidden;
      function S(o) {
        var a,
          i,
          l = f(function () {
            return e.getCurrentRouterState();
          }),
          c = l[0],
          S = l[1],
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
          $ = _(c),
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
              e.markNavigationAsCommitted_INTERNAL_ONLY(c.routeKey);
            },
            [c.routeKey],
          ));
        var F = e.dispatcher,
          O = p(
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
          B = p(
            function () {
              return b
                ? y
                : P == null || P === c
                  ? { hidePageTransitioningLoadingState: w, loading: D }
                  : {
                      currentState: c,
                      hidePageTransitioningLoadingState: w,
                      loading: D,
                      nextState: P,
                    };
            },
            [w, P, c, D],
          ),
          W = o.children;
        return u.jsx(r("CometHiddenAPIContextProvider"), {
          hiddenAPIOverride: v,
          children: u.jsx(r("CometRouterUIComponentContext").Provider, {
            value: s,
            children: u.jsx(r("CometRouterDispatcherContext").Provider, {
              value: O,
              children: u.jsx(
                r("CometRouterLoadingContextInternals_DO_NOT_USE").Provider,
                {
                  value: B,
                  children: u.jsx(r("CometRouterStateContext").Provider, {
                    value: c,
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
                                      (a = c.pushViewStack) != null ? a : h,
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
                                                  c,
                                                ).topNavType) != null
                                                ? i
                                                : "default",
                                            children: u.jsx(C, {
                                              children:
                                                typeof W == "function"
                                                  ? W(c)
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
      return ((S.displayName = S.name + " [from " + i.id + "]"), S);
    }
    l.default = b;
  },
  98,
);
