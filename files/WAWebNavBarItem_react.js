__d(
  "WAWebNavBarItem.react",
  [
    "$InternalEnum",
    "WAWebAppRootInteractionContext.react",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButtonStyles",
    "WDSFocusStateStyles",
    "WDSTooltip.react",
    "cr:23442",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = n("$InternalEnum")({ Counter: "counter", Dot: "dot" }),
      _ = {
        container: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          color: "xhslqc4",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          ":hover_cursor": "x1277o0a",
          ":hover_backgroundColor": "x13i9f1t",
          $$css: !0,
        },
        circularButton: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        active: { color: "x14ug900", backgroundColor: "xzs022t", $$css: !0 },
        inlineActivityIndicatorContainer: { position: "x1n2onr6", $$css: !0 },
        inlineActivityIndicator: { position: "x10l6tqk", $$css: !0 },
        counterIndicator: {
          insetInlineStart: "xxcbqqu",
          left: null,
          right: null,
          bottom: "x1oozmrk",
          $$css: !0,
        },
        dotIndicator: {
          insetInlineStart: "x138ruz1",
          left: null,
          right: null,
          bottom: "xjifam0",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.ref,
        i = t["aria-label"],
        l = t.children,
        s = t.disabled,
        c = t.isActive,
        d = t.onClick,
        m = t.onMouseEnter,
        p = t.testid,
        f = t.xstyle,
        g;
      n[0] !== s || n[1] !== f
        ? ((g = (e || (e = r("stylex"))).props([
            r("WAWebUnstyledButtonStyles").button,
            o("WAWebUISpacing").uiPadding.all0,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            s === !0 && r("WAWebUnstyledButtonStyles").disabled,
            _.circularButton,
            f,
          ])),
          (n[0] = s),
          (n[1] = f),
          (n[2] = g))
        : (g = n[2]);
      var h;
      return (
        n[3] !== i ||
        n[4] !== l ||
        n[5] !== c ||
        n[6] !== d ||
        n[7] !== m ||
        n[8] !== a ||
        n[9] !== g ||
        n[10] !== p
          ? ((h = u.jsx(
              "button",
              babelHelpers.extends(
                {
                  "aria-pressed": c,
                  "aria-label": i,
                  onClick: d,
                  tabIndex: -1,
                  ref: a,
                  "data-testid": void 0,
                  "data-navbar-item": !0,
                  "data-navbar-item-selected": c,
                  onMouseEnter: m,
                },
                g,
                { children: l },
              ),
            )),
            (n[3] = i),
            (n[4] = l),
            (n[5] = c),
            (n[6] = d),
            (n[7] = m),
            (n[8] = a),
            (n[9] = g),
            (n[10] = p),
            (n[11] = h))
          : (h = n[11]),
        h
      );
    }
    function g(t) {
      var a = o("react-compiler-runtime").c(36),
        i = t.ariaLabel,
        l = t.dotIndicatorPositionXstyle,
        s = t.icon,
        c = t.inlineActivityIndicator,
        d = t.inlineActivityIndicatorType,
        g = t.isActive,
        h = t.isTooltipDisabled,
        y = t.keyboardShortcutAction,
        C = t.onClick,
        b = t.onMouseEnter,
        v = t.ref,
        S = t.shouldHoldInteractionManually,
        R = t.spacingXstyle,
        L = t.testid,
        E = t.title,
        k = t.tracePolicy,
        I = h === void 0 ? !1 : h,
        T = S === void 0 ? !1 : S,
        D = R === void 0 ? o("WAWebUISpacing").uiPadding.all8 : R,
        x = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          k != null ? k : r("WAWebInteractionTracePolicy").DEFAULT,
          T,
          !0,
        ),
        $ = x.startInteraction,
        P;
      a[0] !== g || a[1] !== C || a[2] !== $ || a[3] !== k
        ? ((P = function (t) {
            (t.preventDefault(), !g && k && $(), C == null || C(t));
          }),
          (a[0] = g),
          (a[1] = C),
          (a[2] = $),
          (a[3] = k),
          (a[4] = P))
        : (P = a[4]);
      var N = P,
        M = m(null),
        w = r("useMergeRefs")(M, v),
        A = n("cr:23442")(),
        F = A[0],
        O = r("useMergeRefs")(F, M),
        B;
      a[5] !== s
        ? ((B = u.jsx("div", { children: s })), (a[5] = s), (a[6] = B))
        : (B = a[6]);
      var W = B,
        q;
      a[7] !== l || a[8] !== c || a[9] !== d
        ? ((q =
            c &&
            u.jsx(o("WAWebFlex.react").FlexItem, {
              className: (e || (e = r("stylex")))([
                _.inlineActivityIndicator,
                d === p.Counter ? _.counterIndicator : _.dotIndicator,
                l,
              ]),
              children: c,
            })),
          (a[7] = l),
          (a[8] = c),
          (a[9] = d),
          (a[10] = q))
        : (q = a[10]);
      var U = q,
        V = i != null ? i : E,
        H;
      a[11] !== D
        ? ((H = [_.fullWidth, D]), (a[11] = D), (a[12] = H))
        : (H = a[12]);
      var G;
      a[13] !== U || a[14] !== W
        ? ((G = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _.fullWidth,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              align: "center",
              xstyle: _.inlineActivityIndicatorContainer,
              children: [W, U],
            }),
          })),
          (a[13] = U),
          (a[14] = W),
          (a[15] = G))
        : (G = a[15]);
      var z;
      a[16] !== N ||
      a[17] !== g ||
      a[18] !== b ||
      a[19] !== w ||
      a[20] !== V ||
      a[21] !== H ||
      a[22] !== G ||
      a[23] !== L
        ? ((z = u.jsx(f, {
            testid: void 0,
            "aria-label": V,
            onClick: N,
            ref: w,
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            xstyle: H,
            isActive: g,
            onMouseEnter: b,
            children: G,
          })),
          (a[16] = N),
          (a[17] = g),
          (a[18] = b),
          (a[19] = w),
          (a[20] = V),
          (a[21] = H),
          (a[22] = G),
          (a[23] = L),
          (a[24] = z))
        : (z = a[24]);
      var j = z,
        K = g && _.active,
        Q;
      a[25] !== K
        ? ((Q = [_.container, o("WAWebUISpacing").uiMargin.vert2, K]),
          (a[25] = K),
          (a[26] = Q))
        : (Q = a[26]);
      var X;
      a[27] !== j || a[28] !== I || a[29] !== y || a[30] !== E
        ? ((X = u.jsx(r("WDSTooltip.react"), {
            label: E,
            delayTooltipMs: 0,
            position: "end",
            shortcut: y,
            disabled: I,
            children: j,
          })),
          (a[27] = j),
          (a[28] = I),
          (a[29] = y),
          (a[30] = E),
          (a[31] = X))
        : (X = a[31]);
      var Y;
      return (
        a[32] !== O || a[33] !== Q || a[34] !== X
          ? ((Y = u.jsx(o("WAWebFlex.react").FlexRow, {
              ref: O,
              xstyle: Q,
              children: X,
            })),
            (a[32] = O),
            (a[33] = Q),
            (a[34] = X),
            (a[35] = Y))
          : (Y = a[35]),
        Y
      );
    }
    ((l.InlineActivityIndicatorType = p), (l.NavBarItem = g));
  },
  98,
);
