__d(
  "WebBloksScreenWrapper",
  [
    "WebBloksEnvironmentContext",
    "WebBloksFocusScopeQueries",
    "WebBloksIconSpinner",
    "WebBloksScreen",
    "WebBloksScreenHost",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksTreeResources",
    "react",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m() {
      return s.jsx(
        "div",
        babelHelpers.extends(
          {},
          o("WebBloksStyle").getStyleProps({
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }),
          { children: s.jsx(r("WebBloksIconSpinner"), {}) },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = e.externalVariables,
        a = e.screen,
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.allowScreenOverflow,
        u = i.embedded,
        p = i.loadingFallback,
        g = r("useWebBloksAccessibilityModule")(),
        h = g.FocusRegion,
        y = d(a.value),
        C = y[0],
        b = y[1];
      c(
        function () {
          return (
            a.stateChangeListener.on(b),
            function () {
              a.stateChangeListener.off(b);
            }
          );
        },
        [a],
      );
      var v = a.objectSet,
        S = a.options,
        R = S.initialTreeResources,
        L = S.loadingNavbar,
        E = S.loadingScreen,
        k = S.ownerContext,
        I = v.environment.navigationTrackingUtils,
        T = a.getIsOverlay();
      return s.jsx(h, {
        autoRestoreFocus: !0,
        containFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
        children: s.jsx("div", {
          className: o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            f.root,
            !u && T !== !0 && f.rootBackground,
            T === !0 && f.rootOverlay,
          ),
          children: s.jsx(
            "div",
            babelHelpers.extends(
              {},
              o("WebBloksStyle").getStyleProps({
                display: "block",
                flexBasis: "100%",
                flexGrow: 1,
                flexShrink: 1,
                overflow: l === !0 ? "visible" : "hidden",
              }),
              {
                children:
                  C.state === "ready"
                    ? s.jsx(
                        r("WebBloksScreenHost"),
                        { screen: a, externalVariables: n },
                        a.screenId,
                      )
                    : C.state === "error"
                      ? s.jsxs(s.Fragment, {
                          children: [
                            L && _(v, L, R, k),
                            s.jsx("div", {
                              style: { marginTop: 44, textAlign: "center" },
                              children:
                                (t = C.error.summary) != null
                                  ? t
                                  : "Failed to load",
                            }),
                          ],
                        })
                      : s.jsxs(s.Fragment, {
                          children: [
                            I == null
                              ? void 0
                              : I.loadingIndicatorTrackingComponent,
                            L && _(v, L, R, k),
                            E ? _(v, E, R, k) : p != null ? p : s.jsx(m, {}),
                          ],
                        }),
              },
            ),
          ),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t, n, a) {
      return s.jsx(r("WebBloksScreenHost"), {
        isLoadingNode: !0,
        screen: o("WebBloksScreen").WebBloksScreen.fromBloksModel(
          e,
          t,
          n != null
            ? n
            : o("WebBloksTreeResources").WebBloksTreeResources.empty(),
          { isEmbedded: !0, ownerContext: a != null ? a : void 0 },
        ),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = o("WebBloksStyle").createStyles({
      rootBackground: {
        backgroundColor:
          o("WebBloksTheme").WebBloksThemeVars["screen-wrapper-bg"],
      },
      root: {
        color: o("WebBloksTheme").WebBloksThemeVars["primary-text"],
        flexDirection: "column",
        height: "100%",
        width: "100%",
      },
      rootOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
    ((l.ScreenWrapper = p), (l.renderLoadingNode = _));
  },
  98,
);
