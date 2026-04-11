__d(
  "WAWebAddCustomerContactRow.react",
  [
    "WAWebContactImage.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.contact,
        a = e.onClick,
        i;
      t[0] !== n
        ? ((i = o("WAWebFrontendContactGetters").getDisplayName(n)),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      t[2] !== n
        ? ((u = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(
            n,
          )),
          (t[2] = n),
          (t[3] = u))
        : (u = t[3]);
      var c = u,
        d = n.username != null && n.username !== "" ? "@" + n.username : null,
        m;
      t[4] !== n || t[5] !== a
        ? ((m = function () {
            a(n);
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = m))
        : (m = t[6]);
      var p = m,
        _;
      t[7] !== n || t[8] !== a
        ? ((_ = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), a(n));
          }),
          (t[7] = n),
          (t[8] = a),
          (t[9] = _))
        : (_ = t[9]);
      var f = _,
        g;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className:
              "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x16ovd2e x12xbjc7 x1iw51ew xde1mab x1ypdohk xjbqb8w xkd4ks6",
          }),
          (t[10] = g))
        : (g = t[10]);
      var h;
      t[11] !== n
        ? ((h = s.jsx(r("WAWebContactImage.react"), { contact: n, size: 32 })),
          (t[11] = n),
          (t[12] = h))
        : (h = t[12]);
      var y, C;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            className: "x78zum5 xdt5ytf xeuugli x1iyjqo2 xs83m0k x1r8uery",
          }),
          (C = { className: "x78zum5 x1q0g3np x1pha0wt x1trrmfo" }),
          (t[13] = y),
          (t[14] = C))
        : ((y = t[13]), (C = t[14]));
      var b;
      t[15] !== l
        ? ((b = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            maxLines: 1,
            children: l,
          })),
          (t[15] = l),
          (t[16] = b))
        : (b = t[16]);
      var v;
      t[17] !== d
        ? ((v =
            d != null &&
            s.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: d,
            })),
          (t[17] = d),
          (t[18] = v))
        : (v = t[18]);
      var S;
      t[19] !== v || t[20] !== b
        ? ((S = s.jsxs(
            "div",
            babelHelpers.extends({}, C, { children: [b, v] }),
          )),
          (t[19] = v),
          (t[20] = b),
          (t[21] = S))
        : (S = t[21]);
      var R;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {
            className:
              "x78zum5 x1q0g3np x6s0dn4 x1trrmfo x6ikm8r x10wlt62 xuxw1ft xlyipyv",
          }),
          (t[22] = R))
        : (R = t[22]);
      var L;
      t[23] !== c
        ? ((L =
            c !== "" &&
            s.jsx(r("WDSText.react"), {
              type: "Body3",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: c,
            })),
          (t[23] = c),
          (t[24] = L))
        : (L = t[24]);
      var E;
      t[25] !== L
        ? ((E = s.jsx("div", babelHelpers.extends({}, R, { children: L }))),
          (t[25] = L),
          (t[26] = E))
        : (E = t[26]);
      var k;
      t[27] !== S || t[28] !== E
        ? ((k = s.jsxs(
            "div",
            babelHelpers.extends({}, y, { children: [S, E] }),
          )),
          (t[27] = S),
          (t[28] = E),
          (t[29] = k))
        : (k = t[29]);
      var I;
      return (
        t[30] !== p || t[31] !== f || t[32] !== k || t[33] !== h
          ? ((I = s.jsxs(
              "div",
              babelHelpers.extends({}, g, {
                onClick: p,
                onKeyDown: f,
                role: "button",
                tabIndex: 0,
                "data-testid": void 0,
                children: [h, k],
              }),
            )),
            (t[30] = p),
            (t[31] = f),
            (t[32] = k),
            (t[33] = h),
            (t[34] = I))
          : (I = t[34]),
        I
      );
    }
    l.default = c;
  },
  98,
);
