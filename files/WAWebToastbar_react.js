__d(
  "WAWebToastbar.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "WDSFocusStateStyles",
    "WDSIconIcClose.react",
    "WDSTooltip.react",
    "react",
    "useHoverState",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = 24,
      m = {
        container: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          zIndex: "xoz0ns6",
          width: "xh8yej3",
          backgroundColor: "x1280gxy",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          $$css: !0,
        },
        childrenContainer: { display: "x3nfvp2", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
      };
    function p(e) {
      var t = e.alwaysShowDismissBtn,
        n = e.children,
        a = e.childrenXStyle,
        i = e.dismissible,
        l = e.dismissXstyle,
        p = e.hidden,
        _ = p === void 0 ? !1 : p,
        f = e.onClick,
        g = e.onDismiss,
        h = e.wrapperXstyle,
        y = c(!1),
        C = y[0],
        b = y[1],
        v = r("useHoverState")(),
        S = v.isHovered,
        R = v.onMouseEnter,
        L = v.onMouseLeave,
        E = r("useWAWebFocusState")(),
        k = E[0],
        I = E[1],
        T = r("useWAWebFocusState")(),
        D = T[0],
        x = T[1],
        $ = s._(/*BTDS*/ "Dismiss"),
        P = u.jsx(r("WDSTooltip.react"), {
          label: $,
          children: u.jsx(r("WDSIconIcClose.react"), {
            height: d,
            "aria-label": $,
            xstyle: m.icon,
          }),
        }),
        N = null;
      if (!C && !_) {
        var M =
          !t && !S && !I && !x
            ? null
            : u.jsx(o("WAWebClickable.react").Clickable, {
                ref: D,
                "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
                onClick: function (t) {
                  (t == null || t.preventDefault(),
                    t == null || t.stopPropagation(),
                    b(!0),
                    g == null || g());
                },
                children: P,
              });
        N = u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "all",
          xstyle: [
            o("WAWebUISpacing").uiPadding.top12,
            o("WAWebUISpacing").uiPadding.bottom10,
            m.container,
            h,
          ],
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WAWebUISpacing").uiMargin.start13,
                m.childrenContainer,
                I && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                a,
              ],
              align: "center",
              justify: "center",
              grow: 1,
              children: n,
            }),
            i === !0 &&
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: [o("WAWebUISpacing").uiMargin.end20, l],
                grow: 0,
                shrink: 0,
                basis: d,
                children: u.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "noop",
                  children: M,
                }),
              }),
          ],
        });
      }
      var w = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        onMouseEnter: R,
        onMouseLeave: L,
        children: u.jsx(r("WAWebVelocityTransitionGroup"), {
          component: "div",
          transitionName: "toast-transition",
          children: N,
        }),
      });
      return N != null
        ? u.jsx(o("WAWebClickable.react").Clickable, {
            ref: k,
            "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
            onClick: f,
            children: w,
          })
        : w;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
