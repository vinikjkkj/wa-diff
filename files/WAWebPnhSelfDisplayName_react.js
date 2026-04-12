__d(
  "WAWebPnhSelfDisplayName.react",
  [
    "WAWebDetailImage.react",
    "WAWebPnhDisplayNameDarkIcon.react",
    "WAWebPnhDisplayNameIcon.react",
    "WAWebThemeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        customImage: {
          minWidth: "xnei2rj",
          marginInlineEnd: "xbelrpt",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.displayName,
        n = e.pictureWid,
        r = o("WAWebThemeContext").useIsDarkTheme(),
        a = r
          ? o("WAWebPnhDisplayNameDarkIcon.react").PnhDisplayNameDarkIcon
          : o("WAWebPnhDisplayNameIcon.react").PnhDisplayNameIcon;
      return s.jsxs("div", {
        className: "x1n2onr6",
        "data-testid": void 0,
        children: [
          s.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: {
                  className:
                    "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x12s5l72 x1wgpmmf x1g96rbh",
                },
                1: {
                  className:
                    "x10l6tqk xk50ysn x1jchvi3 xjkpybl x89mvso x1vjfegm x6ikm8r x10wlt62 xuxw1ft xlyipyv x1jtk2o2 x78zum5 x6s0dn4 x1q0g3np xfwv6vp x1f1nzxn x1gocmvm x12peec7",
                },
              }[(n != null) << 0],
              {
                children: [
                  n != null &&
                    s.jsx(o("WAWebDetailImage.react").DetailImage, {
                      id: n,
                      size: 24,
                      xstyle: u.customImage,
                    }),
                  s.jsx("div", {
                    className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv",
                    dir: "ltr",
                    children: t,
                  }),
                ],
              },
            ),
          ),
          s.jsx(a, { directional: !0 }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
