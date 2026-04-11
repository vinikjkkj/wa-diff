__d(
  "BaseCheckbox.react",
  [
    "BaseFocusRing.react",
    "BaseInput.react",
    "BaseView.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "children",
        "ref",
        "variant",
        "xstyle",
        "indeterminate",
        "suppressFocusRing",
        "testid",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useLayoutEffect,
      p = d.useRef,
      _ = d.useState,
      f = o("Locale").isRTL(),
      g = {
        checkbox: {
          cursor: "x1ypdohk",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          opacity: "x1w3u9th",
          outline: "x1a2a7pz",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
        icon: {
          paddingTop: "x1nn3v0j",
          paddingInlineEnd: "x14vy60q",
          paddingBottom: "x1120s5i",
          paddingInlineStart: "xyiysdx",
          $$css: !0,
        },
        inlineFlex: { display: "x3nfvp2", $$css: !0 },
        labelRTL: { transformOrigin: "x1h1bmdg", $$css: !0 },
        wrapper: { position: "x1n2onr6", $$css: !0 },
      };
    function h(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(35),
        l,
        u,
        d,
        h,
        y,
        C,
        b;
      if (i[0] !== t) {
        var v = t.children,
          S = t.ref,
          R = t.variant,
          L = t.xstyle,
          E = t.indeterminate,
          k = t.suppressFocusRing,
          I = t.testid,
          T = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((l = v),
          (d = S),
          (C = R),
          (b = L),
          (h = E),
          (y = I),
          (u = T),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = d),
          (i[4] = h),
          (i[5] = y),
          (i[6] = C),
          (i[7] = b));
      } else
        ((l = i[1]),
          (u = i[2]),
          (d = i[3]),
          (h = i[4]),
          (y = i[5]),
          (C = i[6]),
          (b = i[7]));
      var D = h === void 0 ? !1 : h,
        x = p(null),
        $ = _(!1),
        P = $[0],
        N = $[1],
        M = (n = u.checked) != null ? n : !1,
        w = (a = u.disabled) != null ? a : !1,
        A,
        F;
      (i[8] !== D
        ? ((A = function () {
            x.current != null && (x.current.indeterminate = D);
          }),
          (F = [D]),
          (i[8] = D),
          (i[9] = A),
          (i[10] = F))
        : ((A = i[9]), (F = i[10])),
        m(A, F));
      var O = r("useMergeRefs")(d, x),
        B;
      i[11] !== M || i[12] !== w || i[13] !== P || i[14] !== C
        ? ((B = function (t) {
            var e, n, o, a, i;
            if (C == null) return null;
            var l = M ? C.iconChecked : C.iconUnchecked;
            return c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props([
                  g.inlineFlex,
                  (e = C) == null ? void 0 : e.xstyleConfig.iconWrapper,
                  M &&
                    ((n = C) == null
                      ? void 0
                      : n.xstyleConfig.iconCheckedWrapper),
                  P &&
                    ((o = C) == null
                      ? void 0
                      : o.xstyleConfig.iconFocusedWrapper),
                  w &&
                    ((a = C) == null
                      ? void 0
                      : a.xstyleConfig.iconDisabledWrapper),
                  w &&
                    M &&
                    ((i = C) == null
                      ? void 0
                      : i.xstyleConfig.iconDisabledCheckedWrapper),
                ]),
                {
                  suppressHydrationWarning: !0,
                  children: c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      s.props([t, g.icon, C.xstyleConfig.icon]),
                      {
                        suppressHydrationWarning: !0,
                        children:
                          l != null &&
                          c.jsx(l, { height: "100%", width: "100%" }),
                      },
                    ),
                  ),
                },
              ),
            );
          }),
          (i[11] = M),
          (i[12] = w),
          (i[13] = P),
          (i[14] = C),
          (i[15] = B))
        : (B = i[15]);
      var W = B,
        q;
      i[16] !== M ||
      i[17] !== l ||
      i[18] !== w ||
      i[19] !== W ||
      i[20] !== D ||
      i[21] !== O ||
      i[22] !== u ||
      i[23] !== y ||
      i[24] !== C ||
      i[25] !== b
        ? ((q = function (t) {
            var e, n, o, a;
            return c.jsxs(r("BaseView.react"), {
              role: "none",
              testid: void 0,
              xstyle: [
                g.wrapper,
                C != null
                  ? (e = C) == null
                    ? void 0
                    : e.xstyleConfig.checkboxWrapper
                  : t,
                b,
              ],
              children: [
                W(t),
                C != null
                  ? c.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (s || (s = r("stylex"))).props([
                          g.inlineFlex,
                          (n = C) == null
                            ? void 0
                            : n.xstyleConfig.labelWrapper,
                        ]),
                        { children: l },
                      ),
                    )
                  : l,
                c.jsx(
                  r("BaseInput.react"),
                  babelHelpers.extends({}, u, {
                    "aria-checked": D ? "mixed" : M != null ? M : !1,
                    ref: O,
                    type: "checkbox",
                    xstyle: [
                      g.checkbox,
                      (o = C) == null ? void 0 : o.xstyleConfig.checkbox,
                      w &&
                        ((a = C) == null
                          ? void 0
                          : a.xstyleConfig.checkboxDisabled),
                    ],
                  }),
                ),
              ],
            });
          }),
          (i[16] = M),
          (i[17] = l),
          (i[18] = w),
          (i[19] = W),
          (i[20] = D),
          (i[21] = O),
          (i[22] = u),
          (i[23] = y),
          (i[24] = C),
          (i[25] = b),
          (i[26] = q))
        : (q = i[26]);
      var U = q,
        V = C != null ? "inset" : void 0,
        H;
      i[27] !== U || i[28] !== w || i[29] !== u.id || i[30] !== C
        ? ((H = function (t) {
            var e, n;
            return c.jsx(c.Fragment, {
              children:
                C != null
                  ? c.jsx(
                      "label",
                      babelHelpers.extends(
                        {},
                        (s || (s = r("stylex"))).props([
                          f && g.labelRTL,
                          (e = C) == null ? void 0 : e.xstyleConfig.label,
                          w === !0 &&
                            ((n = C) == null
                              ? void 0
                              : n.xstyleConfig.labelDisabled),
                        ]),
                        {
                          htmlFor: u.id,
                          suppressHydrationWarning: !0,
                          children: U(t),
                        },
                      ),
                    )
                  : U(t),
            });
          }),
          (i[27] = U),
          (i[28] = w),
          (i[29] = u.id),
          (i[30] = C),
          (i[31] = H))
        : (H = i[31]);
      var G;
      return (
        i[32] !== V || i[33] !== H
          ? ((G = c.jsx(r("BaseFocusRing.react"), {
              focusRingPosition: V,
              onFocusVisibleChange: N,
              children: H,
            })),
            (i[32] = V),
            (i[33] = H),
            (i[34] = G))
          : (G = i[34]),
        G
      );
    }
    l.default = h;
  },
  98,
);
