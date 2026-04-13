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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(35),
        n = e.alwaysShowDismissBtn,
        a = e.children,
        i = e.childrenXStyle,
        l = e.dismissible,
        p = e.dismissXstyle,
        _ = e.hidden,
        f = e.onClick,
        g = e.onDismiss,
        h = e.wrapperXstyle,
        y = _ === void 0 ? !1 : _,
        C = c(!1),
        b = C[0],
        v = C[1],
        S = r("useHoverState")(),
        R = S.isHovered,
        L = S.onMouseEnter,
        E = S.onMouseLeave,
        k = r("useWAWebFocusState")(),
        I = k[0],
        T = k[1],
        D = r("useWAWebFocusState")(),
        x = D[0],
        $ = D[1],
        P;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Dismiss")), (t[0] = P))
        : (P = t[0]);
      var N = P,
        M;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsx(r("WDSTooltip.react"), {
            label: N,
            children: u.jsx(r("WDSIconIcClose.react"), {
              height: d,
              "aria-label": N,
              xstyle: m.icon,
            }),
          })),
          (t[1] = M))
        : (M = t[1]);
      var w = M,
        A = null;
      if (!b && !y) {
        var F;
        t[2] !== n ||
        t[3] !== x ||
        t[4] !== $ ||
        t[5] !== R ||
        t[6] !== T ||
        t[7] !== g
          ? ((F =
              !n && !R && !T && !$
                ? null
                : u.jsx(o("WAWebClickable.react").Clickable, {
                    ref: x,
                    "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
                    onClick: function (t) {
                      (t == null || t.preventDefault(),
                        t == null || t.stopPropagation(),
                        v(!0),
                        g == null || g());
                    },
                    children: w,
                  })),
            (t[2] = n),
            (t[3] = x),
            (t[4] = $),
            (t[5] = R),
            (t[6] = T),
            (t[7] = g),
            (t[8] = F))
          : (F = t[8]);
        var O = F,
          B;
        t[9] !== h
          ? ((B = [
              o("WAWebUISpacing").uiPadding.top12,
              o("WAWebUISpacing").uiPadding.bottom10,
              m.container,
              h,
            ]),
            (t[9] = h),
            (t[10] = B))
          : (B = t[10]);
        var W = T && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          q;
        t[11] !== i || t[12] !== W
          ? ((q = [
              o("WAWebUISpacing").uiMargin.start13,
              m.childrenContainer,
              W,
              i,
            ]),
            (t[11] = i),
            (t[12] = W),
            (t[13] = q))
          : (q = t[13]);
        var U;
        t[14] !== a || t[15] !== q
          ? ((U = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: q,
              align: "center",
              justify: "center",
              grow: 1,
              children: a,
            })),
            (t[14] = a),
            (t[15] = q),
            (t[16] = U))
          : (U = t[16]);
        var V;
        t[17] !== O || t[18] !== p || t[19] !== l
          ? ((V =
              l === !0 &&
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: [o("WAWebUISpacing").uiMargin.end20, p],
                grow: 0,
                shrink: 0,
                basis: d,
                children: u.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "noop",
                  children: O,
                }),
              })),
            (t[17] = O),
            (t[18] = p),
            (t[19] = l),
            (t[20] = V))
          : (V = t[20]);
        var H;
        (t[21] !== B || t[22] !== U || t[23] !== V
          ? ((H = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              xstyle: B,
              children: [U, V],
            })),
            (t[21] = B),
            (t[22] = U),
            (t[23] = V),
            (t[24] = H))
          : (H = t[24]),
          (A = H));
      }
      var G;
      t[25] !== A
        ? ((G = u.jsx(r("WAWebVelocityTransitionGroup"), {
            component: "div",
            transitionName: "toast-transition",
            children: A,
          })),
          (t[25] = A),
          (t[26] = G))
        : (G = t[26]);
      var z;
      t[27] !== L || t[28] !== E || t[29] !== G
        ? ((z = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            onMouseEnter: L,
            onMouseLeave: E,
            children: G,
          })),
          (t[27] = L),
          (t[28] = E),
          (t[29] = G),
          (t[30] = z))
        : (z = t[30]);
      var j = z;
      if (A != null) {
        var K;
        return (
          t[31] !== j || t[32] !== I || t[33] !== f
            ? ((K = u.jsx(o("WAWebClickable.react").Clickable, {
                ref: I,
                "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
                onClick: f,
                children: j,
              })),
              (t[31] = j),
              (t[32] = I),
              (t[33] = f),
              (t[34] = K))
            : (K = t[34]),
          K
        );
      }
      return j;
    }
    l.default = p;
  },
  226,
);
