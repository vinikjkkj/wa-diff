__d(
  "WAWebBizTwoColumnLayout.react",
  [
    "WAWebFlexBox.react",
    "WAWebResizeObserver.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = 24,
      d = 20,
      m = 1084,
      p = 380,
      _ = p * 2 + d + c * 2,
      f = {
        primary: { minWidth: "x1snuils", rowGap: "x1f0uite", $$css: !0 },
        largeScreenPrimary: { flexGrow: "xgyuaek", $$css: !0 },
        root: {
          alignContent: "xc26acl",
          columnGap: "x1mn2tih",
          display: "x78zum5",
          height: "x5yr21d",
          maxWidth: "x1unwqui",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          rowGap: "x1f0uite",
          width: "xh8yej3",
          $$css: !0,
        },
        largeScreenRoot: { justifyContent: "xl56j7k", $$css: !0 },
        secondary: {
          height: "xg7h5cd",
          minWidth: "x1snuils",
          rowGap: "x1f0uite",
          $$css: !0,
        },
        largeScreenSecondary: {
          flexGrow: "x1iyjqo2",
          position: "x7wzq59",
          top: "x242muq",
          $$css: !0,
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.flipResizeOrder,
        a = e.primaryContent,
        i = e.secondaryContent,
        l = n === void 0 ? !1 : n,
        c = u(!1),
        d = c[0],
        m = c[1],
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (t) {
            m(t.width <= _);
          }),
          (t[0] = p))
        : (p = t[0]);
      var g = p,
        h = l && d && i != null,
        y = !d && f.largeScreenPrimary,
        C;
      t[1] !== y ? ((C = [f.primary, y]), (t[1] = y), (t[2] = C)) : (C = t[2]);
      var b;
      t[3] !== a || t[4] !== C
        ? ((b = s.jsx(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: C,
            align: "stretch",
            children: a,
          })),
          (t[3] = a),
          (t[4] = C),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] !== d || t[7] !== i
        ? ((S =
            i != null &&
            s.jsx(o("WAWebFlexBox.react").FlexColumn, {
              xstyle: [f.secondary, !d && f.largeScreenSecondary],
              children: i,
            })),
          (t[6] = d),
          (t[7] = i),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = "xh8yej3 xc26acl xl56j7k x78zum5 x5yr21d"), (t[9] = L))
        : (L = t[9]);
      var E = d ? "vertical" : "horizontal",
        k = !d && f.largeScreenRoot,
        I;
      t[10] !== k ? ((I = [f.root, k]), (t[10] = k), (t[11] = I)) : (I = t[11]);
      var T;
      t[12] !== v || t[13] !== R || t[14] !== h
        ? ((T = h
            ? s.jsxs(s.Fragment, { children: [R, v] })
            : s.jsxs(s.Fragment, { children: [v, R] })),
          (t[12] = v),
          (t[13] = R),
          (t[14] = h),
          (t[15] = T))
        : (T = t[15]);
      var D;
      return (
        t[16] !== I || t[17] !== T || t[18] !== E
          ? ((D = s.jsx(r("WAWebResizeObserver.react"), {
              className: L,
              onResize: g,
              children: s.jsx(o("WAWebFlexBox.react").FlexItem, {
                direction: E,
                flex: !0,
                xstyle: I,
                children: T,
              }),
            })),
            (t[16] = I),
            (t[17] = T),
            (t[18] = E),
            (t[19] = D))
          : (D = t[19]),
        D
      );
    }
    l.default = g;
  },
  98,
);
