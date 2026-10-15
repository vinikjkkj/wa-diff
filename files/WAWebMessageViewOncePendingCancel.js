__d(
  "WAWebMessageViewOncePendingCancel",
  [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSpinner.react",
    "WDSIconIcClose.react",
    "react",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        inactiveIconSvg: { opacity: "xbyyjgo", $$css: !0 },
        spinner: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.onClick,
        n = r("useWAWebStaticButtonA11y")(t),
        a = n[0],
        i = n[1],
        l = t == null,
        c = l ? i : {};
      return s.jsxs(
        "div",
        babelHelpers.extends(
          {
            className: {
              0: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h",
              1: "x1n2onr6 x78zum5 x3psx0u x6s0dn4 xl56j7k xvy4d1p xxk0z11 xdj266r x7g7pl8 xat24cr x3n7f7h x1h6gzvc",
            }[!!l << 0],
            ref: a,
            "aria-label": r("WAWebFbtCommon")("Cancel"),
          },
          c,
          {
            children: [
              s.jsx("div", {
                className: "xhslqc4",
                children: s.jsx(r("WDSIconIcClose.react"), {
                  height: 14,
                  iconXstyle: l && u.inactiveIconSvg,
                  width: 14,
                }),
              }),
              s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: u.spinner,
                align: "center",
                justify: "center",
                children: s.jsx(o("WAWebSpinner.react").Spinner, {
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
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
