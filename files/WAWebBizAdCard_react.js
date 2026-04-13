__d(
  "WAWebBizAdCard.react",
  [
    "WAWebBizAdCreationSectionDivider.react",
    "WAWebBizAdsErrorBoundary.react",
    "WAWebBizGenericErrorCard.react",
    "WAWebBizShimmerRows.react",
    "WAWebFlex.react",
    "WDSText.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.Suspense,
      d = u.useRef,
      m = {
        content: { rowGap: "x8a3fw1", width: "xh8yej3", $$css: !0 },
        header: {
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        headerContent: { rowGap: "x1b73lln", $$css: !0 },
        titleRow: { columnGap: "x1trrmfo", $$css: !0 },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.children,
        a = e.ctaButton,
        i = e.fallback,
        l = e.header,
        u = e.headerTestid,
        p = e.showAccessoryOnHover,
        _ = e.subtitle,
        f = e.subtitleTestid,
        g = e.tip,
        h = e.titleAccessory,
        y = p === void 0 ? !0 : p,
        C;
      t[0] !== y || t[1] !== h
        ? ((C = h != null && y && r("justknobx")._("4259")),
          (t[0] = y),
          (t[1] = h),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v = d(null),
        S = o("useWAWebHover").useWAWebHover(v),
        R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R =
            "xqjyukv x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"),
          (t[3] = R))
        : (R = t[3]);
      var L;
      t[4] !== l || t[5] !== u || t[6] !== g
        ? ((L = s.jsx(r("WAWebBizAdCreationSectionDivider.react"), {
            title: l,
            tip: g,
            testid: void 0,
          })),
          (t[4] = l),
          (t[5] = u),
          (t[6] = g),
          (t[7] = L))
        : (L = t[7]);
      var E;
      t[8] !== S || t[9] !== b || t[10] !== h
        ? ((E =
            h != null &&
            s.jsx("span", {
              className: {
                0: "x3nfvp2 x19991ni xx6bhzk",
                1: "x3nfvp2 x19991ni xx6bhzk xg01cxk",
              }[!!(b && !S) << 0],
              children: h,
            })),
          (t[8] = S),
          (t[9] = b),
          (t[10] = h),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== L || t[13] !== E
        ? ((k = s.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.titleRow,
            align: "center",
            children: [L, E],
          })),
          (t[12] = L),
          (t[13] = E),
          (t[14] = k))
        : (k = t[14]);
      var I;
      t[15] !== _ || t[16] !== f
        ? ((I =
            _ != null &&
            s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              testid: void 0,
              children: _,
            })),
          (t[15] = _),
          (t[16] = f),
          (t[17] = I))
        : (I = t[17]);
      var T;
      t[18] !== k || t[19] !== I
        ? ((T = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: m.headerContent,
            children: [k, I],
          })),
          (t[18] = k),
          (t[19] = I),
          (t[20] = T))
        : (T = t[20]);
      var D;
      t[21] !== a || t[22] !== T
        ? ((D = s.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.header,
            children: [T, a],
          })),
          (t[21] = a),
          (t[22] = T),
          (t[23] = D))
        : (D = t[23]);
      var x;
      t[24] !== l
        ? ((x = l.toString()), (t[24] = l), (t[25] = x))
        : (x = t[25]);
      var $;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s.jsx(r("WAWebBizGenericErrorCard.react"), {})), (t[26] = $))
        : ($ = t[26]);
      var P;
      t[27] !== i
        ? ((P =
            i != null
              ? i
              : s.jsx(r("WAWebBizShimmerRows.react"), {
                  count: 3,
                  height: 16,
                })),
          (t[27] = i),
          (t[28] = P))
        : (P = t[28]);
      var N;
      t[29] !== n || t[30] !== P
        ? ((N = s.jsx(c, { fallback: P, children: n })),
          (t[29] = n),
          (t[30] = P),
          (t[31] = N))
        : (N = t[31]);
      var M;
      t[32] !== x || t[33] !== N
        ? ((M = s.jsx(r("WAWebBizAdsErrorBoundary.react"), {
            name: x,
            fallback: $,
            children: N,
          })),
          (t[32] = x),
          (t[33] = N),
          (t[34] = M))
        : (M = t[34]);
      var w;
      return (
        t[35] !== M || t[36] !== D
          ? ((w = s.jsx("div", {
              ref: v,
              className: R,
              children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: m.content,
                align: "stretch",
                children: [D, M],
              }),
            })),
            (t[35] = M),
            (t[36] = D),
            (t[37] = w))
          : (w = t[37]),
        w
      );
    }
    l.default = p;
  },
  98,
);
