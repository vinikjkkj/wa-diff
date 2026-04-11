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
      var n = o("react-compiler-runtime").c(11),
        a = t.ref,
        i = t["aria-label"],
        l = t.children,
        s = t.disabled,
        c = t.isActive,
        d = t.onClick,
        m = t.testid,
        p = t.xstyle,
        f;
      n[0] !== s || n[1] !== p
        ? ((f = (e || (e = r("stylex"))).props([
            r("WAWebUnstyledButtonStyles").button,
            o("WAWebUISpacing").uiPadding.all0,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            s === !0 && r("WAWebUnstyledButtonStyles").disabled,
            _.circularButton,
            p,
          ])),
          (n[0] = s),
          (n[1] = p),
          (n[2] = f))
        : (f = n[2]);
      var g;
      return (
        n[3] !== i ||
        n[4] !== l ||
        n[5] !== c ||
        n[6] !== d ||
        n[7] !== a ||
        n[8] !== f ||
        n[9] !== m
          ? ((g = u.jsx(
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
                },
                f,
                { children: l },
              ),
            )),
            (n[3] = i),
            (n[4] = l),
            (n[5] = c),
            (n[6] = d),
            (n[7] = a),
            (n[8] = f),
            (n[9] = m),
            (n[10] = g))
          : (g = n[10]),
        g
      );
    }
    function g(t) {
      var a = o("react-compiler-runtime").c(35),
        i = t.ariaLabel,
        l = t.dotIndicatorPositionXstyle,
        s = t.icon,
        c = t.inlineActivityIndicator,
        d = t.inlineActivityIndicatorType,
        g = t.isActive,
        h = t.isTooltipDisabled,
        y = t.keyboardShortcutAction,
        C = t.onClick,
        b = t.ref,
        v = t.shouldHoldInteractionManually,
        S = t.spacingXstyle,
        R = t.testid,
        L = t.title,
        E = t.tracePolicy,
        k = h === void 0 ? !1 : h,
        I = v === void 0 ? !1 : v,
        T = S === void 0 ? o("WAWebUISpacing").uiPadding.all8 : S,
        D = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          E != null ? E : r("WAWebInteractionTracePolicy").DEFAULT,
          I,
          !0,
        ),
        x = D.startInteraction,
        $;
      a[0] !== g || a[1] !== C || a[2] !== x || a[3] !== E
        ? (($ = function (t) {
            (t.preventDefault(), !g && E && x(), C == null || C(t));
          }),
          (a[0] = g),
          (a[1] = C),
          (a[2] = x),
          (a[3] = E),
          (a[4] = $))
        : ($ = a[4]);
      var P = $,
        N = m(null),
        M = r("useMergeRefs")(N, b),
        w = n("cr:23442")(),
        A = w[0],
        F = r("useMergeRefs")(A, N),
        O;
      a[5] !== s
        ? ((O = u.jsx("div", { children: s })), (a[5] = s), (a[6] = O))
        : (O = a[6]);
      var B = O,
        W;
      a[7] !== l || a[8] !== c || a[9] !== d
        ? ((W =
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
          (a[10] = W))
        : (W = a[10]);
      var q = W,
        U = i != null ? i : L,
        V;
      a[11] !== T
        ? ((V = [_.fullWidth, T]), (a[11] = T), (a[12] = V))
        : (V = a[12]);
      var H;
      a[13] !== q || a[14] !== B
        ? ((H = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _.fullWidth,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              align: "center",
              xstyle: _.inlineActivityIndicatorContainer,
              children: [B, q],
            }),
          })),
          (a[13] = q),
          (a[14] = B),
          (a[15] = H))
        : (H = a[15]);
      var G;
      a[16] !== P ||
      a[17] !== g ||
      a[18] !== M ||
      a[19] !== U ||
      a[20] !== V ||
      a[21] !== H ||
      a[22] !== R
        ? ((G = u.jsx(f, {
            testid: void 0,
            "aria-label": U,
            onClick: P,
            ref: M,
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            xstyle: V,
            isActive: g,
            children: H,
          })),
          (a[16] = P),
          (a[17] = g),
          (a[18] = M),
          (a[19] = U),
          (a[20] = V),
          (a[21] = H),
          (a[22] = R),
          (a[23] = G))
        : (G = a[23]);
      var z = G,
        j = g && _.active,
        K;
      a[24] !== j
        ? ((K = [_.container, o("WAWebUISpacing").uiMargin.vert2, j]),
          (a[24] = j),
          (a[25] = K))
        : (K = a[25]);
      var Q;
      a[26] !== z || a[27] !== k || a[28] !== y || a[29] !== L
        ? ((Q = u.jsx(r("WDSTooltip.react"), {
            label: L,
            delayTooltipMs: 0,
            position: "end",
            shortcut: y,
            disabled: k,
            children: z,
          })),
          (a[26] = z),
          (a[27] = k),
          (a[28] = y),
          (a[29] = L),
          (a[30] = Q))
        : (Q = a[30]);
      var X;
      return (
        a[31] !== F || a[32] !== K || a[33] !== Q
          ? ((X = u.jsx(o("WAWebFlex.react").FlexRow, {
              ref: F,
              xstyle: K,
              children: Q,
            })),
            (a[31] = F),
            (a[32] = K),
            (a[33] = Q),
            (a[34] = X))
          : (X = a[34]),
        X
      );
    }
    ((l.InlineActivityIndicatorType = p), (l.NavBarItem = g));
  },
  98,
);
