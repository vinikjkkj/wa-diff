__d(
  "WAWebCellMenuItem.react",
  [
    "WAWebCellV2.react",
    "WAWebMenuItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "border",
        "children",
        "colorScheme",
        "detailLeft",
        "detailRight",
        "disabled",
        "forceActive",
        "isRefresh",
        "optionId",
        "primary",
        "primaryRight",
        "secondary",
        "secondaryRight",
        "size",
        "textWrap",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(49),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
      if (n[3] !== a) {
        var E = a;
        ((C = E.border),
          (l = E.children),
          (b = E.colorScheme),
          (u = E.detailLeft),
          (d = E.detailRight),
          (m = E.disabled),
          (p = E.forceActive),
          (_ = E.isRefresh),
          (g = E.optionId),
          (h = E.primary),
          (y = E.primaryRight),
          (S = E.secondary),
          (R = E.secondaryRight),
          (v = E.size),
          (L = E.textWrap),
          (f = babelHelpers.objectWithoutPropertiesLoose(E, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g),
          (n[12] = h),
          (n[13] = y),
          (n[14] = C),
          (n[15] = b),
          (n[16] = v),
          (n[17] = S),
          (n[18] = R),
          (n[19] = L));
      } else
        ((l = n[4]),
          (u = n[5]),
          (d = n[6]),
          (m = n[7]),
          (p = n[8]),
          (_ = n[9]),
          (f = n[10]),
          (g = n[11]),
          (h = n[12]),
          (y = n[13]),
          (C = n[14]),
          (b = n[15]),
          (v = n[16]),
          (S = n[17]),
          (R = n[18]),
          (L = n[19]));
      var k = L === void 0 ? "ellipsis" : L,
        I = o("WAWebMenuItem.react").useMenuItem(g),
        T = I.border,
        D = I.colorScheme,
        x = I.isActive,
        $ = I.material,
        P = I.size,
        N = b != null ? b : D,
        M;
      if (h != null) {
        var w = k === "ellipsis" ? 1 : null,
          A;
        (n[20] !== h || n[21] !== w
          ? ((A = c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: w,
              children: h,
            })),
            (n[20] = h),
            (n[21] = w),
            (n[22] = A))
          : (A = n[22]),
          (M = A));
      }
      var F;
      if (S != null) {
        var O = k === "ellipsis" ? 1 : null,
          B;
        (n[23] !== S || n[24] !== O
          ? ((B = c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              maxLines: O,
              children: S,
            })),
            (n[23] = S),
            (n[24] = O),
            (n[25] = B))
          : (B = n[25]),
          (F = B));
      }
      var W = v != null ? v : P,
        q = p === !0 || x,
        U = C || T,
        V;
      n[26] !== u ||
      n[27] !== d ||
      n[28] !== m ||
      n[29] !== N ||
      n[30] !== _ ||
      n[31] !== $ ||
      n[32] !== M ||
      n[33] !== y ||
      n[34] !== a.middleContainerXStyle ||
      n[35] !== a.onMouseEnter ||
      n[36] !== a.onMouseLeave ||
      n[37] !== F ||
      n[38] !== R ||
      n[39] !== W ||
      n[40] !== q ||
      n[41] !== U
        ? ((V = c.jsx(r("WAWebCellV2.react"), {
            middleContainerXStyle: a.middleContainerXStyle,
            onMouseEnter: a.onMouseEnter,
            onMouseLeave: a.onMouseLeave,
            size: W,
            colorScheme: N,
            material: $,
            disabled: m,
            primary: M,
            primaryRight: y,
            secondary: F,
            secondaryRight: R,
            detailLeft: u,
            detailRight: d,
            active: q,
            tabIndex: -1,
            border: U,
            isRefresh: _,
          })),
          (n[26] = u),
          (n[27] = d),
          (n[28] = m),
          (n[29] = N),
          (n[30] = _),
          (n[31] = $),
          (n[32] = M),
          (n[33] = y),
          (n[34] = a.middleContainerXStyle),
          (n[35] = a.onMouseEnter),
          (n[36] = a.onMouseLeave),
          (n[37] = F),
          (n[38] = R),
          (n[39] = W),
          (n[40] = q),
          (n[41] = U),
          (n[42] = V))
        : (V = n[42]);
      var H;
      return (
        n[43] !== l || n[44] !== f || n[45] !== g || n[46] !== i || n[47] !== V
          ? ((H = c.jsxs(
              o("WAWebMenuItem.react").WAWebMenuItem,
              babelHelpers.extends({ optionId: g, type: "action" }, f, {
                ref: i,
                children: [V, l],
              }),
            )),
            (n[43] = l),
            (n[44] = f),
            (n[45] = g),
            (n[46] = i),
            (n[47] = V),
            (n[48] = H))
          : (H = n[48]),
        H
      );
    }
    l.CellV2MenuItem = d;
  },
  98,
);
