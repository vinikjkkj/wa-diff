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
    "react-compiler-runtime",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(
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
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(32),
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
        b = y[1],
        v;
      t[0] !== a.stateChangeListener
        ? ((v = function () {
            return (
              a.stateChangeListener.on(b),
              function () {
                a.stateChangeListener.off(b);
              }
            );
          }),
          (t[0] = a.stateChangeListener),
          (t[1] = v))
        : (v = t[1]);
      var S;
      (t[2] !== a ? ((S = [a]), (t[2] = a), (t[3] = S)) : (S = t[3]), c(v, S));
      var R = a.objectSet,
        L = a.options,
        E = L.initialTreeResources,
        k = L.loadingNavbar,
        I = L.loadingScreen,
        T = L.ownerContext,
        D = R.environment.navigationTrackingUtils,
        x;
      t[4] !== a
        ? ((x = a.getIsOverlay()), (t[4] = a), (t[5] = x))
        : (x = t[5]);
      var $ = x,
        P = !u && $ !== !0 && f.rootBackground,
        N = $ === !0 && f.rootOverlay,
        M;
      t[6] !== P || t[7] !== N
        ? ((M = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            f.root,
            P,
            N,
          )),
          (t[6] = P),
          (t[7] = N),
          (t[8] = M))
        : (M = t[8]);
      var w = l === !0 ? "visible" : "hidden",
        A;
      t[9] !== w
        ? ((A = o("WebBloksStyle").getStyleProps({
            display: "block",
            flexBasis: "100%",
            flexGrow: 1,
            flexShrink: 1,
            overflow: w,
          })),
          (t[9] = w),
          (t[10] = A))
        : (A = t[10]);
      var F;
      if (
        t[11] !== C.error ||
        t[12] !== C.state ||
        t[13] !== n ||
        t[14] !== E ||
        t[15] !== p ||
        t[16] !== k ||
        t[17] !== I ||
        t[18] !== (D == null ? void 0 : D.loadingIndicatorTrackingComponent) ||
        t[19] !== R ||
        t[20] !== T ||
        t[21] !== a
      ) {
        var O;
        ((F =
          C.state === "ready"
            ? s.jsx(
                r("WebBloksScreenHost"),
                { screen: a, externalVariables: n },
                a.screenId,
              )
            : C.state === "error"
              ? s.jsxs(s.Fragment, {
                  children: [
                    k && _(R, k, E, T),
                    s.jsx("div", {
                      style: { marginTop: 44, textAlign: "center" },
                      children:
                        (O = C.error.summary) != null ? O : "Failed to load",
                    }),
                  ],
                })
              : s.jsxs(s.Fragment, {
                  children: [
                    D == null ? void 0 : D.loadingIndicatorTrackingComponent,
                    k && _(R, k, E, T),
                    I ? _(R, I, E, T) : p != null ? p : s.jsx(m, {}),
                  ],
                })),
          (t[11] = C.error),
          (t[12] = C.state),
          (t[13] = n),
          (t[14] = E),
          (t[15] = p),
          (t[16] = k),
          (t[17] = I),
          (t[18] = D == null ? void 0 : D.loadingIndicatorTrackingComponent),
          (t[19] = R),
          (t[20] = T),
          (t[21] = a),
          (t[22] = F));
      } else F = t[22];
      var B;
      t[23] !== F || t[24] !== A
        ? ((B = s.jsx("div", babelHelpers.extends({}, A, { children: F }))),
          (t[23] = F),
          (t[24] = A),
          (t[25] = B))
        : (B = t[25]);
      var W;
      t[26] !== B || t[27] !== M
        ? ((W = s.jsx("div", { className: M, children: B })),
          (t[26] = B),
          (t[27] = M),
          (t[28] = W))
        : (W = t[28]);
      var q;
      return (
        t[29] !== h || t[30] !== W
          ? ((q = s.jsx(h, {
              autoRestoreFocus: !0,
              containFocusQuery: o("WebBloksFocusScopeQueries")
                .tabbableScopeQuery,
              children: W,
            })),
            (t[29] = h),
            (t[30] = W),
            (t[31] = q))
          : (q = t[31]),
        q
      );
    }
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
