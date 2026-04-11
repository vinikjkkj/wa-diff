__d(
  "FDSDialogContainer.react",
  [
    "BaseDialog.react",
    "BaseDialogLabelIDProvider",
    "BaseMultiPageView.react",
    "CometDialogLoadingStateContext",
    "FDSDialogPageLoadingState.react",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = {
        anchor: {
          alignItems: "x1qjc9v5",
          maxHeight: "x1bwycvy",
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
        card: {
          backgroundColor: "x1jx94hy",
          borderStartStartRadius: "xazwl86",
          borderStartEndRadius: "x1hl0hii",
          borderEndEndRadius: "x1aq6byr",
          borderEndStartRadius: "x2k6n7x",
          boxShadow: "x104qc98",
          clipPath: "x1gj8qfm",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          "@media (max-width: 679px)_boxShadow": "x1likypf",
          "@media (max-width: 679px)_clipPath": "xzit4ce",
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
          display: "x78zum5",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          "@media (max-width: 679px)_boxShadow": "xcatxm7",
          $$css: !0,
        },
        root: {
          "@media (max-width: 679px)_justifyContent": "xshlqvt",
          $$css: !0,
        },
      },
      p = {
        medium: { maxWidth: "xrgej4m", width: "xh8yej3", $$css: !0 },
        small: { maxWidth: "x1n7qst7", width: "xh8yej3", $$css: !0 },
        xsmall: { maxWidth: "xdusixz", width: "xh8yej3", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.anchorXStyle,
        a = e["aria-label"],
        i = e.children,
        l = e.disableClosingWithMask,
        u = e.onClose,
        d = e.ref,
        _ = e.size,
        f = e.testid,
        g = l === void 0 ? !1 : l,
        h = _ === void 0 ? "small" : _,
        y = u != null ? u : r("emptyFunction"),
        C;
      t[0] !== y
        ? ((C = s.jsx(r("FDSDialogPageLoadingState.react"), { onClose: y })),
          (t[0] = y),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v = c(r("CometDialogLoadingStateContext")),
        S = o("BaseDialogLabelIDProvider").useDialogLabelID(),
        R;
      t[2] !== n ? ((R = [m.anchor, n]), (t[2] = n), (t[3] = R)) : (R = t[3]);
      var L = a == null ? S : void 0,
        E = u != null ? u : r("emptyFunction"),
        k = p[h],
        I;
      t[4] !== k ? ((I = [m.dialog, k]), (t[4] = k), (t[5] = I)) : (I = t[5]);
      var T;
      t[6] !== i || t[7] !== b || t[8] !== v
        ? ((T = s.jsx(r("BaseMultiPageView.react"), {
            disableAutoRestoreFocus: v,
            fallback: b,
            xstyle: m.card,
            children: i,
          })),
          (t[6] = i),
          (t[7] = b),
          (t[8] = v),
          (t[9] = T))
        : (T = t[9]);
      var D;
      return (
        t[10] !== a ||
        t[11] !== g ||
        t[12] !== d ||
        t[13] !== T ||
        t[14] !== R ||
        t[15] !== L ||
        t[16] !== E ||
        t[17] !== I ||
        t[18] !== f
          ? ((D = s.jsx(r("BaseDialog.react"), {
              anchorXStyle: R,
              "aria-label": a,
              "aria-labelledby": L,
              disableClosingWithMask: g,
              onClose: E,
              ref: d,
              rootXStyle: m.root,
              testid: void 0,
              xstyle: I,
              children: T,
            })),
            (t[10] = a),
            (t[11] = g),
            (t[12] = d),
            (t[13] = T),
            (t[14] = R),
            (t[15] = L),
            (t[16] = E),
            (t[17] = I),
            (t[18] = f),
            (t[19] = D))
          : (D = t[19]),
        D
      );
    }
    l.default = _;
  },
  98,
);
