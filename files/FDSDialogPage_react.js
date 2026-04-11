__d(
  "FDSDialogPage.react",
  [
    "BaseHeadingContextWrapper.react",
    "BaseScrollableArea.react",
    "FDSGradientBorderContainer.react",
    "FocusInertRegion.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useFDSDialogPageHeightStyle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          minHeight: "x7ywyr2",
          $$css: !0,
        },
        inert: { pointerEvents: "x47corl", userSelect: "x87ps6o", $$css: !0 },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          maxHeight: "x1yr2tfi x1jxyteu",
          position: "x1n2onr6",
          $$css: !0,
        },
        rootFullAndMinHeight: { minHeight: "xw36ugu x1mfppf3", $$css: !0 },
        rootFullHeight: { minHeight: "xw36ugu", $$css: !0 },
        rootMinHeight: { minHeight: "x1mfppf3", $$css: !0 },
        scrollableArea: {
          flexGrow: "x1iyjqo2",
          overscrollBehaviorY: "xy5w88m",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.children,
        a = e.disablePageScroll,
        i = e.footer,
        l = e.header,
        c = e.isContentInert,
        d = e.isFullHeightByDefault,
        m = e.mobileFullHeight,
        p = e.pageXStyle,
        _ = e.scrollAreaRef,
        f = a === void 0 ? !1 : a,
        g = c === void 0 ? !1 : c,
        h = d === void 0 ? !1 : d,
        y = m === void 0 ? !0 : m,
        C = r("useFDSDialogPageHeightStyle")(),
        b = !g,
        v = g && u.inert,
        S;
      t[0] !== v
        ? ((S = [u.container, v]), (t[0] = v), (t[1] = S))
        : (S = t[1]);
      var R;
      t[2] !== n || t[3] !== S
        ? ((R = s.jsx(o("react-strict-dom").html.div, {
            style: S,
            children: n,
          })),
          (t[2] = n),
          (t[3] = S),
          (t[4] = R))
        : (R = t[4]);
      var L;
      t[5] !== b || t[6] !== R
        ? ((L = s.jsx(r("FocusInertRegion.react"), {
            disabled: b,
            focusQuery: o("focusScopeQueries").tabbableScopeQuery,
            children: R,
          })),
          (t[5] = b),
          (t[6] = R),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k = h && u.rootFullHeight,
        I;
      t[8] !== k ? ((I = [k]), (t[8] = k), (t[9] = I)) : (I = t[9]);
      var T = y && n != null && u.rootMinHeight,
        D;
      t[10] !== T ? ((D = [T]), (t[10] = T), (t[11] = D)) : (D = t[11]);
      var x = h && y && n != null && u.rootFullAndMinHeight,
        $;
      t[12] !== x ? (($ = [x]), (t[12] = x), (t[13] = $)) : ($ = t[13]);
      var P;
      t[14] !== C || t[15] !== p || t[16] !== I || t[17] !== D || t[18] !== $
        ? ((P = [u.root, I, D, $, C, p]),
          (t[14] = C),
          (t[15] = p),
          (t[16] = I),
          (t[17] = D),
          (t[18] = $),
          (t[19] = P))
        : (P = t[19]);
      var N;
      t[20] !== n || t[21] !== E || t[22] !== f || t[23] !== _
        ? ((N =
            n != null &&
            s.jsx(r("BaseHeadingContextWrapper.react"), {
              children: f
                ? E
                : s.jsx(r("BaseScrollableArea.react"), {
                    horizontal: !1,
                    ref: _,
                    vertical: !0,
                    withBottomShadow: !0,
                    withTopShadow: !0,
                    xstyle: u.scrollableArea,
                    children: E,
                  }),
            })),
          (t[20] = n),
          (t[21] = E),
          (t[22] = f),
          (t[23] = _),
          (t[24] = N))
        : (N = t[24]);
      var M;
      return (
        t[25] !== i || t[26] !== l || t[27] !== P || t[28] !== N
          ? ((M = s.jsx(r("FDSGradientBorderContainer.react"), {
              children: s.jsxs(o("react-strict-dom").html.div, {
                style: P,
                children: [l, N, i],
              }),
            })),
            (t[25] = i),
            (t[26] = l),
            (t[27] = P),
            (t[28] = N),
            (t[29] = M))
          : (M = t[29]),
        M
      );
    }
    l.default = c;
  },
  98,
);
