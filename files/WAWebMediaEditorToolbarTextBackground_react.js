__d(
  "WAWebMediaEditorToolbarTextBackground.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebMediaEditorToolbarButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        checkedSvg: {
          position: "x10l6tqk",
          top: "x1pdr0v7",
          width: "x1kky2od",
          height: "xlup9mm",
          color: "x1r3oa16",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.checked,
        n = e.onBackgroundToggle,
        r = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
              },
              1: {
                className:
                  "x1518k6t x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
              },
            }[!!t << 0],
            {
              children: t
                ? u.jsx("div", {
                    children: u.jsx(
                      o("WAWebCheckmarkIcon.react").CheckmarkIcon,
                      { iconXstyle: c.checkedSvg },
                    ),
                  })
                : u.jsx("div", {
                    className:
                      "x10l6tqk xs7f9wi xaoy8p5 x1dpw5q9 x10msahz x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                  }),
            },
          ),
        );
      return u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
        icon: r,
        onClick: n,
        children: s._(/*BTDS*/ "Background"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
