__d(
  "WAWebBizBroadcastsNewBroadcastAddButton.react",
  [
    "WAWebUnstyledButton.react",
    "WDSIconIcAdd.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = {
        addButtonContainer: {
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          width: "xh8yej3",
          $$css: !0,
        },
        addButtonContainerHovered: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginInlineStart: "x1ho36z8",
          marginInlineEnd: "xpuwrge",
          marginLeft: null,
          marginRight: null,
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          width: "x7g32hz",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.buttonLabel,
        a = e.contextMenu,
        i = e.onButtonClick,
        l = e.position,
        u = e.testid,
        p = c(null),
        _ = d(!1),
        f = _[0],
        g = _[1],
        h;
      t[0] !== a || t[1] !== l
        ? ((h = { enableUIM: !1, menu: a, position: l, targetRef: p }),
          (t[0] = a),
          (t[1] = l),
          (t[2] = h))
        : (h = t[2]);
      var y = r("useWDSMenu")(h),
        C = y.isMenuOpen,
        b = y.menuPortal,
        v = y.openMenu,
        S = f && m.addButtonContainerHovered,
        R;
      t[3] !== S
        ? ((R = [m.addButtonContainer, S]), (t[3] = S), (t[4] = R))
        : (R = t[4]);
      var L;
      t[5] !== i || t[6] !== v
        ? ((L = function () {
            (i == null || i(), v());
          }),
          (t[5] = i),
          (t[6] = v),
          (t[7] = L))
        : (L = t[7]);
      var E, k;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return g(!0);
          }),
          (k = function () {
            return g(!1);
          }),
          (t[8] = E),
          (t[9] = k))
        : ((E = t[8]), (k = t[9]));
      var I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s.jsx("div", {
            className:
              "x6s0dn4 x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 xc9qbxq xl56j7k x14qfxbe",
            children: s.jsx(r("WDSIconIcAdd.react"), { testid: void 0 }),
          })),
          (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== n
        ? ((T = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            testid: void 0,
            children: n,
          })),
          (t[11] = n),
          (t[12] = T))
        : (T = t[12]);
      var D;
      t[13] !== n ||
      t[14] !== C ||
      t[15] !== R ||
      t[16] !== L ||
      t[17] !== T ||
      t[18] !== u
        ? ((D = s.jsxs(r("WAWebUnstyledButton.react"), {
            ref: p,
            "aria-expanded": C,
            "aria-haspopup": "menu",
            "aria-label": n,
            xstyle: R,
            onClick: L,
            onMouseEnter: E,
            onMouseLeave: k,
            testid: void 0,
            children: [I, T],
          })),
          (t[13] = n),
          (t[14] = C),
          (t[15] = R),
          (t[16] = L),
          (t[17] = T),
          (t[18] = u),
          (t[19] = D))
        : (D = t[19]);
      var x;
      return (
        t[20] !== b || t[21] !== D
          ? ((x = s.jsxs(s.Fragment, { children: [D, b] })),
            (t[20] = b),
            (t[21] = D),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    l.default = p;
  },
  98,
);
