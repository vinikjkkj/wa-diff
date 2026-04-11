__d(
  "WDSButtonGroup.react",
  [
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "getPlatformByGK",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = r("react")),
      d = (e || (e = o("react"))).useMemo,
      m = {
        stickyContainer: {
          position: "x7wzq59",
          bottom: "x1ey2m1c",
          left: "xu96u03",
          right: "x3m8u43",
          insetInlineStart: null,
          insetInlineEnd: null,
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          zIndex: "x1vjfegm",
          minHeight: "x1lh6h5t",
          $$css: !0,
        },
        topSpacing: { paddingTop: "xl7twdi", $$css: !0 },
        fill: { width: "xh8yej3", $$css: !0 },
        hug: { width: "xeq5yr9", $$css: !0 },
        horizontalWrap: { flexWrap: "x8hhl5t", $$css: !0 },
        flexibleButton: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minWidth: "x1pshirs",
          $$css: !0,
        },
        placeholderButton: {
          visibility: "xlshs6z",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        stickyEnd: { justifyContent: "x13a6bvl", $$css: !0 },
      };
    function p(e) {
      var t = e.primaryButtonProps,
        n = e.secondaryButtonProps,
        a = e.tertiaryButtonProps,
        i = e.orientation,
        l = e.width,
        u = l === void 0 ? "fill" : l,
        p = e.sticky,
        _ = p === void 0 ? !1 : p,
        f = e.footnote,
        g = e.topSpacing,
        h = g === void 0 ? !1 : g,
        y = e.platform,
        C = y === void 0 ? o("getPlatformByGK").WDS_PLATFORM : y,
        b = e.maintainButtonPosition,
        v = b === void 0 ? !1 : b,
        S = C === "iOS" || C === "android",
        R = S ? "stacked" : "horizontal",
        L = i != null ? i : R,
        E = d(
          function () {
            var e = L === "horizontal" && u === "fill" && !_,
              o;
            e ? (o = "fit") : (o = u === "fill" ? "flexible" : "fit");
            var i = e ? m.flexibleButton : null,
              l = function (t, n, a) {
                return (
                  a === void 0 && (a = !1),
                  c.createElement(
                    r("WDSButton.react"),
                    babelHelpers.extends({}, t, {
                      widthMode: o,
                      key: n,
                      xstyle: [
                        u === "fill" ? m.fill : m.hug,
                        i,
                        a ? m.placeholderButton : null,
                        t.xstyle,
                      ],
                      platform: C,
                    }),
                  )
                );
              },
              s = l(t, "primary"),
              d = n ? l(n, "secondary") : null,
              p = a ? l(a, "tertiary") : null,
              f = [s];
            if ((d && f.push(d), p)) f.push(p);
            else if (v && L === "stacked") {
              var g = l(t, "placeholder", !0);
              f.push(g);
            }
            return (L === "horizontal" && f.reverse(), f);
          },
          [t, n, a, u, L, C, v, _],
        ),
        k = [
          L === "horizontal"
            ? o("WDSFlex.stylex").wdsFlex.flexRowCenter
            : o("WDSFlex.stylex").wdsFlex.flexColumnCenter,
          o("WDSFlex.stylex").wdsFlex.gapSingle,
          u === "fill" ? m.fill : m.hug,
          h === !0 && m.topSpacing,
          _ && m.stickyContainer,
          _ && L === "horizontal" && m.stickyEnd,
          L === "horizontal" && u === "fill" && !_ && m.horizontalWrap,
        ];
      return f != null
        ? c.jsxs("div", {
            className: "xh8yej3",
            role: "group",
            children: [
              c.jsx(
                "div",
                babelHelpers.extends({}, (s || (s = r("stylex"))).props(k), {
                  children: E,
                }),
              ),
              c.jsx("div", {
                className: "x16ovd2e x2b8uid",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  children: f,
                }),
              }),
            ],
          })
        : c.jsx(
            "div",
            babelHelpers.extends({}, (s || (s = r("stylex"))).props(k), {
              role: "group",
              children: E,
            }),
          );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
