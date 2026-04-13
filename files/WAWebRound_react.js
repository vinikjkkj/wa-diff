__d(
  "WAWebRound.react",
  [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = n("$InternalEnum").Mirrored([
        "Default",
        "XSmall",
        "Small",
        "Medium",
        "Large",
        "Inverted",
        "NoShadow",
        "SVGGrayButton",
        "ReactionPickerButton",
        "Approve",
        "Reject",
        "Disabled",
        "QuickAction",
        "QuickActionRefreshed",
        "DrawerFooter",
        "Error",
      ]),
      d = {
        btn: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x3x2bpi",
          height: "xwvwv9b",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          color: "x17t9dm2",
          textTransform: "xtvhhri",
          backgroundColor: "xfn3atn",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          boxShadow: "xu306ak",
          transitionDuration: "x12s1jxh",
          transitionProperty: "xkdsq27",
          transitionTimingFunction: "xwwtwea",
          ":active_boxShadow": "x1gfkgh9",
          $$css: !0,
        },
        approveRefreshed: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          boxShadow: "x1gnnqk1",
          color: "xk4n5i7",
          backgroundColor: "x1abdmlv",
          $$css: !0,
        },
        rejectRefreshed: {
          width: "x100vrsf",
          height: "x1vqgdyp",
          boxShadow: "x1gnnqk1",
          color: "xqnyt8g",
          backgroundColor: "xrkjzwr",
          $$css: !0,
        },
        disabled: {
          color: "xhslqc4",
          cursor: "x1h6gzvc",
          backgroundColor: "x3qdkio",
          boxShadow: "x1gnnqk1",
          ":active_color": "x8idqv2",
          ":active_cursor": "x4xbgct",
          ":active_backgroundColor": "x71m2qp",
          ":active_boxShadow": "xpk4wdd",
          $$css: !0,
        },
        large: { width: "x1247r65", height: "xng8ra", $$css: !0 },
        medium: { width: "x1guw455", height: "x16wdlz0", $$css: !0 },
        small: { width: "x1td3qas", height: "x10w6t97", $$css: !0 },
        xsmall: {
          width: "xo7uitg",
          height: "x9fpu7x",
          boxShadow: "x1gnnqk1",
          ":active_boxShadow": "xpk4wdd",
          $$css: !0,
        },
        inverted: {
          width: "x1useyqa",
          height: "xsdox4t",
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          backgroundColor: "x1y1wcne",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        invertedRefreshed: { backgroundColor: "x4wrhlh", $$css: !0 },
        quickAction: {
          width: "xezl2tj",
          height: "xlrawln",
          backgroundColor: "x1518k6t",
          boxShadow: "x1gnnqk1",
          ":active_boxShadow": "xpk4wdd",
          $$css: !0,
        },
        quickActionRefreshed: {
          width: "x23j0i4",
          height: "xd7y6wv",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          boxShadow: "xx43kwn",
          $$css: !0,
        },
        svgGrayButton: {
          width: "x1useyqa",
          height: "xsdox4t",
          backgroundColor: "x4wrhlh",
          boxShadow: "x1gnnqk1",
          ":active_boxShadow": "xpk4wdd",
          $$css: !0,
        },
        noShadow: {
          width: "x1useyqa",
          height: "xsdox4t",
          boxShadow: "x1gnnqk1",
          ":active_boxShadow": "xpk4wdd",
          $$css: !0,
        },
        hideBackground: { backgroundColor: "xjbqb8w", $$css: !0 },
        reactionPickerButton: {
          width: "x1td3qas",
          height: "x10w6t97",
          backgroundColor: "x4wrhlh",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        drawerFooter: { backgroundColor: "x3qdkio", $$css: !0 },
        error: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xvy4d1p",
          minWidth: "xnei2rj",
          height: "xxk0z11",
          color: "x17t9dm2",
          pointerEvents: "x67bb7w",
          backgroundColor: "xk0ssx3",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1zfx7y",
          borderInlineEndColor: "x1gj3efs",
          borderBottomColor: "x151wx5t",
          borderInlineStartColor: "xea0m3l",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(32),
        a = t.ariaPressed,
        i = t.children,
        l = t.className,
        s = t.dataTab,
        m = t.disabled,
        p = t.hideBackground,
        _ = t.inverted,
        f = t.label,
        g = t.large,
        h = t.medium,
        y = t.onClick,
        C = t.onContextMenu,
        b = t.onKeyDown,
        v = t.ref,
        S = t.small,
        R = t.tabIndex,
        L = t.testid,
        E = t.theme,
        k = t.title,
        I = t.xstyle,
        T = r("useWAWebIsKeyboardUser")(),
        D = T.isKeyboardUser,
        x;
      n[0] !== l ||
      n[1] !== m ||
      n[2] !== p ||
      n[3] !== _ ||
      n[4] !== D ||
      n[5] !== g ||
      n[6] !== h ||
      n[7] !== S ||
      n[8] !== E ||
      n[9] !== I
        ? ((x = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            l,
            (e || (e = r("stylex")))(
              d.btn,
              (g === !0 || E === c.Large) && d.large,
              (h === !0 || E === c.Medium) && d.medium,
              (S === !0 || E === c.Small) && d.small,
              E === c.XSmall && d.xsmall,
              (_ === !0 || E === c.Inverted) && d.inverted,
              (_ === !0 || E === c.Inverted) && d.invertedRefreshed,
              p === !0 && d.hideBackground,
              (m === !0 || E === c.Disabled) && d.disabled,
              E === c.NoShadow && d.noShadow,
              E === c.SVGGrayButton && d.svgGrayButton,
              E === c.ReactionPickerButton && d.reactionPickerButton,
              E === c.Approve && d.approveRefreshed,
              E === c.Reject && d.rejectRefreshed,
              E === c.QuickAction && d.quickAction,
              E === c.QuickActionRefreshed && d.quickActionRefreshed,
              E === c.DrawerFooter && m === !0 && d.drawerFooter,
              E === c.Error && d.error,
              !1,
              !1,
              D && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              I,
            ),
          )),
          (n[0] = l),
          (n[1] = m),
          (n[2] = p),
          (n[3] = _),
          (n[4] = D),
          (n[5] = g),
          (n[6] = h),
          (n[7] = S),
          (n[8] = E),
          (n[9] = I),
          (n[10] = x))
        : (x = n[10]);
      var $ = x,
        P;
      n[11] !== y
        ? ((P = function (t) {
            (y == null || y(t), t.preventDefault());
          }),
          (n[11] = y),
          (n[12] = P))
        : (P = n[12]);
      var N = P,
        M;
      n[13] !== m
        ? ((M = { disabled: m }), (n[13] = m), (n[14] = M))
        : (M = n[14]);
      var w = r("useWAWebStaticButtonA11y")(N, M),
        A = w[0],
        F = w[1],
        O = r("useMergeRefs")(A, v),
        B;
      n[15] !== m || n[16] !== b || n[17] !== F
        ? ((B = b
            ? function (e) {
                r("WAWebKeyboardIsKeyActivation")(e) &&
                  (e.preventDefault(), m !== !0 && b(e));
              }
            : F.onKeyPress),
          (n[15] = m),
          (n[16] = b),
          (n[17] = F),
          (n[18] = B))
        : (B = n[18]);
      var W = B,
        q = R != null ? R : b != null || y != null ? 0 : -1,
        U;
      return (
        n[19] !== a ||
        n[20] !== $ ||
        n[21] !== i ||
        n[22] !== q ||
        n[23] !== s ||
        n[24] !== W ||
        n[25] !== f ||
        n[26] !== O ||
        n[27] !== C ||
        n[28] !== F ||
        n[29] !== L ||
        n[30] !== k
          ? ((U = u.jsx(
              "div",
              babelHelpers.extends({}, F, {
                "data-testid": void 0,
                role: "button",
                "aria-pressed": a,
                "aria-label": f,
                tabIndex: q,
                className: $,
                onKeyDown: W,
                ref: O,
                title: k,
                "data-tab": s,
                onContextMenu: C,
                children: i,
              }),
            )),
            (n[19] = a),
            (n[20] = $),
            (n[21] = i),
            (n[22] = q),
            (n[23] = s),
            (n[24] = W),
            (n[25] = f),
            (n[26] = O),
            (n[27] = C),
            (n[28] = F),
            (n[29] = L),
            (n[30] = k),
            (n[31] = U))
          : (U = n[31]),
        U
      );
    }
    ((l.RoundTheme = c), (l.Round = m));
  },
  98,
);
