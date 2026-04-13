__d(
  "WAWebStatusHostedDisclosure.react",
  [
    "fbt",
    "WAWebTextWithLearnMoreLink",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          width: "xlybum",
          position: "x10l6tqk",
          bottom: "x11unvnq",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          $$css: !0,
        },
        withFutureproofing: { bottom: "x4tydyf", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.handleClick,
        i = t.withFutureproofing,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(
            /*BTDS*/ "This business uses a secure service from Meta to manage this chat.",
          )),
          (n[0] = l))
        : (l = n[0]);
      var u = l,
        m;
      n[1] !== a
        ? ((m = c.jsx("div", {
            children: c.jsx(r("WAWebTextWithLearnMoreLink"), {
              text: u,
              handleClick: a,
            }),
          })),
          (n[1] = a),
          (n[2] = m))
        : (m = n[2]);
      var p = m,
        _;
      n[3] !== i
        ? ((_ = (e || (e = r("stylex"))).props(
            d.container,
            i && d.withFutureproofing,
            o("WAWebUISpacing").uiMargin.startAuto,
            o("WAWebUISpacing").uiMargin.endAuto,
          )),
          (n[3] = i),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x11t971q xvc5jky x17t9dm2 x2b8uid x1c8ul09 x1ypdohk x1c3i2sq xwn7fz2",
          }),
          (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className: "x1p57kb1 xvpt6g3 x1x727zr xti11r0 xuix1fa x1mzt3pk",
          }),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] !== p
        ? ((h = c.jsxs(
            "div",
            babelHelpers.extends({}, g, { children: [" ", p, " "] }),
          )),
          (n[7] = p),
          (n[8] = h))
        : (h = n[8]);
      var y;
      n[9] !== a || n[10] !== h
        ? ((y = c.jsx(
            "div",
            babelHelpers.extends({}, f, {
              children: c.jsx(r("WAWebUnstyledButton.react"), {
                onClick: a,
                children: h,
              }),
            }),
          )),
          (n[9] = a),
          (n[10] = h),
          (n[11] = y))
        : (y = n[11]);
      var C;
      return (
        n[12] !== _ || n[13] !== y
          ? ((C = c.jsx("div", babelHelpers.extends({}, _, { children: y }))),
            (n[12] = _),
            (n[13] = y),
            (n[14] = C))
          : (C = n[14]),
        C
      );
    }
    l.default = m;
  },
  226,
);
