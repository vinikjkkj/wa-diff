__d(
  "cometRouterBuildEntrypointContainersForRoute",
  ["getTimeSpentDataFromConfig", "getTopMostRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null &&
        (t == null ? void 0 : t.getHash()) != null &&
        (t == null ? void 0 : t.getHash()) === e.getHash()
        ? e
        : t;
    }
    function s(t, n, o, a, i, l, s, u, c, d) {
      var m,
        p = babelHelpers.extends({}, i(), { focusReturnRef: null }),
        _ = null,
        f = null,
        g = null,
        h = null,
        y = t.target,
        C = y.route,
        b = y.view,
        v = (m = t.modal) != null ? m : {},
        S = v.route,
        R = v.view;
      if (
        b &&
        ((R == null ? void 0 : R.entryPoint) != null || b.entryPoint != null)
      ) {
        var L,
          E,
          k =
            (L = a == null ? void 0 : a.usePrefetchedEntrypointForRouting()) !=
            null
              ? L
              : {},
          I = k.mainEntryPointContainer,
          T = k.modalEntryPointContainer,
          D = I == null ? void 0 : I.getInput(),
          x = D == null ? void 0 : D.preloadParams.timeSpentMetaData;
        if (
          ((f =
            (E = x != null ? x : u) != null
              ? E
              : r("getTimeSpentDataFromConfig")(
                  C,
                  o,
                  r("getTopMostRoute")(i()),
                  n,
                )),
          (_ = e(
            I,
            s(l(C), b, {
              passthroughProps: o,
              routeParams: C.params,
              routeProps: b.props,
              timeSpentMetaData: f,
            }),
          )),
          S != null && R != null)
        ) {
          var $,
            P = T == null ? void 0 : T.getInput(),
            N = P == null ? void 0 : P.preloadParams.timeSpentMetaData;
          ((h =
            ($ = N != null ? N : c) != null
              ? $
              : r("getTimeSpentDataFromConfig")(
                  S,
                  o,
                  r("getTopMostRoute")(i()),
                  n,
                )),
            (g = e(
              T,
              s(l(S), R, {
                passthroughProps: o,
                routeParams: S.params,
                routeProps: R.props,
                timeSpentMetaData: h,
              }),
            )));
        }
        var M = p.main.entryPointContainer;
        t.action === "loadTab" &&
          ((_ = e(M, _)),
          d != null && _ != null && (_ = e(d.entryPointContainer, _)));
      }
      return {
        mainEntryPointContainer: _,
        mainTimeSpentMetaData: f,
        modalEntryPointContainer: g,
        modalTimeSpentMetaData: h,
      };
    }
    l.default = s;
  },
  98,
);
