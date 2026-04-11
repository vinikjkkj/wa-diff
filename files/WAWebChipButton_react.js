__d(
  "WAWebChipButton.react",
  [
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          position: "x1n2onr6",
          color: "xq49mwq",
          backgroundColor: "xlelruc",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          $$css: !0,
        },
        containerRefreshed: {
          color: "x1v5yvga",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
        icon: {
          display: "x1rg5ohu",
          position: "x10l6tqk",
          right: "x4a824z",
          insetInlineStart: null,
          insetInlineEnd: null,
          top: "x1jzctok",
          $$css: !0,
        },
        iconSvg: { color: "xq49mwq", $$css: !0 },
        iconSvgRefreshed: { color: "x1v5yvga", $$css: !0 },
        prefixIcon: {
          left: "x1rvfpmx",
          insetInlineStart: null,
          insetInlineEnd: null,
          $$css: !0,
        },
        paddedSvg: {
          paddingTop: "x4p5aij",
          paddingInlineEnd: "x1ccui7m",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "x18pi947",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.PostfixIcon,
        a = e.PrefixIcon,
        i = e.label,
        l = e.onClick,
        c = e.xstyle,
        d = e.iconTheme === "padded-svg",
        m = d ? u.paddedSvg : o("WAWebUISpacing").uiPadding.all4,
        p;
      t[0] !== m
        ? ((p = [u.iconSvg, u.iconSvgRefreshed, m]), (t[0] = m), (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f = d ? 20 : 16,
        g = d ? 20 : 16,
        h;
      t[2] !== f || t[3] !== g
        ? ((h = { width: f, height: g }), (t[2] = f), (t[3] = g), (t[4] = h))
        : (h = t[4]);
      var y = h,
        C = a != null && o("WAWebUISpacing").uiPadding.start36,
        b = n != null && o("WAWebUISpacing").uiPadding.end36,
        v;
      t[5] !== C || t[6] !== b || t[7] !== c
        ? ((v = [
            u.container,
            u.containerRefreshed,
            o("WAWebUISpacing").uiPadding.vert8,
            o("WAWebUISpacing").uiPadding.horiz12,
            C,
            b,
            c,
          ]),
          (t[5] = C),
          (t[6] = b),
          (t[7] = c),
          (t[8] = v))
        : (v = t[8]);
      var S = e["aria-label"],
        R;
      t[9] !== a || t[10] !== _ || t[11] !== y
        ? ((R =
            a &&
            s.jsx(
              a,
              babelHelpers.extends(
                {
                  xstyle: [
                    u.icon,
                    u.prefixIcon,
                    o("WAWebUISpacing").uiMargin.start5,
                  ],
                  iconXstyle: _,
                },
                y,
              ),
            )),
          (t[9] = a),
          (t[10] = _),
          (t[11] = y),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x1rg5ohu" }), (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== i
        ? ((E = s.jsx("div", babelHelpers.extends({}, L, { children: i }))),
          (t[14] = i),
          (t[15] = E))
        : (E = t[15]);
      var k;
      t[16] !== n || t[17] !== _ || t[18] !== y
        ? ((k =
            n &&
            s.jsx(
              n,
              babelHelpers.extends(
                {
                  xstyle: [u.icon, o("WAWebUISpacing").uiMargin.start5],
                  iconXstyle: _,
                },
                y,
              ),
            )),
          (t[16] = n),
          (t[17] = _),
          (t[18] = y),
          (t[19] = k))
        : (k = t[19]);
      var I;
      return (
        t[20] !== l ||
        t[21] !== E ||
        t[22] !== k ||
        t[23] !== v ||
        t[24] !== S ||
        t[25] !== R
          ? ((I = s.jsxs(r("WAWebUnstyledButton.react"), {
              xstyle: v,
              onClick: l,
              "aria-label": S,
              children: [R, E, k],
            })),
            (t[20] = l),
            (t[21] = E),
            (t[22] = k),
            (t[23] = v),
            (t[24] = S),
            (t[25] = R),
            (t[26] = I))
          : (I = t[26]),
        I
      );
    }
    l.default = c;
  },
  98,
);
