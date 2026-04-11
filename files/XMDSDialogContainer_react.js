__d(
  "XMDSDialogContainer.react",
  [
    "BaseDialog.react",
    "BaseDialogLabelIDProvider",
    "BaseMultiPageView.react",
    "CometThemeInfraUtils",
    "XMDSDialogPageLoadingState.react",
    "XMDSThemeConfig",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        anchor: {
          alignItems: "x1qjc9v5",
          maxHeight: "x1bwycvy",
          minHeight: "x1jee029",
          paddingTop: "x1x97wu9",
          paddingBottom: "xbr3nou",
          paddingInlineStart: "x135b78x",
          paddingInlineEnd: "x11lfxj5",
          paddingLeft: null,
          paddingRight: null,
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingBottom":
            "xqit15g",
          "@supports (padding: env(safe-area-inset-bottom, 0))_paddingTop":
            "x1bi8yb4",
          $$css: !0,
        },
        anchorBottomSheet: {
          "@media (max-width: 679px)_paddingBottom": "x1eevrrt",
          "@media (max-width: 679px)_touchAction": "x15ypxgc",
          $$css: !0,
        },
        anchorMinHeight: {
          "@media (max-height: 488px)_minHeight": "x1roekcs",
          "@media (max-height: 488px)_paddingTop": "x10hnfgj",
          "@media (max-height: 488px)_paddingBottom": "x1k7oykt",
          "@media (max-width: 679px)_maxHeight": "x1jxyteu",
          "@media (max-width: 679px)_minHeight": "xwnxf6m",
          $$css: !0,
        },
        card: {
          backgroundColor: "x1jx94hy",
          borderStartStartRadius: "xazwl86",
          borderStartEndRadius: "x1hl0hii",
          borderEndEndRadius: "x1aq6byr",
          borderEndStartRadius: "x2k6n7x",
          clipPath: "xkahi35",
          flexGrow: "x1iyjqo2",
          position: "x1n2onr6",
          "@media (max-width: 679px)_boxShadow": "x1likypf",
          "@media (max-width: 679px)_overflowX": "x1e9k66k",
          "@media (max-width: 679px)_overflowY": "x12l8kdc",
          $$css: !0,
        },
        dialog: {
          alignItems: "x1qjc9v5",
          borderStartStartRadius: "xazwl86",
          borderStartEndRadius: "x1hl0hii",
          borderEndEndRadius: "x1aq6byr",
          borderEndStartRadius: "x2k6n7x",
          boxShadow: "x104qc98",
          display: "x78zum5",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          width: "xh8yej3",
          $$css: !0,
        },
        dialogBottomSheet: {
          "@media (max-width: 679px)_borderEndEndRadius": "xpyx08",
          "@media (max-width: 679px)_borderEndStartRadius": "xz71k5e",
          $$css: !0,
        },
        fitToSize: { minHeight: "xsjhvl8", $$css: !0 },
        root: {
          "@media (max-width: 679px)_justifyContent": "x3l4zpa",
          $$css: !0,
        },
        rootBottomSheet: {
          "@media (max-width: 679px)_justifyContent": "x9a67hx",
          $$css: !0,
        },
        rootMinHeight: {
          "@media (max-width: 679px)_justifyContent": "xshlqvt",
          $$css: !0,
        },
      },
      d = {
        medium: { maxWidth: "xrgej4m", $$css: !0 },
        small: { maxWidth: "xrlsmeg", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.ref,
        a = e.anchorXStyle,
        i = e["aria-label"],
        l = e.children,
        u = e.disableClosingWithMask,
        m = e.enableBottomSheetBehavior,
        p = e.fitToSize,
        _ = e.mobileFullHeight,
        f = e.onClose,
        g = e.size,
        h = e.testid,
        y = u === void 0 ? !1 : u,
        C = m === void 0 ? !1 : m,
        b = p === void 0 ? !1 : p,
        v = _ === void 0 ? !0 : _,
        S = g === void 0 ? "small" : g,
        R = f != null ? f : r("emptyFunction"),
        L;
      t[0] !== R
        ? ((L = s.jsx(r("XMDSDialogPageLoadingState.react"), { onClose: R })),
          (t[0] = R),
          (t[1] = L))
        : (L = t[1]);
      var E = L,
        k = o("BaseDialogLabelIDProvider").useDialogHeaderID(),
        I;
      t[2] !== a ? ((I = [c.anchor, a]), (t[2] = a), (t[3] = I)) : (I = t[3]);
      var T = I,
        D = b && c.fitToSize,
        x = v && c.anchorMinHeight,
        $ = C && c.anchorBottomSheet,
        P;
      t[4] !== T || t[5] !== x || t[6] !== $ || t[7] !== D
        ? ((P = [T, D, x, $]),
          (t[4] = T),
          (t[5] = x),
          (t[6] = $),
          (t[7] = D),
          (t[8] = P))
        : (P = t[8]);
      var N = i == null ? k : void 0,
        M = f != null ? f : r("emptyFunction"),
        w = !v && c.rootMinHeight,
        A = C && c.rootBottomSheet,
        F;
      t[9] !== w || t[10] !== A
        ? ((F = [c.root, w, A]), (t[9] = w), (t[10] = A), (t[11] = F))
        : (F = t[11]);
      var O = d[S],
        B = C && c.dialogBottomSheet,
        W;
      t[12] !== O || t[13] !== B
        ? ((W = [c.dialog, O, B]), (t[12] = O), (t[13] = B), (t[14] = W))
        : (W = t[14]);
      var q = C && c.dialogBottomSheet,
        U;
      t[15] !== q ? ((U = [c.card, q]), (t[15] = q), (t[16] = U)) : (U = t[16]);
      var V;
      t[17] !== l || t[18] !== E || t[19] !== U
        ? ((V = s.jsx(r("BaseMultiPageView.react"), {
            fallback: E,
            xstyle: U,
            children: l,
          })),
          (t[17] = l),
          (t[18] = E),
          (t[19] = U),
          (t[20] = V))
        : (V = t[20]);
      var H;
      return (
        t[21] !== i ||
        t[22] !== y ||
        t[23] !== C ||
        t[24] !== n ||
        t[25] !== P ||
        t[26] !== N ||
        t[27] !== M ||
        t[28] !== F ||
        t[29] !== W ||
        t[30] !== V ||
        t[31] !== h
          ? ((H = s.jsx(r("BaseDialog.react"), {
              anchorXStyle: P,
              "aria-label": i,
              "aria-labelledby": N,
              disableClosingWithMask: y,
              enableBottomSheetBehavior: C,
              onClose: M,
              ref: n,
              rootXStyle: F,
              testid: void 0,
              themeConfig: o(
                "CometThemeInfraUtils",
              ).enableCometThemeInfraThemeInXMDSComponents()
                ? void 0
                : r("XMDSThemeConfig"),
              xstyle: W,
              children: V,
            })),
            (t[21] = i),
            (t[22] = y),
            (t[23] = C),
            (t[24] = n),
            (t[25] = P),
            (t[26] = N),
            (t[27] = M),
            (t[28] = F),
            (t[29] = W),
            (t[30] = V),
            (t[31] = h),
            (t[32] = H))
          : (H = t[32]),
        H
      );
    }
    l.default = m;
  },
  98,
);
