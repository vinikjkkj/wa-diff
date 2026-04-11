__d(
  "WAWebChatInfoActionButton.react",
  [
    "WAWebRound.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState,
      p = {
        button: { textAlign: "x2b8uid", $$css: !0 },
        label: {
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          fontSize: "x1nxh6w3",
          marginTop: "x1gslohp",
          color: "x1v5yvga",
          $$css: !0,
        },
        disabled: { opacity: "xyd83as", $$css: !0 },
        tealColor: { color: "x1v5yvga", $$css: !0 },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.Icon,
        i = t.ariaLabel,
        l = t.disabled,
        s = t.iconHeight,
        c = t.iconWidth,
        d = t.label,
        m = t.onClick,
        _ = t.ref,
        g = t.testid,
        h = t.xstyle,
        y = f(),
        C = y.isHovered,
        b = y.onMouseEnter,
        v = y.onMouseLeave,
        S = l === !0,
        R;
      n[0] !== a || n[1] !== s || n[2] !== c
        ? ((R = u.jsx(a, {
            iconXstyle: p.tealColor,
            directional: !0,
            height: s,
            width: c,
          })),
          (n[0] = a),
          (n[1] = s),
          (n[2] = c),
          (n[3] = R))
        : (R = n[3]);
      var L = R,
        E;
      n[4] !== S || n[5] !== h
        ? ((E = (e || (e = r("stylex"))).props(p.button, S && p.disabled, h)),
          (n[4] = S),
          (n[5] = h),
          (n[6] = E))
        : (E = n[6]);
      var k = i != null ? i : d,
        I = S || !C,
        T;
      n[7] !== l || n[8] !== L || n[9] !== I
        ? ((T = u.jsx(o("WAWebRound.react").Round, {
            disabled: l,
            hideBackground: I,
            inverted: !0,
            children: L,
          })),
          (n[7] = l),
          (n[8] = L),
          (n[9] = I),
          (n[10] = T))
        : (T = n[10]);
      var D;
      n[11] !== l ||
      n[12] !== d ||
      n[13] !== m ||
      n[14] !== b ||
      n[15] !== v ||
      n[16] !== k ||
      n[17] !== T ||
      n[18] !== g
        ? ((D = u.jsxs(r("WAWebUnstyledButton.react"), {
            "aria-label": k,
            disabled: l,
            onClick: m,
            onMouseEnter: b,
            onMouseLeave: v,
            testid: void 0,
            xstyle: p.label,
            children: [T, d],
          })),
          (n[11] = l),
          (n[12] = d),
          (n[13] = m),
          (n[14] = b),
          (n[15] = v),
          (n[16] = k),
          (n[17] = T),
          (n[18] = g),
          (n[19] = D))
        : (D = n[19]);
      var x;
      return (
        n[20] !== _ || n[21] !== E || n[22] !== D
          ? ((x = u.jsx(
              "div",
              babelHelpers.extends({ ref: _ }, E, { children: D }),
            )),
            (n[20] = _),
            (n[21] = E),
            (n[22] = D),
            (n[23] = x))
          : (x = n[23]),
        x
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(4),
        t = m(!1),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            r(!0);
          }),
          (e[0] = a))
        : (a = e[0]);
      var i = a,
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            r(!1);
          }),
          (e[1] = l))
        : (l = e[1]);
      var s = l,
        u;
      return (
        e[2] !== n
          ? ((u = { isHovered: n, onMouseEnter: i, onMouseLeave: s }),
            (e[2] = n),
            (e[3] = u))
          : (u = e[3]),
        u
      );
    }
    l.default = _;
  },
  98,
);
