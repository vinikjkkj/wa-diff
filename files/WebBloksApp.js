__d(
  "WebBloksApp",
  [
    "WebBloksAppAccessibilityStyles",
    "WebBloksEnvironmentContext",
    "WebBloksErrorBoundary",
    "WebBloksErrors",
    "WebBloksModalWrapper",
    "WebBloksObjectSet",
    "WebBloksParseResult",
    "WebBloksSSRUtils",
    "WebBloksScreenWrapper",
    "WebBloksStyle",
    "WebBloksToastPresenter",
    "WebBloksUtils",
    "react",
    "useFoldingAddressBar",
    "useWebBloksAccessibilityModule",
    "useWebBloksRefreshListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t,
        n = e._objectSetRef,
        a = e.appId,
        i = e.externalObjectSet,
        l = e.externalVariables,
        u = e.node,
        _ = e.onClose,
        b = e.params,
        v = b === void 0 ? o("WebBloksUtils").EMPTY_OBJECT : b,
        S = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        R = r("useWebBloksAccessibilityModule")(),
        L = R.FocusAppWrapper,
        E = p(function () {
          var e;
          return (
            i != null
              ? (e = i)
              : ((e = new (r("WebBloksObjectSet"))(S)), f(e, a, u, v)),
            n && (n.current = e),
            e
          );
        }),
        k = E[0];
      c(
        function () {
          i != null && i.navigationManager.attachAndTriggerPopStateHandler();
        },
        [i],
      );
      var I = p(function () {
          return k.navigationManager.getVisibleScreens();
        }),
        T = I[0],
        D = T.modal,
        x = T.screens,
        $ = I[1],
        P = m(!1);
      (c(
        function () {
          x.length > 0 || D != null
            ? (P.current = !0)
            : P.current && ((P.current = !1), _ == null || _());
        },
        [D, _, x.length],
      ),
        c(
          function () {
            return (
              k.navigationManager.attachNavigationListeners(),
              k.navigationManager.screenChangeListener.on($),
              function () {
                (k.navigationManager.screenChangeListener.off($),
                  k.navigationManager.destroy());
              }
            );
          },
          [k],
        ));
      var N = m(!0);
      (c(
        function () {
          if (N.current) N.current = !1;
          else {
            if (i != null) return;
            f(k, a, u, v);
          }
        },
        [k, a, u, v, i],
      ),
        r("useWebBloksRefreshListener")(k));
      var M = {};
      S.isRtl && (M = { direction: "rtl", textAlign: "right" });
      var w = r("useFoldingAddressBar")(x),
        A = d(
          function () {
            return S.embedded === !0
              ? g.bloksAppEmbedded
              : w
                ? o("WebBloksStyle").classNames(
                    g.bloksAppFoldingAddressBar,
                    y.bloksAppFoldingAddressBarDVH,
                  )
                : o("WebBloksStyle").classNames(
                    g.bloksAppFullscreen,
                    h.bloksAppFullscreenDVH,
                    S.nonFABViewportFit ? C.nonFABViewportFitRoot : null,
                  );
          },
          [S.embedded, S.nonFABViewportFit, w],
        ),
        F = d(
          function () {
            return x.map(function (e) {
              var t;
              return s.jsx(
                o("WebBloksScreenWrapper").ScreenWrapper,
                { screen: e, externalVariables: l },
                (t = e.screenIdWithStackIndex) != null ? t : e.screenId,
              );
            });
          },
          [x, l],
        ),
        O = s.jsx(L, {
          children: s.jsxs("div", {
            style: babelHelpers.extends(
              {
                fontFamily: o("WebBloksUtils").getWrapperFontFamily(
                  S.fontFamilyMappings,
                ),
              },
              M,
              w ? { WebkitOverflowScrolling: "touch" } : null,
            ),
            "data-testid": void 0,
            className: o("WebBloksStyle").classNames(
              o("WebBloksAppAccessibilityStyles").ACCESSIBILITY_STYLES.outlines,
              A,
            ),
            children: [
              F,
              D &&
                s.jsx(
                  r("WebBloksModalWrapper"),
                  { modal: D, externalVariables: l },
                  (t = D.screenIdWithStackIndex) != null ? t : D.screenId,
                ),
              s.jsx(r("WebBloksToastPresenter"), { objectSet: k }),
            ],
          }),
        });
      return (
        k.environment.disableErrorBoundary !== !0 &&
          (O = s.jsx(r("WebBloksErrorBoundary"), {
            logger: k.environment.logger,
            children: O,
          })),
        O
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n, a) {
      if (t == null && n == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Both appId and node are null while creating initial screen",
        );
      if (
        (e.navigationManager.getScreenCount() +
          e.navigationManager.getModalCount() >
          0 && e.navigationManager.close("close_all"),
        n != null)
      )
        if (n instanceof r("WebBloksParseResult"))
          e.createInitialScreenWithParseResult(n, a);
        else if (n.screen_query_payload != null)
          e.createInitialScreenWithScreenQuery(n);
        else return e.createInitialScreenWithAppResponse(n, a);
      else if (t != null) return e.createInitialScreenWithAppId(t, a);
    }
    var g = o("WebBloksStyle").createStyles({
        bloksAppEmbedded: {
          position: "relative",
          height: "100%",
          width: "100%",
        },
        bloksAppFullscreen: { height: "100vh", width: "100%" },
        bloksAppFoldingAddressBar: {
          height: "auto !important",
          minHeight: "100vh !important",
          width: "100%",
          overflow: "visible !important",
          touchAction: "manipulation",
        },
      }),
      h = o("WebBloksStyle").createStylesIfSupported(
        { key: "height", value: "100dvh", type: "regular" },
        { bloksAppFullscreenDVH: { height: "100dvh !important" } },
      ),
      y = o("WebBloksStyle").createStylesIfSupported(
        { key: "min-height", value: "100dvh", type: "regular" },
        { bloksAppFoldingAddressBarDVH: { minHeight: "100dvh !important" } },
      ),
      C = o("WebBloksStyle").createStylesIfSupported(
        { key: "height", value: "100svh", type: "regular" },
        {
          nonFABViewportFitRoot: {
            height: "100svh !important",
            overflow: "hidden",
          },
        },
      ),
      b = { width: "100%", height: "100%" };
    ((l.WebBloksApp = _),
      (l.createInitialScreenForObjectSet = f),
      (l.bloksRootStyles = b));
  },
  98,
);
