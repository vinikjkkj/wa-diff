__d(
  "WAWebVoipSplitButton.react",
  [
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WAWebVoipUiPopoutWindowContext",
    "WDSIconIcArrowDropDown.react",
    "WDSTooltip.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        splitButton: {
          backgroundColor: "x1od0jb8",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          cursor: "x1ypdohk",
          height: "x1vqgdyp",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          color: "x17t9dm2",
          $$css: !0,
        },
        splitButtonSmall: { height: "x10w6t97", $$css: !0 },
        mutedSplitButton: {
          backgroundColor: "x1p8t8ri",
          color: "x1lljey2",
          $$css: !0,
        },
        splitButtonLeft: {
          borderStartStartRadius: "xt8t1vi",
          borderEndStartRadius: "x15urzxu",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          height: "x1vqgdyp",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
        splitButtonLeftSmall: {
          height: "x10w6t97",
          paddingInlineEnd: "x1j8ymqv",
          $$css: !0,
        },
        splitButtonRight: {
          borderStartStartRadius: "x1bczwif",
          borderEndStartRadius: "x11o6v7j",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          height: "x1vqgdyp",
          width: "xezivpi",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "x1nzty39",
          $$css: !0,
        },
        splitButtonRightSmall: {
          height: "x10w6t97",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
        disabled: { opacity: "xti2d7y", cursor: "x1h6gzvc", $$css: !0 },
        buttonBase: {
          alignItems: "x6s0dn4",
          backgroundColor: "xjbqb8w",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        buttonHover: { ":hover_backgroundColor": "x1k5h0tu", $$css: !0 },
        focusInner: {
          ":focus-visible_outlineOffset": "xyu9ima",
          ":focus-visible_outlineWidth": "x100v1rl",
          $$css: !0,
        },
      },
      d = 1e3;
    function m(e) {
      var t = o("react-compiler-runtime").c(51),
        n = e.Icon,
        a = e.disabled,
        i = e.disableDropdownButton,
        l = e.disableMainButton,
        m = e.dropdownButtonLabel,
        p = e.dropdownButtonTestId,
        _ = e.dropdownRef,
        f = e.isMuted,
        g = e.mainButtonLabel,
        h = e.mainButtonTestId,
        y = e.onDropdownClick,
        C = e.onMainClick,
        b = e.testId,
        v = e.tooltipOwnerAnchorRef,
        S = e.tooltipOwnerDocument,
        R = a === void 0 ? !1 : a,
        L = i === void 0 ? !1 : i,
        E = l === void 0 ? !1 : l,
        k = f === void 0 ? !1 : f,
        I = u(r("WAWebVoipUiPopoutWindowContext")),
        T = I.isContextInPopoutWindow && !I.isDocPip,
        D = T ? 24 : 20,
        x;
      t[0] !== k
        ? ((x = k
            ? {
                "--WDS-surface-highlight-RGB":
                  o("WDSVars.stylex").WDSColors[
                    "--WDS-persistent-always-black-RGB"
                  ],
              }
            : void 0),
          (t[0] = k),
          (t[1] = x))
        : (x = t[1]);
      var $ = !T && c.splitButtonSmall,
        P = k && c.mutedSplitButton,
        N = R && c.disabled,
        M;
      t[2] !== $ || t[3] !== P || t[4] !== N
        ? ((M = [c.splitButton, $, P, N]),
          (t[2] = $),
          (t[3] = P),
          (t[4] = N),
          (t[5] = M))
        : (M = t[5]);
      var w = R || E,
        A = !T && c.splitButtonLeftSmall,
        F = !R && !E && c.buttonHover,
        O;
      t[6] !== A || t[7] !== F
        ? ((O = [c.buttonBase, c.splitButtonLeft, A, F, c.focusInner]),
          (t[6] = A),
          (t[7] = F),
          (t[8] = O))
        : (O = t[8]);
      var B;
      t[9] !== n || t[10] !== D
        ? ((B = s.jsx(n, { height: D, width: D })),
          (t[9] = n),
          (t[10] = D),
          (t[11] = B))
        : (B = t[11]);
      var W;
      t[12] !== g ||
      t[13] !== h ||
      t[14] !== C ||
      t[15] !== w ||
      t[16] !== O ||
      t[17] !== B
        ? ((W = s.jsx(r("WAWebUnstyledButton.react"), {
            testid: void 0,
            disabled: w,
            onClick: C,
            xstyle: O,
            "aria-label": g,
            children: B,
          })),
          (t[12] = g),
          (t[13] = h),
          (t[14] = C),
          (t[15] = w),
          (t[16] = O),
          (t[17] = B),
          (t[18] = W))
        : (W = t[18]);
      var q;
      t[19] !== g || t[20] !== W || t[21] !== v || t[22] !== S
        ? ((q = s.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            shrink: 0,
            children: s.jsx(r("WDSTooltip.react"), {
              label: g,
              ownerAnchorRef: v,
              ownerDocument: S,
              delayTooltipMs: d,
              children: W,
            }),
          })),
          (t[19] = g),
          (t[20] = W),
          (t[21] = v),
          (t[22] = S),
          (t[23] = q))
        : (q = t[23]);
      var U = R || L,
        V = !T && c.splitButtonRightSmall,
        H = !R && !L && c.buttonHover,
        G;
      t[24] !== V || t[25] !== H
        ? ((G = [c.buttonBase, c.splitButtonRight, V, H, c.focusInner]),
          (t[24] = V),
          (t[25] = H),
          (t[26] = G))
        : (G = t[26]);
      var z;
      t[27] !== D
        ? ((z = s.jsx(r("WDSIconIcArrowDropDown.react"), {
            height: D,
            width: D,
          })),
          (t[27] = D),
          (t[28] = z))
        : (z = t[28]);
      var j;
      t[29] !== m ||
      t[30] !== p ||
      t[31] !== _ ||
      t[32] !== y ||
      t[33] !== U ||
      t[34] !== G ||
      t[35] !== z
        ? ((j = s.jsx(r("WAWebUnstyledButton.react"), {
            testid: void 0,
            disabled: U,
            onClick: y,
            xstyle: G,
            ref: _,
            "aria-label": m,
            children: z,
          })),
          (t[29] = m),
          (t[30] = p),
          (t[31] = _),
          (t[32] = y),
          (t[33] = U),
          (t[34] = G),
          (t[35] = z),
          (t[36] = j))
        : (j = t[36]);
      var K;
      t[37] !== m || t[38] !== j || t[39] !== v || t[40] !== S
        ? ((K = s.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 0,
            shrink: 0,
            basis: "auto",
            children: s.jsx(r("WDSTooltip.react"), {
              label: m,
              ownerAnchorRef: v,
              ownerDocument: S,
              delayTooltipMs: d,
              children: j,
            }),
          })),
          (t[37] = m),
          (t[38] = j),
          (t[39] = v),
          (t[40] = S),
          (t[41] = K))
        : (K = t[41]);
      var Q;
      t[42] !== g || t[43] !== q || t[44] !== K || t[45] !== M || t[46] !== b
        ? ((Q = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            role: "group",
            "aria-label": g,
            xstyle: M,
            testid: void 0,
            children: [q, K],
          })),
          (t[42] = g),
          (t[43] = q),
          (t[44] = K),
          (t[45] = M),
          (t[46] = b),
          (t[47] = Q))
        : (Q = t[47]);
      var X;
      return (
        t[48] !== Q || t[49] !== x
          ? ((X = s.jsx("div", { style: x, children: Q })),
            (t[48] = Q),
            (t[49] = x),
            (t[50] = X))
          : (X = t[50]),
        X
      );
    }
    l.default = m;
  },
  98,
);
