__d(
  "WAWebMediaEditorToolbarFilterOption.react",
  [
    "ReactKonva",
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebMediaEditorUtilsFilters",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState,
      p = {
        checkmarkIconStyle: {
          position: "x10l6tqk",
          color: "x1awj2ng",
          opacity: "x1hc1fzr",
          zIndex: "xhtitgo",
          $$css: !0,
        },
      };
    function _(t) {
      var n = t.filter,
        r = t.imageUrl,
        a = t.onFilterChange,
        i = t.onHover,
        l = t.selected,
        s = {
          0: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx",
          1: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx x1fh42yi",
        }[!!l << 0],
        c = o("WAWebMediaEditorUtilsFilters").getFilterValue(n),
        _ = c.toString() + " filter",
        f = m(null),
        g = f[0],
        h = f[1];
      d(
        function () {
          r && (g == null || g.cache());
        },
        [r, g],
      );
      var y = function () {
          return a(n);
        },
        C = function () {
          return i(n);
        },
        b = function () {
          return i(null);
        },
        v = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(n),
        S = o("WAWebMediaEditorUtilsFilters").getFilterPresets(n),
        R = S.composition,
        L = S.overlay,
        E = babelHelpers.objectWithoutPropertiesLoose(S, e);
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        children: u.jsxs("div", {
          "data-testid": void 0,
          className: "x1n2onr6 x1247r65 x1mgsydn x78zum5 xdt5ytf x6s0dn4",
          onClick: y,
          onKeyPress: y,
          onTouchStart: y,
          role: "button",
          tabIndex: 0,
          "aria-label": _,
          "aria-pressed": l,
          onMouseOver: C,
          onMouseLeave: b,
          onFocus: C,
          onBlur: b,
          children: [
            u.jsxs("div", {
              className:
                "x1n2onr6 x1useyqa xsdox4t xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 x1277o0a x14snt5h x18br7mf",
              children: [
                u.jsx(o("ReactKonva").Stage, {
                  width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                  height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                  children: u.jsx(o("ReactKonva").Layer, {
                    children:
                      r &&
                      u.jsxs(o("ReactKonva").Group, {
                        children: [
                          u.jsx(
                            o("ReactKonva").Image,
                            babelHelpers.extends(
                              {
                                ref: h,
                                image: r,
                                width: o("WAWebMediaEditorUtilsFilters")
                                  .IMAGE_DIMENSION,
                                height: o("WAWebMediaEditorUtilsFilters")
                                  .IMAGE_DIMENSION,
                                crop: {
                                  x: Math.max((r.width - r.height) / 2, 0),
                                  y: Math.max((r.height - r.width) / 2, 0),
                                  width: Math.min(r.width, r.height),
                                  height: Math.min(r.width, r.height),
                                },
                                filters: v,
                              },
                              E,
                            ),
                          ),
                          u.jsx(o("ReactKonva").Rect, {
                            width: o("WAWebMediaEditorUtilsFilters")
                              .IMAGE_DIMENSION,
                            height: o("WAWebMediaEditorUtilsFilters")
                              .IMAGE_DIMENSION,
                            fill: L,
                            globalCompositeOperation: R,
                          }),
                        ],
                      }),
                  }),
                }),
                l &&
                  u.jsx("div", {
                    className:
                      "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jxbiih x18km98s xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x6s0dn4 xl56j7k x1vjfegm",
                    children: u.jsx(
                      o("WAWebCheckmarkIcon.react").CheckmarkIcon,
                      { xstyle: p.checkmarkIconStyle },
                    ),
                  }),
              ],
            }),
            u.jsx("span", { className: s, children: c }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
