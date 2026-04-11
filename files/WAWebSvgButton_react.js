__d(
  "WAWebSvgButton.react",
  [
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "Icon",
        "aria-expanded",
        "aria-haspopup",
        "aria-label",
        "className_DONOTUSE",
        "dataTab",
        "disabled",
        "onClick",
        "tabIndex",
        "testid",
        "title",
        "type",
        "xstyle",
      ],
      u,
      c = u || (u = o("react")),
      d = { disabled: { opacity: "x5dmra7", $$css: !0 } };
    function m(t) {
      var n = o("react-compiler-runtime").c(39),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, m, p, _, f, g, h, y, C, b, v, S, R;
      if (n[3] !== a) {
        var L = a;
        ((l = L.Icon),
          (u = L["aria-expanded"]),
          (m = L["aria-haspopup"]),
          (p = L["aria-label"]),
          (_ = L.className_DONOTUSE),
          (f = L.dataTab),
          (g = L.disabled),
          (h = L.onClick),
          (C = L.tabIndex),
          (b = L.testid),
          (v = L.title),
          (S = L.type),
          (R = L.xstyle),
          (y = babelHelpers.objectWithoutPropertiesLoose(L, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = m),
          (n[7] = p),
          (n[8] = _),
          (n[9] = f),
          (n[10] = g),
          (n[11] = h),
          (n[12] = y),
          (n[13] = C),
          (n[14] = b),
          (n[15] = v),
          (n[16] = S),
          (n[17] = R));
      } else
        ((l = n[4]),
          (u = n[5]),
          (m = n[6]),
          (p = n[7]),
          (_ = n[8]),
          (f = n[9]),
          (g = n[10]),
          (h = n[11]),
          (y = n[12]),
          (C = n[13]),
          (b = n[14]),
          (v = n[15]),
          (S = n[16]),
          (R = n[17]));
      var E;
      n[18] !== R
        ? ((E = [R, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus]),
          (n[18] = R),
          (n[19] = E))
        : (E = n[19]);
      var k = g === !0 && d.disabled,
        I;
      n[20] !== l || n[21] !== y || n[22] !== k
        ? ((I = c.jsx(l, babelHelpers.extends({}, y, { xstyle: k }))),
          (n[20] = l),
          (n[21] = y),
          (n[22] = k),
          (n[23] = I))
        : (I = n[23]);
      var T;
      return (
        n[24] !== u ||
        n[25] !== m ||
        n[26] !== p ||
        n[27] !== _ ||
        n[28] !== f ||
        n[29] !== g ||
        n[30] !== h ||
        n[31] !== i ||
        n[32] !== E ||
        n[33] !== I ||
        n[34] !== C ||
        n[35] !== b ||
        n[36] !== v ||
        n[37] !== S
          ? ((T = c.jsx(r("WAWebUnstyledButton.react"), {
              ref: i,
              xstyle: E,
              disabled: g,
              onClick: h,
              "aria-label": p,
              "aria-haspopup": m,
              "aria-expanded": u,
              title: v,
              dataTab: f,
              className_DONOTUSE: _,
              type: S,
              testid: void 0,
              tabIndex: C,
              children: I,
            })),
            (n[24] = u),
            (n[25] = m),
            (n[26] = p),
            (n[27] = _),
            (n[28] = f),
            (n[29] = g),
            (n[30] = h),
            (n[31] = i),
            (n[32] = E),
            (n[33] = I),
            (n[34] = C),
            (n[35] = b),
            (n[36] = v),
            (n[37] = S),
            (n[38] = T))
          : (T = n[38]),
        T
      );
    }
    l.default = m;
  },
  98,
);
