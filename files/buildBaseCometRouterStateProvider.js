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
    function b(e, t, n) {
      var o = n.disableReactTransition,
        a = o === void 0 ? !1 : o,
        l = n.uiComponents,
        s = n.useLegacyHidden;
      function c(n) {
        var o,
          i,
          c = f(function () {
            return e.getCurrentRouterState();
          }),
          b = c[0],
          v = c[1],
          S = f(function () {
            return e.getMaintainedRouteState();
          }),
          R = S[0],
          L = S[1],
          E = t(),
          k = E[0],
          I = g(),
          T = I[0],
          D = I[1],
          x = _(b),
          $ = x[0],
          P = x[1],
          N = _(!1),
          M = N[0],
          w = N[1];
        (d(
          function () {
            var t = e.getCurrentRouterState(),
              n = e.getMaintainedRouteState();
            (v(t), L(n));
            var r = e.listen(function (t, n, r) {
                var o = e.getCurrentRouterState(),
                  a = e.getMaintainedRouteState();
                t === !0
                  ? D(function () {
                      (P(o), v(o), L(a), n == null || n(!0), r == null || r());
                    })
                  : (v(o), L(a), n == null || n(!0));
              }),
              o = e.setUnloadListener(function (e, t, n, r, o, a, i) {
                k({
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
          [D, P, k],
        ),
          m(
            function () {
              e.markNavigationAsCommitted_INTERNAL_ONLY(b.routeKey);
            },
            [b.routeKey],
          ));
        var A = e.dispatcher,
          F = p(
            function () {
              return a
                ? A
                : A.withOverrides(function (e) {
                    return {
                      go: function (n, r) {
                        D(async function () {
                          ((r == null
                            ? void 0
                            : r.hidePageTransitioningLoadingState) === !0 &&
                            w(!0),
                            await e.goAsync(n, r));
                        });
                      },
                      goTo: function (n, r) {
                        D(async function () {
                          ((r == null
                            ? void 0
                            : r.hidePageTransitioningLoadingState) === !0 &&
                            w(!0),
                            await e.goToAsync(n, r));
                        });
                      },
                    };
                  });
            },
            [A, w, D],
          ),
          O = p(
            function () {
              return a
                ? y
                : $ == null || $ === b
                  ? { hidePageTransitioningLoadingState: M, loading: T }
                  : {
                      currentState: b,
                      hidePageTransitioningLoadingState: M,
                      loading: T,
                      nextState: $,
                    };
            },
            [M, $, b, T],
          ),
          B = n.children;
        return u.jsx(r("CometHiddenAPIContextProvider"), {
          hiddenAPIOverride: s,
          children: u.jsx(r("CometRouterUIComponentContext").Provider, {
            value: l,
            children: u.jsx(r("CometRouterDispatcherContext").Provider, {
              value: F,
              children: u.jsx(
                r("CometRouterLoadingContextInternals_DO_NOT_USE").Provider,
                {
                  value: O,
                  children: u.jsx(r("CometRouterStateContext").Provider, {
                    value: b,
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
                                value: R,
                                children: u.jsx(
                                  r("CometRouterPushViewStackContext").Provider,
                                  {
                                    value:
                                      (o = b.pushViewStack) != null ? o : h,
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
                                                  b,
                                                ).topNavType) != null
                                                ? i
                                                : "default",
                                            children: u.jsx(C, {
                                              children:
                                                typeof B == "function"
                                                  ? B(b)
                                                  : B,
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
      return ((c.displayName = c.name + " [from " + i.id + "]"), c);
    }
    l.default = b;
  },
  98,
);
