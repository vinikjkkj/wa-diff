__d(
  "WAWebRow.react",
  [
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { clickable: { cursor: "x1ypdohk", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t["aria-label"],
        i = t.children,
        l = t.ellipsify,
        s = t.onClick,
        d = t.side,
        m = t.testid,
        p = t.xstyle,
        _ = l === void 0 ? !1 : l,
        f;
      n[0] !== s || n[1] !== p
        ? ((f = (e || (e = r("stylex")))(
            s && c.clickable,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            p,
          )),
          (n[0] = s),
          (n[1] = p),
          (n[2] = f))
        : (f = n[2]);
      var g = f,
        h;
      n[3] !== _
        ? ((h = {
            0: "x12lumcd x6ikm8r x10wlt62",
            1: "x12lumcd x1n2onr6 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
          }[!!_ << 0]),
          (n[3] = _),
          (n[4] = h))
        : (h = n[4]);
      var y = h,
        C;
      n[5] !== d
        ? ((C =
            d != null
              ? u.jsx("div", { className: "x1okw0bk x1hm9lzh", children: d })
              : null),
          (n[5] = d),
          (n[6] = C))
        : (C = n[6]);
      var b = C,
        v,
        S = r("useWAWebStaticButtonA11y")(s),
        R = S[0],
        L = S[1];
      if (s != null) {
        var E;
        (n[7] !== L || n[8] !== R
          ? ((E = babelHelpers.extends({ ref: R }, L)),
            (n[7] = L),
            (n[8] = R),
            (n[9] = E))
          : (E = n[9]),
          (v = E));
      }
      var k = v,
        I;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x78zum5 x6s0dn4" }), (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] !== i || n[12] !== y
        ? ((T = u.jsx("div", { className: y, children: i })),
          (n[11] = i),
          (n[12] = y),
          (n[13] = T))
        : (T = n[13]);
      var D;
      n[14] !== b || n[15] !== T
        ? ((D = u.jsxs(
            "div",
            babelHelpers.extends({}, I, { children: [T, b] }),
          )),
          (n[14] = b),
          (n[15] = T),
          (n[16] = D))
        : (D = n[16]);
      var x;
      return (
        n[17] !== a || n[18] !== g || n[19] !== v || n[20] !== D || n[21] !== m
          ? ((x = u.jsx(
              "div",
              babelHelpers.extends(
                { className: g, "aria-label": a, "data-testid": void 0 },
                k,
                { children: D },
              ),
            )),
            (n[17] = a),
            (n[18] = g),
            (n[19] = v),
            (n[20] = D),
            (n[21] = m),
            (n[22] = x))
          : (x = n[22]),
        x
      );
    }
    l.default = d;
  },
  98,
);
