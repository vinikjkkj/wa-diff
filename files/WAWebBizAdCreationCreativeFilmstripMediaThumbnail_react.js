__d(
  "WAWebBizAdCreationCreativeFilmstripMediaThumbnail.react",
  [
    "fbt",
    "WAWebBizAdCreationCreativeThumbnail.react",
    "WAWebStateUtils",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSSpinner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.attachMedia,
        l = a.disabled,
        u = a.loading,
        m = a.onDeleteClick,
        p = a.onEditClick,
        _ = a.uploading,
        f = _ === void 0 ? !1 : _,
        g = d(!1),
        h = g[0],
        y = g[1],
        C = function (t) {
          l || p(o("WAWebStateUtils").unproxy(i), t);
        },
        b = function (t) {
          l || m(o("WAWebStateUtils").unproxy(i), t);
        };
      return c.jsxs("div", {
        className:
          "x9f619 xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1vjfegm",
        onMouseEnter: function () {
          return y(!0);
        },
        onMouseLeave: function () {
          return y(!1);
        },
        "aria-label": s._(/*BTDS*/ "Image thumbnail"),
        "aria-busy": f,
        ref: n,
        children: [
          c.jsx(r("WAWebBizAdCreationCreativeThumbnail.react"), {
            attachMediaProp: i,
            variant: "Creative",
          }),
          f &&
            c.jsx("div", {
              className:
                "x6s0dn4 xng5x3b x78zum5 x13vifvy xtijo5x x1ey2m1c x1o0tod xl56j7k x10l6tqk xa9119d",
              role: "status",
              "aria-label": s._(/*BTDS*/ "Uploading media"),
              children: c.jsx(r("WDSSpinner.react"), { size: 28 }),
            }),
          !f &&
            c.jsxs(
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
                }[!!h << 0],
                {
                  children: [
                    c.jsx(r("WDSButton.react"), {
                      Icon: r("WDSIconIcEdit.react"),
                      variant: "tonal",
                      size: "small",
                      type: "media",
                      onPress: C,
                      disabled: !u && l,
                      loading: u,
                      "aria-label": s._(/*BTDS*/ "Edit media"),
                    }),
                    c.jsx(r("WDSButton.react"), {
                      Icon: r("WDSIconIcClose.react"),
                      variant: "tonal",
                      size: "small",
                      type: "media",
                      onPress: b,
                      disabled: l,
                      "aria-label": s._(/*BTDS*/ "Delete media"),
                    }),
                  ],
                },
              ),
            ),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
