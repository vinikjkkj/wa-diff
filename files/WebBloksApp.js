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
        C = _ === void 0 ? o("WebBloksUtils").EMPTY_OBJECT : _,
        b = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        v = r("useWebBloksAccessibilityModule")(),
        S = v.FocusAppWrapper,
        R = p(function () {
          var e;
          return (
            i != null
              ? (e = i)
              : ((e = new (r("WebBloksObjectSet"))(b)), f(e, a, u, C)),
            n && (n.current = e),
            e
          );
        }),
        L = R[0];
      c(
        function () {
          i != null && i.navigationManager.attachAndTriggerPopStateHandler();
        },
        [i],
      );
      var E = p(function () {
          return L.navigationManager.getVisibleScreens();
        }),
        k = E[0],
        I = k.modal,
        T = k.screens,
        D = E[1];
      c(
        function () {
          return (
            L.navigationManager.screenChangeListener.on(D),
            function () {
              (L.navigationManager.screenChangeListener.off(D),
                L.navigationManager.destroy());
            }
          );
        },
        [L],
      );
      var x = m(!0);
      (c(
        function () {
          if (x.current) x.current = !1;
          else {
            if (i != null) return;
            f(L, a, u, C);
          }
        },
        [L, a, u, C, i],
      ),
        r("useWebBloksRefreshListener")(L));
      var $ = {};
      b.isRtl && ($ = { direction: "rtl", textAlign: "right" });
      var P = r("useFoldingAddressBar")(T),
        N = d(
          function () {
            return b.embedded === !0
              ? g.bloksAppEmbedded
              : P
                ? o("WebBloksStyle").classNames(
                    g.bloksAppFoldingAddressBar,
                    y.bloksAppFoldingAddressBarDVH,
                  )
                : o("WebBloksStyle").classNames(
                    g.bloksAppFullscreen,
                    h.bloksAppFullscreenDVH,
                  );
          },
          [b.embedded, P],
        ),
        M = d(
          function () {
            return T.map(function (e) {
              var t;
              return s.jsx(
                o("WebBloksScreenWrapper").ScreenWrapper,
                { screen: e, externalVariables: l },
                (t = e.screenIdWithStackIndex) != null ? t : e.screenId,
              );
            });
          },
          [T, l],
        ),
        w = s.jsx(S, {
          children: s.jsxs("div", {
            style: babelHelpers.extends(
              {
                fontFamily: o("WebBloksUtils").getWrapperFontFamily(
                  b.fontFamilyMappings,
                ),
              },
              $,
              P ? { WebkitOverflowScrolling: "touch" } : null,
            ),
            "data-testid": void 0,
            className: o("WebBloksStyle").classNames(
              o("WebBloksAppAccessibilityStyles").ACCESSIBILITY_STYLES.outlines,
              N,
            ),
            children: [
              M,
              I &&
                s.jsx(
                  r("WebBloksModalWrapper"),
                  { modal: I, externalVariables: l },
                  (t = I.screenIdWithStackIndex) != null ? t : I.screenId,
                ),
              s.jsx(r("WebBloksToastPresenter"), { objectSet: L }),
            ],
          }),
        });
      return (
        L.environment.disableErrorBoundary !== !0 &&
          (w = s.jsx(r("WebBloksErrorBoundary"), {
            logger: L.environment.logger,
            children: w,
          })),
        w
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
      C = { width: "100%", height: "100%" };
    ((l.WebBloksApp = _),
      (l.createInitialScreenForObjectSet = f),
      (l.bloksRootStyles = C));
  },
  98,
);
