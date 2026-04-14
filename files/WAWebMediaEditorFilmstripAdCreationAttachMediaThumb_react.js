__d(
  "WAWebMediaEditorFilmstripAdCreationAttachMediaThumb.react",
  [
    "fbt",
    "WAWebBizAdCreationCreativeThumbnail.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebStateUtils",
    "WDSIconIcClose.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = { overlayIconColor: { color: "x17t9dm2", $$css: !0 } };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.attachMedia,
        l = a.isActive,
        u = a.onDeleteClick,
        p = a.onSelectClick,
        _ = d(!1),
        f = _[0],
        g = _[1],
        h = function (t) {
          (t.stopPropagation(), u(o("WAWebStateUtils").unproxy(i), t));
        },
        y = function (t) {
          (t.stopPropagation(), p(o("WAWebStateUtils").unproxy(i), t));
        },
        C = function (t) {
          r("WAWebKeyboardIsKeyActivation")(t) &&
            (t.stopPropagation(), t.preventDefault(), y(t));
        };
      return c.jsxs(
        "button",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x9f619 xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1sbwfh8 x16q7b9a x1vjfegm",
            },
            1: {
              className:
                "x9f619 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1sbwfh8 x16q7b9a x1vjfegm xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf",
            },
          }[(l === !0) << 0],
          {
            onMouseEnter: function () {
              return g(!0);
            },
            onMouseLeave: function () {
              return g(!1);
            },
            onClick: y,
            onKeyPress: C,
            "aria-label": s._(/*BTDS*/ "Image thumbnail"),
            ref: n,
            children: [
              c.jsx(r("WAWebBizAdCreationCreativeThumbnail.react"), {
                attachMediaProp: i,
                variant: "Editor",
              }),
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x1trrmfo x78zum5 x1ngp85i xe9xzdg xg01cxk x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h",
                    },
                    1: {
                      className:
                        "x1trrmfo x78zum5 x1ngp85i xe9xzdg x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h x1hc1fzr",
                    },
                  }[!!f << 0],
                  {
                    children: c.jsx("button", {
                      className:
                        "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xmix8c7 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xp8n7a",
                      onClick: h,
                      "aria-label": s._(/*BTDS*/ "Delete media"),
                      children: c.jsx(r("WDSIconIcClose.react"), {
                        height: 12,
                        width: 12,
                        iconXstyle: m.overlayIconColor,
                      }),
                    }),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
