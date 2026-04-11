__d(
  "WAWebDrawerManager.react",
  [
    "WATypeUtils",
    "WAUpperFirst",
    "WAWebContentEntryPointContext",
    "WAWebDrawerContext",
    "WAWebDrawerManagerContext",
    "WAWebErrorBoundary.react",
    "WAWebFocusTracer",
    "WAWebKeyboardRotateFocus.react",
    "WAWebUimContext",
    "WAWebUimUie.react",
    "WAWebVelocityTransitionGroup",
    "cr:37105",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("cr:37105") != null ? n("cr:37105") : {},
      c = u.EntryPointContainer,
      d = {},
      m = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
        rightContainer: { backgroundColor: "x1280gxy", $$css: !0 },
      },
      p = {
        LEFT: "drawer-left",
        MID: "slide-up",
        NONE: "none",
        RIGHT: "slide-left",
      },
      _ = {
        LEFT: "left",
        MID: "mid",
        RIGHT: "right",
        FULLSCREEN: "fullscreen",
      };
    function f(e) {
      var t = e.animationDisabled,
        n = e.direction,
        a = e.onDrawerAnimationComplete,
        i = o("WAWebDrawerManagerContext").useDrawerManagerContext(n),
        l = i.blockTransitionRef,
        u = i.disableRotateFocus,
        p = i.drawer,
        f = i.drawerContext,
        g = i.drawerId,
        h = i.focusType,
        y = i.handleRequestDismiss,
        C = i.noFocus,
        b = i.onEnterAnimationComplete,
        v = i.transition,
        S = i.uieRef,
        R = i.uim,
        L = o("WAWebContentEntryPointContext").useWAWebContentEntryPoint(),
        E = n === _.LEFT,
        k = function () {
          if (S.current) {
            var e = S.current.getElement();
            !e ||
              e.contains(document.activeElement) ||
              r("WAWebFocusTracer").focus(e);
          }
        },
        I = function (t) {
          var e = a;
          (e && e(),
            !(b === void 0 && C === void 0) &&
              p &&
              t === g &&
              o("WATypeUtils").isFunction(b) &&
              b());
        },
        T = function () {
          return t === !0 ? "none" : l.current || v;
        },
        D,
        x =
          E && L != null && c != null
            ? s.jsx(c, { entryPointReference: L, props: d })
            : null;
      if (p != null || x != null) {
        var $ =
            u === !0 ? "div" : o("WAWebKeyboardRotateFocus.react").RotateFocus,
          P = u === !0 ? {} : { focusType: h };
        D = s.jsx(
          o("WAWebUimUie.react").UIE,
          {
            displayName: "Drawer" + r("WAUpperFirst")(n),
            escapable: !0,
            ref: S,
            requestFocus: C === !0 ? null : k,
            requestDismiss: y,
            children: s.jsx(
              $,
              babelHelpers.extends({ style: { height: "100%" } }, P, {
                children: s.jsx(
                  o("WAWebDrawerContext").DrawerContext.Provider,
                  {
                    value: f,
                    children: s.jsx(
                      o("WAWebErrorBoundary.react").ErrorBoundary,
                      {
                        name: "drawer-manager-" + n,
                        type: "fatal",
                        children: x != null ? x : p,
                      },
                    ),
                  },
                ),
              }),
            ),
          },
          g,
        );
      }
      var N = D != null && n === _.RIGHT;
      return s.jsx(r("WAWebUimContext").Consumer, {
        children: function (t) {
          return s.jsx(r("WAWebUimContext").Provider, {
            value: R || t,
            children: s.jsx(r("WAWebVelocityTransitionGroup"), {
              xstyle: [m.container, N && m.rightContainer],
              transitionName: T(),
              onAnimationComplete: function () {
                return I(g);
              },
              displayName: "DrawerManager",
              children: D,
            }),
          });
        },
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.Transition = p),
      (l.Dir = _),
      (l.DrawerManagerComponent = f));
  },
  98,
);
