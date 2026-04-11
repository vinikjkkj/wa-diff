__d(
  "WAWebMediaEditorToolbarColorChip.react",
  [
    "WAWebDropdownV2.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebPopoverContext.react",
    "WAWebRecalledIcon.react",
    "WAWebTooltip.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState,
      p = {
        colorButton: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xgd8bvy",
          height: "x1fgtraw",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        smallColorButton: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xvy4d1p",
          height: "xxk0z11",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        btnHoverActive: { cursor: "x1ypdohk", $$css: !0 },
        btnSelectedHoverActive: { cursor: "xt0e3qv", $$css: !0 },
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(60),
        a = t.onSelect,
        i = t.primaryColor,
        l = t.secondaryColor,
        s = t.selected,
        c = t.theme,
        _ = t.withBorder,
        f = m(!1),
        g = f[0],
        h = f[1],
        y = m(!1),
        C = y[0],
        b = y[1],
        v = d(null),
        S;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            h(!0);
          }),
          (n[0] = S))
        : (S = n[0]);
      var R = S,
        L;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            h(!1);
          }),
          (n[1] = L))
        : (L = n[1]);
      var E = L,
        k;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            b(!0);
          }),
          (n[2] = k))
        : (k = n[2]);
      var I = k,
        T;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            b(!1);
          }),
          (n[3] = T))
        : (T = n[3]);
      var D = T,
        x = 24;
      s ? (x = 30) : g && (x = 26);
      var $ = c === "small",
        P = c !== "small",
        N = $ || P,
        M = N && s,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V;
      if (
        n[4] !== C ||
        n[5] !== g ||
        n[6] !== P ||
        n[7] !== $ ||
        n[8] !== N ||
        n[9] !== M ||
        n[10] !== a ||
        n[11] !== i ||
        n[12] !== s
      ) {
        var H = C && !s ? i.withAlpha(0.2).toRgbaString() : "transparent",
          G;
        (n[22] !== i.colorType
          ? ((G = i.colorType
              ? o("WAWebMediaEditorEnumsColors").getColorLabel(i.colorType)
              : null),
            (n[22] = i.colorType),
            (n[23] = G))
          : (G = n[23]),
          (w = G),
          (O = v),
          (B = a),
          (W = R),
          (q = E),
          (U = I),
          (V = D),
          (A = w),
          (F = (e || (e = r("stylex"))).props([
            P && p.colorButton,
            $ && p.smallColorButton,
            N && (g || C) && p.btnHoverActive,
            M && (g || C) && p.btnSelectedHoverActive,
            p.bgColor(H),
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner,
          ])),
          (n[4] = C),
          (n[5] = g),
          (n[6] = P),
          (n[7] = $),
          (n[8] = N),
          (n[9] = M),
          (n[10] = a),
          (n[11] = i),
          (n[12] = s),
          (n[13] = w),
          (n[14] = A),
          (n[15] = F),
          (n[16] = O),
          (n[17] = B),
          (n[18] = W),
          (n[19] = q),
          (n[20] = U),
          (n[21] = V));
      } else
        ((w = n[13]),
          (A = n[14]),
          (F = n[15]),
          (O = n[16]),
          (B = n[17]),
          (W = n[18]),
          (q = n[19]),
          (U = n[20]),
          (V = n[21]));
      var z;
      n[24] !== C ||
      n[25] !== g ||
      n[26] !== N ||
      n[27] !== M ||
      n[28] !== i ||
      n[29] !== t.theme ||
      n[30] !== _
        ? ((z = {
            0: "x78zum5 x6s0dn4 xl56j7k x1xp8n7a xmix8c7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            8: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
            4: "x78zum5 x6s0dn4 xl56j7k x1xp8n7a xmix8c7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
            12: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2 x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
            2: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
            10: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
            6: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xw4jnvo x1qx5ct2",
            14: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xw4jnvo x1qx5ct2",
            1: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
            9: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
            5: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
            13: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
            3: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
            11: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
            7: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
            15: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
          }[
            ((t.theme === "medium") << 3) |
              (!!(_ && i.isWhite()) << 2) |
              (!!(N && (g || C)) << 1) |
              (!!(M && (g || C)) << 0)
          ]),
          (n[24] = C),
          (n[25] = g),
          (n[26] = N),
          (n[27] = M),
          (n[28] = i),
          (n[29] = t.theme),
          (n[30] = _),
          (n[31] = z))
        : (z = n[31]);
      var j;
      n[32] !== i
        ? ((j = i.toRgbaString()), (n[32] = i), (n[33] = j))
        : (j = n[33]);
      var K;
      n[34] !== j
        ? ((K = { backgroundColor: j }), (n[34] = j), (n[35] = K))
        : (K = n[35]);
      var Q;
      n[36] !== i || n[37] !== x
        ? ((Q =
            i.equals(
              o("WAWebMediaEditorEnumsColors").getColorValue(
                o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
              ),
            ) &&
            u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
              width: x,
              height: x,
            })),
          (n[36] = i),
          (n[37] = x),
          (n[38] = Q))
        : (Q = n[38]);
      var X;
      n[39] !== l || n[40] !== s
        ? ((X =
            l &&
            s &&
            u.jsx("div", {
              className: "x1xc55vz xdk7pt x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
              style: { backgroundColor: l.toRgbaString() },
            })),
          (n[39] = l),
          (n[40] = s),
          (n[41] = X))
        : (X = n[41]);
      var Y;
      n[42] !== w
        ? ((Y =
            w != null &&
            u.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
              targetRef: v,
              popover: u.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                targetRef: "context",
                alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
                position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                showOnFocus: !0,
                enableEnterTransition: !1,
                children: w,
              }),
            })),
          (n[42] = w),
          (n[43] = Y))
        : (Y = n[43]);
      var J;
      n[44] !== z || n[45] !== K || n[46] !== Q || n[47] !== X || n[48] !== Y
        ? ((J = u.jsxs("div", { className: z, style: K, children: [Q, X, Y] })),
          (n[44] = z),
          (n[45] = K),
          (n[46] = Q),
          (n[47] = X),
          (n[48] = Y),
          (n[49] = J))
        : (J = n[49]);
      var Z;
      return (
        n[50] !== A ||
        n[51] !== F ||
        n[52] !== J ||
        n[53] !== O ||
        n[54] !== B ||
        n[55] !== W ||
        n[56] !== q ||
        n[57] !== U ||
        n[58] !== V
          ? ((Z = u.jsx(
              "button",
              babelHelpers.extends(
                {
                  ref: O,
                  onClick: B,
                  onMouseEnter: W,
                  onMouseLeave: q,
                  onMouseDown: U,
                  onMouseUp: V,
                  "aria-label": A,
                },
                F,
                { children: J },
              ),
            )),
            (n[50] = A),
            (n[51] = F),
            (n[52] = J),
            (n[53] = O),
            (n[54] = B),
            (n[55] = W),
            (n[56] = q),
            (n[57] = U),
            (n[58] = V),
            (n[59] = Z))
          : (Z = n[59]),
        Z
      );
    }
    l.default = _;
  },
  98,
);
