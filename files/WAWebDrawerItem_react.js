__d(
  "WAWebDrawerItem.react",
  [
    "fbt",
    "WAWebCopyPasteSelectable.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.children,
        a = e.dataTab,
        i = e.disabled,
        l = e.disableKeydownHandling,
        c = e.icon,
        d = e.isLastItem,
        m = e.onClick,
        p = e.onDisabledClick,
        _ = e.tabIndex,
        f = e.testid,
        g = e.theme,
        h = e.title,
        y = _ === void 0 ? 0 : _,
        C = g === void 0 ? "default" : g,
        b;
      t[0] !== c || t[1] !== d
        ? ((b = {
            0: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g",
            4: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg",
            2: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5",
            6: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5",
            1: "xso031l x120ee7l x1g2khh7 xdpxx8g x1sy0etr",
            5: "xso031l x120ee7l x1g2khh7 x1hr2gdg x1sy0etr",
            3: "xso031l x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5 x1sy0etr",
            7: "xso031l x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5 x1sy0etr",
          }[
            (!!r("WAWebL10N").isRTL() << 2) |
              ((c != null) << 1) |
              ((d === !0) << 0)
          ]),
          (t[0] = c),
          (t[1] = d),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== c
        ? ((S = { 0: "", 1: "x98rzlu" }[(c != null) << 0]),
          (t[3] = c),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== c
        ? ((L = { 0: "", 1: "xhslqc4 x1okw0bk" }[(c != null) << 0]),
          (t[5] = c),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k = r("useWAWebIsKeyboardUser")(),
        I = k.isKeyboardUser,
        T = i === !0 ? p : m,
        D = T != null,
        x;
      t[7] !== i
        ? ((x =
            i === !0
              ? { "aria-label": s._(/*BTDS*/ "Disabled drawer item") }
              : {}),
          (t[7] = i),
          (t[8] = x))
        : (x = t[8]);
      var $ = x,
        P = D ? y : null,
        N;
      t[9] !== i || t[10] !== I
        ? ((N = {
            0: { className: "x1fc57z9 xisnujt xyinxu5" },
            2: { className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw" },
            1: { className: "x1fc57z9 xisnujt xyinxu5 xbyyjgo" },
            3: { className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw xbyyjgo" },
          }[(!!I << 1) | ((i === !0) << 0)]),
          (t[9] = i),
          (t[10] = I),
          (t[11] = N))
        : (N = t[11]);
      var M = D ? "button" : "",
        w;
      t[12] !== T || t[13] !== l
        ? ((w = function (t) {
            l === !0 || !r("WAWebKeyboardIsKeyActivation")(t) || !T || T();
          }),
          (t[12] = T),
          (t[13] = l),
          (t[14] = w))
        : (w = t[14]);
      var A;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = "x14ug900 x6prxxf"), (t[15] = A))
        : (A = t[15]);
      var F;
      t[16] !== h
        ? ((F = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
            className: A,
            selectable: !0,
            children: h,
          })),
          (t[16] = h),
          (t[17] = F))
        : (F = t[17]);
      var O;
      t[18] !== C
        ? ((O = {
            0: { className: "x1v5yvga x1f6kntn xd4r4e8" },
            1: { className: "x1f6kntn xd4r4e8 x16zc8z2" },
          }[(C === "privacy") << 0]),
          (t[18] = C),
          (t[19] = O))
        : (O = t[19]);
      var B;
      t[20] !== n || t[21] !== O
        ? ((B = u.jsx("div", babelHelpers.extends({}, O, { children: n }))),
          (t[20] = n),
          (t[21] = O),
          (t[22] = B))
        : (B = t[22]);
      var W;
      t[23] !== F || t[24] !== B || t[25] !== R
        ? ((W = u.jsxs("div", { className: R, dir: "auto", children: [F, B] })),
          (t[23] = F),
          (t[24] = B),
          (t[25] = R),
          (t[26] = W))
        : (W = t[26]);
      var q;
      t[27] !== c || t[28] !== E
        ? ((q = u.jsx("div", { className: E, children: c })),
          (t[27] = c),
          (t[28] = E),
          (t[29] = q))
        : (q = t[29]);
      var U;
      t[30] !== v || t[31] !== W || t[32] !== q
        ? ((U = u.jsxs("div", { className: v, children: [W, q] })),
          (t[30] = v),
          (t[31] = W),
          (t[32] = q),
          (t[33] = U))
        : (U = t[33]);
      var V;
      return (
        t[34] !== T ||
        t[35] !== a ||
        t[36] !== $ ||
        t[37] !== w ||
        t[38] !== U ||
        t[39] !== P ||
        t[40] !== N ||
        t[41] !== M ||
        t[42] !== f
          ? ((V = u.jsx(
              "div",
              babelHelpers.extends(
                { tabIndex: P, "data-tab": a },
                N,
                { onClick: T, role: M, onKeyDown: w },
                $,
                { "data-testid": void 0, children: U },
              ),
            )),
            (t[34] = T),
            (t[35] = a),
            (t[36] = $),
            (t[37] = w),
            (t[38] = U),
            (t[39] = P),
            (t[40] = N),
            (t[41] = M),
            (t[42] = f),
            (t[43] = V))
          : (V = t[43]),
        V
      );
    }
    l.default = c;
  },
  226,
);
