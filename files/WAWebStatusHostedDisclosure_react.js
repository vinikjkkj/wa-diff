__d(
  "WAWebStatusHostedDisclosure.react",
  [
    "fbt",
    "WAWebTextWithLearnMoreLink",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
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
      var n = t.handleClick,
        a = t.withFutureproofing,
        i = s._(
          /*BTDS*/ "This business uses a secure service from Meta to manage this chat.",
        ),
        l = c.jsx("div", {
          children: c.jsx(r("WAWebTextWithLearnMoreLink"), {
            text: i,
            handleClick: n,
          }),
        });
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            d.container,
            a && d.withFutureproofing,
            o("WAWebUISpacing").uiMargin.startAuto,
            o("WAWebUISpacing").uiMargin.endAuto,
          ),
          {
            children: c.jsx("div", {
              className:
                "x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x11t971q xvc5jky x17t9dm2 x2b8uid x1c8ul09 x1ypdohk x1c3i2sq xwn7fz2",
              children: c.jsx(r("WAWebUnstyledButton.react"), {
                onClick: n,
                children: c.jsxs("div", {
                  className:
                    "x1p57kb1 xvpt6g3 x1x727zr xti11r0 xuix1fa x1mzt3pk",
                  children: [" ", l, " "],
                }),
              }),
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
