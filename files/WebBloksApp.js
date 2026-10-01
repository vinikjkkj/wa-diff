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
        _ = e.params,
        b = _ === void 0 ? o("WebBloksUtils").EMPTY_OBJECT : _,
        v = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        S = r("useWebBloksAccessibilityModule")(),
        R = S.FocusAppWrapper,
        L = p(function () {
          var e;
          return (
            i != null
              ? (e = i)
              : ((e = new (r("WebBloksObjectSet"))(v)), f(e, a, u, b)),
            n && (n.current = e),
            e
          );
        }),
        E = L[0];
      c(
        function () {
          i != null && i.navigationManager.attachAndTriggerPopStateHandler();
        },
        [i],
      );
      var k = p(function () {
          return E.navigationManager.getVisibleScreens();
        }),
        I = k[0],
        T = I.modal,
        D = I.screens,
        x = k[1];
      c(
        function () {
          return (
            E.navigationManager.attachNavigationListeners(),
            E.navigationManager.screenChangeListener.on(x),
            function () {
              (E.navigationManager.screenChangeListener.off(x),
                E.navigationManager.destroy());
            }
          );
        },
        [E],
      );
      var $ = m(!0);
      (c(
        function () {
          if ($.current) $.current = !1;
          else {
            if (i != null) return;
            f(E, a, u, b);
          }
        },
        [E, a, u, b, i],
      ),
        r("useWebBloksRefreshListener")(E));
      var P = {};
      v.isRtl && (P = { direction: "rtl", textAlign: "right" });
      var N = r("useFoldingAddressBar")(D),
        M = d(
          function () {
            return v.embedded === !0
              ? g.bloksAppEmbedded
              : N
                ? o("WebBloksStyle").classNames(
                    g.bloksAppFoldingAddressBar,
                    y.bloksAppFoldingAddressBarDVH,
                  )
                : o("WebBloksStyle").classNames(
                    g.bloksAppFullscreen,
                    h.bloksAppFullscreenDVH,
                    v.nonFABViewportFit ? C.nonFABViewportFitRoot : null,
                  );
          },
          [v.embedded, v.nonFABViewportFit, N],
        ),
        w = d(
          function () {
            return D.map(function (e) {
              var t;
              return s.jsx(
                o("WebBloksScreenWrapper").ScreenWrapper,
                { screen: e, externalVariables: l },
                (t = e.screenIdWithStackIndex) != null ? t : e.screenId,
              );
            });
          },
          [D, l],
        ),
        A = s.jsx(R, {
          children: s.jsxs("div", {
            style: babelHelpers.extends(
              {
                fontFamily: o("WebBloksUtils").getWrapperFontFamily(
                  v.fontFamilyMappings,
                ),
              },
              P,
              N ? { WebkitOverflowScrolling: "touch" } : null,
            ),
            "data-testid": void 0,
            className: o("WebBloksStyle").classNames(
              o("WebBloksAppAccessibilityStyles").ACCESSIBILITY_STYLES.outlines,
              M,
            ),
            children: [
              w,
              T &&
                s.jsx(
                  r("WebBloksModalWrapper"),
                  { modal: T, externalVariables: l },
                  (t = T.screenIdWithStackIndex) != null ? t : T.screenId,
                ),
              s.jsx(r("WebBloksToastPresenter"), { objectSet: E }),
            ],
          }),
        });
      return (
        E.environment.disableErrorBoundary !== !0 &&
          (A = s.jsx(r("WebBloksErrorBoundary"), {
            logger: E.environment.logger,
            children: A,
          })),
        A
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
        bloksAppEmbedded: { height: "100%", width: "100%" },
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
