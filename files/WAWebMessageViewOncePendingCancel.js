__d(
  "WAWebMessageViewOncePendingCancel",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebSpinner.react",
    "WAWebXSoftIcon.react",
    "react",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { inactiveIconSvg: { opacity: "xbyyjgo", $$css: !0 } };
    function d(e) {
      var t = e.onClick,
        n = r("useWAWebStaticButtonA11y")(t),
        a = n[0],
        i = n[1],
        l = t == null,
        d = l ? i : {};
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {
            className: {
              0: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h",
              1: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h x1h6gzvc",
            }[!!l << 0],
            ref: a,
            "aria-label": s._(/*BTDS*/ "Cancel"),
          },
          d,
          {
            children: [
              u.jsx("div", {
                className: "x1ll7wkd",
                children: u.jsx(o("WAWebXSoftIcon.react").XSoftIcon, {
                  iconXstyle: l && c.inactiveIconSvg,
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexRow, {
                className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
                align: "center",
                justify: "center",
                children: u.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "accent",
                  size: 18,
                  stroke: 5,
                }),
              }),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
