__d(
  "BaseMenu.react",
  [
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerOrientationContext",
    "BaseMenuFocusGroup",
    "BaseMenuItemRoleContext",
    "BasePopover.react",
    "BasePopoverSVGArrowContainer.react",
    "BaseScrollableArea.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "arrowAlignment",
        "arrowMargin",
        "children",
        "id",
        "minMaxHeight",
        "ref",
        "role",
        "useKeyCommands",
        "variant",
        "withArrow",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useContext,
      m = {
        end: { borderEndEndRadius: "x16uus16", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderEndStartRadius: "xbiv7yw", $$css: !0 },
        stretch: { $$css: !0 },
      },
      p = {
        end: { borderStartEndRadius: "x1ga7v0g", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartStartRadius: "x15mokao", $$css: !0 },
        stretch: { $$css: !0 },
      },
      _ = {
        end: { borderEndEndRadius: "x16uus16", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartEndRadius: "x1ga7v0g", $$css: !0 },
        stretch: { $$css: !0 },
      },
      f = {
        end: { borderEndStartRadius: "xbiv7yw", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartStartRadius: "x15mokao", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function g(e, t) {
      switch (e) {
        case "above":
          return m[t];
        case "below":
          return p[t];
        case "end":
          return f[t];
        case "start":
          return _[t];
      }
    }
    var h = {
        root: {
          alignItems: "x1qjc9v5",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
      },
      y = { listbox: "option", menu: "menuitem" };
    function C(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(42),
        l,
        u,
        m,
        p,
        _,
        f,
        C,
        b,
        v,
        S,
        R;
      i[0] !== t
        ? ((l = t.arrowAlignment),
          (f = t.arrowMargin),
          (u = t.children),
          (m = t.id),
          (C = t.minMaxHeight),
          (_ = t.ref),
          (b = t.role),
          (v = t.useKeyCommands),
          (R = t.variant),
          (S = t.withArrow),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = m),
          (i[4] = p),
          (i[5] = _),
          (i[6] = f),
          (i[7] = C),
          (i[8] = b),
          (i[9] = v),
          (i[10] = S),
          (i[11] = R))
        : ((l = i[1]),
          (u = i[2]),
          (m = i[3]),
          (p = i[4]),
          (_ = i[5]),
          (f = i[6]),
          (C = i[7]),
          (b = i[8]),
          (v = i[9]),
          (S = i[10]),
          (R = i[11]));
      var L = f === void 0 ? 15 : f,
        E = C === void 0 ? 145 : C,
        k = b === void 0 ? "menu" : b,
        I = v === void 0 ? !0 : v,
        T = S === void 0 ? !1 : S,
        D = d(r("BaseContextualLayerOrientationContext")),
        x = D.align,
        $ = D.position,
        P = d(r("BaseContextualLayerAvailableHeightContext"));
      T && P != null && (P = P - L);
      var N = y[k],
        M = T ? r("BasePopoverSVGArrowContainer.react") : void 0,
        w;
      if (
        i[12] !== x ||
        i[13] !== $ ||
        i[14] !==
          ((n = R) == null || (n = n.xstyleConfig) == null
            ? void 0
            : n.container) ||
        i[15] !== T
      ) {
        var A, F;
        ((w = (s || (s = r("stylex"))).props(
          h.root,
          T === !0 && g($, x),
          (A = R) == null || (A = A.xstyleConfig) == null
            ? void 0
            : A.container,
        )),
          (i[12] = x),
          (i[13] = $),
          (i[14] =
            (F = R) == null || (F = F.xstyleConfig) == null
              ? void 0
              : F.container),
          (i[15] = T),
          (i[16] = w));
      } else w = i[16];
      var O = Math.max(P != null ? P : 0, E),
        B;
      i[17] !== O
        ? ((B = { maxHeight: O }), (i[17] = O), (i[18] = B))
        : (B = i[18]);
      var W =
          (a = R) == null || (a = a.xstyleConfig) == null
            ? void 0
            : a.scrollableArea,
        q;
      i[19] !== W ? ((q = [h.root, W]), (i[19] = W), (i[20] = q)) : (q = i[20]);
      var U;
      i[21] !== u || i[22] !== N
        ? ((U = c.jsx(r("BaseMenuItemRoleContext").Provider, {
            value: N,
            children: u,
          })),
          (i[21] = u),
          (i[22] = N),
          (i[23] = U))
        : (U = i[23]);
      var V;
      i[24] !== q || i[25] !== U || i[26] !== B
        ? ((V = c.jsx(r("BaseScrollableArea.react"), {
            horizontal: !1,
            style: B,
            vertical: !0,
            xstyle: q,
            children: U,
          })),
          (i[24] = q),
          (i[25] = U),
          (i[26] = B),
          (i[27] = V))
        : (V = i[27]);
      var H;
      i[28] !== V || i[29] !== I
        ? ((H = c.jsx(r("BaseMenuFocusGroup").FocusGroup, {
            orientation: "vertical",
            preventScrollOnFocus: !1,
            tabScopeQuery: o("focusScopeQueries").tabbableScopeQuery,
            useKeyCommands: I,
            wrap: !0,
            children: V,
          })),
          (i[28] = V),
          (i[29] = I),
          (i[30] = H))
        : (H = i[30]);
      var G;
      i[31] !== H || i[32] !== w
        ? ((G = c.jsx("div", babelHelpers.extends({}, w, { children: H }))),
          (i[31] = H),
          (i[32] = w),
          (i[33] = G))
        : (G = i[33]);
      var z;
      return (
        i[34] !== l ||
        i[35] !== m ||
        i[36] !== p ||
        i[37] !== _ ||
        i[38] !== k ||
        i[39] !== G ||
        i[40] !== M
          ? ((z = c.jsx(
              r("BasePopover.react"),
              babelHelpers.extends({}, p, {
                arrowAlignment: l,
                arrowImpl: M,
                id: m,
                ref: _,
                role: k,
                children: G,
              }),
            )),
            (i[34] = l),
            (i[35] = m),
            (i[36] = p),
            (i[37] = _),
            (i[38] = k),
            (i[39] = G),
            (i[40] = M),
            (i[41] = z))
          : (z = i[41]),
        z
      );
    }
    l.default = C;
  },
  98,
);
